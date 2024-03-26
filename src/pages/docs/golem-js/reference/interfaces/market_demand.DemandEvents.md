---
title: "Interface DemandEvents"
pageTitle: "Interface DemandEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface DemandEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: DemandEvents

[market/demand](../modules/market_demand).DemandEvents

## Table of contents

### Properties

- [proposalReceived](market_demand.DemandEvents#proposalreceived)
- [proposalReceivedError](market_demand.DemandEvents#proposalreceivederror)
- [proposalRejected](market_demand.DemandEvents#proposalrejected)
- [collectFailed](market_demand.DemandEvents#collectfailed)
- [demandUnsubscribed](market_demand.DemandEvents#demandunsubscribed)

## Properties

### proposalReceived

• **proposalReceived**: (`proposal`: [`Proposal`](../classes/market_proposal.Proposal)) => `void`

#### Type declaration

▸ (`proposal`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`Proposal`](../classes/market_proposal.Proposal) |

##### Returns

`void`

#### Defined in

[src/market/demand.ts:13](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/demand.ts#L13)

___

### proposalReceivedError

• **proposalReceivedError**: (`error`: [`GolemError`](../classes/error_golem_error.GolemError)) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`GolemError`](../classes/error_golem_error.GolemError) |

##### Returns

`void`

#### Defined in

[src/market/demand.ts:14](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/demand.ts#L14)

___

### proposalRejected

• **proposalRejected**: (`details`: \{ `id`: `string` ; `parentId`: ``null`` \| `string` ; `reason`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.parentId` | ``null`` \| `string` |
| `details.reason` | `string` |

##### Returns

`void`

#### Defined in

[src/market/demand.ts:15](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/demand.ts#L15)

___

### collectFailed

• **collectFailed**: (`details`: \{ `id`: `string` ; `reason`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.reason` | `string` |

##### Returns

`void`

#### Defined in

[src/market/demand.ts:16](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/demand.ts#L16)

___

### demandUnsubscribed

• **demandUnsubscribed**: (`details`: \{ `id`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |

##### Returns

`void`

#### Defined in

[src/market/demand.ts:17](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/demand.ts#L17)
