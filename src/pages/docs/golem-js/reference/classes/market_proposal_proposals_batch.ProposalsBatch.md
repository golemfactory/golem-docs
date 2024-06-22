---
title: "Class ProposalsBatch"
pageTitle: "Class ProposalsBatch - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ProposalsBatch within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ProposalsBatch

[market/proposal/proposals\_batch](../modules/market_proposal_proposals_batch).ProposalsBatch

Proposals Batch aggregates initial proposals and returns a set grouped by the provider's key
to avoid duplicate offers issued by the provider.

## Table of contents

### Constructors

- [constructor](market_proposal_proposals_batch.ProposalsBatch#constructor)

### Methods

- [addProposal](market_proposal_proposals_batch.ProposalsBatch#addproposal)
- [getProposals](market_proposal_proposals_batch.ProposalsBatch#getproposals)
- [waitForProposals](market_proposal_proposals_batch.ProposalsBatch#waitforproposals)

## Constructors

### constructor

• **new ProposalsBatch**(`options?`): [`ProposalsBatch`](market_proposal_proposals_batch.ProposalsBatch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ProposalsBatchOptions`](../modules/market_proposal_proposals_batch#proposalsbatchoptions) |

#### Returns

[`ProposalsBatch`](market_proposal_proposals_batch.ProposalsBatch)

#### Defined in

[src/market/proposal/proposals_batch.ts:27](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposals_batch.ts#L27)

## Methods

### addProposal

▸ **addProposal**(`proposal`): `Promise`\<`void`\>

Add proposal to the batch grouped by provider key
which consist of providerId, cores, threads, mem and storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/market/proposal/proposals_batch.ts:38](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposals_batch.ts#L38)

___

### getProposals

▸ **getProposals**(): `Promise`\<[`OfferProposal`](market_proposal_offer_proposal.OfferProposal)[]\>

Returns the batched proposals from the internal buffer and empties it

#### Returns

`Promise`\<[`OfferProposal`](market_proposal_offer_proposal.OfferProposal)[]\>

#### Defined in

[src/market/proposal/proposals_batch.ts:53](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposals_batch.ts#L53)

___

### waitForProposals

▸ **waitForProposals**(): `Promise`\<`void`\>

Waits for the max amount time for batching or max batch size to be reached before it makes sense to process events

Used to flow-control the consumption of the proposal events from the batch.
The returned promise resolves when it is time to process the buffered proposal events.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/market/proposal/proposals_batch.ts:70](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposals_batch.ts#L70)
