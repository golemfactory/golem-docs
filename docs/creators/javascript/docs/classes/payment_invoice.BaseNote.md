# Class: BaseNote<ModelType\>

[payment/invoice](../modules/payment_invoice.md).BaseNote

## Type parameters

| Name | Type |
| :------ | :------ |
| `ModelType` | extends [`BaseModel`](../interfaces/payment_invoice.BaseModel.md) |

## Hierarchy

- **`BaseNote`**

  ↳ [`DebitNote`](payment_debit_note.DebitNote.md)

  ↳ [`Invoice`](payment_invoice.Invoice.md)

## Table of contents

### Constructors

- [constructor](payment_invoice.BaseNote.md#constructor)

### Properties

- [id](payment_invoice.BaseNote.md#id)
- [providerId](payment_invoice.BaseNote.md#providerid)
- [recipientId](payment_invoice.BaseNote.md#recipientid)
- [payeeAddr](payment_invoice.BaseNote.md#payeeaddr)
- [payerAddr](payment_invoice.BaseNote.md#payeraddr)
- [paymentPlatform](payment_invoice.BaseNote.md#paymentplatform)
- [agreementId](payment_invoice.BaseNote.md#agreementid)
- [paymentDueDate](payment_invoice.BaseNote.md#paymentduedate)
- [status](payment_invoice.BaseNote.md#status)
- [options](payment_invoice.BaseNote.md#options)

### Methods

- [getStatus](payment_invoice.BaseNote.md#getstatus)
- [accept](payment_invoice.BaseNote.md#accept)
- [reject](payment_invoice.BaseNote.md#reject)
- [refreshStatus](payment_invoice.BaseNote.md#refreshstatus)

## Constructors

### constructor

• `Protected` **new BaseNote**<`ModelType`\>(`model`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModelType` | extends [`BaseModel`](../interfaces/payment_invoice.BaseModel.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `ModelType` |
| `options` | `InvoiceConfig` |

#### Defined in

[yajsapi/payment/invoice.ts:36](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L36)

## Properties

### id

• `Readonly` `Abstract` **id**: `string`

#### Defined in

[yajsapi/payment/invoice.ts:26](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L26)

___

### providerId

• `Readonly` **providerId**: `string`

#### Defined in

[yajsapi/payment/invoice.ts:27](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L27)

___

### recipientId

• `Readonly` **recipientId**: `string`

#### Defined in

[yajsapi/payment/invoice.ts:28](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L28)

___

### payeeAddr

• `Readonly` **payeeAddr**: `string`

#### Defined in

[yajsapi/payment/invoice.ts:29](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L29)

___

### payerAddr

• `Readonly` **payerAddr**: `string`

#### Defined in

[yajsapi/payment/invoice.ts:30](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L30)

___

### paymentPlatform

• `Readonly` **paymentPlatform**: `string`

#### Defined in

[yajsapi/payment/invoice.ts:31](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L31)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Defined in

[yajsapi/payment/invoice.ts:32](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L32)

___

### paymentDueDate

• `Optional` `Readonly` **paymentDueDate**: `string`

#### Defined in

[yajsapi/payment/invoice.ts:33](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L33)

___

### status

• `Protected` **status**: `InvoiceStatus`

#### Defined in

[yajsapi/payment/invoice.ts:34](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L34)

___

### options

• `Protected` **options**: `InvoiceConfig`

#### Defined in

[yajsapi/payment/invoice.ts:36](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L36)

## Methods

### getStatus

▸ `Protected` **getStatus**(): `Promise`<`InvoiceStatus`\>

#### Returns

`Promise`<`InvoiceStatus`\>

#### Defined in

[yajsapi/payment/invoice.ts:46](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L46)

___

### accept

▸ `Protected` `Abstract` **accept**(`totalAmountAccepted`, `allocationId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `totalAmountAccepted` | `string` |
| `allocationId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/payment/invoice.ts:50](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L50)

___

### reject

▸ `Protected` `Abstract` **reject**(`rejection`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rejection` | [`Rejection`](../interfaces/payment_rejection.Rejection.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/payment/invoice.ts:51](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L51)

___

### refreshStatus

▸ `Protected` `Abstract` **refreshStatus**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/payment/invoice.ts:52](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/payment/invoice.ts#L52)
