# Class: ScriptSent

[events/events](../modules/events_events).ScriptSent

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)<{ `activityId`: `string` ; `agreementId`: `string`  }\>

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

• **new ScriptSent**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.activityId` | `string` |
| `data.agreementId` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[yajsapi/events/events.ts:28](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/events/events.ts#L28)

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

[yajsapi/events/events.ts:16](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[yajsapi/events/events.ts:17](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[yajsapi/events/events.ts:18](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/events/events.ts#L18)
