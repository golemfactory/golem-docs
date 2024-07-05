---
title: "Class MarketModuleImpl"
pageTitle: "Class MarketModuleImpl - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class MarketModuleImpl within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: MarketModuleImpl

[market/market.module](../modules/market_market_module).MarketModuleImpl

## Implements

- [`MarketModule`](../interfaces/market_market_module.MarketModule)

## Table of contents

### Constructors

- [constructor](market_market_module.MarketModuleImpl#constructor)

### Properties

- [events](market_market_module.MarketModuleImpl#events)

### Methods

- [buildDemandDetails](market_market_module.MarketModuleImpl#builddemanddetails)
- [buildScanSpecification](market_market_module.MarketModuleImpl#buildscanspecification)
- [publishAndRefreshDemand](market_market_module.MarketModuleImpl#publishandrefreshdemand)
- [collectMarketProposalEvents](market_market_module.MarketModuleImpl#collectmarketproposalevents)
- [collectAllOfferProposals](market_market_module.MarketModuleImpl#collectallofferproposals)
- [negotiateProposal](market_market_module.MarketModuleImpl#negotiateproposal)
- [proposeAgreement](market_market_module.MarketModuleImpl#proposeagreement)
- [terminateAgreement](market_market_module.MarketModuleImpl#terminateagreement)
- [collectDraftOfferProposals](market_market_module.MarketModuleImpl#collectdraftofferproposals)
- [signAgreementFromPool](market_market_module.MarketModuleImpl#signagreementfrompool)
- [estimateBudget](market_market_module.MarketModuleImpl#estimatebudget)
- [fetchAgreement](market_market_module.MarketModuleImpl#fetchagreement)
- [scan](market_market_module.MarketModuleImpl#scan)

## Constructors

### constructor

• **new MarketModuleImpl**(`deps`, `options?`): [`MarketModuleImpl`](market_market_module.MarketModuleImpl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deps` | `Object` |
| `deps.logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |
| `deps.yagna` | [`YagnaApi`](shared_yagna_yagnaApi.YagnaApi) |
| `deps.paymentApi` | [`IPaymentApi`](../interfaces/payment_api.IPaymentApi) |
| `deps.activityApi` | [`IActivityApi`](../interfaces/activity_api.IActivityApi) |
| `deps.marketApi` | [`IMarketApi`](../interfaces/market_api.IMarketApi) |
| `deps.networkApi` | [`INetworkApi`](../interfaces/network_api.INetworkApi) |
| `deps.networkModule` | [`NetworkModule`](../interfaces/network_network_module.NetworkModule) |
| `deps.fileServer` | [`IFileServer`](../interfaces/activity_activity_module.IFileServer) |
| `deps.storageProvider` | [`StorageProvider`](../interfaces/shared_storage_provider.StorageProvider) |
| `options?` | `Partial`\<[`MarketModuleOptions`](../interfaces/market_market_module.MarketModuleOptions)\> |

#### Returns

[`MarketModuleImpl`](market_market_module.MarketModuleImpl)

#### Defined in

[src/market/market.module.ts:243](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L243)

## Properties

### events

• **events**: `EventEmitter`\<[`MarketEvents`](../modules/market_api#marketevents), `any`\>

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[events](../interfaces/market_market_module.MarketModule#events)

#### Defined in

[src/market/market.module.ts:236](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L236)

## Methods

### buildDemandDetails

▸ **buildDemandDetails**(`demandOptions`, `orderOptions`, `allocation`): `Promise`\<[`DemandSpecification`](market_demand_demand.DemandSpecification)\>

Build a DemandSpecification based on the given options and allocation.
You can obtain an allocation using the payment module.
The method returns a DemandSpecification that can be used to publish the demand to the market,
for example using the `publishDemand` method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `demandOptions` | [`OrderDemandOptions`](../modules/market_demand_demand#orderdemandoptions) |
| `orderOptions` | [`OrderMarketOptions`](../interfaces/market_market_module.OrderMarketOptions) |
| `allocation` | [`Allocation`](payment_allocation.Allocation) |

#### Returns

`Promise`\<[`DemandSpecification`](market_demand_demand.DemandSpecification)\>

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[buildDemandDetails](../interfaces/market_market_module.MarketModule#builddemanddetails)

#### Defined in

[src/market/market.module.ts:269](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L269)

___

### buildScanSpecification

▸ **buildScanSpecification**(`options`): [`ScanSpecification`](../modules/market_scan_types#scanspecification)

Build a ScanSpecification that can be used to scan the market for offers.
The difference between this method and `buildDemandDetails` is that this method does not require an
allocation, doesn't inherit payment properties from `GolemNetwork` settings and doesn't provide any defaults.
If you wish to set the payment platform, you need to specify it in the ScanOptions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ScanOptions`](../modules/market_scan_types#scanoptions) |

#### Returns

[`ScanSpecification`](../modules/market_scan_types#scanspecification)

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[buildScanSpecification](../interfaces/market_market_module.MarketModule#buildscanspecification)

#### Defined in

[src/market/market.module.ts:302](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L302)

___

### publishAndRefreshDemand

▸ **publishAndRefreshDemand**(`demandSpecification`): `Observable`\<[`Demand`](market_demand_demand.Demand)\>

Publishes the specified demand and re-publishes it based on demandSpecification.expirationSec interval

#### Parameters

| Name | Type |
| :------ | :------ |
| `demandSpecification` | [`DemandSpecification`](market_demand_demand.DemandSpecification) |

#### Returns

`Observable`\<[`Demand`](market_demand_demand.Demand)\>

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[publishAndRefreshDemand](../interfaces/market_market_module.MarketModule#publishandrefreshdemand)

#### Defined in

[src/market/market.module.ts:339](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L339)

___

### collectMarketProposalEvents

▸ **collectMarketProposalEvents**(`demand`): `Observable`\<[`MarketProposalEvent`](../modules/market_proposal_market_proposal_event#marketproposalevent)\>

Return an observable that will emit values representing various events related to this demand

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | [`Demand`](market_demand_demand.Demand) |

#### Returns

`Observable`\<[`MarketProposalEvent`](../modules/market_proposal_market_proposal_event#marketproposalevent)\>

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[collectMarketProposalEvents](../interfaces/market_market_module.MarketModule#collectmarketproposalevents)

#### Defined in

[src/market/market.module.ts:409](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L409)

___

### collectAllOfferProposals

▸ **collectAllOfferProposals**(`demand`): `Observable`\<[`OfferProposal`](market_proposal_offer_proposal.OfferProposal)\>

Subscribes to the proposals for the given demand.
If an error occurs, the observable will emit an error and complete.
Keep in mind that since this method returns an observable, nothing will happen until you subscribe to it.

This method will just yield all the proposals that will be found for that demand without any additional logic.

The [collectDraftOfferProposals](../interfaces/market_market_module.MarketModule#collectdraftofferproposals) is a more specialized variant of offer collection, which includes negotiations
 and demand re-subscription logic

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | [`Demand`](market_demand_demand.Demand) |

#### Returns

`Observable`\<[`OfferProposal`](market_proposal_offer_proposal.OfferProposal)\>

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[collectAllOfferProposals](../interfaces/market_market_module.MarketModule#collectallofferproposals)

#### Defined in

[src/market/market.module.ts:416](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L416)

___

### negotiateProposal

▸ **negotiateProposal**(`offerProposal`, `counterDemand`): `Promise`\<[`OfferCounterProposal`](market_proposal_offer_counter_proposal.OfferCounterProposal)\>

Sends a counter-offer to the provider. Note that to get the provider's response to your
counter you should listen to events returned by `collectDemandOfferEvents`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `offerProposal` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal) |
| `counterDemand` | [`DemandSpecification`](market_demand_demand.DemandSpecification) |

#### Returns

`Promise`\<[`OfferCounterProposal`](market_proposal_offer_counter_proposal.OfferCounterProposal)\>

The counter-proposal that the requestor made to the Provider

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[negotiateProposal](../interfaces/market_market_module.MarketModule#negotiateproposal)

#### Defined in

[src/market/market.module.ts:423](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L423)

___

### proposeAgreement

▸ **proposeAgreement**(`proposal`, `options?`): `Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

Internally

- ya-ts-client createAgreement
- ya-ts-client approveAgreement
- ya-ts-client "wait for approval"

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal) |
| `options?` | [`AgreementOptions`](../interfaces/market_agreement_agreement.AgreementOptions) |

#### Returns

`Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

Returns when the provider accepts the agreement, rejects otherwise. The resulting agreement is ready to create activities from.

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[proposeAgreement](../interfaces/market_market_module.MarketModule#proposeagreement)

#### Defined in

[src/market/market.module.ts:444](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L444)

___

### terminateAgreement

▸ **terminateAgreement**(`agreement`, `reason?`): `Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](market_agreement_agreement.Agreement) |
| `reason?` | `string` |

#### Returns

`Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

The Agreement that has been terminated via Yagna

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[terminateAgreement](../interfaces/market_market_module.MarketModule#terminateagreement)

#### Defined in

[src/market/market.module.ts:455](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L455)

___

### collectDraftOfferProposals

▸ **collectDraftOfferProposals**(`options`): `Observable`\<[`OfferProposal`](market_proposal_offer_proposal.OfferProposal)\>

Creates a demand for the given package and allocation and starts collecting, filtering and negotiating proposals.
The method returns an observable that emits a batch of draft proposals every time the buffer is full.
The method will automatically negotiate the proposals until they are moved to the `Draft` state.
Keep in mind that since this method returns an observable, nothing will happen until you subscribe to it.
Unsubscribing from the observable will stop the process and remove the demand from the market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.demandSpecification` | [`DemandSpecification`](market_demand_demand.DemandSpecification) |
| `options.pricing` | [`PricingOptions`](../modules/market_market_module#pricingoptions) |
| `options.filter?` | [`OfferProposalFilter`](../modules/market_proposal_offer_proposal#offerproposalfilter) |
| `options.minProposalsBatchSize?` | `number` |
| `options.proposalsBatchReleaseTimeoutMs?` | `number` |

#### Returns

`Observable`\<[`OfferProposal`](market_proposal_offer_proposal.OfferProposal)\>

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[collectDraftOfferProposals](../interfaces/market_market_module.MarketModule#collectdraftofferproposals)

#### Defined in

[src/market/market.module.ts:467](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L467)

___

### signAgreementFromPool

▸ **signAgreementFromPool**(`draftProposalPool`, `agreementOptions?`, `signalOrTimeout?`): `Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

Acquire a proposal from the pool and sign an agreement with the provider. If signing the agreement fails,
destroy the proposal and try again with another one. The method returns an agreement that's ready to be used.
Optionally, you can provide a timeout in milliseconds or an AbortSignal that can be used to cancel the operation
early. If the operation is cancelled, the method will throw an error.
Note that this method will respect the acquire timeout set in the pool and will throw an error if no proposal
is available within the specified time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `draftProposalPool` | [`DraftOfferProposalPool`](market_draft_offer_proposal_pool.DraftOfferProposalPool) | The pool of draft proposals to acquire from |
| `agreementOptions?` | [`AgreementOptions`](../interfaces/market_agreement_agreement.AgreementOptions) | options used to sign the agreement such as expiration or waitingForApprovalTimeout |
| `signalOrTimeout?` | `number` \| `AbortSignal` | The timeout in milliseconds or an AbortSignal that will be used to cancel the operation |

#### Returns

`Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

**`Example`**

```ts
const agreement = await marketModule.signAgreementFromPool(draftProposalPool, 10_000); // throws TimeoutError if the operation takes longer than 10 seconds
```

**`Example`**

```ts
const signal = AbortSignal.timeout(10_000);
const agreement = await marketModule.signAgreementFromPool(draftProposalPool, signal); // throws TimeoutError if the operation takes longer than 10 seconds
```

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[signAgreementFromPool](../interfaces/market_market_module.MarketModule#signagreementfrompool)

#### Defined in

[src/market/market.module.ts:528](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L528)

___

### estimateBudget

▸ **estimateBudget**(`«destructured»`): `number`

Estimate the budget for the given order and maximum numbers of agreemnets.
Keep in mind that this is just an estimate and the actual cost may vary.
The method returns the estimated budget in GLM.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `order` | [`MarketOrderSpec`](../interfaces/golem_network_golem_network.MarketOrderSpec) |
| › `maxAgreements` | `number` |

#### Returns

`number`

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[estimateBudget](../interfaces/market_market_module.MarketModule#estimatebudget)

#### Defined in

[src/market/market.module.ts:628](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L628)

___

### fetchAgreement

▸ **fetchAgreement**(`agreementId`): `Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

Fetch the most up-to-date agreement details from the yagna

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |

#### Returns

`Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[fetchAgreement](../interfaces/market_market_module.MarketModule#fetchagreement)

#### Defined in

[src/market/market.module.ts:653](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L653)

___

### scan

▸ **scan**(`scanSpecification`): `Observable`\<[`ScannedOffer`](market_scan_scanned_proposal.ScannedOffer)\>

Scan the market for offers that match the given demand specification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanSpecification` | [`ScanSpecification`](../modules/market_scan_types#scanspecification) |

#### Returns

`Observable`\<[`ScannedOffer`](market_scan_scanned_proposal.ScannedOffer)\>

#### Implementation of

[MarketModule](../interfaces/market_market_module.MarketModule).[scan](../interfaces/market_market_module.MarketModule#scan)

#### Defined in

[src/market/market.module.ts:733](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L733)
