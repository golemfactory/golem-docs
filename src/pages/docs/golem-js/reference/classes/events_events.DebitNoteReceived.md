---
title: "Class DebitNoteReceived - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DebitNoteReceived within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: DebitNoteReceived

[events/events](../modules/events_events).DebitNoteReceived

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)<{ `id`: `string` ; `agreementId`: `string` ; `activityId`: `string` ; `amount`: `string`  }\>

  ↳ **`DebitNoteReceived`**

## Table of contents

### Constructors

- [constructor](events_events.DebitNoteReceived#constructor)

### Properties

- [detail](events_events.DebitNoteReceived#detail)
- [name](events_events.DebitNoteReceived#name)
- [timestamp](events_events.DebitNoteReceived#timestamp)

## Constructors

### constructor

• **new DebitNoteReceived**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.agreementId` | `string` |
| `data.activityId` | `string` |
| `data.amount` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/72269cc/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `agreementId` | `string` |
| `activityId` | `string` |
| `amount` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/72269cc/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/72269cc/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/72269cc/src/events/events.ts#L18)
