[JavaScript API reference](../README) / DebitNote

# Class: DebitNote

A Debit Note is an artifact issued by the Provider to the Requestor, in the context of a specific Activity. It is a notification of Total Amount Due incurred by the Activity until the moment the Debit Note is issued. This is expected to be used as trigger for payment in upfront-payment or pay-as-you-go scenarios. NOTE: Only Debit Notes with non-null paymentDueDate are expected to trigger payments. NOTE: Debit Notes flag the current Total Amount Due, which is accumulated from the start of Activity. Debit Notes are expected to trigger payments, therefore payment amount for the newly received Debit Note is expected to be determined by difference of Total Payments for the Agreement vs Total Amount Due.

## Hierarchy

- `BaseNote`<`Model`\>

  ↳ **`DebitNote`**

## Table of contents

### Properties

- [id](DebitNote#id)
- [previousDebitNoteId](DebitNote#previousdebitnoteid)
- [timestamp](DebitNote#timestamp)
- [activityId](DebitNote#activityid)
- [totalAmountDue](DebitNote#totalamountdue)
- [usageCounterVector](DebitNote#usagecountervector)
- [providerId](DebitNote#providerid)
- [recipientId](DebitNote#recipientid)
- [payeeAddr](DebitNote#payeeaddr)
- [payerAddr](DebitNote#payeraddr)
- [paymentPlatform](DebitNote#paymentplatform)
- [agreementId](DebitNote#agreementid)
- [paymentDueDate](DebitNote#paymentduedate)

### Methods

- [create](DebitNote#create)
- [accept](DebitNote#accept)
- [reject](DebitNote#reject)

## Properties

### id

• `Readonly` **id**: `string`

#### Overrides

BaseNote.id

#### Defined in

[payment/debit_note.ts:14](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/debit_note.ts#L14)

___

### previousDebitNoteId

• `Optional` `Readonly` **previousDebitNoteId**: `string`

#### Defined in

[payment/debit_note.ts:15](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/debit_note.ts#L15)

___

### timestamp

• `Readonly` **timestamp**: `string`

#### Defined in

[payment/debit_note.ts:16](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/debit_note.ts#L16)

___

### activityId

• `Readonly` **activityId**: `string`

#### Defined in

[payment/debit_note.ts:17](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/debit_note.ts#L17)

___

### totalAmountDue

• `Readonly` **totalAmountDue**: `string`

#### Defined in

[payment/debit_note.ts:18](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/debit_note.ts#L18)

___

### usageCounterVector

• `Optional` `Readonly` **usageCounterVector**: `object`

#### Defined in

[payment/debit_note.ts:19](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/debit_note.ts#L19)

___

### providerId

• `Readonly` **providerId**: `string`

#### Inherited from

BaseNote.providerId

#### Defined in

[payment/invoice.ts:27](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L27)

___

### recipientId

• `Readonly` **recipientId**: `string`

#### Inherited from

BaseNote.recipientId

#### Defined in

[payment/invoice.ts:28](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L28)

___

### payeeAddr

• `Readonly` **payeeAddr**: `string`

#### Inherited from

BaseNote.payeeAddr

#### Defined in

[payment/invoice.ts:29](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L29)

___

### payerAddr

• `Readonly` **payerAddr**: `string`

#### Inherited from

BaseNote.payerAddr

#### Defined in

[payment/invoice.ts:30](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L30)

___

### paymentPlatform

• `Readonly` **paymentPlatform**: `string`

#### Inherited from

BaseNote.paymentPlatform

#### Defined in

[payment/invoice.ts:31](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L31)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Inherited from

BaseNote.agreementId

#### Defined in

[payment/invoice.ts:32](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L32)

___

### paymentDueDate

• `Optional` `Readonly` **paymentDueDate**: `string`

#### Inherited from

BaseNote.paymentDueDate

#### Defined in

[payment/invoice.ts:33](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L33)

## Methods

### create

▸ `Static` **create**(`debitNoteId`, `options?`): `Promise`<[`DebitNote`](DebitNote)\>

Create Debit Note Model

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `debitNoteId` | `string` | debit note id |
| `options?` | `BasePaymentOptions` | InvoiceOptions |

#### Returns

`Promise`<[`DebitNote`](DebitNote)\>

#### Defined in

[payment/debit_note.ts:27](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/debit_note.ts#L27)

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

BaseNote.accept

#### Defined in

[payment/debit_note.ts:55](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/debit_note.ts#L55)

___

### reject

▸ **reject**(`rejection`): `Promise`<`void`\>

Reject Debit Note

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rejection` | `Rejection` | Rejection |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseNote.reject

#### Defined in

[payment/debit_note.ts:72](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/debit_note.ts#L72)
