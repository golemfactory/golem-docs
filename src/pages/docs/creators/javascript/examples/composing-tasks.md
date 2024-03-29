---
description: Learn to compose tasks using JS Task API, featuring methods for sequential and batch command execution with practical examples.
title: Composing Tasks - Examples and Methods
pageTitle: Master Task Composition with JS Task API - Sequential & Batch Command Execution
type: Example
---

# JS Task API Examples: composing tasks

## Introduction

Task Executor methods take a task function as a parameter for each of its methods.
This function is asynchronous and provides access to the WorkContext object, which is provided as one of its parameters.

A task function may be very simple, consisting of a single command, or it may consist of a set of steps that include running commands or sending data to and from providers.

Commands can be run in sequence or can be chained in batches. Depending on how you define your batch, you can obtain results of different types.

The following commands are currently available:

| Command          | Available in node.js | Available in web browser |
| ---------------- | :------------------: | :----------------------: |
| `run()`          |         yes          |           yes            |
| `runAndStream()` |         yes          |           yes            |
| `uploadFile()`   |         yes          |            no            |
| `uploadJson()`   |         yes          |           yes            |
| `downloadFile()` |         yes          |            no            |
| `uploadData()`   |         yes          |           yes            |
| `downloadData()` |          no          |           yes            |
| `downloadJson()` |          no          |           yes            |

{% alert level="info" %}
This article focuses on the `run()`, `runAndStream()` commands and chaining commands using the `beginBatch()` method. Examples for the `uploadFile()`, `uploadJSON()`, `downloadFile()` commands can be found in the [Sending Data](/docs/creators/javascript/examples/transferring-data) article.
{% /alert %}

We'll start with a simple example featuring a single `run()` command. Then, we'll focus on organizing a more complex task that requires a series of steps:

- send a `worker.js` script to the provider (this is a simple script that prints "Good morning Golem!" in the terminal),
- run the `worker.js` on a provider and save the output to a file (output.txt) and finally
- download the `output.txt` file back to your computer.

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

## How to run examples

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/task-executor` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/task-executor
```

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

Some of the examples require a simple `worker.mjs` script that can be created with the following command:

```bash
echo console.log("Hello Golem World!"); > worker.mjs
```

### Running a single command

Below is an example of a simple script that remotely executes `node -v`.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/composing-tasks/single-command.cjs" language="javascript" /%}

Note that `ctx.run()` accepts a string as an argument. This string is a command invocation, executed exactly as one would do in the console. The command will be run in the folder defined by the `WORKDIR` entry in your image definition.

### Running multiple commands (prosaic way)

Your task function can consist of multiple steps, all run on the `ctx` context.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/composing-tasks/multiple-run-prosaic.mjs" language="javascript" /%}

To ensure the proper sequence of execution, all calls must be awaited. We only handle the result of the second `run()` and ignore the others.

{% alert level="info" %}
If you use this approach, each command is sent separately to the provider and then executed.
{% /alert %}

![Multiple Commands output log](/command_prosaic_log.png)

### Organizing commands into batches

Now, let's take a look at how you can arrange multiple commands into batches.
Depending on how you finalize your batch, you will obtain either:

- an array of result objects or
- ReadableStream

### Organizing commands into a batch resulting in an array of Promise results

Use the beginBatch() method and chain commands followed by `.end()`.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/composing-tasks/batch-end.mjs" language="javascript" /%}

All commands after `.beginBatch()` are run in a sequence. The chain is terminated with `.end()`. The output is a Promise of an array of result objects. They are stored at indices according to their position in the command chain (the first command after `beginBatch()` has an index of 0).

The output of the 3rd command, `run('cat /golem/input/output.txt')`, is under the index of 2.

![Commands batch end output logs](/batch_end_log.png)

### Organizing commands into a batch producing a Readable stream

To produce a Readable Stream, use the `beginBatch()` method and chain commands, followed by `endStream()`.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/composing-tasks/batch-endstream-chunks.mjs" language="javascript" /%}

Note that in this case, as the chain ends with ` .endStream()`, we can read data chunks from ReadableStream, denoted as `res`.

Once the stream is closed, we can terminate our TaskExecutor instance.

![Commands batch endstream output logs](/batch_endsteram_log.png)

{% alert level="info" %}

Since closing the chain with `.endStream()` produces ReadableStream, you can also synchronously retrieve the results:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/composing-tasks/alert-code.mjs" language="javascript" /%}

{% /alert %}

### Running commands and collecting output as a stream

Here are two examples of how to run a command and collect its output as a stream.

#### Basic runAndStream scenario

In the first example, we run a command that produces both stdout and stderr outputs that we pass to the console. This command will terminate on its own after ten cycles.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/composing-tasks/streams/stream-onclose.mjs" language="javascript" /%}

#### runAndStream scenario with timeout defined

In this example, we show how to use `remoteProcess.waitForExit()` to terminate the process. Note that in the current implementation, the exit caused by timeout will terminate the activity on a provider, therefore the user cannot run another command on the provider. Task executor will run the next task on another provider.

{% codefromgithub url="hhttps://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/composing-tasks/streams/stream-waitforexit.mjs" language="javascript" /%}
