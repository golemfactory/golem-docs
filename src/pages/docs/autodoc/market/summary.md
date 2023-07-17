[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/market)

The `json/market` folder in the `yajsapi` project contains classes and interfaces for managing the market for computation tasks. It provides a way to create and manage demands for task packages, evaluate proposals from providers, and select the best provider for a given task based on a market strategy.

The `Demand` class is responsible for creating and managing a demand for a task package on the market. It emits events when proposals are received from the market, allowing other parts of the project to listen for proposals and handle them accordingly. For example:

```javascript
import { Demand } from "yajsapi";

const taskPackage = ... // create a task package
const allocations = ... // create an array of allocations
const options = ... // create a demand options object

const demand = await Demand.create(taskPackage, allocations, options);

demand.addEventListener("ProposalReceived", (event) => {
  const proposal = event.proposal;
  // handle the proposal
});

await demand.unsubscribe();
```

The `DemandFactory` class is responsible for creating and publishing demands on the Golem network. It uses several other classes from the `yajsapi` project to create and configure the demand request, as well as handle events and decorate the demand with additional metadata.

The `MarketService` class manages the market for a task, which includes creating a demand for the task, scoring proposals from providers, and responding to proposals. It uses the `MarketStrategy` interface to evaluate proposals and determine which provider to select for a given computation task.

The `MarketStrategy` interface allows for the creation of custom strategies that can be used in place of the default strategy. The `LeastExpensiveLinearPayuMarketStrategy` and `DecreaseScoreForUnconfirmedAgreementMarketStrategy` classes provide useful examples of how to implement a market strategy. For example:

```typescript
import { DefaultMarketStrategy } from "yajsapi";

const marketStrategy = new DefaultMarketStrategy(computationHistory, logger);
const demandDecoration = marketStrategy.getDemandDecoration();
const score = marketStrategy.scoreProposal(proposal);
```

Overall, the `json/market` folder provides a set of tools for interacting with the Golem network's market API and implementing custom trading strategies. These tools can be used to automate trading on the Golem network and build more complex applications on top of the protocol.
