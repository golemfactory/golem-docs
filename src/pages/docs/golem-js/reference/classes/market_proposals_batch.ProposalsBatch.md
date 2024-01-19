---
title: "Class ProposalsBatch"
pageTitle: "Class ProposalsBatch - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ProposalsBatch within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ProposalsBatch

[market/proposals\_batch](../modules/market_proposals_batch).ProposalsBatch

Proposals Batch aggregates initial proposals and returns a set grouped by the provider's key
to avoid duplicate offers issued by the provider.

## Table of contents

### Constructors

- [constructor](market_proposals_batch.ProposalsBatch#constructor)

### Methods

- [addProposal](market_proposals_batch.ProposalsBatch#addproposal)
- [readProposals](market_proposals_batch.ProposalsBatch#readproposals)

## Constructors

### constructor

• **new ProposalsBatch**(`options?`): [`ProposalsBatch`](market_proposals_batch.ProposalsBatch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ProposalsBatchOptions`](../modules/market_proposals_batch#proposalsbatchoptions) |

#### Returns

[`ProposalsBatch`](market_proposals_batch.ProposalsBatch)

#### Defined in

[src/market/proposals_batch.ts:27](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposals_batch.ts#L27)

## Methods

### addProposal

▸ **addProposal**(`proposal`): `Promise`\<`void`\>

Add proposal to the batch grouped by provider key
which consist of providerId, cores, threads, mem and storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`Proposal`](market_proposal.Proposal) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/market/proposals_batch.ts:38](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposals_batch.ts#L38)

___

### readProposals

▸ **readProposals**(): `AsyncGenerator`\<[`Proposal`](market_proposal.Proposal)[], `any`, `unknown`\>

Generates a set of proposals that were collected within the specified `releaseTimeoutMs`
or their size reached the `minBatchSize` value

#### Returns

`AsyncGenerator`\<[`Proposal`](market_proposal.Proposal)[], `any`, `unknown`\>

#### Defined in

[src/market/proposals_batch.ts:54](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposals_batch.ts#L54)
