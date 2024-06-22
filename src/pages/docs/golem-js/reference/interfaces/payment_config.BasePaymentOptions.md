---
title: "Interface BasePaymentOptions"
pageTitle: "Interface BasePaymentOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface BasePaymentOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: BasePaymentOptions

[payment/config](../modules/payment_config).BasePaymentOptions

## Hierarchy

- **`BasePaymentOptions`**

  ↳ [`AllocationOptions`](payment_allocation.AllocationOptions)

  ↳ [`PaymentOptions`](payment_service.PaymentOptions)

## Table of contents

### Properties

- [yagnaOptions](payment_config.BasePaymentOptions#yagnaoptions)
- [budget](payment_config.BasePaymentOptions#budget)
- [payment](payment_config.BasePaymentOptions#payment)
- [paymentTimeout](payment_config.BasePaymentOptions#paymenttimeout)
- [paymentRequestTimeout](payment_config.BasePaymentOptions#paymentrequesttimeout)
- [unsubscribeTimeoutMs](payment_config.BasePaymentOptions#unsubscribetimeoutms)
- [logger](payment_config.BasePaymentOptions#logger)

## Properties

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/shared_yagna_yagnaApi#yagnaoptions)

#### Defined in

[src/payment/config.ts:4](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L4)

___

### budget

• `Optional` **budget**: `number`

#### Defined in

[src/payment/config.ts:5](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L5)

___

### payment

• `Optional` **payment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `driver?` | `string` |
| `network?` | `string` |

#### Defined in

[src/payment/config.ts:6](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L6)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Defined in

[src/payment/config.ts:7](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L7)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Defined in

[src/payment/config.ts:8](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L8)

___

### unsubscribeTimeoutMs

• `Optional` **unsubscribeTimeoutMs**: `number`

#### Defined in

[src/payment/config.ts:9](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L9)

___

### logger

• `Optional` **logger**: [`Logger`](shared_utils_logger_logger.Logger)

#### Defined in

[src/payment/config.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L10)
