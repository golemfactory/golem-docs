---
title: JS Task API - Switching from Testnet to Mainnet in practical examples
description: Learn how to switch from testnet to mainnet for executing tasks on the Golem Network using the JS SDK, with a focus on requestors and the use of Polygon.
pageTitle: Transition to Golem Mainnet for Enhanced Task Execution - Best Practices and Examples
type: Example
---

# JS Task API Examples: switching to mainnet

## Introduction

This section is aimed mainly at **requestors** wishing to switch from running simple test tasks on our `testnet` to launching production payloads utilizing the vast number of providers on the `mainnet`.

By default, the JS SDK will execute tasks on the `testnet`. It is a development network with a limited amount of providers and limited amounts of computational resources available. If you would rather need a larger amount of providers to compute on, you should switch to the `mainnet`.

In this article, we will show how to run your tasks on Polygon.

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

## How to run examples

Create a project folder, initialize a Node.js project, and install libraries.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/task-executor
npm i @golem-sdk/pino-logger
```

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Running your tasks on the Polygon Network

In this example, we create the TaskExecutor with additional parameters that indicate we intend to run our task on the Polygon platform.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/switching-to-mainnet/run-on-polygon.mjs" language="javascript" /%}

In the script output, you can see that now the network is a `Polygon`.

```
[12:59:00.166] INFO: Created allocation {"allocationId":"d833b2a8-971c-422f-8573-96c757c250ac","budget":"20","platform":"erc20-polygon-glm"}
```
