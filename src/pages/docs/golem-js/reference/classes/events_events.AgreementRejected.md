---
title: "Class AgreementRejected"
pageTitle: "Class AgreementRejected - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class AgreementRejected within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: AgreementRejected

[events/events](../modules/events_events).AgreementRejected

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `provider`: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) ; `reason?`: `string`  }\>

  ↳ **`AgreementRejected`**

## Table of contents

### Constructors

- [constructor](events_events.AgreementRejected#constructor)

### Properties

- [detail](events_events.AgreementRejected#detail)
- [name](events_events.AgreementRejected#name)
- [timestamp](events_events.AgreementRejected#timestamp)

## Constructors

### constructor

• **new AgreementRejected**(`data`): [`AgreementRejected`](events_events.AgreementRejected)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.provider` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `data.reason?` | `string` |

#### Returns

[`AgreementRejected`](events_events.AgreementRejected)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:29](https://github.com/golemfactory/golem-js/blob/7cee55b/src/events/events.ts#L29)

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

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/7cee55b/src/events/events.ts#L17)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/7cee55b/src/events/events.ts#L18)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:19](https://github.com/golemfactory/golem-js/blob/7cee55b/src/events/events.ts#L19)
