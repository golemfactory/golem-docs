---
description: Creating your own decentralized Golem Applications
title: Creating Golem dApps
---

# Creating Golem dApps

## Components specification

Just as it would be the case with any other platform, you start with a specification of components comprising your application.

For now, we’re going to assume that everything is run on Golem’s virtual machine (VM) runtime. Although individual Golem providers can run any number of runtime environments, and we even provide Golem Runtime SDK to create your own custom runtimes, the default provider configuration right now includes just two - the VM runtime and the WASM runtime. Additionally, of these two, only the former is directly supported by the Golem Deploy platform at present.

As the virtual machine image format that the VM runtime operates on is derived from Docker, the decision then comes down to packaging your app into a number of Docker containers. Of course it’s up to an application developer to decide how exactly to proceed here. Still, there are a few criteria that should be considered here.

While it would, in most cases, be easier to set-up your app as a single image, it is bound to make the application as a whole a lot harder to maintain. Imagine you’d like to replace or update one of the components. In the case of a single image, you’d need to rebuild and re-upload the whole thing instead of just one piece. Secondly, it’s much easier to test and debug each component of your app if they’re logically partitioned than it would be if you had just one large box.

Another important point to consider is that each VM image is run on a different Golem provider. Having smaller and more specialized images will make it easier for providers to run each one, and it will also make your app easier to scale in the long term.

The obvious downside is that you’re paying for each running VM image and additionally, there is always a communications overhead incurred when the components connect over the Golem Network. That’s why you should always consider the advantages and disadvantages of both approaches when designing your own decentralized apps for Golem.

## Preparing Golem VM images

Golem’s virtual machine runtime uses its own image format, which is derived from Docker’s, and we offer a tool to convert the images from Docker to GVMI (Golem Virtual Machine Image).

For instructions on how to create a Golem VM image, please refer to:

[Converting a Docker image to the Golem image Tutorial](/docs/creators/javascript/examples/tools/converting-docker-image-to-golem-format)

What should be kept in mind is that there are still important discrepancies between the VM runtime and Docker’s own execution environment. We’re providing a non-exhaustive list of those in: [Differences between Docker containers and Golem VM runtime](/docs/creators/dapps/docker-containers-vs-golem-vms)

For a GVMI image to be used by providers, it needs to be published somewhere where it can be downloaded. The easiest way to do this is by uploading it to the Golem image repository. For instructions, please refer to: [Publishing a Golem image](/docs/creators/javascript/examples/tools/publishing-custom-images)

If the image is uploaded to the repository, its hash is the only piece of information needed for the image to be retrieved and used by providers. If it’s available under a different, publicly-available URL, both the image hash and the URL need to be supplied.

