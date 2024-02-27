---
title: Enhancing Golem Network Projects with the Reputation System
description: Discover how to leverage the Reputation System package in your Node.js projects on the Golem Network to filter high-quality providers, optimizing the performance and reliability of your tasks.
pageTitle: Optimize Your Golem Network Projects with the Reputation System - Developer Tutorial
type: Tutorial
---

# Leveraging the Reputation System

## Introduction

Learn how the Reputation System can help enchance your applications on the Golem Network by filtering providers to ensure high reliability and optimal performance. This tutorial builds upon the basics covered in our [Quickstart guide](/docs/creators/javascript/quickstarts/quickstart), focusing on the transition from testnet to mainnet, where the selection of reliable providers becomes important.

## Prerequisites

Ensure the Yagna service is installed, running, and configured with the `try_golem` app-key.

## Understanding the Reputation System

The Golem Network's Reputation System helps match requestors with dependable providers by evaluating their task success rates and uptime. This feature proves particularly useful when transitioning projects from the testnet to the mainnet, safeguarding against unreliable and broken providers. The Reputation System allows users to customize the weights of these metrics to suit their project needs. And there's more to look forward to; the next version of the system will include the option to select providers based on performance metrics, making sure they're the perfect match for what you need to achieve.

## Implementing the Reputation System in Your Project

Let's integrate the Reputation System into a simple Node.js project. The process involves minimal modifications but significantly improves provider selection.

First, ensure your project folder is set up and the required package is installed:

```bash
mkdir golem-reputation-example
cd golem-reputation-example
npm init
npm i @golem-sdk/golem-js
```

### Incorporating the Reputation System into Your Script

First, let's import the Reputation System into your project's script and create an instance of it. This instance will be responsible for fetching the reputation data of providers. With this data at hand, you can filter out the providers based on their reputation scores, ensuring that only reliable and high-performing providers are considered for your tasks.

To incorporate the Reputation System, open your project's main JavaScript file and update it to include the creation of a `ReputationSystem` instance and its integration into the `TaskExecutor`. The following example script demonstrates how to achieve this along with a simple task execution:

To incorporate the Reputation System, open your project's main JavaScript file and update it to include the creation of a `ReputationSystem` instance and its integration into the `TaskExecutor`. The following example script demonstrates how to achieve this along with a simple task execution:

```js
import { TaskExecutor, ReputationSystem, sleep } from '@golem-sdk/golem-js'
;(async function main() {
  console.log('This test runs on the Polygon network, and costs will occur.')
  console.log('If you wish to stop, press Ctrl+C.')
  console.log('The test will start after a 5-second pause...')
  await sleep(5) // Pause for 5 seconds

  // Create a ReputationSystem instance to fetch and use reputation data
  const reputationSystem = await ReputationSystem.create()

  // Create a TaskExecutor with a reputation-based proposal filter
  const executor = await TaskExecutor.create({
    payment: { network: 'polygon' },
    package: 'golem/alpine:latest',
    proposalFilter: reputationSystem.proposalFilter(),
  })

  try {
    await executor.run(async (ctx) => {
      const result = await ctx.run("echo 'Hello World'")
      console.log(result.stdout) // Outputs "Hello World"
    })
  } catch (error) {
    console.error('An error occurred during the computation:', error)
  } finally {
    await executor.shutdown() // Properly shut down the executor
  }
})()
```

This script starts off by reminding you that it will run on the Polygon network, which means real transaction costs will be involved. After a short wait, it initializes the Reputation System and sets up a `TaskExecutor` that uses a reputation-based filter for selecting providers. This ensures that only providers who have demonstrated reliability and performance are selected for executing your task.

### Customizing Provider Selection with Weight Adjustments

The Reputation System allows for customization of provider selection criteria through weight adjustments. This means you can prioritize certain aspects of a provider's performance, such as their success rate or uptime, to better match your project's needs. Here's how you can adjust these weights:

```js
// Assuming reputationSystem is your instance of ReputationSystem
reputationSystem.setProposalWeights({
  uptime: 0.7,
  successRate: 0.3,
})
```

In this example, uptime is given a higher weight compared to the success rate. This means that when selecting providers, the system will favor those with better uptime more heavily. You can experiment with these weights to find the optimal balance for your specific project requirements.

## Why Adjusting Weights is Useful

Adjusting the weights for provider selection lets you focus on what really matters for your project, be it being always online or making sure every task is done right. By changing these weights, you have more control over picking providers, aiming for the best match for your project's success.

For example, if it's critical for your project to always be available, you might value uptime more. This way, the Reputation System looks for providers that are rarely offline, upping your project's reliability. Or, if you care most about tasks being done without errors, focusing on success rate might be your go-to.

Being able to customize the selection of providers offers a straightforward advantage. It enables you to filter through providers to find those that align with your project's unique needs. This ability to refine your choices according to specific criteria simplifies the task of working with the Reputation System. As a result, your projects can be completed more efficiently and with better outcomes. Familiarizing yourself with this system and applying it smartly can help your projects on the Golem Network achieve a higher level of reliability and performance.
