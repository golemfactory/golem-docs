---
title: "Class Payments"
pageTitle: "Class Payments - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Payments within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Payments

[payment/payments](../modules/payment_payments).Payments

## Hierarchy

- `EventTarget`

  ↳ **`Payments`**

## Table of contents

### Constructors

- [constructor](payment_payments.Payments#constructor)

### Methods

- [create](payment_payments.Payments#create)
- [unsubscribe](payment_payments.Payments#unsubscribe)

## Constructors

### constructor

• **new Payments**(`yagnaApi`, `options?`): [`Payments`](payment_payments.Payments)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi) |
| `options?` | [`PaymentOptions`](../interfaces/payment_payments.PaymentOptions) |

#### Returns

[`Payments`](payment_payments.Payments)

#### Overrides

EventTarget.constructor

#### Defined in

[src/payment/payments.ts:28](https://github.com/golemfactory/golem-js/blob/9789a95/src/payment/payments.ts#L28)

## Methods

### create

▸ **create**(`yagnaApi`, `options?`): `Promise`\<[`Payments`](payment_payments.Payments)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi) |
| `options?` | [`PaymentOptions`](../interfaces/payment_payments.PaymentOptions) |

#### Returns

`Promise`\<[`Payments`](payment_payments.Payments)\>

#### Defined in

[src/payment/payments.ts:24](https://github.com/golemfactory/golem-js/blob/9789a95/src/payment/payments.ts#L24)

___

### unsubscribe

▸ **unsubscribe**(): `Promise`\<`unknown`\>

Unsubscribe from collecting payment events.
An error will be thrown when the unsubscribe timeout expires.

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/payment/payments.ts:42](https://github.com/golemfactory/golem-js/blob/9789a95/src/payment/payments.ts#L42)
