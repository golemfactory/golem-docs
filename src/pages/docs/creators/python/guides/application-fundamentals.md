--copy of readme 

# Golem application fundamentals

## What is a Golem application?

Now that you have seen a simple Golem application in action, it is a good idea to start from the beginning.

A Golem application consists of a certain number of execution units - e.g. VMs capable of running modified Docker images - launched within the network's provider nodes that are orchestrated by a requestor agent - a piece of code talking directly to the REST API on a requestor node.

Golem's execution units are theoretically capable of running any kind of payload. Out of the box, we provide ability to execute code inside environments that provide effective isolation of execution from the host - currently, this support is limited to Docker-like VMs and WASM.

Other kinds of payloads are possible as long as the app developer is ready to [implement an appropriate runtime](https://github.com/golemfactory/ya-runtime-sdk/) and distribute it to willing providers.

So far, said orchestration takes the form of one of three types of actions:

- sending input files to the execution unit
- running commands on the execution unit and reading from their standard output or standard error streams
- getting output files back from the execution unit

![](../../.gitbook/assets/tutorial-05.jpg)

## How does a Golem application work?

### Components

A Golem application in general consists of two distinct components:

- **Requestor** agent - controls the work expected from the payload executed on provider side, eg. splits the computation problem into several parts, and sends them to providers. After receiving all the results from the providers, the requestor combines them to form the final output that is passed to the user.
- **Provider** exe unit responsible for providing the computing resources. For applications based on VM runtime - the exeunit hosts a VM image, which executes the given part and returns results to the requestor.

In the case of a VM application, the provider side is implemented as a docker image crafted for the desired purpose. It is the responsibility of the application's author to prepare a dedicated dockerfile that describes this custom image. Of course, it may happen that there already exists an image \(e.g. on Docker Hub\) that can be used directly - in such case, this step can be skipped.

### Execution flow

#### Requestor agent and market negotiation

The application's execution starts on the requestor's end when the user runs the requestor agent.

After specifying and publishing a demand to Golem's market, the requestor agent receives offers from providers that meet its needs - e.g. having a sufficient amount of RAM.

#### Payload

Once agreements with the selected providers are finalized, which happens in the course of an automated negotiation process, the providers are asked to deploy "payload" - the application component that will be executed \(eg. in case of VM runtime-based applications - load the appropriate image\).

{% hint style="info" %}
_If this is a subsequent run of the image, the image could already be cached by some of the providers._
{% /hint %}

#### Execution script

A script consisting of one or more commands is executed by the execution unit using the providers' docker containers.

#### Input and output

As part of the execution script, the requestors may wish to supply the providers with additional data \(be it files or execution parameters\) that need to be transferred to the providers. Similarly, once some task has been executed on a provider node, the requestor agent may wish to transfer the output files from the provider to its local file system.

Appropriate upload/download commands are showcased in our more detailed tutorials in which we describe our two major development models: [the task model](../task-processing-development/) and [the service model](../service-development/).

#### Payments

As the provider executes the payload, it also expects the requestor to pay for the activity. The payments are triggered by invoices and debit notes issued by the provider, which must be acknowledged and accepted by the requestor agent. Golem's high-level API orchestrates payments for the accepted invoices to be made using the payment platform/driver negotiated during the negotiation stage - so the requestor agent does not need to dive into the nuances of payments.

To learn about some additional details on how different parts of Golem work together, please have a look at:

{% page-ref page="../../introduction/requestor.md" /%}


{% page-ref page="../../introduction/provider.md" /%}

{% page-ref page="../../introduction/golem-overview.md" /%}

## High-level API libraries

The low-level mechanics of the Golem market are quite complex, and building robust applications directly using the low-level APIs, while possible, may not be the most efficient approach. For this reason, a concept of High-level API libraries has been designed, as "bindings" of specific programming languages with Golem platform.

The purpose of a high-level API is to wrap the intricacies of Golem APIs with more efficient programming models, based on computation models more intuitive than Golem market, activity and payment concepts. A developer using these libraries should have a basic understanding of Golem platform's fundamental concepts \(Demand/Offer market matching, activity execution, payment-related logic\), but all the low-level logic is implemented in a high-level API library.

Following high-level API libraries are supported by Golem Factory:

{% embed url="https://yapapi.readthedocs.io/en/latest/api.html" %}{% /embed %}


{% page-ref page="../../yajsapi/yajsapi.md" /%}

## Task Model vs Service Model

Two basic computation models are supported by Golem high-level APIs.

- **Task model** is designed to support **batch processing**, where an application is expected to perform a set of "computation jobs" on Golem network. A high-level API library provides structure for a developer to define batch tasks, which are then efficiently distributed across a selected number of providers available in Golem network. Batch jobs may require input data to be transferred to the provider side, and may produce output data, which needs to be fetched once the computation is complete.
- **Service model** is an abstraction over **interactive processes** which get launched, and operate in order to respond to requests. A service generally is expected to be active until explicitly stopped, however all the concepts of input/output data transfer also do apply.

Please refer to following sections for a dive into those two Golem programming models:

{% page-ref page="../task-processing-development/" /%}

{% page-ref page="../service-development/" /%}


copy of hl-api-work-generator-pattern


# Work generator pattern and WorkContext

## Intro

Golem applications in general follow a pattern where a Requestor Agent application issues commands which are relayed to the Provider side and executed within an execution unit. The responses from the commands are fed back to the Requestor Agent application, and may be processed according to the application logic.

A high-level API library provides an abstraction over low-level Golem mechanics, and that includes Activity control, and the ExeScript commands. In all cases where ExeScript execution is required, this is instrumented using a _work generator pattern_.

Work generator pattern is a variation of the Command design pattern, where actions to be performed between the Requestor agent and the Provider's execution unit are represented by Script objects, which are marshaled by the high-level API library. Requestor agent programmer is expected to develop code which generates those scripts and returns them via an iterator/enumerator \(depending on the programming language\). Moreover, where possible, the work generator uses the `await/async` mechanics, to increase code execution efficiency.

## Basic example

Consider a simple code example of a work generator method/function/procedure:

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

{% tab title="JavaScript" %}

```javascript
async function* worker(context, tasks) {
  for await (let task of tasks) {
    context.run('/bin/sh', ['-c', 'date'])

    const future_result = yield context.commit()
    const { results } = await future_result
    task.accept_result(results[results.length - 1])
  }
}
```

{% /tab %}
{% /tabs %}

A `worker()` function is specified, which will be called by the high-level library engine for each provider, to iterate over the work commands and send the commands to the Provider. This function \(representing the task-based execution model\) receives:

- a `WorkContext` object, which is used to construct the commands \(which is common to both the task-based API and the services' one\),
- a collection of `Task` objects which specify individual parts of the batch process to be executed \(specific to the task-based API\).

For each set of commands that we'd like to execute on the provider's end, the `new_script()` is called on the `WorkContext` instance to create a `Script` object to hold our execution script.

Then, a `run()` method is called on the `Script` instance to build a command to issue a `bash` statement on a remote VM. This call builds a RUN command. Note that we're saving a handle to its future result \(which is an async awaitable that will be filled with the actual result later\).

A subsequent `yield` statement then sends the prepared script to the caller of the `worker()` method, which effectively passes it for execution by the provider.

Both the aforementioned `run` command and the `yield` statement return awaitable objects wrapping the results. Those `Future` objects can be awaited upon to obtain the response for a specific command or for the whole script respectively, which can be processed further. The `worker()` execution for this specific provider halts until the generated work command gets processed.

{% hint style="info" %}
Note that some programming languages do not support receiving responses from a `yield` statement. In those languages the command results shall still be available via an awaitable object, available either from the command object itself, or from the `WorkContext`.
{% /hint %}

## Script API

{% hint style="info" %}
**Note** that implementation of the Script API is specific to a ExeUnit/runtime which we communicate with. In other words, `run()` on a VM runtime may have a different semantic than on other runtimes, and in some ExeUnits it may not even be implemented at all.
{% /hint %}

The `Script` is a facade which exposes APIs to build various commands. Some useful methods are listed below:

### `run(statement(, arguments))`

Execute an arbitrary statement \(with arguments\) in the ExeUnit/runtime.

{% hint style="info" %}
The semantics of the command is specific to a runtime, eg. for VM runtime this command executes a shell statement and returns results from `stdout` and `stderr`.
{% /hint %}

### `send_*(location, <content>)`

A group of commands responsible for sending content to the ExeUnit. These are utility methods, which conveniently allow for sending eg. local files, binary content or JSON content.

### `download_*(<content>, location)`

A group of commands responsible for downloading content from the ExeUnit. As with `send_*()`, these are utility methods which allow for convenient transfer and conversion of remote content into local files, bytes or JSON objects.
