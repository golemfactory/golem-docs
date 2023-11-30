---
title: Executing Tasks - Examples and Methods
pageTitle: Executing Tasks with Golem's JavaScript API
description: Discover how to execute tasks on Golem JS API with practical examples. Learn to run tasks in parallel, initialize providers, and handle single task executions efficiently. Ideal for Node.js developers using Golem network.

type: Example
---

# JS Task API Examples: executing tasks

## Introduction

With Golem JS Task API you can execute just a single task on a single provider or a series of multiple tasks in parallel on many providers. In the case of the latter, you can additionally define how providers should be initialized and how many tasks you want to run simultaneously.

In this article, the following examples are presented:

- Running tasks in parallel
- Defining the number of providers working in parallel
- Initializing providers
- Running a single task

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

## How to run examples

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/golem-js` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm install @golem-sdk/golem-js
```

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Running tasks in parallel

If you want to run your tasks in parallel, you can call `.run()` multiple times on the same `TaskExecutor` object. The maximum number of concurrently engaged providers is defined by the `maxParallelTasks` parameter. Providers can be engaged more than once until all tasks are executed. 

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/docs-examples/examples/executing-tasks/map.mjs" language="javascript" /%}

In the example, we have an array of 5 elements `[1, 2, 3, 4, 5]` and we `map` over each value to define a separate step for each element in the array. Each step is a command that prints the value of the element to the console. 

![Multiple run map](/map_log.png)

In the output logs, you can have some interesting observations:

The provider `sharkoon_379_6` was engaged first. When he had finished his first task he was still the only available provider and he received another task to execute. In the meantime, other providers were successfully engaged and the next tasks were dispatched to them.

Note that even though provider `sharkoon_379_8` was engaged before provider `10hx4r2_2.h`, the latter completed its task before the former. In the network, different nodes offer varying performance.

## Defining the number of providers used

You can set the maximum number of providers to be engaged at the same time. The TaskExecutor will scan available proposals and engage additional providers if the number of actually engaged providers is lower than `maxParallelTasks` and there are still some tasks to be executed.
If you do not define this parameter, a default value of 5 will be used.

Note that the actual number of engaged providers might be:

- lower than `maxParallelTasks`, if there are not enough providers available in the network.
- higher, when considering the total number of engaged providers for all the tasks in your job. Providers might get disconnected or simply fail, in which case the TaskExecutor will engage another one to maintain the number of active workers at the level defined by `maxParallelTasks`.

Below, you can see how to define the maximum number of providers to be engaged.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/docs-examples/examples/executing-tasks/max-parallel-tasks.mjs" language="javascript" /%}

## Initialization tasks

Normally, when a larger job is divided into smaller tasks to be run in parallel on a limited number of providers, these providers might be utilized for more than one task. In such cases, each task is executed in the same environment as the previous task run on that provider. To optimize performance, you might decide that some initialization tasks need only be run once per provider. This can be particularly useful if you have to send a large amount of data to the provider.

This example requires an `action_log.txt` file that can be created with the following command:

```bash
echo Action log: > action_log.txt
```

You can address such a need using the `beforeEach()` method of the TaskExecutor. Here is an example:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/docs-examples/examples/executing-tasks/before-each.mjs" language="javascript" /%}

In the code, we decreased the `maxParallelTasks` value from the default value of 5, to make sure that some of our five tasks will be run on the same provider.

The `beforeEach()` method is used to upload a file to a remote computer that will be used to log all future activity run on this provider. The task function used in the `beforeEach()` method contains an additional `console.log` to demonstrate that even if the whole job consists of five tasks, the task function used in `beforeEach()` will be executed only once per provider. (Unless the provider disengages and is engaged again - in such a situation, its virtual machine would be created anew, and we would upload the file again there).

Note how we utilized the `ctx` worker context to get the provider name using the `provider.name` property.

Inside each task function we employed the `beginBatch()` to chain multiple commands - you can see more about this feature in the [Defining Tasks](/docs/creators/javascript/examples/composing-tasks) article.

![BeforeEach](/before_log.png)

The log from this example shows that even if the provider `imapp1019_2.h` was eventually
used to execute 3 tasks, it uploaded the log only once. Its output file - downloaded after the last task was executed - contained the following:

```
---------------------------
processing item: 1
processing item: 4
processing item: 5
```

This log once again illustrates that providers offer different performance levels. Even though `fractal_01_1.h` and `fractal_01_3.h` signed agreements before Task 1 was computed on `imapp1019_2.h`, this provider managed to complete Tasks 4 and Task 5 before they downloaded the `action_log` file and completed their first task.

## Single run

Sometimes you don't need to run tasks in parallel and a single run is sufficient. In such cases, you can use the `run()` method as demonstrated in the example below.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/docs-examples/examples/executing-tasks/single-run.mjs" language="javascript" /%}

The requestor script runs a single task defined by a task function: `ctx.run("node -v")`. The output of the command is available through `stdout` of the `result` object returned from the `ctx.run()` function:

Below, you can see the script logs:

![Single run](/run_log.png 'Requestor script output logs')

In the logs, we can see that the requestor uses the Goerli network for payments (a test network). The task was executed once on a single provider.

In the table, we see a summary of the costs (paid here in test GLM), along with the result of the command which outputs the version of the node in the image deployed on the provider.
