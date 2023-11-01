---
title: "Class TaskRedone - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class TaskRedone within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: TaskRedone

[events/events](../modules/events_events).TaskRedone

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)<{ `id`: `string` ; `agreementId`: `string` ; `activityId`: `string` ; `providerId`: `string` ; `providerName`: `string` ; `retriesCount`: `number` ; `reason?`: `string`  }\>

  ↳ **`TaskRedone`**

## Table of contents

### Constructors

- [constructor](events_events.TaskRedone#constructor)

### Properties

- [detail](events_events.TaskRedone#detail)
- [name](events_events.TaskRedone#name)
- [timestamp](events_events.TaskRedone#timestamp)

## Constructors

### constructor

• **new TaskRedone**(`data?`): [`TaskRedone`](events_events.TaskRedone)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.agreementId` | `string` |
| `data.activityId` | `string` |
| `data.providerId` | `string` |
| `data.providerName` | `string` |
| `data.retriesCount` | `number` |
| `data.reason?` | `string` |

#### Returns

[`TaskRedone`](events_events.TaskRedone)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/00d03ae/src/events/events.ts#L28)

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
| `retriesCount` | `number` |
| `reason?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/00d03ae/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/00d03ae/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/00d03ae/src/events/events.ts#L18)
