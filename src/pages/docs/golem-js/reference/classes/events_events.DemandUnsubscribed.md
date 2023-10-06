---
title: "Class DemandUnsubscribed - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DemandUnsubscribed within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: DemandUnsubscribed

[events/events](../modules/events_events).DemandUnsubscribed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)<{ `id`: `string`  }\>

  ↳ **`DemandUnsubscribed`**

## Table of contents

### Constructors

- [constructor](events_events.DemandUnsubscribed#constructor)

### Properties

- [detail](events_events.DemandUnsubscribed#detail)
- [name](events_events.DemandUnsubscribed#name)
- [timestamp](events_events.DemandUnsubscribed#timestamp)

## Constructors

### constructor

• **new DemandUnsubscribed**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/8dd67e1/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/8dd67e1/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/8dd67e1/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/8dd67e1/src/events/events.ts#L18)
