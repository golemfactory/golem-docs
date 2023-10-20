---
title: "Class ProposalFailed - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ProposalFailed within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: ProposalFailed

[events/events](../modules/events_events).ProposalFailed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)<{ `id`: `string` ; `providerId`: `string` ; `parentId`: `string` \| ``null`` ; `reason?`: `string`  }\>

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

• **new ProposalFailed**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.providerId` | `string` |
| `data.parentId` | ``null`` \| `string` |
| `data.reason?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/72269cc/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `providerId` | `string` |
| `parentId` | ``null`` \| `string` |
| `reason?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/72269cc/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/72269cc/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/72269cc/src/events/events.ts#L18)
