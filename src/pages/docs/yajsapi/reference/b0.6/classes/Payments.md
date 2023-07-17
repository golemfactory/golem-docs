[JavaScript API reference](../README) / Payments

# Class: Payments

## Hierarchy

- `EventTarget`

  ↳ **`Payments`**

## Table of contents

### Constructors

- [constructor](Payments#constructor)

### Methods

- [create](Payments#create)
- [unsubscribe](Payments#unsubscribe)

## Constructors

### constructor

• **new Payments**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `PaymentOptions` |

#### Overrides

EventTarget.constructor

#### Defined in

[payment/payments.ts:27](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/payments.ts#L27)

## Methods

### create

▸ `Static` **create**(`options?`): `Promise`<[`Payments`](Payments)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `PaymentOptions` |

#### Returns

`Promise`<[`Payments`](Payments)\>

#### Defined in

[payment/payments.ts:23](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/payments.ts#L23)

___

### unsubscribe

▸ **unsubscribe**(): `Promise`<`void`\>

Unsubscribe demand from the market

#### Returns

`Promise`<`void`\>

#### Defined in

[payment/payments.ts:37](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/payments.ts#L37)
