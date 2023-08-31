# Interface: PaymentOptions

[payment/service](../modules/payment_service).PaymentOptions

## Hierarchy

- [`BasePaymentOptions`](payment_config.BasePaymentOptions)

  ↳ **`PaymentOptions`**

## Table of contents

### Properties

- [invoiceFetchingInterval](payment_service.PaymentOptions#invoicefetchinginterval)
- [debitNotesFetchingInterval](payment_service.PaymentOptions#debitnotesfetchinginterval)
- [maxInvoiceEvents](payment_service.PaymentOptions#maxinvoiceevents)
- [maxDebitNotesEvents](payment_service.PaymentOptions#maxdebitnotesevents)
- [debitNotesFilter](payment_service.PaymentOptions#debitnotesfilter)
- [invoiceFilter](payment_service.PaymentOptions#invoicefilter)
- [yagnaOptions](payment_service.PaymentOptions#yagnaoptions)
- [budget](payment_service.PaymentOptions#budget)
- [payment](payment_service.PaymentOptions#payment)
- [paymentTimeout](payment_service.PaymentOptions#paymenttimeout)
- [paymentRequestTimeout](payment_service.PaymentOptions#paymentrequesttimeout)
- [logger](payment_service.PaymentOptions#logger)
- [eventTarget](payment_service.PaymentOptions#eventtarget)

## Properties

### invoiceFetchingInterval

• `Optional` **invoiceFetchingInterval**: `number`

Interval for checking new invoices

#### Defined in

[src/payment/service.ts:12](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/service.ts#L12)

___

### debitNotesFetchingInterval

• `Optional` **debitNotesFetchingInterval**: `number`

Interval for checking new debit notes

#### Defined in

[src/payment/service.ts:14](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/service.ts#L14)

___

### maxInvoiceEvents

• `Optional` **maxInvoiceEvents**: `number`

Maximum number of invoice events per one fetching

#### Defined in

[src/payment/service.ts:16](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/service.ts#L16)

___

### maxDebitNotesEvents

• `Optional` **maxDebitNotesEvents**: `number`

Maximum number of debit notes events per one fetching

#### Defined in

[src/payment/service.ts:18](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/service.ts#L18)

___

### debitNotesFilter

• `Optional` **debitNotesFilter**: [`DebitNoteFilter`](../modules/payment_service#debitnotefilter)

A custom filter that checks every debit notes coming from providers

#### Defined in

[src/payment/service.ts:20](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/service.ts#L20)

___

### invoiceFilter

• `Optional` **invoiceFilter**: [`InvoiceFilter`](../modules/payment_service#invoicefilter)

A custom filter that checks every invoices coming from providers

#### Defined in

[src/payment/service.ts:22](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/service.ts#L22)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor#yagnaoptions)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[yagnaOptions](payment_config.BasePaymentOptions#yagnaoptions)

#### Defined in

[src/payment/config.ts:26](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/config.ts#L26)

___

### budget

• `Optional` **budget**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[budget](payment_config.BasePaymentOptions#budget)

#### Defined in

[src/payment/config.ts:27](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/config.ts#L27)

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

[src/payment/config.ts:28](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/config.ts#L28)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[paymentTimeout](payment_config.BasePaymentOptions#paymenttimeout)

#### Defined in

[src/payment/config.ts:29](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/config.ts#L29)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[paymentRequestTimeout](payment_config.BasePaymentOptions#paymentrequesttimeout)

#### Defined in

[src/payment/config.ts:30](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/config.ts#L30)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[logger](payment_config.BasePaymentOptions#logger)

#### Defined in

[src/payment/config.ts:31](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/config.ts#L31)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[eventTarget](payment_config.BasePaymentOptions#eventtarget)

#### Defined in

[src/payment/config.ts:32](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/payment/config.ts#L32)
