[View code on GitHub](https://github.com/golemfactory/yajsapi/market/demand.ts)

The `Demand` class in the `yajsapi` project is responsible for creating and managing a demand for a task package on the market. It is a special entity type that inherits from the `EventTarget` class, which means that it can emit events that can be listened to by other parts of the project. 

The `Demand` class has a static method called `create` that takes a `Package` object, an array of `Allocation` objects, and an optional `DemandOptions` object as arguments. This method creates a new instance of the `Demand` class and publishes a subscription for the demand on the market. 

The `Demand` class has a constructor that takes a demand ID, a `DemandOfferBase` object, and a `DemandConfig` object as arguments. The `DemandOfferBase` object contains the details of the demand, such as the task package and the allocations, while the `DemandConfig` object contains configuration options for the demand, such as the logger and the event target. 

The `Demand` class has a method called `unsubscribe` that unsubscribes the demand from the market. 

The `Demand` class also has a private method called `subscribe` that listens for proposals from the market. This method runs in a loop until the demand is unsubscribed. It uses the `collectOffers` method of the `api` object in the `DemandConfig` object to collect proposals from the market. If a proposal is received, it creates a new instance of the `Proposal` class and dispatches a `DemandEvent` with the proposal data. 

The `DemandEvent` class is a subclass of the `Event` class and contains a `Proposal` object. It is used to emit events when a proposal is received from the market. 

Overall, the `Demand` class is an important part of the `yajsapi` project as it allows users to create and manage demands for task packages on the market. It also provides a way for other parts of the project to listen for proposals from the market. 

Example usage:

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
## Questions: 
 1. What is the purpose of the `Demand` class and how does it work?
- The `Demand` class is an object that represents an open demand for a task package and allocations, which is sent to the market to find matching offers. It inherits from the `EventTarget` class, allowing listeners to be added to it for offers received from the market. It subscribes to the market and collects offers at a specified interval, emitting a `DemandEvent` with a `Proposal` object for each received offer.

2. What are the available options for configuring a `Demand` object?
- The available options for configuring a `Demand` object are: `subnetTag` (string), `yagnaOptions` (object), `marketTimeout` (number), `marketOfferExpiration` (number), `logger` (object), `maxOfferEvents` (number), `offerFetchingInterval` (number), `proposalTimeout` (number), and `eventTarget` (object).

3. What is the purpose of the `DemandEvent` class and how is it used?
- The `DemandEvent` class is a custom event that is emitted by the `Demand` object when a new offer is received from the market. It contains a `Proposal` object with data about the offer. It is used to notify listeners that a new offer has been received and provide them with the offer data.