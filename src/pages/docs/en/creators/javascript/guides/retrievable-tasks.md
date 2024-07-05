---
title: Retrievable tasks (Job API)
description: Explore the Job API on Golem Network, offering enhanced control over task states, results, and error messages, ideal for complex tasks needing persistent data handling.
pageTitle: Job API in Golem Network - Advanced Task Control and State Management

type: Guide
---

# Retrievable tasks (Job API)

## Introduction

The [Task Model](/docs/en/creators/javascript/guides/task-model) is a great way to get started with Golem Network. It allows you to run tasks on the network in a simple and straightforward way - you just need to call the `run()` method and await the promise. However, it has some limitations. With more complex and time-consuming tasks, you may want to have access to the state, results and/or error messages of the task outside the function scope. This is where the Job API comes in handy.

## Job API

The Job API is very good at three things:

- **Retrieving the state of the task** - you can check if the task is still running, or if it has finished and get the results or error message.
- **Cancelling a running task** - you can cancel a running task at any time.
- **Reacting to task state changes** - you can easily add callbacks that will be called when the task state changes (e.g. when the task begins execution on the provider, or when it finishes).

{% alert level="info" %}
To see the Job API in action, take a look at [this quickstart](/docs/en/creators/javascript/quickstarts/retrievable-task). To see how this API is used in a real-world scenario, check out [the express tutorial](/docs/en/creators/javascript/tutorials/rest-api-with-express)
{% /alert %}

## Usage

### `GolemNetwork` object

The starting point for interacting with the Job API is the `GolemNetwork` object. This singular client establishes a connection to yagna and manages the global configuration utilized by every job. Here's how you can create it:

```javascript
import { GolemNetwork } from '@golem-sdk/golem-js'

const golemClient = new GolemNetwork({
  yagna: {
    apiKey: 'try_golem',
  },
  activity: {
    activityExecuteTimeout: 1000 * 60 * 60,
  },
  work: {
    activityPreparingTimeout: 1000 * 60 * 5,
  },
  // ... other configuration options
})
await golemClient
  .init()
  .then(() => {
    console.log('Connected to the Golem Network!')
  })
  .catch((error) => {
    console.error('Failed to connect to the Golem Network:', error)
  })
```

### Creating a job

The `Job` object represents a single self-contained unit of work that can be executed on the Golem Network. It's created by calling the `createJob()` method on the `GolemNetwork` object. Here's how you can create a job and begin its execution:

```javascript
const job =
  golemClient.createJob <
  string >
  {
    package: {
      imageTag: 'golem/alpine:latest',
      minStorageGib: 8,
      minCpuCores: 4,
      minMemGib: 8,
    },
    // ... other configuration options
  }

job.startWork(async (ctx) => {
  const response = await ctx.run("echo 'Hello, Golem!'")
  return response.stdout
})

const result = await job.waitForResult()
```

### Cancelling a job

While the job is running, you can cancel it at any time by calling the `cancel()` method:

```javascript
const job =
  golem.createJob <
  string >
  {
    package: {
      imageTag: 'golem/alpine:latest',
    },
  }

job.startWork(async (ctx) => {
  const response = await ctx.run("echo 'Hello, Golem!'")
  return response.stdout
})

await job.cancel()
```

### Listening to job state changes

The job object exposes an `EventEmitter` that emits whenever the job state changes. Here's how you can listen to these events:

```javascript
const job =
  golem.createJob <
  string >
  {
    package: {
      imageTag: 'golem/alpine:latest',
    },
  }

job.events.addListener('started', () => {
  console.log('Job started event emitted')
})
job.events.addListener('success', () => {
  console.log('Job success event emitted')
})
job.events.addListener('ended', () => {
  console.log('Job ended event emitted')
})
job.startWork(async (ctx) => {
  const response = await ctx.run("echo 'Hello, Golem!'")
  return response.stdout
})

const result = await job.waitForResult()
```

Here's a list of all the events emitted by the job object:

- `created` - emitted immediately after the job is created and initialization begins.
- `started` - emitted when the job finishes initialization and work begins.
- `success` - emitted when the job completes successfully and cleanup begins.
- `error` - emitted when the job fails and cleanup begins.
- `canceled` - emitted when the job is canceled by the user.
- `ended` - emitted when the job finishes cleanup after success, error or cancellation.

### Getting the job state

You can get the current job state by accessing the `state` property:

```javascript
const job =
  golem.createJob <
  string >
  {
    package: {
      imageTag: 'golem/alpine:latest',
    },
  }

console.log('Job state before work starts:', job.state)

job.startWork(async (ctx) => {
  const response = await ctx.run("echo 'Hello, Golem!'")
  return response.stdout
})

const result = await job.waitForResult()

console.log('Job state after work ends:', job.state)
```

Here's a list of all the possible job states:

- `new` - demand for the job has been created and is waiting for a provider to pick it up.
- `pending` - the job has been picked up by a provider and is in progress.
- `done` - the job has finished successfully.
- `rejected` - an error occurred while trying to run the job.

### Getting the job results or error message

`waitForResult()` is not the only way to get the job results or error message. You can also access them directly by accessing the `result` and `error` properties:

```javascript
const job =
  golem.createJob <
  string >
  {
    package: {
      imageTag: 'golem/alpine:latest',
    },
  }

job.startWork(async (ctx) => {
  const response = await ctx.run("echo 'Hello, Golem!'")
  return response.stdout
})

try {
  const result = await job.waitForResult()
  console.log('Job finished with result:', result)
  // or
  console.log('Job finished with result:', job.result)
} catch (error) {
  console.error('Job failed with error:', job.error)
}
```

### Retrieving the job by ID

You can retrieve the job by ID by calling the `getJobById()` method on the `GolemNetwork` object:

```javascript
const job =
  golem.createJob <
  string >
  {
    package: {
      imageTag: 'golem/alpine:latest',
    },
  }

job.startWork(async (ctx) => {
  const response = await ctx.run("echo 'Hello, Golem!'")
  return response.stdout
})
const jobId = job.id

// ... later in the code

const sameJobAgain = golemClient.getJobById(jobId)
const results = await sameJobAgain.waitForResult()
```

## When not to use the Job API

The Job API is great for running isolated tasks that may take a long time to complete. However, it's not a good fit for scenarios where you need to run multiple short-lived tasks in parallel. For these scenarios, you should use the [Task Model](/docs/en/creators/javascript/guides/task-model) instead.
