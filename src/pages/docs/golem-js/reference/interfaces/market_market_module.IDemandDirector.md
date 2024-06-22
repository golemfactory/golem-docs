---
title: "Interface IDemandDirector"
pageTitle: "Interface IDemandDirector - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface IDemandDirector within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: IDemandDirector

[market/market.module](../modules/market_market_module).IDemandDirector

Represents a director that can instruct DemandDetailsBuilder

Demand is a complex concept in Golem. Requestors can place arbitrary properties and constraints on such
market entity. While the demand request on the Golem Protocol level is a flat list of properties (key, value) and constraints,
from the Requestor side they form logical groups that make sense together.

The idea behind Directors is that you can encapsulate this grouping knowledge along with validation logic etc to prepare
all the final demand request body properties in a more controlled and organized manner.

## Implemented by

- [`BasicDemandDirector`](../classes/market_demand_directors_basic_demand_director.BasicDemandDirector)
- [`PaymentDemandDirector`](../classes/market_demand_directors_payment_demand_director.PaymentDemandDirector)
- [`WorkloadDemandDirector`](../classes/market_demand_directors_workload_demand_director.WorkloadDemandDirector)

## Table of contents

### Methods

- [apply](market_market_module.IDemandDirector#apply)

## Methods

### apply

▸ **apply**(`builder`): `void` \| `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`DemandBodyBuilder`](../classes/market_demand_demand_body_builder.DemandBodyBuilder) |

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/market/market.module.ts:205](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L205)
