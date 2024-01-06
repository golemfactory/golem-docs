---
title: "Class AgreementPaymentProcess"
pageTitle: "Class AgreementPaymentProcess - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class AgreementPaymentProcess within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: AgreementPaymentProcess

[payment/agreement\_payment\_process](../modules/payment_agreement_payment_process).AgreementPaymentProcess

Process manager that controls the logic behind processing events related to an agreement which result with payments

## Table of contents

### Constructors

- [constructor](payment_agreement_payment_process.AgreementPaymentProcess#constructor)

### Properties

- [agreement](payment_agreement_payment_process.AgreementPaymentProcess#agreement)
- [allocation](payment_agreement_payment_process.AgreementPaymentProcess#allocation)
- [filters](payment_agreement_payment_process.AgreementPaymentProcess#filters)
- [logger](payment_agreement_payment_process.AgreementPaymentProcess#logger)

### Methods

- [addDebitNote](payment_agreement_payment_process.AgreementPaymentProcess#adddebitnote)
- [addInvoice](payment_agreement_payment_process.AgreementPaymentProcess#addinvoice)
- [isFinished](payment_agreement_payment_process.AgreementPaymentProcess#isfinished)

## Constructors

### constructor

• **new AgreementPaymentProcess**(`agreement`, `allocation`, `filters`, `logger?`): [`AgreementPaymentProcess`](payment_agreement_payment_process.AgreementPaymentProcess)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | `Agreement` |
| `allocation` | `Allocation` |
| `filters` | `Object` |
| `filters.invoiceFilter` | [`InvoiceFilter`](../modules/payment_service#invoicefilter) |
| `filters.debitNoteFilter` | [`DebitNoteFilter`](../modules/payment_service#debitnotefilter) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Returns

[`AgreementPaymentProcess`](payment_agreement_payment_process.AgreementPaymentProcess)

#### Defined in

[src/payment/agreement_payment_process.ts:25](https://github.com/golemfactory/golem-js/blob/9c218b4/src/payment/agreement_payment_process.ts#L25)

## Properties

### agreement

• `Readonly` **agreement**: `Agreement`

#### Defined in

[src/payment/agreement_payment_process.ts:26](https://github.com/golemfactory/golem-js/blob/9c218b4/src/payment/agreement_payment_process.ts#L26)

___

### allocation

• `Readonly` **allocation**: `Allocation`

#### Defined in

[src/payment/agreement_payment_process.ts:27](https://github.com/golemfactory/golem-js/blob/9c218b4/src/payment/agreement_payment_process.ts#L27)

___

### filters

• `Readonly` **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `invoiceFilter` | [`InvoiceFilter`](../modules/payment_service#invoicefilter) |
| `debitNoteFilter` | [`DebitNoteFilter`](../modules/payment_service#debitnotefilter) |

#### Defined in

[src/payment/agreement_payment_process.ts:28](https://github.com/golemfactory/golem-js/blob/9c218b4/src/payment/agreement_payment_process.ts#L28)

___

### logger

• `Optional` `Readonly` **logger**: [`Logger`](../interfaces/utils_logger_logger.Logger)

#### Defined in

[src/payment/agreement_payment_process.ts:32](https://github.com/golemfactory/golem-js/blob/9c218b4/src/payment/agreement_payment_process.ts#L32)

## Methods

### addDebitNote

▸ **addDebitNote**(`debitNote`): `Promise`\<`boolean`\>

Adds the debit note to the process avoiding race conditions

#### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | `DebitNote` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/payment/agreement_payment_process.ts:38](https://github.com/golemfactory/golem-js/blob/9c218b4/src/payment/agreement_payment_process.ts#L38)

___

### addInvoice

▸ **addInvoice**(`invoice`): `Promise`\<`boolean`\>

Adds the invoice to the process avoiding race conditions

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | `Invoice` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/payment/agreement_payment_process.ts:45](https://github.com/golemfactory/golem-js/blob/9c218b4/src/payment/agreement_payment_process.ts#L45)

___

### isFinished

▸ **isFinished**(): `boolean`

Tells if the process reached a point in which we can consider it as "finished"

#### Returns

`boolean`

#### Defined in

[src/payment/agreement_payment_process.ts:52](https://github.com/golemfactory/golem-js/blob/9c218b4/src/payment/agreement_payment_process.ts#L52)
