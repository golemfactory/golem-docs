# Class: TaskRejected

[events/events](../modules/events_events.md).TaskRejected

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent.md)<{ `id`: `string` ; `agreementId`: `string` ; `activityId`: `string` ; `providerId`: `string` ; `providerName`: `string` ; `reason?`: `string`  }\>

  ↳ **`TaskRejected`**

## Table of contents

### Constructors

- [constructor](events_events.TaskRejected.md#constructor)

### Properties

- [detail](events_events.TaskRejected.md#detail)
- [name](events_events.TaskRejected.md#name)
- [timestamp](events_events.TaskRejected.md#timestamp)

## Constructors

### constructor

• **new TaskRejected**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.agreementId` | `string` |
| `data.activityId` | `string` |
| `data.providerId` | `string` |
| `data.providerName` | `string` |
| `data.reason?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[constructor](events_events.BaseEvent.md#constructor)

#### Defined in

[yajsapi/events/events.ts:28](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `agreementId` | `string` |
| `activityId` | `string` |
| `providerId` | `string` |
| `providerName` | `string` |
| `reason?` | `string` |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[detail](events_events.BaseEvent.md#detail)

#### Defined in

[yajsapi/events/events.ts:16](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[name](events_events.BaseEvent.md#name)

#### Defined in

[yajsapi/events/events.ts:17](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[timestamp](events_events.BaseEvent.md#timestamp)

#### Defined in

[yajsapi/events/events.ts:18](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/events/events.ts#L18)
