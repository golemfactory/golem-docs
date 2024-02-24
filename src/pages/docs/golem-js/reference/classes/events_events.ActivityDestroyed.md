---
title: "Class ActivityDestroyed"
pageTitle: "Class ActivityDestroyed - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ActivityDestroyed within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ActivityDestroyed

[events/events](../modules/events_events).ActivityDestroyed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `agreementId`: `string`  }\>

  ↳ **`ActivityDestroyed`**

## Table of contents

### Constructors

- [constructor](events_events.ActivityDestroyed#constructor)

### Properties

- [detail](events_events.ActivityDestroyed#detail)
- [name](events_events.ActivityDestroyed#name)
- [timestamp](events_events.ActivityDestroyed#timestamp)

## Constructors

### constructor

• **new ActivityDestroyed**(`data`): [`ActivityDestroyed`](events_events.ActivityDestroyed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.id` | `string` |
| `data.agreementId` | `string` |

#### Returns

[`ActivityDestroyed`](events_events.ActivityDestroyed)

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
| `id` | `string` |
| `agreementId` | `string` |

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
