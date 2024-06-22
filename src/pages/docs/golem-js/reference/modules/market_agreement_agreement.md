---
title: "Module market/agreement/agreement"
pageTitle: "Module market/agreement/agreement - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/agreement/agreement within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/agreement/agreement

## Table of contents

### Classes

- [Agreement](../classes/market_agreement_agreement.Agreement)

### Interfaces

- [ProviderInfo](../interfaces/market_agreement_agreement.ProviderInfo)
- [AgreementOptions](../interfaces/market_agreement_agreement.AgreementOptions)
- [IAgreementRepository](../interfaces/market_agreement_agreement.IAgreementRepository)

### Type Aliases

- [AgreementState](market_agreement_agreement#agreementstate)

## Type Aliases

### AgreementState

Ƭ **AgreementState**: ``"Proposal"`` \| ``"Pending"`` \| ``"Cancelled"`` \| ``"Rejected"`` \| ``"Approved"`` \| ``"Expired"`` \| ``"Terminated"``

* `Proposal` - newly created by a Requestor (draft based on Proposal)
* `Pending` - confirmed by a Requestor and send to Provider for approval
* `Cancelled` by a Requestor
* `Rejected` by a Provider
* `Approved` by both sides
* `Expired` - not approved, rejected nor cancelled within validity period
* `Terminated` - finished after approval.

#### Defined in

[src/market/agreement/agreement.ts:14](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/agreement/agreement.ts#L14)
