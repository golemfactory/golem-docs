---
title: "Class Invoice"
pageTitle: "Class Invoice - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Invoice within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Invoice

[payment/invoice](../modules/payment_invoice).Invoice

An Invoice is an artifact issued by the Provider to the Requestor, in the context of a specific Agreement. It indicates the total Amount owed by the Requestor in this Agreement. No further Debit Notes shall be issued after the Invoice is issued. The issue of Invoice signals the Termination of the Agreement (if it hasn't been terminated already). No Activity execution is allowed after the Invoice is issued.

## Hierarchy

- [`BaseDocument`](payment_BaseDocument.BaseDocument)\<`PaymentApi.InvoiceDTO`\>

  ↳ **`Invoice`**

## Table of contents

### Constructors

- [constructor](payment_invoice.Invoice#constructor)

### Properties

- [activityIds](payment_invoice.Invoice#activityids)
- [amount](payment_invoice.Invoice#amount)
- [timestamp](payment_invoice.Invoice#timestamp)
- [recipientId](payment_invoice.Invoice#recipientid)
- [model](payment_invoice.Invoice#model)
- [payeeAddr](payment_invoice.Invoice#payeeaddr)
- [requestorWalletAddress](payment_invoice.Invoice#requestorwalletaddress)
- [paymentPlatform](payment_invoice.Invoice#paymentplatform)
- [agreementId](payment_invoice.Invoice#agreementid)
- [paymentDueDate](payment_invoice.Invoice#paymentduedate)
- [status](payment_invoice.Invoice#status)
- [id](payment_invoice.Invoice#id)
- [provider](payment_invoice.Invoice#provider)

### Methods

- [getPreciseAmount](payment_invoice.Invoice#getpreciseamount)
- [isSameAs](payment_invoice.Invoice#issameas)
- [getStatus](payment_invoice.Invoice#getstatus)

## Constructors

### constructor

• **new Invoice**(`model`, `providerInfo`): [`Invoice`](payment_invoice.Invoice)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `Invoice` |
| `providerInfo` | [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo) |

#### Returns

[`Invoice`](payment_invoice.Invoice)

#### Overrides

[BaseDocument](payment_BaseDocument.BaseDocument).[constructor](payment_BaseDocument.BaseDocument#constructor)

#### Defined in

[src/payment/invoice.ts:30](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/invoice.ts#L30)

## Properties

### activityIds

• `Optional` `Readonly` **activityIds**: `string`[]

Activities IDs covered by this Invoice

#### Defined in

[src/payment/invoice.ts:18](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/invoice.ts#L18)

___

### amount

• `Readonly` **amount**: `string`

Amount in the invoice

#### Defined in

[src/payment/invoice.ts:20](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/invoice.ts#L20)

___

### timestamp

• `Readonly` **timestamp**: `string`

Invoice creation timestamp

#### Defined in

[src/payment/invoice.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/invoice.ts#L22)

___

### recipientId

• `Readonly` **recipientId**: `string`

Recipient ID

#### Overrides

[BaseDocument](payment_BaseDocument.BaseDocument).[recipientId](payment_BaseDocument.BaseDocument#recipientid)

#### Defined in

[src/payment/invoice.ts:24](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/invoice.ts#L24)

___

### model

• `Protected` **model**: `Invoice`

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[model](payment_BaseDocument.BaseDocument#model)

#### Defined in

[src/payment/invoice.ts:31](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/invoice.ts#L31)

___

### payeeAddr

• `Readonly` **payeeAddr**: `string`

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[payeeAddr](payment_BaseDocument.BaseDocument#payeeaddr)

#### Defined in

[src/payment/BaseDocument.ts:20](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L20)

___

### requestorWalletAddress

• `Readonly` **requestorWalletAddress**: `string`

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[requestorWalletAddress](payment_BaseDocument.BaseDocument#requestorwalletaddress)

#### Defined in

[src/payment/BaseDocument.ts:21](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L21)

___

### paymentPlatform

• `Readonly` **paymentPlatform**: `string`

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[paymentPlatform](payment_BaseDocument.BaseDocument#paymentplatform)

#### Defined in

[src/payment/BaseDocument.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L22)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[agreementId](payment_BaseDocument.BaseDocument#agreementid)

#### Defined in

[src/payment/BaseDocument.ts:23](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L23)

___

### paymentDueDate

• `Optional` `Readonly` **paymentDueDate**: `string`

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[paymentDueDate](payment_BaseDocument.BaseDocument#paymentduedate)

#### Defined in

[src/payment/BaseDocument.ts:24](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L24)

___

### status

• `Protected` **status**: ``"ISSUED"`` \| ``"RECEIVED"`` \| ``"ACCEPTED"`` \| ``"REJECTED"`` \| ``"FAILED"`` \| ``"SETTLED"`` \| ``"CANCELLED"``

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[status](payment_BaseDocument.BaseDocument#status)

#### Defined in

[src/payment/BaseDocument.ts:26](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L26)

___

### id

• `Readonly` **id**: `string`

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[id](payment_BaseDocument.BaseDocument#id)

#### Defined in

[src/payment/BaseDocument.ts:29](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L29)

___

### provider

• `Readonly` **provider**: [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[provider](payment_BaseDocument.BaseDocument#provider)

#### Defined in

[src/payment/BaseDocument.ts:31](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L31)

## Methods

### getPreciseAmount

▸ **getPreciseAmount**(): `Decimal`

#### Returns

`Decimal`

#### Defined in

[src/payment/invoice.ts:41](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/invoice.ts#L41)

___

### isSameAs

▸ **isSameAs**(`invoice`): `boolean`

Compares two invoices together and tells if they are the same thing

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`Invoice`](payment_invoice.Invoice) |

#### Returns

`boolean`

#### Defined in

[src/payment/invoice.ts:48](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/invoice.ts#L48)

___

### getStatus

▸ **getStatus**(): ``"ISSUED"`` \| ``"RECEIVED"`` \| ``"ACCEPTED"`` \| ``"REJECTED"`` \| ``"FAILED"`` \| ``"SETTLED"`` \| ``"CANCELLED"``

Tells what's the current status of the document

#### Returns

``"ISSUED"`` \| ``"RECEIVED"`` \| ``"ACCEPTED"`` \| ``"REJECTED"`` \| ``"FAILED"`` \| ``"SETTLED"`` \| ``"CANCELLED"``

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[getStatus](payment_BaseDocument.BaseDocument#getstatus)

#### Defined in

[src/payment/BaseDocument.ts:45](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L45)
