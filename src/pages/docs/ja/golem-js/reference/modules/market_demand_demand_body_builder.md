---
title: "Module market/demand/demand-body-builder"
pageTitle: "Module market/demand/demand-body-builder - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/demand/demand-body-builder within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/demand/demand-body-builder

## Table of contents

### Enumerations

- [ComparisonOperator](../enums/market_demand_demand_body_builder.ComparisonOperator)

### Classes

- [DemandBodyBuilder](../classes/market_demand_demand_body_builder.DemandBodyBuilder)

### Type Aliases

- [DemandPropertyValue](market_demand_demand_body_builder#demandpropertyvalue)
- [DemandProperty](market_demand_demand_body_builder#demandproperty)
- [DemandBodyPrototype](market_demand_demand_body_builder#demandbodyprototype)

## Type Aliases

### DemandPropertyValue

Ƭ **DemandPropertyValue**: `string` \| `number` \| `boolean` \| `string`[] \| `number`[]

Defines what kind of value data types one can expect in the raw Demand Properties

#### Defined in

[src/market/demand/demand-body-builder.ts:6](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/demand-body-builder.ts#L6)

___

### DemandProperty

Ƭ **DemandProperty**: `Object`

Represents a single property/attribute that can be set on a Demand to specify Requestor needs

Demand properties should be understood as values for various parameters of the agreement between Provider and Requestor.
By defining properties on the demand, and negotiating them, the parties settle on the Terms & Conditions of the collaboration.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`DemandPropertyValue`](market_demand_demand_body_builder#demandpropertyvalue) |

#### Defined in

[src/market/demand/demand-body-builder.ts:14](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/demand-body-builder.ts#L14)

___

### DemandBodyPrototype

Ƭ **DemandBodyPrototype**: `Object`

Data structure that represents details of the body for a demand subscription request

This type belongs to our domain (use case layer), and will later be "serialized" to the body that's sent to
Yagna. You should consider this as a "draft of the demand", that can be finalized by one of the [market/api.IMarketApi](../interfaces/market_api.IMarketApi)
implementations.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `properties` | [`DemandProperty`](market_demand_demand_body_builder#demandproperty)[] |
| `constraints` | `string`[] |

#### Defined in

[src/market/demand/demand-body-builder.ts:32](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/demand-body-builder.ts#L32)
