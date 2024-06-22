---
title: "Class DebitNote"
pageTitle: "Class DebitNote - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DebitNote within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: DebitNote

[payment/debit\_note](../modules/payment_debit_note).DebitNote

A Debit Note is an artifact issued by the Provider to the Requestor, in the context of a specific Activity. It is a notification of Total Amount Due incurred by the Activity until the moment the Debit Note is issued. This is expected to be used as trigger for payment in upfront-payment or pay-as-you-go scenarios. NOTE: Only Debit Notes with non-null paymentDueDate are expected to trigger payments. NOTE: Debit Notes flag the current Total Amount Due, which is accumulated from the start of Activity. Debit Notes are expected to trigger payments, therefore payment amount for the newly received Debit Note is expected to be determined by difference of Total Payments for the Agreement vs Total Amount Due.

## Hierarchy

- [`BaseDocument`](payment_BaseDocument.BaseDocument)\<`PaymentApi.DebitNoteDTO`\>

  ↳ **`DebitNote`**

## Table of contents

### Constructors

- [constructor](payment_debit_note.DebitNote#constructor)

### Properties

- [id](payment_debit_note.DebitNote#id)
- [previousDebitNoteId](payment_debit_note.DebitNote#previousdebitnoteid)
- [timestamp](payment_debit_note.DebitNote#timestamp)
- [activityId](payment_debit_note.DebitNote#activityid)
- [totalAmountDue](payment_debit_note.DebitNote#totalamountdue)
- [usageCounterVector](payment_debit_note.DebitNote#usagecountervector)
- [model](payment_debit_note.DebitNote#model)
- [recipientId](payment_debit_note.DebitNote#recipientid)
- [payeeAddr](payment_debit_note.DebitNote#payeeaddr)
- [requestorWalletAddress](payment_debit_note.DebitNote#requestorwalletaddress)
- [paymentPlatform](payment_debit_note.DebitNote#paymentplatform)
- [agreementId](payment_debit_note.DebitNote#agreementid)
- [paymentDueDate](payment_debit_note.DebitNote#paymentduedate)
- [status](payment_debit_note.DebitNote#status)
- [provider](payment_debit_note.DebitNote#provider)

### Methods

- [getPreciseAmount](payment_debit_note.DebitNote#getpreciseamount)
- [getStatus](payment_debit_note.DebitNote#getstatus)

## Constructors

### constructor

• **new DebitNote**(`model`, `providerInfo`): [`DebitNote`](payment_debit_note.DebitNote)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `DebitNote` |
| `providerInfo` | [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo) |

#### Returns

[`DebitNote`](payment_debit_note.DebitNote)

#### Overrides

[BaseDocument](payment_BaseDocument.BaseDocument).[constructor](payment_BaseDocument.BaseDocument#constructor)

#### Defined in

[src/payment/debit_note.ts:26](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/debit_note.ts#L26)

## Properties

### id

• `Readonly` **id**: `string`

#### Overrides

[BaseDocument](payment_BaseDocument.BaseDocument).[id](payment_BaseDocument.BaseDocument#id)

#### Defined in

[src/payment/debit_note.ts:14](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/debit_note.ts#L14)

___

### previousDebitNoteId

• `Optional` `Readonly` **previousDebitNoteId**: `string`

#### Defined in

[src/payment/debit_note.ts:15](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/debit_note.ts#L15)

___

### timestamp

• `Readonly` **timestamp**: `string`

#### Defined in

[src/payment/debit_note.ts:16](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/debit_note.ts#L16)

___

### activityId

• `Readonly` **activityId**: `string`

#### Defined in

[src/payment/debit_note.ts:17](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/debit_note.ts#L17)

___

### totalAmountDue

• `Readonly` **totalAmountDue**: `string`

#### Defined in

[src/payment/debit_note.ts:18](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/debit_note.ts#L18)

___

### usageCounterVector

• `Optional` `Readonly` **usageCounterVector**: `object`

#### Defined in

[src/payment/debit_note.ts:19](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/debit_note.ts#L19)

___

### model

• `Protected` **model**: `DebitNote`

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[model](payment_BaseDocument.BaseDocument#model)

#### Defined in

[src/payment/debit_note.ts:27](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/debit_note.ts#L27)

___

### recipientId

• `Readonly` **recipientId**: `string`

#### Inherited from

[BaseDocument](payment_BaseDocument.BaseDocument).[recipientId](payment_BaseDocument.BaseDocument#recipientid)

#### Defined in

[src/payment/BaseDocument.ts:19](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L19)

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

[src/payment/debit_note.ts:38](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/debit_note.ts#L38)

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
