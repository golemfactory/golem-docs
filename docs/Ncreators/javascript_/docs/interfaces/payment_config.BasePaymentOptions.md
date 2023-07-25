# Interface: BasePaymentOptions

[payment/config](../modules/payment_config.md).BasePaymentOptions

## Hierarchy

- **`BasePaymentOptions`**

  ↳ [`AllocationOptions`](payment_allocation.AllocationOptions.md)

  ↳ [`PaymentOptions`](payment_payments.PaymentOptions.md)

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

[yajsapi/payment/config.ts:26](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/config.ts#L26)

___

### budget

• `Optional` **budget**: `number`

#### Defined in

[yajsapi/payment/config.ts:27](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/config.ts#L27)

___

### payment

• `Optional` **payment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `driver?` | `string` |
| `network?` | `string` |

#### Defined in

[yajsapi/payment/config.ts:28](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/config.ts#L28)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Defined in

[yajsapi/payment/config.ts:29](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/config.ts#L29)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Defined in

[yajsapi/payment/config.ts:30](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/config.ts#L30)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger.Logger.md)

#### Defined in

[yajsapi/payment/config.ts:31](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/config.ts#L31)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Defined in

[yajsapi/payment/config.ts:32](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/config.ts#L32)
