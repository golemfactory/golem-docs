---
title: "Class PaymentApiAdapter"
pageTitle: "Class PaymentApiAdapter - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class PaymentApiAdapter within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: PaymentApiAdapter

[shared/yagna/adapters/payment-api-adapter](../modules/shared_yagna_adapters_payment_api_adapter).PaymentApiAdapter

## Implements

- [`IPaymentApi`](../interfaces/payment_api.IPaymentApi)

## Table of contents

### Constructors

- [constructor](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#constructor)

### Properties

- [receivedInvoices$](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#receivedinvoices$)
- [receivedDebitNotes$](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#receiveddebitnotes$)

### Methods

- [connect](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#connect)
- [getInvoice](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#getinvoice)
- [getDebitNote](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#getdebitnote)
- [acceptInvoice](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#acceptinvoice)
- [rejectInvoice](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#rejectinvoice)
- [acceptDebitNote](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#acceptdebitnote)
- [rejectDebitNote](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#rejectdebitnote)
- [getAllocation](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#getallocation)
- [createAllocation](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#createallocation)
- [releaseAllocation](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter#releaseallocation)

## Constructors

### constructor

• **new PaymentApiAdapter**(`yagna`, `invoiceRepo`, `debitNoteRepo`, `logger`): [`PaymentApiAdapter`](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagna` | [`YagnaApi`](shared_yagna_yagnaApi.YagnaApi) |
| `invoiceRepo` | [`IInvoiceRepository`](../interfaces/payment_invoice.IInvoiceRepository) |
| `debitNoteRepo` | [`IDebitNoteRepository`](../interfaces/payment_debit_note.IDebitNoteRepository) |
| `logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |

#### Returns

[`PaymentApiAdapter`](shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:21](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L21)

## Properties

### receivedInvoices$

• **receivedInvoices$**: `Subject`\<[`Invoice`](payment_invoice.Invoice)\>

#### Implementation of

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[receivedInvoices$](../interfaces/payment_api.IPaymentApi#receivedinvoices$)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:17](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L17)

___

### receivedDebitNotes$

• **receivedDebitNotes$**: `Subject`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Implementation of

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[receivedDebitNotes$](../interfaces/payment_api.IPaymentApi#receiveddebitnotes$)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:19](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L19)

## Methods

### connect

▸ **connect**(): `Promise`\<`void`\>

Starts the reader logic

#### Returns

`Promise`\<`void`\>

#### Implementation of

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[connect](../interfaces/payment_api.IPaymentApi#connect)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:28](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L28)

___

### getInvoice

▸ **getInvoice**(`id`): `Promise`\<[`Invoice`](payment_invoice.Invoice)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Invoice`](payment_invoice.Invoice)\>

#### Implementation of

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[getInvoice](../interfaces/payment_api.IPaymentApi#getinvoice)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:66](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L66)

___

### getDebitNote

▸ **getDebitNote**(`id`): `Promise`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Implementation of

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[getDebitNote](../interfaces/payment_api.IPaymentApi#getdebitnote)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:70](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L70)

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

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[acceptInvoice](../interfaces/payment_api.IPaymentApi#acceptinvoice)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:74](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L74)

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

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[rejectInvoice](../interfaces/payment_api.IPaymentApi#rejectinvoice)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:93](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L93)

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

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[acceptDebitNote](../interfaces/payment_api.IPaymentApi#acceptdebitnote)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:113](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L113)

___

### rejectDebitNote

▸ **rejectDebitNote**(`debitNote`): `Promise`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNote`](payment_debit_note.DebitNote) |

#### Returns

`Promise`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Implementation of

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[rejectDebitNote](../interfaces/payment_api.IPaymentApi#rejectdebitnote)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:132](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L132)

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

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[getAllocation](../interfaces/payment_api.IPaymentApi#getallocation)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:155](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L155)

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

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[createAllocation](../interfaces/payment_api.IPaymentApi#createallocation)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:171](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L171)

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

[IPaymentApi](../interfaces/payment_api.IPaymentApi).[releaseAllocation](../interfaces/payment_api.IPaymentApi#releaseallocation)

#### Defined in

[src/shared/yagna/adapters/payment-api-adapter.ts:209](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/payment-api-adapter.ts#L209)
