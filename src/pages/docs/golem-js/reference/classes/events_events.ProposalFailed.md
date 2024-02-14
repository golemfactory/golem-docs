---
title: "Class ProposalFailed"
pageTitle: "Class ProposalFailed - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ProposalFailed within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ProposalFailed

[events/events](../modules/events_events).ProposalFailed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `provider`: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) ; `parentId`: `string` \| ``null`` ; `reason?`: `string`  }\>

  ↳ **`ProposalFailed`**

## Table of contents

### Constructors

- [constructor](events_events.ProposalFailed#constructor)

### Properties

- [detail](events_events.ProposalFailed#detail)
- [name](events_events.ProposalFailed#name)
- [timestamp](events_events.ProposalFailed#timestamp)

## Constructors

### constructor

• **new ProposalFailed**(`data`): [`ProposalFailed`](events_events.ProposalFailed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.provider` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `data.parentId` | ``null`` \| `string` |
| `data.reason?` | `string` |

#### Returns

[`ProposalFailed`](events_events.ProposalFailed)

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
| `parentId` | ``null`` \| `string` |
| `reason?` | `string` |

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
