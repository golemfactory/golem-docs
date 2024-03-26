---
title: "Interface DemandFactoryEvents"
pageTitle: "Interface DemandFactoryEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface DemandFactoryEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: DemandFactoryEvents

[market/factory](../modules/market_factory).DemandFactoryEvents

## Table of contents

### Properties

- [demandSubscribed](market_factory.DemandFactoryEvents#demandsubscribed)
- [demandFailed](market_factory.DemandFactoryEvents#demandfailed)

## Properties

### demandSubscribed

• **demandSubscribed**: (`details`: \{ `id`: `string` ; `details`: [`MarketDecoration`](../modules/market_builder#marketdecoration)  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.details` | [`MarketDecoration`](../modules/market_builder#marketdecoration) |

##### Returns

`void`

#### Defined in

[src/market/factory.ts:11](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/factory.ts#L11)

___

### demandFailed

• **demandFailed**: (`details`: \{ `reason`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.reason` | `string` |

##### Returns

`void`

#### Defined in

[src/market/factory.ts:12](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/factory.ts#L12)
