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

- [acceptAllProposalFilter](market_strategy#acceptallproposalfilter)
- [blackListProposalIdsFilter](market_strategy#blacklistproposalidsfilter)
- [blackListProposalNamesFilter](market_strategy#blacklistproposalnamesfilter)
- [blackListProposalRegexpFilter](market_strategy#blacklistproposalregexpfilter)
- [whiteListProposalIdsFilter](market_strategy#whitelistproposalidsfilter)
- [whiteListProposalNamesFilter](market_strategy#whitelistproposalnamesfilter)
- [whiteListProposalRegexpFilter](market_strategy#whitelistproposalregexpfilter)
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

[src/market/strategy.ts:30](https://github.com/golemfactory/golem-js/blob/627e370/src/market/strategy.ts#L30)

## Functions

### acceptAllProposalFilter

▸ **acceptAllProposalFilter**(): () => `Promise`\<`boolean`\>

Default Proposal filter that accept all proposal coming from the market

#### Returns

`fn`

▸ (): `Promise`\<`boolean`\>

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/market/strategy.ts:4](https://github.com/golemfactory/golem-js/blob/627e370/src/market/strategy.ts#L4)

___

### blackListProposalIdsFilter

▸ **blackListProposalIdsFilter**(`blackListIds`): (`proposal`: [`Proposal`](../classes/market_proposal.Proposal)) => `Promise`\<`boolean`\>

Proposal filter blocking every offer coming from a provider whose id is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `blackListIds` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`Proposal`](../classes/market_proposal.Proposal) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/market/strategy.ts:7](https://github.com/golemfactory/golem-js/blob/627e370/src/market/strategy.ts#L7)

___

### blackListProposalNamesFilter

▸ **blackListProposalNamesFilter**(`blackListNames`): (`proposal`: [`Proposal`](../classes/market_proposal.Proposal)) => `Promise`\<`boolean`\>

Proposal filter blocking every offer coming from a provider whose name is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `blackListNames` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`Proposal`](../classes/market_proposal.Proposal) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/market/strategy.ts:11](https://github.com/golemfactory/golem-js/blob/627e370/src/market/strategy.ts#L11)

___

### blackListProposalRegexpFilter

▸ **blackListProposalRegexpFilter**(`regexp`): (`proposal`: [`Proposal`](../classes/market_proposal.Proposal)) => `Promise`\<`boolean`\>

Proposal filter blocking every offer coming from a provider whose name match to the regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `regexp` | `RegExp` |

#### Returns

`fn`

▸ (`proposal`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`Proposal`](../classes/market_proposal.Proposal) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/market/strategy.ts:15](https://github.com/golemfactory/golem-js/blob/627e370/src/market/strategy.ts#L15)

___

### whiteListProposalIdsFilter

▸ **whiteListProposalIdsFilter**(`whiteListIds`): (`proposal`: [`Proposal`](../classes/market_proposal.Proposal)) => `Promise`\<`boolean`\>

Proposal filter that only allows offers from a provider whose id is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `whiteListIds` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`Proposal`](../classes/market_proposal.Proposal) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/market/strategy.ts:19](https://github.com/golemfactory/golem-js/blob/627e370/src/market/strategy.ts#L19)

___

### whiteListProposalNamesFilter

▸ **whiteListProposalNamesFilter**(`whiteListNames`): (`proposal`: [`Proposal`](../classes/market_proposal.Proposal)) => `Promise`\<`boolean`\>

Proposal filter that only allows offers from a provider whose name is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `whiteListNames` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`Proposal`](../classes/market_proposal.Proposal) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/market/strategy.ts:23](https://github.com/golemfactory/golem-js/blob/627e370/src/market/strategy.ts#L23)

___

### whiteListProposalRegexpFilter

▸ **whiteListProposalRegexpFilter**(`regexp`): (`proposal`: [`Proposal`](../classes/market_proposal.Proposal)) => `Promise`\<`boolean`\>

Proposal filter that only allows offers from a provider whose name match to the regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `regexp` | `RegExp` |

#### Returns

`fn`

▸ (`proposal`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`Proposal`](../classes/market_proposal.Proposal) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/market/strategy.ts:27](https://github.com/golemfactory/golem-js/blob/627e370/src/market/strategy.ts#L27)

___

### limitPriceFilter

▸ **limitPriceFilter**(`priceLimits`): (`proposal`: [`Proposal`](../classes/market_proposal.Proposal)) => `Promise`\<`boolean`\>

Proposal filter only allowing offers that do not exceed the defined usage

#### Parameters

| Name | Type |
| :------ | :------ |
| `priceLimits` | [`PriceLimits`](market_strategy#pricelimits) |

#### Returns

`fn`

▸ (`proposal`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`Proposal`](../classes/market_proposal.Proposal) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/market/strategy.ts:43](https://github.com/golemfactory/golem-js/blob/627e370/src/market/strategy.ts#L43)
