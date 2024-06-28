---
title: "Class PaymentFailed"
pageTitle: "Class PaymentFailed - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class PaymentFailed within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: PaymentFailed

[events/events](../modules/events_events).PaymentFailed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `agreementId`: `string` ; `reason?`: `string`  }\>

  ↳ **`PaymentFailed`**

## Table of contents

### Constructors

- [constructor](events_events.PaymentFailed#constructor)

### Properties

- [detail](events_events.PaymentFailed#detail)
- [name](events_events.PaymentFailed#name)
- [timestamp](events_events.PaymentFailed#timestamp)

## Constructors

### constructor

• **new PaymentFailed**(`data`): [`PaymentFailed`](events_events.PaymentFailed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.agreementId` | `string` |
| `data.reason?` | `string` |

#### Returns

[`PaymentFailed`](events_events.PaymentFailed)

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
| `agreementId` | `string` |
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
