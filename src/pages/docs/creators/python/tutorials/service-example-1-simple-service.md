---
title: Golem Simple Service API Tutorial
description: Learn to create VM-based services on Golem Network with this simplified tutorial.
pageTitle: Golem Network - Simple Service API Tutorial for VM-based Execution
type: Tutorial
---

# Service Example 1: Simple service

## Introduction

The idea behind this proof-of-concept, toy-like service is to demonstrate the basic features of the high-level API's Service model running on a regular VM runtime. In other words, utilizing only the existing features of both yagna and the API itself without relying on any additional resources (like custom runtime/ExeUnit implementation).

This example illustrates following Golem features & aspects:

- VM runtime
- Service execution
  - Interactive command results processing

{% alert level="info" %}
The code and components of this POC are included as an example within yapapi: [https://github.com/golemfactory/yapapi/tree/master/examples/simple-service-poc](https://github.com/golemfactory/yapapi/tree/master/examples/simple-service-poc)
{% /alert %}

## Prerequisites

If you'd like to run the included example, please make sure that you have followed the [requestor's quick primer](/docs/creators/python/examples/tools/yagna-installation-for-requestors) and were able to [run your first task on Golem](/docs/creators/python/quickstarts/run-first-task-on-golem).

## The service

{% alert level="info" %}
**This part gets deployed on the provider nodes** when the service is commissioned.

In reality, the provider part could be using some off-the-shelf Docker image with minor modifications to accommodate Golem (see the [services hello world example](/docs/creators/python/tutorials/service-example-0-hello-world) for the minimum needed modifications). The reason we're building our own toy/POC service here just to have a simple, tangible tool that we can interact with to show you the example usage of our Services API.
{% /alert %}

The service itself is rather simplistic and designed to reflect a mechanism that periodically polls some external data source and accumulates those observations in a database that can then be queried by the agent which has commissioned it.

If this was a real-life example, the data could come from some sensor connected to the provider's machine or be effect of the service e.g. polling some external API or web service. Here in our POC, it's just a background process that produces a stream of random numbers with a certain normal distribution.

### Components of our POC service

All components of the service itself - that is - the part that's actually running on a provider node, are included in a VM image and contained within the `simple_service` directory of the example. For the sake of simplicity, all the code is in Python and to limit the size of the VM image the providers need to download, we're relying on an official Python 3.8 slim image plus two additional Python libraries: `numpy` and `matplotlib`.

### Service back-end

The back-end's code resides in `simple_service/simple_service.py` file in the example's directory. It's a simple script with a command-line interface which accepts one of five commands. The usage is as follows:

```bash
usage: simple_service.py [-h]
                         (--add ADD | --init | --plot {time,dist} | --dump | --stats)

simple service

optional arguments:
  -h, --help          show this help message and exit
  --add ADD
  --init
  --plot {time,dist}
  --dump
  --stats
```

Where:

- `--init` is only ever executed once and creates an extremely simple sqlite database (one table with just two columns, the value and the timestamp of an observation) to hold observed values in,
- `--add` adds a single value to the stored list of observations,
- `--stats` provides a JSON structure containing a few metrics that reflect the characteristics of the distribution of the accumulated values (like the mean, deviation and the number of observations so far),
- `--plot` produces a graphical plot of accumulated observations (either as a time-series or as a distribution plot),
- and finally, `--dump` dumps the JSON-serialized contents of the whole database.

Example output of `--stats`:

```javascript
{"min": 8.127806186682104, "max": 22.792308388964692, "median": 13.850778661989605, "mean": 14.480742088585053, "variance": 12.239089690455327, "std dev": 3.4984410371557395, "size": 35}
```

Example output of `--plot`:

![example output](/rulkfjiudp.png)

### Source of data

As mentioned, if this was a real-life example, the data could perhaps come from some external sensor, API, website or some other source that we'd like our service to monitor. In our case, the "daemon" is just a simple loop that simulates observations of such a source by generating random values once a second.

All generated values are then appended to the database by calling the back-end with the `--add` parameter.

