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

[src/payment/config.ts:23](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L23)

---

### budget

• `Optional` **budget**: `number`

#### Defined in

[src/payment/config.ts:24](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L24)

---

### payment

• `Optional` **payment**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `driver?`  | `string` |
| `network?` | `string` |

#### Defined in

[src/payment/config.ts:25](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L25)

---

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Defined in

[src/payment/config.ts:26](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L26)

---

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Defined in

[src/payment/config.ts:27](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L27)

---

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

#### Defined in

[src/payment/config.ts:28](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L28)

---

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Defined in

[src/payment/config.ts:29](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L29)