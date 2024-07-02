---
title: "Interface IPaymentApi"
pageTitle: "Interface IPaymentApi - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface IPaymentApi within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: IPaymentApi

[payment/api](../modules/payment_api).IPaymentApi

## Implemented by

- [`PaymentApiAdapter`](../classes/shared_yagna_adapters_payment_api_adapter.PaymentApiAdapter)

## Table of contents

### Properties

- [receivedInvoices$](payment_api.IPaymentApi#receivedinvoices$)
- [receivedDebitNotes$](payment_api.IPaymentApi#receiveddebitnotes$)

### Methods

- [connect](payment_api.IPaymentApi#connect)
- [getInvoice](payment_api.IPaymentApi#getinvoice)
- [acceptInvoice](payment_api.IPaymentApi#acceptinvoice)
- [rejectInvoice](payment_api.IPaymentApi#rejectinvoice)
- [getDebitNote](payment_api.IPaymentApi#getdebitnote)
- [acceptDebitNote](payment_api.IPaymentApi#acceptdebitnote)
- [rejectDebitNote](payment_api.IPaymentApi#rejectdebitnote)
- [getAllocation](payment_api.IPaymentApi#getallocation)
- [createAllocation](payment_api.IPaymentApi#createallocation)
- [releaseAllocation](payment_api.IPaymentApi#releaseallocation)

## Properties

### receivedInvoices$

• **receivedInvoices$**: `Subject`\<[`Invoice`](../classes/payment_invoice.Invoice)\>

#### Defined in

[src/payment/api.ts:31](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L31)

___

### receivedDebitNotes$

• **receivedDebitNotes$**: `Subject`\<[`DebitNote`](../classes/payment_debit_note.DebitNote)\>

#### Defined in

[src/payment/api.ts:32](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L32)

## Methods

### connect

▸ **connect**(): `Promise`\<`void`\>

Starts the reader logic

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/payment/api.ts:35](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L35)

___

### getInvoice

▸ **getInvoice**(`id`): `Promise`\<[`Invoice`](../classes/payment_invoice.Invoice)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Invoice`](../classes/payment_invoice.Invoice)\>

#### Defined in

[src/payment/api.ts:37](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L37)

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

[src/payment/api.ts:39](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L39)

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

[src/payment/api.ts:41](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L41)

___

### getDebitNote

▸ **getDebitNote**(`id`): `Promise`\<[`DebitNote`](../classes/payment_debit_note.DebitNote)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`DebitNote`](../classes/payment_debit_note.DebitNote)\>

#### Defined in

[src/payment/api.ts:43](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L43)

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

[src/payment/api.ts:45](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L45)

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

[src/payment/api.ts:47](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L47)

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

[src/payment/api.ts:49](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L49)

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

[src/payment/api.ts:51](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L51)

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

[src/payment/api.ts:53](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L53)
