---
title: "Module market/proposal/offer-proposal"
pageTitle: "Module market/proposal/offer-proposal - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/proposal/offer-proposal within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/proposal/offer-proposal

## Table of contents

### Classes

- [OfferProposal](../classes/market_proposal_offer_proposal.OfferProposal)

### Type Aliases

- [OfferProposalFilter](market_proposal_offer_proposal#offerproposalfilter)
- [PricingInfo](market_proposal_offer_proposal#pricinginfo)
- [ProposalState](market_proposal_offer_proposal#proposalstate)
- [ProposalDTO](market_proposal_offer_proposal#proposaldto)

## Type Aliases

### OfferProposalFilter

Ƭ **OfferProposalFilter**: (`proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)) => `boolean`

#### Type declaration

▸ (`proposal`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`boolean`

#### Defined in

[src/market/proposal/offer-proposal.ts:8](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L8)

___

### PricingInfo

Ƭ **PricingInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cpuSec` | `number` |
| `envSec` | `number` |
| `start` | `number` |

#### Defined in

[src/market/proposal/offer-proposal.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L10)

___

### ProposalState

Ƭ **ProposalState**: ``"Initial"`` \| ``"Draft"`` \| ``"Rejected"`` \| ``"Accepted"`` \| ``"Expired"``

#### Defined in

[src/market/proposal/offer-proposal.ts:16](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L16)

___

### ProposalDTO

Ƭ **ProposalDTO**: `Partial`\<\{ `transferProtocol`: `string`[] ; `cpuBrand`: `string` ; `cpuCapabilities`: `string`[] ; `cpuCores`: `number` ; `cpuThreads`: `number` ; `memory`: `number` ; `storage`: `number` ; `publicNet`: `boolean` ; `runtimeCapabilities`: `string`[] ; `runtimeName`: `string` ; `state`: [`ProposalState`](market_proposal_offer_proposal#proposalstate)  }\>

#### Defined in

[src/market/proposal/offer-proposal.ts:18](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/offer-proposal.ts#L18)
