---
title: "Interface ResourceRentalEvents"
pageTitle: "Interface ResourceRentalEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ResourceRentalEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ResourceRentalEvents

[resource-rental/resource-rental](../modules/resource_rental_resource_rental).ResourceRentalEvents

## Table of contents

### Properties

- [finalized](resource_rental_resource_rental.ResourceRentalEvents#finalized)
- [exeUnitCreated](resource_rental_resource_rental.ResourceRentalEvents#exeunitcreated)
- [exeUnitDestroyed](resource_rental_resource_rental.ResourceRentalEvents#exeunitdestroyed)
- [error](resource_rental_resource_rental.ResourceRentalEvents#error)

## Properties

### finalized

• **finalized**: () => `void`

Emitted when the rental process is fully finalized

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental.ts:14](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L14)

___

### exeUnitCreated

• **exeUnitCreated**: (`activity`: [`Activity`](../classes/activity_activity.Activity)) => `void`

Emitted when ExeUnit is successfully created and initialised

#### Type declaration

▸ (`activity`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](../classes/activity_activity.Activity) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental.ts:17](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L17)

___

### exeUnitDestroyed

• **exeUnitDestroyed**: (`activity`: [`Activity`](../classes/activity_activity.Activity)) => `void`

Emitted when the ExeUnit is successfully destroyed

#### Type declaration

▸ (`activity`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](../classes/activity_activity.Activity) |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental.ts:20](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L20)

___

### error

• **error**: (`error`: `Error`) => `void`

Emitted when there is an error while creating or destroying the ExeUnit

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

##### Returns

`void`

#### Defined in

[src/resource-rental/resource-rental.ts:23](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L23)
