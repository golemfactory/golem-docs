---
title: Enhancing Golem Network Projects with the Reputation System
description: Discover how to leverage the Reputation System package in your Node.js projects on the Golem Network to filter high-quality providers, optimizing the performance and reliability of your tasks.
pageTitle: Optimize Your Golem Network Projects with the Reputation System - Developer Tutorial
type: Tutorial
---

# Leveraging the Reputation System

## Introduction

Discover how the Reputation System can optimize your applications on the Golem Network by filtering providers. This tutorial outlines the transition from testnet to mainnet, where the selection of providers are important to increase the probability of a successful run.

## Prerequisites

{% alert level="warning" %}
The experimental Reputation feature discussed in this tutorial is currently **only** available in the beta version of the Golem SDK. Make sure to install the beta version for this tutorial to work!

```bash
npm i @golem-sdk/golem-js@beta
```

{% /alert %}

Ensure the Yagna service is installed, running, and configured with the `try_golem` app-key.

## Understanding the Reputation System

The Reputation System on the Golem Network is designed to aid requestors in increasing their chances of successful outcomes when using Golem Network. It continually assesses providers, utilizing key performance metrics such as task success rates and uptime.

These metrics are analyzed on a regular basis, permitting the system to generate normalized scores, which range from anything between 0 to 1.

The Reputation System becomes particularly beneficial when transitioning projects from testnet to mainnet, as the mainnet could potentially contain providers with irregular configurations, leading to unexpected errors. By allowing users to adjust the significance of these metrics according to their project needs, the Reputation System helps mitigate such risks.

## Adding the Reputation System in Your Project

Let's integrate the Reputation System into a simple Node.js project. This process requires minimal changes and effectively improves the selection of trustworthy providers.

Begin by setting up your project folder and installing the necessary package:

{% tabs %}
{% tab label="Linux/MacOS" %}

```bash
mkdir golem-reputation-example
cd golem-reputation-example
touch index.mjs
npm init
npm i @golem-sdk/golem-js@beta

```

{% /tab  %}
{% tab label="Windows" %}

```bash
mkdir golem-reputation-example
cd golem-reputation-example
type nul > index.mjs
npm init
npm i @golem-sdk/golem-js@beta

```

{% /tab %}
{% /tabs %}

### Implementing the Reputation System into Your Script

First, import the Reputation System into your project's script and create an instance. This instance fetches data that can help you select the most reliable providers.

To implement the Reputation System, open your project's index.mjs file and incorporate a ReputationSystem instance into the TaskExecutor. The following example script demonstrates this process:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/9fed1b73d60b0c1720e1c37e39c308a9991c945b/examples/experimental/reputation/basic.ts" language="typescript" /%}

This script starts by noting that it will run on the Polygon network, which involves real transaction costs. After a brief pause, it initializes the Reputation System and sets up a TaskExecutor that uses a reputation-based filter for provider selection.

### Customizing Provider Selection with Weight Adjustments

The Reputation System allows for customization of provider selection criteria through weight adjustments. This means you can prioritize certain aspects of a provider's behavior, such as their success rate or uptime, to better match your project's needs. Here's how you can adjust these weights:

```js
reputation.setProposalWeights({
  uptime: 0.7,
  successRate: 0.3,
})
```

In the example provided, the uptime metric is given a higher weight (0.7) than the success rate (0.3). This means that the system will favor providers with better uptime. These weights are flexible and can be adjusted according to the specific needs of your project. By experimenting with these weights, you can find the optimal balance and select providers that best meet your project's requirements.

## The Benefits of Adjusting Weights

Adjusting the weights for provider selection enables you to focus on what's important for your project, whether it's constant availability or ensuring every task is accomplished without errors. Changing these weights gives you more control over choosing providers, aiming for the best match for your project's success.

For instance, if your project needs constant availability, you might value uptime more. The Reputation System then looks for providers that are rarely offline, increasing your project's reliability in long-running tasks. If you prioritize tasks being done without errors, focusing on success rate might be your preference.

Customizing the selection of providers offers a clear advantage. It allows you to filter providers to find those that align with your project's unique needs. This ability to refine your choices according to specific criteria simplifies working with the Reputation System, leading to more efficient project completion with better outcomes. Familiarizing yourself with this system and applying it smartly can enhance your projects on the Golem Network, ensuring a higher probability of success.
