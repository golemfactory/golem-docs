---
title: "Class InvoiceReceived - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class InvoiceReceived within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: InvoiceReceived

[events/events](../modules/events_events).InvoiceReceived

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `providerId`: `string` ; `agreementId`: `string` ; `amount`: `string`  }\>

  ↳ **`InvoiceReceived`**

## Table of contents

### Constructors

- [constructor](events_events.InvoiceReceived#constructor)

### Properties

- [detail](events_events.InvoiceReceived#detail)
- [name](events_events.InvoiceReceived#name)
- [timestamp](events_events.InvoiceReceived#timestamp)

## Constructors

### constructor

• **new InvoiceReceived**(`data?`): [`InvoiceReceived`](events_events.InvoiceReceived)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.providerId` | `string` |
| `data.agreementId` | `string` |
| `data.amount` | `string` |

#### Returns

[`InvoiceReceived`](events_events.InvoiceReceived)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/events/events.ts#L28)

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

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/events/events.ts#L18)
