---
description: Switching to mainnet
title: Switching to mainnet
type: Example
---

# JS Task API Examples: switching to mainnet

## Introduction

This section is aimed mainly at **requestors** wishing to switch from running simple test tasks on our `testnet` to launching production payloads utilizing the vast number of providers on the `mainnet`.

By default, the JS SDK will execute tasks on the `testnet`. It is a development network with a limited amount of providers and limited amounts of computational resources available. If you would rather need a larger amount of providers to compute on, you should switch to the mainnet.

In this article, we will show how to run your tasks on Polygon.

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

{% alert level="info" %}

This example has been designed to work with the following environments:

- OS X 10.14+, Ubuntu 20.04 or Windows
- Node.js 16.0.0 or above

{% /alert %}

## How to run examples

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/golem-js` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/golem-js
```

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Running your tasks on the Polygon Network

In this example, we create the TaskExecutor with additional parameters that indicate we intend to run our task on the Polygon platform.

```js
import { TaskExecutor } from '@golem-sdk/golem-js'

;(async () => {
  const executor = await TaskExecutor.create({
    payment: { network: 'polygon' },
    package: '529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4',
    yagnaOptions: { apiKey: 'try_golem' },
  })

  const result = await executor.run(
    async (ctx) => (await ctx.run('node -v')).stdout
  )
  await executor.end()

  console.log('Task result:', result)
})()
```

In the script output, you can see that now the network is a `Polygon`.
