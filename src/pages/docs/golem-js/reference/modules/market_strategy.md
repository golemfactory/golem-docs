# Module: market/strategy

## Table of contents

### Functions

- [acceptAllProposalFilter](market_strategy#acceptallproposalfilter)
- [blackListProposalIdsFilter](market_strategy#blacklistproposalidsfilter)
- [blackListProposalNamesFilter](market_strategy#blacklistproposalnamesfilter)
- [blackListProposalRegexpFilter](market_strategy#blacklistproposalregexpfilter)
- [whiteListProposalIdsFilter](market_strategy#whitelistproposalidsfilter)
- [whiteListProposalNamesFilter](market_strategy#whitelistproposalnamesfilter)
- [whiteListProposalRegexpFilter](market_strategy#whitelistproposalregexpfilter)
- [limitPriceFilter](market_strategy#limitpricefilter)

## Functions

### acceptAllProposalFilter

▸ **acceptAllProposalFilter**(): () => `Promise`<`boolean`\>

Default Proposal filter that accept all proposal coming from the market

#### Returns

`fn`

▸ (): `Promise`<`boolean`\>

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/market/strategy.ts:4](https://github.com/golemfactory/golem-js/blob/f1546de/src/market/strategy.ts#L4)

___

### blackListProposalIdsFilter

▸ **blackListProposalIdsFilter**(`blackListIds`): (`proposal`: `Proposal`) => `Promise`<`boolean`\>

Proposal filter blocking every offer coming from a provider whose id is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `blackListIds` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | `Proposal` |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/market/strategy.ts:7](https://github.com/golemfactory/golem-js/blob/f1546de/src/market/strategy.ts#L7)

___

### blackListProposalNamesFilter

▸ **blackListProposalNamesFilter**(`blackListNames`): (`proposal`: `Proposal`) => `Promise`<`boolean`\>

Proposal filter blocking every offer coming from a provider whose name is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `blackListNames` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | `Proposal` |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/market/strategy.ts:11](https://github.com/golemfactory/golem-js/blob/f1546de/src/market/strategy.ts#L11)

___

### blackListProposalRegexpFilter

▸ **blackListProposalRegexpFilter**(`regexp`): (`proposal`: `Proposal`) => `Promise`<`boolean`\>

Proposal filter blocking every offer coming from a provider whose name match to the regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `regexp` | `RegExp` |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | `Proposal` |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/market/strategy.ts:15](https://github.com/golemfactory/golem-js/blob/f1546de/src/market/strategy.ts#L15)

___

### whiteListProposalIdsFilter

▸ **whiteListProposalIdsFilter**(`whiteListIds`): (`proposal`: `Proposal`) => `Promise`<`boolean`\>

Proposal filter that only allows offers from a provider whose id is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `whiteListIds` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | `Proposal` |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/market/strategy.ts:19](https://github.com/golemfactory/golem-js/blob/f1546de/src/market/strategy.ts#L19)

___

### whiteListProposalNamesFilter

▸ **whiteListProposalNamesFilter**(`whiteListNames`): (`proposal`: `Proposal`) => `Promise`<`boolean`\>

Proposal filter that only allows offers from a provider whose name is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `whiteListNames` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | `Proposal` |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/market/strategy.ts:23](https://github.com/golemfactory/golem-js/blob/f1546de/src/market/strategy.ts#L23)

___

### whiteListProposalRegexpFilter

▸ **whiteListProposalRegexpFilter**(`regexp`): (`proposal`: `Proposal`) => `Promise`<`boolean`\>

Proposal filter that only allows offers from a provider whose name match to the regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `regexp` | `RegExp` |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | `Proposal` |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/market/strategy.ts:27](https://github.com/golemfactory/golem-js/blob/f1546de/src/market/strategy.ts#L27)

___

### limitPriceFilter

▸ **limitPriceFilter**(`priceLimits`): (`proposal`: `Proposal`) => `Promise`<`boolean`\>

Proposal filter only allowing offers that do not exceed the defined usage

#### Parameters

| Name | Type |
| :------ | :------ |
| `priceLimits` | `PriceLimits` |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | `Proposal` |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/market/strategy.ts:43](https://github.com/golemfactory/golem-js/blob/f1546de/src/market/strategy.ts#L43)
