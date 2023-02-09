# Class: SubscriptionCreated

[events/events](../modules/events_events.md).SubscriptionCreated

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent.md)<{ `id`: `string`  }\>

  ↳ **`SubscriptionCreated`**

## Table of contents

### Constructors

- [constructor](events_events.SubscriptionCreated.md#constructor)

### Properties

- [detail](events_events.SubscriptionCreated.md#detail)

## Constructors

### constructor

• **new SubscriptionCreated**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[constructor](events_events.BaseEvent.md#constructor)

#### Defined in

[yajsapi/events/events.ts:19](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/events/events.ts#L19)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[detail](events_events.BaseEvent.md#detail)

#### Defined in

[yajsapi/events/events.ts:11](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/events/events.ts#L11)
