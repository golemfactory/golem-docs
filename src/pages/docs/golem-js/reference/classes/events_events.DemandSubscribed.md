---
title: "Class DemandSubscribed - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DemandSubscribed within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: DemandSubscribed

[events/events](../modules/events_events).DemandSubscribed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)\<\{ `id`: `string` ; `details`: [`DemandDetails`](../interfaces/market_demand.DemandDetails)  }\>

  ↳ **`DemandSubscribed`**

## Table of contents

### Constructors

- [constructor](events_events.DemandSubscribed#constructor)

### Properties

- [detail](events_events.DemandSubscribed#detail)
- [name](events_events.DemandSubscribed#name)
- [timestamp](events_events.DemandSubscribed#timestamp)

## Constructors

### constructor

• **new DemandSubscribed**(`data?`): [`DemandSubscribed`](events_events.DemandSubscribed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.details` | [`DemandDetails`](../interfaces/market_demand.DemandDetails) |

#### Returns

[`DemandSubscribed`](events_events.DemandSubscribed)

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/5c570c3/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `details` | [`DemandDetails`](../interfaces/market_demand.DemandDetails) |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/5c570c3/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/5c570c3/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/5c570c3/src/events/events.ts#L18)
