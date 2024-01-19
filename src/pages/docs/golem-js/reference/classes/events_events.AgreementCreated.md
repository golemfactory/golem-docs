---
title: "Class AgreementCreated"
pageTitle: "Class AgreementCreated - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class AgreementCreated within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: AgreementCreated

[events/events](../modules/events_events).AgreementCreated

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `provider`: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) ; `proposalId`: `string` ; `validTo?`: `string`  }\>

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

• **new AgreementCreated**(`data`): [`AgreementCreated`](events_events.AgreementCreated)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.provider` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `data.proposalId` | `string` |
| `data.validTo?` | `string` |

#### Returns

[`AgreementCreated`](events_events.AgreementCreated)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:29](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/events/events.ts#L29)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `provider` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `proposalId` | `string` |
| `validTo?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/events/events.ts#L17)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/events/events.ts#L18)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:19](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/events/events.ts#L19)
