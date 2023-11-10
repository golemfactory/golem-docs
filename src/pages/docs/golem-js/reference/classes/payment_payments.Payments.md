---
title: "Class Payments - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Payments within the golem-js SDK for the Golem Network."
type: "reference"
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

[src/payment/payments.ts:26](https://github.com/golemfactory/golem-js/blob/a3b94ca/src/payment/payments.ts#L26)

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

[src/payment/payments.ts:22](https://github.com/golemfactory/golem-js/blob/a3b94ca/src/payment/payments.ts#L22)

___

### unsubscribe

▸ **unsubscribe**(): `Promise`\<`void`\>

Unsubscribe demand from the market

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/payment/payments.ts:39](https://github.com/golemfactory/golem-js/blob/a3b94ca/src/payment/payments.ts#L39)
