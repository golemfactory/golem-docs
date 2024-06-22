---
title: "Interface IInvoiceRepository"
pageTitle: "Interface IInvoiceRepository - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface IInvoiceRepository within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: IInvoiceRepository

[payment/invoice](../modules/payment_invoice).IInvoiceRepository

## Implemented by

- [`InvoiceRepository`](../classes/shared_yagna_repository_invoice_repository.InvoiceRepository)

## Table of contents

### Methods

- [getById](payment_invoice.IInvoiceRepository#getbyid)

## Methods

### getById

▸ **getById**(`id`): `Promise`\<[`Invoice`](../classes/payment_invoice.Invoice)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Invoice`](../classes/payment_invoice.Invoice)\>

#### Defined in

[src/payment/invoice.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/invoice.ts#L10)
