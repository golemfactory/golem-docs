# Module: events/events

## Table of contents

### Classes

- [BaseEvent](../classes/events_events.BaseEvent.md)
- [ComputationStarted](../classes/events_events.ComputationStarted.md)
- [ComputationFinished](../classes/events_events.ComputationFinished.md)
- [ComputationFailed](../classes/events_events.ComputationFailed.md)
- [TaskStarted](../classes/events_events.TaskStarted.md)
- [TaskRedone](../classes/events_events.TaskRedone.md)
- [TaskRejected](../classes/events_events.TaskRejected.md)
- [TaskFinished](../classes/events_events.TaskFinished.md)
- [AllocationCreated](../classes/events_events.AllocationCreated.md)
- [DemandSubscribed](../classes/events_events.DemandSubscribed.md)
- [DemandFailed](../classes/events_events.DemandFailed.md)
- [DemandUnsubscribed](../classes/events_events.DemandUnsubscribed.md)
- [CollectFailed](../classes/events_events.CollectFailed.md)
- [ProposalReceived](../classes/events_events.ProposalReceived.md)
- [ProposalRejected](../classes/events_events.ProposalRejected.md)
- [ProposalResponded](../classes/events_events.ProposalResponded.md)
- [ProposalFailed](../classes/events_events.ProposalFailed.md)
- [ProposalConfirmed](../classes/events_events.ProposalConfirmed.md)
- [PackageCreated](../classes/events_events.PackageCreated.md)
- [AgreementCreated](../classes/events_events.AgreementCreated.md)
- [AgreementConfirmed](../classes/events_events.AgreementConfirmed.md)
- [AgreementRejected](../classes/events_events.AgreementRejected.md)
- [AgreementTerminated](../classes/events_events.AgreementTerminated.md)
- [InvoiceReceived](../classes/events_events.InvoiceReceived.md)
- [DebitNoteReceived](../classes/events_events.DebitNoteReceived.md)
- [PaymentAccepted](../classes/events_events.PaymentAccepted.md)
- [DebitNoteAccepted](../classes/events_events.DebitNoteAccepted.md)
- [PaymentFailed](../classes/events_events.PaymentFailed.md)
- [ActivityCreated](../classes/events_events.ActivityCreated.md)
- [ActivityDestroyed](../classes/events_events.ActivityDestroyed.md)
- [ActivityStateChanged](../classes/events_events.ActivityStateChanged.md)
- [ScriptSent](../classes/events_events.ScriptSent.md)
- [ScriptExecuted](../classes/events_events.ScriptExecuted.md)

### Variables

- [EventType](events_events.md#eventtype)

## Variables

### EventType

• `Const` **EventType**: ``"GolemEvent"``

Global Event Type with which all API events will be emitted. It should be used on all listeners that would like to handle events.

#### Defined in

[yajsapi/events/events.ts:9](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/events/events.ts#L9)
