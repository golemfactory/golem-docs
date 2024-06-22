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

[src/resource-rental/resource-rental.ts:38](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental.ts#L38)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`ResourceRentalEvents`](../interfaces/resource_rental_resource_rental.ResourceRentalEvents), `any`\>

#### Defined in

[src/resource-rental/resource-rental.ts:31](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental.ts#L31)

___

### networkNode

• `Optional` `Readonly` **networkNode**: [`NetworkNode`](network_node.NetworkNode)

#### Defined in

[src/resource-rental/resource-rental.ts:32](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental.ts#L32)

___

### agreement

• `Readonly` **agreement**: [`Agreement`](market_agreement_agreement.Agreement)

#### Defined in

[src/resource-rental/resource-rental.ts:39](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental.ts#L39)

## Methods

### stopAndFinalize

▸ **stopAndFinalize**(`signalOrTimeout?`): `Promise`\<`void`\>

Terminates the activity and agreement (stopping any ongoing work) and finalizes the payment process.
Resolves when the rental will be fully terminated and all pending business operations finalized.
If the rental is already finalized, it will resolve immediately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signalOrTimeout?` | `number` \| `AbortSignal` | timeout in milliseconds or an AbortSignal that will be used to cancel the finalization process, especially the payment process. Please note that canceling the payment process may fail to comply with the terms of the agreement. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/resource-rental/resource-rental.ts:59](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental.ts#L59)

___

### hasActivity

▸ **hasActivity**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/resource-rental/resource-rental.ts:104](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental.ts#L104)

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

[src/resource-rental/resource-rental.ts:113](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental.ts#L113)

___

### destroyExeUnit

▸ **destroyExeUnit**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/resource-rental/resource-rental.ts:145](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental.ts#L145)

___

### fetchAgreementState

▸ **fetchAgreementState**(): `Promise`\<``"Proposal"`` \| ``"Pending"`` \| ``"Cancelled"`` \| ``"Rejected"`` \| ``"Approved"`` \| ``"Expired"`` \| ``"Terminated"``\>

#### Returns

`Promise`\<``"Proposal"`` \| ``"Pending"`` \| ``"Cancelled"`` \| ``"Rejected"`` \| ``"Approved"`` \| ``"Expired"`` \| ``"Terminated"``\>

#### Defined in

[src/resource-rental/resource-rental.ts:154](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental.ts#L154)
