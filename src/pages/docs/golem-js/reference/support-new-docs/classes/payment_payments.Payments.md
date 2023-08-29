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

• **new Payments**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`PaymentOptions`](../interfaces/payment_payments.PaymentOptions) |

#### Overrides

EventTarget.constructor

#### Defined in

[src/payment/payments.ts:27](https://github.com/golemfactory/yajsapi/blob/7987f19/src/payment/payments.ts#L27)

## Methods

### create

▸ `Static` **create**(`options?`): `Promise`<[`Payments`](payment_payments.Payments)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`PaymentOptions`](../interfaces/payment_payments.PaymentOptions) |

#### Returns

`Promise`<[`Payments`](payment_payments.Payments)\>

#### Defined in

[src/payment/payments.ts:23](https://github.com/golemfactory/yajsapi/blob/7987f19/src/payment/payments.ts#L23)

___

### unsubscribe

▸ **unsubscribe**(): `Promise`<`void`\>

Unsubscribe demand from the market

#### Returns

`Promise`<`void`\>

#### Defined in

[src/payment/payments.ts:37](https://github.com/golemfactory/yajsapi/blob/7987f19/src/payment/payments.ts#L37)
