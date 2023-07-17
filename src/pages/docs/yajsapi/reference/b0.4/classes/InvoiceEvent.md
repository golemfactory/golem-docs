[JavaScript API reference](../README) / InvoiceEvent

# Class: InvoiceEvent

## Hierarchy

- `Event`

  ↳ **`InvoiceEvent`**

## Table of contents

### Constructors

- [constructor](InvoiceEvent#constructor)

### Properties

- [invoice](InvoiceEvent#invoice)

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

[payment/payments.ts:124](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/payments.ts#L124)

## Properties

### invoice

• `Readonly` **invoice**: [`Invoice`](Invoice)

#### Defined in

[payment/payments.ts:117](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/payments.ts#L117)
