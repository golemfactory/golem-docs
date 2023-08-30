# Class: ComputationFailed

[events/events](../modules/events_events).ComputationFailed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)<{ `reason?`: `string` }\>

  ↳ **`ComputationFailed`**

## Table of contents

### Constructors

- [constructor](events_events.ComputationFailed#constructor)

### Properties

- [detail](events_events.ComputationFailed#detail)
- [name](events_events.ComputationFailed#name)
- [timestamp](events_events.ComputationFailed#timestamp)

## Constructors

### constructor

• **new ComputationFailed**(`data?`)

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `data?`        | `Object` |
| `data.reason?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name      | Type     |
| :-------- | :------- |
| `reason?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L16)

---

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L17)

---

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L18)
