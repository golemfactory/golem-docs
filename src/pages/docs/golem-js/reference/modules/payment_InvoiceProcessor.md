---
title: "Module payment/InvoiceProcessor"
pageTitle: "Module payment/InvoiceProcessor - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module payment/InvoiceProcessor within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: payment/InvoiceProcessor

## Table of contents

### Classes

- [InvoiceProcessor](../classes/payment_InvoiceProcessor.InvoiceProcessor)

### Type Aliases

- [InvoiceAcceptResult](payment_InvoiceProcessor#invoiceacceptresult)

## Type Aliases

### InvoiceAcceptResult

Ƭ **InvoiceAcceptResult**: \{ `invoiceId`: `string` ; `allocation`: `PaymentApi.AllocationDTO` ; `success`: ``true`` ; `amount`: `string` ; `dryRun`: `boolean`  } \| \{ `invoiceId`: `string` ; `allocation`: `PaymentApi.AllocationDTO` ; `success`: ``false`` ; `amount`: `string` ; `reason`: `unknown` ; `dryRun`: `boolean`  }

#### Defined in

[src/payment/InvoiceProcessor.ts:5](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/InvoiceProcessor.ts#L5)
