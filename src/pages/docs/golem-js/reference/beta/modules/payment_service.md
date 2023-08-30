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

[src/payment/service.ts:24](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/service.ts#L24)

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

[src/payment/service.ts:25](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/service.ts#L25)
