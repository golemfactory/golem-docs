---
title: "Class TaskFinished"
pageTitle: "Class TaskFinished - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class TaskFinished within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: TaskFinished

[events/events](../modules/events_events).TaskFinished

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string`  }\>

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

• **new TaskFinished**(`data?`): [`TaskFinished`](events_events.TaskFinished)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |

#### Returns

[`TaskFinished`](events_events.TaskFinished)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/c827e77/src/events/events.ts#L28)

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

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/c827e77/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/c827e77/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/c827e77/src/events/events.ts#L18)
