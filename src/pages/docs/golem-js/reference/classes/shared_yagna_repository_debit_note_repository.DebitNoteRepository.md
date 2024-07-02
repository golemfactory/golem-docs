---
title: "Class DebitNoteRepository"
pageTitle: "Class DebitNoteRepository - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DebitNoteRepository within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: DebitNoteRepository

[shared/yagna/repository/debit-note-repository](../modules/shared_yagna_repository_debit_note_repository).DebitNoteRepository

## Implements

- [`IDebitNoteRepository`](../interfaces/payment_debit_note.IDebitNoteRepository)

## Table of contents

### Constructors

- [constructor](shared_yagna_repository_debit_note_repository.DebitNoteRepository#constructor)

### Methods

- [getById](shared_yagna_repository_debit_note_repository.DebitNoteRepository#getbyid)

## Constructors

### constructor

• **new DebitNoteRepository**(`paymentClient`, `marketClient`): [`DebitNoteRepository`](shared_yagna_repository_debit_note_repository.DebitNoteRepository)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentClient` | `RequestorService` |
| `marketClient` | `RequestorService` |

#### Returns

[`DebitNoteRepository`](shared_yagna_repository_debit_note_repository.DebitNoteRepository)

#### Defined in

[src/shared/yagna/repository/debit-note-repository.ts:8](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/repository/debit-note-repository.ts#L8)

## Methods

### getById

▸ **getById**(`id`): `Promise`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`DebitNote`](payment_debit_note.DebitNote)\>

#### Implementation of

[IDebitNoteRepository](../interfaces/payment_debit_note.IDebitNoteRepository).[getById](../interfaces/payment_debit_note.IDebitNoteRepository#getbyid)

#### Defined in

[src/shared/yagna/repository/debit-note-repository.ts:13](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/repository/debit-note-repository.ts#L13)
