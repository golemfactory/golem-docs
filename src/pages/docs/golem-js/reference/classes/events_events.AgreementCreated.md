---
title: "Class AgreementCreated - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class AgreementCreated within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: AgreementCreated

[events/events](../modules/events_events).AgreementCreated

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `providerId`: `string` ; `providerName`: `string` ; `proposalId`: `string` ; `validTo?`: `string`  }\>

  ↳ **`AgreementCreated`**

## Table of contents

### Constructors

- [constructor](events_events.AgreementCreated#constructor)

### Properties

- [detail](events_events.AgreementCreated#detail)
- [name](events_events.AgreementCreated#name)
- [timestamp](events_events.AgreementCreated#timestamp)

## Constructors

### constructor

• **new AgreementCreated**(`data?`): [`AgreementCreated`](events_events.AgreementCreated)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.providerId` | `string` |
| `data.providerName` | `string` |
| `data.proposalId` | `string` |
| `data.validTo?` | `string` |

#### Returns

[`AgreementCreated`](events_events.AgreementCreated)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/8f6d57f/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `providerId` | `string` |
| `providerName` | `string` |
| `proposalId` | `string` |
| `validTo?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/8f6d57f/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/8f6d57f/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/8f6d57f/src/events/events.ts#L18)
