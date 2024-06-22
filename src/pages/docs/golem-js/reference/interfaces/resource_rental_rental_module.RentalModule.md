---
title: "Interface RentalModule"
pageTitle: "Interface RentalModule - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface RentalModule within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: RentalModule

[resource-rental/rental.module](../modules/resource_rental_rental_module).RentalModule

## Implemented by

- [`RentalModuleImpl`](../classes/resource_rental_rental_module.RentalModuleImpl)

## Table of contents

### Methods

- [createResourceRental](resource_rental_rental_module.RentalModule#createresourcerental)
- [createResourceRentalPool](resource_rental_rental_module.RentalModule#createresourcerentalpool)

## Methods

### createResourceRental

▸ **createResourceRental**(`agreement`, `allocation`, `options?`): [`ResourceRental`](../classes/resource_rental_resource_rental.ResourceRental)

Factory that creates a new resource rental that's fully configured.
This method will also create the payment process for the agreement.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `allocation` | [`Allocation`](../classes/payment_allocation.Allocation) |
| `options?` | [`ResourceRentalOptions`](resource_rental_resource_rental.ResourceRentalOptions) |

#### Returns

[`ResourceRental`](../classes/resource_rental_resource_rental.ResourceRental)

#### Defined in

[src/resource-rental/rental.module.ts:16](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/rental.module.ts#L16)

___

### createResourceRentalPool

▸ **createResourceRentalPool**(`draftPool`, `allocation`, `options?`): [`ResourceRentalPool`](../classes/resource_rental_resource_rental_pool.ResourceRentalPool)

Factory that creates new resource rental pool that's fully configured

#### Parameters

| Name | Type |
| :------ | :------ |
| `draftPool` | [`DraftOfferProposalPool`](../classes/market_draft_offer_proposal_pool.DraftOfferProposalPool) |
| `allocation` | [`Allocation`](../classes/payment_allocation.Allocation) |
| `options?` | [`ResourceRentalPoolOptions`](resource_rental_resource_rental_pool.ResourceRentalPoolOptions) |

#### Returns

[`ResourceRentalPool`](../classes/resource_rental_resource_rental_pool.ResourceRentalPool)

#### Defined in

[src/resource-rental/rental.module.ts:20](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/rental.module.ts#L20)
