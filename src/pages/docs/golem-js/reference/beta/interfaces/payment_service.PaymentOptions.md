# Interface: PaymentOptions

[payment/service](../modules/payment_service.md).PaymentOptions

## Hierarchy

- [`BasePaymentOptions`](payment_config.BasePaymentOptions.md)

  ↳ **`PaymentOptions`**

## Table of contents

### Properties

- [invoiceFetchingInterval](payment_service.PaymentOptions.md#invoicefetchinginterval)
- [debitNotesFetchingInterval](payment_service.PaymentOptions.md#debitnotesfetchinginterval)
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

[src/payment/service.ts:11](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/service.ts#L11)

___

### debitNotesFetchingInterval

• `Optional` **debitNotesFetchingInterval**: `number`

Interval for checking new debit notes

#### Defined in

[src/payment/service.ts:13](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/service.ts#L13)

___

### maxInvoiceEvents

• `Optional` **maxInvoiceEvents**: `number`

Maximum number of invoice events per one fetching

#### Defined in

[src/payment/service.ts:15](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/service.ts#L15)

___

### maxDebitNotesEvents

• `Optional` **maxDebitNotesEvents**: `number`

Maximum number of debit notes events per one fetching

#### Defined in

[src/payment/service.ts:17](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/service.ts#L17)

___

### debitNotesFilter

• `Optional` **debitNotesFilter**: [`DebitNoteFilter`](../modules/payment_service.md#debitnotefilter)

A custom filter that checks every debit notes coming from providers

#### Defined in

[src/payment/service.ts:19](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/service.ts#L19)

___

### invoiceFilter

• `Optional` **invoiceFilter**: [`InvoiceFilter`](../modules/payment_service.md#invoicefilter)

A custom filter that checks every invoices coming from providers

#### Defined in

[src/payment/service.ts:21](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/service.ts#L21)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[yagnaOptions](payment_config.BasePaymentOptions.md#yagnaoptions)

#### Defined in

[src/payment/config.ts:23](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L23)

___

### budget

• `Optional` **budget**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[budget](payment_config.BasePaymentOptions.md#budget)

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

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[payment](payment_config.BasePaymentOptions.md#payment)

#### Defined in

[src/payment/config.ts:25](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L25)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[paymentTimeout](payment_config.BasePaymentOptions.md#paymenttimeout)

#### Defined in

[src/payment/config.ts:26](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L26)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[paymentRequestTimeout](payment_config.BasePaymentOptions.md#paymentrequesttimeout)

#### Defined in

[src/payment/config.ts:27](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L27)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger.md)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[logger](payment_config.BasePaymentOptions.md#logger)

#### Defined in

[src/payment/config.ts:28](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L28)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[eventTarget](payment_config.BasePaymentOptions.md#eventtarget)

#### Defined in

[src/payment/config.ts:29](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/payment/config.ts#L29)
