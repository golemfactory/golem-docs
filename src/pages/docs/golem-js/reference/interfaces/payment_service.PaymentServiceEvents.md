---
title: "Interface PaymentServiceEvents"
pageTitle: "Interface PaymentServiceEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface PaymentServiceEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: PaymentServiceEvents

[payment/service](../modules/payment_service).PaymentServiceEvents

## Table of contents

### Properties

- [error](payment_service.PaymentServiceEvents#error)
- [allocationCreated](payment_service.PaymentServiceEvents#allocationcreated)

## Properties

### error

• **error**: (`err`: `Error`) => `void`

Triggered when the service encounters an issue in an "asynchronous sub-process"  (like accepting payments)
that should be notified to the caller

#### Type declaration

▸ (`err`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `err` | `Error` | The error raised during an asynchronous process executed by the PaymentService |

##### Returns

`void`

#### Defined in

[src/payment/service.ts:19](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/service.ts#L19)

___

### allocationCreated

• **allocationCreated**: (`allocation`: `Allocation`) => `void`

#### Type declaration

▸ (`allocation`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `allocation` | `Allocation` |

##### Returns

`void`

#### Defined in

[src/payment/service.ts:20](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/payment/service.ts#L20)
