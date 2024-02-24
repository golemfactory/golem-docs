---
title: "Class ScriptExecuted"
pageTitle: "Class ScriptExecuted - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ScriptExecuted within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ScriptExecuted

[events/events](../modules/events_events).ScriptExecuted

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `activityId`: `string` ; `agreementId`: `string` ; `success`: `boolean`  }\>

  ↳ **`ScriptExecuted`**

## Table of contents

### Constructors

- [constructor](events_events.ScriptExecuted#constructor)

### Properties

- [detail](events_events.ScriptExecuted#detail)
- [name](events_events.ScriptExecuted#name)
- [timestamp](events_events.ScriptExecuted#timestamp)

## Constructors

### constructor

• **new ScriptExecuted**(`data`): [`ScriptExecuted`](events_events.ScriptExecuted)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.activityId` | `string` |
| `data.agreementId` | `string` |
| `data.success` | `boolean` |

#### Returns

[`ScriptExecuted`](events_events.ScriptExecuted)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:29](https://github.com/golemfactory/golem-js/blob/9789a95/src/events/events.ts#L29)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `activityId` | `string` |
| `agreementId` | `string` |
| `success` | `boolean` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/9789a95/src/events/events.ts#L17)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/9789a95/src/events/events.ts#L18)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:19](https://github.com/golemfactory/golem-js/blob/9789a95/src/events/events.ts#L19)
