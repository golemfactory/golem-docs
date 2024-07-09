---
title: "Class AgreementPaymentProcess"
pageTitle: "Class AgreementPaymentProcess - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class AgreementPaymentProcess within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: AgreementPaymentProcess

[payment/agreement\_payment\_process](../modules/payment_agreement_payment_process).AgreementPaymentProcess

Process manager that controls the logic behind processing payments for an agreement (debit notes and invoices).
The process is started automatically and ends when the final invoice is received.
You can stop the process earlier by calling the `stop` method. You cannot restart the process after stopping it.

## Table of contents

### Constructors

- [constructor](payment_agreement_payment_process.AgreementPaymentProcess#constructor)

### Properties

- [logger](payment_agreement_payment_process.AgreementPaymentProcess#logger)
- [agreement](payment_agreement_payment_process.AgreementPaymentProcess#agreement)
- [allocation](payment_agreement_payment_process.AgreementPaymentProcess#allocation)
- [paymentModule](payment_agreement_payment_process.AgreementPaymentProcess#paymentmodule)

### Methods

- [addDebitNote](payment_agreement_payment_process.AgreementPaymentProcess#adddebitnote)
- [addInvoice](payment_agreement_payment_process.AgreementPaymentProcess#addinvoice)
- [isFinished](payment_agreement_payment_process.AgreementPaymentProcess#isfinished)
- [isStarted](payment_agreement_payment_process.AgreementPaymentProcess#isstarted)
- [stop](payment_agreement_payment_process.AgreementPaymentProcess#stop)

## Constructors

### constructor

• **new AgreementPaymentProcess**(`agreement`, `allocation`, `paymentModule`, `options?`, `logger?`): [`AgreementPaymentProcess`](payment_agreement_payment_process.AgreementPaymentProcess)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](market_agreement_agreement.Agreement) |
| `allocation` | [`Allocation`](payment_allocation.Allocation) |
| `paymentModule` | [`PaymentModule`](../interfaces/payment_payment_module.PaymentModule) |
| `options?` | `Partial`\<[`PaymentProcessOptions`](../interfaces/payment_agreement_payment_process.PaymentProcessOptions)\> |
| `logger?` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |

#### Returns

[`AgreementPaymentProcess`](payment_agreement_payment_process.AgreementPaymentProcess)

#### Defined in

[src/payment/agreement_payment_process.ts:59](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/agreement_payment_process.ts#L59)

## Properties

### logger

• `Readonly` **logger**: [`Logger`](../interfaces/shared_utils_logger_logger.Logger)

#### Defined in

[src/payment/agreement_payment_process.ts:55](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/agreement_payment_process.ts#L55)

___

### agreement

• `Readonly` **agreement**: [`Agreement`](market_agreement_agreement.Agreement)

#### Defined in

[src/payment/agreement_payment_process.ts:60](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/agreement_payment_process.ts#L60)

___

### allocation

• `Readonly` **allocation**: [`Allocation`](payment_allocation.Allocation)

#### Defined in

[src/payment/agreement_payment_process.ts:61](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/agreement_payment_process.ts#L61)

___

### paymentModule

• `Readonly` **paymentModule**: [`PaymentModule`](../interfaces/payment_payment_module.PaymentModule)

#### Defined in

[src/payment/agreement_payment_process.ts:62](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/agreement_payment_process.ts#L62)

## Methods

### addDebitNote

▸ **addDebitNote**(`debitNote`): `Promise`\<`boolean`\>

Adds the debit note to the process avoiding race conditions

#### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNote`](payment_debit_note.DebitNote) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/payment/agreement_payment_process.ts:91](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/agreement_payment_process.ts#L91)

___

### addInvoice

▸ **addInvoice**(`invoice`): `Promise`\<`boolean`\>

Adds the invoice to the process avoiding race conditions

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`Invoice`](payment_invoice.Invoice) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/payment/agreement_payment_process.ts:98](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/agreement_payment_process.ts#L98)

___

### isFinished

▸ **isFinished**(): `boolean`

Tells if the process reached a point in which we can consider it as "finished"

#### Returns

`boolean`

#### Defined in

[src/payment/agreement_payment_process.ts:105](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/agreement_payment_process.ts#L105)

___

### isStarted

▸ **isStarted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/payment/agreement_payment_process.ts:293](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/agreement_payment_process.ts#L293)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[src/payment/agreement_payment_process.ts:297](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/agreement_payment_process.ts#L297)
