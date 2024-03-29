---
title: "Class ComputationFailed"
pageTitle: "Class ComputationFailed - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ComputationFailed within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ComputationFailed

[events/events](../modules/events_events).ComputationFailed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `reason?`: `string`  }\>

  ↳ **`ComputationFailed`**

## Table of contents

### Constructors

- [constructor](events_events.ComputationFailed#constructor)

### Properties

- [detail](events_events.ComputationFailed#detail)
- [name](events_events.ComputationFailed#name)
- [timestamp](events_events.ComputationFailed#timestamp)

## Constructors

### constructor

• **new ComputationFailed**(`data`): [`ComputationFailed`](events_events.ComputationFailed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.reason?` | `string` |

#### Returns

[`ComputationFailed`](events_events.ComputationFailed)

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
| `reason?` | `string` |

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
