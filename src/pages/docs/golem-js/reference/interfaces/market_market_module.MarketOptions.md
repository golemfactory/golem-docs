---
title: "Interface MarketOptions"
pageTitle: "Interface MarketOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface MarketOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: MarketOptions

[market/market.module](../modules/market_market_module).MarketOptions

## Table of contents

### Properties

- [rentHours](market_market_module.MarketOptions#renthours)
- [pricing](market_market_module.MarketOptions#pricing)
- [proposalFilter](market_market_module.MarketOptions#proposalfilter)
- [proposalSelector](market_market_module.MarketOptions#proposalselector)

## Properties

### rentHours

• **rentHours**: `number`

How long you want to rent the resources in hours

#### Defined in

[src/market/market.module.ts:61](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L61)

___

### pricing

• **pricing**: [`PricingOptions`](../modules/market_market_module#pricingoptions)

Pricing strategy that will be used to filter the offers from the market

#### Defined in

[src/market/market.module.ts:64](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L64)

___

### proposalFilter

• `Optional` **proposalFilter**: [`ProposalFilter`](../modules/market_proposal_offer_proposal#proposalfilter)

A user-defined filter function which will determine if the proposal is valid for use.

#### Defined in

[src/market/market.module.ts:67](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L67)

___

### proposalSelector

• `Optional` **proposalSelector**: [`ProposalSelector`](../modules/market_draft_offer_proposal_pool#proposalselector)

A user-defined function that will be used to pick the best fitting proposal from available ones

#### Defined in

[src/market/market.module.ts:70](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/market.module.ts#L70)
