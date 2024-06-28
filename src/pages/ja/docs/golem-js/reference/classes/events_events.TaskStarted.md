---
title: "Class TaskStarted"
pageTitle: "Class TaskStarted - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class TaskStarted within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: TaskStarted

[events/events](../modules/events_events).TaskStarted

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `agreementId`: `string` ; `activityId`: `string` ; `provider`: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)  }\>

  ↳ **`TaskStarted`**

## Table of contents

### Constructors

- [constructor](events_events.TaskStarted#constructor)

### Properties

- [detail](events_events.TaskStarted#detail)
- [name](events_events.TaskStarted#name)
- [timestamp](events_events.TaskStarted#timestamp)

## Constructors

### constructor

• **new TaskStarted**(`data`): [`TaskStarted`](events_events.TaskStarted)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.agreementId` | `string` |
| `data.activityId` | `string` |
| `data.provider` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |

#### Returns

[`TaskStarted`](events_events.TaskStarted)

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
| `agreementId` | `string` |
| `activityId` | `string` |
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
