# Class: SubscriptionFailed

[events/events](../modules/events_events.md).SubscriptionFailed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent.md)<{ `reason?`: `string`  }\>

  ↳ **`SubscriptionFailed`**

## Table of contents

### Constructors

- [constructor](events_events.SubscriptionFailed.md#constructor)

### Properties

- [detail](events_events.SubscriptionFailed.md#detail)

## Constructors

### constructor

• **new SubscriptionFailed**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.reason?` | `string` |

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
| `reason?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[detail](events_events.BaseEvent.md#detail)

#### Defined in

[yajsapi/events/events.ts:11](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/events/events.ts#L11)
