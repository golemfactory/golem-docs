# Class: BaseEvent<DataType\>

[events/events](../modules/events_events.md).BaseEvent

## Type parameters

| Name |
| :------ |
| `DataType` |

## Hierarchy

- `CustomEvent`<`DataType`\>

  ↳ **`BaseEvent`**

  ↳↳ [`ComputationStarted`](events_events.ComputationStarted.md)

  ↳↳ [`ComputationFinished`](events_events.ComputationFinished.md)

  ↳↳ [`ComputationFailed`](events_events.ComputationFailed.md)

  ↳↳ [`TaskStarted`](events_events.TaskStarted.md)

  ↳↳ [`TaskRedone`](events_events.TaskRedone.md)

  ↳↳ [`TaskRejected`](events_events.TaskRejected.md)

  ↳↳ [`TaskFinished`](events_events.TaskFinished.md)

  ↳↳ [`AllocationCreated`](events_events.AllocationCreated.md)

  ↳↳ [`DemandSubscribed`](events_events.DemandSubscribed.md)

  ↳↳ [`DemandFailed`](events_events.DemandFailed.md)

  ↳↳ [`DemandUnsubscribed`](events_events.DemandUnsubscribed.md)

  ↳↳ [`CollectFailed`](events_events.CollectFailed.md)

  ↳↳ [`ProposalReceived`](events_events.ProposalReceived.md)

  ↳↳ [`ProposalRejected`](events_events.ProposalRejected.md)

  ↳↳ [`ProposalResponded`](events_events.ProposalResponded.md)

  ↳↳ [`ProposalFailed`](events_events.ProposalFailed.md)

  ↳↳ [`ProposalConfirmed`](events_events.ProposalConfirmed.md)

  ↳↳ [`PackageCreated`](events_events.PackageCreated.md)

  ↳↳ [`AgreementCreated`](events_events.AgreementCreated.md)

  ↳↳ [`AgreementConfirmed`](events_events.AgreementConfirmed.md)

  ↳↳ [`AgreementRejected`](events_events.AgreementRejected.md)

  ↳↳ [`AgreementTerminated`](events_events.AgreementTerminated.md)

  ↳↳ [`InvoiceReceived`](events_events.InvoiceReceived.md)

  ↳↳ [`DebitNoteReceived`](events_events.DebitNoteReceived.md)

  ↳↳ [`PaymentAccepted`](events_events.PaymentAccepted.md)

  ↳↳ [`DebitNoteAccepted`](events_events.DebitNoteAccepted.md)

  ↳↳ [`PaymentFailed`](events_events.PaymentFailed.md)

  ↳↳ [`ActivityCreated`](events_events.ActivityCreated.md)

  ↳↳ [`ActivityDestroyed`](events_events.ActivityDestroyed.md)

  ↳↳ [`ActivityStateChanged`](events_events.ActivityStateChanged.md)

  ↳↳ [`ScriptSent`](events_events.ScriptSent.md)

  ↳↳ [`ScriptExecuted`](events_events.ScriptExecuted.md)

## Table of contents

### Constructors

- [constructor](events_events.BaseEvent.md#constructor)

### Properties

- [detail](events_events.BaseEvent.md#detail)
- [name](events_events.BaseEvent.md#name)
- [timestamp](events_events.BaseEvent.md#timestamp)

## Constructors

### constructor

• **new BaseEvent**<`DataType`\>(`data?`)

#### Type parameters

| Name |
| :------ |
| `DataType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `DataType` |

#### Overrides

CustomEvent&lt;DataType\&gt;.constructor

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `DataType`

#### Inherited from

CustomEvent.detail

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

CustomEvent.name

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

CustomEvent.timestamp

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L18)
