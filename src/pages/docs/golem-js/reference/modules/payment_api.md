---
title: "Module payment/api"
pageTitle: "Module payment/api - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module payment/api within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: payment/api

## Table of contents

### Interfaces

- [IPaymentApi](../interfaces/payment_api.IPaymentApi)

### Type Aliases

- [PaymentEvents](payment_api#paymentevents)
- [CreateAllocationParams](payment_api#createallocationparams)

## Type Aliases

### PaymentEvents

Ƭ **PaymentEvents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allocationCreated` | (`allocation`: [`Allocation`](../classes/payment_allocation.Allocation)) => `void` |
| `errorCreatingAllocation` | (`error`: `Error`) => `void` |
| `allocationReleased` | (`allocation`: [`Allocation`](../classes/payment_allocation.Allocation)) => `void` |
| `errorReleasingAllocation` | (`allocation`: [`Allocation`](../classes/payment_allocation.Allocation), `error`: `Error`) => `void` |
| `allocationAmended` | (`allocation`: [`Allocation`](../classes/payment_allocation.Allocation)) => `void` |
| `errorAmendingAllocation` | (`allocation`: [`Allocation`](../classes/payment_allocation.Allocation), `error`: `Error`) => `void` |
| `invoiceReceived` | (`invoice`: [`Invoice`](../classes/payment_invoice.Invoice)) => `void` |
| `debitNoteReceived` | (`debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote)) => `void` |
| `invoiceAccepted` | (`invoice`: [`Invoice`](../classes/payment_invoice.Invoice)) => `void` |
| `invoiceRejected` | (`invoice`: [`Invoice`](../classes/payment_invoice.Invoice)) => `void` |
| `errorAcceptingInvoice` | (`invoice`: [`Invoice`](../classes/payment_invoice.Invoice), `error`: `Error`) => `void` |
| `errorRejectingInvoice` | (`invoice`: [`Invoice`](../classes/payment_invoice.Invoice), `error`: `Error`) => `void` |
| `debitNoteAccepted` | (`debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote)) => `void` |
| `debitNoteRejected` | (`debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote)) => `void` |
| `errorAcceptingDebitNote` | (`debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote), `error`: `Error`) => `void` |
| `errorRejectingDebitNote` | (`debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote), `error`: `Error`) => `void` |

#### Defined in

[src/payment/api.ts:6](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/api.ts#L6)

___

### CreateAllocationParams

Ƭ **CreateAllocationParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `budget` | `number` | How much to allocate |
| `expirationSec` | `number` | How long the allocation should be valid |
| `paymentPlatform?` | `string` | Optionally override the payment platform to use for this allocation |
| `deposit?` | \{ `contract`: `string` ; `id`: `string`  } | Optionally provide a deposit to be used for the allocation, instead of using funds from the yagna wallet. Deposit is a way to pay for the computation using someone else's funds. The other party has to call the `createDeposit` method on the `LockPayment` smart contract and provide the deposit ID. |
| `deposit.contract` | `string` | Address of the smart contract that holds the deposit. |
| `deposit.id` | `string` | ID of the deposit, obtained by calling the `createDeposit` method on the smart contract. |

#### Defined in

[src/payment/api.ts:56](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/api.ts#L56)
