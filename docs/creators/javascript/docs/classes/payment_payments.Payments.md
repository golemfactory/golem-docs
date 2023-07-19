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

• **new Payments**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`PaymentOptions`](../interfaces/payment_payments.PaymentOptions.md) |

#### Overrides

EventTarget.constructor

#### Defined in

[yajsapi/payment/payments.ts:27](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/payments.ts#L27)

## Methods

### create

▸ `Static` **create**(`options?`): `Promise`<[`Payments`](payment_payments.Payments.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`PaymentOptions`](../interfaces/payment_payments.PaymentOptions.md) |

#### Returns

`Promise`<[`Payments`](payment_payments.Payments.md)\>

#### Defined in

[yajsapi/payment/payments.ts:23](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/payments.ts#L23)

___

### unsubscribe

▸ **unsubscribe**(): `Promise`<`void`\>

Unsubscribe demand from the market

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/payment/payments.ts:37](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/payments.ts#L37)
