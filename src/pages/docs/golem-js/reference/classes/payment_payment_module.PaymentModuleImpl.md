---
title: "Class PaymentModuleImpl"
pageTitle: "Class PaymentModuleImpl - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class PaymentModuleImpl within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: PaymentModuleImpl

[payment/payment.module](../modules/payment_payment_module).PaymentModuleImpl

## Implements

- [`PaymentModule`](../interfaces/payment_payment_module.PaymentModule)

## Table of contents

### Constructors

- [constructor](payment_payment_module.PaymentModuleImpl#constructor)

### Properties

- [events](payment_payment_module.PaymentModuleImpl#events)

### Methods

- [getPayerDetails](payment_payment_module.PaymentModuleImpl#getpayerdetails)
- [observeDebitNotes](payment_payment_module.PaymentModuleImpl#observedebitnotes)
- [observeInvoices](payment_payment_module.PaymentModuleImpl#observeinvoices)
- [createAllocation](payment_payment_module.PaymentModuleImpl#createallocation)
- [releaseAllocation](payment_payment_module.PaymentModuleImpl#releaseallocation)
- [getAllocation](payment_payment_module.PaymentModuleImpl#getallocation)
- [amendAllocation](payment_payment_module.PaymentModuleImpl#amendallocation)
- [acceptInvoice](payment_payment_module.PaymentModuleImpl#acceptinvoice)
- [rejectInvoice](payment_payment_module.PaymentModuleImpl#rejectinvoice)
- [acceptDebitNote](payment_payment_module.PaymentModuleImpl#acceptdebitnote)
- [rejectDebitNote](payment_payment_module.PaymentModuleImpl#rejectdebitnote)
- [createInvoiceProcessor](payment_payment_module.PaymentModuleImpl#createinvoiceprocessor)
- [createAgreementPaymentProcess](payment_payment_module.PaymentModuleImpl#createagreementpaymentprocess)

## Constructors

### constructor

• **new PaymentModuleImpl**(`deps`, `options?`): [`PaymentModuleImpl`](payment_payment_module.PaymentModuleImpl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deps` | [`GolemServices`](../modules/golem_network_golem_network#golemservices) |
| `options?` | [`PaymentModuleOptions`](../interfaces/payment_payment_module.PaymentModuleOptions) |

#### Returns

[`PaymentModuleImpl`](payment_payment_module.PaymentModuleImpl)

#### Defined in

[src/payment/payment.module.ts:97](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L97)

## Properties

### events

• **events**: `EventEmitter`\<[`PaymentEvents`](../modules/payment_api#paymentevents), `any`\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[events](../interfaces/payment_payment_module.PaymentModule#events)

#### Defined in

[src/payment/payment.module.ts:83](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L83)

## Methods

### getPayerDetails

▸ **getPayerDetails**(): `Promise`\<[`PayerDetails`](payment_PayerDetails.PayerDetails)\>

Get the payment platform and wallet address of the payer.

#### Returns

`Promise`\<[`PayerDetails`](payment_PayerDetails.PayerDetails)\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[getPayerDetails](../interfaces/payment_payment_module.PaymentModule#getpayerdetails)

#### Defined in

[src/payment/payment.module.ts:126](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L126)

___

### observeDebitNotes

▸ **observeDebitNotes**(): `Observable`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Returns

`Observable`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[observeDebitNotes](../interfaces/payment_payment_module.PaymentModule#observedebitnotes)

#### Defined in

[src/payment/payment.module.ts:132](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L132)

___

### observeInvoices

▸ **observeInvoices**(): `Observable`\<[`Invoice`](payment_invoice.Invoice)\>

#### Returns

`Observable`\<[`Invoice`](payment_invoice.Invoice)\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[observeInvoices](../interfaces/payment_payment_module.PaymentModule#observeinvoices)

#### Defined in

[src/payment/payment.module.ts:136](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L136)

___

### createAllocation

▸ **createAllocation**(`params`): `Promise`\<[`Allocation`](payment_allocation.Allocation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateAllocationParams`](../modules/payment_api#createallocationparams) |

#### Returns

`Promise`\<[`Allocation`](payment_allocation.Allocation)\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[createAllocation](../interfaces/payment_payment_module.PaymentModule#createallocation)

#### Defined in

[src/payment/payment.module.ts:140](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L140)

___

### releaseAllocation

▸ **releaseAllocation**(`allocation`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allocation` | [`Allocation`](payment_allocation.Allocation) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[releaseAllocation](../interfaces/payment_payment_module.PaymentModule#releaseallocation)

#### Defined in

[src/payment/payment.module.ts:162](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L162)

___

### getAllocation

▸ **getAllocation**(`id`): `Promise`\<[`Allocation`](payment_allocation.Allocation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Allocation`](payment_allocation.Allocation)\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[getAllocation](../interfaces/payment_payment_module.PaymentModule#getallocation)

#### Defined in

[src/payment/payment.module.ts:190](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L190)

___

### amendAllocation

▸ **amendAllocation**(`allocation`, `_newOpts`): `Promise`\<[`Allocation`](payment_allocation.Allocation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allocation` | [`Allocation`](payment_allocation.Allocation) |
| `_newOpts` | [`CreateAllocationParams`](../modules/payment_api#createallocationparams) |

#### Returns

`Promise`\<[`Allocation`](payment_allocation.Allocation)\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[amendAllocation](../interfaces/payment_payment_module.PaymentModule#amendallocation)

#### Defined in

[src/payment/payment.module.ts:196](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L196)

___

### acceptInvoice

▸ **acceptInvoice**(`invoice`, `allocation`, `amount`): `Promise`\<[`Invoice`](payment_invoice.Invoice)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`Invoice`](payment_invoice.Invoice) |
| `allocation` | [`Allocation`](payment_allocation.Allocation) |
| `amount` | `string` |

#### Returns

`Promise`\<[`Invoice`](payment_invoice.Invoice)\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[acceptInvoice](../interfaces/payment_payment_module.PaymentModule#acceptinvoice)

#### Defined in

[src/payment/payment.module.ts:207](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L207)

___

### rejectInvoice

▸ **rejectInvoice**(`invoice`, `reason`): `Promise`\<[`Invoice`](payment_invoice.Invoice)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`Invoice`](payment_invoice.Invoice) |
| `reason` | `string` |

#### Returns

`Promise`\<[`Invoice`](payment_invoice.Invoice)\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[rejectInvoice](../interfaces/payment_payment_module.PaymentModule#rejectinvoice)

#### Defined in

[src/payment/payment.module.ts:235](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L235)

___

### acceptDebitNote

▸ **acceptDebitNote**(`debitNote`, `allocation`, `amount`): `Promise`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNote`](payment_debit_note.DebitNote) |
| `allocation` | [`Allocation`](payment_allocation.Allocation) |
| `amount` | `string` |

#### Returns

`Promise`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[acceptDebitNote](../interfaces/payment_payment_module.PaymentModule#acceptdebitnote)

#### Defined in

[src/payment/payment.module.ts:251](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L251)

___

### rejectDebitNote

▸ **rejectDebitNote**(`debitNote`, `reason`): `Promise`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNote`](payment_debit_note.DebitNote) |
| `reason` | `string` |

#### Returns

`Promise`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[rejectDebitNote](../interfaces/payment_payment_module.PaymentModule#rejectdebitnote)

#### Defined in

[src/payment/payment.module.ts:279](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L279)

___

### createInvoiceProcessor

▸ **createInvoiceProcessor**(): [`InvoiceProcessor`](payment_InvoiceProcessor.InvoiceProcessor)

Creates an instance of utility class InvoiceProcessor that deals with invoice related use-cases

#### Returns

[`InvoiceProcessor`](payment_InvoiceProcessor.InvoiceProcessor)

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[createInvoiceProcessor](../interfaces/payment_payment_module.PaymentModule#createinvoiceprocessor)

#### Defined in

[src/payment/payment.module.ts:300](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L300)

___

### createAgreementPaymentProcess

▸ **createAgreementPaymentProcess**(`agreement`, `allocation`, `options?`): [`AgreementPaymentProcess`](payment_agreement_payment_process.AgreementPaymentProcess)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](market_agreement_agreement.Agreement) |
| `allocation` | [`Allocation`](payment_allocation.Allocation) |
| `options?` | `Partial`\<[`PaymentProcessOptions`](../interfaces/payment_agreement_payment_process.PaymentProcessOptions)\> |

#### Returns

[`AgreementPaymentProcess`](payment_agreement_payment_process.AgreementPaymentProcess)

#### Implementation of

[PaymentModule](../interfaces/payment_payment_module.PaymentModule).[createAgreementPaymentProcess](../interfaces/payment_payment_module.PaymentModule#createagreementpaymentprocess)

#### Defined in

[src/payment/payment.module.ts:304](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/payment.module.ts#L304)
