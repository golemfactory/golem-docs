---
title: "Interface ProposalPoolEvents"
pageTitle: "Interface ProposalPoolEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ProposalPoolEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ProposalPoolEvents

[market/draft-offer-proposal-pool](../modules/market_draft_offer_proposal_pool).ProposalPoolEvents

## Table of contents

### Properties

- [added](market_draft_offer_proposal_pool.ProposalPoolEvents#added)
- [removed](market_draft_offer_proposal_pool.ProposalPoolEvents#removed)
- [acquired](market_draft_offer_proposal_pool.ProposalPoolEvents#acquired)
- [released](market_draft_offer_proposal_pool.ProposalPoolEvents#released)
- [cleared](market_draft_offer_proposal_pool.ProposalPoolEvents#cleared)

## Properties

### added

• **added**: (`event`: \{ `proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`void`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:35](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/draft-offer-proposal-pool.ts#L35)

___

### removed

• **removed**: (`event`: \{ `proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`void`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:36](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/draft-offer-proposal-pool.ts#L36)

___

### acquired

• **acquired**: (`event`: \{ `proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`void`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:37](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/draft-offer-proposal-pool.ts#L37)

___

### released

• **released**: (`event`: \{ `proposal`: [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.proposal` | [`OfferProposal`](../classes/market_proposal_offer_proposal.OfferProposal) |

##### Returns

`void`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:38](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/draft-offer-proposal-pool.ts#L38)

___

### cleared

• **cleared**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/market/draft-offer-proposal-pool.ts:39](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/draft-offer-proposal-pool.ts#L39)
