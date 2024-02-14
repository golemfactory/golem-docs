---
title: "Class InvoiceReceived"
pageTitle: "Class InvoiceReceived - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class InvoiceReceived within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: InvoiceReceived

[events/events](../modules/events_events).InvoiceReceived

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `provider`: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) ; `agreementId`: `string` ; `amount`: `number`  }\>

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

• **new InvoiceReceived**(`data`): [`InvoiceReceived`](events_events.InvoiceReceived)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.provider` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `data.agreementId` | `string` |
| `data.amount` | `number` |

#### Returns

[`InvoiceReceived`](events_events.InvoiceReceived)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:29](https://github.com/golemfactory/golem-js/blob/22da85c/src/events/events.ts#L29)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `provider` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `agreementId` | `string` |
| `amount` | `number` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/22da85c/src/events/events.ts#L17)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/22da85c/src/events/events.ts#L18)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:19](https://github.com/golemfactory/golem-js/blob/22da85c/src/events/events.ts#L19)
