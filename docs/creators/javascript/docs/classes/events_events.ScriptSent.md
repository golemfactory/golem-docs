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

[yajsapi/events/events.ts:19](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/events/events.ts#L19)

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

[yajsapi/events/events.ts:11](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/events/events.ts#L11)
