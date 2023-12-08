---
title: "Class ActivityStateChanged"
pageTitle: "Class ActivityStateChanged - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ActivityStateChanged within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ActivityStateChanged

[events/events](../modules/events_events).ActivityStateChanged

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `state`: `string`  }\>

  ↳ **`ActivityStateChanged`**

## Table of contents

### Constructors

- [constructor](events_events.ActivityStateChanged#constructor)

### Properties

- [detail](events_events.ActivityStateChanged#detail)
- [name](events_events.ActivityStateChanged#name)
- [timestamp](events_events.ActivityStateChanged#timestamp)

## Constructors

### constructor

• **new ActivityStateChanged**(`data?`): [`ActivityStateChanged`](events_events.ActivityStateChanged)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.state` | `string` |

#### Returns

[`ActivityStateChanged`](events_events.ActivityStateChanged)

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
| `state` | `string` |

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
