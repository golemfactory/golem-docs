---
title: "Class BasicDemandDirector"
pageTitle: "Class BasicDemandDirector - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class BasicDemandDirector within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: BasicDemandDirector

[market/demand/directors/basic-demand-director](../modules/market_demand_directors_basic_demand_director).BasicDemandDirector

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

- [constructor](market_demand_directors_basic_demand_director.BasicDemandDirector#constructor)

### Methods

- [apply](market_demand_directors_basic_demand_director.BasicDemandDirector#apply)

## Constructors

### constructor

• **new BasicDemandDirector**(`config?`): [`BasicDemandDirector`](market_demand_directors_basic_demand_director.BasicDemandDirector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`BasicDemandDirectorConfig`](market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfig) |

#### Returns

[`BasicDemandDirector`](market_demand_directors_basic_demand_director.BasicDemandDirector)

#### Defined in

[src/market/demand/directors/basic-demand-director.ts:6](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/basic-demand-director.ts#L6)

## Methods

### apply

▸ **apply**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`DemandBodyBuilder`](market_demand_demand_body_builder.DemandBodyBuilder) |

#### Returns

`void`

#### Implementation of

[IDemandDirector](../interfaces/market_market_module.IDemandDirector).[apply](../interfaces/market_market_module.IDemandDirector#apply)

#### Defined in

[src/market/demand/directors/basic-demand-director.ts:8](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/basic-demand-director.ts#L8)
