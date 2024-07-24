---
title: JS Task API - Provider Selection Example
pageTitle: Provider Selection in Golem JS Task API - Best Practices and Examples
description: Learn to select providers in Golem's JS Task API with criteria like hardware requirements, whitelist/blacklist, and cost-effective filters, including practical Node.js examples.
type: Example
---

# JS Task API Examples: selecting providers

## Introduction

You can select providers using different criteria, i.e. defining requirements in a demand or applying filters on providers' proposals. You can:

- Select a provider based on minimal requirements for remote computer
  CPU, disk storage, RAM.
- Select a provider based on the whitelist/blacklist.
- Select a provider based on the proposed costs using a custom filter.

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

## How to run examples

Create a project folder, initialize a Node.js project, and install libraries.

```bash
mkdir golem-example
cd golem-example
npm init
npm install @golem-sdk/task-executor
npm install @golem-sdk/pino-logger
```

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Pricing filter

The `market` object of TaskExecutor options includes the `pricing` object.
It is used to define the maximum price accepted in the provider's offer.

```js
market: {
      rentHours: 0.5,
      pricing: {
        model: "linear",
        maxStartPrice: 0.5,
        maxCpuPerHourPrice: 1.0,
        maxEnvPerHourPrice: 0.5,
 },
 ...
```

Note, that the total cost depends on several factors like the number of threads, the actual CPU usage, task duration, and of course unit prices.

## Filtering providers based on minimal requirements:

You can define minimal requirements for an environment provided by a node by stating a minimal number of:

- CPU cores `minCpuCores`,
- RAM `minMemGib`,
- disk space `minStorageGib` or
- CPU threads `minCpuThreads`.

You can do this in the TaskExecutor options:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/selecting-providers/demand.mjs" language="javascript" /%}

{% alert level="warning" %}
Be careful, filtering is done internally by Yagna and if your requirements turn out to be too demanding you will not receive any proposals from providers and your requestor script will terminate after the timeout.
{% /alert %}

![Job timeout log](/te/timeout_log.png)

## Selecting providers based on the whitelist

In some situations, you might need your tasks to be executed on a certain provider or exclude specific providers. If you know providers' IDs or names you can use the `offerProposalFilter` option and use one of the predefined filters:

- `OfferProposalFilterFactory.disallowProvidersById()`,
- `OfferProposalFilterFactory.disallowProvidersByName()`,
- `OfferProposalFilterFactory.disallowProvidersByNameRegex()`,
- `OfferProposalFilterFactory.allowProvidersById()`,
- `OfferProposalFilterFactory.allowProvidersByName()`,
- `OfferProposalFilterFactory.allowProvidersByNameRegex()`,

The `byID`, and `byName` filters will accept an array with IDs, or respectively names of the providers, which should be accepted or excluded.
The `byNameRegex` accepts a `regex` expression to filter the names of providers whose offers will be blocked or allowed.

{% alert level="info" %}

For this example, you might need to update the provider's list in the `whiteListsIds`.
Go to the [Golem Network Stats](https://stats.golem.network/network/providers/online) and scroll the list to find a provider working on `Testnet`. Then click on its name and copy its ID.

{% /alert  %}

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/selecting-providers/whitelist.mjs" language="javascript" /%}

{% alert level="info" %}
You can read provider names from the `exe` exeUnit context or the proposal. We will look into proposal content in the next section.
{% /alert %}

## Selecting providers based on the proposed costs using a custom filter

In this example, we will show a custom filter that can be used to select the best provider. We will use it to filter proposals based on the price, but it can be used to filter by any other attribute that is included in the provider `OfferProposal`.

Let's see how to do it:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/selecting-providers/custom-price.mjs" language="javascript" /%}

Note that `myFilter` is a function that accepts an `OfferProposal` object as its parameter and should return `true` or `false` depending on the decision based on the proposal properties.

Our custom function collects pricing data until we have a set of 5 proposals. Then it accepts proposals only if the price is lower than average from the last five proposals.

Provider price is calculated as the product of prices defined per specific usage counter.

The counters are defined in the `golem.com.usage.vector` property and the prices are defined in `golem.com.pricing.model.linear.coeffs`. The last element in the price coeffs array is a fixed element of the total price (one can consider it the one-time price for deployment).

Note that the sequence of the counters is not fixed, therefore we need to find the index of the specific counter. In our examples, we take into account only the price related to the usage of the total environment (as our example task has a very short execution time).
