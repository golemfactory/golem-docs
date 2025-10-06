---
title: 'Project JavaScript API reference'
pageTitle: 'Project JavaScript API reference - Task API Reference'
description: 'Explore the detailed API reference documentation for the Project JavaScript API reference within the Task API SDK for the Golem Network.'
type: 'JS Task API Reference'
---

# Task Executor

![GitHub](https://img.shields.io/github/license/golemfactory/golem-sdk-task-executor)
![npm](https://img.shields.io/npm/v/@golem-sdk/task-executor)
![node-current](https://img.shields.io/node/v/@golem-sdk/task-executor)
![npm type definitions](https://img.shields.io/npm/types/@golem-sdk/task-executor)

<!-- TOC -->

- [Task Executor](#task-executor)
  - [What's TaskExecutor?](#whats-taskexecutor)
  - [System requirements](#system-requirements)
    - [Simplified installation steps](#simplified-installation-steps)
      - [Join the network as a requestor and obtain test tokens](#join-the-network-as-a-requestor-and-obtain-test-tokens)
      - [Obtain your `app-key` to use with TaskExecutor](#obtain-your-app-key-to-use-with-taskexecutor)
  - [Installation](#installation)
  - [Building](#building)
  - [Usage](#usage)
    - [Hello World example](#hello-world-example)
    - [More examples](#more-examples)
  - [Supported environments](#supported-environments)
  - [Documentation](#documentation)
  - [Debugging](#debugging)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [See also](#see-also)
  <!-- TOC -->

## What's TaskExecutor?

TaskExecutor facilitates building of applications that utilize the computational power of the Golem Network
in a transparent and efficient manner. It is a [@golem-sdk/golem-js](https://github.com/golemfactory/golem-js) based library allowing running computation tasks,
designed for batch map-reduce like scenarios.

With TaskExecutor, developers can focus on implementing their computational tasks without delving into the details of communicating
with the Golem Network or managing modules such as payments or market.

## System requirements

To use `task-executor`, it is necessary to have yagna installed, with a **recommended minimum version of v0.15.0**. Yagna is a
service that communicates and performs operations on the Golem Network, upon your requests via the SDK. You
can [follow these instructions](https://docs.golem.network/docs/creators/javascript/quickstarts/quickstart#install-yagna-2)
to set it up.

### Simplified installation steps

In order to get started and on Golem Network and obtain test GLM tokens (`tGLM`) that will allow you to build on the
test network, follow these steps:

#### Join the network as a requestor and obtain test tokens

```bash
# Join the network as a requestor
curl -sSf https://join.golem.network/as-requestor | bash -

# Start the golem node on your machine,
# you can use `daemonize` to run this in background
yagna service run

# IN SEPARATE TERMINAL (if not daemonized)
# Initialize your requestor
yagna payment init --sender --network hoodi

# Request funds on the test network
yagna payment fund --network hoodi

# Check the status of the funds
yagna payment status --network hoodi
```

#### Obtain your `app-key` to use with TaskExecutor

If you don't have any app-keys available from `yagna app-key list`, go ahead and create one with the command below.
You will need this key in order to communicate with `yagna` from your application via `golem-js`.You can set it
as `YAGNA_APPKEY` environment variable.

```bash
yagna app-key create my-golem-app
```

## Installation

`@golem-sdk/task-executor` is available as a [NPM package](https://www.npmjs.com/package/@golem-sdk/task-executor).

```bash
npm install @golem-sdk/task-executor
```

## Building

To build a library available to the Node.js environment:

```bash
npm run build
```

This will generate production code in the `dist/` directory ready to be used in your Node.js or browser applications.

## Usage

### Hello World example

```ts
import { TaskExecutor } from '@golem-sdk/task-executor'
import { pinoPrettyLogger } from '@golem-sdk/pino-logger'

;(async function main() {
  const executor = await TaskExecutor.create({
    logger: pinoPrettyLogger({ level: 'info' }),
    demand: {
      workload: {
        imageTag: 'golem/alpine:latest',
      },
    },
    market: {
      rentHours: 0.5,
      pricing: {
        model: 'linear',
        maxStartPrice: 0.5,
        maxCpuPerHourPrice: 1.0,
        maxEnvPerHourPrice: 0.5,
      },
    },
  })
  try {
    await executor.run(async (exe) =>
      console.log((await exe.run("echo 'Hello World'")).stdout)
    )
  } catch (error) {
    console.error('Computation failed:', error)
  } finally {
    await executor.shutdown()
  }
})()
```

### More examples

The [examples directory](./examples) in the repository contains various usage patterns for the TaskExecutor. You can browse
through them and learn about the recommended practices. All examples are automatically tested during our release
process.

In case you find an issue with the examples, feel free to submit
an [issue report](https://github.com/golemfactory/golem-sdk-task-executor/issues) to the repository.

You can find even more examples and tutorials in
the [JavaScript API section of the Golem Network Docs](https://docs.golem.network/docs/creators/javascript).

## Supported environments

The library is designed to work with LTS versions of Node (starting from 18)
and with browsers.

## Documentation

- Learn about the Task Executor basic building block - the _task function_ in the [Task Model documentation](./docs/TaskModel)
- Learn the [Golem Market Basics](./docs/GolemMarketBasics) to optimize your interactions with the Providers

## Debugging

The library uses the [debug](https://www.npmjs.com/package/debug) package to provide debug logs. To enable them, set the `DEBUG` environment variable to `task-executor:*` to see the related log lines. For more information, please refer to the [debug package documentation](https://www.npmjs.com/package/debug).

## Testing

Read the dedicated [testing documentation](./TESTING) to learn more about how to run tests of the library.

## Contributing

It is recommended to run unit tests and static code analysis before committing changes.

```bash
npm run lint
# and
npm run format
```

## See also

- [Golem](https://golem.network), a global, open-source, decentralized supercomputer that anyone can access.
- Learn what you need to know to set up your Golem requestor node:
  - [Golem JS Quickstart](https://docs.golem.network/docs/quickstarts/js-quickstart)
  - [Golem JS Examples](https://docs.golem.network/docs/creators/javascript/examples)
  - [Golem JS Tutorials](https://docs.golem.network/docs/creators/javascript/tutorials#golem-js-tutorials)
  - [Golem JS Guides](https://docs.golem.network/docs/creators/javascript/guides)
- Learn about preparing your own Docker-like images for
  the [VM runtime](https://docs.golem.network/docs/creators/javascript/examples/tools/converting-docker-image-to-golem-format)
