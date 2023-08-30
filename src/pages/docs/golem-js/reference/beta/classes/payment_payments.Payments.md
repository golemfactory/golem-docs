# Class: Payments

[payment/payments](../modules/payment_payments.md).Payments

## Hierarchy

- `EventTarget`

  ↳ **`Payments`**

## Table of contents

### Constructors

- [constructor](payment_payments.Payments.md#constructor)

### Methods

- [create](payment_payments.Payments.md#create)
- [unsubscribe](payment_payments.Payments.md#unsubscribe)

## Constructors

### constructor

• **new Payments**(`yagnaApi`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](../modules/utils_yagna_yagna.md#yagnaapi) |
| `options?` | [`PaymentOptions`](../interfaces/payment_payments.PaymentOptions.md) |

#### Overrides

EventTarget.constructor

#### Defined in

[src/payment/payments.ts:26](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/payments.ts#L26)

## Methods

### create

▸ `Static` **create**(`yagnaApi`, `options?`): `Promise`<[`Payments`](payment_payments.Payments.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](../modules/utils_yagna_yagna.md#yagnaapi) |
| `options?` | [`PaymentOptions`](../interfaces/payment_payments.PaymentOptions.md) |

#### Returns

`Promise`<[`Payments`](payment_payments.Payments.md)\>

#### Defined in

[src/payment/payments.ts:22](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/payments.ts#L22)

___

### unsubscribe

▸ **unsubscribe**(): `Promise`<`void`\>

Unsubscribe demand from the market

#### Returns

`Promise`<`void`\>

#### Defined in

[src/payment/payments.ts:39](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/payments.ts#L39)
