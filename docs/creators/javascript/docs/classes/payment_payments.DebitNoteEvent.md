# Class: DebitNoteEvent

[payment/payments](../modules/payment_payments.md).DebitNoteEvent

## Hierarchy

- `Event`

  ↳ **`DebitNoteEvent`**

## Table of contents

### Constructors

- [constructor](payment_payments.DebitNoteEvent.md#constructor)

### Properties

- [debitNote](payment_payments.DebitNoteEvent.md#debitnote)

## Constructors

### constructor

• **new DebitNoteEvent**(`type`, `data`)

Create a new instance of DemandEvent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `any` | A string with the name of the event: |
| `data` | `any` | object with debit note data: |

#### Overrides

Event.constructor

#### Defined in

[yajsapi/payment/payments.ts:141](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/payments.ts#L141)

## Properties

### debitNote

• `Readonly` **debitNote**: [`DebitNote`](payment_debit_note.DebitNote.md)

#### Defined in

[yajsapi/payment/payments.ts:134](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/payments.ts#L134)
