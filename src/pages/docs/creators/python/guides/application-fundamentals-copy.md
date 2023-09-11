---
description: Golem application fundamentals
title: Golem application fundamentals
type: guide
tag: application
---

# Golem application fundamentals

## What is a Golem application?

A Golem application is a software program that utilized the Golem Network resoruces. It consists primarely of two types of components: a reqestor agent and provider component. 

A provider component consists of execution unit (exe-unit) that controls a runtime that is running a docker-like image. In the other part of the docs we will use a term "payload" to refer to such image deployed to provider's node. Exe-unit enables execution of the user code assuring effective isolation of execution from the host. A Golem application can utilize one or more of providers components.

These compnents are orchesttrated by a requestor agent. It is a piece of code talking directly to the `yagna` via its REST API on a requestor node. 

So far, said orchestration takes the form of one of three types of actions:

- Sending input files to the execution unit
- Running commands on the execution unit and reading from their standard output or standard error streams
- Getting output files back from the execution unit

![Orchestartion schema](../../.gitbook/assets/tutorial-05.jpg)

Note that requestor agents may implement additional logic like splitting the the computation problem into several parts and combining them to form the final output that is passed to the user once all the results are received from providers.

While user can create own exeunit implementation, in most of the cases he will utilize Golem proivded runtime that runs the VM with a Golem image. Thus, his responsibility is limited to craft the adequate image. In many cases such an image already exists or can be easily created out of the existing docker image.

{% docnavigation title="See also" %}

  To learn about some additional details on how different parts of Golem work together, please have a look at:
- [Golem Overview and Requestor/Provider interaction](/docs/golem/overview/)

{% /docnavigation %}


# Work generator pattern and WorkContext

## Intro

Golem applications utilizing yapapi follow a pattern where a Requestor Agent application issues commands which are relayed to the Provider side and executed within an execution unit. The responses from the commands are fed back to the Requestor Agent application, and may be processed according to the application logic.

In all cases where execution of the commands within exeunit is required, this is instrumented using a _work generator pattern_, a variation of the Command design pattern. Actions to be performed between the Requestor agent and the Provider's execution unit are wrapped under Script objects, which are marshaled by the high-level API library. Requestor agent programmer is expected to develop code which generates those scripts and returns them via an iterator. Moreover, where possible, the work generator uses the `await` mechanics, to increase code execution efficiency.

## Basic example

Consider a simple code example of a work generator function:

```python
async def worker(context: WorkContext, tasks: AsyncIterable[Task]):
    async for task in tasks:
        script = context.new_script()
        future_result = script.run("/bin/sh", "-c", "date")
        yield script
        task.accept_result(result=await future_result)
```


A `worker()` function is specified, which will be called by the high-level library engine for each provider, to iterate over the work commands and send the commands to the Provider. This function (representing the task-based execution model) receives:

- a `WorkContext` object, which is used to construct the commands (which is common to both the task-based API and the services' one),
- a collection of `Task` objects which specify individual parts of the batch process to be executed (specific to the task-based API).

For each set of commands that we'd like to execute on the provider's end, the `new_script()` is called on the `WorkContext` instance to create a `Script` object to hold our execution script.

Then, a `run()` method is called on the `Script` instance to build a command to issue a `bash` statement on a remote VM. This call builds a RUN command. Note that we're saving a handle to its future result (which is an async awaitable that will be filled with the actual result later).

A subsequent `yield` statement then sends the prepared script to the caller of the `worker()` method, which effectively passes it for execution by the provider.

Both the aforementioned `run` command and the `yield` statement return awaitable objects wrapping the results. Those `Future` objects can be awaited upon to obtain the response for a specific command or for the whole script respectively, which can be processed further. The `worker()` execution for this specific provider halts until the generated work command gets processed.

## Script API

The `Script` is a facade which exposes APIs to build various commands. Some useful methods are listed below:

### `run(statement(, arguments))`

Execute an arbitrary statement (with arguments) in the ExeUnit/runtime.

{% alert level="info" %}

The semantics of the command is specific to a runtime, eg. for VM runtime this command executes a shell statement and returns results from `stdout` and `stderr`.
{% /alert %}


### `send_*(location, <content>)`

A group of commands responsible for sending content to the ExeUnit. These are utility methods, which conveniently allow for sending eg. local files, binary content or JSON content.

### `download_*(<content>, location)`

A group of commands responsible for downloading content from the ExeUnit. As with `send_*()`, these are utility methods which allow for convenient transfer and conversion of remote content into local files, bytes or JSON objects.

{% docnavigation title="Next steps" %}

- [Task Model](/docs/golem/overview)
{% /docnavigation %}



----------------------------------

Add to the provider details:

Golem's execution units are theoretically capable of running any kind of payload.
it provides ability to execute code inside environments that provide effective isolation of execution from the host
Other kinds of payloads are possible as long as the app developer is ready to [implement an appropriate runtime](https://github.com/golemfactory/ya-runtime-sdk/) and distribute it to willing providers.

Add to the How requestors and providers interact:

Once agreements with the selected providers are finalized, which happens in the course of an automated negotiation process, the providers are asked to deploy "payload" / load the appropriate image.

{% alert level="info" %}
If this is a subsequent run of the image, the image could already be cached by some of the providers.
{% /alert %}

one or more commands are converted into execution scripts, that are executed by the execution unit in the deplyed VM. Execution script may include sending or receiving data. that allows to pass execution paraters to the providers, and once the task has been executed on a provider node, to transfer the output files from the provider to its local file system.

provider isses debit notes and invoices issued by the provider. If they are acknowledged and accepted by the requestor agent, they trigger payments. Golem's high-level API orchestrates payments for the accepted invoices, and executed them using the payment platform/driver negotiated during the negotiation stage. The requestor agent does not need to dive into the nuances of payments.
