---
title: Golem Service Model Tutorial - Running DateService on the Network
pageTitle: Run a Service on Golem Network - DateService Example Tutorial | Golem SDK Docs
description: Learn to run a custom DateService using the Golem Service Model with this step-by-step tutorial, showcasing service life cycle, payload, and VM execution.
type: Tutorial
---

# Service Example 0: Hello world?

## Introduction

This example illustrates the following Golem features & aspects:

- VM runtime
- Service provisioning and execution
- Retrieving command output from the provider's ExeUnit

## Prerequisites

This example shares a number of concepts, as well as parts of its code with the task model "Hello World!". Therefore the below article can be considered a good introduction:
[Quickstart](/docs/creators/python/quickstarts/run-first-task-on-golem).

Also, in case you haven't done so already, it's a good idea to take a look at the [Introduction to the service model](/docs/creators/python/guides/service-model) before proceeding.

## Requestor agent code

```python
#!/usr/bin/env python3
import asyncio
from datetime import datetime, timedelta

from yapapi import Golem
from yapapi.services import Service
from yapapi.log import enable_default_logger
from yapapi.payload import vm

DATE_OUTPUT_PATH = "/golem/work/date.txt"
REFRESH_INTERVAL_SEC = 5


class DateService(Service):
    @staticmethod
    async def get_payload():
        return await vm.repo(
            image_hash="d646d7b93083d817846c2ae5c62c72ca0507782385a2e29291a3d376",
        )

    async def start(self):
        async for script in super().start():
            yield script

        # every `DATE_POLL_INTERVAL` write output of `date` to `DATE_OUTPUT_PATH`
        script = self._ctx.new_script()
        script.run(
            "/bin/sh",
            "-c",
            f"while true; do date > {DATE_OUTPUT_PATH}; sleep {REFRESH_INTERVAL_SEC}; done &",
        )
        yield script

    async def run(self):
        while True:
            await asyncio.sleep(REFRESH_INTERVAL_SEC)
            script = self._ctx.new_script()
            future_result = script.run(
                "/bin/sh",
                "-c",
                f"cat {DATE_OUTPUT_PATH}",
            )

            yield script

            result = (await future_result).stdout
            print(result.strip() if result else "")


async def main():
    async with Golem(budget=1.0, subnet_tag="public") as golem:
        cluster = await golem.run_service(DateService, num_instances=1)
        start_time = datetime.now()

        while datetime.now() < start_time + timedelta(minutes=1):
            for num, instance in enumerate(cluster.instances):
                print(f"Instance {num} is {instance.state.value} on {instance.provider_name}")
            await asyncio.sleep(REFRESH_INTERVAL_SEC)


if __name__ == "__main__":
    enable_default_logger(log_file="hello.log")

    loop = asyncio.get_event_loop()
    task = loop.create_task(main())
    loop.run_until_complete(task)

```

Besides the usual boilerplate in the form of imports and the entry function there are two crucial pieces to this program:

1. `DateService` class, which is the implementation of our example service. It defines how the service should be started and what action it should perform.
2. `main()` function, which creates an instance of `Golem` to take care of provisioning our service using the Golem network.

Let's now take a closer look at both of the components mentioned above.

## Service implementation

In the Golem API, services are implemented by extending the base `Service` class. By overriding certain methods from that class we can define our service's life cycle, as well as its payload. Here's an overview of this interface:

- `get_payload() -> Optional[Payload]` returns the `Payload` object which describes the execution environment we want our service instances to run on. In the case of the VM runtime this will include a hash of the VM image to be deployed. If we choose not to implement this method our payload will need to be specified when running the service through `Golem.run_service`.
- `start() -> None` called for each service instance when it enters the `starting` state. This should contain the sequence of steps which need to be taken in order for our service to be started.
- `run() -> None` called for each service instance when it enters the `running` state. This is where the main loop of our service should be implemented.
- `shutdown() -> None` called for each service instance when it enters the `stopping` state. In case our service requires some cleanup logic to be run before an instance is terminated, this is where it should be placed.

All three life cycle methods (i.e. `start`, `run` and `shutdown`) are optional, although in most cases a service will require at least `start` to be implemented.

{% alert level="info" %}
To control service instances running on remote ExeUnits, all life cycle methods require access to a `WorkContext` object tied to some active instance.

This `WorkContext` instance is provided through the field `self._ctx` of the `Service` class. This means that, behind the scenes, an object of our `Service` subclass is spawned for each service instance running on a provider.
{% /alert %}

### payload definition

```python
@staticmethod
async def get_payload():
    return await vm.repo(
        image_hash="d646d7b93083d817846c2ae5c62c72ca0507782385a2e29291a3d376"
    )
```

Our `DateService` uses the same image hash as the [Task Example 0: Hello World!](/docs/creators/python/tutorials/task-example-0-hello). This hash points to a pre-uploaded, minimal image based on Alpine Linux.

### start() function

```python
async def start(self):
    async for script in super().start():
        yield script

    # every `DATE_POLL_INTERVAL` write output of `date` to `DATE_OUTPUT_PATH`
    script = self._ctx.new_script()
    script.run(
        "/bin/sh",
        "-c",
        f"while true; do date > {DATE_OUTPUT_PATH}; sleep {REFRESH_INTERVAL_SEC}; done &",
    )
    yield script

```

Our `start` function is responsible for starting a background process on the provider's ExeUnit. In the case of `DateService` this process is going to be the following shell command:

