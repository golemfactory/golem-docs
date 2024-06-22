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

### Constructors

- [constructor](payment_InvoiceProcessor.InvoiceProcessor#constructor)

### Methods

- [collectInvoices](payment_InvoiceProcessor.InvoiceProcessor#collectinvoices)
- [fetchSingleInvoice](payment_InvoiceProcessor.InvoiceProcessor#fetchsingleinvoice)
- [acceptInvoice](payment_InvoiceProcessor.InvoiceProcessor#acceptinvoice)
- [acceptManyInvoices](payment_InvoiceProcessor.InvoiceProcessor#acceptmanyinvoices)

## Constructors

### constructor

• **new InvoiceProcessor**(`api`): [`InvoiceProcessor`](payment_InvoiceProcessor.InvoiceProcessor)

Use `InvoiceProcessor.create()` to create an instance of this class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`YagnaApi`](shared_yagna_yagnaApi.YagnaApi) |

#### Returns

[`InvoiceProcessor`](payment_InvoiceProcessor.InvoiceProcessor)

#### Defined in

[src/payment/InvoiceProcessor.ts:29](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/InvoiceProcessor.ts#L29)

## Methods

### collectInvoices

▸ **collectInvoices**(`options?`): `Promise`\<{}[]\>

Collects invoices from the Yagna API until the limit is reached or there are no more invoices.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | `Object` | `{}` | The parameters for collecting invoices. |
| `options.after?` | `Date` | `undefined` | Only collect invoices that were created after this date. |
| `options.limit?` | `number` | `50` | Maximum number of invoices to collect. |
| `options.statuses?` | `string`[] | `undefined` | Only collect invoices with these statuses. |
| `options.providerIds?` | `string`[] | `undefined` | Only collect invoices from these providers. |
| `options.minAmount?` | `Numeric` | `undefined` | Only collect invoices with an amount greater than or equal to this. |
| `options.maxAmount?` | `Numeric` | `undefined` | Only collect invoices with an amount less than or equal to this. |
| `options.providerWallets?` | `string`[] | `undefined` | Only collect invoices from these provider wallets. |
| `options.paymentPlatforms?` | `string`[] | `undefined` | Only collect invoices from these payment platforms. |

#### Returns

`Promise`\<{}[]\>

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

[src/payment/InvoiceProcessor.ts:57](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/InvoiceProcessor.ts#L57)

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

[src/payment/InvoiceProcessor.ts:109](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/InvoiceProcessor.ts#L109)

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

[src/payment/InvoiceProcessor.ts:117](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/InvoiceProcessor.ts#L117)

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

[src/payment/InvoiceProcessor.ts:182](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/InvoiceProcessor.ts#L182)
