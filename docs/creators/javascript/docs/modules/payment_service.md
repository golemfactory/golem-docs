# Module: payment/service

## Table of contents

### Interfaces

- [PaymentOptions](../interfaces/payment_service.PaymentOptions.md)

### Type Aliases

- [DebitNoteFilter](payment_service.md#debitnotefilter)
- [InvoiceFilter](payment_service.md#invoicefilter)

## Type Aliases

### DebitNoteFilter

Ƭ **DebitNoteFilter**: (`debitNote`: [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO.md)) => `Promise`<`boolean`\>

#### Type declaration

▸ (`debitNote`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO.md) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/payment/service.ts:27](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/service.ts#L27)

___

### InvoiceFilter

Ƭ **InvoiceFilter**: (`invoice`: [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO.md)) => `Promise`<`boolean`\>

#### Type declaration

▸ (`invoice`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO.md) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/payment/service.ts:28](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/service.ts#L28)
