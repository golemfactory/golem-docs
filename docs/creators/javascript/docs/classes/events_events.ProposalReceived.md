# Class: ProposalReceived

[events/events](../modules/events_events.md).ProposalReceived

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent.md)<{ `id`: `string` ; `providerId`: `string` ; `parentId`: `string` \| ``null`` ; `details`: [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails.md)  }\>

  ↳ **`ProposalReceived`**

## Table of contents

### Constructors

- [constructor](events_events.ProposalReceived.md#constructor)

### Properties

- [detail](events_events.ProposalReceived.md#detail)
- [name](events_events.ProposalReceived.md#name)
- [timestamp](events_events.ProposalReceived.md#timestamp)

## Constructors

### constructor

• **new ProposalReceived**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.providerId` | `string` |
| `data.parentId` | ``null`` \| `string` |
| `data.details` | [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails.md) |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[constructor](events_events.BaseEvent.md#constructor)

#### Defined in

[yajsapi/events/events.ts:28](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `providerId` | `string` |
| `parentId` | ``null`` \| `string` |
| `details` | [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails.md) |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[detail](events_events.BaseEvent.md#detail)

#### Defined in

[yajsapi/events/events.ts:16](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[name](events_events.BaseEvent.md#name)

#### Defined in

[yajsapi/events/events.ts:17](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[timestamp](events_events.BaseEvent.md#timestamp)

#### Defined in

[yajsapi/events/events.ts:18](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/events/events.ts#L18)
