---
title: "Module market/api"
pageTitle: "Module market/api - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/api within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/api

## Table of contents

### Interfaces

- [IMarketApi](../interfaces/market_api.IMarketApi)

### Type Aliases

- [MarketEvents](market_api#marketevents)

## Type Aliases

### MarketEvents

Ƭ **MarketEvents**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `demandSubscriptionStarted` | (`demand`: [`Demand`](../classes/market_demand_demand.Demand)) => `void` | - |
| `demandSubscriptionRefreshed` | (`demand`: [`Demand`](../classes/market_demand_demand.Demand)) => `void` | - |
| `demandSubscriptionStopped` | (`demand`: [`Demand`](../classes/market_demand_demand.Demand)) => `void` | - |
| `offerProposalReceived` | (`event`: [`OfferProposalReceivedEvent`](market_proposal_market_proposal_event#offerproposalreceivedevent)) => `void` | - |
| `offerCounterProposalSent` | (`offerProposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal), `counterProposal`: [`OfferCounterProposal`](../classes/market_proposal_offer_counter_proposal.OfferCounterProposal)) => `void` | - |
| `errorSendingCounterProposal` | (`offerProposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal), `error`: `Error`) => `void` | - |
| `offerCounterProposalRejected` | (`event`: [`OfferCounterProposalRejectedEvent`](market_proposal_market_proposal_event#offercounterproposalrejectedevent)) => `void` | - |
| `offerPropertyQueryReceived` | (`event`: [`OfferPropertyQueryReceivedEvent`](market_proposal_market_proposal_event#offerpropertyqueryreceivedevent)) => `void` | - |
| `offerProposalRejectedByProposalFilter` | (`offerProposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal), `reason?`: `string`) => `void` | - |
| `offerProposalRejectedByPriceFilter` | (`offerProposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal), `reason?`: `string`) => `void` | - |
| `agreementApproved` | (`event`: [`AgreementApproved`](market_agreement_agreement_event#agreementapproved)) => `void` | - |
| `agreementRejected` | (`event`: [`AgreementRejectedEvent`](market_agreement_agreement_event#agreementrejectedevent)) => `void` | - |
| `agreementTerminated` | (`event`: [`AgreementTerminatedEvent`](market_agreement_agreement_event#agreementterminatedevent)) => `void` | - |
| `agreementCancelled` | (`event`: [`AgreementCancelledEvent`](market_agreement_agreement_event#agreementcancelledevent)) => `void` | - |

#### Defined in

[src/market/api.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/api.ts#L22)
