---
title: "Module golem-network/golem-network"
pageTitle: "Module golem-network/golem-network - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module golem-network/golem-network within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: golem-network/golem-network

## Table of contents

### Classes

- [GolemNetwork](../classes/golem_network_golem_network.GolemNetwork)

### Interfaces

- [GolemNetworkOptions](../interfaces/golem_network_golem_network.GolemNetworkOptions)
- [MarketOrderSpec](../interfaces/golem_network_golem_network.MarketOrderSpec)
- [GolemNetworkEvents](../interfaces/golem_network_golem_network.GolemNetworkEvents)
- [OneOfOptions](../interfaces/golem_network_golem_network.OneOfOptions)
- [ManyOfOptions](../interfaces/golem_network_golem_network.ManyOfOptions)

### Type Aliases

- [InstanceOrFactory](golem_network_golem_network#instanceorfactory)
- [GolemServices](golem_network_golem_network#golemservices)

## Type Aliases

### InstanceOrFactory

Ƭ **InstanceOrFactory**\<`TargetInterface`, `ConstructorArgs`\>: `TargetInterface` \| (...`args`: `ConstructorArgs`) => `TargetInterface`

Instance of an object or a factory function that you can call `new` on.
Optionally you can provide constructor arguments.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TargetInterface` | `TargetInterface` |
| `ConstructorArgs` | extends `unknown`[] = `never`[] |

#### Defined in

[src/golem-network/golem-network.ts:46](https://github.com/golemfactory/golem-js/blob/570126bc/src/golem-network/golem-network.ts#L46)

___

### GolemServices

Ƭ **GolemServices**: `Object`

Dependency Container

#### Type declaration

| Name | Type |
| :------ | :------ |
| `yagna` | [`YagnaApi`](../classes/shared_yagna_yagnaApi.YagnaApi) |
| `logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |
| `paymentApi` | [`IPaymentApi`](../interfaces/payment_api.IPaymentApi) |
| `activityApi` | [`IActivityApi`](../interfaces/activity_api.IActivityApi) |
| `marketApi` | [`IMarketApi`](../interfaces/market_api.IMarketApi) |
| `networkApi` | [`INetworkApi`](../interfaces/network_api.INetworkApi) |
| `proposalCache` | [`CacheService`](../classes/shared_cache_CacheService.CacheService)\<[`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)\> |
| `proposalRepository` | [`IProposalRepository`](../interfaces/market_proposal_market_proposal.IProposalRepository) |
| `demandRepository` | [`IDemandRepository`](../interfaces/market_demand_demand.IDemandRepository) |
| `fileServer` | [`IFileServer`](../interfaces/activity_activity_module.IFileServer) |
| `storageProvider` | [`StorageProvider`](../interfaces/shared_storage_provider.StorageProvider) |

#### Defined in

[src/golem-network/golem-network.ts:161](https://github.com/golemfactory/golem-js/blob/570126bc/src/golem-network/golem-network.ts#L161)
