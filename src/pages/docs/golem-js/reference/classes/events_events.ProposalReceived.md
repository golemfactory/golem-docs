---
title: "Class ProposalReceived"
pageTitle: "Class ProposalReceived - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ProposalReceived within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ProposalReceived

[events/events](../modules/events_events).ProposalReceived

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `provider`: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) ; `parentId`: `string` \| ``null`` ; `details`: [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails)  }\>

  ↳ **`ProposalReceived`**

## Table of contents

### Constructors

- [constructor](events_events.ProposalReceived#constructor)

### Properties

- [detail](events_events.ProposalReceived#detail)
- [name](events_events.ProposalReceived#name)
- [timestamp](events_events.ProposalReceived#timestamp)

## Constructors

### constructor

• **new ProposalReceived**(`data`): [`ProposalReceived`](events_events.ProposalReceived)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.provider` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `data.parentId` | ``null`` \| `string` |
| `data.details` | [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails) |

#### Returns

[`ProposalReceived`](events_events.ProposalReceived)

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
| `parentId` | ``null`` \| `string` |
| `details` | [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails) |

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
