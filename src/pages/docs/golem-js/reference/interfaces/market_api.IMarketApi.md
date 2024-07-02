---
title: "Interface IMarketApi"
pageTitle: "Interface IMarketApi - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface IMarketApi within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: IMarketApi

[market/api](../modules/market_api).IMarketApi

## Implemented by

- [`MarketApiAdapter`](../classes/shared_yagna_adapters_market_api_adapter.MarketApiAdapter)

## Table of contents

### Methods

- [publishDemandSpecification](market_api.IMarketApi#publishdemandspecification)
- [unpublishDemand](market_api.IMarketApi#unpublishdemand)
- [collectMarketProposalEvents](market_api.IMarketApi#collectmarketproposalevents)
- [collectAgreementEvents](market_api.IMarketApi#collectagreementevents)
- [counterProposal](market_api.IMarketApi#counterproposal)
- [rejectProposal](market_api.IMarketApi#rejectproposal)
- [getPaymentRelatedDemandDecorations](market_api.IMarketApi#getpaymentrelateddemanddecorations)
- [getAgreement](market_api.IMarketApi#getagreement)
- [createAgreement](market_api.IMarketApi#createagreement)
- [proposeAgreement](market_api.IMarketApi#proposeagreement)
- [confirmAgreement](market_api.IMarketApi#confirmagreement)
- [terminateAgreement](market_api.IMarketApi#terminateagreement)
- [getAgreementState](market_api.IMarketApi#getagreementstate)
- [scan](market_api.IMarketApi#scan)

## Methods

### publishDemandSpecification

▸ **publishDemandSpecification**(`specification`): `Promise`\<[`Demand`](../classes/market_demand_demand.Demand)\>

Creates a new demand based on the given specification and publishes
it to the market.
Keep in mind that the demand lasts for a limited time and needs to be
refreshed periodically (see `refreshDemand` method).
Use `unpublishDemand` to remove the demand from the market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `specification` | [`DemandSpecification`](../classes/market_demand_demand.DemandSpecification) |

#### Returns

`Promise`\<[`Demand`](../classes/market_demand_demand.Demand)\>

#### Defined in

[src/market/api.ts:48](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L48)

___

### unpublishDemand

▸ **unpublishDemand**(`demand`): `Promise`\<`void`\>

Remove the given demand from the market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | [`Demand`](../classes/market_demand_demand.Demand) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/market/api.ts:53](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L53)

___

### collectMarketProposalEvents

▸ **collectMarketProposalEvents**(`demand`): `Observable`\<[`MarketProposalEvent`](../modules/market_proposal_market_proposal_event#marketproposalevent)\>

"Publishes" the demand on the network and stats to listen (event polling) for the events representing the feedback

The feedback can fall into four categories:

- (Initial) We will receive initial offer proposals that were matched by the yagna node which we're using
- (Negotiations) We will receive responses from providers with draft offer proposals if we decided to counter the initial proposal
- (Negotiations) We will receive an event representing rejection of our counter-proposal by the provider
- (Negotiations) We will receive a question from the provider about a certain property as part of the negotiation process (_protocol piece not by yagna 0.15_)

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | [`Demand`](../classes/market_demand_demand.Demand) |

#### Returns

`Observable`\<[`MarketProposalEvent`](../modules/market_proposal_market_proposal_event#marketproposalevent)\>

A complex object that allows subscribing to these categories of feedback mentioned above

#### Defined in

[src/market/api.ts:69](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L69)

___

### collectAgreementEvents

▸ **collectAgreementEvents**(): `Observable`\<[`AgreementEvent`](../modules/market_agreement_agreement_event#agreementevent)\>

Start looking at the Agreement related events

#### Returns

`Observable`\<[`AgreementEvent`](../modules/market_agreement_agreement_event#agreementevent)\>

#### Defined in

[src/market/api.ts:74](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L74)

___

### counterProposal

▸ **counterProposal**(`receivedProposal`, `specification`): `Promise`\<[`OfferCounterProposal`](../classes/market_proposal_offer_counter_proposal.OfferCounterProposal)\>

Sends a counter-proposal to the given proposal. Returns the newly created counter-proposal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `receivedProposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |
| `specification` | [`DemandSpecification`](../classes/market_demand_demand.DemandSpecification) |

#### Returns

`Promise`\<[`OfferCounterProposal`](../classes/market_proposal_offer_counter_proposal.OfferCounterProposal)\>

#### Defined in

[src/market/api.ts:79](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L79)

___

### rejectProposal

▸ **rejectProposal**(`receivedProposal`, `reason`): `Promise`\<`void`\>

Sends a "reject" response for the proposal that was received from the Provider as part of the negotiation process

On the protocol level this means that no further counter-proposals will be generated by the Requestor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receivedProposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) | The proposal from the provider |
| `reason` | `string` | User readable reason that should be presented to the Provider |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/market/api.ts:89](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L89)

___

### getPaymentRelatedDemandDecorations

▸ **getPaymentRelatedDemandDecorations**(`allocationId`): `Promise`\<[`DemandBodyPrototype`](../modules/market_demand_demand_body_builder#demandbodyprototype)\>

Fetches payment related decorations, based on the given allocation ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allocationId` | `string` | The ID of the allocation that will be used to pay for computations related to the demand |

#### Returns

`Promise`\<[`DemandBodyPrototype`](../modules/market_demand_demand_body_builder#demandbodyprototype)\>

#### Defined in

[src/market/api.ts:97](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L97)

___

### getAgreement

▸ **getAgreement**(`id`): `Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

Retrieves an agreement based on the provided ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

#### Defined in

[src/market/api.ts:102](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L102)

___

### createAgreement

▸ **createAgreement**(`proposal`, `options?`): `Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

Request creating an agreement from the provided proposal

Use this method if you want to decide what should happen with the agreement after it is created

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |
| `options?` | [`AgreementOptions`](market_agreement_agreement.AgreementOptions) |

#### Returns

`Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

An agreement that's in a "Proposal" state (not yet usable for activity creation)

#### Defined in

[src/market/api.ts:111](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L111)

___

### proposeAgreement

▸ **proposeAgreement**(`proposal`, `options?`): `Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

Request creating an agreement from the provided proposal, send it to the Provider and wait for approval

Use this method when you want to quickly finalize the deal with the Provider, but be ready for a rejection

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |
| `options?` | [`AgreementOptions`](market_agreement_agreement.AgreementOptions) |

#### Returns

`Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

An agreement that's already in an "Approved" state and can be used to create activities on the Provider

#### Defined in

[src/market/api.ts:120](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L120)

___

### confirmAgreement

▸ **confirmAgreement**(`agreement`, `options?`): `Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

Confirms the agreement with the provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `options?` | [`AgreementOptions`](market_agreement_agreement.AgreementOptions) |

#### Returns

`Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

#### Defined in

[src/market/api.ts:125](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L125)

___

### terminateAgreement

▸ **terminateAgreement**(`agreement`, `reason?`): `Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

Terminates an agreement.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `reason?` | `string` |

#### Returns

`Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

#### Defined in

[src/market/api.ts:130](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L130)

___

### getAgreementState

▸ **getAgreementState**(`id`): `Promise`\<[`AgreementState`](../modules/market_agreement_agreement#agreementstate)\>

Retrieves the state of an agreement based on the provided agreement ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`AgreementState`](../modules/market_agreement_agreement#agreementstate)\>

#### Defined in

[src/market/api.ts:135](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L135)

___

### scan

▸ **scan**(`scanSpecification`): `Observable`\<[`ScannedOffer`](../classes/market_scan_scanned_proposal.ScannedOffer)\>

Scan the market for offers that match the given specification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanSpecification` | [`ScanSpecification`](../modules/market_scan_types#scanspecification) |

#### Returns

`Observable`\<[`ScannedOffer`](../classes/market_scan_scanned_proposal.ScannedOffer)\>

#### Defined in

[src/market/api.ts:140](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L140)
