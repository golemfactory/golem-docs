# Class: TaskFinished

[events/events](../modules/events_events).TaskFinished

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)<{ `id`: `string`  }\>

  ↳ **`TaskFinished`**

## Table of contents

### Constructors

- [constructor](events_events.TaskFinished#constructor)

### Properties

- [detail](events_events.TaskFinished#detail)
- [name](events_events.TaskFinished#name)
- [timestamp](events_events.TaskFinished#timestamp)

## Constructors

### constructor

• **new TaskFinished**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/yajsapi/blob/7987f19/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/yajsapi/blob/7987f19/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/yajsapi/blob/7987f19/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/yajsapi/blob/7987f19/src/events/events.ts#L18)
