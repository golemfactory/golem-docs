---
title: "Interface IDebitNoteRepository"
pageTitle: "Interface IDebitNoteRepository - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface IDebitNoteRepository within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: IDebitNoteRepository

[payment/debit\_note](../modules/payment_debit_note).IDebitNoteRepository

## Implemented by

- [`DebitNoteRepository`](../classes/shared_yagna_repository_debit_note_repository.DebitNoteRepository)

## Table of contents

### Methods

- [getById](payment_debit_note.IDebitNoteRepository#getbyid)

## Methods

### getById

▸ **getById**(`id`): `Promise`\<[`DebitNote`](../classes/payment_debit_note.DebitNote)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`DebitNote`](../classes/payment_debit_note.DebitNote)\>

#### Defined in

[src/payment/debit_note.ts:7](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/debit_note.ts#L7)
