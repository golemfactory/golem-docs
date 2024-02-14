---
title: "Class TaskRedone"
pageTitle: "Class TaskRedone - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class TaskRedone within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: TaskRedone

[events/events](../modules/events_events).TaskRedone

Represents the situation in which running the task failed for some reason, but it will be retried

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `agreementId?`: `string` ; `provider?`: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) ; `retriesCount`: `number` ; `activityId?`: `string` ; `reason?`: `string`  }\>

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

• **new TaskRedone**(`data`): [`TaskRedone`](events_events.TaskRedone)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | - |
| `data.id` | `string` | - |
| `data.agreementId?` | `string` | - |
| `data.provider?` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) | - |
| `data.retriesCount` | `number` | - |
| `data.activityId?` | `string` | The activity that was involved This might be not set when there was an issue with starting the activity on the provider |
| `data.reason?` | `string` | - |

#### Returns

[`TaskRedone`](events_events.TaskRedone)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:29](https://github.com/golemfactory/golem-js/blob/22da85c/src/events/events.ts#L29)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | - |
| `agreementId?` | `string` | - |
| `provider?` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) | - |
| `retriesCount` | `number` | - |
| `activityId?` | `string` | The activity that was involved This might be not set when there was an issue with starting the activity on the provider |
| `reason?` | `string` | - |

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
