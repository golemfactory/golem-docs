---
title: "Module payment/service"
pageTitle: "Module payment/service - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module payment/service within the golem-js SDK for the Golem Network."
type: "JS API Reference"
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

Ƭ **DebitNoteFilter**: (`debitNote`: [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO)) => `Promise`\<`boolean`\> \| `boolean`

#### Type declaration

▸ (`debitNote`): `Promise`\<`boolean`\> \| `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO) |

##### Returns

`Promise`\<`boolean`\> \| `boolean`

#### Defined in

[src/payment/service.ts:26](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/payment/service.ts#L26)

___

### InvoiceFilter

Ƭ **InvoiceFilter**: (`invoice`: [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO)) => `Promise`\<`boolean`\> \| `boolean`

#### Type declaration

▸ (`invoice`): `Promise`\<`boolean`\> \| `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO) |

##### Returns

`Promise`\<`boolean`\> \| `boolean`

#### Defined in

[src/payment/service.ts:27](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/payment/service.ts#L27)
