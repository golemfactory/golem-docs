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
- [name](events_events.AllocationCreated.md#name)
- [timestamp](events_events.AllocationCreated.md#timestamp)

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

[yajsapi/events/events.ts:28](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/events/events.ts#L28)

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