The above is true if the image uses a default set of privileges, or - in other words - if it doesn’t need to access external internet locations. To enable outbound internet access from VM runtimes, the images need to be accompanied by [Manifest files](/docs/creators/dapps/creating-golem-dapps#manifest-files).

## Manifest files

To enable some additional features, images may need to be accompanied by manifest files. Currently, the only feature that requires a manifest is outbound network location access. Therefore, if you wish to access any external URLs from within your application, the container from which the connections will originate must be supplied as a manifest file.

Apart from containing the location of the VM image and its hash, the manifest files specify what operations a given image can invoke and - among others - what network protocols it uses and what external URLs it accesses.

### Format

The manifests are JSON files conforming to a specific schema, e.g.:

```json
{
  "version": "0.1.0",
  "createdAt": "2022-12-01T00:00:00.000000Z",
  "expiresAt": "2100-01-01T00:00:00.000000Z",
  "payload": [
    {
      "platform": {
        "arch": "x86_64",
        "os": "linux"
      },
      "urls": [
        "http://girepo.dev.golem.network:8000/docker-gas_scanner_backend_image-latest-91c471517a.gvmi"
      ],
      "hash": "sha3:05270a8a938ff5f5e30b0e61bc983a8c3e286c5cd414a32e1a077657"
    }
  ],
  "compManifest": {
    "version": "0.1.0",
    "script": {
      "commands": ["run .*"],
      "match": "regex"
    },
    "net": {
      "inet": {
        "out": {
          "protocols": ["http"],
          "urls": ["http://bor.golem.network"]
        }
      }
    }
  }
}
```

For more detailed information regarding the manifest files, the schema they use and their usage in Golem, please refer to: [Computation Payload Manifest](/docs/golem/payload-manifest/index).

### **Manifest signatures**

While a manifest is needed to enable an image to access _any_ external locations, some locations have been whitelisted so that connecting to them doesn’t require anything besides that.

For a complete list of those locations, please refer to:

[ya-installer-resources/whitelist at main · golemfactory/ya-installer-resources](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist)

Each provider can freely add new addresses and patterns to the whitelist. For documentation on how to do that, please refer to:

[Yagna CLI](/docs/providers/yagna-cli-reference)

If the application wishes to access a URL which matches one of the entries on a whitelist, it only needs to supply that address within the manifest file.

Locations from outside the above whitelist, additionally require the manifest to be signed using a requestor certificate trusted by a provider. By default, providers trust certificates issued by Golem Factory, but they can clear others at their leisure.

### **Accessing non-standard ports**

One important caveat is that specifying a URL in the manifest only enables the image to access a service located under the standard port, e.g. `http://github.com` will only enable requests that access port `80` on GitHub. To be able to query a non-standard port, the manifest must specify that location along with the specific port, e.g.:

```json
"net": {
        "inet": {
          "out": {
            "protocols": [
              "http"
            ],
            "urls": [
                "http://bor.golem.network:4242",
                "http://bor.golem.network:8080",
            ]
          }
        }
      }
```

At the moment, the manifests provide no way to specify a port range or a wildcard that would include all the ports on a given address. Therefore, if you need to access any ports other than the default, you must include several lines in the manifest, each with a different port number.

## Testing the images

Before deploying the app to Golem, you may wish to test it.

One way to do this is by bundling it with `docker-compose` and verifying that all of its components work as intended when launched as a whole. Of course, there are currently quite a few differences between Docker and Golem. Therefore, confirming that your application works correctly on the former is not yet a guarantee of success when launched on the latter, but it still remains a great way of ensuring no detail has been missed at this stage.

### ya-runtime-dbg

Other than that, each singular image comprising your application may be tested separately using a tool known as `ya-runtime-dbg`. It’s especially useful if you encounter an elusive, hard-to-pinpoint issue when trying to launch your app on Golem. For more information, please refer to:

[Testing a Golem image tutorial](/docs/creators/javascript/tutorials/testing-golem-image)

#### Lack of network connectivity in ya-runtime-dbg

The main issue with testing your apps this way is that `ya-runtime-dbg` doesn’t currently offer a way to expose the network ports of services within the image nor does it allow an app running inside it to access any external network locations.

## Application descriptor

Now that your VM images and manifest files are ready, it’s time to combine them into a Golem Deploy application. Golem’s decentralized app descriptors are YAML files, vaguely similar to those used by docker-compose.

Example app descriptor for a two-layer HTTP + DB application:

```yaml
meta:
  name: "Simple, db-enabled web application."
  description: "An example showcasing a trivial web application consisting of a
  web server and a database host deployed together on the Golem Network.
  "
  author: "Golem Factory"
  version: "0.1.0"
payloads:
  db:
    runtime: "vm"
    params:
      image_hash: "85021afecf51687ecae8bdc21e10f3b11b82d2e3b169ba44e177340c"
  http:
    runtime: "vm"
    params:
      image_hash: "c37c1364f637c199fe710ca62241ff486db92c875b786814c6030aa1"
nodes:
  db:
    payload: "db"
    init:
      - run:
          args:
            - "/bin/run_rqlite.sh"
    network: "default"
    ip:
      - "192.168.0.2"
  http:
    payload: "http"
    init:
      - run:
          args: ["/bin/bash", "-c", "cd /webapp && python app.py --db-address 192.168.0.2 --db-port 4001 initdb"]
      - run:
          args: ["/bin/bash", "-c", "cd /webapp && python app.py --db-address 192.168.0.2 --db-port 4001 run > /webapp/out 2> /webapp/err &"]
    http_proxy:
      ports:
        - "5000"  # specify just the remote port, allow the local port to be automatically chosen
    network: "default"
    ip:
      - "192.168.0.3"
    depends_on:
      - "db"
networks:
  default:
    ip: "192.168.0.0/24"
```

The schema of the app descriptors is described as part of [GAP-16](https://github.com/golemfactory/golem-architecture/blob/master/gaps/gap-16_golem_deploy/gap-16_golem_deploy.md) on GitHub:

There are three important root elements of the descriptor, namely `payloads`, `nodes`, and `networks`.

### Payloads

The payloads part enumerates all the VM images or other runtime definitions that constitute components of your application. Each of the payloads translates to a demand published on the Golem Network to which any providers eager to run them will respond.

As mentioned earlier, in case of the VM runtime, the payload may be an image hash or - if your image needs to access external URLs - a base64-encoded manifest.

### Nodes

If the payloads could be said to describe the “what” of your app, the nodes part describes the “how”. Each entry translates to a service that’s deployed to a provider. Each service must obviously specify the payload that it uses.

#### `init`

Services need to specify any and all ExeScript commands that must be run in order for a given service to start. Those commands comprise the content of the `init` clause. Currently, only the `run` command is supported by the `dapp-runner`.

Example initialization ExeScript:

```yaml
init:
  - run:
      args: ['/bin/chmod', 'a+x', '/']
  - run:
      args: ['/bin/bash', '-c', '/bin/run_web.sh 192.168.0.3 &']
```

#### network and ip

Most of the applications consisting of more than one node will likely require the individual nodes to be connected to each other. That’s what the `network` and `ip` elements are for. As expected, they specify, respectively, which of the defined networks a given node should be part of and what IP address should be assigned to the node within the network.

Example definition:

```yaml
network: "default"
    ip:
      - "192.168.0.4"
```

#### depends_on

In addition to enumerating the services, you may wish to specify dependencies between them. If e.g. your back-end application assumes that it can connect to a database when it starts, you’ll need the database to be up and running already when you start the back-end. In such a case, your back-end component should specify a `depends_on` element pointing to the DB node. The startup of the back-end will then only be executed once the database is confirmed to have started successfully.

Example:

```yaml
depends_on:
  - 'api'
```

#### http_proxy and tcp_proxy

Those two components specify the two currently supported ways of exposing a service within your app to the outside world. Both of them open a local port on the requestor machine and route the traffic to your application through that open port.

Example:

```yaml
http_proxy:
  ports:
    - '80'
```

You can specify just one port or a colon-separated mapping. If a single number is specified, the given remote port will be mapped to an automatically-chosen local port. On the other hand, specifying another number after a colon will attempt to map the remote port to this specific local port but will fail if it is already taken.

Once a service is launched and `dapp-runner` succeeds in starting a local proxy, it will emit the following message to the `data` stream:

```json
{ "cache": { "local_proxy_address": "http://localhost:8080" } }
```

You should be able to access your service using that published URL.

The chief difference between the HTTP proxy and the generic TCP socket proxy is that the first one is protocol-aware and limited to HTTP only. The second one is more versatile and connects to any TCP services (e.g. databases, SSH services, etc) running on the provider nodes.

The tradeoff is that only the HTTP proxy can be used with external platforms exactly because, in order to correctly map the addresses, the platform must be able to interpret the incoming requests.

Again, please note that both types of connections are only exposed through ports on the same machine that `dapp-runner` is running on. In the future, we’re planning to support remote relays that will enable connections to services to be made without requiring the requestor’s active participation.

## Running the application

### dapp-runner

The most straightforward way of running your dApp on Golem currently is by using `dapp-runner` directly. Dapp-runner is our reference implementation of the Golem Deploy model, able to take your application descriptor and connect to a Yagna service to first orchestrate deployment of all the components of your app and then supervise their state.

Extensive information on running and installing the `dapp-runner` can be found in its README:

[See dapp-runner on GitHub](https://github.com/golemfactory/dapp-runner/).

### dapp-manager

While starting apps with the `dapp-runner` is the simplest and most straightforward way of starting and testing your dApps on Golem, it may become cumbersome when you wish to run multiple apps at the same time.

That’s where `dapp-manager` comes in - it makes it more convenient to launch multiple apps and monitor their states alongside.

Again, for details on the installation and running of `dapp-manager`, have a look at its documentation in the github repository:

[See dapp-manager on GitHub](https://github.com/golemfactory/dapp-manager/).

As an additional perk, using `dapp-manager` enables you to more conveniently interact with running services using `dapp-manager exec` command in case you wish to debug or tweak the service after it has been deployed.

## Additional tools

### Connecting to services running on the providers

As mentioned in the application descriptor section above ([`http_proxy` and `tcp_proxy`](/docs/creators/dapps/creating-golem-dapps#http_proxy-and-tcp_proxy)) by specifying a `http_proxy` or `tcp_proxy` in the application descriptor, you enable a given port within the node to be accessed using a local port on the requestor’s machine.

#### Local HTTP proxy

To enable a HTTP proxy, use the `http_proxy` property of a `node` entry, e.g.:

```yaml
nodes:
  http:
    #
    # (other properties)
    #
    http_proxy:
      ports:
        - '80'
```

This enables an automatically-chosen local port to be mapped to a remote port. Once the service is completely initialized on the remote node, dapp-runner emits a data message with a location of the mapped port:

```json
{ "backend": { "local_proxy_address": "http://localhost:8081" } }
```

You can then use your browser or any other HTTP-based tool to access the service. Choosing the HTTP proxy has two benefits as compared with the generic TCP proxy. First, it causes requests and responses to be logged by the `dapp-runner` and allows for easier debugging in case of issues. Secondly, and possibly more importantly, it allows the service exposed in this way to be available when the application is deployed on Golem's Portal.

#### TCP proxy

As opposed to the HTTP proxy, the TCP proxy opens a generic, two-way connection between the specified remote port and a local port. It is enabled using, e.g.:

```yaml
nodes:
  mongo:
    #
    # (other properties)
    #
    tcp_proxy:
      ports:
        - '27017'
```

After the given node has finished its startup, dapp-runner emits a data message giving the location of the mapped port:

```json
{ "mongo": { "local_tcp_proxy_address": "localhost:8080" } }
```

Using a generic TCP proxy enables connections to all kinds of TCP-based services. You can use it to connect directly to a database, an SSH server, or other kinds of services. This may be useful for debugging purposes or maybe because running a database on a provider that you connect to from the outside is exactly what you want to use Golem Deploy framework for.

### Running commands on the remote nodes

While developing, testing, or just using your app, you might want to access a shell or execute additional commands on the deployed service nodes. Dapp-manager’s `exec` command serves exactly this purpose.

#### Usage

Given a node named `backend`, and assuming the image contains the `/bin/bash` binary you could execute a command this way:

```bash
$ dapp-manager exec <insert_app_id> backend -- /bin/bash -c "ls -alh"
```

#### Issues

Because those commands are sent as ExeScripts to the underlying Golem Activity, the main issue currently is that any error while executing such a command is treated as a failure of the activity in question and both the activity and the agreement are immediately terminated by the provider.

As a work-around, one could e.g. bundle and start an SSH service in your image and connect to it using a [TCP proxy](/docs/creators/dapps/creating-golem-dapps#tcp-proxy).

For an illustration of such usage, please refer to the following `yapapi` SSH connection example:

[See SSH example on GitHub](https://github.com/golemfactory/yapapi/tree/master/examples/ssh)
