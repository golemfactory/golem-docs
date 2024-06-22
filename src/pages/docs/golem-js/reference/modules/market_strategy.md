---
title: "Module market/strategy"
pageTitle: "Module market/strategy - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/strategy within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/strategy

## Table of contents

### Type Aliases

- [PriceLimits](market_strategy#pricelimits)

### Functions

- [acceptAll](market_strategy#acceptall)
- [disallowProvidersById](market_strategy#disallowprovidersbyid)
- [disallowProvidersByName](market_strategy#disallowprovidersbyname)
- [disallowProvidersByNameRegex](market_strategy#disallowprovidersbynameregex)
- [allowProvidersById](market_strategy#allowprovidersbyid)
- [allowProvidersByName](market_strategy#allowprovidersbyname)
- [allowProvidersByNameRegex](market_strategy#allowprovidersbynameregex)
- [limitPriceFilter](market_strategy#limitpricefilter)

## Type Aliases

### PriceLimits

Ƭ **PriceLimits**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `cpuPerSec` | `number` |
| `envPerSec` | `number` |

#### Defined in

[src/market/strategy.ts:30](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/strategy.ts#L30)

## Functions

### acceptAll

▸ **acceptAll**(): () => `boolean`

Default Proposal filter that accept all proposal coming from the market

#### Returns

`fn`

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[src/market/strategy.ts:4](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/strategy.ts#L4)

___

### disallowProvidersById

▸ **disallowProvidersById**(`providerIds`): (`proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)) => `boolean`

Proposal filter blocking every offer coming from a provider whose id is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerIds` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`boolean`

#### Defined in

[src/market/strategy.ts:7](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/strategy.ts#L7)

___

### disallowProvidersByName

▸ **disallowProvidersByName**(`providerNames`): (`proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)) => `boolean`

Proposal filter blocking every offer coming from a provider whose name is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerNames` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`boolean`

#### Defined in

[src/market/strategy.ts:11](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/strategy.ts#L11)

___

### disallowProvidersByNameRegex

▸ **disallowProvidersByNameRegex**(`regexp`): (`proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)) => `boolean`

Proposal filter blocking every offer coming from a provider whose name match to the regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `regexp` | `RegExp` |

#### Returns

`fn`

▸ (`proposal`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`boolean`

#### Defined in

[src/market/strategy.ts:15](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/strategy.ts#L15)

___

### allowProvidersById

▸ **allowProvidersById**(`providerIds`): (`proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)) => `boolean`

Proposal filter that only allows offers from a provider whose id is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerIds` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`boolean`

#### Defined in

[src/market/strategy.ts:19](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/strategy.ts#L19)

___

### allowProvidersByName

▸ **allowProvidersByName**(`providerNames`): (`proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)) => `boolean`

Proposal filter that only allows offers from a provider whose name is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerNames` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`boolean`

#### Defined in

[src/market/strategy.ts:23](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/strategy.ts#L23)

___

### allowProvidersByNameRegex

▸ **allowProvidersByNameRegex**(`regexp`): (`proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)) => `boolean`

Proposal filter that only allows offers from a provider whose name match to the regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `regexp` | `RegExp` |

#### Returns

`fn`

▸ (`proposal`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`boolean`

#### Defined in

[src/market/strategy.ts:27](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/strategy.ts#L27)

___

### limitPriceFilter

▸ **limitPriceFilter**(`priceLimits`): (`proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)) => `boolean`

Proposal filter only allowing offers that do not exceed the defined usage

#### Parameters

| Name | Type |
| :------ | :------ |
| `priceLimits` | [`PriceLimits`](market_strategy#pricelimits) |

#### Returns

`fn`

▸ (`proposal`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`boolean`

#### Defined in

[src/market/strategy.ts:43](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/strategy.ts#L43)
