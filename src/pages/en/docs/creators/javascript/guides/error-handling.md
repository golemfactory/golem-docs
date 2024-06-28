---
description: A brief introduction to error handling in Golem JS SDK for application developers.
title: Error handling in Golem JS SDK
type: Guide
---

# Error Handling in the Golem JS SDK

## Introduction

This article will explain the basics of error handling in Golem JS SDK.

## Golem Network

When engaging with the Golem Network, it's critical to anticipate and plan for various scenarios. Errors can occur at any stage, from initializing your application to executing tasks and eventually cleaning up. Understanding these potential pitfalls is key to building robust applications on Golem.

Below we'll discuss a few of the most common errors you may encounter and how to handle them.

## Basic Error Handling structure

A typical application will consist of a few parts:

- Setting up the SDK
- Executing work on Golem
- Cleaning up

Each of these parts can throw an error, and you should handle them accordingly.

If your application is a simple script, you can use a `try/catch` block to handle errors, similarly to how its done in most of the examples:

```javascript
import { TaskExecutor } from '@golem-sdk/task-executor'

async function main() {
  const executor = await TaskExecutor.create({
    package: 'golem/alpine:latest',
    midAgreementPaymentTimeoutSec: 10,
    debitNotesAcceptanceTimeoutSec: 10,
  })

  try {
    const results = await executor.run(async (ctx) => {
      const res1 = await ctx.run('echo "Hello"')
      const res2 = await ctx.run('echo "World"')
      return `${res1.stdout}${res2.stdout}`
    })
    console.log(results)
  } catch (err) {
    console.error('An error occurred during execution:', err)
  } finally {
    await executor.shutdown()
  }
}

main().catch((err) => {
  console.error('An error occurred during execution:', err)
})
```

As you can see, we use a `try/catch` block to handle errors that may occur during the execution of the `run` method.
We also use a `finally` block to make sure that the executor is shut down properly.

The shutdown process releases all the resources used by the executor, terminates all the running tasks and waits for all transactions to be finalized.
This is really important, especially during development where your code might be unstable.
If your code fails, and you don't pay for the resources you used, you will be banned from executing tasks on Golem.

You might also notice the `TaskExecutor.create()` is outside the `try/catch` block.
This is because the create process won't allocate any resources on Golem, so there won't be any consequences if your application quits at this point.
However, it is good practice to handle errors here as well.
Depending on your use-case, you may want to handle some specific exception situations in a try/catch block
or as it is the case here, handle the error higher up in the call chain.

## Error handling in tasks

Context commands, like `run()` will not throw on error.
They will return a result object instead that contains the result of the command.
You can check the `result` property to see if the command was successful or not.

Example:

```typescript
async function worker(ctx: WorkContext) {
  const result = await ctx.run('commmand-that-does-not-exist "Hello"')
  if (result.result === ResultState.Ok) {
    console.log('Command executed successfully')
  } else {
    console.error('Command failed:', result.stderr)
  }
}
```

If you are performing operations that can throw an error, you should wrap them in a `try/catch` block,
else you'll trigger a retry of the task (see below).

### Error propagation from run

Exceptions thrown from within a task worker function will be intercepted by the task executor.

By default, a retry mechanism will relaunch the task on a different provider.
This is done to ensure that the task is executed, even if the first provider fails.

If you run out of retries (the number is configurable), the exception will be rethrown from the `run` method,
and you will have the opportunity to handle it.

## Signal handling

On unix systems, your application may receive a signal from the operating system.
This can happen for example when you press `Ctrl+C` in your terminal.

By default, the SDK takes over handling `SIGINT` (`Ctrl+C`), `SIGTERM`, `SIGBREAK` and `SIGHUP` signals.
When a signal is received, the SDK will try to gracefully shut down the executor.

{% alert level="info" %}
During that time, the TaskExecutor will likely log warnings and errors about activities being interrupted. This is normal behaviour.
{% /alert %}

If you want to handle signals yourself, you can disable the default behaviour by setting the `skipProcessSignals` option to `false` when creating the executor.
If you do so, you will be responsible for shutting down the executor when a termination signal is received.

```typescript
const executor = await TaskExecutor.create({
  skipProcessSignals: true,
})
```

---
