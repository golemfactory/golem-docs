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

  ↳ [`PaymentOptions`](payment_payments.PaymentOptions)

  ↳ [`PaymentOptions`](payment_service.PaymentOptions)

## Table of contents

### Properties

- [yagnaOptions](payment_config.BasePaymentOptions#yagnaoptions)
- [budget](payment_config.BasePaymentOptions#budget)
- [payment](payment_config.BasePaymentOptions#payment)
- [paymentTimeout](payment_config.BasePaymentOptions#paymenttimeout)
- [paymentRequestTimeout](payment_config.BasePaymentOptions#paymentrequesttimeout)
- [logger](payment_config.BasePaymentOptions#logger)
- [eventTarget](payment_config.BasePaymentOptions#eventtarget)

## Properties

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor#yagnaoptions)

#### Defined in

[src/payment/config.ts:23](https://github.com/golemfactory/golem-js/blob/69e0610/src/payment/config.ts#L23)

___

### budget

• `Optional` **budget**: `number`

#### Defined in

[src/payment/config.ts:24](https://github.com/golemfactory/golem-js/blob/69e0610/src/payment/config.ts#L24)

___

### payment

• `Optional` **payment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `driver?` | `string` |
| `network?` | `string` |

#### Defined in

[src/payment/config.ts:25](https://github.com/golemfactory/golem-js/blob/69e0610/src/payment/config.ts#L25)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Defined in

[src/payment/config.ts:26](https://github.com/golemfactory/golem-js/blob/69e0610/src/payment/config.ts#L26)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Defined in

[src/payment/config.ts:27](https://github.com/golemfactory/golem-js/blob/69e0610/src/payment/config.ts#L27)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

#### Defined in

[src/payment/config.ts:28](https://github.com/golemfactory/golem-js/blob/69e0610/src/payment/config.ts#L28)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Defined in

[src/payment/config.ts:29](https://github.com/golemfactory/golem-js/blob/69e0610/src/payment/config.ts#L29)