```bash
while true; do date > /golem/work/date.txt; sleep 5; done &
```

The above command has its placeholders substituted with their actual default values. When run in the provider's ExeUnit, this will keep rewriting the file `/golem/work/date.txt` with the output of `date` every 5 seconds.

The file `/golem/work/date.txt` will be our source of data which we'll later on read in our service's `run` function.

### run() function

```python
async def run(self):
        while True:
            await asyncio.sleep(REFRESH_INTERVAL_SEC)
            script = self._ctx.new_script()
            future_result = script.run(
                "/bin/sh",
                "-c",
                f"cat {DATE_OUTPUT_PATH}",
            )

            yield script

            result = (await future_result).stdout
            print(result.strip() if result else "")
```

This function is where the requestor agent has a chance to monitor and control each running service instance. In the case of our example we periodically monitor values generated on a service instance by printing them out to the console.

To retrieve the last sample we run the shell command `cat /golem/work/date.txt` in the provider's ExeUnit and then retrieve its output by awaiting on `future_results`. This gives us an array of objects containing command results which we can use to get the output we need.

With the service implementation complete let's now take a look at how we can provision instances of this service.

## Service provisioning

```python
async def main():
    async with Golem(budget=1.0, subnet_tag="public") as golem:
        cluster = await golem.run_service(DateService, num_instances=1)
```

In the function `main` we start by creating an instance of `Golem`, specifying our budget and target subnet. We then use it as a context manager to run our service.

{% alert level="info" %}
If you are not familiar with the `Golem` class and/or how it's used in these examples, take a look at [Task Example 0: Hello World!](/docs/creators/python/tutorials/task-example-0-hello#golem-executor) (this links to a section about the `Golem/Executor` classes).
{% /alert %}

Provisioning our service is done using the method `run_service` which, in our example, is given two parameters:

- `service_class` is the class extending `Service` which will be used as the definition for each of our service instances.
- `num_instances` is the number of service instances we'd like to create.

Awaiting on `run_service` returns a `Cluster` object. This is a wrapper around a collection of `Service` objects, in our case these will be `DateService` objects. Each of these objects represents a single instance of our service provisioned on the Golem network. The `Cluster` can be used to control the state of those service instances (e.g. to stop services if necessary).

### Monitoring service state

```python
cluster = await golem.run_service(DateService, num_instances=1)
start_time = datetime.now()

while datetime.now() < start_time + timedelta(minutes=1):
    for num, instance in enumerate(cluster.instances):
        print(f"Instance {num} is {instance.state.value} on {instance.provider_name}")
    await asyncio.sleep(REFRESH_INTERVAL_SEC)
```

To monitor our cluster we're going to periodically query the instances' state and print relevant information to the console.

Apart from monitoring itself this part also controls the time for which we want to keep our service running. In our case, the `while` loop will run for a minute, relative to `start_time`. After this time the loop will break and we'll exit `Golem`'s context manager, triggering its cleanup logic.

Using the `Cluster` object's `instances` field we can iterate over our service instances and inspect their state. `instance.state` gives us a `StateMachine` associated with the given instance. It can be in one of five states: `starting`, `running`, `stopping`, `terminated` and `unresponsive`.

## All done!

That's it!

We can now try running our service. Assuming you have a `yagna` node active locally (refer to the [Yagna installation](/docs/creators/tools/yagna/yagna-installation-for-requestors) in case of any doubts) and `yapapi` library installed, you can start the example by running the below command from the example's directory:

{% tabs %}
{% tab label="MacOS / Linux" %}

```bash
YAGNA_APPKEY={your_appkey_here} ./hello_service.py
```

{% /tab %}
{% tab label="Windows" %}

```bash
set YAGNA_AUTOCONF_APPKEY=try_golem
python hello_service.py
```

{% /tab %}
{% /tabs %}

Once the service gets provisioned on a provider you should see log lines similar to the ones below (some parts are abridged for clarity):

```
[2021-06-16 13:42:42,969 INFO yapapi.services] <DateService: eaddc033960d48d0a04801a91bdca489> commissioned
[2021-06-16 13:42:42,970 INFO yapapi.summary] Task started on provider 'friendly-winter', task data: Service: DateService
Instance 0 is starting on friendly-winter
Instance 0 is running on friendly-winter
Wed Jun 16 11:42:48 UTC 2021
Instance 0 is running on friendly-winter
Wed Jun 16 11:42:53 UTC 2021
...
[2021-06-16 13:43:50,890 INFO yapapi.summary] Terminated agreement with friendly-winter
[2021-06-16 13:43:50,987 INFO yapapi.executor] Golem is shutting down...
[2021-06-16 13:43:50,987 INFO yapapi.executor] All jobs have finished
[2021-06-16 13:43:50,987 INFO yapapi.executor] 1 agreement still unpaid, waiting for invoices...
[2021-06-16 13:43:52,960 INFO yapapi.summary] Accepted invoice from 'friendly-winter', amount: 0.002412786162893529
...
```

In the case of our example we run a single instance of the service. Once that instance changes its state to `running` we start seeing output from the `date` command running inside the VM. After our set period of time (i.e. 1 minute) the agreement gets terminated and, after paying for the invoice, our program exits.

{% docnavigation title="Next steps" %}

- The next article takes a close look at a more complete example, including error handling and more complex [service control](/docs/creators/python/tutorials/service-example-1-simple-service)

{% /docnavigation %}
