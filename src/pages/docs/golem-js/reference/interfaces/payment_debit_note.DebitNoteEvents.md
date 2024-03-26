---
title: "Interface DebitNoteEvents"
pageTitle: "Interface DebitNoteEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface DebitNoteEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: DebitNoteEvents

[payment/debit\_note](../modules/payment_debit_note).DebitNoteEvents

## Table of contents

### Properties

- [accepted](payment_debit_note.DebitNoteEvents#accepted)
- [paymentFailed](payment_debit_note.DebitNoteEvents#paymentfailed)

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

[src/payment/debit_note.ts:12](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/debit_note.ts#L12)

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

[src/payment/debit_note.ts:13](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/debit_note.ts#L13)
