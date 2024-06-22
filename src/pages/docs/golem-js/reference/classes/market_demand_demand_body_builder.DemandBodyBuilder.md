---
title: "Class DemandBodyBuilder"
pageTitle: "Class DemandBodyBuilder - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DemandBodyBuilder within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: DemandBodyBuilder

[market/demand/demand-body-builder](../modules/market_demand_demand_body_builder).DemandBodyBuilder

A helper class assisting in building the Golem Demand object

Various directors should use the builder to add properties and constraints before the final product is received
from the builder and sent to yagna to subscribe for matched offers (proposals).

The main purpose of the builder is to accept different requirements (properties and constraints) from different
directors who know what kind of properties and constraints are needed. Then it helps to merge these requirements.

Demand -> DemandSpecification -> DemandPrototype -> DemandDTO

## Table of contents

### Constructors

- [constructor](market_demand_demand_body_builder.DemandBodyBuilder#constructor)

### Methods

- [addProperty](market_demand_demand_body_builder.DemandBodyBuilder#addproperty)
- [addConstraint](market_demand_demand_body_builder.DemandBodyBuilder#addconstraint)
- [getProduct](market_demand_demand_body_builder.DemandBodyBuilder#getproduct)
- [mergePrototype](market_demand_demand_body_builder.DemandBodyBuilder#mergeprototype)

## Constructors

### constructor

• **new DemandBodyBuilder**(): [`DemandBodyBuilder`](market_demand_demand_body_builder.DemandBodyBuilder)

#### Returns

[`DemandBodyBuilder`](market_demand_demand_body_builder.DemandBodyBuilder)

## Methods

### addProperty

▸ **addProperty**(`key`, `value`): [`DemandBodyBuilder`](market_demand_demand_body_builder.DemandBodyBuilder)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`DemandPropertyValue`](../modules/market_demand_demand_body_builder#demandpropertyvalue) |

#### Returns

[`DemandBodyBuilder`](market_demand_demand_body_builder.DemandBodyBuilder)

#### Defined in

[src/market/demand/demand-body-builder.ts:60](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/demand-body-builder.ts#L60)

___

### addConstraint

▸ **addConstraint**(`key`, `value`, `comparisonOperator?`): [`DemandBodyBuilder`](market_demand_demand_body_builder.DemandBodyBuilder)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `value` | `string` \| `number` | `undefined` |
| `comparisonOperator` | [`ComparisonOperator`](../enums/market_demand_demand_body_builder.ComparisonOperator) | `ComparisonOperator.Eq` |

#### Returns

[`DemandBodyBuilder`](market_demand_demand_body_builder.DemandBodyBuilder)

#### Defined in

[src/market/demand/demand-body-builder.ts:70](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/demand-body-builder.ts#L70)

___

### getProduct

▸ **getProduct**(): [`DemandBodyPrototype`](../modules/market_demand_demand_body_builder#demandbodyprototype)

#### Returns

[`DemandBodyPrototype`](../modules/market_demand_demand_body_builder#demandbodyprototype)

#### Defined in

[src/market/demand/demand-body-builder.ts:75](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/demand-body-builder.ts#L75)

___

### mergePrototype

▸ **mergePrototype**(`prototype`): [`DemandBodyBuilder`](market_demand_demand_body_builder.DemandBodyBuilder)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prototype` | [`DemandBodyPrototype`](../modules/market_demand_demand_body_builder#demandbodyprototype) |

#### Returns

[`DemandBodyBuilder`](market_demand_demand_body_builder.DemandBodyBuilder)

#### Defined in

[src/market/demand/demand-body-builder.ts:82](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/demand-body-builder.ts#L82)
