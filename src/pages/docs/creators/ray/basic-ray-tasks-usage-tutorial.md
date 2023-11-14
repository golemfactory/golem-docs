---
title: Basic Ray tasks usage tutorial
description: Discover how to run and manage Ray tasks in a distributed environment with this hands-on guide, featuring code examples and essential Ray functionalities.
pageTitle: Practical Tutorial on Ray Task Execution on Golem Network
type: example 
---

# Basic Ray tasks usage examples

The purpose of this article is to show you an example of a Ray app. It shows how Ray tasks are executed on different machines.

We have also prepared a couple of other example Ray apps to make it easier for you to play with Ray on Golem and to help you see the power of Ray.
You can find the examples in [`ray-on-golem` repository](https://github.com/golemfactory/golem-ray/tree/main/examples).


## The app

Have a look at the code (but you can find it also in [the repository](https://github.com/golemfactory/golem-ray/blob/main/examples/simple-task.py):
```python
import socket
import time
import argparse
from collections import Counter

import ray
ray.init()

def output_cluster_info():
  print(
      """This cluster consists of
      {} nodes in total
      {} CPU resources in total
  """.format(
          len(ray.nodes()), ray.cluster_resources()["CPU"]
      )
  )

# cluster information before the computation
output_cluster_info()

# remote function returning ip of the worker (after 0.5 sec of sleep)
@ray.remote
def f():
    time.sleep(0.5)

    return socket.gethostbyname(socket.gethostname())

# get the number of remote calls from the command line
parser = argparse.ArgumentParser()
parser.add_argument(
    "-c", "--count", type=int, default=100, help="number of tasks to perform, default: %(default)s"
)
args = parser.parse_args()

# start args.count remote calls
object_ids = [f.remote() for _ in range(args.count)]

# wait for the results
ip_addresses = ray.get(object_ids)

print("Tasks executed")
for ip_address, num_tasks in Counter(ip_addresses).items():
    print("    {} tasks on {}".format(num_tasks, ip_address))


# cluster information after the computation
output_cluster_info()
```

You can run the app on your local machine with
```bash
python3 simple-task.py
```

Or, you can execute it on Ray on Golem cluster with `ray submit`. Let's have a look at ray usage in the app.

You need to run certain steps:
- initialize ray, so your code would be able to use ray infrastructure
- declare the methods that can be run remotely by ray
- apply ray pattern to execute tasks remote with `remote()` and await the results with `ray.get()`


## Ray initialization

```python
import ray
ray.init()
```

This is what Ray initialization looks like. `ray.init()` without parameters tells Ray to look for an existing Ray cluster or (if not found) to start up a local Ray instance.


## Cluster information

The `ray` module exposes methods we use to print the information about the cluster (before and after ray computation).
When you run the script on a fresh Ray on Golem cluster, the number of nodes will increase as a result of the computation.
This happens because Ray autoscaler monitors the amount of work pending and requests additional nodes as the queues get longer.

It also decommissions the nodes when they start to idle (5 mins in the example config we are providing).

## Remote tasks declaration and execution

```python
@ray.remote
def f:
```

Ray's `remote` decorator turns a regular local function into Ray's object, which enables the function to be executed remotely (on a different node). 
When you subsequently call its `.remote` method, the Ray scheduler will queue its execution. 
In our case, the function just sleeps for a moment and then returns the IP address of the node it was executed on.

```python
object_ids = [f.remote() for _ in range(1000)]
```

What happens when you call the `remote` method added by the `@ray.remote` decorator, is that it immediately returns an id - a kind of future promise - that can be used to get the results later.

## Waiting for the results of remote calls

```python
ip_addresses = ray.get(object_ids)
```

The future(s) can be awaited with `ray.get`. It returns only when all the remote tasks are executed.


## Conclussion

And that's it - the code parallelization with Ray is done by choosing which parts of code can be executed remotely, decorating them with `@ray.remote`, then changing their execution to `.remote()`, and finally waiting for the results with `ray.get()`. Of course, remote Ray tasks can call other Ray remote tasks.

You can now proceed to run your app on a [Ray on Golem cluster](/docs/creators/ray/setup-tutorial)

Read more information about Ray tasks on [Ray Core docs website](https://docs.ray.io/en/latest/ray-core/walkthrough.html)

{% docnavigation title="See also" %}
- [Ray on Golem concept](/docs/creators/ray/concept)
- [Converting a real-life use case to Ray on Golem](/docs/creators/ray/conversion-to-ray-on-golem-tutorial)
{% /docnavigation %}
