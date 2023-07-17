JavaScript API reference

# JavaScript API reference

## Table of contents

### Enumerations

- [ActivityStateEnum](enums/ActivityStateEnum)
- [AgreementStateEnum](enums/AgreementStateEnum)

### Classes

- [TaskExecutor](classes/TaskExecutor)
- [Activity](classes/Activity)
- [Agreement](classes/Agreement)
- [Demand](classes/Demand)
- [DemandEvent](classes/DemandEvent)
- [Proposal](classes/Proposal)
- [Package](classes/Package)
- [Invoice](classes/Invoice)
- [DebitNote](classes/DebitNote)
- [Allocation](classes/Allocation)
- [Accounts](classes/Accounts)
- [Payments](classes/Payments)
- [InvoiceEvent](classes/InvoiceEvent)
- [DebitNoteEvent](classes/DebitNoteEvent)
- [Script](classes/Script)
- [Run](classes/Run)
- [Deploy](classes/Deploy)
- [Start](classes/Start)
- [Transfer](classes/Transfer)
- [UploadFile](classes/UploadFile)
- [DownloadFile](classes/DownloadFile)
- [ConsoleLogger](classes/ConsoleLogger)

### Interfaces

- [ActivityOptions](interfaces/ActivityOptions)
- [Result](interfaces/Result)
- [AgreementOptions](interfaces/AgreementOptions)
- [DemandOptions](interfaces/DemandOptions)
- [PackageOptions](interfaces/PackageOptions)
- [Logger](interfaces/Logger)

### Variables

- [DemandEventType](README#demandeventtype)
- [PaymentEventType](README#paymenteventtype)

## Mid-level

### DemandEventType

• `Const` **DemandEventType**: ``"ProposalReceived"``

Event type with which all offers and proposals coming from the market will be emitted.

#### Defined in

[market/demand.ts:31](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/demand.ts#L31)

___

## Other

### PaymentEventType

• `Const` **PaymentEventType**: ``"PaymentReceived"``

#### Defined in

[payment/payments.ts:15](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/payments.ts#L15)

___
