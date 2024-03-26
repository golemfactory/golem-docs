---
title: "Interface InvoiceEvents"
pageTitle: "Interface InvoiceEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface InvoiceEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: InvoiceEvents

[payment/invoice](../modules/payment_invoice).InvoiceEvents

## Table of contents

### Properties

- [accepted](payment_invoice.InvoiceEvents#accepted)
- [paymentFailed](payment_invoice.InvoiceEvents#paymentfailed)

## Properties

### accepted

• **accepted**: (`details`: \{ `id`: `string` ; `agreementId`: `string` ; `amount`: `string` ; `provider`: [`ProviderInfo`](agreement_agreement.ProviderInfo)  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.agreementId` | `string` |
| `details.amount` | `string` |
| `details.provider` | [`ProviderInfo`](agreement_agreement.ProviderInfo) |

##### Returns

`void`

#### Defined in

[src/payment/invoice.ts:11](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/invoice.ts#L11)

___

### paymentFailed

• **paymentFailed**: (`details`: \{ `id`: `string` ; `agreementId`: `string` ; `reason`: `undefined` \| `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.agreementId` | `string` |
| `details.reason` | `undefined` \| `string` |

##### Returns

`void`

#### Defined in

[src/payment/invoice.ts:12](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/invoice.ts#L12)
