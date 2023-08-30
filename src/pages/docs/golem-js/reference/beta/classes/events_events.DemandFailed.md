# Class: DemandFailed

[events/events](../modules/events_events.md).DemandFailed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent.md)<{ `reason?`: `string`  }\>

  ↳ **`DemandFailed`**

## Table of contents

### Constructors

- [constructor](events_events.DemandFailed.md#constructor)

### Properties

- [detail](events_events.DemandFailed.md#detail)
- [name](events_events.DemandFailed.md#name)
- [timestamp](events_events.DemandFailed.md#timestamp)

## Constructors

### constructor

• **new DemandFailed**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.reason?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[constructor](events_events.BaseEvent.md#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L28)

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

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[name](events_events.BaseEvent.md#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[timestamp](events_events.BaseEvent.md#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L18)
