# Class: InvoiceEvent

[payment/payments](../modules/payment_payments.md).InvoiceEvent

## Hierarchy

- `Event`

  ↳ **`InvoiceEvent`**

## Table of contents

### Constructors

- [constructor](payment_payments.InvoiceEvent.md#constructor)

### Properties

- [invoice](payment_payments.InvoiceEvent.md#invoice)

## Constructors

### constructor

• **new InvoiceEvent**(`type`, `data`)

Create a new instance of DemandEvent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `any` | A string with the name of the event: |
| `data` | `any` | object with invoice data: |

#### Overrides

Event.constructor

#### Defined in

[yajsapi/payment/payments.ts:124](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/payments.ts#L124)

## Properties

### invoice

• `Readonly` **invoice**: [`Invoice`](payment_invoice.Invoice.md)

#### Defined in

[yajsapi/payment/payments.ts:117](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/payments.ts#L117)
