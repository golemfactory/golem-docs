---
title: "Class OfferProposal"
pageTitle: "Class OfferProposal - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class OfferProposal within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: OfferProposal

[market/proposal/offer-proposal](../modules/market_proposal_offer_proposal).OfferProposal

Entity representing the offer presented by the Provider to the Requestor

Issue: The final proposal that gets promoted to an agreement comes from the provider
Right now the last time I can access it directly is when I receive the counter from the provider,
later it's impossible for me to get it via the API `{"message":"Path deserialize error: Id [2cb0b2820c6142fab5af7a8e90da09f0] has invalid owner type."}`

FIXME #yagna should allow obtaining proposals via the API even if I'm not the owner!

## Hierarchy

- [`MarketProposal`](market_proposal_market_proposal.MarketProposal)

  ↳ **`OfferProposal`**

## Table of contents

### Constructors

- [constructor](market_proposal_offer_proposal.OfferProposal#constructor)

### Properties

- [issuer](market_proposal_offer_proposal.OfferProposal#issuer)
- [demand](market_proposal_offer_proposal.OfferProposal#demand)
- [id](market_proposal_offer_proposal.OfferProposal#id)
- [previousProposalId](market_proposal_offer_proposal.OfferProposal#previousproposalid)
- [properties](market_proposal_offer_proposal.OfferProposal#properties)
- [model](market_proposal_offer_proposal.OfferProposal#model)

### Accessors

- [pricing](market_proposal_offer_proposal.OfferProposal#pricing)
- [provider](market_proposal_offer_proposal.OfferProposal#provider)
- [state](market_proposal_offer_proposal.OfferProposal#state)
- [timestamp](market_proposal_offer_proposal.OfferProposal#timestamp)

### Methods

- [getDto](market_proposal_offer_proposal.OfferProposal#getdto)
- [getEstimatedCost](market_proposal_offer_proposal.OfferProposal#getestimatedcost)
- [validate](market_proposal_offer_proposal.OfferProposal#validate)
- [isInitial](market_proposal_offer_proposal.OfferProposal#isinitial)
- [isDraft](market_proposal_offer_proposal.OfferProposal#isdraft)
- [isExpired](market_proposal_offer_proposal.OfferProposal#isexpired)
- [isRejected](market_proposal_offer_proposal.OfferProposal#isrejected)
- [isValid](market_proposal_offer_proposal.OfferProposal#isvalid)

## Constructors

### constructor

• **new OfferProposal**(`model`, `demand`): [`OfferProposal`](market_proposal_offer_proposal.OfferProposal)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `Proposal` |
| `demand` | [`Demand`](market_demand_demand.Demand) |

#### Returns

[`OfferProposal`](market_proposal_offer_proposal.OfferProposal)

#### Overrides

[MarketProposal](market_proposal_market_proposal.MarketProposal).[constructor](market_proposal_market_proposal.MarketProposal#constructor)

#### Defined in

[src/market/proposal/offer-proposal.ts:44](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L44)

## Properties

### issuer

• `Readonly` **issuer**: ``"Provider"``

#### Overrides

[MarketProposal](market_proposal_market_proposal.MarketProposal).[issuer](market_proposal_market_proposal.MarketProposal#issuer)

#### Defined in

[src/market/proposal/offer-proposal.ts:42](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L42)

___

### demand

• `Readonly` **demand**: [`Demand`](market_demand_demand.Demand)

#### Defined in

[src/market/proposal/offer-proposal.ts:46](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L46)

___

### id

• `Readonly` **id**: `string`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[id](market_proposal_market_proposal.MarketProposal#id)

#### Defined in

[src/market/proposal/market-proposal.ts:19](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L19)

___

### previousProposalId

• `Readonly` **previousProposalId**: ``null`` \| `string` = `null`

Reference to the previous proposal in the "negotiation chain"

If null, this means that was the initial offer that the negotiations started from

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[previousProposalId](market_proposal_market_proposal.MarketProposal#previousproposalid)

#### Defined in

[src/market/proposal/market-proposal.ts:25](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L25)

___

### properties

• `Readonly` **properties**: [`ProposalProperties`](../modules/market_proposal_proposal_properties#proposalproperties)

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[properties](market_proposal_market_proposal.MarketProposal#properties)

#### Defined in

[src/market/proposal/market-proposal.ts:29](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L29)

___

### model

• `Protected` `Readonly` **model**: `Proposal`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[model](market_proposal_market_proposal.MarketProposal#model)

#### Defined in

[src/market/proposal/market-proposal.ts:31](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L31)

## Accessors

### pricing

• `get` **pricing**(): [`PricingInfo`](../modules/market_proposal_offer_proposal#pricinginfo)

#### Returns

[`PricingInfo`](../modules/market_proposal_offer_proposal#pricinginfo)

#### Defined in

[src/market/proposal/offer-proposal.ts:53](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L53)

___

### provider

• `get` **provider**(): [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Returns

[`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Defined in

[src/market/proposal/offer-proposal.ts:107](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L107)

___

### state

• `get` **state**(): [`ProposalState`](../modules/market_proposal_offer_proposal#proposalstate)

#### Returns

[`ProposalState`](../modules/market_proposal_offer_proposal#proposalstate)

#### Inherited from

MarketProposal.state

#### Defined in

[src/market/proposal/market-proposal.ts:37](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L37)

___

### timestamp

• `get` **timestamp**(): `Date`

#### Returns

`Date`

#### Inherited from

MarketProposal.timestamp

#### Defined in

[src/market/proposal/market-proposal.ts:41](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L41)

## Methods

### getDto

▸ **getDto**(): `Partial`\<\{ `transferProtocol`: `string`[] ; `cpuBrand`: `string` ; `cpuCapabilities`: `string`[] ; `cpuCores`: `number` ; `cpuThreads`: `number` ; `memory`: `number` ; `storage`: `number` ; `publicNet`: `boolean` ; `runtimeCapabilities`: `string`[] ; `runtimeName`: `string` ; `state`: [`ProposalState`](../modules/market_proposal_offer_proposal#proposalstate)  }\>

#### Returns

`Partial`\<\{ `transferProtocol`: `string`[] ; `cpuBrand`: `string` ; `cpuCapabilities`: `string`[] ; `cpuCores`: `number` ; `cpuThreads`: `number` ; `memory`: `number` ; `storage`: `number` ; `publicNet`: `boolean` ; `runtimeCapabilities`: `string`[] ; `runtimeName`: `string` ; `state`: [`ProposalState`](../modules/market_proposal_offer_proposal#proposalstate)  }\>

#### Defined in

[src/market/proposal/offer-proposal.ts:83](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L83)

___

### getEstimatedCost

▸ **getEstimatedCost**(): `number`

Proposal cost estimation based on CPU, Env and startup costs

#### Returns

`number`

#### Defined in

[src/market/proposal/offer-proposal.ts:102](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L102)

___

### validate

▸ **validate**(): `void`

Validates if the proposal satisfies basic business rules, is complete and thus safe to interact with

Use this method before executing any important logic, to ensure that you're working with correct, complete data

#### Returns

`void`

#### Overrides

[MarketProposal](market_proposal_market_proposal.MarketProposal).[validate](market_proposal_market_proposal.MarketProposal#validate)

#### Defined in

[src/market/proposal/offer-proposal.ts:120](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L120)

___

### isInitial

▸ **isInitial**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[isInitial](market_proposal_market_proposal.MarketProposal#isinitial)

#### Defined in

[src/market/proposal/market-proposal.ts:45](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L45)

___

### isDraft

▸ **isDraft**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[isDraft](market_proposal_market_proposal.MarketProposal#isdraft)

#### Defined in

[src/market/proposal/market-proposal.ts:49](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L49)

___

### isExpired

▸ **isExpired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[isExpired](market_proposal_market_proposal.MarketProposal#isexpired)

#### Defined in

[src/market/proposal/market-proposal.ts:53](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L53)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[isRejected](market_proposal_market_proposal.MarketProposal#isrejected)

#### Defined in

[src/market/proposal/market-proposal.ts:57](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L57)

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MarketProposal](market_proposal_market_proposal.MarketProposal).[isValid](market_proposal_market_proposal.MarketProposal#isvalid)

#### Defined in

[src/market/proposal/market-proposal.ts:61](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L61)
