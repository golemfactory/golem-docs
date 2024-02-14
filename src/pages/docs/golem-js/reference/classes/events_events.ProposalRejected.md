---
title: "Class ProposalRejected"
pageTitle: "Class ProposalRejected - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ProposalRejected within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ProposalRejected

[events/events](../modules/events_events).ProposalRejected

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `reason?`: `string` ; `provider?`: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) ; `parentId`: `string` \| ``null``  }\>

  ↳ **`ProposalRejected`**

## Table of contents

### Constructors

- [constructor](events_events.ProposalRejected#constructor)

### Properties

- [detail](events_events.ProposalRejected#detail)
- [name](events_events.ProposalRejected#name)
- [timestamp](events_events.ProposalRejected#timestamp)

## Constructors

### constructor

• **new ProposalRejected**(`data`): [`ProposalRejected`](events_events.ProposalRejected)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.reason?` | `string` |
| `data.provider?` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `data.parentId` | ``null`` \| `string` |

#### Returns

[`ProposalRejected`](events_events.ProposalRejected)

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
| `reason?` | `string` |
| `provider?` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `parentId` | ``null`` \| `string` |

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
