---
title: "Class DemandRepository"
pageTitle: "Class DemandRepository - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DemandRepository within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: DemandRepository

[shared/yagna/repository/demand-repository](../modules/shared_yagna_repository_demand_repository).DemandRepository

## Implements

- [`IDemandRepository`](../interfaces/market_demand_demand.IDemandRepository)

## Table of contents

### Constructors

- [constructor](shared_yagna_repository_demand_repository.DemandRepository#constructor)

### Methods

- [getById](shared_yagna_repository_demand_repository.DemandRepository#getbyid)
- [add](shared_yagna_repository_demand_repository.DemandRepository#add)
- [getAll](shared_yagna_repository_demand_repository.DemandRepository#getall)

## Constructors

### constructor

• **new DemandRepository**(`api`, `cache`): [`DemandRepository`](shared_yagna_repository_demand_repository.DemandRepository)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `RequestorService` |
| `cache` | [`CacheService`](shared_cache_CacheService.CacheService)\<[`Demand`](market_demand_demand.Demand)\> |

#### Returns

[`DemandRepository`](shared_yagna_repository_demand_repository.DemandRepository)

#### Defined in

[src/shared/yagna/repository/demand-repository.ts:6](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/demand-repository.ts#L6)

## Methods

### getById

▸ **getById**(`id`): `undefined` \| [`Demand`](market_demand_demand.Demand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Demand`](market_demand_demand.Demand)

#### Implementation of

[IDemandRepository](../interfaces/market_demand_demand.IDemandRepository).[getById](../interfaces/market_demand_demand.IDemandRepository#getbyid)

#### Defined in

[src/shared/yagna/repository/demand-repository.ts:11](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/demand-repository.ts#L11)

___

### add

▸ **add**(`demand`): [`Demand`](market_demand_demand.Demand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | [`Demand`](market_demand_demand.Demand) |

#### Returns

[`Demand`](market_demand_demand.Demand)

#### Implementation of

[IDemandRepository](../interfaces/market_demand_demand.IDemandRepository).[add](../interfaces/market_demand_demand.IDemandRepository#add)

#### Defined in

[src/shared/yagna/repository/demand-repository.ts:15](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/demand-repository.ts#L15)

___

### getAll

▸ **getAll**(): [`Demand`](market_demand_demand.Demand)[]

#### Returns

[`Demand`](market_demand_demand.Demand)[]

#### Implementation of

[IDemandRepository](../interfaces/market_demand_demand.IDemandRepository).[getAll](../interfaces/market_demand_demand.IDemandRepository#getall)

#### Defined in

[src/shared/yagna/repository/demand-repository.ts:20](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/demand-repository.ts#L20)
