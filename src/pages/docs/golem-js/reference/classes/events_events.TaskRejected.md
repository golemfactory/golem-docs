---
title: "Class TaskRejected - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class TaskRejected within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: TaskRejected

[events/events](../modules/events_events).TaskRejected

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `agreementId`: `string` ; `activityId`: `string` ; `providerId`: `string` ; `providerName`: `string` ; `reason?`: `string`  }\>

  ↳ **`TaskRejected`**

## Table of contents

### Constructors

- [constructor](events_events.TaskRejected#constructor)

### Properties

- [detail](events_events.TaskRejected#detail)
- [name](events_events.TaskRejected#name)
- [timestamp](events_events.TaskRejected#timestamp)

## Constructors

### constructor

• **new TaskRejected**(`data?`): [`TaskRejected`](events_events.TaskRejected)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.agreementId` | `string` |
| `data.activityId` | `string` |
| `data.providerId` | `string` |
| `data.providerName` | `string` |
| `data.reason?` | `string` |

#### Returns

[`TaskRejected`](events_events.TaskRejected)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/fd7ccbc/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `agreementId` | `string` |
| `activityId` | `string` |
| `providerId` | `string` |
| `providerName` | `string` |
| `reason?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/fd7ccbc/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/fd7ccbc/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/fd7ccbc/src/events/events.ts#L18)
