---
title: Golem Network VPN & HTTP Proxy Service Tutorial
description: Learn to create a minimalistic HTTP proxy using Golem Network VPN functionality, enabling a local agent to route web server requests via provider nodes.
pageTitle: Implement a Minimalistic HTTP Proxy on Golem Network | VPN Service Tutorial
type: Tutorial
---

# Service Example 3: VPN - Minimalistic HTTP proxy

## Introduction

The example depicts the following features:

- Golem VPN
- Service execution

{% alert level="info" %}
Full code of the example is available in the yapapi repository: [https://github.com/golemfactory/yapapi/tree/master/examples/http-proxy](https://github.com/golemfactory/yapapi/tree/master/examples/http-proxy)
{% /alert %}

## Prerequisites

As with the other examples, we're assuming here you already have your [yagna daemon set-up to request the test tasks](/docs/creators/tools/yagna/yagna-installation-for-requestors) and that you were able to [configure your Python environment](/docs/creators/python/quickstarts/run-first-task-on-golem) to run the examples using the latest version of `yapapi`. If this is your first time using Golem and yapapi, please first refer to the resources linked above.

## The VM image

For the VM image of this example, we're going to use a stock Docker image of the `nginx` HTTP server. Thus, our Dockerfile consists of a single line:

```text
FROM nginx:stable-alpine
```

In the example code, we're already using a pre-built and pre-uploaded Golem VM image but if you'd like to experiment with other HTTP servers or web-based applications, please follow our guides on the preparation of your own VM [images for Golem](/docs/creators/python/tutorials/building-custom-image).

## The Code

What we'll want to achieve here is threefold - first, we'll want to define our service so that it runs our web content (here it's just a static, albeit customized, HTML page) on the provider node.

Secondly, we'll need a local HTTP server (based on the `aiohttp` library) listening to connections on our requestor machine (the localhost).

And thirdly, we'll show you how to distribute requests from the local HTTP server to the provider nodes.

### Running the remote HTTP server

Since, as mentioned above, we're mostly interested in running the stock nginx HTTP server image, there's not much to do besides defining the payload which uses the hash of our pre-uploaded nginx image:

```python
class HttpService(Service):
    @staticmethod
    async def get_payload():
        return await vm.repo(
            image_hash="16ad039c00f60a48c76d0644c96ccba63b13296d140477c736512127",
            # we're adding an additional constraint to only select those nodes that
            # are offering VPN-capable VM runtimes so that we can connect them to the VPN
            capabilities=[vm.VM_CAPS_VPN],
        )
```

The important part of the above payload definition is the addition of the `capabilities` constraint which specifies that we only want to deploy our image on those providers on which the VM runtime supports the new VPN functionality.

#### Remote http server initialization

Additionally, because so far, the GVMI format for VM images and yagna's VM runtime responsible for running the VM containers on the provider nodes does not support Docker's `ENTRYPOINT` and `CMD` commands, we'll need to start the nginx HTTP server with explicit execution script commands after the image is deployed. That's what the `start` handler for our `Service` is doing:

```python
async def start(self):
    # perform the initialization of the Service
    # (which includes sending the network details within the `deploy` command)
    async for script in super().start():
        yield script

    # start the remote HTTP server and give it some content to serve in the `index.html`
    script = self._ctx.new_script()
    script.run("/docker-entrypoint.sh")
    script.run("/bin/chmod", "a+x", "/")
    msg = f"Hello from inside Golem!\n... running on {self.provider_name}"
    script.run(
        "/bin/sh",
        "-c",
        f"echo {shlex.quote(msg)} > /usr/share/nginx/html/index.html",
    )
    script.run("/usr/sbin/nginx"),
    yield script
```

The first two lines (4-5 above) ensure that the default `start` handler, which sends the `start` and `deploy` commands gets correctly executed and the script it generates sent for execution.

The remainder of the method:

- calls the script (originally specified in the `ENTRYPOINT` command in the original Dockerfile) which configures the nginx daemon.
- sets up the correct permissions on the root directory so that the nginx daemon can access the directory containing the content
- creates the `index.html` file customized with the name of the provider node on which the server is running
- and finally, launches the `nginx` HTTP server

We don't need to specify the contents of the `run` handler for the service, since, after the HTTP daemon is started, there are no more scripts that we'll want to execute on the VM and we'll only need to communicate with the server using regular HTTP requests within our VPN.

### Running the local HTTP server

Okay, now that we have taken care of the provider-end, we need to provide the code which runs the local server.

We're using the `aiohttp` library to define a very simple TCP server which will listen to requests coming to a port on our localhost.

First, let's define the handler that will receive the local requests and generate responses:

```python
request_count = 0


async def request_handler(cluster: Cluster, request: web.Request):
    global request_count

    print(f"{TEXT_COLOR_GREEN}local HTTP request: {dict(request.query)}{TEXT_COLOR_DEFAULT}")

    instance: HttpService = cluster.instances[request_count % len(cluster.instances)]
    request_count += 1
    response = await instance.handle_request(request.path_qs)
    return web.Response(text=response)
```

As you can see, it's main job is to select (in a round-robin fashion) an instance of our `HttpService` and call its `handle_request` method using the path and the query string of the incoming HTTP request. Once the request is handled by the instance, an `aiohttp.webResponse` is returned.

Secondly, we need to provide a small bit of boilerplate that launches the local TCP server for us:

```python
async def run_local_server(cluster: Cluster, port: int):
    """
    run a local HTTP server, listening on `port`
    and passing all requests through the `request_handler` function above
    """
    handler = functools.partial(request_handler, cluster)
    runner = web.ServerRunner(web.Server(handler))
    await runner.setup()
    site = web.TCPSite(runner, port=port)
    await site.start()

    return site
```

Again, what it does it just define a local server that listens on the provided local port and uses the handler which we defined above to process all incoming requests.

### The proxy

Now we need to pass the local requests to the remote servers running on provider machines. That's the job of the `handle_request` method of our `HttpServer` class:

```python
async def handle_request(self, query_string: str):
    """
    handle the request coming from the local HTTP server
    by passing it to the instance through the VPN
    """
    instance_ws = self.network_node.get_websocket_uri(80)
    app_key = self.cluster._engine._api_config.app_key

    print(f"{TEXT_COLOR_GREEN}sending a remote request to {self}{TEXT_COLOR_DEFAULT}")
    ws_session = aiohttp.ClientSession()
    async with ws_session.ws_connect(
        instance_ws, headers={"Authorization": f"Bearer {app_key}"}
    ) as ws:
        await ws.send_str(f"GET {query_string} HTTP/1.0\n\n")
        headers = await ws.__anext__()
        print(f"{TEXT_COLOR_GREEN}remote headers: {headers.data} {TEXT_COLOR_DEFAULT}")
        content = await ws.__anext__()
        data: bytes = content.data
        print(f"{TEXT_COLOR_GREEN}remote content: {data} {TEXT_COLOR_DEFAULT}")
        response_text = data.decode("utf-8")
        print(f"{TEXT_COLOR_GREEN}local response: {response_text}{TEXT_COLOR_DEFAULT}")

    await ws_session.close()
    return response_text
```

The first thing we're doing here is getting the URI for the websocket which allows us to connect to the remote node. We use a helper method of the `network_node` record of the `Service`. As the URI is also an endpoint of our REST API, we need to pass it the API key - the same key that we get from our `yagna` daemon and that we provide to the requestor agent script using the `YAGNA_APPKEY` environment variable.

Next we establish a websocket connection using the aforementioned endpoint and the API key. Within the connection, we perform a HTTP/1.0 `GET` request using the path and the query string that we have received from the local HTTP server.

Once we receive a response from the remote HTTP server, we generate the response text which our previously-defined request handler will pass as the response of the local HTTP server.

That's all there is to it. What remains now is to run use the `Golem` engine to start our service.

## Launching the service

To launch the service, we first need to initialize `Golem`:

```python
async with Golem(
    budget=1.0,
    subnet_tag=subnet_tag,
    payment_driver=payment_driver,
    payment_network=payment_network,
) as golem:
    commissioning_time = datetime.now()
```

Once launched, we use it to perform two actions which will launch our service.

The first one creates the VPN through which the provider nodes will be part of and through which the requestor will be able to communicate with them:

```python
network = await golem.create_network("192.168.0.1/24")
```

The second one instructs the Golem engine to commission the service instances and - by passing the network created above in the `network` argument - connect them to the just-created VPN:

```python
cluster = await golem.run_service(HttpService, network=network, num_instances=num_instances)
```

After the above call, the engine publishes the appropriate demand, signs agreements and finally commissions the instances of our service.

### Waiting for the service to start

Now we wait...

```python
def instances():
    return [f"{s.provider_name}: {s.state.value}" for s in cluster.instances]

def still_starting():
    return len(cluster.instances) < num_instances or any(
        s.state == ServiceState.starting for s in cluster.instances
    )

# wait until all remote http instances are started

while still_starting() and datetime.now() < commissioning_time + STARTING_TIMEOUT:
    print(f"instances: {instances()}")
    await asyncio.sleep(5)

if still_starting():
    raise Exception(
        f"Failed to start instances after {STARTING_TIMEOUT.total_seconds()} seconds"
    )
```

### Starting the local HTTP server

Once the commissioned instances of our service are up and running, we can finally start the local HTTP server and announce its creation to the console:

```python
site = await run_local_server(cluster, port)

print(
    f"{TEXT_COLOR_CYAN}Local HTTP server listening on:\nhttp://localhost:{port}{TEXT_COLOR_DEFAULT}"
)
```

Then, again, we wait until the script is stopped with a Ctrl-C, allowing the service to run and our simple proxy to pass requests and responses between the local server and the remote ones.

At this stage, you can see it in action yourself by connecting to the address displayed. By default its location should be [http://localhost:8080](http://localhost:8080).

### Cleaning up

Finally, once Ctrl-C is send, it's appropriate to stop and clean-up our whole carefully-set-up machinery.

First we stop the local HTTP server:

```python
await site.stop()
print(f"{TEXT_COLOR_CYAN}HTTP server stopped{TEXT_COLOR_DEFAULT}")
```

Then we signal for the cluster to stop all of our service instances running on the provider nodes and wait for them to actually shut themselves down:

```python
cluster.stop()

cnt = 0
while cnt < 3 and any(s.is_available for s in cluster.instances):
    print(instances())
    await asyncio.sleep(5)
    cnt += 1
```

With all service instances stopped, we can finally shut down and remove the VPN we had created at the very beginning:

```python
await network.remove()
```

That's it. We have demonstrated a way to launch services on VM containers running within the provider nodes and to connect them using a VPN.

{% docnavigation title="Next steps" %}

- The next article takes a close look at [custom usage counters](/docs/creators/python/tutorials/service-example-4-custom-usage-counters) example.

{% /docnavigation %}
