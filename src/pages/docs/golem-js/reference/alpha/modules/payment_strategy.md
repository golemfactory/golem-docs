# Module: payment/strategy

## Table of contents

### Functions

- [acceptAllDebitNotesFilter](payment_strategy#acceptalldebitnotesfilter)
- [acceptAllInvoicesFilter](payment_strategy#acceptallinvoicesfilter)
- [acceptMaxAmountDebitNoteFilter](payment_strategy#acceptmaxamountdebitnotefilter)
- [acceptMaxAmountInvoiceFilter](payment_strategy#acceptmaxamountinvoicefilter)

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

[src/payment/strategy.ts:5](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/strategy.ts#L5)

---

### acceptAllInvoicesFilter

▸ **acceptAllInvoicesFilter**(): () => `Promise`<`boolean`\>

Default Invoices filter that accept all invoices without any validation

#### Returns

`fn`

▸ (): `Promise`<`boolean`\>

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/payment/strategy.ts:7](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/strategy.ts#L7)

---

### acceptMaxAmountDebitNoteFilter

▸ **acceptMaxAmountDebitNoteFilter**(`maxAmount`): (`debitNote`: [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO)) => `Promise`<`boolean`\>

A custom filter that only accepts debit notes below a given value

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `maxAmount` | `number` |

#### Returns

`fn`

▸ (`debitNote`): `Promise`<`boolean`\>

##### Parameters

| Name        | Type                                                            |
| :---------- | :-------------------------------------------------------------- |
| `debitNote` | [`DebitNoteDTO`](../interfaces/payment_debit_note.DebitNoteDTO) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/payment/strategy.ts:10](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/strategy.ts#L10)

---

### acceptMaxAmountInvoiceFilter

▸ **acceptMaxAmountInvoiceFilter**(`maxAmount`): (`invoice`: [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO)) => `Promise`<`boolean`\>

A custom filter that only accepts invoices below a given value

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `maxAmount` | `number` |

#### Returns

`fn`

▸ (`invoice`): `Promise`<`boolean`\>

##### Parameters

| Name      | Type                                                     |
| :-------- | :------------------------------------------------------- |
| `invoice` | [`InvoiceDTO`](../interfaces/payment_invoice.InvoiceDTO) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/payment/strategy.ts:14](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/strategy.ts#L14)
