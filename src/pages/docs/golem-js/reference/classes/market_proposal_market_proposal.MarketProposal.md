---
title: "Class MarketProposal"
pageTitle: "Class MarketProposal - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class MarketProposal within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: MarketProposal

[market/proposal/market-proposal](../modules/market_proposal_market_proposal).MarketProposal

Base representation of a market proposal that can be issued either by the Provider (offer proposal)
  or Requestor (counter-proposal)

## Hierarchy

- **`MarketProposal`**

  ↳ [`OfferCounterProposal`](market_proposal_offer_counter_proposal.OfferCounterProposal)

  ↳ [`OfferProposal`](market_proposal_offer_proposal.OfferProposal)

## Table of contents

### Constructors

- [constructor](market_proposal_market_proposal.MarketProposal#constructor)

### Properties

- [id](market_proposal_market_proposal.MarketProposal#id)
- [previousProposalId](market_proposal_market_proposal.MarketProposal#previousproposalid)
- [issuer](market_proposal_market_proposal.MarketProposal#issuer)
- [properties](market_proposal_market_proposal.MarketProposal#properties)
- [model](market_proposal_market_proposal.MarketProposal#model)

### Accessors

- [state](market_proposal_market_proposal.MarketProposal#state)
- [timestamp](market_proposal_market_proposal.MarketProposal#timestamp)

### Methods

- [isInitial](market_proposal_market_proposal.MarketProposal#isinitial)
- [isDraft](market_proposal_market_proposal.MarketProposal#isdraft)
- [isExpired](market_proposal_market_proposal.MarketProposal#isexpired)
- [isRejected](market_proposal_market_proposal.MarketProposal#isrejected)
- [isValid](market_proposal_market_proposal.MarketProposal#isvalid)
- [validate](market_proposal_market_proposal.MarketProposal#validate)

## Constructors

### constructor

• **new MarketProposal**(`model`): [`MarketProposal`](market_proposal_market_proposal.MarketProposal)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `Proposal` |

#### Returns

[`MarketProposal`](market_proposal_market_proposal.MarketProposal)

#### Defined in

[src/market/proposal/market-proposal.ts:31](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L31)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/market/proposal/market-proposal.ts:19](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L19)

___

### previousProposalId

• `Readonly` **previousProposalId**: ``null`` \| `string` = `null`

Reference to the previous proposal in the "negotiation chain"

If null, this means that was the initial offer that the negotiations started from

#### Defined in

[src/market/proposal/market-proposal.ts:25](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L25)

___

### issuer

• `Readonly` `Abstract` **issuer**: ``"Provider"`` \| ``"Requestor"``

#### Defined in

[src/market/proposal/market-proposal.ts:27](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L27)

___

### properties

• `Readonly` **properties**: [`ProposalProperties`](../modules/market_proposal_proposal_properties#proposalproperties)

#### Defined in

[src/market/proposal/market-proposal.ts:29](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L29)

___

### model

• `Protected` `Readonly` **model**: `Proposal`

#### Defined in

[src/market/proposal/market-proposal.ts:31](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L31)

## Accessors

### state

• `get` **state**(): [`ProposalState`](../modules/market_proposal_offer_proposal#proposalstate)

#### Returns

[`ProposalState`](../modules/market_proposal_offer_proposal#proposalstate)

#### Defined in

[src/market/proposal/market-proposal.ts:37](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L37)

___

### timestamp

• `get` **timestamp**(): `Date`

#### Returns

`Date`

#### Defined in

[src/market/proposal/market-proposal.ts:41](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L41)

## Methods

### isInitial

▸ **isInitial**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal/market-proposal.ts:45](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L45)

___

### isDraft

▸ **isDraft**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal/market-proposal.ts:49](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L49)

___

### isExpired

▸ **isExpired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal/market-proposal.ts:53](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L53)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal/market-proposal.ts:57](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L57)

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal/market-proposal.ts:61](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L61)

___

### validate

▸ **validate**(): `void`

#### Returns

`void`

#### Defined in

[src/market/proposal/market-proposal.ts:70](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/market-proposal.ts#L70)
