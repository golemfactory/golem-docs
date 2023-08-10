---
description: Switching to mainnet
title: Switching to mainnet
---

{% alert level="info" %}

# Prerequisites 
Yagna service installed and running with `try_golem` app-key configured.
Some funds available on Polygon Network: both GLM and MATIC.

# Setting up project

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/golem-js` library.

```bash
mkdir golem-example
npm init
npm i @golem-sdk/golem-js
```
{% /alert %}

## Introduction

By default JS SDK will execute your task in testnet - this is a development network, where you cannot expect performance and capacity however, you pay in test GLM. If you would rather utilize the larger pool of providers, you should switch to the main network.

In this article, we will show how to run your tasks on Polygon.

## Running your tasks on the Polygon Network 

In this example, we create the TaskExecutor with additional parameters that indicate that we intend to run our task on the Polygon platform.

```js
import { TaskExecutor } from "@golem-sdk/golem-js";

(async () => {
  const executor = await TaskExecutor.create({
    subnetTag: "public",  // do we need to show subnet ??
    payment: { driver: "erc-20", network: "polygon" },
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }
  });

  const result = await executor.run(
    async (ctx) => (await ctx.run("node -v")).stdout);
  await executor.end();

  console.log("Task result:", result);
})();
```

In the script output, you can see that now the network is a `Polygon`.

