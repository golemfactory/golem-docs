# Interface: PaymentOptions

[payment/payments](../modules/payment_payments.md).PaymentOptions

## Hierarchy

- [`BasePaymentOptions`](payment_config.BasePaymentOptions.md)

  ↳ **`PaymentOptions`**

## Table of contents

### Properties

- [invoiceFetchingInterval](payment_payments.PaymentOptions.md#invoicefetchinginterval)
- [debitNotesFetchingInterval](payment_payments.PaymentOptions.md#debitnotesfetchinginterval)
- [payingInterval](payment_payments.PaymentOptions.md#payinginterval)
- [maxInvoiceEvents](payment_payments.PaymentOptions.md#maxinvoiceevents)
- [maxDebitNotesEvents](payment_payments.PaymentOptions.md#maxdebitnotesevents)
- [yagnaOptions](payment_payments.PaymentOptions.md#yagnaoptions)
- [budget](payment_payments.PaymentOptions.md#budget)
- [payment](payment_payments.PaymentOptions.md#payment)
- [paymentTimeout](payment_payments.PaymentOptions.md#paymenttimeout)
- [paymentRequestTimeout](payment_payments.PaymentOptions.md#paymentrequesttimeout)
- [logger](payment_payments.PaymentOptions.md#logger)
- [eventTarget](payment_payments.PaymentOptions.md#eventtarget)

## Properties

### invoiceFetchingInterval

• `Optional` **invoiceFetchingInterval**: `number`

#### Defined in

[yajsapi/payment/payments.ts:8](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/payments.ts#L8)

___

### debitNotesFetchingInterval

• `Optional` **debitNotesFetchingInterval**: `number`

#### Defined in

[yajsapi/payment/payments.ts:9](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/payments.ts#L9)

___

### payingInterval

• `Optional` **payingInterval**: `number`

#### Defined in

[yajsapi/payment/payments.ts:10](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/payments.ts#L10)

___

### maxInvoiceEvents

• `Optional` **maxInvoiceEvents**: `number`

#### Defined in

[yajsapi/payment/payments.ts:11](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/payments.ts#L11)

___

### maxDebitNotesEvents

• `Optional` **maxDebitNotesEvents**: `number`

#### Defined in

[yajsapi/payment/payments.ts:12](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/payments.ts#L12)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[yagnaOptions](payment_config.BasePaymentOptions.md#yagnaoptions)

#### Defined in

[yajsapi/payment/config.ts:28](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L28)

___

### budget

• `Optional` **budget**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[budget](payment_config.BasePaymentOptions.md#budget)

#### Defined in

[yajsapi/payment/config.ts:29](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L29)

___

### payment

• `Optional` **payment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `driver?` | `string` |
| `network?` | `string` |

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[payment](payment_config.BasePaymentOptions.md#payment)

#### Defined in

[yajsapi/payment/config.ts:30](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L30)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[paymentTimeout](payment_config.BasePaymentOptions.md#paymenttimeout)

#### Defined in

[yajsapi/payment/config.ts:31](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L31)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[paymentRequestTimeout](payment_config.BasePaymentOptions.md#paymentrequesttimeout)

#### Defined in

[yajsapi/payment/config.ts:32](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L32)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger.md)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[logger](payment_config.BasePaymentOptions.md#logger)

#### Defined in

[yajsapi/payment/config.ts:33](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L33)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[eventTarget](payment_config.BasePaymentOptions.md#eventtarget)

#### Defined in

[yajsapi/payment/config.ts:34](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L34)
