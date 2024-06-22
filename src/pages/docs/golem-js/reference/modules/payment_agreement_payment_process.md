---
title: "Module payment/agreement_payment_process"
pageTitle: "Module payment/agreement_payment_process - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module payment/agreement_payment_process within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: payment/agreement\_payment\_process

## Table of contents

### Classes

- [AgreementPaymentProcess](../classes/payment_agreement_payment_process.AgreementPaymentProcess)

### Interfaces

- [PaymentProcessOptions](../interfaces/payment_agreement_payment_process.PaymentProcessOptions)

### Type Aliases

- [DebitNoteFilter](payment_agreement_payment_process#debitnotefilter)
- [InvoiceFilter](payment_agreement_payment_process#invoicefilter)

## Type Aliases

### DebitNoteFilter

Ƭ **DebitNoteFilter**: (`debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote), `context`: \{ `agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement) ; `allocation`: [`Allocation`](../classes/payment_allocation.Allocation) ; `demand`: [`Demand`](../classes/market_demand_demand.Demand)  }) => `Promise`\<`boolean`\> \| `boolean`

#### Type declaration

▸ (`debitNote`, `context`): `Promise`\<`boolean`\> \| `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `debitNote` | [`DebitNote`](../classes/payment_debit_note.DebitNote) |
| `context` | `Object` |
| `context.agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `context.allocation` | [`Allocation`](../classes/payment_allocation.Allocation) |
| `context.demand` | [`Demand`](../classes/market_demand_demand.Demand) |

##### Returns

`Promise`\<`boolean`\> \| `boolean`

#### Defined in

[src/payment/agreement_payment_process.ts:15](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/agreement_payment_process.ts#L15)

___

### InvoiceFilter

Ƭ **InvoiceFilter**: (`invoice`: [`Invoice`](../classes/payment_invoice.Invoice), `context`: \{ `agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement) ; `allocation`: [`Allocation`](../classes/payment_allocation.Allocation) ; `demand`: [`Demand`](../classes/market_demand_demand.Demand)  }) => `Promise`\<`boolean`\> \| `boolean`

#### Type declaration

▸ (`invoice`, `context`): `Promise`\<`boolean`\> \| `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `invoice` | [`Invoice`](../classes/payment_invoice.Invoice) |
| `context` | `Object` |
| `context.agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `context.allocation` | [`Allocation`](../classes/payment_allocation.Allocation) |
| `context.demand` | [`Demand`](../classes/market_demand_demand.Demand) |

##### Returns

`Promise`\<`boolean`\> \| `boolean`

#### Defined in

[src/payment/agreement_payment_process.ts:24](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/agreement_payment_process.ts#L24)
