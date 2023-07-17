[JavaScript API reference](../README) / DebitNoteEvent

# Class: DebitNoteEvent

## Hierarchy

- `Event`

  ↳ **`DebitNoteEvent`**

## Table of contents

### Constructors

- [constructor](DebitNoteEvent#constructor)

### Properties

- [debitNote](DebitNoteEvent#debitnote)

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

[payment/payments.ts:141](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/payments.ts#L141)

## Properties

### debitNote

• `Readonly` **debitNote**: [`DebitNote`](DebitNote)

#### Defined in

[payment/payments.ts:134](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/payments.ts#L134)
