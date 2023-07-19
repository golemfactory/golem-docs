# Class: TaskRedone

[events/events](../modules/events_events.md).TaskRedone

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent.md)<{ `id`: `string` ; `agreementId`: `string` ; `activityId`: `string` ; `providerId`: `string` ; `providerName`: `string` ; `retriesCount`: `number` ; `reason?`: `string`  }\>

  ↳ **`TaskRedone`**

## Table of contents

### Constructors

- [constructor](events_events.TaskRedone.md#constructor)

### Properties

- [detail](events_events.TaskRedone.md#detail)
- [name](events_events.TaskRedone.md#name)
- [timestamp](events_events.TaskRedone.md#timestamp)

## Constructors

### constructor

• **new TaskRedone**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.agreementId` | `string` |
| `data.activityId` | `string` |
| `data.providerId` | `string` |
| `data.providerName` | `string` |
| `data.retriesCount` | `number` |
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
| `retriesCount` | `number` |
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
