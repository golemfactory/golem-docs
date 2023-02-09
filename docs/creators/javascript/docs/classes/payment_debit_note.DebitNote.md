# Class: DebitNote

[payment/debit_note](../modules/payment_debit_note.md).DebitNote

A Debit Note is an artifact issued by the Provider to the Requestor, in the context of a specific Activity. It is a notification of Total Amount Due incurred by the Activity until the moment the Debit Note is issued. This is expected to be used as trigger for payment in upfront-payment or pay-as-you-go scenarios. NOTE: Only Debit Notes with non-null paymentDueDate are expected to trigger payments. NOTE: Debit Notes flag the current Total Amount Due, which is accumulated from the start of Activity. Debit Notes are expected to trigger payments, therefore payment amount for the newly received Debit Note is expected to be determined by difference of Total Payments for the Agreement vs Total Amount Due.

## Hierarchy

- [`BaseNote`](payment_invoice.BaseNote.md)<`Model`\>

  ↳ **`DebitNote`**

## Table of contents

### Methods

- [create](payment_debit_note.DebitNote.md#create)
- [accept](payment_debit_note.DebitNote.md#accept)
- [reject](payment_debit_note.DebitNote.md#reject)
- [refreshStatus](payment_debit_note.DebitNote.md#refreshstatus)
- [getStatus](payment_debit_note.DebitNote.md#getstatus)

### Properties

- [id](payment_debit_note.DebitNote.md#id)
- [previousDebitNoteId](payment_debit_note.DebitNote.md#previousdebitnoteid)
- [timestamp](payment_debit_note.DebitNote.md#timestamp)
- [activityId](payment_debit_note.DebitNote.md#activityid)
- [totalAmountDue](payment_debit_note.DebitNote.md#totalamountdue)
- [usageCounterVector](payment_debit_note.DebitNote.md#usagecountervector)
- [options](payment_debit_note.DebitNote.md#options)
- [providerId](payment_debit_note.DebitNote.md#providerid)
- [recipientId](payment_debit_note.DebitNote.md#recipientid)
- [payeeAddr](payment_debit_note.DebitNote.md#payeeaddr)
- [payerAddr](payment_debit_note.DebitNote.md#payeraddr)
- [paymentPlatform](payment_debit_note.DebitNote.md#paymentplatform)
- [agreementId](payment_debit_note.DebitNote.md#agreementid)
- [paymentDueDate](payment_debit_note.DebitNote.md#paymentduedate)
- [status](payment_debit_note.DebitNote.md#status)

## Methods

### create

▸ `Static` **create**(`debitNoteId`, `options?`): `Promise`<[`DebitNote`](payment_debit_note.DebitNote.md)\>

Create Debit Note Model

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `debitNoteId` | `string` | debit note id |
| `options?` | [`BasePaymentOptions`](../interfaces/payment_config.BasePaymentOptions.md) | [InvoiceOptions](../modules/payment_debit_note.md#invoiceoptions) |

#### Returns

`Promise`<[`DebitNote`](payment_debit_note.DebitNote.md)\>

#### Defined in

[yajsapi/payment/debit_note.ts:27](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/debit_note.ts#L27)

___

### accept

▸ **accept**(`totalAmountAccepted`, `allocationId`): `Promise`<`void`\>

Accept Debit Note

#### Parameters

| Name | Type |
| :------ | :------ |
| `totalAmountAccepted` | `string` |
| `allocationId` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

[BaseNote](payment_invoice.BaseNote.md).[accept](payment_invoice.BaseNote.md#accept)

#### Defined in

[yajsapi/payment/debit_note.ts:55](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/debit_note.ts#L55)

___

### reject

▸ **reject**(`rejection`): `Promise`<`void`\>

Reject Debit Note

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rejection` | [`Rejection`](../interfaces/payment_rejection.Rejection.md) | Rejection |

#### Returns

`Promise`<`void`\>

#### Overrides

[BaseNote](payment_invoice.BaseNote.md).[reject](payment_invoice.BaseNote.md#reject)

#### Defined in

[yajsapi/payment/debit_note.ts:72](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/debit_note.ts#L72)

___

### refreshStatus

▸ `Protected` **refreshStatus**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[BaseNote](payment_invoice.BaseNote.md).[refreshStatus](payment_invoice.BaseNote.md#refreshstatus)

#### Defined in

[yajsapi/payment/debit_note.ts:84](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/debit_note.ts#L84)

___

### getStatus

▸ `Protected` **getStatus**(): `Promise`<`InvoiceStatus`\>

#### Returns

`Promise`<`InvoiceStatus`\>

#### Inherited from

[BaseNote](payment_invoice.BaseNote.md).[getStatus](payment_invoice.BaseNote.md#getstatus)

#### Defined in

[yajsapi/payment/invoice.ts:46](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/invoice.ts#L46)

## Properties

### id

• `Readonly` **id**: `string`

#### Overrides

[BaseNote](payment_invoice.BaseNote.md).[id](payment_invoice.BaseNote.md#id)

#### Defined in

[yajsapi/payment/debit_note.ts:14](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/debit_note.ts#L14)

___

### previousDebitNoteId

• `Optional` `Readonly` **previousDebitNoteId**: `string`

#### Defined in

[yajsapi/payment/debit_note.ts:15](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/debit_note.ts#L15)

___

### timestamp

• `Readonly` **timestamp**: `string`

#### Defined in

[yajsapi/payment/debit_note.ts:16](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/debit_note.ts#L16)

___

### activityId

• `Readonly` **activityId**: `string`

#### Defined in

[yajsapi/payment/debit_note.ts:17](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/debit_note.ts#L17)

___

### totalAmountDue

• `Readonly` **totalAmountDue**: `string`

#### Defined in

[yajsapi/payment/debit_note.ts:18](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/debit_note.ts#L18)

___

### usageCounterVector

• `Optional` `Readonly` **usageCounterVector**: `object`

#### Defined in

[yajsapi/payment/debit_note.ts:19](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/debit_note.ts#L19)

___

### options

• `Protected` **options**: `InvoiceConfig`

#### Inherited from

[BaseNote](payment_invoice.BaseNote.md).[options](payment_invoice.BaseNote.md#options)

#### Defined in

[yajsapi/payment/debit_note.ts:40](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/debit_note.ts#L40)

___

### providerId

• `Readonly` **providerId**: `string`

#### Inherited from

[BaseNote](payment_invoice.BaseNote.md).[providerId](payment_invoice.BaseNote.md#providerid)

#### Defined in

[yajsapi/payment/invoice.ts:27](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/invoice.ts#L27)

___

### recipientId

• `Readonly` **recipientId**: `string`

#### Inherited from

[BaseNote](payment_invoice.BaseNote.md).[recipientId](payment_invoice.BaseNote.md#recipientid)

#### Defined in

[yajsapi/payment/invoice.ts:28](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/invoice.ts#L28)

___

### payeeAddr

• `Readonly` **payeeAddr**: `string`

#### Inherited from

[BaseNote](payment_invoice.BaseNote.md).[payeeAddr](payment_invoice.BaseNote.md#payeeaddr)

#### Defined in

[yajsapi/payment/invoice.ts:29](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/invoice.ts#L29)

___

### payerAddr

• `Readonly` **payerAddr**: `string`

#### Inherited from

[BaseNote](payment_invoice.BaseNote.md).[payerAddr](payment_invoice.BaseNote.md#payeraddr)

#### Defined in

[yajsapi/payment/invoice.ts:30](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/invoice.ts#L30)

___

### paymentPlatform

• `Readonly` **paymentPlatform**: `string`

#### Inherited from

[BaseNote](payment_invoice.BaseNote.md).[paymentPlatform](payment_invoice.BaseNote.md#paymentplatform)

#### Defined in

[yajsapi/payment/invoice.ts:31](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/invoice.ts#L31)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Inherited from

[BaseNote](payment_invoice.BaseNote.md).[agreementId](payment_invoice.BaseNote.md#agreementid)

#### Defined in

[yajsapi/payment/invoice.ts:32](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/invoice.ts#L32)

___

### paymentDueDate

• `Optional` `Readonly` **paymentDueDate**: `string`

#### Inherited from

[BaseNote](payment_invoice.BaseNote.md).[paymentDueDate](payment_invoice.BaseNote.md#paymentduedate)

#### Defined in

[yajsapi/payment/invoice.ts:33](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/invoice.ts#L33)

___

### status

• `Protected` **status**: `InvoiceStatus`

#### Inherited from

[BaseNote](payment_invoice.BaseNote.md).[status](payment_invoice.BaseNote.md#status)

#### Defined in

[yajsapi/payment/invoice.ts:34](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/invoice.ts#L34)
