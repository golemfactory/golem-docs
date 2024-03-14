---
title: "Class InvoiceProcessor"
pageTitle: "Class InvoiceProcessor - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class InvoiceProcessor within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: InvoiceProcessor

[payment/InvoiceProcessor](../modules/payment_InvoiceProcessor).InvoiceProcessor

A class that provides methods for working with invoices. It interacts with the Yagna API directly.

## Table of contents

### Methods

- [create](payment_InvoiceProcessor.InvoiceProcessor#create)
- [collectInvoices](payment_InvoiceProcessor.InvoiceProcessor#collectinvoices)
- [fetchSingleInvoice](payment_InvoiceProcessor.InvoiceProcessor#fetchsingleinvoice)
- [acceptInvoice](payment_InvoiceProcessor.InvoiceProcessor#acceptinvoice)
- [acceptManyInvoices](payment_InvoiceProcessor.InvoiceProcessor#acceptmanyinvoices)

## Methods

### create

▸ **create**(`options?`): `Promise`\<[`InvoiceProcessor`](payment_InvoiceProcessor.InvoiceProcessor)\>

Creates an instance of `InvoiceProcessor` and connects to the Yagna API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`YagnaOptions`](../modules/utils_yagna_yagna#yagnaoptions) | Options for the Yagna API. |

#### Returns

`Promise`\<[`InvoiceProcessor`](payment_InvoiceProcessor.InvoiceProcessor)\>

#### Defined in

[src/payment/InvoiceProcessor.ts:36](https://github.com/golemfactory/golem-js/blob/4182943/src/payment/InvoiceProcessor.ts#L36)

___

### collectInvoices

▸ **collectInvoices**(`«destructured»?`): `Promise`\<`Invoice`[]\>

Collects invoices from the Yagna API until the limit is reached or there are no more invoices.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `{}` |
| › `after?` | `Date` | `undefined` |
| › `limit?` | `number` | `50` |
| › `statuses?` | `string`[] | `undefined` |
| › `providerIds?` | `string`[] | `undefined` |
| › `minAmount?` | `Numeric` | `undefined` |
| › `maxAmount?` | `Numeric` | `undefined` |
| › `providerWallets?` | `string`[] | `undefined` |
| › `paymentPlatforms?` | `string`[] | `undefined` |

#### Returns

`Promise`\<`Invoice`[]\>

**`Example`**

```typescript
const invoices = await invoiceProcessor.collectInvoices({
 after: new Date(Date.now() - 24 * 60 * 60 * 1000), // only collect invoices that were created in the last 24 hours
 limit: 100, // only collect 100 invoices max
 statuses: ["RECEIVED"], // only collect unpaid invoices
 providerIds: ["0x1234"], // only collect invoices from this provider
 minAmount: "0.1", // only collect invoices with an amount greater than or equal to 0.1 GLM
 maxAmount: "1", // only collect invoices with an amount less than or equal to 1 GLM
 providerWallets: ["0x1234"], // only collect invoices from this provider wallet
 paymentPlatforms: ["erc20-polygon-glm"], // only collect invoices from this payment platform
});
```

#### Defined in

[src/payment/InvoiceProcessor.ts:68](https://github.com/golemfactory/golem-js/blob/4182943/src/payment/InvoiceProcessor.ts#L68)

___

### fetchSingleInvoice

▸ **fetchSingleInvoice**(`invoiceId`): `Promise`\<`Invoice`\>

Fetches a single invoice from the Yagna API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoiceId` | `string` |

#### Returns

`Promise`\<`Invoice`\>

#### Defined in

[src/payment/InvoiceProcessor.ts:120](https://github.com/golemfactory/golem-js/blob/4182943/src/payment/InvoiceProcessor.ts#L120)

___

### acceptInvoice

▸ **acceptInvoice**(`«destructured»`): `Promise`\<[`InvoiceAcceptResult`](../modules/payment_InvoiceProcessor#invoiceacceptresult)\>

Creates an allocation for the exact amount of the invoice and accepts the invoice.
If `dryRun` is `true`, no allocation will be created and the invoice will not be accepted.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `invoice` | `Invoice` | `undefined` |
| › `dryRun?` | `boolean` | `false` |

#### Returns

`Promise`\<[`InvoiceAcceptResult`](../modules/payment_InvoiceProcessor#invoiceacceptresult)\>

#### Defined in

[src/payment/InvoiceProcessor.ts:128](https://github.com/golemfactory/golem-js/blob/4182943/src/payment/InvoiceProcessor.ts#L128)

___

### acceptManyInvoices

▸ **acceptManyInvoices**(`«destructured»`): `Promise`\<[`InvoiceAcceptResult`](../modules/payment_InvoiceProcessor#invoiceacceptresult)[]\>

Creates an allocation for the exact amount of the invoices and accepts the invoices.
Since the invoices can be from different payment platforms and payer addresses,
multiple allocations might be created.
If `dryRun` is `true`, no allocation will be created and the invoices will not be accepted.
Please keep in mind that this method is not atomic, so if one of the invoices fails
to be accepted, the others will still be accepted. This is a limitation of the Yagna API.
Use the returned `InvoiceAcceptResult` to check which invoices were accepted successfully.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `invoices` | `Invoice`[] | `undefined` |
| › `dryRun?` | `boolean` | `false` |

#### Returns

`Promise`\<[`InvoiceAcceptResult`](../modules/payment_InvoiceProcessor#invoiceacceptresult)[]\>

#### Defined in

[src/payment/InvoiceProcessor.ts:193](https://github.com/golemfactory/golem-js/blob/4182943/src/payment/InvoiceProcessor.ts#L193)
