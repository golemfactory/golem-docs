---
title: "Class Payments"
pageTitle: "Class Payments - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Payments within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Payments

[payment/payments](../modules/payment_payments).Payments

## Table of contents

### Constructors

- [constructor](payment_payments.Payments#constructor)

### Properties

- [events](payment_payments.Payments#events)

### Methods

- [create](payment_payments.Payments#create)
- [unsubscribe](payment_payments.Payments#unsubscribe)

## Constructors

### constructor

• **new Payments**(`yagnaApi`, `options?`): [`Payments`](payment_payments.Payments)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](utils_yagna_yagnaApi.YagnaApi) |
| `options?` | [`PaymentOptions`](../interfaces/payment_payments.PaymentOptions) |

#### Returns

[`Payments`](payment_payments.Payments)

#### Defined in

[src/payment/payments.ts:33](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/payments.ts#L33)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`PaymentEvents`](../interfaces/payment_payments.PaymentEvents), `any`\>

#### Defined in

[src/payment/payments.ts:27](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/payments.ts#L27)

## Methods

### create

▸ **create**(`yagnaApi`, `options?`): `Promise`\<[`Payments`](payment_payments.Payments)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](utils_yagna_yagnaApi.YagnaApi) |
| `options?` | [`PaymentOptions`](../interfaces/payment_payments.PaymentOptions) |

#### Returns

`Promise`\<[`Payments`](payment_payments.Payments)\>

#### Defined in

[src/payment/payments.ts:29](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/payments.ts#L29)

___

### unsubscribe

▸ **unsubscribe**(): `Promise`\<`unknown`\>

Unsubscribe from collecting payment events.
An error will be thrown when the unsubscribe timeout expires.

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/payment/payments.ts:46](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/payments.ts#L46)
