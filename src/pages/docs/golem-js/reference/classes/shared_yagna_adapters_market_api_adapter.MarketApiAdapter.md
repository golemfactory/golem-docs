---
title: "Class MarketApiAdapter"
pageTitle: "Class MarketApiAdapter - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class MarketApiAdapter within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: MarketApiAdapter

[shared/yagna/adapters/market-api-adapter](../modules/shared_yagna_adapters_market_api_adapter).MarketApiAdapter

## Implements

- [`IMarketApi`](../interfaces/market_api.IMarketApi)

## Table of contents

### Constructors

- [constructor](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#constructor)

### Methods

- [publishDemandSpecification](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#publishdemandspecification)
- [unpublishDemand](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#unpublishdemand)
- [collectMarketProposalEvents](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#collectmarketproposalevents)
- [counterProposal](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#counterproposal)
- [rejectProposal](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#rejectproposal)
- [getPaymentRelatedDemandDecorations](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#getpaymentrelateddemanddecorations)
- [confirmAgreement](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#confirmagreement)
- [createAgreement](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#createagreement)
- [proposeAgreement](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#proposeagreement)
- [getAgreement](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#getagreement)
- [getAgreementState](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#getagreementstate)
- [terminateAgreement](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#terminateagreement)
- [collectAgreementEvents](shared_yagna_adapters_market_api_adapter.MarketApiAdapter#collectagreementevents)

## Constructors

### constructor

• **new MarketApiAdapter**(`yagnaApi`, `agreementRepo`, `proposalRepo`, `demandRepo`, `logger`): [`MarketApiAdapter`](shared_yagna_adapters_market_api_adapter.MarketApiAdapter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](shared_yagna_yagnaApi.YagnaApi) |
| `agreementRepo` | [`IAgreementRepository`](../interfaces/market_agreement_agreement.IAgreementRepository) |
| `proposalRepo` | [`IProposalRepository`](../interfaces/market_proposal_market_proposal.IProposalRepository) |
| `demandRepo` | [`IDemandRepository`](../interfaces/market_demand_demand.IDemandRepository) |
| `logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |

#### Returns

[`MarketApiAdapter`](shared_yagna_adapters_market_api_adapter.MarketApiAdapter)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:43](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L43)

## Methods

### publishDemandSpecification

▸ **publishDemandSpecification**(`spec`): `Promise`\<[`Demand`](market_demand_demand.Demand)\>

Creates a new demand based on the given specification and publishes
it to the market.
Keep in mind that the demand lasts for a limited time and needs to be
refreshed periodically (see `refreshDemand` method).
Use `unpublishDemand` to remove the demand from the market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | [`DemandSpecification`](market_demand_demand.DemandSpecification) |

#### Returns

`Promise`\<[`Demand`](market_demand_demand.Demand)\>

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[publishDemandSpecification](../interfaces/market_api.IMarketApi#publishdemandspecification)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:51](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L51)

___

### unpublishDemand

▸ **unpublishDemand**(`demand`): `Promise`\<`void`\>

Remove the given demand from the market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | [`Demand`](market_demand_demand.Demand) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[unpublishDemand](../interfaces/market_api.IMarketApi#unpublishdemand)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:64](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L64)

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
| `demand` | [`Demand`](market_demand_demand.Demand) |

#### Returns

`Observable`\<[`MarketProposalEvent`](../modules/market_proposal_market_proposal_event#marketproposalevent)\>

A complex object that allows subscribing to these categories of feedback mentioned above

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[collectMarketProposalEvents](../interfaces/market_api.IMarketApi#collectmarketproposalevents)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:72](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L72)

___

### counterProposal

▸ **counterProposal**(`receivedProposal`, `demand`): `Promise`\<[`OfferCounterProposal`](market_proposal_offer_counter_proposal.OfferCounterProposal)\>

Sends a counter-proposal to the given proposal. Returns the newly created counter-proposal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `receivedProposal` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal) |
| `demand` | [`DemandSpecification`](market_demand_demand.DemandSpecification) |

#### Returns

`Promise`\<[`OfferCounterProposal`](market_proposal_offer_counter_proposal.OfferCounterProposal)\>

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[counterProposal](../interfaces/market_api.IMarketApi#counterproposal)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:157](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L157)

___

### rejectProposal

▸ **rejectProposal**(`receivedProposal`, `reason`): `Promise`\<`void`\>

Sends a "reject" response for the proposal that was received from the Provider as part of the negotiation process

On the protocol level this means that no further counter-proposals will be generated by the Requestor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receivedProposal` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal) | The proposal from the provider |
| `reason` | `string` | User readable reason that should be presented to the Provider |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[rejectProposal](../interfaces/market_api.IMarketApi#rejectproposal)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:180](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L180)

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

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[getPaymentRelatedDemandDecorations](../interfaces/market_api.IMarketApi#getpaymentrelateddemanddecorations)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:210](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L210)

___

### confirmAgreement

▸ **confirmAgreement**(`agreement`, `options?`): `Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

Confirms the agreement with the provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](market_agreement_agreement.Agreement) |
| `options?` | [`AgreementOptions`](../interfaces/market_agreement_agreement.AgreementOptions) |

#### Returns

`Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[confirmAgreement](../interfaces/market_api.IMarketApi#confirmagreement)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:214](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L214)

___

### createAgreement

▸ **createAgreement**(`proposal`, `options?`): `Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

Request creating an agreement from the provided proposal

Use this method if you want to decide what should happen with the agreement after it is created

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal) |
| `options?` | [`AgreementOptions`](../interfaces/market_agreement_agreement.AgreementOptions) |

#### Returns

`Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

An agreement that's in a "Proposal" state (not yet usable for activity creation)

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[createAgreement](../interfaces/market_api.IMarketApi#createagreement)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:233](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L233)

___

### proposeAgreement

▸ **proposeAgreement**(`proposal`, `options?`): `Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

Request creating an agreement from the provided proposal, send it to the Provider and wait for approval

Use this method when you want to quickly finalize the deal with the Provider, but be ready for a rejection

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal) |
| `options?` | [`AgreementOptions`](../interfaces/market_agreement_agreement.AgreementOptions) |

#### Returns

`Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

An agreement that's already in an "Approved" state and can be used to create activities on the Provider

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[proposeAgreement](../interfaces/market_api.IMarketApi#proposeagreement)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:267](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L267)

___

### getAgreement

▸ **getAgreement**(`id`): `Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

Retrieves an agreement based on the provided ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[getAgreement](../interfaces/market_api.IMarketApi#getagreement)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:284](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L284)

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

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[getAgreementState](../interfaces/market_api.IMarketApi#getagreementstate)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:288](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L288)

___

### terminateAgreement

▸ **terminateAgreement**(`agreement`, `reason?`): `Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

Terminates an agreement.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `agreement` | [`Agreement`](market_agreement_agreement.Agreement) | `undefined` |
| `reason` | `string` | `"Finished"` |

#### Returns

`Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[terminateAgreement](../interfaces/market_api.IMarketApi#terminateagreement)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:293](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L293)

___

### collectAgreementEvents

▸ **collectAgreementEvents**(): `Observable`\<[`AgreementEvent`](../modules/market_agreement_agreement_event#agreementevent)\>

Start looking at the Agreement related events

#### Returns

`Observable`\<[`AgreementEvent`](../modules/market_agreement_agreement_event#agreementevent)\>

#### Implementation of

[IMarketApi](../interfaces/market_api.IMarketApi).[collectAgreementEvents](../interfaces/market_api.IMarketApi#collectagreementevents)

#### Defined in

[src/shared/yagna/adapters/market-api-adapter.ts:322](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/market-api-adapter.ts#L322)
