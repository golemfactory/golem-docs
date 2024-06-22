---
title: "Interface PaymentOptions"
pageTitle: "Interface PaymentOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface PaymentOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
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
- [unsubscribeTimeoutMs](payment_service.PaymentOptions#unsubscribetimeoutms)
- [logger](payment_service.PaymentOptions#logger)

## Properties

### invoiceFetchingInterval

• `Optional` **invoiceFetchingInterval**: `number`

Interval for checking new invoices

#### Defined in

[src/payment/service.ts:6](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/service.ts#L6)

___

### debitNotesFetchingInterval

• `Optional` **debitNotesFetchingInterval**: `number`

Interval for checking new debit notes

#### Defined in

[src/payment/service.ts:8](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/service.ts#L8)

___

### maxInvoiceEvents

• `Optional` **maxInvoiceEvents**: `number`

Maximum number of invoice events per one fetching

#### Defined in

[src/payment/service.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/service.ts#L10)

___

### maxDebitNotesEvents

• `Optional` **maxDebitNotesEvents**: `number`

Maximum number of debit notes events per one fetching

#### Defined in

[src/payment/service.ts:12](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/service.ts#L12)

___

### debitNotesFilter

• `Optional` **debitNotesFilter**: [`DebitNoteFilter`](../modules/payment_agreement_payment_process#debitnotefilter)

A custom filter that checks every debit notes coming from providers

#### Defined in

[src/payment/service.ts:14](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/service.ts#L14)

___

### invoiceFilter

• `Optional` **invoiceFilter**: [`InvoiceFilter`](../modules/payment_agreement_payment_process#invoicefilter)

A custom filter that checks every invoices coming from providers

#### Defined in

[src/payment/service.ts:16](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/service.ts#L16)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/shared_yagna_yagnaApi#yagnaoptions)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[yagnaOptions](payment_config.BasePaymentOptions#yagnaoptions)

#### Defined in

[src/payment/config.ts:4](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L4)

___

### budget

• `Optional` **budget**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[budget](payment_config.BasePaymentOptions#budget)

#### Defined in

[src/payment/config.ts:5](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L5)

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

[src/payment/config.ts:6](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L6)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[paymentTimeout](payment_config.BasePaymentOptions#paymenttimeout)

#### Defined in

[src/payment/config.ts:7](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L7)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[paymentRequestTimeout](payment_config.BasePaymentOptions#paymentrequesttimeout)

#### Defined in

[src/payment/config.ts:8](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L8)

___

### unsubscribeTimeoutMs

• `Optional` **unsubscribeTimeoutMs**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[unsubscribeTimeoutMs](payment_config.BasePaymentOptions#unsubscribetimeoutms)

#### Defined in

[src/payment/config.ts:9](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L9)

___

### logger

• `Optional` **logger**: [`Logger`](shared_utils_logger_logger.Logger)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[logger](payment_config.BasePaymentOptions#logger)

#### Defined in

[src/payment/config.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/config.ts#L10)
