---
title: "Module market/proposal/market-proposal-event"
pageTitle: "Module market/proposal/market-proposal-event - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/proposal/market-proposal-event within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/proposal/market-proposal-event

## Table of contents

### Type Aliases

- [OfferProposalReceivedEvent](market_proposal_market_proposal_event#offerproposalreceivedevent)
- [OfferCounterProposalRejectedEvent](market_proposal_market_proposal_event#offercounterproposalrejectedevent)
- [OfferPropertyQueryReceivedEvent](market_proposal_market_proposal_event#offerpropertyqueryreceivedevent)
- [MarketProposalEvent](market_proposal_market_proposal_event#marketproposalevent)

## Type Aliases

### OfferProposalReceivedEvent

Ƭ **OfferProposalReceivedEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"ProposalReceived"`` |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |
| `timestamp` | `Date` |

#### Defined in

[src/market/proposal/market-proposal-event.ts:4](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal-event.ts#L4)

___

### OfferCounterProposalRejectedEvent

Ƭ **OfferCounterProposalRejectedEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"ProposalRejected"`` |
| `counterProposal` | [`OfferCounterProposal`](../classes/market_proposal_offer_counter_proposal.OfferCounterProposal) |
| `reason` | `string` |
| `timestamp` | `Date` |

#### Defined in

[src/market/proposal/market-proposal-event.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal-event.ts#L10)

___

### OfferPropertyQueryReceivedEvent

Ƭ **OfferPropertyQueryReceivedEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"PropertyQueryReceived"`` |
| `timestamp` | `Date` |

#### Defined in

[src/market/proposal/market-proposal-event.ts:17](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal-event.ts#L17)

___

### MarketProposalEvent

Ƭ **MarketProposalEvent**: [`OfferProposalReceivedEvent`](market_proposal_market_proposal_event#offerproposalreceivedevent) \| [`OfferCounterProposalRejectedEvent`](market_proposal_market_proposal_event#offercounterproposalrejectedevent) \| [`OfferPropertyQueryReceivedEvent`](market_proposal_market_proposal_event#offerpropertyqueryreceivedevent)

#### Defined in

[src/market/proposal/market-proposal-event.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal-event.ts#L22)
