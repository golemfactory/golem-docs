# Interface: BasePaymentOptions

[payment/config](../modules/payment_config.md).BasePaymentOptions

## Hierarchy

- **`BasePaymentOptions`**

  ↳ [`PaymentOptions`](payment_payments.PaymentOptions.md)

  ↳ [`PaymentOptions`](payment_service.PaymentOptions.md)

## Table of contents

### Properties

- [yagnaOptions](payment_config.BasePaymentOptions.md#yagnaoptions)
- [budget](payment_config.BasePaymentOptions.md#budget)
- [payment](payment_config.BasePaymentOptions.md#payment)
- [paymentTimeout](payment_config.BasePaymentOptions.md#paymenttimeout)
- [paymentRequestTimeout](payment_config.BasePaymentOptions.md#paymentrequesttimeout)
- [logger](payment_config.BasePaymentOptions.md#logger)
- [eventTarget](payment_config.BasePaymentOptions.md#eventtarget)

## Properties

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

#### Defined in

[src/payment/config.ts:23](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L23)

___

### budget

• `Optional` **budget**: `number`

#### Defined in

[src/payment/config.ts:24](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L24)

___

### payment

• `Optional` **payment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `driver?` | `string` |
| `network?` | `string` |

#### Defined in

[src/payment/config.ts:25](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L25)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Defined in

[src/payment/config.ts:26](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L26)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Defined in

[src/payment/config.ts:27](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L27)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger.md)

#### Defined in

[src/payment/config.ts:28](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L28)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Defined in

[src/payment/config.ts:29](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L29)
