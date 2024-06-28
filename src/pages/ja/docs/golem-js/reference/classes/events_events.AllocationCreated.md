---
title: "Class AllocationCreated"
pageTitle: "Class AllocationCreated - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class AllocationCreated within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: AllocationCreated

[events/events](../modules/events_events).AllocationCreated

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `amount`: `number` ; `platform?`: `string`  }\>

  ↳ **`AllocationCreated`**

## Table of contents

### Constructors

- [constructor](events_events.AllocationCreated#constructor)

### Properties

- [detail](events_events.AllocationCreated#detail)
- [name](events_events.AllocationCreated#name)
- [timestamp](events_events.AllocationCreated#timestamp)

## Constructors

### constructor

• **new AllocationCreated**(`data`): [`AllocationCreated`](events_events.AllocationCreated)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.amount` | `number` |
| `data.platform?` | `string` |

#### Returns

[`AllocationCreated`](events_events.AllocationCreated)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:29](https://github.com/golemfactory/golem-js/blob/4182943/src/events/events.ts#L29)

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

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/4182943/src/events/events.ts#L17)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/4182943/src/events/events.ts#L18)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:19](https://github.com/golemfactory/golem-js/blob/4182943/src/events/events.ts#L19)
