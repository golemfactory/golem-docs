---
title: "Interface OrderMarketOptions"
pageTitle: "Interface OrderMarketOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface OrderMarketOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: OrderMarketOptions

[market/market.module](../modules/market_market_module).OrderMarketOptions

## Table of contents

### Properties

- [rentHours](market_market_module.OrderMarketOptions#renthours)
- [pricing](market_market_module.OrderMarketOptions#pricing)
- [offerProposalFilter](market_market_module.OrderMarketOptions#offerproposalfilter)
- [offerProposalSelector](market_market_module.OrderMarketOptions#offerproposalselector)

## Properties

### rentHours

• **rentHours**: `number`

How long you want to rent the resources in hours

#### Defined in

[src/market/market.module.ts:61](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L61)

___

### pricing

• **pricing**: [`PricingOptions`](../modules/market_market_module#pricingoptions)

Pricing strategy that will be used to filter the offers from the market

#### Defined in

[src/market/market.module.ts:64](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L64)

___

### offerProposalFilter

• `Optional` **offerProposalFilter**: [`OfferProposalFilter`](../modules/market_proposal_offer_proposal#offerproposalfilter)

A user-defined filter function which will determine if the offer proposal is valid for use.

#### Defined in

[src/market/market.module.ts:67](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L67)

___

### offerProposalSelector

• `Optional` **offerProposalSelector**: [`OfferProposalSelector`](../modules/market_draft_offer_proposal_pool#offerproposalselector)

A user-defined function that will be used to pick the best fitting offer proposal from available ones

#### Defined in

[src/market/market.module.ts:70](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L70)
