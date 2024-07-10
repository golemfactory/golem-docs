---
title: "Interface ResourceRentalModuleEvents"
pageTitle: "Interface ResourceRentalModuleEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ResourceRentalModuleEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ResourceRentalModuleEvents

[resource-rental/rental.module](../modules/resource_rental_rental_module).ResourceRentalModuleEvents

## Table of contents

### Properties

- [resourceRentalCreated](resource_rental_rental_module.ResourceRentalModuleEvents#resourcerentalcreated)
- [resourceRentalPoolCreated](resource_rental_rental_module.ResourceRentalModuleEvents#resourcerentalpoolcreated)

## Properties

### resourceRentalCreated

• **resourceRentalCreated**: (`agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement)) => `void`

Emitted when ResourceRenatl is successfully created

#### Type declaration

▸ (`agreement`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |

##### Returns

`void`

#### Defined in

[src/resource-rental/rental.module.ts:13](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/rental.module.ts#L13)

___

### resourceRentalPoolCreated

• **resourceRentalPoolCreated**: () => `void`

Emitted when ResourceRenatlPool is successfully created

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/resource-rental/rental.module.ts:16](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/rental.module.ts#L16)
