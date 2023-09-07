---
description: anatomy of Ray application based on a simple code showcasing Ray tasks
title: Basic Ray tasks usage tutorial 
type: example 
---

# Basic Ray tasks usage tutorial

The purpose of this tutorial is to show you an example of a Ray app. It shows how Ray tasks are executed on different machines.

We have also prepared a couple of other example Ray apps to make it easier for you to play with Ray on Golem and to help you see the power of Ray.
You can find the examples in [`golem-ray` repository](https://github.com/golemfactory/golem-ray/tree/main/examples).


## The app

Have a look at the code (but you can find it also in [the repository](https://github.com/golemfactory/golem-ray/blob/main/examples/simple-task.py):
```python
from collections import Counter
import socket
import time

import ray
ray.init()

from ray.autoscaler.sdk import request_resources

print('''This cluster consists of
    {} nodes in total
    {} CPU resources in total
'''.format(len(ray.nodes()), ray.cluster_resources()['CPU']))

@ray.remote
def f():
    time.sleep(0.5)

    # Return IP address.
    return socket.gethostbyname(socket.gethostname())

object_ids = [f.remote() for _ in range(1000)]
ip_addresses = ray.get(object_ids)

print('Tasks executed')
for ip_address, num_tasks in Counter(ip_addresses).items():
    print('    {} tasks on {}'.format(num_tasks, ip_address))


print('''This cluster consists of
    {} nodes in total
    {} CPU resources in total
'''.format(len(ray.nodes()), ray.cluster_resources()['CPU']))
```

You can run the app on your local machine with
```bash
python simple-task.py
```

Or, you can execute it on Ray on Golem cluster with
```bash
ray submit cluster-confiuration-yaml-used-with-ray-up simple-task.py
```

Let's have a look at ray usage in the app.

## Ray initialization

```python
import ray
ray.init()
```

This is how Ray initialization looks like. `ray.init()` without parameters tells Ray to look for an existing Ray cluster or (if not found) to start up a local Ray instance.


## Cluster information

`ray.autoscaler.sdk.request_resources` package exposes methods we use to print the information about the cluster (before and after ray computation).
Notice that when you run the app on a fresh Ray on Golem cluster the cluster after the computation will be bigger.
It is because Ray autoscaler observes the amount of work pending and requests additional nodes when the queues are getting longer.

It also decommissions the nodes when they start to feel idle (5 mins in the example config we are providing).

## Remote tasks declaration and execution

```python
@ray.remote
def f:
```

The Ray decorator declares that the method can be executed remotely (on a different node). Ray scheduler kicks in when it sees this decorator.
In our case, the method just sleeps for a moment and then returns the IP address of the node it was executed on.

```python
object_ids = [f.remote() for _ in range(1000)]
```

We run the method using the `remote` method added by the `@ray.remote` decorator. It immediately returns an id - a future - that can be used to get the results later.

## Waiting for the results of remote calls

```python
ip_addresses = ray.get(object_ids)
```

The future(s) can be waited for with `ray.get`. It returns only when all the remote tasks are executed.


## Conclussion

And that's it - the code parallelization with Ray is done by choosing which parts of code can be executed remotely, decorating them with `@ray.remote`, then changing their execution to `.remote()`, and finally waiting for the results with `ray.get()`. Of course, remote Ray tasks can call other Ray remote tasks.

Read more information about Ray tasks on [Ray Core docs website](https://docs.ray.io/en/latest/ray-core/walkthrough.html)

