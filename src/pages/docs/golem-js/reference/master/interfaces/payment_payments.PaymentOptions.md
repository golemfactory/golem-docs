# Interface: PaymentOptions

[payment/payments](../modules/payment_payments).PaymentOptions

## Hierarchy

- [`BasePaymentOptions`](payment_config.BasePaymentOptions)

  ↳ **`PaymentOptions`**

## Table of contents

### Properties

- [invoiceFetchingInterval](payment_payments.PaymentOptions#invoicefetchinginterval)
- [debitNotesFetchingInterval](payment_payments.PaymentOptions#debitnotesfetchinginterval)
- [maxInvoiceEvents](payment_payments.PaymentOptions#maxinvoiceevents)
- [maxDebitNotesEvents](payment_payments.PaymentOptions#maxdebitnotesevents)
- [yagnaOptions](payment_payments.PaymentOptions#yagnaoptions)
- [budget](payment_payments.PaymentOptions#budget)
- [payment](payment_payments.PaymentOptions#payment)
- [paymentTimeout](payment_payments.PaymentOptions#paymenttimeout)
- [paymentRequestTimeout](payment_payments.PaymentOptions#paymentrequesttimeout)
- [logger](payment_payments.PaymentOptions#logger)
- [eventTarget](payment_payments.PaymentOptions#eventtarget)

## Properties

### invoiceFetchingInterval

• `Optional` **invoiceFetchingInterval**: `number`

#### Defined in

[src/payment/payments.ts:8](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/payments.ts#L8)

___

### debitNotesFetchingInterval

• `Optional` **debitNotesFetchingInterval**: `number`

#### Defined in

[src/payment/payments.ts:9](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/payments.ts#L9)

___

### maxInvoiceEvents

• `Optional` **maxInvoiceEvents**: `number`

#### Defined in

[src/payment/payments.ts:10](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/payments.ts#L10)

___

### maxDebitNotesEvents

• `Optional` **maxDebitNotesEvents**: `number`

#### Defined in

[src/payment/payments.ts:11](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/payments.ts#L11)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor#yagnaoptions)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[yagnaOptions](payment_config.BasePaymentOptions#yagnaoptions)

#### Defined in

[src/payment/config.ts:26](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L26)

___

### budget

• `Optional` **budget**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[budget](payment_config.BasePaymentOptions#budget)

#### Defined in

[src/payment/config.ts:27](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L27)

___

### payment

• `Optional` **payment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `driver?` | `string` |
| `network?` | `string` |

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[payment](payment_config.BasePaymentOptions#payment)

#### Defined in

[src/payment/config.ts:28](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L28)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[paymentTimeout](payment_config.BasePaymentOptions#paymenttimeout)

#### Defined in

[src/payment/config.ts:29](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L29)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[paymentRequestTimeout](payment_config.BasePaymentOptions#paymentrequesttimeout)

#### Defined in

[src/payment/config.ts:30](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L30)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[logger](payment_config.BasePaymentOptions#logger)

#### Defined in

[src/payment/config.ts:31](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L31)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[eventTarget](payment_config.BasePaymentOptions#eventtarget)

#### Defined in

[src/payment/config.ts:32](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L32)
