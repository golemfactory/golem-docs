---
title: "Interface IProposalRepository"
pageTitle: "Interface IProposalRepository - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface IProposalRepository within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: IProposalRepository

[market/proposal/market-proposal](../modules/market_proposal_market_proposal).IProposalRepository

## Implemented by

- [`ProposalRepository`](../classes/shared_yagna_repository_proposal_repository.ProposalRepository)

## Table of contents

### Methods

- [add](market_proposal_market_proposal.IProposalRepository#add)
- [getById](market_proposal_market_proposal.IProposalRepository#getbyid)
- [getByDemandAndId](market_proposal_market_proposal.IProposalRepository#getbydemandandid)

## Methods

### add

▸ **add**(`proposal`): [`MarketProposal`](../classes/market_proposal_market_proposal.MarketProposal)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`MarketProposal`](../classes/market_proposal_market_proposal.MarketProposal) |

#### Returns

[`MarketProposal`](../classes/market_proposal_market_proposal.MarketProposal)

#### Defined in

[src/market/proposal/market-proposal.ts:7](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L7)

___

### getById

▸ **getById**(`id`): `undefined` \| [`MarketProposal`](../classes/market_proposal_market_proposal.MarketProposal)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`MarketProposal`](../classes/market_proposal_market_proposal.MarketProposal)

#### Defined in

[src/market/proposal/market-proposal.ts:9](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L9)

___

### getByDemandAndId

▸ **getByDemandAndId**(`demand`, `id`): `Promise`\<[`MarketProposal`](../classes/market_proposal_market_proposal.MarketProposal)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | [`Demand`](../classes/market_demand_demand.Demand) |
| `id` | `string` |

#### Returns

`Promise`\<[`MarketProposal`](../classes/market_proposal_market_proposal.MarketProposal)\>

#### Defined in

[src/market/proposal/market-proposal.ts:11](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/proposal/market-proposal.ts#L11)
