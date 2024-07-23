---
title: Node.js Application Development on Golem Network
description: Learn to create a JavaScript application using the Golem Network with our tutorial where we explain the Quickstart example and steps for setting up Node.js projects and utilizing Task Executor.
pageTitle: Mastering Node.js on Golem Network - Interactive Tutorial for Developers
type: Tutorial
---

# JS Task Executor Quickstart Explained

## Introduction

This tutorial will utilize the same example used in the [Quickstart](/docs/creators/javascript/quickstarts/quickstart) and include thorough explanations.

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

## Setting up the project

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/task-executor` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/task-executor
npm i @golem-sdk/pino-logger
```

## JS script structure

The basic structure of the script:

```js
import { TaskExecutor } from '@golem-sdk/task-executor';
(async () => {
  //... Function body in here
})()
```

Here we do two things:

- import TaskExecutor from @golem-sdk/task-executor and
- create IIAFE (Immediately Invoked Async Function Expression). It has an async function declaration because TaskExecutor provides async methods.

## Utilizing Task Executor instance

Inside the function body, there will be a sequence of 3 steps, that constitute the simplest Task Executor lifecycle. Task Executor is a primary object provided by our Task API.

```js
(async () => {
  // 1. Create a Task Executor Instance
    const executor = await TaskExecutor.create({
    ...
});
try {
    // 2. Run the task
    const result = await executor.run();

} catch (err) {
    console.error("An error occurred:", err);
 } finally {
    // 3. Close Task Executor
    await executor.shutdown();
 }
})();
```

In (1)

```js
const executor = await TaskExecutor.create({
...
});
```

we create a TaskExecutor Instance using a factory method. Several parameters can be provided to define the environment where your tasks will be executed, the behavior of your requestor script, and the way it interacts with the Golem Network.
They are explained later in this article.

Next in (2)

```js
const result = await executor.run(
...
);
```

we run the task. Here we use a `run` method that accepts a task function as its argument. We will define the task function in a moment. We store the result of the `executor.run()` in the `result` variable.

There are other ways to execute tasks. They are briefly presented in [Task API Guide](/docs/creators/javascript/guides/task-model#main-task-api-features) and explained in [examples](/docs/creators/javascript/examples) section.

Finally in (3) we gracefully finish the task executor:

```js
await executor.shutdown()
```

## Task Executor options

Let's look at the Task Executor parameters.

```js
const executor = await TaskExecutor.create({
  logger: pinoPrettyLogger({ level: "info" }),
  api: { key: "try_golem" },
  ...
```

- `logger` - a logger instance - we use a special logger that produces logs easier to read and understand when scripts are run in the terminal, without this line a default logger would be used, which is the [debug logger](https://www.npmjs.com/package/debug).
- `api: {key: }` - a key that will give us access to `yagna` REST API. `yagna` is a service that connects us to the network. In this example, we will use api-key that was generated in the process of [Yagna installation](/docs/creators/tools/yagna/yagna-installation-for-requestors).

```js
...
demand: {
    workload: {
      imageTag: "golem/node:20-alpine",
    },
},
...
```

- In the `demand` section we define the environment needed to run our task. We do it by indicating what image is to be run on a remote node. We will use an image publicly available on the [registry](https://registry.golem.network) portal, therefore it is enough to provide a tag `golem/node:20-alpine` - it indicates an image based on `alpine` distribution and has `node.js` installed. When defining the demand users can also specify other parameters like the minimal number of threads, memory, or disk size as needed.

```js
...
market: {
  rentHours: 0.5,
  pricing: {
    model: "linear",
    maxStartPrice: 0.5,
    maxCpuPerHourPrice: 1.0,
    maxEnvPerHourPrice: 0.5,
  },
}
```

Finally, we define `market` parameters.

- The `rentHour` defines the maximum duration of the engagements with providers before automatic termination.
- In `pricing` we also precise the maximum acceptable prices using the `linear` price model. It will be used to select offers from providers and let you manage the costs of running your tasks.

## Defining task function

Let’s see how the task is defined and replace the `...` placeholder we used in the previous step.

The task is defined as a `TaskFunction`. It is an async function that will get as its parameter an `exeUnit` from the executor. The `exeUnit` is an object that represents the actual environment on the provider and lets you run your commands within the scope of this one TaskFunction on one provider.

Our task in this example is simple and consists of a single command: namely `node -v`. We will use the async method `run()` of exeUnit `exe`. The output of this method is a `Promise` of a `result` object, once it is resolved it contains the output of the command we run, available as a `stdout` property.

Note your `TaskFunction` may consist of multiple commands that allow the user to transfer his data to and from a provider. You can find more information on available commands in [Examples](/docs/creators/javascript/examples/composing-tasks).

```js
async (exe) => (await exe.run('node -v')).stdout
```

The output of the task function is passed to `executor.run()` and assigned to task result `result`.
Finally, we print it to the console.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/quickstarts/quickstart/requestor.mjs" language="javascript" /%}

## Summary

We had created the simplest requestor script, that ran a single command on a remote computer.
To achieve it we had:

- imported @golem-sdk/task-executor lib (and logger)
- utilized Immediately Invoked Async Function Expression
- created Task Executor
- defined a task as a function that runs our command
- finally read the command result from the result object and provide it to the user

In this example, we ran a simple command (node -v) in a shell on the remote computer. You can run other executable programs in more interesting scenarios. Go and explore our other [examples](/docs/creators/javascript/examples).
