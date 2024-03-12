---
title: Using the Reputation System
description: A guide to using the Reputation System in Node.js projects on the Golem Network for improved provider selection.high-quality providers, optimizing the performance and reliability of your tasks.
type: Tutorial
---

# Leveraging the Reputation System

## Introduction

Discover how the Reputation System can optimize your applications on the Golem Network by filtering providers. This tutorial outlines the transition from testnet to mainnet, where the selection of providers is important to increase the probability of a successful run.

## Understanding the Reputation System

The Reputation System on the Golem Network is designed to aid requestors in increasing their chances of successful outcomes when using the Golem Network. It continually assesses providers, utilizing key performance metrics such as task success rates and uptime.

Given the vast range of providers, the Reputation System employs a neutral criterion to decide which providers are included in its dataset. This decision is based on the provider's pricing, which must be within the market standards to qualify for assessment. We establish this by comparing the provider's pricing against a similar AWS instance type, with an allowance for a 20% price buffer.

This criterion is not designed to label any provider as 'expensive' or 'cheap'. Instead, it serves as a safeguard to prevent potential misuse of the reputation system by charging excessive prices. It is a vital strategy to uphold the objectivity and integrity of the system.

Once a provider is included in the dataset, the Reputation System then regularly evaluates them based on key performance metrics such as task success rates and uptime. These metrics contribute to a normalized score, ranging between 0 to 1, which provides an objective assessment of the provider.

The use of the Reputation System becomes particularly beneficial when transitioning projects from testnet to mainnet. It aids in filtering out providers with irregular configurations or prices that might lead to unexpected errors. By allowing users to adjust the significance of these metrics according to their project needs, the Reputation System helps mitigate such risks.

## Adding the Reputation System to Your Project

Let's integrate the Reputation System into a simple Node.js project. This process requires minimal modifications to pre-existing projects.

Begin by setting up your project folder and installing the necessary package:

{% tabs %}
{% tab label="Linux/MacOS" %}

```bash
mkdir golem-reputation-example
cd golem-reputation-example
touch index.mjs
npm init
npm i @golem-sdk/golem-js

```

{% /tab  %}
{% tab label="Windows" %}

```bash
mkdir golem-reputation-example
cd golem-reputation-example
type nul > index.mjs
npm init
npm i @golem-sdk/golem-js

```

{% /tab %}
{% /tabs %}

### Implementing the Reputation System into Your Script

First, import the Reputation System into your project's script and create an instance. This instance fetches data that can help you select the most reliable providers.

To implement the Reputation System, open your project's index.mjs file and incorporate a ReputationSystem instance into the TaskExecutor. The following example script demonstrates this process:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/experimental/reputation/basic.ts" language="typescript" /%}

This script starts by noting that it will run on the Polygon network, which involves real transaction costs. After a brief pause, it initializes the Reputation System and sets up a TaskExecutor that uses a reputation-based filter for provider selection.

### Fine-tuning Provider Selection with Weight Adjustments

The Reputation System allows for fine-tuning of provider selection criteria through weight adjustments. This means you can prioritize certain aspects of a provider's behavior, such as their success rate or uptime, to better match your project's needs. Here's how you can adjust these weights:

```js
reputation.setProposalWeights({
  uptime: 0.7,
  successRate: 0.3,
})
```

In the example provided, the uptime metric is given a higher weight (0.7) than the success rate (0.3). This means that the system will favor providers with better uptime. These weights are flexible and can be adjusted according to the specific needs of your project. By experimenting with these weights, you can find the optimal balance and select providers that best meet your project's requirements.

### Maximizing Performance with the Agreement Selector

The agreement selector is an additional filter that helps you choose the best providers for your tasks. It works in tandem with our proposal filter, to achieve optimal performance.

- **Targeted Filtering:** Our `ProposalFilter` acts as the initial screening tool. It closely examines all available providers, evaluating them against the weights you've defined. Providers that don't meet your weights are eliminated, leaving behind a list of qualified candidates.

- **Precision Selection:** The `agreementSelector` takes over from there. It focuses on the list of providers vetted by our `proposalFilter`. By closely analyzing their performance data, which includes historical single- and multithread CPU benchmark scores, the agreement selector identifies the absolute best fit for your task.

Imagine the proposal filter as a sieve. It sorts through all the available providers, leaving only those that meet your requirements. Then, the agreement selector steps in. It acts like a magnifying glass, examining the remaining good providers closely to find the absolute best fit for your specific task.

The agreement selector doesn't just pick the provider with the highest overall score. Instead, it considers a smaller group of top performers, chosen based on a setting called `topPoolSize`.

#### Why topPoolSize Matters

This setting influences the number of high-ranking providers included in the final selection pool. Here's a breakdown of the impact of different topPoolSize values:

- **topPoolSize set to 1:** Choosing only the single highest-ranked provider might guarantee exceptional results, but it limits your options. For instance, if you have multiple tasks running concurrently, you might end up using the same provider repeatedly, overlooking other well-suited providers.

- **topPoolSize set to a higher number (like 5 or 8):** With a larger pool, you have more flexibility. However, an excessively high number can weaken the selection process, especially when dealing with a vast number of providers. In such cases, the impact of your custom filter's weights might diminish, and the selection might become more random. A larger pool size is only advantageous when there's a significantly larger pool of qualified providers compared to the final selection pool size.

- **The default setting of 2:** This default strikes a good balance between picking the best providers and maintaining some variety. It introduces a touch of randomness, which can be beneficial. This allows you to leverage a wider range of providers and avoid relying solely on the same ones.
  Using the Agreement Selector

By including the agreementSelector, you enable the system to automatically select the most suitable provider for your tasks based on your filter's criteria and the provider's performance data. This feature can significantly enhance your project's efficiency by ensuring your tasks are assigned to reliable and high-performing providers.

## The benefits of fine-tuning reputation weights

Fine-tuning the weights for provider selection enables you to focus on what's important for your project, whether it's constant availability or ensuring every task is accomplished without errors. Changing these weights gives you more control over choosing providers, aiming for the best match for your project's success.

For instance, if your project needs constant availability, you might value uptime more. The Reputation System then looks for providers that are rarely offline, increasing your project's reliability in long-running tasks. If you prioritize tasks being done without errors, focusing on success rate might be your preference.

Customizing the selection of providers offers a clear advantage. It allows you to filter providers to find those that align with your project's unique needs. This ability to refine your choices according to specific criteria simplifies working with the Reputation System, leading to more efficient project completion with better outcomes. Familiarizing yourself with this system and applying it smartly can enhance your projects on the Golem Network, ensuring a higher probability of success.
