# Class: ActivityDestroyed

[events/events](../modules/events_events).ActivityDestroyed

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)<{ `id`: `string` ; `agreementId`: `string` }\>

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

• **new ActivityDestroyed**(`data?`)

#### Parameters

| Name               | Type     |
| :----------------- | :------- |
| `data?`            | `Object` |
| `data.id`          | `string` |
| `data.agreementId` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/614ea72/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name          | Type     |
| :------------ | :------- |
| `id`          | `string` |
| `agreementId` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/614ea72/src/events/events.ts#L16)

---

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/614ea72/src/events/events.ts#L17)

---

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/614ea72/src/events/events.ts#L18)
