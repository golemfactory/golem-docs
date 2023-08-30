---
description: A minimal example of a functional Golem requestor agent
---

# Task Example 0: Hello World!

{% hint style="warning" %}
The documentation is undergoing work and this article is only here because the Python/yapapi parts have not yet been migrated. For the NodeJS or dApp articles, refer to the [new creator documentation](https://docs.golem.network/creators/).
{% /hint %}

{% hint style="info" %}
This example illustrates following Golem features & aspects:

* VM runtime
* Task execution
* Retrieving command output from provider's exe unit
{% /hint %}

## Prerequisites

The only assumption made in this article is that you have some familiarity with basic Golem application concepts. Here's a good starting point to learn about these:

{% content-ref url="../golem-application-fundamentals/" %}
[golem-application-fundamentals](../golem-application-fundamentals/)
{% /content-ref %}

Here are the prerequisites in case you'd like to follow along and/or experiment with the code presented in this article:

* you have a local `yagna` node set up (instructions can be found here: [Requestor development: a quick primer](../flash-tutorial-of-requestor-development/))
* you have the Python or JS Golem high-level API set up on your machine (instructions here: [Run first task on Golem](../flash-tutorial-of-requestor-development/run-first-task-on-golem.md))

{% hint style="info" %}
Golem's APIs rely heavily on coroutines and asynchronous execution (`async/await`). If you're unfamiliar with these concepts, chances are you'll find some parts of the code examples confusing.

If you'd like to learn more about `async/await`, here's a good introduction to Python's generators and coroutines: [https://mleue.com/posts/yield-to-async-await/](https://mleue.com/posts/yield-to-async-await/)

Although the blog post is focused on Python, most of the concepts presented there are still relevant for other programming languagues which support `async/await`.
{% /hint %}

## Requestor agent code

Let's jump straight to the example:

{% hint style="info" %}
This example uses the standard VM runtime.
{% /hint %}

{% tabs %}
{% tab title="Python" %}
```python
#!/usr/bin/env python3
import asyncio
from typing import AsyncIterable

from yapapi import Golem, Task, WorkContext
from yapapi.log import enable_default_logger
from yapapi.payload import vm


async def worker(context: WorkContext, tasks: AsyncIterable[Task]):
    async for task in tasks:
        script = context.new_script()
        future_result = script.run("/bin/sh", "-c", "date")

        yield script

        task.accept_result(result=await future_result)


async def main():
    package = await vm.repo(
        image_hash="d646d7b93083d817846c2ae5c62c72ca0507782385a2e29291a3d376",
    )

    tasks = [Task(data=None)]

    async with Golem(budget=1.0, subnet_tag="public") as golem:
        async for completed in golem.execute_tasks(worker, tasks, payload=package):
            print(completed.result.stdout)


if __name__ == "__main__":
    enable_default_logger(log_file="hello.log")

    loop = asyncio.get_event_loop()
    task = loop.create_task(main())
    loop.run_until_complete(task)
```
{% /tab %}
{% /tabs %}

That's all we need in order to run a task on Golem!

### How does it work?

Here's the flow diagram of all the interactions that need to happen between the requestor and the provider(s) in order for a task to be completed:

![Sequence diagram of requestor -> provider interactions](../../.gitbook/assets/tutorial-07.jpg)

From a high-level perspective, a successful run of the above program performs the following steps:

1. A single task is scheduled to be executed in the Golem network
2. Once a suitable provider is found in the market, a lightweight VM is launched on that node
3. When the execution environment is ready, the requestor's script is run inside it
4. Once the script is finished, the result is retrieved from the provider and displayed to the terminal

In this minimal example our script consists of a single command: the Linux `date` utility. This program returns a string representing the system's current time, e.g.: `Tue Jun 8 14:53:51 UTC 2021`.

Let's move on to exploring our example code!

## The main() function

This function is our program's entry point and it performs three steps:

1. Specifying the VM image to be launched by providers
2. Defining an array of `Task` objects to be computed
3. Creating a `Golem` instance and using it to execute our tasks

### VM image

{% tabs %}
{% tab title="Python" %}
```python
package = vm.repo(
    image_hash="d646d7b93083d817846c2ae5c62c72ca0507782385a2e29291a3d376",
)
```
{% /tab %}
{% /tabs %}

Currently, Golem is using a public repository to store both official and community-authored VM images. Once an image is uploaded to this repository it can be referred to by its hash.

This is what we're making use of here - by using the function `repo` from `vm`, we're getting a payload definition for our providers. The only input we must provide at this point is the image hash. In the case of this example we're using a pre-uploaded, minimal image based on Alpine Linux.

{% hint style="info" %}
If you'd like to learn about creating and uploading Golem images yourself, take a look at this article: [VM runtime: How to convert a Docker image into a Golem image?](../vm-runtime/convert-a-docker-image-into-a-golem-image.md)
{% /hint %}

### Tasks array

{% tabs %}
{% tab title="Python" %}
```python
tasks = [Task(data=None)]
```
{% /tab %}
{% /tabs %}

Next comes the array of task fragments to be computed. For simplicity, our `tasks` array contains a single item of type `Task` which has no data associated with it. This means we only need a single item to be computed and that the worker function does not need any additional parameters.

In general, each `Task` object refers to a single piece of computation within your app and typically holds some data. For example, in a program which operates on a huge file, a single `Task` could be holding one chunk of that file to be processed by one of many providers involved.

{% hint style="info" %}
To see a more involved example of this take a look at: [Task Example 1: Simple hash cracker](task-example-1-cracker.md#the-task-fragments) (this links to a section on task fragments)
{% /hint %}

### Golem/Executor

{% tabs %}
{% tab title="Python" %}
```javascript
async with Golem(budget=1.0, subnet_tag="public") as golem:
    async for completed in golem.execute_tasks(worker, tasks, payload=package):
        print(completed.result.stdout)
```
{% /tab %}
{% /tabs %}

Finally, as the last step of our `main()` function we create an instance of `Golem` (or `Executor` in the case of JS API) and use it to request our tasks.

`Golem/Executor` is the heart of Golem's API - it handles communication with the local Golem node, processes payments for completed tasks and, most importantly, provides an easy way of requesting resources in the Golem network.

#### Instantiation

Let's first focus on the instantiation code:

{% tabs %}
{% tab title="Python" %}
```javascript
async with Golem(budget=1.0, subnet_tag="public") as golem:
    ...
```
{% /tab %}
{% /tabs %}

{% hint style="info" %}
`Golem/Executor` instances work as asynchronous [context managers](https://docs.python.org/3/reference/datamodel.html#context-managers). Since context managers are a concept native to Python, Golem's `yajsapi` provides a custom implementation in the form of the function `asyncWith`.

Context managers are somewhat similar to `try-catch-finally` blocks. They allow for setup and teardown logic before using some resource. In our case this resource is the `Golem/Executor` instance, while the block of code inside `async with/asyncWith` is the context.
{% /hint %}

Our context manager needs to be declared asynchronous as its setup and teardown functions are coroutines. This is required since they involve some long running actions such as creating/deleting payment allocations or starting/stopping background services.

{% hint style="info" %}
**Alternative usage pattern (Python)**

Note that a`Golem` instance can also be used without a context manager, but rather can be started and stopped explicitly:

```python
golem = Golem(budget=1.0, subnet_tag="public")
await golem.start()

# ...execution code here...

await golem.stop()
```
{% /hint %}

As for the parameters passed to the `Golem/Executor` constructor:

* `budget` specifies our desired budget (in GLM) for the total cost of all tasks computed using this `Golem/Executor` instance.
* `subnet_tag` specifies the name of a Golem network sub-network we'd like to use for all Golem communication performed by this `Golem/Executor` instance.

{% hint style="warning" %}
In the JavaScript API, the current implementation of `Executor` requires `task_package` to be passed in to the constructor. This is likely to change in the future. More on this parameter in the next section.
{% /hint %}

#### Execution

{% tabs %}
{% tab title="Python" %}
```javascript
async for completed in golem.execute_tasks(worker, tasks, payload=package):
    print(completed.result.stdout)
```
{% /tab %}
{% /tabs %}

Having a `Golem/Executor` instance initialized we can now request some tasks!

The function `execute_tasks/submit` is used here, it takes three parameters (two in the case of JavaScript's `submit`):

* `worker` is the function which defines the steps that should happen for each provider node in order to process a `Task`
* `tasks` is the array of `Task` objects we have created
* `payload` is the payload definition for providers which we created using the function `vm.repo`

{% hint style="warning" %}
In the case of JavaScript API we already provided the `Executor` with a payload definition through the parameter `task_package`.
{% /hint %}

`execute_tasks/submit` returns an asynchronous iterator of `Task` objects, hence the `async for/for await` statement. Items returned by this iterator are successfully completed tasks in the order they were computed.

Having a completed task we can inspect its result. The result's structure will depend on the execution environment we used. In our case it's the VM runtime and so the result contains the output of your executed command in `stdout`.

## The worker() function

{% tabs %}
{% tab title="Python" %}
```python
async def worker(context: WorkContext, tasks: AsyncIterable[Task]):
    async for task in tasks:
        script = context.new_script()
        future_result = script.run("/bin/sh", "-c", "date")
        yield script
        task.accept_result(result=await future_result)
```
{% /tab %}
{% /tabs %}

The `worker` function is what defines the interaction between our requestor node and each provider computing one or more of our tasks. It's called once per provider node with which our requestor has struck an agreement.

{% hint style="info" %}
This method follows the "work generator" pattern. If you're unfamiliar with it in the context of Golem you can learn more in this article: [HL API: Work generator pattern and WorkContext](../golem-application-fundamentals/hl-api-work-generator-pattern.md)
{% /hint %}

`WorkContext` gives us a simple interface to construct a script that translates directly to commands interacting with the execution unit on provider's end. Using this object we can schedule commands such as transferring files, running programs etc.

The sequence of `Task` objects yields task fragments assigned to this provider. In a more complex scenario each `Task` object would be carrying its own piece of data to be used during computation.

{% hint style="warning" %}
Python API uses an updated API which explicitly features a `Script` object which is a representation of a single batch of commands executed on providers. The JS API on the other hand, still uses the old interface where the scripts are an internal feature of the `WorkContext` interface and are constructed implicitly and packed into its final form by the `commit()` call.
{% /hint %}

In the case of this example our entire script consists of a single command which is the call to `script.run` / `context.run`. This means that, once committed, the provider's exe unit will receive an instruction to make a call to `/bin/sh -c date`.

{% hint style="warning" %}
Commands run with `script.run /` `context.run` are not executed in any shell. This means you have to either specify the full binary path or run the command through a shell manually (for example: `/bin/sh -c ...`).
{% /hint %}

By awaiting on `future_results` after the script has been yielded, we ensure the results are available and unwrap them from the awaitable object.

Finally, we make a call to `task.accept_result` to mark the task as successfully finished and pass it the result object. This will cause our task to be passed to the queue of completed tasks which gets processed in our `main` function.

## All done!

That's all there is to the example!

To run it on your local machine make sure you have a `yagna` node running and set up as a requestor (take a look here in case of any doubts: [Requestor development: a quick primer](../flash-tutorial-of-requestor-development/)). You can then issue the following command:

```
YAGNA_APPKEY={your_appkey_here} ./hello.py
```

This assumes you're in the directory which contains the `hello.py` file. You'll also need to provide your node's actual app key. If everything went fine you should see a log similar to the one below:

```
[2021-06-15 14:51:22,951 INFO yapapi.summary] Agreement proposed to provider 'someone'
[2021-06-15 14:51:23,319 INFO yapapi.summary] Agreement confirmed by provider 'someone'
[2021-06-15 14:51:24,159 INFO yapapi.summary] Task started on provider 'someone', task data: None
Tue Jun 15 12:51:24 UTC 2021

[2021-06-15 14:51:27,643 INFO yapapi.summary] Task finished by provider 'someone', task data: None
[2021-06-15 14:51:27,643 INFO yapapi.summary] Computation finished in 6.7s
```

`Tue Jun 15 12:51:24 UTC 2021` is the result we received from executing the `date` command inside our provider's exe unit.

Ready for a more complex scenario? Take a look at the next article which implements a rudimentary hash cracker using Golem network.
