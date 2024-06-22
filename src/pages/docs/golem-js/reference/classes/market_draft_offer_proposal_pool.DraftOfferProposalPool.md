---
title: "Class DraftOfferProposalPool"
pageTitle: "Class DraftOfferProposalPool - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DraftOfferProposalPool within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: DraftOfferProposalPool

[market/draft-offer-proposal-pool](../modules/market_draft_offer_proposal_pool).DraftOfferProposalPool

Pool of draft offer proposals that are ready to be promoted to agreements with Providers

Reaching this pool means that the related initial proposal which was delivered by Yagna in response
to the subscription with the Demand has been fully negotiated between the Provider and Requestor.

This pool should contain only offer proposals that can be used to pursue the final Agreement between the
parties.

Technically, the "market" part of you application should populate this pool with such offer proposals.

## Table of contents

### Constructors

- [constructor](market_draft_offer_proposal_pool.DraftOfferProposalPool#constructor)

### Properties

- [events](market_draft_offer_proposal_pool.DraftOfferProposalPool#events)

### Methods

- [add](market_draft_offer_proposal_pool.DraftOfferProposalPool#add)
- [acquire](market_draft_offer_proposal_pool.DraftOfferProposalPool#acquire)
- [release](market_draft_offer_proposal_pool.DraftOfferProposalPool#release)
- [remove](market_draft_offer_proposal_pool.DraftOfferProposalPool#remove)
- [count](market_draft_offer_proposal_pool.DraftOfferProposalPool#count)
- [availableCount](market_draft_offer_proposal_pool.DraftOfferProposalPool#availablecount)
- [leasedCount](market_draft_offer_proposal_pool.DraftOfferProposalPool#leasedcount)
- [isReady](market_draft_offer_proposal_pool.DraftOfferProposalPool#isready)
- [clear](market_draft_offer_proposal_pool.DraftOfferProposalPool#clear)
- [removeFromAvailable](market_draft_offer_proposal_pool.DraftOfferProposalPool#removefromavailable)
- [readFrom](market_draft_offer_proposal_pool.DraftOfferProposalPool#readfrom)

## Constructors

### constructor

• **new DraftOfferProposalPool**(`options?`): [`DraftOfferProposalPool`](market_draft_offer_proposal_pool.DraftOfferProposalPool)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ProposalPoolOptions`](../interfaces/market_draft_offer_proposal_pool.ProposalPoolOptions) |

#### Returns

[`DraftOfferProposalPool`](market_draft_offer_proposal_pool.DraftOfferProposalPool)

#### Defined in

[src/market/draft-offer-proposal-pool.ts:78](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L78)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`ProposalPoolEvents`](../interfaces/market_draft_offer_proposal_pool.ProposalPoolEvents), `any`\>

#### Defined in

[src/market/draft-offer-proposal-pool.ts:54](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L54)

## Methods

### add

▸ **add**(`proposal`): `void`

Pushes the provided proposal to the list of proposals available for lease

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal) |

#### Returns

`void`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:96](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L96)

___

### acquire

▸ **acquire**(`signalOrTimeout?`): `Promise`\<[`OfferProposal`](market_proposal_offer_proposal.OfferProposal)\>

Attempts to obtain a single proposal from the pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signalOrTimeout?` | `number` \| `AbortSignal` | the timeout in milliseconds or an AbortSignal that will be used to cancel the acquiring |

#### Returns

`Promise`\<[`OfferProposal`](market_proposal_offer_proposal.OfferProposal)\>

#### Defined in

[src/market/draft-offer-proposal-pool.ts:111](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L111)

___

### release

▸ **release**(`proposal`): `Promise`\<`void`\>

Releases the proposal back to the pool

Validates if the proposal is still usable before putting it back to the list of available ones

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/market/draft-offer-proposal-pool.ts:155](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L155)

___

### remove

▸ **remove**(`proposal`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/market/draft-offer-proposal-pool.ts:168](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L168)

___

### count

▸ **count**(): `number`

Returns the number of all items in the pool (available + leased out)

#### Returns

`number`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:185](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L185)

___

### availableCount

▸ **availableCount**(): `number`

Returns the number of items that are possible to lease from the pool

#### Returns

`number`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:192](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L192)

___

### leasedCount

▸ **leasedCount**(): `number`

Returns the number of items that were leased out of the pool

#### Returns

`number`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:199](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L199)

___

### isReady

▸ **isReady**(): `boolean`

Tells if the pool is ready to take items from

#### Returns

`boolean`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:206](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L206)

___

### clear

▸ **clear**(): `Promise`\<`void`\>

Clears the pool entirely

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/market/draft-offer-proposal-pool.ts:213](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L213)

___

### removeFromAvailable

▸ **removeFromAvailable**(`proposal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal) |

#### Returns

`void`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:231](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L231)

___

### readFrom

▸ **readFrom**(`source`): `Subscription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Observable`\<[`OfferProposal`](market_proposal_offer_proposal.OfferProposal)\> |

#### Returns

`Subscription`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:236](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L236)
