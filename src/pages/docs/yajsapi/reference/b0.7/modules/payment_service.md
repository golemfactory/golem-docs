[JavaScript API reference](../README) / [Exports](../modules) / payment/service

# Module: payment/service

## Table of contents

### Type Aliases

- [DebitNoteFilter](payment_service#debitnotefilter)
- [InvoiceFilter](payment_service#invoicefilter)

## Type Aliases

### DebitNoteFilter

Ƭ **DebitNoteFilter**: (`debitNote`: [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO)) => `Promise`<`boolean`\>

#### Type declaration

▸ (`debitNote`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/payment/service.ts:30](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/service.ts#L30)

___

### InvoiceFilter

Ƭ **InvoiceFilter**: (`invoice`: [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO)) => `Promise`<`boolean`\>

#### Type declaration

▸ (`invoice`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/payment/service.ts:31](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/service.ts#L31)
