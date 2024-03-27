---
title: "Interface ProposalEvents"
pageTitle: "Interface ProposalEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ProposalEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ProposalEvents

[market/proposal](../modules/market_proposal).ProposalEvents

## Table of contents

### Properties

- [proposalResponded](market_proposal.ProposalEvents#proposalresponded)
- [proposalRejected](market_proposal.ProposalEvents#proposalrejected)
- [proposalFailed](market_proposal.ProposalEvents#proposalfailed)

## Properties

### proposalResponded

• **proposalResponded**: (`details`: \{ `id`: `string` ; `provider`: [`ProviderInfo`](agreement_agreement.ProviderInfo) ; `counteringProposalId`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.provider` | [`ProviderInfo`](agreement_agreement.ProviderInfo) |
| `details.counteringProposalId` | `string` |

##### Returns

`void`

#### Defined in

[src/market/proposal.ts:9](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L9)

___

### proposalRejected

• **proposalRejected**: (`details`: \{ `id`: `string` ; `provider`: [`ProviderInfo`](agreement_agreement.ProviderInfo) ; `parentId`: ``null`` \| `string` ; `reason`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.provider` | [`ProviderInfo`](agreement_agreement.ProviderInfo) |
| `details.parentId` | ``null`` \| `string` |
| `details.reason` | `string` |

##### Returns

`void`

#### Defined in

[src/market/proposal.ts:10](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L10)

___

### proposalFailed

• **proposalFailed**: (`details`: \{ `id`: `string` ; `provider`: [`ProviderInfo`](agreement_agreement.ProviderInfo) ; `parentId`: ``null`` \| `string` ; `reason`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.provider` | [`ProviderInfo`](agreement_agreement.ProviderInfo) |
| `details.parentId` | ``null`` \| `string` |
| `details.reason` | `string` |

##### Returns

`void`

#### Defined in

[src/market/proposal.ts:11](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L11)
