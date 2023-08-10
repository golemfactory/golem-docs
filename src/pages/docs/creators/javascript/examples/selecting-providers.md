---
description: Selecting providers
title: Selecting providers
---

{% alert level="info" %}

# Prerequisites 
Yagna service installed and running with `try_golem` app-key configured.

# Setting up project

Create a project folder, initialize a Node.js project, and install the `yajsapi` library.

```bash
mkdir golem-example
npm init
npm i yajsapi
```
{% /alert %}

## Introduction

You can select providers that suit your needs:

- Select a provider based on minimal requirements for remote computer
  CPU, storage, ram
- Select a provider based on the whitelist/blacklist
- Select a provider based on the proposed costs using a custom filter

## Filtering providers based on minimal requirements:

You can define minimal requirements for an environment provided by a node by stating a minimal number of:
- CPU cores `minCpuCores`, 
- RAM `minMemGib`, 
- disk space `minStorageGib` or 
- CPU threads `minCpuThreads`.

You can do this in the TaskExecutor options:

```js

import { TaskExecutor } from "yajsapi";

(async function main() {
  const executor = await TaskExecutor.create({
    package: "9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae",
      //minCpuCores : 2,
      //minMemGib : 8,
      //minStorageGib: 10,
      minCpuThreads: 1,
    yagnaOptions: { apiKey: 'try_golem' },
  });

  await executor.run(async (ctx) => console.log((await ctx.run("echo 'Hello World'")).stdout));
  await executor.end();
})();
```

{% alert level="warning" %}
Be careful, filtering is done internally by Yagna and if your requirements turn out to be too demanding you will not receive any proposal from providers and your requestor script will terminate after the timeout.
{% /alert %}



![Job timeout log](/timeout_log.png)


## Selecting providers based on the whitelist

In some situations, you might need your tasks to be executed on a certain provider or exclude specific providers. If you know providers' IDs or names you can use the `proposalFilter` option and use one of the predefined filters: 
- `ProposalFilters.whiteListProposalIdsFilter()`,
- `ProposalFilters.blackListProposalIdsFilter()`, 
- `ProposalFilters.whiteListProposalNamesFilter()`. 
- `ProposalFilters.blackListProposalNamesFilter()`

All these filters will accept an array with IDs or names of the providers that should be accepted or excluded.  

```js
import { TaskExecutor, ProposalFilters } from "yajsapi";
//import { ProposalFilters } from "yajsapi/dist/market/strategy";

/**
 * Example demonstrating how to use the predefined filter `whiteListProposalIdsFilter`,
 * which only allows offers from a provider whose ID is in the array
 */

const whiteListIds = [

  "0x3fc1d65ddc5258dc8807df30a29f71028e965e1b",
  "0x4506550de84d207f3ab90add6336f68119015836"

];
console.log("Will accept only proposals from:");
for(let i=0; i< whiteListIds.length; i++) {
    console.log(whiteListIds[i]);
}

(async function main() {
  const executor = await TaskExecutor.create({
    package: "9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae",
    proposalFilter: ProposalFilters.whiteListProposalIdsFilter(whiteListIds),
    yagnaOptions: { apiKey: 'try_golem' }
      }
  );
  await executor.run(async (ctx) => console.log((await ctx.run(`echo "This task is run on ${ctx.provider.id}"`)).stdout, ctx.provider.id));
  await executor.end();
})();

```

{% alert level="info" %}
You can read provider names from `ctx` workContext or from the proposal. We will look into proposals in the next section.
{% /alert %}


## Selecting providers based on the proposed costs using a custom filter

In this example, we will show a custom filter that can be used to select the best provider. We will use it to filter based on the price, but this filter can be used to filter by any other attribute that is included in the provider proposals or even scan the market to see what is proposed.

Note: The whole process is started with requestor demand. The network will respond with proposals from active providers. Proposals are then negotiated until an agreement is reached. Once the requestor and provider will sign the agreement activity can be started and TaskExecutor can execute them.

Let's how to use it:

```js
import { TaskExecutor} from "yajsapi";

/**
 * Example demonstrating how to write a custom proposal filter.
 */

var costData = [];

const myFilter = async (proposal) => {
  
   let decision = false; 
   let usageVecor = proposal.properties['golem.com.usage.vector'];
   let counterIdx = usageVecor.findIndex((ele) => ele === 'golem.usage.duration_sec');
   let proposedCost = proposal.properties['golem.com.pricing.model.linear.coeffs'][counterIdx];
   costData.push(proposedCost);
  if (costData.length < 11) return false;
   else {
    costData.shift();
    let averageProposedCost = costData.reduce((part, x) => part + x, 0)/10;
    if ( proposedCost <= averageProposedCost) decision = true;
    if (decision) {console.log(proposedCost, averageProposedCost)}
  }
  console.log(costData);
  console.log(proposal.properties['golem.node.id.name'] , proposal.properties['golem.com.pricing.model.linear.coeffs']);  
  return decision;
};
/*
const myFilter2 = async (proposal) => {

    console.log(proposal.properties['golem.com.usage.vector'], 
                proposal.properties['golem.node.id.name']);
    return false;
}*/

(async function main() {
  const executor = await TaskExecutor.create({
    package: "9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae",
    proposalFilter: myFilter,
    yagnaOptions: { apiKey: 'f153492c12e0422d89f3b95017bca735' }
        
  });
  await executor.run(async (ctx) => console.log((await ctx.run(`echo "This task is run on ${ctx.provider.id}"`)).stdout, ctx.provider.id));
  await executor.end();
})();
```

Note that `customFilter` is a function that accepts a `proposal` object as its parameter and should return `true` or `false` depending on the decision based on the proposal properties.

Our custom function collects pricing data until we have a set of 10 proposals. Then it accepts proposals only if the price is lower than average from the last ten proposals.

Provider price is calculated as the product of prices defined per specific usage counter,

The counters are defined in `'golem.com.usage.vector'` property and the prices are defined in `'golem.com.pricing.model.linear.coeffs'`. The last element in the price coeffs array is a fixed element of the total price (one can consider it the one-time price for deployment). 

Note that the sequence of the counters is not fixed therefore we need to find the index of the specific counter. In our examples, we take into account only the price related to the usage of the total environment (as our example task has a very short execution time). 