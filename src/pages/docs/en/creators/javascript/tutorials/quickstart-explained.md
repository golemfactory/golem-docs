---
title: Node.js Application Development on Golem Network
description: Learn to create a JavaScript application using the Golem Network with our tutorial where we explain the Quickstart example and steps for setting up Node.js projects and utilizing Task Executors.
pageTitle: Mastering Node.js on Golem Network - Interactive Tutorial for Developers
type: Tutorial
---

# JS Quickstart Explained

## Introduction

This tutorial will utilize the same example found in [Quickstart](/docs/en/creators/javascript/quickstarts/quickstart) and include thorough explanations.

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

## Setting up the project

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/task-executor` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/task-executor
```

## JS script structure

The basic structure of the script:

```js
import { TaskExecutor } from '@golem-sdk/task-executor'
;(async () => {
  //... Function body in here
})()
```

Here we do two things:

- import TaskExecutor from @golem-sdk/task-executor and
- create IIAFE (Immediately Invoked Async Function Expression). It has an async function declaration because TaskExecutor provides async methods.

## Utilizing Task Executor instance

Inside the function body, there will be a sequence of 3 steps, that constitute the simplest Task Executor lifecycle. Task Executor is a primary object provided by our Task API.

```js
import { TaskExecutor } from '@golem-sdk/task-executor'
;(async () => {
  // 1. Create Task Executor Instance
  const executor = await TaskExecutor.create({
    package: '529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4',
    yagnaOptions: { apiKey: 'try_golem' },
  })

  try {
    // 2. Run the task
    const result =
      await executor.run(/*taskToRunOnProvider to be provided here */)
    console.log('Task result:', result)
  } catch (err) {
    console.error('An error occurred:', err)
  } finally {
    // 3. Finish Task Executor
    await executor.shutdown()
  }

  console.log('Task result:', taskResult)
})()
```

In (1) we create a TaskExecutor Instance using a factory method. In this example, we use the minimal set of parameters: namely the hash indicating the image with Node.js installed - the image we will deploy on the provider and api-key value - a key that will give us access to `yagna` REST API. `yagna` is a service that connects us to the network.
We use api-key that was generated in the process of [Yagna installation](/docs/en/creators/tools/yagna/yagna-installation-for-requestors)

```js
const executor = await TaskExecutor.create({
  package: '529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4',
  yagnaOptions: { apiKey: 'try_golem' },
})
```

Next (2) we run the task. Here we use a run method that accepts a task function as its argument. We will define the task function in a moment. We store the result of the `executor.run()` in the `result` variable.

There are other methods that allow you to execute tasks. They are briefly presented in [Task API Guide](/docs/en/creators/javascript/guides/task-model#main-task-api-features) and explained in [examples](/docs/en/creators/javascript/examples) section.

```js
const result = await executor.run(taskToRunOnProvider)
```

Finally (3) we gracefully finish task executor:

```js
await executor.shutdown()
```

## Defining task function

Let’s see how the task is defined and replace the `taskToRunOnProvider` placeholder we used in the previous step.

The task is defined as a function that implements the Worker interface. This function will get its parameter `workerContext` from the executor. It is an object that lets you run your commands in the scope of one task on one provider.

```js
const taskToRunOnProvider = async (ctx) => // task is defined here;
```

Our task in this example is simple and consists of a single command: namely `node -v`. We will use the async method `run()` of workerContext `ctx`. The output of this method is a `Promise` of a `result` object, once it is resolved it contains the output of the command we run, available as a `stdout` property.

```js
const taskToRunOnProvider = async (ctx) => (await ctx.run('node -v')).stdout
```

The output of the task function is passed to `executor.run()` and assigned to taskResult.
Finally, we print it to the console.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/quickstarts/quickstart/requestor.mjs" language="javascript" /%}

## Summary

We had created the simplest requestor script, that ran a single command on a remote computer.
To achieve it we had:

- imported @golem-sdk/task-executor lib
- utilized Immediately Invoked Async Function Expression
- created Task Executor
- defined a task as a function that runs our command
- finally read the command result from the result object and provide it to the user

In this example, we ran a simple command (node -v) in a shell on the remote computer. You can run other executable programs in more interesting scenarios. See other examples for more advanced use cases.
