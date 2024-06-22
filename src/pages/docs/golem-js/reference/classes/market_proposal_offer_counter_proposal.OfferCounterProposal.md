---
title: "Class OfferCounterProposal"
pageTitle: "Class OfferCounterProposal - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class OfferCounterProposal within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: OfferCounterProposal

[market/proposal/offer-counter-proposal](../modules/market_proposal_offer_counter_proposal).OfferCounterProposal

Base representation of a market proposal that can be issued either by the Provider (offer proposal)
  or Requestor (counter-proposal)

## Hierarchy

- [`MarketProposal`](market_proposal_market_proposal.MarketProposal)

  ↳ **`OfferCounterProposal`**

## Table of contents

### Constructors

- [constructor](market_proposal_offer_counter_proposal.OfferCounterProposal#constructor)

### Properties

- [issuer](market_proposal_offer_counter_proposal.OfferCounterProposal#issuer)
- [id](market_proposal_offer_counter_proposal.OfferCounterProposal#id)
- [previousProposalId](market_proposal_offer_counter_proposal.OfferCounterProposal#previousproposalid)
- [properties](market_proposal_offer_counter_proposal.OfferCounterProposal#properties)
- [model](market_proposal_offer_counter_proposal.OfferCounterProposal#model)

### Accessors

- [state](market_proposal_offer_counter_proposal.OfferCounterProposal#state)
- [timestamp](market_proposal_offer_counter_proposal.OfferCounterProposal#timestamp)

### Methods

- [validate](market_proposal_offer_counter_proposal.OfferCounterProposal#validate)
- [isInitial](market_proposal_offer_counter_proposal.OfferCounterProposal#isinitial)
- [isDraft](market_proposal_offer_counter_proposal.OfferCounterProposal#isdraft)
- [isExpired](market_proposal_offer_counter_proposal.OfferCounterProposal#isexpired)
- [isRejected](market_proposal_offer_counter_proposal.OfferCounterProposal#isrejected)
- [isValid](market_proposal_offer_counter_proposal.OfferCounterProposal#isvalid)

## Constructors

### constructor

• **new OfferCounterProposal**(`model`): [`OfferCounterProposal`](market_proposal_offer_counter_proposal.OfferCounterProposal)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `Proposal` |

#### Returns

[`OfferCounterProposal`](market_proposal_offer_counter_proposal.OfferCounterProposal)

#### Overrides

[MarketProposal](market_proposal_market_proposal.MarketProposal).[constructor](market_proposal_market_proposal.MarketProposal#constructor)

#### Defined in

[src/market/proposal/offer-counter-proposal.ts:7](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/offer-counter-proposal.ts#L7)

## Properties

### issuer

• `Readonly` **issuer**: ``"Requestor"``

#### Overrides

[MarketProposal](market_proposal_market_proposal.MarketProposal).[issuer](market_proposal_market_proposal.MarketProposal#issuer)

#### Defined in

[src/market/proposal/offer-counter-proposal.ts:5](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/offer-counter-proposal.ts#L5)

___

### id

• `Readonly` **id**: `string`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[id](market_proposal_market_proposal.MarketProposal#id)

#### Defined in

[src/market/proposal/market-proposal.ts:19](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L19)

___

### previousProposalId

• `Readonly` **previousProposalId**: ``null`` \| `string` = `null`

Reference to the previous proposal in the "negotiation chain"

If null, this means that was the initial offer that the negotiations started from

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[previousProposalId](market_proposal_market_proposal.MarketProposal#previousproposalid)

#### Defined in

[src/market/proposal/market-proposal.ts:25](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L25)

___

### properties

• `Readonly` **properties**: [`ProposalProperties`](../modules/market_proposal_proposal_properties#proposalproperties)

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[properties](market_proposal_market_proposal.MarketProposal#properties)

#### Defined in

[src/market/proposal/market-proposal.ts:29](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L29)

___

### model

• `Protected` `Readonly` **model**: `Proposal`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[model](market_proposal_market_proposal.MarketProposal#model)

#### Defined in

[src/market/proposal/market-proposal.ts:31](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L31)

## Accessors

### state

• `get` **state**(): [`ProposalState`](../modules/market_proposal_offer_proposal#proposalstate)

#### Returns

[`ProposalState`](../modules/market_proposal_offer_proposal#proposalstate)

#### Inherited from

MarketProposal.state

#### Defined in

[src/market/proposal/market-proposal.ts:37](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L37)

___

### timestamp

• `get` **timestamp**(): `Date`

#### Returns

`Date`

#### Inherited from

MarketProposal.timestamp

#### Defined in

[src/market/proposal/market-proposal.ts:41](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L41)

## Methods

### validate

▸ **validate**(): `void`

#### Returns

`void`

#### Overrides

[MarketProposal](market_proposal_market_proposal.MarketProposal).[validate](market_proposal_market_proposal.MarketProposal#validate)

#### Defined in

[src/market/proposal/offer-counter-proposal.ts:11](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/offer-counter-proposal.ts#L11)

___

### isInitial

▸ **isInitial**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[isInitial](market_proposal_market_proposal.MarketProposal#isinitial)

#### Defined in

[src/market/proposal/market-proposal.ts:45](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L45)

___

### isDraft

▸ **isDraft**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[isDraft](market_proposal_market_proposal.MarketProposal#isdraft)

#### Defined in

[src/market/proposal/market-proposal.ts:49](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L49)

___

### isExpired

▸ **isExpired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[isExpired](market_proposal_market_proposal.MarketProposal#isexpired)

#### Defined in

[src/market/proposal/market-proposal.ts:53](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L53)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[isRejected](market_proposal_market_proposal.MarketProposal#isrejected)

#### Defined in

[src/market/proposal/market-proposal.ts:57](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L57)

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[isValid](market_proposal_market_proposal.MarketProposal#isvalid)

#### Defined in

[src/market/proposal/market-proposal.ts:61](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L61)
