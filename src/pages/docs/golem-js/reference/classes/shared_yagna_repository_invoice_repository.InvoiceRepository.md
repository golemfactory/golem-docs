---
title: "Class InvoiceRepository"
pageTitle: "Class InvoiceRepository - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class InvoiceRepository within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: InvoiceRepository

[shared/yagna/repository/invoice-repository](../modules/shared_yagna_repository_invoice_repository).InvoiceRepository

## Implements

- [`IInvoiceRepository`](../interfaces/payment_invoice.IInvoiceRepository)

## Table of contents

### Constructors

- [constructor](shared_yagna_repository_invoice_repository.InvoiceRepository#constructor)

### Methods

- [getById](shared_yagna_repository_invoice_repository.InvoiceRepository#getbyid)

## Constructors

### constructor

• **new InvoiceRepository**(`paymentClient`, `marketClient`): [`InvoiceRepository`](shared_yagna_repository_invoice_repository.InvoiceRepository)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentClient` | `RequestorService` |
| `marketClient` | `RequestorService` |

#### Returns

[`InvoiceRepository`](shared_yagna_repository_invoice_repository.InvoiceRepository)

#### Defined in

[src/shared/yagna/repository/invoice-repository.ts:8](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/invoice-repository.ts#L8)

## Methods

### getById

▸ **getById**(`id`): `Promise`\<[`Invoice`](payment_invoice.Invoice)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Invoice`](payment_invoice.Invoice)\>

#### Implementation of

[IInvoiceRepository](../interfaces/payment_invoice.IInvoiceRepository).[getById](../interfaces/payment_invoice.IInvoiceRepository#getbyid)

#### Defined in

[src/shared/yagna/repository/invoice-repository.ts:13](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/invoice-repository.ts#L13)
