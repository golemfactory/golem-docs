---
title: "Class ProposalRepository"
pageTitle: "Class ProposalRepository - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ProposalRepository within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ProposalRepository

[shared/yagna/repository/proposal-repository](../modules/shared_yagna_repository_proposal_repository).ProposalRepository

## Implements

- [`IProposalRepository`](../interfaces/market_proposal_market_proposal.IProposalRepository)

## Table of contents

### Constructors

- [constructor](shared_yagna_repository_proposal_repository.ProposalRepository#constructor)

### Methods

- [add](shared_yagna_repository_proposal_repository.ProposalRepository#add)
- [getById](shared_yagna_repository_proposal_repository.ProposalRepository#getbyid)
- [getByDemandAndId](shared_yagna_repository_proposal_repository.ProposalRepository#getbydemandandid)

## Constructors

### constructor

• **new ProposalRepository**(`marketService`, `identityService`, `cache`): [`ProposalRepository`](shared_yagna_repository_proposal_repository.ProposalRepository)

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketService` | `RequestorService` |
| `identityService` | `DefaultService` |
| `cache` | [`CacheService`](shared_cache_CacheService.CacheService)\<[`MarketProposal`](market_proposal_market_proposal.MarketProposal)\> |

#### Returns

[`ProposalRepository`](shared_yagna_repository_proposal_repository.ProposalRepository)

#### Defined in

[src/shared/yagna/repository/proposal-repository.ts:9](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/proposal-repository.ts#L9)

## Methods

### add

▸ **add**(`proposal`): [`MarketProposal`](market_proposal_market_proposal.MarketProposal)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`MarketProposal`](market_proposal_market_proposal.MarketProposal) |

#### Returns

[`MarketProposal`](market_proposal_market_proposal.MarketProposal)

#### Implementation of

[IProposalRepository](../interfaces/market_proposal_market_proposal.IProposalRepository).[add](../interfaces/market_proposal_market_proposal.IProposalRepository#add)

#### Defined in

[src/shared/yagna/repository/proposal-repository.ts:15](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/proposal-repository.ts#L15)

___

### getById

▸ **getById**(`id`): `undefined` \| [`MarketProposal`](market_proposal_market_proposal.MarketProposal)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`MarketProposal`](market_proposal_market_proposal.MarketProposal)

#### Implementation of

[IProposalRepository](../interfaces/market_proposal_market_proposal.IProposalRepository).[getById](../interfaces/market_proposal_market_proposal.IProposalRepository#getbyid)

#### Defined in

[src/shared/yagna/repository/proposal-repository.ts:20](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/proposal-repository.ts#L20)

___

### getByDemandAndId

▸ **getByDemandAndId**(`demand`, `id`): `Promise`\<[`MarketProposal`](market_proposal_market_proposal.MarketProposal)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | [`Demand`](market_demand_demand.Demand) |
| `id` | `string` |

#### Returns

`Promise`\<[`MarketProposal`](market_proposal_market_proposal.MarketProposal)\>

#### Implementation of

[IProposalRepository](../interfaces/market_proposal_market_proposal.IProposalRepository).[getByDemandAndId](../interfaces/market_proposal_market_proposal.IProposalRepository#getbydemandandid)

#### Defined in

[src/shared/yagna/repository/proposal-repository.ts:24](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/proposal-repository.ts#L24)
