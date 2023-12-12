---
title: Service API VPN - SSH Connection Tutorial
description: Discover how to establish SSH connections via VPN on the Golem Network, using the provided example to interact with VMs on provider nodes.
pageTitle: Golem Network Tutorial - Secure SSH Access Through VPN | Golem SDK
type: Tutorial
---

# Service Example 2: VPN - SSH terminal

## Introduction

This example illustrates the following Golem features & aspects:

- VM runtime image
- Service execution
- Golem VPN

{% alert level="info" %}
The code and components presented here are included as an example within the yapapi repository: [https://github.com/golemfactory/yapapi/tree/master/examples/ssh](https://github.com/golemfactory/yapapi/tree/master/examples/ssh)
{% /alert %}

{% alert level="warning" %}
Some of the options of the `websocat` tool used in this tutorial are available only in the Linux version of the tool.
{% /alert %}

## Prerequisites

If you'd like to run the included example, please make sure that you have followed the [requestor's quick primer](/docs/creators/python/examples/tools/yagna-installation-for-requestors) and were able to [run your first task on Golem](/docs/creators/python/quickstarts/run-first-task-on-golem). Those articles describe in detail the steps needed to correctly set up your yagna daemon and your environment.

### Websocat

Additonally, because the connection from the requestor's machine to a port within the VPN is performed through a websocket exposed by the requestor daemon's REST API, an additional tool named `websocat` is needed to wrap this connection so that it can be used by the regular SSH client.

You can install `websocat` using instructions on its website: [https://lib.rs/crates/websocat](https://lib.rs/crates/websocat)

## Definition of the VM image

The only purpose of the service that will be launched inside the VM on the Provider's end is to allow incoming SSH connections.

Therefore, on top of a pretty bare `alpine` linux image, we're just going to add a small set of commands which installs and configures the components required to launch an SSH server within this VM container.

This is how the resultant Dockerfile (`ssh/Dockerfile`) looks like:

```
FROM alpine:latest

RUN apk add --no-cache --update bash openssh iproute2 tcpdump net-tools screen
RUN echo "UseDNS no" >> /etc/ssh/sshd_config && \
    echo "PermitRootLogin yes" >> /etc/ssh/sshd_config && \
    echo "PasswordAuthentication yes" >> /etc/ssh/sshd_config
```

If you'd like to experiment with modifying it, please refer to our articles about [custom VM images](/docs/creators/python/guides/golem-images).

## The requestor agent

{% alert level="info" %}
**This is the part that's run by the requestor (you).**
{% /alert %}

Now we can move on to the requestor agent, which will create a VPN, attach the Provider node to it, and allow SSH connections via the Net gate available on the `yagna` daemon.

The full source code of the requestor agent is available in yapapi's github repo: [https://github.com/golemfactory/yapapi/tree/master/examples/ssh/ssh.py](https://github.com/golemfactory/yapapi/tree/master/examples/ssh/ssh.py).

Here, we're going to go through the most important excerpts.

### Golem and Network configuration

```python
async with Golem(
    budget=1.0,
    subnet_tag=subnet_tag,
    payment_driver=payment_driver,
    payment_network=payment_network,
) as golem:
    network = await golem.create_network("192.168.0.1/24")
    async with network:
        ...
```

The `create_network` method is used to define a new virtual network with `192.168.0.1/24` as the network's IP address, including the netmask. This network will then be passed when instantiating the services and the spawned instances of the service will automatically be connected to this network.

Note that we're using the network as a context manager to ensure that once we've finished using it, the appropriate code that performs the removal and cleanup of the network is executed.

### Service specification

Without much further ado, let's go through our service definition. First, we inherit from the `Service` class and define the payload we require the providers to run.

```python
class SshService(Service):
```

#### Payload definition

```python
@staticmethod
async def get_payload():
    return await vm.repo(
        image_hash="ea233c6774b1621207a48e10b46e3e1f944d881911f499f5cbac546a",
        min_mem_gib=0.5,
        min_storage_gib=2.0,
        capabilities=[vm.VM_CAPS_VPN],
    )
```

As is the case with most of the examples that we're presenting in the handbook, the payload here is a VM-image defined through a helper function (`vm.repo`) and using the hash of the file uploaded to [Golem's image registry](/docs/creators/python/examples/tools/converting-docker-image-to-golem-format).

