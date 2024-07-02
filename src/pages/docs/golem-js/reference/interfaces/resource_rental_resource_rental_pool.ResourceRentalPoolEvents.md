---
title: "Interface ResourceRentalPoolEvents"
pageTitle: "Interface ResourceRentalPoolEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ResourceRentalPoolEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ResourceRentalPoolEvents

[resource-rental/resource-rental-pool](../modules/resource_rental_resource_rental_pool).ResourceRentalPoolEvents

## Table of contents

### Properties

- [ready](resource_rental_resource_rental_pool.ResourceRentalPoolEvents#ready)
- [end](resource_rental_resource_rental_pool.ResourceRentalPoolEvents#end)
- [acquired](resource_rental_resource_rental_pool.ResourceRentalPoolEvents#acquired)
- [released](resource_rental_resource_rental_pool.ResourceRentalPoolEvents#released)
- [created](resource_rental_resource_rental_pool.ResourceRentalPoolEvents#created)
- [errorDestroyingRental](resource_rental_resource_rental_pool.ResourceRentalPoolEvents#errordestroyingrental)
- [destroyed](resource_rental_resource_rental_pool.ResourceRentalPoolEvents#destroyed)
- [errorCreatingRental](resource_rental_resource_rental_pool.ResourceRentalPoolEvents#errorcreatingrental)
- [draining](resource_rental_resource_rental_pool.ResourceRentalPoolEvents#draining)

## Properties

### ready

• **ready**: () => `void`

Triggered when the pool has the minimal number of rentals prepared for operations

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:35](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental-pool.ts#L35)

___

### end

• **end**: () => `void`

Triggered when the pool is emptied from all rentals

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:38](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental-pool.ts#L38)

___

### acquired

• **acquired**: (`event`: \{ `agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:40](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental-pool.ts#L40)

___

### released

• **released**: (`event`: \{ `agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:41](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental-pool.ts#L41)

___

### created

• **created**: (`event`: \{ `agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:43](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental-pool.ts#L43)

___

### errorDestroyingRental

• **errorDestroyingRental**: (`event`: \{ `agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement) ; `error`: [`GolemMarketError`](../classes/market_error.GolemMarketError)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |
| `event.error` | [`GolemMarketError`](../classes/market_error.GolemMarketError) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:44](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental-pool.ts#L44)

___

### destroyed

• **destroyed**: (`event`: \{ `agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:46](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental-pool.ts#L46)

___

### errorCreatingRental

• **errorCreatingRental**: (`event`: \{ `error`: [`GolemMarketError`](../classes/market_error.GolemMarketError)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.error` | [`GolemMarketError`](../classes/market_error.GolemMarketError) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:47](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental-pool.ts#L47)

___

### draining

• **draining**: () => `void`

Triggered when the pool enters the "draining" state

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:50](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental-pool.ts#L50)
