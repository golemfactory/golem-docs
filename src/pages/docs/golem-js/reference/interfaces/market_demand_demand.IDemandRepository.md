---
title: "Interface IDemandRepository"
pageTitle: "Interface IDemandRepository - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface IDemandRepository within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: IDemandRepository

[market/demand/demand](../modules/market_demand_demand).IDemandRepository

## Implemented by

- [`DemandRepository`](../classes/shared_yagna_repository_demand_repository.DemandRepository)

## Table of contents

### Methods

- [getById](market_demand_demand.IDemandRepository#getbyid)
- [add](market_demand_demand.IDemandRepository#add)
- [getAll](market_demand_demand.IDemandRepository#getall)

## Methods

### getById

▸ **getById**(`id`): `undefined` \| [`Demand`](../classes/market_demand_demand.Demand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Demand`](../classes/market_demand_demand.Demand)

#### Defined in

[src/market/demand/demand.ts:95](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/demand.ts#L95)

___

### add

▸ **add**(`demand`): [`Demand`](../classes/market_demand_demand.Demand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | [`Demand`](../classes/market_demand_demand.Demand) |

#### Returns

[`Demand`](../classes/market_demand_demand.Demand)

#### Defined in

[src/market/demand/demand.ts:97](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/demand.ts#L97)

___

### getAll

▸ **getAll**(): [`Demand`](../classes/market_demand_demand.Demand)[]

#### Returns

[`Demand`](../classes/market_demand_demand.Demand)[]

#### Defined in

[src/market/demand/demand.ts:99](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/demand.ts#L99)
