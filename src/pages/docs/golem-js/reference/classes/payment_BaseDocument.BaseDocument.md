---
title: "Class BaseDocument"
pageTitle: "Class BaseDocument - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class BaseDocument within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: BaseDocument\<ModelType\>

[payment/BaseDocument](../modules/payment_BaseDocument).BaseDocument

Common properties and methods for payment related documents - Invoices and DebitNotes

## Type parameters

| Name | Type |
| :------ | :------ |
| `ModelType` | extends [`BaseModel`](../interfaces/payment_BaseDocument.BaseModel) |

## Hierarchy

- **`BaseDocument`**

  ↳ [`DebitNote`](payment_debit_note.DebitNote)

  ↳ [`Invoice`](payment_invoice.Invoice)

## Table of contents

### Constructors

- [constructor](payment_BaseDocument.BaseDocument#constructor)

### Properties

- [recipientId](payment_BaseDocument.BaseDocument#recipientid)
- [payeeAddr](payment_BaseDocument.BaseDocument#payeeaddr)
- [requestorWalletAddress](payment_BaseDocument.BaseDocument#requestorwalletaddress)
- [paymentPlatform](payment_BaseDocument.BaseDocument#paymentplatform)
- [agreementId](payment_BaseDocument.BaseDocument#agreementid)
- [paymentDueDate](payment_BaseDocument.BaseDocument#paymentduedate)
- [status](payment_BaseDocument.BaseDocument#status)
- [id](payment_BaseDocument.BaseDocument#id)
- [model](payment_BaseDocument.BaseDocument#model)
- [provider](payment_BaseDocument.BaseDocument#provider)

### Methods

- [getStatus](payment_BaseDocument.BaseDocument#getstatus)

## Constructors

### constructor

• **new BaseDocument**\<`ModelType`\>(`id`, `model`, `provider`): [`BaseDocument`](payment_BaseDocument.BaseDocument)\<`ModelType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModelType` | extends [`BaseModel`](../interfaces/payment_BaseDocument.BaseModel) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `model` | `ModelType` |
| `provider` | [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo) |

#### Returns

[`BaseDocument`](payment_BaseDocument.BaseDocument)\<`ModelType`\>

#### Defined in

[src/payment/BaseDocument.ts:28](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L28)

## Properties

### recipientId

• `Readonly` **recipientId**: `string`

#### Defined in

[src/payment/BaseDocument.ts:19](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L19)

___

### payeeAddr

• `Readonly` **payeeAddr**: `string`

#### Defined in

[src/payment/BaseDocument.ts:20](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L20)

___

### requestorWalletAddress

• `Readonly` **requestorWalletAddress**: `string`

#### Defined in

[src/payment/BaseDocument.ts:21](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L21)

___

### paymentPlatform

• `Readonly` **paymentPlatform**: `string`

#### Defined in

[src/payment/BaseDocument.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L22)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Defined in

[src/payment/BaseDocument.ts:23](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L23)

___

### paymentDueDate

• `Optional` `Readonly` **paymentDueDate**: `string`

#### Defined in

[src/payment/BaseDocument.ts:24](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L24)

___

### status

• `Protected` **status**: ``"ISSUED"`` \| ``"RECEIVED"`` \| ``"ACCEPTED"`` \| ``"REJECTED"`` \| ``"FAILED"`` \| ``"SETTLED"`` \| ``"CANCELLED"``

#### Defined in

[src/payment/BaseDocument.ts:26](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L26)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[src/payment/BaseDocument.ts:29](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L29)

___

### model

• `Protected` **model**: `ModelType`

#### Defined in

[src/payment/BaseDocument.ts:30](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L30)

___

### provider

• `Readonly` **provider**: [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Defined in

[src/payment/BaseDocument.ts:31](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L31)

## Methods

### getStatus

▸ **getStatus**(): ``"ISSUED"`` \| ``"RECEIVED"`` \| ``"ACCEPTED"`` \| ``"REJECTED"`` \| ``"FAILED"`` \| ``"SETTLED"`` \| ``"CANCELLED"``

Tells what's the current status of the document

#### Returns

``"ISSUED"`` \| ``"RECEIVED"`` \| ``"ACCEPTED"`` \| ``"REJECTED"`` \| ``"FAILED"`` \| ``"SETTLED"`` \| ``"CANCELLED"``

#### Defined in

[src/payment/BaseDocument.ts:45](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/BaseDocument.ts#L45)
