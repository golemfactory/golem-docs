# Class: AllocationCreated

[events/events](../modules/events_events.md).AllocationCreated

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent.md)<{ `id`: `string` ; `amount`: `number` ; `platform?`: `string`  }\>

  ↳ **`AllocationCreated`**

## Table of contents

### Constructors

- [constructor](events_events.AllocationCreated.md#constructor)

### Properties

- [detail](events_events.AllocationCreated.md#detail)

## Constructors

### constructor

• **new AllocationCreated**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.amount` | `number` |
| `data.platform?` | `string` |

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
| `amount` | `number` |
| `platform?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[detail](events_events.BaseEvent.md#detail)

#### Defined in

[yajsapi/events/events.ts:11](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/events/events.ts#L11)
