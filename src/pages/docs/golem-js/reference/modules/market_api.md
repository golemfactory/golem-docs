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
| `demandSubscriptionStarted` | (`event`: \{ `demand`: [`Demand`](../classes/market_demand_demand.Demand)  }) => `void` | - |
| `demandSubscriptionRefreshed` | (`event`: \{ `demand`: [`Demand`](../classes/market_demand_demand.Demand)  }) => `void` | - |
| `demandSubscriptionStopped` | (`event`: \{ `demand`: [`Demand`](../classes/market_demand_demand.Demand)  }) => `void` | - |
| `offerProposalReceived` | (`event`: \{ `offerProposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)  }) => `void` | - |
| `offerCounterProposalSent` | (`event`: \{ `offerProposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) ; `counterProposal`: [`OfferCounterProposal`](../classes/market_proposal_offer_counter_proposal.OfferCounterProposal)  }) => `void` | - |
| `errorSendingCounterProposal` | (`event`: \{ `offerProposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) ; `error`: `Error`  }) => `void` | - |
| `offerCounterProposalRejected` | (`event`: \{ `counterProposal`: [`OfferCounterProposal`](../classes/market_proposal_offer_counter_proposal.OfferCounterProposal) ; `reason`: `string`  }) => `void` | - |
| `offerPropertyQueryReceived` | () => `void` | - |
| `offerProposalRejectedByProposalFilter` | (`event`: \{ `offerProposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) ; `reason?`: `string`  }) => `void` | - |
| `offerProposalRejectedByPriceFilter` | (`event`: \{ `offerProposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) ; `reason?`: `string`  }) => `void` | - |
| `agreementApproved` | (`event`: \{ `agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement)  }) => `void` | - |
| `agreementRejected` | (`event`: \{ `agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement) ; `reason`: `string`  }) => `void` | - |
| `agreementTerminated` | (`event`: \{ `agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement) ; `reason`: `string` ; `terminatedBy`: ``"Provider"`` \| ``"Requestor"``  }) => `void` | - |
| `agreementCancelled` | (`event`: \{ `agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement)  }) => `void` | - |

#### Defined in

[src/market/api.ts:8](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/api.ts#L8)
