---
title: Integrating the Reputation System in Node.js Projects
description: A guide to integrating the Reputation System in Node.js projects on the Golem Network for improved provider selection.
type: Tutorial
---

# Integrating Golem Network Reputation System in Node.js with golem-js SDK

## Introduction

Learn how to integrate the Golem Network Reputation System into your Node.js projects using the golem-js SDK. This guide will help you leverage the system to filter providers and optimize the performance and reliability of your tasks. The golem-js SDK includes a helper library that simplifies the use of the Reputation System, making it easier to incorporate into your projects.

> **Note:** This integration only exists within golem-js. If you need it for other SDKs, please use the filter guide at [Finding the Best Providers](/docs/en/reputation/finding-the-best-providers), which is an HTTP API returning a list of provider IDs you can filter for in your custom market strategy.

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

{% /tab %}
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

To implement the Reputation System, open your project's `index.mjs` file and incorporate a `ReputationSystem` instance into the `TaskExecutor`. The following example script demonstrates this process:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/experimental/reputation/basic.ts" language="typescript" /%}

This script starts by noting that it will run on the Polygon network, which involves real transaction costs. After a brief pause, it initializes the Reputation System and sets up a `TaskExecutor` that uses a reputation-based filter for provider selection.

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

The agreement selector is a strategy that helps you choose the best providers for your tasks. It works in tandem with our proposal filter to achieve optimal performance.

- **Targeted Filtering:** Our `ProposalFilter` acts as the initial screening tool. It closely examines all available providers, evaluating them against the weights you've defined. Providers that don't meet your weights are eliminated, leaving behind a list of qualified candidates.

- **Precision Selection:** The `agreementSelector` takes over by focusing on the list of providers pre-sorted by our `proposalFilter` based on weighted scores. Then, independently, it examines their historical single- and multithread CPU benchmark scores, choosing one of the providers with the highest performance in these metrics to ensure the best fit for your task.

The agreement selector operates by first identifying a group of the highest scoring providers. It then utilizes the `topPoolSize` setting to randomly select one from these top candidates.

#### Why topPoolSize Matters

This setting influences the number of high-ranking providers included in the final selection pool. Here's a breakdown of the impact of different topPoolSize values:

- **topPoolSize set to 1:** Choosing only the single highest-ranked provider might guarantee exceptional results, but it limits your options. For instance, if you have multiple tasks running concurrently, you might end up using the same provider repeatedly, overlooking other well-suited providers.

- **topPoolSize set to a higher number (like 5 or 8):** With a larger pool, you have more flexibility. However, an excessively high number can weaken the selection process. In such cases, the impact of our `proposalFilter` weights might diminish, and the selection might become more random. A larger pool size is only advantageous when there's a significantly larger pool of qualified providers compared to the final selection pool size.

- **The default setting of 2:** This default strikes a good balance between picking the best providers and maintaining some variety. It introduces a touch of randomness, which can be beneficial. This allows you to leverage a wider range of providers and avoid relying solely on the same ones.

#### Using the Agreement Selector

By including the `agreementSelector`, you enable the system to automatically select the most suitable provider for your tasks based on your filter's criteria and the provider's performance data. This feature can significantly enhance your project's efficiency by ensuring your tasks are assigned to reliable and high-performing providers.

## Conclusion

Integrating the Reputation System into your Node.js projects on the Golem Network can greatly improve the reliability and performance of your tasks. By fine-tuning provider selection criteria and utilizing the agreement selector, you can ensure that your projects are matched with the best possible providers. Experiment with the weights and settings to find the optimal configuration for your specific needs.
