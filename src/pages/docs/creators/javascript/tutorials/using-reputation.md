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

The Golem Network's Reputation System aids requestors in finding reliable providers by assessing their task success rates and uptime. This feature is especially beneficial when moving projects from testnet to mainnet, protecting against unreliable and faulty providers. The Reputation System allows users to adjust the importance of these metrics to fit their project needs.

Moreover, the upcoming version of the system will offer the ability to choose providers based on performance metrics, ensuring a perfect match for your requirements.

## Adding the Reputation System in Your Project

Let's incorporate the Reputation System into a straightforward Node.js project. The process requires minimal changes but greatly enhances the selection of trustworthy providers.

Initially, set up your project folder and install the necessary package:

```bash
mkdir golem-reputation-example
cd golem-reputation-example
touch index.mjs
npm init
npm i @golem-sdk/golem-js@beta

```

### Implementing the Reputation System into Your Script

First, import the Reputation System into your project's script and create an instance. This instance fetches the reputation data of providers. Using this data, you can filter providers based on their reputation scores, ensuring that only reliable and high-performing providers are chosen for your tasks.

To implement the Reputation System, open your project's index.mjs file and update it to include the creation of a `ReputationSystem` instance and its integration into the `TaskExecutor`. The following example script exhibits how to do this alongside a simple task execution:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/beta/examples/experimental/reputation/basic.ts" language="typescript" /%}

This script starts by noting that it will run on the Polygon network, which involves real transaction costs. After a brief pause, it initializes the Reputation System and sets up a TaskExecutor that uses a reputation-based filter for provider selection. This method ensures that only providers who have shown reliability are chosen to execute your task.

### Customizing Provider Selection with Weight Adjustments

The Reputation System allows for customization of provider selection criteria through weight adjustments. This means you can prioritize certain aspects of a provider's performance, such as their success rate or uptime, to better match your project's needs. Here's how you can adjust these weights:

```js
reputation.setProposalWeights({
  uptime: 0.7,
  successRate: 0.3,
})
```

In this example, uptime is given a higher weight compared to the success rate. This means that when selecting providers, the system will favor those with better uptime more heavily. You can experiment with these weights to find the optimal balance for your specific project requirements.

## The Benefits of Adjusting Weights

Adjusting the weights for provider selection lets you focus on what's important for your project, whether it's always being online or ensuring every task is done correctly. Changing these weights gives you more control over choosing providers, aiming for the best match for your project's success.

For instance, if your project needs constant availability, you might value uptime more. The Reputation System then looks for providers that are rarely offline, increasing your project's reliability. If you prioritize tasks being done without errors, focusing on success rate might be your preference.

Customizing the selection of providers offers a clear advantage. It allows you to filter providers to find those that align with your project's unique needs. This ability to refine your choices according to specific criteria simplifies working with the Reputation System, leading to more efficient project completion with better outcomes. Familiarizing yourself with this system and applying it smartly can enhance your projects on the Golem Network, ensuring a higher level of reliability and performance.
