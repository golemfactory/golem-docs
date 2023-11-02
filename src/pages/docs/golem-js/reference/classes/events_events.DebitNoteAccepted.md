---
title: "Class DebitNoteAccepted - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DebitNoteAccepted within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: DebitNoteAccepted

[events/events](../modules/events_events).DebitNoteAccepted

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `providerId`: `string` ; `agreementId`: `string` ; `amount`: `string`  }\>

  ↳ **`DebitNoteAccepted`**

## Table of contents

### Constructors

- [constructor](events_events.DebitNoteAccepted#constructor)

### Properties

- [detail](events_events.DebitNoteAccepted#detail)
- [name](events_events.DebitNoteAccepted#name)
- [timestamp](events_events.DebitNoteAccepted#timestamp)

## Constructors

### constructor

• **new DebitNoteAccepted**(`data?`): [`DebitNoteAccepted`](events_events.DebitNoteAccepted)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.providerId` | `string` |
| `data.agreementId` | `string` |
| `data.amount` | `string` |

#### Returns

[`DebitNoteAccepted`](events_events.DebitNoteAccepted)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/552d481/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `providerId` | `string` |
| `agreementId` | `string` |
| `amount` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/552d481/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/552d481/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/552d481/src/events/events.ts#L18)
