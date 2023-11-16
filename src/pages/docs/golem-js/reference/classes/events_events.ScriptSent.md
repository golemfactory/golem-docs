---
title: "Class ScriptSent - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ScriptSent within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: ScriptSent

[events/events](../modules/events_events).ScriptSent

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `activityId`: `string` ; `agreementId`: `string`  }\>

  ↳ **`ScriptSent`**

## Table of contents

### Constructors

- [constructor](events_events.ScriptSent#constructor)

### Properties

- [detail](events_events.ScriptSent#detail)
- [name](events_events.ScriptSent#name)
- [timestamp](events_events.ScriptSent#timestamp)

## Constructors

### constructor

• **new ScriptSent**(`data?`): [`ScriptSent`](events_events.ScriptSent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.activityId` | `string` |
| `data.agreementId` | `string` |

#### Returns

[`ScriptSent`](events_events.ScriptSent)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/effec9a/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `activityId` | `string` |
| `agreementId` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/effec9a/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/effec9a/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/effec9a/src/events/events.ts#L18)
