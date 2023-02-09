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

  ↳↳ [`SubscriptionCreated`](events_events.SubscriptionCreated.md)

  ↳↳ [`SubscriptionFailed`](events_events.SubscriptionFailed.md)

  ↳↳ [`CollectFailed`](events_events.CollectFailed.md)

  ↳↳ [`ProposalReceived`](events_events.ProposalReceived.md)

  ↳↳ [`ProposalRejected`](events_events.ProposalRejected.md)

  ↳↳ [`ProposalResponded`](events_events.ProposalResponded.md)

  ↳↳ [`ProposalConfirmed`](events_events.ProposalConfirmed.md)

  ↳↳ [`AgreementCreated`](events_events.AgreementCreated.md)

  ↳↳ [`AgreementConfirmed`](events_events.AgreementConfirmed.md)

  ↳↳ [`AgreementRejected`](events_events.AgreementRejected.md)

  ↳↳ [`AgreementTerminated`](events_events.AgreementTerminated.md)

  ↳↳ [`InvoiceReceived`](events_events.InvoiceReceived.md)

  ↳↳ [`DebitNoteReceived`](events_events.DebitNoteReceived.md)

  ↳↳ [`PaymentAccepted`](events_events.PaymentAccepted.md)

  ↳↳ [`PaymentFailed`](events_events.PaymentFailed.md)

  ↳↳ [`ActivityCreated`](events_events.ActivityCreated.md)

  ↳↳ [`ActivityDestroyed`](events_events.ActivityDestroyed.md)

  ↳↳ [`ScriptSent`](events_events.ScriptSent.md)

  ↳↳ [`ScriptExecuted`](events_events.ScriptExecuted.md)

## Table of contents

### Constructors

- [constructor](events_events.BaseEvent.md#constructor)

### Properties

- [detail](events_events.BaseEvent.md#detail)

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

[yajsapi/events/events.ts:19](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/events/events.ts#L19)

## Properties

### detail

• `Readonly` **detail**: `DataType`

#### Inherited from

CustomEvent.detail

#### Defined in

[yajsapi/events/events.ts:11](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/events/events.ts#L11)
