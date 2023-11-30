---
title: "Class CollectFailed - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class CollectFailed within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: CollectFailed

[events/events](../modules/events_events).CollectFailed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `reason?`: `string`  }\>

  ↳ **`CollectFailed`**

## Table of contents

### Constructors

- [constructor](events_events.CollectFailed#constructor)

### Properties

- [detail](events_events.CollectFailed#detail)
- [name](events_events.CollectFailed#name)
- [timestamp](events_events.CollectFailed#timestamp)

## Constructors

### constructor

• **new CollectFailed**(`data?`): [`CollectFailed`](events_events.CollectFailed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.reason?` | `string` |

#### Returns

[`CollectFailed`](events_events.CollectFailed)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/cd3b295/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `reason?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/cd3b295/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/cd3b295/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/cd3b295/src/events/events.ts#L18)
