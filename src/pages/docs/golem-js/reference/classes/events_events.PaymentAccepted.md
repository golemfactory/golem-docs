---
title: "Class PaymentAccepted - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class PaymentAccepted within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: PaymentAccepted

[events/events](../modules/events_events).PaymentAccepted

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `providerId`: `string` ; `agreementId`: `string` ; `amount`: `string`  }\>

  ↳ **`PaymentAccepted`**

## Table of contents

### Constructors

- [constructor](events_events.PaymentAccepted#constructor)

### Properties

- [detail](events_events.PaymentAccepted#detail)
- [name](events_events.PaymentAccepted#name)
- [timestamp](events_events.PaymentAccepted#timestamp)

## Constructors

### constructor

• **new PaymentAccepted**(`data?`): [`PaymentAccepted`](events_events.PaymentAccepted)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.providerId` | `string` |
| `data.agreementId` | `string` |
| `data.amount` | `string` |

#### Returns

[`PaymentAccepted`](events_events.PaymentAccepted)

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
| `providerId` | `string` |
| `agreementId` | `string` |
| `amount` | `string` |

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
