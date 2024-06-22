---
title: "Class PaymentDemandDirector"
pageTitle: "Class PaymentDemandDirector - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class PaymentDemandDirector within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: PaymentDemandDirector

[market/demand/directors/payment-demand-director](../modules/market_demand_directors_payment_demand_director).PaymentDemandDirector

Represents a director that can instruct DemandDetailsBuilder

Demand is a complex concept in Golem. Requestors can place arbitrary properties and constraints on such
market entity. While the demand request on the Golem Protocol level is a flat list of properties (key, value) and constraints,
from the Requestor side they form logical groups that make sense together.

The idea behind Directors is that you can encapsulate this grouping knowledge along with validation logic etc to prepare
all the final demand request body properties in a more controlled and organized manner.

## Implements

- [`IDemandDirector`](../interfaces/market_market_module.IDemandDirector)

## Table of contents

### Constructors

- [constructor](market_demand_directors_payment_demand_director.PaymentDemandDirector#constructor)

### Methods

- [apply](market_demand_directors_payment_demand_director.PaymentDemandDirector#apply)

## Constructors

### constructor

• **new PaymentDemandDirector**(`allocation`, `marketApiAdapter`, `config?`): [`PaymentDemandDirector`](market_demand_directors_payment_demand_director.PaymentDemandDirector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `allocation` | [`Allocation`](payment_allocation.Allocation) |
| `marketApiAdapter` | [`IMarketApi`](../interfaces/market_api.IMarketApi) |
| `config` | [`PaymentDemandDirectorConfig`](market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfig) |

#### Returns

[`PaymentDemandDirector`](market_demand_directors_payment_demand_director.PaymentDemandDirector)

#### Defined in

[src/market/demand/directors/payment-demand-director.ts:8](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/payment-demand-director.ts#L8)

## Methods

### apply

▸ **apply**(`builder`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`DemandBodyBuilder`](market_demand_demand_body_builder.DemandBodyBuilder) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[IDemandDirector](../interfaces/market_market_module.IDemandDirector).[apply](../interfaces/market_market_module.IDemandDirector#apply)

#### Defined in

[src/market/demand/directors/payment-demand-director.ts:14](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/payment-demand-director.ts#L14)
