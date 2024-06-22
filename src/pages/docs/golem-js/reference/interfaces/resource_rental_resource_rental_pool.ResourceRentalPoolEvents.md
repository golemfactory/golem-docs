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
- [destroyed](resource_rental_resource_rental_pool.ResourceRentalPoolEvents#destroyed)
- [error](resource_rental_resource_rental_pool.ResourceRentalPoolEvents#error)

## Properties

### ready

• **ready**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:32](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L32)

___

### end

• **end**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:33](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L33)

___

### acquired

• **acquired**: (`agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement)) => `void`

#### Type declaration

▸ (`agreement`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:34](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L34)

___

### released

• **released**: (`agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement)) => `void`

#### Type declaration

▸ (`agreement`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:35](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L35)

___

### created

• **created**: (`agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement)) => `void`

#### Type declaration

▸ (`agreement`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:36](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L36)

___

### destroyed

• **destroyed**: (`agreement`: [`Agreement`](../classes/market_agreement_agreement.Agreement)) => `void`

#### Type declaration

▸ (`agreement`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:37](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L37)

___

### error

• **error**: (`error`: [`GolemMarketError`](../classes/market_error.GolemMarketError)) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`GolemMarketError`](../classes/market_error.GolemMarketError) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:38](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L38)
