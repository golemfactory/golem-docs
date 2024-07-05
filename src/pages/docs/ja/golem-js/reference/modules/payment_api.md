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
| `allocationCreated` | (`event`: \{ `allocation`: [`Allocation`](../classes/payment_allocation.Allocation)  }) => `void` |
| `errorCreatingAllocation` | (`event`: \{ `error`: `Error`  }) => `void` |
| `allocationReleased` | (`event`: \{ `allocation`: [`Allocation`](../classes/payment_allocation.Allocation)  }) => `void` |
| `errorReleasingAllocation` | (`event`: \{ `allocation`: [`Allocation`](../classes/payment_allocation.Allocation) ; `error`: `Error`  }) => `void` |
| `allocationAmended` | (`event`: \{ `allocation`: [`Allocation`](../classes/payment_allocation.Allocation)  }) => `void` |
| `errorAmendingAllocation` | (`event`: \{ `allocation`: [`Allocation`](../classes/payment_allocation.Allocation) ; `error`: `Error`  }) => `void` |
| `invoiceReceived` | (`event`: \{ `invoice`: [`Invoice`](../classes/payment_invoice.Invoice)  }) => `void` |
| `debitNoteReceived` | (`event`: \{ `debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote)  }) => `void` |
| `invoiceAccepted` | (`event`: \{ `invoice`: [`Invoice`](../classes/payment_invoice.Invoice)  }) => `void` |
| `invoiceRejected` | (`event`: \{ `invoice`: [`Invoice`](../classes/payment_invoice.Invoice)  }) => `void` |
| `errorAcceptingInvoice` | (`event`: \{ `invoice`: [`Invoice`](../classes/payment_invoice.Invoice) ; `error`: `Error`  }) => `void` |
| `errorRejectingInvoice` | (`event`: \{ `invoice`: [`Invoice`](../classes/payment_invoice.Invoice) ; `error`: `Error`  }) => `void` |
| `debitNoteAccepted` | (`event`: \{ `debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote)  }) => `void` |
| `debitNoteRejected` | (`event`: \{ `debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote)  }) => `void` |
| `errorAcceptingDebitNote` | (`event`: \{ `debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote) ; `error`: `Error`  }) => `void` |
| `errorRejectingDebitNote` | (`event`: \{ `debitNote`: [`DebitNote`](../classes/payment_debit_note.DebitNote) ; `error`: `Error`  }) => `void` |

#### Defined in

[src/payment/api.ts:6](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L6)

___

### CreateAllocationParams

Ƭ **CreateAllocationParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `budget` | `number` | How much to allocate |
| `expirationSec` | `number` | How long the allocation should be valid |
| `paymentPlatform?` | `string` | Optionally override the payment platform to use for this allocation |
| `deposit?` | \{ `contract`: `string` ; `id`: `string`  } | Optionally provide a deposit to be used for the allocation, instead of using funds from the yagna wallet. Deposit is a way to pay for the computation using someone else's funds. The other party has to call the `createDeposit` method on the `LockPayment` smart contract and provide the deposit ID. **`Deprecated`** NOT IMPLEMENTED BY YAGNA This is a feature that's not yet released in Yagna. The deprecation note will be removed once the feature will be supported by the network. |
| `deposit.contract` | `string` | Address of the smart contract that holds the deposit. |
| `deposit.id` | `string` | ID of the deposit, obtained by calling the `createDeposit` method on the smart contract. |

#### Defined in

[src/payment/api.ts:56](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/api.ts#L56)
