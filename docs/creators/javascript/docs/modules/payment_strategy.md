# Module: payment/strategy

## Table of contents

### Functions

- [acceptAllDebitNotesFilter](payment_strategy.md#acceptalldebitnotesfilter)
- [acceptAllInvoicesFilter](payment_strategy.md#acceptallinvoicesfilter)
- [acceptMaxAmountDebitNoteFilter](payment_strategy.md#acceptmaxamountdebitnotefilter)
- [acceptMaxAmountInvoiceFilter](payment_strategy.md#acceptmaxamountinvoicefilter)

## Functions

### acceptAllDebitNotesFilter

▸ **acceptAllDebitNotesFilter**(): () => `Promise`<`boolean`\>

Default DebitNotes filter that accept all debit notes without any validation

#### Returns

`fn`

▸ (): `Promise`<`boolean`\>

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/payment/strategy.ts:5](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/strategy.ts#L5)

___

### acceptAllInvoicesFilter

▸ **acceptAllInvoicesFilter**(): () => `Promise`<`boolean`\>

Default Invoices filter that accept all invoices without any validation

#### Returns

`fn`

▸ (): `Promise`<`boolean`\>

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/payment/strategy.ts:7](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/strategy.ts#L7)

___

### acceptMaxAmountDebitNoteFilter

▸ **acceptMaxAmountDebitNoteFilter**(`maxAmount`): (`debitNote`: [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO.md)) => `Promise`<`boolean`\>

A custom filter that only accepts debit notes below a given value

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxAmount` | `number` |

#### Returns

`fn`

▸ (`debitNote`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO.md) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/payment/strategy.ts:10](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/strategy.ts#L10)

___

### acceptMaxAmountInvoiceFilter

▸ **acceptMaxAmountInvoiceFilter**(`maxAmount`): (`invoice`: [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO.md)) => `Promise`<`boolean`\>

A custom filter that only accepts invoices below a given value

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxAmount` | `number` |

#### Returns

`fn`

▸ (`invoice`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO.md) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/payment/strategy.ts:14](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/strategy.ts#L14)
