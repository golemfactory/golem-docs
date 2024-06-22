---
title: "Interface MarketModule"
pageTitle: "Interface MarketModule - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface MarketModule within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: MarketModule

[market/market.module](../modules/market_market_module).MarketModule

## Implemented by

- [`MarketModuleImpl`](../classes/market_market_module.MarketModuleImpl)

## Table of contents

### Properties

- [events](market_market_module.MarketModule#events)

### Methods

- [buildDemandDetails](market_market_module.MarketModule#builddemanddetails)
- [publishAndRefreshDemand](market_market_module.MarketModule#publishandrefreshdemand)
- [collectMarketProposalEvents](market_market_module.MarketModule#collectmarketproposalevents)
- [collectAllOfferProposals](market_market_module.MarketModule#collectallofferproposals)
- [negotiateProposal](market_market_module.MarketModule#negotiateproposal)
- [proposeAgreement](market_market_module.MarketModule#proposeagreement)
- [terminateAgreement](market_market_module.MarketModule#terminateagreement)
- [signAgreementFromPool](market_market_module.MarketModule#signagreementfrompool)
- [collectDraftOfferProposals](market_market_module.MarketModule#collectdraftofferproposals)
- [estimateBudget](market_market_module.MarketModule#estimatebudget)
- [fetchAgreement](market_market_module.MarketModule#fetchagreement)

## Properties

### events

• **events**: `EventEmitter`\<[`MarketEvents`](../modules/market_api#marketevents), `any`\>

#### Defined in

[src/market/market.module.ts:74](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L74)

## Methods

### buildDemandDetails

▸ **buildDemandDetails**(`options`, `allocation`): `Promise`\<[`DemandSpecification`](../classes/market_demand_demand.DemandSpecification)\>

Build a DemandSpecification based on the given options and allocation.
You can obtain an allocation using the payment module.
The method returns a DemandSpecification that can be used to publish the demand to the market,
for example using the `publishDemand` method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`BuildDemandOptions`](../modules/market_demand_demand#builddemandoptions) |
| `allocation` | [`Allocation`](../classes/payment_allocation.Allocation) |

#### Returns

`Promise`\<[`DemandSpecification`](../classes/market_demand_demand.DemandSpecification)\>

#### Defined in

[src/market/market.module.ts:82](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L82)

___

### publishAndRefreshDemand

▸ **publishAndRefreshDemand**(`demandSpec`): `Observable`\<[`Demand`](../classes/market_demand_demand.Demand)\>

Publishes the demand to the market and handles refreshing it when needed.
Each time the demand is refreshed, a new demand is emitted by the observable.
Keep in mind that since this method returns an observable, nothing will happen until you subscribe to it.
Unsubscribing will remove the demand from the market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `demandSpec` | [`DemandSpecification`](../classes/market_demand_demand.DemandSpecification) |

#### Returns

`Observable`\<[`Demand`](../classes/market_demand_demand.Demand)\>

#### Defined in

[src/market/market.module.ts:90](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L90)

___

### collectMarketProposalEvents

▸ **collectMarketProposalEvents**(`demand`): `Observable`\<[`MarketProposalEvent`](../modules/market_proposal_market_proposal_event#marketproposalevent)\>

Return an observable that will emit values representing various events related to this demand

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | [`Demand`](../classes/market_demand_demand.Demand) |

#### Returns

`Observable`\<[`MarketProposalEvent`](../modules/market_proposal_market_proposal_event#marketproposalevent)\>

#### Defined in

[src/market/market.module.ts:95](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L95)

___

### collectAllOfferProposals

▸ **collectAllOfferProposals**(`demand`): `Observable`\<[`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)\>

Subscribes to the proposals for the given demand.
If an error occurs, the observable will emit an error and complete.
Keep in mind that since this method returns an observable, nothing will happen until you subscribe to it.

This method will just yield all the proposals that will be found for that demand without any additional logic.

The [collectDraftOfferProposals](market_market_module.MarketModule#collectdraftofferproposals) is a more specialized variant of offer collection, which includes negotiations
 and demand re-subscription logic

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | [`Demand`](../classes/market_demand_demand.Demand) |

#### Returns

`Observable`\<[`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)\>

#### Defined in

[src/market/market.module.ts:107](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L107)

___

### negotiateProposal

▸ **negotiateProposal**(`receivedProposal`, `counterDemandSpec`): `Promise`\<[`OfferCounterProposal`](../classes/market_proposal_offer_counter_proposal.OfferCounterProposal)\>

Sends a counter-offer to the provider. Note that to get the provider's response to your
counter you should listen to events returned by `collectDemandOfferEvents`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `receivedProposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |
| `counterDemandSpec` | [`DemandSpecification`](../classes/market_demand_demand.DemandSpecification) |

#### Returns

`Promise`\<[`OfferCounterProposal`](../classes/market_proposal_offer_counter_proposal.OfferCounterProposal)\>

The counter-proposal that the requestor made to the Provider

#### Defined in

[src/market/market.module.ts:115](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L115)

___

### proposeAgreement

▸ **proposeAgreement**(`proposal`): `Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

Internally

- ya-ts-client createAgreement
- ya-ts-client approveAgreement
- ya-ts-client "wait for approval"

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

#### Returns

`Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

Returns when the provider accepts the agreement, rejects otherwise. The resulting agreement is ready to create activities from.

#### Defined in

[src/market/market.module.ts:131](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L131)

___

### terminateAgreement

▸ **terminateAgreement**(`agreement`, `reason?`): `Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `reason?` | `string` |

#### Returns

`Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

The Agreement that has been terminated via Yagna

#### Defined in

[src/market/market.module.ts:136](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L136)

___

### signAgreementFromPool

▸ **signAgreementFromPool**(`draftProposalPool`, `agreementOptions?`, `signalOrTimeout?`): `Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

Acquire a proposal from the pool and sign an agreement with the provider. If signing the agreement fails,
destroy the proposal and try again with another one. The method returns an agreement that's ready to be used.
Optionally, you can provide a timeout in milliseconds or an AbortSignal that can be used to cancel the operation
early. If the operation is cancelled, the method will throw an error.
Note that this method will respect the acquire timeout set in the pool and will throw an error if no proposal
is available within the specified time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `draftProposalPool` | [`DraftOfferProposalPool`](../classes/market_draft_offer_proposal_pool.DraftOfferProposalPool) | The pool of draft proposals to acquire from |
| `agreementOptions?` | [`AgreementOptions`](market_agreement_agreement.AgreementOptions) | options used to sign the agreement such as expiration or waitingForApprovalTimeout |
| `signalOrTimeout?` | `number` \| `AbortSignal` | The timeout in milliseconds or an AbortSignal that will be used to cancel the operation |

#### Returns

`Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

**`Example`**

```ts
const agreement = await marketModule.signAgreementFromPool(draftProposalPool, 10_000); // throws TimeoutError if the operation takes longer than 10 seconds
```

**`Example`**

```ts
const signal = AbortSignal.timeout(10_000);
const agreement = await marketModule.signAgreementFromPool(draftProposalPool, signal); // throws TimeoutError if the operation takes longer than 10 seconds
```

#### Defined in

[src/market/market.module.ts:159](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L159)

___

### collectDraftOfferProposals

▸ **collectDraftOfferProposals**(`options`): `Observable`\<[`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)\>

Creates a demand for the given package and allocation and starts collecting, filtering and negotiating proposals.
The method returns an observable that emits a batch of draft proposals every time the buffer is full.
The method will automatically negotiate the proposals until they are moved to the `Draft` state.
Keep in mind that since this method returns an observable, nothing will happen until you subscribe to it.
Unsubscribing from the observable will stop the process and remove the demand from the market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.demandSpecification` | [`DemandSpecification`](../classes/market_demand_demand.DemandSpecification) |
| `options.pricing` | [`PricingOptions`](../modules/market_market_module#pricingoptions) |
| `options.filter?` | [`ProposalFilter`](../modules/market_proposal_offer_proposal#proposalfilter) |
| `options.minProposalsBatchSize?` | `number` |
| `options.proposalsBatchReleaseTimeoutMs?` | `number` |

#### Returns

`Observable`\<[`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)\>

#### Defined in

[src/market/market.module.ts:172](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L172)

___

### estimateBudget

▸ **estimateBudget**(`params`): `number`

Estimate the budget for the given order and concurrency level.
Keep in mind that this is just an estimate and the actual cost may vary.
To get a more accurate estimate, make sure to specify an exact or maximum concurrency level.
The method returns the estimated budget in GLM.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.concurrency` | [`Concurrency`](../modules/resource_rental_resource_rental_pool#concurrency) |
| `params.order` | [`MarketOrderSpec`](golem_network_golem_network.MarketOrderSpec) |

#### Returns

`number`

#### Defined in

[src/market/market.module.ts:187](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L187)

___

### fetchAgreement

▸ **fetchAgreement**(`agreementId`): `Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

Fetch the most up-to-date agreement details from the yagna

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |

#### Returns

`Promise`\<[`Agreement`](../classes/market_agreement_agreement.Agreement)\>

#### Defined in

[src/market/market.module.ts:191](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L191)
