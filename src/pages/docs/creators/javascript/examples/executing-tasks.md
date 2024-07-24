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

Create a project folder, initialize a Node.js project, and install libraries.

```bash
mkdir golem-example
cd golem-example
npm init
npm install @golem-sdk/task-executor
npm install @golem-sdk/pino-logger
```

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Running tasks in parallel

If you want to run your tasks in parallel, you can call `.run()` multiple times on the same `TaskExecutor` object. The maximum number of concurrently engaged providers is defined by the `maxParallelTasks` parameter (default is 5). Providers can be engaged more than once until all tasks are executed.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/executing-tasks/map.mjs" language="javascript" /%}

{% alert level="warning" %}

Note that we utilize the `Promise.allSettled()` method to process outputs from `futureResults` which is iterable of promises. If we used `Promise.all()` it would reject when any of the input's promises are rejected, so if any of the tasks fail (after retries) user will not get _any_ results at all.

{% /alert %}

In the example, we have an array of 5 elements `[1, 2, 3, 4, 5]` and we `map` over each value to define a separate step for each element in the array. Each step is a command that prints the value of the element to the console.

![Multiple run map](/te/map_log_1.png)
![Multiple run map](/te/map_log_2.png)
![Multiple run map](/te/map_log_3.png)
![Multiple run map](/te/map_log_4.png)

In the output logs, you can have some interesting observations:

Even though provider `testnet-c1-15` was engaged before provider `jiuzhang.h`, the latter started and completed the task execution of its task (2) before the former (1). In the network, different nodes offer varying performance and some need more time start computations.

## Defining the number of providers used

You can set the maximum number of providers to be engaged at the same time. The TaskExecutor will scan available proposals and engage additional providers if the number of actually engaged providers is lower than `maxParallelTasks` and there are still some tasks to be executed.
If you do not define this parameter, a default value of 5 will be used.

Note that the actual number of engaged providers might be:

- lower than `maxParallelTasks`, if there are not enough providers available in the network.
- higher, when considering the total number of engaged providers for all the tasks in your job. Providers might get disconnected or simply fail, in which case the TaskExecutor will engage another one to maintain the number of active workers at the level defined by `maxParallelTasks`.

Below, you can see how to define the maximum number of providers to be engaged.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/executing-tasks/max-parallel-tasks.mjs" language="javascript" /%}

## Setting up a provider

Normally, when a larger job is divided into smaller tasks to be run in parallel on a limited number of providers, these providers might be utilized for more than one task. In such cases, each task is executed in the same environment as the previous task run on that provider. To optimize performance, you might decide that some setup tasks need only be run once per provider. This can be particularly useful if you have to send a large amount of data to the provider.

This example requires an `action_log.txt` file that can be created with the following command:

```bash
echo Action log: > action_log.txt
```

You can address such a need using the `setup` object that is part of the TaskExecutor options. Here is an example:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/executing-tasks/on-activity-ready.mjs" language="javascript" /%}

Note the `task : { setup: async (exe) => {} }` function which is an async task function that we use to orchestrate our commands run on providers.

```js
 task: {
      maxParallelTasks: 3,
      setup: async (exe) => {
        console.log(exe.provider.name + " is downloading action_log file");
        await exe.uploadFile("./action_log.txt", "/golem/input/action_log.txt");
 },
 },
```

In the code, we decreased the `maxParallelTasks` value from the default value of 5, to make sure that some of our five tasks will be run on the same provider.

The `setup` function is used to upload a file to a remote computer that will be used to log all future activity run on this provider. The code used in the `setup` contains an additional `console.log` to demonstrate that even if the whole job consists of five tasks, the task function used in `setup` will be executed only once per provider. (Unless the provider disengages and is engaged again - in such a situation, its virtual machine would be created anew, and we would upload the file again there).

Note how we utilized the `exe` exeUnit context to get the provider name using the `provider.name` property.

Inside each task function, we employed the `beginBatch()` to chain multiple commands - you can see more about this feature in the [Defining Tasks](/docs/creators/javascript/examples/composing-tasks) article.

![OnActivityReady](/te/onactivityready_1.png)
![OnActivityReady](/te/onactivityready_2.png)
![OnActivityReady](/te/onactivityready_3.png)
![OnActivityReady](/te/onactivityready_4.png)

The log from this example shows that even if the provider `fractal_01_2.h` was eventually
used to execute 3 tasks, it uploaded the log only once. Its output file - downloaded after the last task was executed - contained the following:

```
Action log:
processing item: 3
processing item: 4
processing item: 5
```

This log again illustrates that providers offer different performance levels. `fractal_01_2` signed an agreement as the last one of all three engaged, but deployed the image before the other two providers (it could happen that this provider has already cached that image). As Task 3 was computed on `fractal_01_2`, it received Tasks 4 and 5 and finished them all (the task in the example does not take much time to complete) before the others completed their tasks.

## Single run

Sometimes you don't need to run tasks in parallel and a single run is sufficient. In such cases, you can use the `run()` method as demonstrated in the example below.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/executing-tasks/single-run.mjs" language="javascript" /%}

The requestor script runs a single task defined by a task function: `exe.run("node -v")`. The output of the command is available through `stdout` of the `result` object returned from the `exe.run()` method:

Below, you can see the script logs:

![Single run](/te/run_log_1.png 'Requestor script output logs')
![Single run](/te/run_log_2.png 'Requestor script output logs')

In the logs, we can see that the requestor uses the Holesky network for payments (a test network).

```
[18:13:33.960] INFO: Created allocation { ... "platform":"erc20-holesky-tglm"}
```

The task was executed once on a single provider.

In the logs,

```
[18:13:44.283] INFO: Negotiation summary: {"agreements":1,"providers":1}
[18:13:44.283] INFO: Agreement 1: {"agreement":"b50baed3e2","provider":"testnet-c1-9","tasks":1,"cost":"0.000007024626529167","paymentStatus":"paid"}
[18:13:44.283] INFO: Cost summary: {"totalCost":"0.000007024626529167","totalPaid":"0.000007024626529167"}

```

we see a summary of the costs (paid here in test GLM), along with the result of the command which outputs the version of the node in the image deployed on the provider:

```
Task result: v20.15.0
```
