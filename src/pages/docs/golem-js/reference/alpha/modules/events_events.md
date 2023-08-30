# Module: events/events

## Table of contents

### Classes

- [BaseEvent](../classes/events_events.BaseEvent)
- [ComputationStarted](../classes/events_events.ComputationStarted)
- [ComputationFinished](../classes/events_events.ComputationFinished)
- [ComputationFailed](../classes/events_events.ComputationFailed)
- [TaskStarted](../classes/events_events.TaskStarted)
- [TaskRedone](../classes/events_events.TaskRedone)
- [TaskRejected](../classes/events_events.TaskRejected)
- [TaskFinished](../classes/events_events.TaskFinished)
- [AllocationCreated](../classes/events_events.AllocationCreated)
- [DemandSubscribed](../classes/events_events.DemandSubscribed)
- [DemandFailed](../classes/events_events.DemandFailed)
- [DemandUnsubscribed](../classes/events_events.DemandUnsubscribed)
- [CollectFailed](../classes/events_events.CollectFailed)
- [ProposalReceived](../classes/events_events.ProposalReceived)
- [ProposalRejected](../classes/events_events.ProposalRejected)
- [ProposalResponded](../classes/events_events.ProposalResponded)
- [ProposalFailed](../classes/events_events.ProposalFailed)
- [ProposalConfirmed](../classes/events_events.ProposalConfirmed)
- [PackageCreated](../classes/events_events.PackageCreated)
- [AgreementCreated](../classes/events_events.AgreementCreated)
- [AgreementConfirmed](../classes/events_events.AgreementConfirmed)
- [AgreementRejected](../classes/events_events.AgreementRejected)
- [AgreementTerminated](../classes/events_events.AgreementTerminated)
- [InvoiceReceived](../classes/events_events.InvoiceReceived)
- [DebitNoteReceived](../classes/events_events.DebitNoteReceived)
- [PaymentAccepted](../classes/events_events.PaymentAccepted)
- [DebitNoteAccepted](../classes/events_events.DebitNoteAccepted)
- [PaymentFailed](../classes/events_events.PaymentFailed)
- [ActivityCreated](../classes/events_events.ActivityCreated)
- [ActivityDestroyed](../classes/events_events.ActivityDestroyed)
- [ActivityStateChanged](../classes/events_events.ActivityStateChanged)
- [ScriptSent](../classes/events_events.ScriptSent)
- [ScriptExecuted](../classes/events_events.ScriptExecuted)

### Variables

- [EventType](events_events#eventtype)

## Variables

### EventType

• `Const` **EventType**: ``"GolemEvent"``

Global Event Type with which all API events will be emitted. It should be used on all listeners that would like to handle events.

#### Defined in

[src/events/events.ts:9](https://github.com/golemfactory/golem-js/blob/614ea72/src/events/events.ts#L9)
