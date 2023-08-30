# Interface: PaymentOptions

[payment/service](../modules/payment_service.md).PaymentOptions

## Hierarchy

- [`BasePaymentOptions`](payment_config.BasePaymentOptions.md)

  ↳ **`PaymentOptions`**

## Table of contents

### Properties

- [invoiceFetchingInterval](payment_service.PaymentOptions.md#invoicefetchinginterval)
- [debitNotesFetchingInterval](payment_service.PaymentOptions.md#debitnotesfetchinginterval)
- [payingInterval](payment_service.PaymentOptions.md#payinginterval)
- [maxInvoiceEvents](payment_service.PaymentOptions.md#maxinvoiceevents)
- [maxDebitNotesEvents](payment_service.PaymentOptions.md#maxdebitnotesevents)
- [debitNotesFilter](payment_service.PaymentOptions.md#debitnotesfilter)
- [invoiceFilter](payment_service.PaymentOptions.md#invoicefilter)
- [yagnaOptions](payment_service.PaymentOptions.md#yagnaoptions)
- [budget](payment_service.PaymentOptions.md#budget)
- [payment](payment_service.PaymentOptions.md#payment)
- [paymentTimeout](payment_service.PaymentOptions.md#paymenttimeout)
- [paymentRequestTimeout](payment_service.PaymentOptions.md#paymentrequesttimeout)
- [logger](payment_service.PaymentOptions.md#logger)
- [eventTarget](payment_service.PaymentOptions.md#eventtarget)

## Properties

### invoiceFetchingInterval

• `Optional` **invoiceFetchingInterval**: `number`

Interval for checking new invoices

#### Defined in

[yajsapi/payment/service.ts:12](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/service.ts#L12)

---

### debitNotesFetchingInterval

• `Optional` **debitNotesFetchingInterval**: `number`

Interval for checking new debit notes

#### Defined in

[yajsapi/payment/service.ts:14](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/service.ts#L14)

---

### payingInterval

• `Optional` **payingInterval**: `number`

Interval for processing payments

#### Defined in

[yajsapi/payment/service.ts:16](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/service.ts#L16)

---

### maxInvoiceEvents

• `Optional` **maxInvoiceEvents**: `number`

Maximum number of invoice events per one fetching

#### Defined in

[yajsapi/payment/service.ts:18](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/service.ts#L18)

---

### maxDebitNotesEvents

• `Optional` **maxDebitNotesEvents**: `number`

Maximum number of debit notes events per one fetching

#### Defined in

[yajsapi/payment/service.ts:20](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/service.ts#L20)

---

### debitNotesFilter

• `Optional` **debitNotesFilter**: [`DebitNoteFilter`](../modules/payment_service.md#debitnotefilter)

A custom filter that checks every debit notes coming from providers

#### Defined in

[yajsapi/payment/service.ts:22](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/service.ts#L22)

---

### invoiceFilter

• `Optional` **invoiceFilter**: [`InvoiceFilter`](../modules/payment_service.md#invoicefilter)

A custom filter that checks every invoices coming from providers

#### Defined in

[yajsapi/payment/service.ts:24](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/service.ts#L24)

---

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[yagnaOptions](payment_config.BasePaymentOptions.md#yagnaoptions)

#### Defined in

[yajsapi/payment/config.ts:28](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L28)

---

### budget

• `Optional` **budget**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[budget](payment_config.BasePaymentOptions.md#budget)

#### Defined in

[yajsapi/payment/config.ts:29](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L29)

---

### payment

• `Optional` **payment**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `driver?`  | `string` |
| `network?` | `string` |

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[payment](payment_config.BasePaymentOptions.md#payment)

#### Defined in

[yajsapi/payment/config.ts:30](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L30)

---

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[paymentTimeout](payment_config.BasePaymentOptions.md#paymenttimeout)

#### Defined in

[yajsapi/payment/config.ts:31](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L31)

---

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[paymentRequestTimeout](payment_config.BasePaymentOptions.md#paymentrequesttimeout)

#### Defined in

[yajsapi/payment/config.ts:32](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L32)

---

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger.md)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[logger](payment_config.BasePaymentOptions.md#logger)

#### Defined in

[yajsapi/payment/config.ts:33](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L33)

---

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[eventTarget](payment_config.BasePaymentOptions.md#eventtarget)

#### Defined in

[yajsapi/payment/config.ts:34](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/payment/config.ts#L34)