The daemon's code is contained in `simple_service/simulate_observations.py`:

```python
import ...

MU = 14
SIGMA = 3

SERVICE_PATH = Path(__file__).absolute().parent / "simple_service.py"


while True:
    v = random.normalvariate(MU, SIGMA)
    os.system(f"{SERVICE_PATH} --add {v}")
    time.sleep(1)
```

### Control script

The final piece of code is the daemon's control script `simple_service/simulate_observations_ctl.py` , the role of which is to enable starting and stopping the daemon. It's again a CLI tool that accepts just one of the two parameters: `--start` and `--stop` which, quite obviously, respectively start and stop the background process which generates the simulated observations.

### Dockerfile

Finally, we put all of the above components together using the following Dockerfile (`simple_service/simple_service.Dockerfile`), built on top of Python 3.8's slim image.

```
FROM python:3.8-slim
VOLUME /golem/in /golem/out
COPY simple_service.py /golem/run/simple_service.py
COPY simulate_observations.py /golem/run/simulate_observations.py
COPY simulate_observations_ctl.py /golem/run/simulate_observations_ctl.py
RUN pip install numpy matplotlib
RUN chmod +x /golem/run/*
RUN /golem/run/simple_service.py --init
ENTRYPOINT ["sh"]
```

What it does is:

- declare the appropriate input/output directories through which files can be exchanged between the VM and the outside world,
- copy all the Python scripts to the appropriate location within the image and make all of them executable,
- install the two additional requirements of our service: `numpy` and `matplotlib`,
- initalizes the service's sqlite database so that it doesn't have to be done in runtime,

{% alert level="warning" %}
It's important to note that the `ENTRYPOINT` statement, though included, is there just for convenience when testing the image in Docker itself. That entrypoint is ignored by Golem's VM runtime and all commands need to be refered to by their absolute paths (`/golem/run...`)
{% /alert %}

### Building the image

The requestor agent script included in the example already contains the hash of the image that has been built by us and uploaded to Golem's VM image repository.

When building your own application though, you'd need to create and upload that image yourself. For full information on how to do that, please refer to our tutorial on [converting a Docker image to Golem's format](/docs/creators/python/examples/tools/converting-docker-image-to-golem-format).

If you'd like to play around with modifying the included image yourself, please remember to update the service definition's `get_payload` hook to point to your just-uploaded image:

```python
    async def get_payload():
        return await vm.repo(
        image_hash="your-image-hash-here",
        ...
    )
```

## The requestor agent

{% alert level="info" %}
**This is the part that's run by the requestor (you).**
{% /alert %}

We've seen what our little toy service looks like and we have its VM image ready. Now, we can move on to the more juicy stage where we **build the requestor agent** using the Golem's high-level Services API.

The full source code of the requestor agent is available in yapapi's github repo: [https://github.com/golemfactory/yapapi/blob/master/examples/simple-service-poc/simple_service.py](https://github.com/golemfactory/yapapi/blob/master/examples/simple-service-poc/simple_service.py).

Here, we're going to go through the most important excerpts.

### Golem and Service

```python
from yapapi import Golem
from yapapi.services import Service, ServiceState
```

There are two crucial classes that we'll require to, first, define our service and, then, to use it in our requestor agent code: `Golem` and `Service`.

`Golem` is the new main entrypoint of the Golem's high-level API that holds the configuration of the API, provides orchestration of both task-based and service-based jobs and keeps track of agreements, payments and all other internal mechanisms while supplying the developer with a simple interface to run your services on. Most importantly, we'll be interested in its `run_service` method which spawns one or more instances of a service based on user's specification.

`Service`, on the other hand is the base class providing the interface through which the specific user's service classes can be defined. It allows the developer to define the payload the provider needs to run - e.g. a VM runtime with a given VM image - and exposes three discrete handlers responsible for interacting with that payload using [exescript commands](/docs/creators/python/guides/application-fundamentals#work-generator-pattern-and-work-context) during the service's startup, regular run and shutdown.

### Service specification

Without much further ado, let's go through our service definition. First, we inherit from the aforementioned `Service` class and define some constants that refer to paths of executables that we'll want to run in our VM image .

