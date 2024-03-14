---
title: "Class ProposalConfirmed"
pageTitle: "Class ProposalConfirmed - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ProposalConfirmed within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ProposalConfirmed

[events/events](../modules/events_events).ProposalConfirmed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `provider`: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)  }\>

  ↳ **`ProposalConfirmed`**

## Table of contents

### Constructors

- [constructor](events_events.ProposalConfirmed#constructor)

### Properties

- [detail](events_events.ProposalConfirmed#detail)
- [name](events_events.ProposalConfirmed#name)
- [timestamp](events_events.ProposalConfirmed#timestamp)

## Constructors

### constructor

• **new ProposalConfirmed**(`data`): [`ProposalConfirmed`](events_events.ProposalConfirmed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.provider` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |

#### Returns

[`ProposalConfirmed`](events_events.ProposalConfirmed)

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
