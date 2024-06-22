---
title: "Module shared/yagna/adapters/market-api-adapter"
pageTitle: "Module shared/yagna/adapters/market-api-adapter - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module shared/yagna/adapters/market-api-adapter within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: shared/yagna/adapters/market-api-adapter

## Table of contents

### Classes

- [MarketApiAdapter](../classes/shared_yagna_adapters_market_api_adapter.MarketApiAdapter)

### Type Aliases

- [DemandRequestBody](shared_yagna_adapters_market_api_adapter#demandrequestbody)

## Type Aliases

### DemandRequestBody

Ƭ **DemandRequestBody**: `Object`

A bit more user-friendly type definition of DemandOfferBaseDTO from ya-ts-client

That's probably one of the most confusing elements around Golem Protocol and the API specificiation:

- Providers create Offers
- Requestors create Demands
- Demands are used to create a subscription for Proposals - Initial ones reflect the Offer that was matched with the Demand used to subscribe
- Once the proposal is countered, it's countered with a "counter proposal" which is no longer Offer + Demand,
  but rather a sketch of the agreement - here both parties try to agree on the values of certain properties that
  are interesting from their perspective. These "negotiated proposals (of) ...." are buit using DemandOffeBaseDTO

#FIXME yagna - feedback in the note above

#### Type declaration

| Name | Type |
| :------ | :------ |
| `properties` | `Record`\<`string`, `string` \| `number` \| `boolean` \| `string`[] \| `number`[]\> |
| `constraints` | `string` |

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:37](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L37)
