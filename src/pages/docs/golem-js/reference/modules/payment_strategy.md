---
title: "Module payment/strategy"
pageTitle: "Module payment/strategy - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module payment/strategy within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: payment/strategy

## Table of contents

### Functions

- [acceptAllDebitNotesFilter](payment_strategy#acceptalldebitnotesfilter)
- [acceptAllInvoicesFilter](payment_strategy#acceptallinvoicesfilter)
- [acceptMaxAmountDebitNoteFilter](payment_strategy#acceptmaxamountdebitnotefilter)
- [acceptMaxAmountInvoiceFilter](payment_strategy#acceptmaxamountinvoicefilter)

## Functions

### acceptAllDebitNotesFilter

▸ **acceptAllDebitNotesFilter**(): () => `Promise`\<`boolean`\>

Default DebitNotes filter that accept all debit notes without any validation

#### Returns

`fn`

▸ (): `Promise`\<`boolean`\>

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/payment/strategy.ts:6](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/strategy.ts#L6)

___

### acceptAllInvoicesFilter

▸ **acceptAllInvoicesFilter**(): () => `Promise`\<`boolean`\>

Default Invoices filter that accept all invoices without any validation

#### Returns

`fn`

▸ (): `Promise`\<`boolean`\>

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/payment/strategy.ts:9](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/strategy.ts#L9)

___

### acceptMaxAmountDebitNoteFilter

▸ **acceptMaxAmountDebitNoteFilter**(`maxAmount`): (`debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote)) => `Promise`\<`boolean`\>

A custom filter that only accepts debit notes below a given value

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxAmount` | `number` |

#### Returns

`fn`

▸ (`debitNote`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNote`](../classes/payment_debit_note.DebitNote) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/payment/strategy.ts:12](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/strategy.ts#L12)

___

### acceptMaxAmountInvoiceFilter

▸ **acceptMaxAmountInvoiceFilter**(`maxAmount`): (`invoice`: [`Invoice`](../classes/payment_invoice.Invoice)) => `Promise`\<`boolean`\>

A custom filter that only accepts invoices below a given value

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxAmount` | `number` |

#### Returns

`fn`

▸ (`invoice`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`Invoice`](../classes/payment_invoice.Invoice) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/payment/strategy.ts:16](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/strategy.ts#L16)