```python
class SimpleService(Service):
    SIMPLE_SERVICE = "/golem/run/simple_service.py"
    SIMPLE_SERVICE_CTL = "/golem/run/simulate_observations_ctl.py"
```

#### Payload definition

```python
@staticmethod
async def get_payload():
    return await vm.repo(
        image_hash="8b11df59f84358d47fc6776d0bb7290b0054c15ded2d6f54cf634488",
        min_mem_gib=0.5,
        min_storage_gib=2.0,
    )
```

Here, it's a VM-image defined through a helper function (`vm.repo`) and using the hash of the file uploaded to [Golem's image repository](/docs/creators/python/examples/tools/converting-docker-image-to-golem-format).

It's worth noting though, that the payload can be anything that inherits from `Payload` and contains a set of properties and constraints that define the execution environment in which we want our service to run. The `vm.repo` function does exactly that for a VM runtime but as long as the requestor and provider agree, it can be almost anything. We'll be showing you how to define your own provider-end runtime and interact with it from the requestor's end in one of our future tutorials.

#### Service phase handlers

As described in the [introduction to the service model](/docs/creators/python/guides/service-model), the handlers for the "starting", "running" and "stopping" phases of a service all utilize the [work generator pattern](/docs/creators/python/guides/application-fundamentals#work-generator-pattern-and-work-context-2). In other words, each of those handlers is a generator that yields sets of work items - execution script commands - that the Golem engine translates into command batches that are sent to the runtime on provider's end.

Each handler has access to the service instance's work context - an interface that connects the requestor agent code with a running activity (execution unit) on the provider node.

#### Start handler

```python
async def start(self):
    """handler responsible for starting the service."""

    # perform the initialization of the Service
    async for script in super().start():
        yield script

    # start the service
    script = self._ctx.new_script()
    script.run(self.SIMPLE_SERVICE_CTL, "--start")
    yield script
```

To start our service, we're going to call our `simulate_observations_ctl.py`script which, as described above, starts the background job that generates our observations and adds them to the service's database. As this is the first command issued, the work context will implicitly prepend our batch with `deploy` and `start` commands, which (unless we need to parametrize the `start` call - not needed for a VM runtime) is exactly what we need.

After the command finishes, our service instances is marked as "running" and proceeds to the `run` handler.

#### Run handler

```python
async def run(self):
    # handler responsible for providing the required interactions while the service is running
    while True:
        await asyncio.sleep(10)
        script = self._ctx.new_script()
        stats_results = script.run(self.SIMPLE_SERVICE, "--stats")
        plot_results = script.run(self.SIMPLE_SERVICE, "--plot", "dist")

        yield script

        stats = (await stats_results).stdout.strip()
        plot = (await plot_results).stdout.strip().strip('"')

        print(f"{TEXT_COLOR_CYAN}stats: {stats}{TEXT_COLOR_DEFAULT}")

        plot_filename = "".join(random.choice(string.ascii_letters) for _ in range(10)) + ".png"
        print(
            f"{TEXT_COLOR_CYAN}downloading plot: {plot} to {plot_filename}{TEXT_COLOR_DEFAULT}"
        )
        script = self._ctx.new_script()
        script.download_file(plot, str(pathlib.Path(__file__).resolve().parent / plot_filename))
        yield script
```

While our service is running, we'll want to periodically peek inside some characteristics of the observations accumulated so far. Thus, every ten seconds (`asyncio.sleep(10)`), we're going to run two consecutive batches of commands.

The first batch:

```python
script = self._ctx.new_script()
stats_results = script.run(self.SIMPLE_SERVICE, "--stats")
plot_results = script.run(self.SIMPLE_SERVICE, "--plot", "dist")

yield script
```

calls the `simple_service.py` with first `--stats` and then `--plot` arguments to first retrieve a JSON dictionary of the observations' statistical metrics and then to generate a PNG plot depicting that distribution.

The return values of `script.run()` here are saved in which enables us to later retrieve the results from these commands. We then await those future results and when the scripts finishes the execution, we receive the captured `results` and extract the standard output of both of those commands.

The output from `--stats` is printed as is and the output of `--plot` is used by _another_ batch:

```python
script = self._ctx.new_script()
script.download_file(plot, str(pathlib.Path(__file__).resolve().parent / plot_filename))
yield script
```

to download the PNG file that the `--plot` command generated. Here we don't need to capture any results as the effect is the PNG file that's downloaded to our local filesystem.

#### Shutdown handler

```python
async def shutdown(self):
    # handler reponsible for executing operations on shutdown
    script = self._ctx.new_script()
    script.run(self.SIMPLE_SERVICE_CTL, "--stop")
    yield script
```

Lastly, when our service is requested to stop, we can issue any commands that perform a shutdown, cleanup or e.g. preserve the state of the service instance.

Here, we're just issuing a command which stops the background process that we had started in the "starting" phase. (Technically, we don't need to do that in case of the VM runtime since the whole VM is stopped when the activity is released by the requestor agent but we're including this step for illustration purposes.)

### Starting our service

With our service specification complete, let's now run our service!

We do that using two function calls:

```python
async with Golem(
    budget=1.0,
    subnet_tag=subnet_tag,
    payment_driver=payment_driver,
    payment_network=payment_network,
) as golem:

    cluster = await golem.run_service(
        SimpleService,
        instance_params=[
            {"instance_name": f"simple-service-{i+1}", "show_usage": show_usage}
            for i in range(num_instances)
        ],
        expiration=datetime.now(timezone.utc) + timedelta(minutes=120),
    )
```

The first one creates the Golem as a context manager, configured with the appropriate subnet, payment driver and payment network and given a particular budget allocated for this job.

The second one instructs the Golem engine to create a cluster of service instances based on our service definition class (`SimpleService`).

After those commands are executed, we receive an instance of `Cluster` which is an object which can be queried to get the state of and to control the instances that we thus commissioned.

Otherwise, we could say or work here is done. The Golem engine will take care of finding the providers to run our service instances and after those instances are deployed, will automatically run our "`start`", "`run`" and "`shutdown`" handlers on them.

{% alert level="success" %}
We have just managed to run a service on Golem!
{% /alert %}

#### Controlling and monitoring our service

The rest of the `main` function in `simple_service.py` is just devoted to tracking the state of the commissioned instances for a short while and then instructing the cluster to stop:

```python
# helper functions to display / filter instances

def instances():
    return [(s.provider_name, s.state.value) for s in cluster.instances]

def still_running():
    return any([s for s in cluster.instances if s.is_available])

def still_starting():
    return len(cluster.instances) < NUM_INSTANCES or any(
        [s for s in cluster.instances if s.state == ServiceState.starting]
    )

# wait until instances are started

while still_starting() and datetime.now() < commissioning_time + STARTING_TIMEOUT:
    print(f"instances: {instances()}")
    await asyncio.sleep(5)

if still_starting():
    raise Exception(f"Failed to start instances before {STARTING_TIMEOUT} elapsed :( ...")

print("All instances started :)")

# allow the service to run for a short while
# (and allowing its requestor-end handlers to interact with it)

start_time = datetime.now()

while datetime.now() < start_time + timedelta(minutes=2):
    print(f"instances: {instances()}")
    await asyncio.sleep(5)

print(f"{TEXT_COLOR_YELLOW}stopping instances{TEXT_COLOR_DEFAULT}")
cluster.stop()

# wait for instances to stop

cnt = 0
while cnt < 10 and still_running():
    print(f"instances: {instances()}")
    await asyncio.sleep(5)
```

As a final note here, it may be worth to mention some current limitations for running a service on the Golem Network. The lifetime of a service on Golem is limited to the maximum lifetime of an activity on the provider's node which currently, be default is set to a maximum of 3 hours and can only be manually extended by each provider if they wish to.

{% docnavigation title="Next steps" %}

- The next article takes a close look at [networking example](/docs/creators/python/tutorials/service-example-2-vpn-ssh-terminal).

{% /docnavigation %}
