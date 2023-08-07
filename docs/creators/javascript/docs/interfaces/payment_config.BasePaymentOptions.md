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

[yajsapi/payment/config.ts:28](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L28)

___

### budget

• `Optional` **budget**: `number`

#### Defined in

[yajsapi/payment/config.ts:29](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L29)

___

### payment

• `Optional` **payment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `driver?` | `string` |
| `network?` | `string` |

#### Defined in

[yajsapi/payment/config.ts:30](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L30)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Defined in

[yajsapi/payment/config.ts:31](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L31)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Defined in

[yajsapi/payment/config.ts:32](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L32)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger.md)

#### Defined in

[yajsapi/payment/config.ts:33](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L33)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Defined in

[yajsapi/payment/config.ts:34](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L34)
