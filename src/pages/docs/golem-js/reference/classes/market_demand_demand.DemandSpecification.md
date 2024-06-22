---
title: "Class DemandSpecification"
pageTitle: "Class DemandSpecification - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DemandSpecification within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: DemandSpecification

[market/demand/demand](../modules/market_demand_demand).DemandSpecification

## Table of contents

### Constructors

- [constructor](market_demand_demand.DemandSpecification#constructor)

### Properties

- [prototype](market_demand_demand.DemandSpecification#prototype)
- [paymentPlatform](market_demand_demand.DemandSpecification#paymentplatform)
- [expirationSec](market_demand_demand.DemandSpecification#expirationsec)

## Constructors

### constructor

• **new DemandSpecification**(`prototype`, `paymentPlatform`, `expirationSec`): [`DemandSpecification`](market_demand_demand.DemandSpecification)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prototype` | [`DemandBodyPrototype`](../modules/market_demand_demand_body_builder#demandbodyprototype) | Represents the low level demand request body that will be used to subscribe for offers matching our "computational resource needs" |
| `paymentPlatform` | `string` | - |
| `expirationSec` | `number` | - |

#### Returns

[`DemandSpecification`](market_demand_demand.DemandSpecification)

#### Defined in

[src/market/demand/demand.ts:103](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/demand.ts#L103)

## Properties

### prototype

• `Readonly` **prototype**: [`DemandBodyPrototype`](../modules/market_demand_demand_body_builder#demandbodyprototype)

Represents the low level demand request body that will be used to subscribe for offers matching our "computational resource needs"

#### Defined in

[src/market/demand/demand.ts:105](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/demand.ts#L105)

___

### paymentPlatform

• `Readonly` **paymentPlatform**: `string`

#### Defined in

[src/market/demand/demand.ts:106](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/demand.ts#L106)

___

### expirationSec

• `Readonly` **expirationSec**: `number`

#### Defined in

[src/market/demand/demand.ts:107](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/demand.ts#L107)
