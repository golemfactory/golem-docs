---
title: "Module payment/service - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module payment/service within the golem-js SDK for the Golem Network."
type: "reference"
---
# Module: payment/service

## Table of contents

### Interfaces

- [PaymentOptions](../interfaces/payment_service.PaymentOptions)

### Type Aliases

- [DebitNoteFilter](payment_service#debitnotefilter)
- [InvoiceFilter](payment_service#invoicefilter)

## Type Aliases

### DebitNoteFilter

Ƭ **DebitNoteFilter**: (`debitNote`: [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO)) => `Promise`\<`boolean`\>

#### Type declaration

▸ (`debitNote`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/payment/service.ts:24](https://github.com/golemfactory/golem-js/blob/effec9a/src/payment/service.ts#L24)

___

### InvoiceFilter

Ƭ **InvoiceFilter**: (`invoice`: [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO)) => `Promise`\<`boolean`\>

#### Type declaration

▸ (`invoice`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/payment/service.ts:25](https://github.com/golemfactory/golem-js/blob/effec9a/src/payment/service.ts#L25)
