---
title: "Class RentalModuleImpl"
pageTitle: "Class RentalModuleImpl - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class RentalModuleImpl within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: RentalModuleImpl

[resource-rental/rental.module](../modules/resource_rental_rental_module).RentalModuleImpl

## Implements

- [`RentalModule`](../interfaces/resource_rental_rental_module.RentalModule)

## Table of contents

### Constructors

- [constructor](resource_rental_rental_module.RentalModuleImpl#constructor)

### Methods

- [createResourceRental](resource_rental_rental_module.RentalModuleImpl#createresourcerental)
- [createResourceRentalPool](resource_rental_rental_module.RentalModuleImpl#createresourcerentalpool)

## Constructors

### constructor

• **new RentalModuleImpl**(`deps`): [`RentalModuleImpl`](resource_rental_rental_module.RentalModuleImpl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deps` | `Object` |
| `deps.marketModule` | [`MarketModule`](../interfaces/market_market_module.MarketModule) |
| `deps.paymentModule` | [`PaymentModule`](../interfaces/payment_payment_module.PaymentModule) |
| `deps.activityModule` | [`ActivityModule`](../interfaces/activity_activity_module.ActivityModule) |
| `deps.networkModule` | [`NetworkModule`](../interfaces/network_network_module.NetworkModule) |
| `deps.storageProvider` | [`StorageProvider`](../interfaces/shared_storage_provider.StorageProvider) |
| `deps.logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |

#### Returns

[`RentalModuleImpl`](resource_rental_rental_module.RentalModuleImpl)

#### Defined in

[src/resource-rental/rental.module.ts:28](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/rental.module.ts#L28)

## Methods

### createResourceRental

▸ **createResourceRental**(`agreement`, `allocation`, `options?`): [`ResourceRental`](resource_rental_resource_rental.ResourceRental)

Factory that creates a new resource rental that's fully configured.
This method will also create the payment process for the agreement.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](market_agreement_agreement.Agreement) |
| `allocation` | [`Allocation`](payment_allocation.Allocation) |
| `options?` | [`ResourceRentalOptions`](../interfaces/resource_rental_resource_rental.ResourceRentalOptions) |

#### Returns

[`ResourceRental`](resource_rental_resource_rental.ResourceRental)

#### Implementation of

[RentalModule](../interfaces/resource_rental_rental_module.RentalModule).[createResourceRental](../interfaces/resource_rental_rental_module.RentalModule#createresourcerental)

#### Defined in

[src/resource-rental/rental.module.ts:39](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/rental.module.ts#L39)

___

### createResourceRentalPool

▸ **createResourceRentalPool**(`draftPool`, `allocation`, `options?`): [`ResourceRentalPool`](resource_rental_resource_rental_pool.ResourceRentalPool)

Factory that creates new resource rental pool that's fully configured

#### Parameters

| Name | Type |
| :------ | :------ |
| `draftPool` | [`DraftOfferProposalPool`](market_draft_offer_proposal_pool.DraftOfferProposalPool) |
| `allocation` | [`Allocation`](payment_allocation.Allocation) |
| `options?` | [`ResourceRentalPoolOptions`](../interfaces/resource_rental_resource_rental_pool.ResourceRentalPoolOptions) |

#### Returns

[`ResourceRentalPool`](resource_rental_resource_rental_pool.ResourceRentalPool)

#### Implementation of

[RentalModule](../interfaces/resource_rental_rental_module.RentalModule).[createResourceRentalPool](../interfaces/resource_rental_rental_module.RentalModule#createresourcerentalpool)

#### Defined in

[src/resource-rental/rental.module.ts:57](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/rental.module.ts#L57)
