---
title: "Class TaskRejected"
pageTitle: "Class TaskRejected - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class TaskRejected within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: TaskRejected

[events/events](../modules/events_events).TaskRejected

Represents the situation where all attempts to execute the task have been unsuccessful and no further processing
will be conducted.

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `agreementId?`: `string` ; `provider?`: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) ; `activityId?`: `string` ; `reason?`: `string`  }\>

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

• **new TaskRejected**(`data`): [`TaskRejected`](events_events.TaskRejected)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | - |
| `data.id` | `string` | - |
| `data.agreementId?` | `string` | - |
| `data.provider?` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) | - |
| `data.activityId?` | `string` | The activity that was involved when the rejection took place This might be not set when there was an issue with starting the activity on the provider |
| `data.reason?` | `string` | - |

#### Returns

[`TaskRejected`](events_events.TaskRejected)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:29](https://github.com/golemfactory/golem-js/blob/7cee55b/src/events/events.ts#L29)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | - |
| `agreementId?` | `string` | - |
| `provider?` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) | - |
| `activityId?` | `string` | The activity that was involved when the rejection took place This might be not set when there was an issue with starting the activity on the provider |
| `reason?` | `string` | - |

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
