---
title: "Class AgreementTerminated"
pageTitle: "Class AgreementTerminated - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class AgreementTerminated within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: AgreementTerminated

[events/events](../modules/events_events).AgreementTerminated

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `provider`: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) ; `reason?`: `string`  }\>

  ↳ **`AgreementTerminated`**

## Table of contents

### Constructors

- [constructor](events_events.AgreementTerminated#constructor)

### Properties

- [detail](events_events.AgreementTerminated#detail)
- [name](events_events.AgreementTerminated#name)
- [timestamp](events_events.AgreementTerminated#timestamp)

## Constructors

### constructor

• **new AgreementTerminated**(`data`): [`AgreementTerminated`](events_events.AgreementTerminated)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.provider` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `data.reason?` | `string` |

#### Returns

[`AgreementTerminated`](events_events.AgreementTerminated)

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
| `provider` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
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
