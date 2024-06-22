---
title: "Interface PaymentModule"
pageTitle: "Interface PaymentModule - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface PaymentModule within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: PaymentModule

[payment/payment.module](../modules/payment_payment_module).PaymentModule

## Implemented by

- [`PaymentModuleImpl`](../classes/payment_payment_module.PaymentModuleImpl)

## Table of contents

### Properties

- [events](payment_payment_module.PaymentModule#events)

### Methods

- [observeDebitNotes](payment_payment_module.PaymentModule#observedebitnotes)
- [observeInvoices](payment_payment_module.PaymentModule#observeinvoices)
- [createAllocation](payment_payment_module.PaymentModule#createallocation)
- [releaseAllocation](payment_payment_module.PaymentModule#releaseallocation)
- [amendAllocation](payment_payment_module.PaymentModule#amendallocation)
- [getAllocation](payment_payment_module.PaymentModule#getallocation)
- [acceptInvoice](payment_payment_module.PaymentModule#acceptinvoice)
- [rejectInvoice](payment_payment_module.PaymentModule#rejectinvoice)
- [acceptDebitNote](payment_payment_module.PaymentModule#acceptdebitnote)
- [rejectDebitNote](payment_payment_module.PaymentModule#rejectdebitnote)
- [createInvoiceProcessor](payment_payment_module.PaymentModule#createinvoiceprocessor)
- [createAgreementPaymentProcess](payment_payment_module.PaymentModule#createagreementpaymentprocess)
- [getPayerDetails](payment_payment_module.PaymentModule#getpayerdetails)

## Properties

### events

• **events**: `EventEmitter`\<[`PaymentEvents`](../modules/payment_api#paymentevents), `any`\>

#### Defined in

[src/payment/payment.module.ts:44](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L44)

## Methods

### observeDebitNotes

▸ **observeDebitNotes**(): `Observable`\<[`DebitNote`](../classes/payment_debit_note.DebitNote)\>

#### Returns

`Observable`\<[`DebitNote`](../classes/payment_debit_note.DebitNote)\>

#### Defined in

[src/payment/payment.module.ts:46](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L46)

___

### observeInvoices

▸ **observeInvoices**(): `Observable`\<[`Invoice`](../classes/payment_invoice.Invoice)\>

#### Returns

`Observable`\<[`Invoice`](../classes/payment_invoice.Invoice)\>

#### Defined in

[src/payment/payment.module.ts:48](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L48)

___

### createAllocation

▸ **createAllocation**(`params`): `Promise`\<[`Allocation`](../classes/payment_allocation.Allocation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateAllocationParams`](../modules/payment_api#createallocationparams) |

#### Returns

`Promise`\<[`Allocation`](../classes/payment_allocation.Allocation)\>

#### Defined in

[src/payment/payment.module.ts:50](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L50)

___

### releaseAllocation

▸ **releaseAllocation**(`allocation`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allocation` | [`Allocation`](../classes/payment_allocation.Allocation) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/payment/payment.module.ts:52](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L52)

___

### amendAllocation

▸ **amendAllocation**(`allocation`, `params`): `Promise`\<[`Allocation`](../classes/payment_allocation.Allocation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allocation` | [`Allocation`](../classes/payment_allocation.Allocation) |
| `params` | [`CreateAllocationParams`](../modules/payment_api#createallocationparams) |

#### Returns

`Promise`\<[`Allocation`](../classes/payment_allocation.Allocation)\>

#### Defined in

[src/payment/payment.module.ts:54](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L54)

___

### getAllocation

▸ **getAllocation**(`id`): `Promise`\<[`Allocation`](../classes/payment_allocation.Allocation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Allocation`](../classes/payment_allocation.Allocation)\>

#### Defined in

[src/payment/payment.module.ts:56](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L56)

___

### acceptInvoice

▸ **acceptInvoice**(`invoice`, `allocation`, `amount`): `Promise`\<[`Invoice`](../classes/payment_invoice.Invoice)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`Invoice`](../classes/payment_invoice.Invoice) |
| `allocation` | [`Allocation`](../classes/payment_allocation.Allocation) |
| `amount` | `string` |

#### Returns

`Promise`\<[`Invoice`](../classes/payment_invoice.Invoice)\>

#### Defined in

[src/payment/payment.module.ts:58](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L58)

___

### rejectInvoice

▸ **rejectInvoice**(`invoice`, `reason`): `Promise`\<[`Invoice`](../classes/payment_invoice.Invoice)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`Invoice`](../classes/payment_invoice.Invoice) |
| `reason` | `string` |

#### Returns

`Promise`\<[`Invoice`](../classes/payment_invoice.Invoice)\>

#### Defined in

[src/payment/payment.module.ts:60](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L60)

___

### acceptDebitNote

▸ **acceptDebitNote**(`debitNote`, `allocation`, `amount`): `Promise`\<[`DebitNote`](../classes/payment_debit_note.DebitNote)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNote`](../classes/payment_debit_note.DebitNote) |
| `allocation` | [`Allocation`](../classes/payment_allocation.Allocation) |
| `amount` | `string` |

#### Returns

`Promise`\<[`DebitNote`](../classes/payment_debit_note.DebitNote)\>

#### Defined in

[src/payment/payment.module.ts:62](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L62)

___

### rejectDebitNote

▸ **rejectDebitNote**(`debitNote`, `reason`): `Promise`\<[`DebitNote`](../classes/payment_debit_note.DebitNote)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNote`](../classes/payment_debit_note.DebitNote) |
| `reason` | `string` |

#### Returns

`Promise`\<[`DebitNote`](../classes/payment_debit_note.DebitNote)\>

#### Defined in

[src/payment/payment.module.ts:64](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L64)

___

### createInvoiceProcessor

▸ **createInvoiceProcessor**(): [`InvoiceProcessor`](../classes/payment_InvoiceProcessor.InvoiceProcessor)

#### Returns

[`InvoiceProcessor`](../classes/payment_InvoiceProcessor.InvoiceProcessor)

#### Defined in

[src/payment/payment.module.ts:66](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L66)

___

### createAgreementPaymentProcess

▸ **createAgreementPaymentProcess**(`agreement`, `allocation`, `options?`): [`AgreementPaymentProcess`](../classes/payment_agreement_payment_process.AgreementPaymentProcess)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `allocation` | [`Allocation`](../classes/payment_allocation.Allocation) |
| `options?` | `Partial`\<[`PaymentProcessOptions`](payment_agreement_payment_process.PaymentProcessOptions)\> |

#### Returns

[`AgreementPaymentProcess`](../classes/payment_agreement_payment_process.AgreementPaymentProcess)

#### Defined in

[src/payment/payment.module.ts:68](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L68)

___

### getPayerDetails

▸ **getPayerDetails**(): `Promise`\<[`PayerDetails`](../classes/payment_PayerDetails.PayerDetails)\>

Get the payment platform and wallet address of the payer.

#### Returns

`Promise`\<[`PayerDetails`](../classes/payment_PayerDetails.PayerDetails)\>

#### Defined in

[src/payment/payment.module.ts:77](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L77)
