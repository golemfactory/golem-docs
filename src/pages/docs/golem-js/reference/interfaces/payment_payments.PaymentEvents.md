---
title: "Interface PaymentEvents"
pageTitle: "Interface PaymentEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface PaymentEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: PaymentEvents

[payment/payments](../modules/payment_payments).PaymentEvents

## Table of contents

### Properties

- [invoiceReceived](payment_payments.PaymentEvents#invoicereceived)
- [debitNoteReceived](payment_payments.PaymentEvents#debitnotereceived)
- [unsubscribed](payment_payments.PaymentEvents#unsubscribed)

## Properties

### invoiceReceived

• **invoiceReceived**: (`invoice`: `Invoice`) => `void`

#### Type declaration

▸ (`invoice`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | `Invoice` |

##### Returns

`void`

#### Defined in

[src/payment/payments.ts:9](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/payments.ts#L9)

___

### debitNoteReceived

• **debitNoteReceived**: (`debitNote`: `DebitNote`) => `void`

#### Type declaration

▸ (`debitNote`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | `DebitNote` |

##### Returns

`void`

#### Defined in

[src/payment/payments.ts:10](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/payments.ts#L10)

___

### unsubscribed

• **unsubscribed**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/payment/payments.ts:11](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/payments.ts#L11)
