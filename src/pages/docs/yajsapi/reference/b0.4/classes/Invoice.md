[JavaScript API reference](../README) / Invoice

# Class: Invoice

An Invoice is an artifact issued by the Provider to the Requestor, in the context of a specific Agreement. It indicates the total Amount owed by the Requestor in this Agreement. No further Debit Notes shall be issued after the Invoice is issued. The issue of Invoice signals the Termination of the Agreement (if it hasn't been terminated already). No Activity execution is allowed after the Invoice is issued.

## Hierarchy

- `BaseNote`<`Model`\>

  ↳ **`Invoice`**

## Table of contents

### Properties

- [id](Invoice#id)
- [activityIds](Invoice#activityids)
- [amount](Invoice#amount)
- [timestamp](Invoice#timestamp)
- [recipientId](Invoice#recipientid)
- [providerId](Invoice#providerid)
- [payeeAddr](Invoice#payeeaddr)
- [payerAddr](Invoice#payeraddr)
- [paymentPlatform](Invoice#paymentplatform)
- [agreementId](Invoice#agreementid)
- [paymentDueDate](Invoice#paymentduedate)

### Methods

- [create](Invoice#create)
- [getStatus](Invoice#getstatus)
- [accept](Invoice#accept)
- [reject](Invoice#reject)

## Properties

### id

• `Readonly` **id**: `string`

Invoice ID

#### Overrides

BaseNote.id

#### Defined in

[payment/invoice.ts:61](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L61)

___

### activityIds

• `Optional` `Readonly` **activityIds**: `string`[]

Activities IDs covered by this Invoice

#### Defined in

[payment/invoice.ts:63](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L63)

___

### amount

• `Readonly` **amount**: `string`

Amount in the invoice

#### Defined in

[payment/invoice.ts:65](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L65)

___

### timestamp

• `Readonly` **timestamp**: `string`

Invoice creation timestamp

#### Defined in

[payment/invoice.ts:67](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L67)

___

### recipientId

• `Readonly` **recipientId**: `string`

Recipient ID

#### Overrides

BaseNote.recipientId

#### Defined in

[payment/invoice.ts:69](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L69)

___

### providerId

• `Readonly` **providerId**: `string`

#### Inherited from

BaseNote.providerId

#### Defined in

[payment/invoice.ts:27](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L27)

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

▸ `Static` **create**(`invoiceId`, `options?`): `Promise`<[`Invoice`](Invoice)\>

Create invoice using invoice ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `invoiceId` | `string` | Invoice ID |
| `options?` | `BasePaymentOptions` | InvoiceOptions |

#### Returns

`Promise`<[`Invoice`](Invoice)\>

#### Defined in

[payment/invoice.ts:77](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L77)

___

### getStatus

▸ **getStatus**(): `Promise`<`InvoiceStatus`\>

Get Invoice Status

#### Returns

`Promise`<`InvoiceStatus`\>

InvoiceStatus

#### Overrides

BaseNote.getStatus

#### Defined in

[payment/invoice.ts:103](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L103)

___

### accept

▸ **accept**(`totalAmountAccepted`, `allocationId`): `Promise`<`void`\>

Accept Invoice

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

[payment/invoice.ts:114](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L114)

___

### reject

▸ **reject**(`rejection`): `Promise`<`void`\>

Reject Invoice

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rejection` | `Rejection` | Rejection |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseNote.reject

#### Defined in

[payment/invoice.ts:132](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/invoice.ts#L132)
