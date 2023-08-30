# Class: AgreementCreated

[events/events](../modules/events_events.md).AgreementCreated

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent.md)<{ `id`: `string` ; `providerId`: `string` ; `providerName`: `string` ; `proposalId`: `string` ; `validTo?`: `string`  }\>

  ↳ **`AgreementCreated`**

## Table of contents

### Constructors

- [constructor](events_events.AgreementCreated.md#constructor)

### Properties

- [detail](events_events.AgreementCreated.md#detail)
- [name](events_events.AgreementCreated.md#name)
- [timestamp](events_events.AgreementCreated.md#timestamp)

## Constructors

### constructor

• **new AgreementCreated**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.id` | `string` |
| `data.providerId` | `string` |
| `data.providerName` | `string` |
| `data.proposalId` | `string` |
| `data.validTo?` | `string` |

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
| `id` | `string` |
| `providerId` | `string` |
| `providerName` | `string` |
| `proposalId` | `string` |
| `validTo?` | `string` |

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
