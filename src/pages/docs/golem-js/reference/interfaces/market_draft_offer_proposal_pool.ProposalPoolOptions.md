---
title: "Interface ProposalPoolOptions"
pageTitle: "Interface ProposalPoolOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ProposalPoolOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ProposalPoolOptions

[market/draft-offer-proposal-pool](../modules/market_draft_offer_proposal_pool).ProposalPoolOptions

## Table of contents

### Properties

- [selectProposal](market_draft_offer_proposal_pool.ProposalPoolOptions#selectproposal)
- [validateProposal](market_draft_offer_proposal_pool.ProposalPoolOptions#validateproposal)
- [minCount](market_draft_offer_proposal_pool.ProposalPoolOptions#mincount)
- [logger](market_draft_offer_proposal_pool.ProposalPoolOptions#logger)

## Properties

### selectProposal

• `Optional` **selectProposal**: [`ProposalSelector`](../modules/market_draft_offer_proposal_pool#proposalselector)

A user-defined function that will be used by [DraftOfferProposalPool.acquire](../classes/market_draft_offer_proposal_pool.DraftOfferProposalPool#acquire) to pick the best fitting proposal from available ones

#### Defined in

[src/market/draft-offer-proposal-pool.ts:15](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L15)

___

### validateProposal

• `Optional` **validateProposal**: [`ProposalFilter`](../modules/market_proposal_offer_proposal#proposalfilter)

User defined filter function which will determine if the proposal is valid for use.

Proposals are validated before being handled to the caller of [DraftOfferProposalPool.acquire](../classes/market_draft_offer_proposal_pool.DraftOfferProposalPool#acquire)

#### Defined in

[src/market/draft-offer-proposal-pool.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L22)

___

### minCount

• `Optional` **minCount**: `number`

Min number of proposals in pool so that it can be considered as ready to use

**`Default`**

```ts
0
```

#### Defined in

[src/market/draft-offer-proposal-pool.ts:29](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L29)

___

### logger

• `Optional` **logger**: [`Logger`](shared_utils_logger_logger.Logger)

#### Defined in

[src/market/draft-offer-proposal-pool.ts:31](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/draft-offer-proposal-pool.ts#L31)
