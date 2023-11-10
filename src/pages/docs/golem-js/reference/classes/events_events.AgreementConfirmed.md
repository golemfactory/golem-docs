---
title: "Class AgreementConfirmed - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class AgreementConfirmed within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: AgreementConfirmed

[events/events](../modules/events_events).AgreementConfirmed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `providerId`: `string`  }\>

  ↳ **`AgreementConfirmed`**

## Table of contents

### Constructors

- [constructor](events_events.AgreementConfirmed#constructor)

### Properties

- [detail](events_events.AgreementConfirmed#detail)
- [name](events_events.AgreementConfirmed#name)
- [timestamp](events_events.AgreementConfirmed#timestamp)

## Constructors

### constructor

• **new AgreementConfirmed**(`data?`): [`AgreementConfirmed`](events_events.AgreementConfirmed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.providerId` | `string` |

#### Returns

[`AgreementConfirmed`](events_events.AgreementConfirmed)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/a3b94ca/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `providerId` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/a3b94ca/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/a3b94ca/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/a3b94ca/src/events/events.ts#L18)
