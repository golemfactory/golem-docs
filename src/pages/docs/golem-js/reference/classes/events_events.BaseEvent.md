---
title: "Class BaseEvent - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class BaseEvent within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: BaseEvent<DataType\>

[events/events](../modules/events_events).BaseEvent

## Type parameters

| Name |
| :------ |
| `DataType` |

## Hierarchy

- `CustomEvent`<`DataType`\>

  ↳ **`BaseEvent`**

  ↳↳ [`ComputationStarted`](events_events.ComputationStarted)

  ↳↳ [`ComputationFinished`](events_events.ComputationFinished)

  ↳↳ [`ComputationFailed`](events_events.ComputationFailed)

  ↳↳ [`TaskStarted`](events_events.TaskStarted)

  ↳↳ [`TaskRedone`](events_events.TaskRedone)

  ↳↳ [`TaskRejected`](events_events.TaskRejected)

  ↳↳ [`TaskFinished`](events_events.TaskFinished)

  ↳↳ [`AllocationCreated`](events_events.AllocationCreated)

  ↳↳ [`DemandSubscribed`](events_events.DemandSubscribed)

  ↳↳ [`DemandFailed`](events_events.DemandFailed)

  ↳↳ [`DemandUnsubscribed`](events_events.DemandUnsubscribed)

  ↳↳ [`CollectFailed`](events_events.CollectFailed)

  ↳↳ [`ProposalReceived`](events_events.ProposalReceived)

  ↳↳ [`ProposalRejected`](events_events.ProposalRejected)

  ↳↳ [`ProposalResponded`](events_events.ProposalResponded)

  ↳↳ [`ProposalFailed`](events_events.ProposalFailed)

  ↳↳ [`ProposalConfirmed`](events_events.ProposalConfirmed)

  ↳↳ [`PackageCreated`](events_events.PackageCreated)

  ↳↳ [`AgreementCreated`](events_events.AgreementCreated)

  ↳↳ [`AgreementConfirmed`](events_events.AgreementConfirmed)

  ↳↳ [`AgreementRejected`](events_events.AgreementRejected)

  ↳↳ [`AgreementTerminated`](events_events.AgreementTerminated)

  ↳↳ [`InvoiceReceived`](events_events.InvoiceReceived)

  ↳↳ [`DebitNoteReceived`](events_events.DebitNoteReceived)

  ↳↳ [`PaymentAccepted`](events_events.PaymentAccepted)

  ↳↳ [`DebitNoteAccepted`](events_events.DebitNoteAccepted)

  ↳↳ [`PaymentFailed`](events_events.PaymentFailed)

  ↳↳ [`ActivityCreated`](events_events.ActivityCreated)

  ↳↳ [`ActivityDestroyed`](events_events.ActivityDestroyed)

  ↳↳ [`ActivityStateChanged`](events_events.ActivityStateChanged)

  ↳↳ [`ScriptSent`](events_events.ScriptSent)

  ↳↳ [`ScriptExecuted`](events_events.ScriptExecuted)

## Table of contents

### Constructors

- [constructor](events_events.BaseEvent#constructor)

### Properties

- [detail](events_events.BaseEvent#detail)
- [name](events_events.BaseEvent#name)
- [timestamp](events_events.BaseEvent#timestamp)

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

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/c332187/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `DataType`

#### Inherited from

CustomEvent.detail

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/c332187/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

CustomEvent.name

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/c332187/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

CustomEvent.timestamp

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/c332187/src/events/events.ts#L18)
