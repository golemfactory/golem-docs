---
title: "Class DemandFailed"
pageTitle: "Class DemandFailed - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DemandFailed within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: DemandFailed

[events/events](../modules/events_events).DemandFailed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `reason?`: `string`  }\>

  ↳ **`DemandFailed`**

## Table of contents

### Constructors

- [constructor](events_events.DemandFailed#constructor)

### Properties

- [detail](events_events.DemandFailed#detail)
- [name](events_events.DemandFailed#name)
- [timestamp](events_events.DemandFailed#timestamp)

## Constructors

### constructor

• **new DemandFailed**(`data`): [`DemandFailed`](events_events.DemandFailed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.reason?` | `string` |

#### Returns

[`DemandFailed`](events_events.DemandFailed)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:29](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/events/events.ts#L29)

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

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/events/events.ts#L17)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/events/events.ts#L18)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:19](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/events/events.ts#L19)