Note though, that now the payload constraints also indicate that the Provider is **required to offer the VPN capability** within its VM runtime, which is automatically supported by any providers running `yagna 0.8`and above.

#### Service phase handlers

The service launched is really simple - it is only expected to launch the payload, set the password to something we know and keep it running indefinitely (so that a user can connect to the VM using an SSH client).

#### Start handler

```python
async def start(self):
    # perform the initialization of the Service
    # (which includes sending the network details within the `deploy` command)
    async for script in super().start():
        yield script

    password = "".join(random.choice(string.ascii_letters + string.digits) for _ in range(8))

    script = self._ctx.new_script(timeout=timedelta(seconds=10))
    script.run("/bin/bash", "-c", "syslogd")
    script.run("/bin/bash", "-c", "ssh-keygen -A")
    script.run("/bin/bash", "-c", f'echo -e "{password}\n{password}" | passwd')
    script.run("/bin/bash", "-c", "/usr/sbin/sshd")
    yield script

    connection_uri = self.network_node.get_websocket_uri(22)
    app_key = self.cluster._engine._api_config.app_key

    print(
        "Connect with:\n"
        f"{TEXT_COLOR_CYAN}"
        f"ssh -o ProxyCommand='websocat asyncstdio: {connection_uri} --binary -H=Authorization:\"Bearer {app_key}\"' root@{uuid4().hex}"
        f"{TEXT_COLOR_DEFAULT}"
    )

    print(f"{TEXT_COLOR_RED}password: {password}{TEXT_COLOR_DEFAULT}")
```

In the `start` stage, the Requestor sends commands to launch the SSH daemon, then displays a helper note illustrating the command required to connect a local SSH client to the Provider's VM followed by the just-generated password that has been set on that host.

Please note the line 16 above which retrieves the websocket URI that is the gateway that the yagna daemon exposes in its Net API which allows us to connect to any port on the deployed VM.

This websocket is part of the REST API itself and hence the need to also authenticate the connection using the yagna app key (that's the same key that we use to connect to all the other endpoints in the REST API and which we provide to yapapi using YAGNA_APPKEY environment variable).

### Starting our service

```python
cluster = await golem.run_service(SshService, network=network, num_instances=2)
```

Note how the `network` is passed as a parameter to `run_service()`. The service instances created in the cluster will be added as subsequent nodes in the virtual network, and their addresses will be available in the `network_node` attribute of each `Service` instance.

{% alert level="success" %}
We have just managed to run a service in a new VPN on Golem!
{% /alert %}

#### Controlling and monitoring our service

The rest of the `main` function in `ssh.py` is just devoted to tracking the state of the commissioned instances for a short while and then instructing the cluster to stop:

```python
    def instances():
        return [f"{s.provider_name}: {s.state.value}" for s in cluster.instances]

    while True:
        print(instances())
        try:
            await asyncio.sleep(5)
        except (KeyboardInterrupt, asyncio.CancelledError):
            break

    cluster.stop()

    cnt = 0
    while cnt < 3 and any(s.is_available for s in cluster.instances):
        print(instances())
        await asyncio.sleep(5)
        cnt += 1
```

### Connecting using SSH client

Once the ssh.py is launched and the SSH server is up and running on a Provider, use a command similar to the one below to connect to it using SSH client. The specific command to use will be generated for each instance and for each run separately, here's just a general example:

```python
ssh -o ProxyCommand='websocat asyncstdio: localhost:22 --binary -H=Authorization:\"Bearer YAGNA_APP_KEY\"
```

{% alert level="info" %}
Note in your command-line you must use a Yagna App Key as generated during your initial `yagna` service setup.

This is necessary, as the connection to the Net gate on a websocket needs to be authenticated!
{% /alert %}

Once you launch the SSH client and approve the host's SSH key you'll need to use the password generated alongside the connection command above to log in to the provider's VM.

Voila! You should now be logged-in into the VM's shell.

{% docnavigation title="Next steps" %}

- The next article takes a close look at [another networking example](/docs/creators/python/tutorials/service-example-3-vpn-simple-http-proxy).

{% /docnavigation %}
