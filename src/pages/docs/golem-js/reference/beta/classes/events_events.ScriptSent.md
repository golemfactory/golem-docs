# Class: ScriptSent

[events/events](../modules/events_events.md).ScriptSent

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent.md)<{ `activityId`: `string` ; `agreementId`: `string`  }\>

  ↳ **`ScriptSent`**

## Table of contents

### Constructors

- [constructor](events_events.ScriptSent.md#constructor)

### Properties

- [detail](events_events.ScriptSent.md#detail)
- [name](events_events.ScriptSent.md#name)
- [timestamp](events_events.ScriptSent.md#timestamp)

## Constructors

### constructor

• **new ScriptSent**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.activityId` | `string` |
| `data.agreementId` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[constructor](events_events.BaseEvent.md#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `activityId` | `string` |
| `agreementId` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[detail](events_events.BaseEvent.md#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[name](events_events.BaseEvent.md#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[timestamp](events_events.BaseEvent.md#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L18)
