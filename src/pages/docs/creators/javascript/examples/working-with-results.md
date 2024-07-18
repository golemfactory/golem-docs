---
title: Managing Task Results
description: Learn to manage task results in various scenarios using the Golem SDK JavaScript API, including handling single and multi-command tasks, and dealing with command failures.
pageTitle: Mastering Task Result Management in Golem SDK JavaScript API
type: Example
---

# JS Task API Examples: working with results

## Introduction

This example will show you how the task result can be managed by code in different ways for different use-cases.

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

{% alert level="info" %}

Some of the examples require a simple `worker.mjs` script that can be created with the following command:

```bash
echo console.log("Hello Golem World!"); > worker.mjs
```

{% /alert  %}

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Single command task

Let's look at the simple example: we will run a task that consists of single command and will print the content of the result object:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/working-with-results/single-command.mjs" language="javascript" /%}

In this example, our task consists of a single command: `node -v`. `ctx.run()` which returns an object that is then passed to the `result` variable and printed.

Index refers to the sequential number of a command (we have just one, and counting starts from 0),
`status` of the result is "ok" which indicates the command was completed successfully, and the actual results of the command are under `stdout`.

![Result ](/result_log.png)

## Multi-command task

When you run your tasks in a batch that is concluded with `.end()`:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/working-with-results/multi-command-end.mjs" language="javascript" /%}

you will receive an array of result objects:

you will receive an array of result objects:

![results logs](/result_batch_log.png)

In case you end your batch with the `endStream()` method:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/working-with-results/multi-command-endstream.mjs" language="javascript" /%}

Each `data` chunk will contain a result object, in the sequence that the commands were in within the batch:

![results output logs](/batch_result_endstream_1.png)
![results output logs](/batch_result_endstream_2.png)

## What to do if your command fails?

When your command fails, the ExeUnit (the component responsible for running your image on the remote computer) will terminate all remote processes. As a result, the entire task will be terminated.

What will happen in such a case depends on the way your task is composed. Let's see it in examples.

In the below case, the user's commands are chained in a batch. An error occurs as the user tries to download the `output.txt` file from `/golem/output/` folder while the file was created in the `golem/input` folder.
This command will raise an error and the whole task will be terminated. The next command, listing the content of `/golem/` folder, will not be executed at all.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/working-with-results/multi-command-fail.mjs" language="javascript" /%}

![Batch failure output log](/bad_result_single_log.png)

While the user will receive the error message, the output is only for the failing command, not for all commands in the task.

The level of detail in the message depends on the type of method that causes the error.

In the case of the data transfer method, you will receive a message describing the cause of the error.

Let's see another example:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/working-with-results/single-command-fail.mjs" language="javascript" /%}

![Single failure output log](/bad_result_log_3.png)

In the case of the failure in the `run()` method, we receive the result object with following attributes:

- `result: 'Error'`,
- `stdout: null`,
- `stderr: 'node: bad option: -w\n',` - the command output
- `message: 'ExeScript command exited with code 9', the exit code of the command that failed.` - message from the system. The `node.js` exit code 9 means: `Exit Code 9, Invalid Argument: This is employed when an unspecified option was given`.
