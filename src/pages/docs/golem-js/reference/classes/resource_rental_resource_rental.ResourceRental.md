---
title: "Class ResourceRental"
pageTitle: "Class ResourceRental - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ResourceRental within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ResourceRental

[resource-rental/resource-rental](../modules/resource_rental_resource_rental).ResourceRental

Combines an agreement, activity, exe unit and payment process into a single high-level abstraction.

## Table of contents

### Constructors

- [constructor](resource_rental_resource_rental.ResourceRental#constructor)

### Properties

- [events](resource_rental_resource_rental.ResourceRental#events)
- [networkNode](resource_rental_resource_rental.ResourceRental#networknode)
- [agreement](resource_rental_resource_rental.ResourceRental#agreement)

### Methods

- [stopAndFinalize](resource_rental_resource_rental.ResourceRental#stopandfinalize)
- [hasActivity](resource_rental_resource_rental.ResourceRental#hasactivity)
- [getExeUnit](resource_rental_resource_rental.ResourceRental#getexeunit)
- [destroyExeUnit](resource_rental_resource_rental.ResourceRental#destroyexeunit)
- [fetchAgreementState](resource_rental_resource_rental.ResourceRental#fetchagreementstate)

## Constructors

### constructor

• **new ResourceRental**(`agreement`, `storageProvider`, `paymentProcess`, `marketModule`, `activityModule`, `logger`, `resourceRentalOptions?`): [`ResourceRental`](resource_rental_resource_rental.ResourceRental)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](market_agreement_agreement.Agreement) |
| `storageProvider` | [`StorageProvider`](../interfaces/shared_storage_provider.StorageProvider) |
| `paymentProcess` | [`AgreementPaymentProcess`](payment_agreement_payment_process.AgreementPaymentProcess) |
| `marketModule` | [`MarketModule`](../interfaces/market_market_module.MarketModule) |
| `activityModule` | [`ActivityModule`](../interfaces/activity_activity_module.ActivityModule) |
| `logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |
| `resourceRentalOptions?` | [`ResourceRentalOptions`](../interfaces/resource_rental_resource_rental.ResourceRentalOptions) |

#### Returns

[`ResourceRental`](resource_rental_resource_rental.ResourceRental)

#### Defined in

[src/resource-rental/resource-rental.ts:45](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L45)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`ResourceRentalEvents`](../interfaces/resource_rental_resource_rental.ResourceRentalEvents), `any`\>

#### Defined in

[src/resource-rental/resource-rental.ts:37](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L37)

___

### networkNode

• `Optional` `Readonly` **networkNode**: [`NetworkNode`](network_node.NetworkNode)

#### Defined in

[src/resource-rental/resource-rental.ts:38](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L38)

___

### agreement

• `Readonly` **agreement**: [`Agreement`](market_agreement_agreement.Agreement)

#### Defined in

[src/resource-rental/resource-rental.ts:46](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L46)

## Methods

### stopAndFinalize

▸ **stopAndFinalize**(`signalOrTimeout?`): `Promise`\<`void`\>

Terminates the activity and agreement (stopping any ongoing work) and finalizes the payment process.
Resolves when the rental will be fully terminated and all pending business operations finalized.
If the rental is already finalized, it will resolve immediately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signalOrTimeout?` | `number` \| `AbortSignal` | timeout in milliseconds or an AbortSignal that will be used to cancel the finalization process, especially the payment process. Please note that canceling the payment process may fail to comply with the terms of the agreement. If this method is called multiple times, it will return the same promise, ignoring the signal or timeout. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/resource-rental/resource-rental.ts:107](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L107)

___

### hasActivity

▸ **hasActivity**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/resource-rental/resource-rental.ts:117](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L117)

___

### getExeUnit

▸ **getExeUnit**(`signalOrTimeout?`): `Promise`\<[`ExeUnit`](activity_exe_unit_exe_unit.ExeUnit)\>

Creates an activity on the Provider, and returns a exe-unit that can be used to operate within the activity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signalOrTimeout?` | `number` \| `AbortSignal` | timeout in milliseconds or an AbortSignal that will be used to cancel the exe-unit request, especially when the exe-unit is in the process of starting, deploying and preparing the environment (including setup function) |

#### Returns

`Promise`\<[`ExeUnit`](activity_exe_unit_exe_unit.ExeUnit)\>

#### Defined in

[src/resource-rental/resource-rental.ts:126](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L126)

___

### destroyExeUnit

▸ **destroyExeUnit**(): `Promise`\<`void`\>

Destroy previously created exe-unit.
Please note that if ResourceRental is left without ExeUnit for some time (default 90s)
the provider will terminate the Agreement and ResourceRental will be unuseble

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/resource-rental/resource-rental.ts:152](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L152)

___

### fetchAgreementState

▸ **fetchAgreementState**(): `Promise`\<``"Proposal"`` \| ``"Pending"`` \| ``"Cancelled"`` \| ``"Rejected"`` \| ``"Approved"`` \| ``"Expired"`` \| ``"Terminated"``\>

#### Returns

`Promise`\<``"Proposal"`` \| ``"Pending"`` \| ``"Cancelled"`` \| ``"Rejected"`` \| ``"Approved"`` \| ``"Expired"`` \| ``"Terminated"``\>

#### Defined in

[src/resource-rental/resource-rental.ts:167](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L167)
