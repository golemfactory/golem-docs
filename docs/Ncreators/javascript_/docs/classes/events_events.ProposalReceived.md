# Class: ProposalReceived

[events/events](../modules/events_events.md).ProposalReceived

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent.md)<{ `id`: `string` ; `providerId`: `string`  }\>

  ↳ **`ProposalReceived`**

## Table of contents

### Constructors

- [constructor](events_events.ProposalReceived.md#constructor)

### Properties

- [detail](events_events.ProposalReceived.md#detail)

## Constructors

### constructor

• **new ProposalReceived**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.providerId` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[constructor](events_events.BaseEvent.md#constructor)

#### Defined in

[yajsapi/events/events.ts:19](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/events/events.ts#L19)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `providerId` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[detail](events_events.BaseEvent.md#detail)

#### Defined in

[yajsapi/events/events.ts:11](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/events/events.ts#L11)
