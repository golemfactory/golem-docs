---
title: "Module market/agreement/agreement-event"
pageTitle: "Module market/agreement/agreement-event - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/agreement/agreement-event within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/agreement/agreement-event

## Table of contents

### Type Aliases

- [AgreementApproved](market_agreement_agreement_event#agreementapproved)
- [AgreementTerminatedEvent](market_agreement_agreement_event#agreementterminatedevent)
- [AgreementRejectedEvent](market_agreement_agreement_event#agreementrejectedevent)
- [AgreementCancelledEvent](market_agreement_agreement_event#agreementcancelledevent)
- [AgreementEvent](market_agreement_agreement_event#agreementevent)

## Type Aliases

### AgreementApproved

Ƭ **AgreementApproved**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"AgreementApproved"`` |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `timestamp` | `Date` |

#### Defined in

[src/market/agreement/agreement-event.ts:3](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/agreement/agreement-event.ts#L3)

___

### AgreementTerminatedEvent

Ƭ **AgreementTerminatedEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"AgreementTerminated"`` |
| `terminatedBy` | ``"Provider"`` \| ``"Requestor"`` |
| `reason` | `string` |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `timestamp` | `Date` |

#### Defined in

[src/market/agreement/agreement-event.ts:9](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/agreement/agreement-event.ts#L9)

___

### AgreementRejectedEvent

Ƭ **AgreementRejectedEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"AgreementRejected"`` |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `reason` | `string` |
| `timestamp` | `Date` |

#### Defined in

[src/market/agreement/agreement-event.ts:17](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/agreement/agreement-event.ts#L17)

___

### AgreementCancelledEvent

Ƭ **AgreementCancelledEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"AgreementCancelled"`` |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `timestamp` | `Date` |

#### Defined in

[src/market/agreement/agreement-event.ts:24](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/agreement/agreement-event.ts#L24)

___

### AgreementEvent

Ƭ **AgreementEvent**: [`AgreementApproved`](market_agreement_agreement_event#agreementapproved) \| [`AgreementTerminatedEvent`](market_agreement_agreement_event#agreementterminatedevent) \| [`AgreementRejectedEvent`](market_agreement_agreement_event#agreementrejectedevent) \| [`AgreementCancelledEvent`](market_agreement_agreement_event#agreementcancelledevent)

#### Defined in

[src/market/agreement/agreement-event.ts:30](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/agreement/agreement-event.ts#L30)
