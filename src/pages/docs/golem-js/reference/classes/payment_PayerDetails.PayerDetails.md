---
title: "Class PayerDetails"
pageTitle: "Class PayerDetails - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class PayerDetails within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: PayerDetails

[payment/PayerDetails](../modules/payment_PayerDetails).PayerDetails

## Table of contents

### Constructors

- [constructor](payment_PayerDetails.PayerDetails#constructor)

### Properties

- [network](payment_PayerDetails.PayerDetails#network)
- [driver](payment_PayerDetails.PayerDetails#driver)
- [address](payment_PayerDetails.PayerDetails#address)
- [token](payment_PayerDetails.PayerDetails#token)

### Methods

- [getPaymentPlatform](payment_PayerDetails.PayerDetails#getpaymentplatform)

## Constructors

### constructor

• **new PayerDetails**(`network`, `driver`, `address`, `token`): [`PayerDetails`](payment_PayerDetails.PayerDetails)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | `string` |
| `driver` | `string` |
| `address` | `string` |
| `token` | `string` & {} \| ``"glm"`` \| ``"tglm"`` |

#### Returns

[`PayerDetails`](payment_PayerDetails.PayerDetails)

#### Defined in

[src/payment/PayerDetails.ts:2](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/PayerDetails.ts#L2)

## Properties

### network

• `Readonly` **network**: `string`

#### Defined in

[src/payment/PayerDetails.ts:3](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/PayerDetails.ts#L3)

___

### driver

• `Readonly` **driver**: `string`

#### Defined in

[src/payment/PayerDetails.ts:4](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/PayerDetails.ts#L4)

___

### address

• `Readonly` **address**: `string`

#### Defined in

[src/payment/PayerDetails.ts:5](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/PayerDetails.ts#L5)

___

### token

• `Readonly` **token**: `string` & {} \| ``"glm"`` \| ``"tglm"``

#### Defined in

[src/payment/PayerDetails.ts:7](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/PayerDetails.ts#L7)

## Methods

### getPaymentPlatform

▸ **getPaymentPlatform**(): `string`

#### Returns

`string`

#### Defined in

[src/payment/PayerDetails.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/PayerDetails.ts#L10)
