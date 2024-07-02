---
title: "Class GolemNetwork"
pageTitle: "Class GolemNetwork - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemNetwork within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemNetwork

[golem-network/golem-network](../modules/golem_network_golem_network).GolemNetwork

General purpose and high-level API for the Golem Network

This class is the main entry-point for developers that would like to build on Golem Network
using `@golem-sdk/golem-js`. It is supposed to provide an easy access API for use 80% of use cases.

## Table of contents

### Constructors

- [constructor](golem_network_golem_network.GolemNetwork#constructor)

### Properties

- [events](golem_network_golem_network.GolemNetwork#events)
- [options](golem_network_golem_network.GolemNetwork#options)
- [market](golem_network_golem_network.GolemNetwork#market)
- [payment](golem_network_golem_network.GolemNetwork#payment)
- [activity](golem_network_golem_network.GolemNetwork#activity)
- [network](golem_network_golem_network.GolemNetwork#network)
- [rental](golem_network_golem_network.GolemNetwork#rental)
- [services](golem_network_golem_network.GolemNetwork#services)

### Methods

- [connect](golem_network_golem_network.GolemNetwork#connect)
- [disconnect](golem_network_golem_network.GolemNetwork#disconnect)
- [oneOf](golem_network_golem_network.GolemNetwork#oneof)
- [manyOf](golem_network_golem_network.GolemNetwork#manyof)
- [isConnected](golem_network_golem_network.GolemNetwork#isconnected)
- [createNetwork](golem_network_golem_network.GolemNetwork#createnetwork)
- [destroyNetwork](golem_network_golem_network.GolemNetwork#destroynetwork)

## Constructors

### constructor

• **new GolemNetwork**(`options?`): [`GolemNetwork`](golem_network_golem_network.GolemNetwork)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<[`GolemNetworkOptions`](../interfaces/golem_network_golem_network.GolemNetworkOptions)\> |

#### Returns

[`GolemNetwork`](golem_network_golem_network.GolemNetwork)

#### Defined in

[src/golem-network/golem-network.ts:229](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L229)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`GolemNetworkEvents`](../interfaces/golem_network_golem_network.GolemNetworkEvents), `any`\>

#### Defined in

[src/golem-network/golem-network.ts:198](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L198)

___

### options

• `Readonly` **options**: [`GolemNetworkOptions`](../interfaces/golem_network_golem_network.GolemNetworkOptions)

#### Defined in

[src/golem-network/golem-network.ts:200](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L200)

___

### market

• `Readonly` **market**: [`MarketModule`](../interfaces/market_market_module.MarketModule)

#### Defined in

[src/golem-network/golem-network.ts:206](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L206)

___

### payment

• `Readonly` **payment**: [`PaymentModule`](../interfaces/payment_payment_module.PaymentModule)

#### Defined in

[src/golem-network/golem-network.ts:207](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L207)

___

### activity

• `Readonly` **activity**: [`ActivityModule`](../interfaces/activity_activity_module.ActivityModule)

#### Defined in

[src/golem-network/golem-network.ts:208](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L208)

___

### network

• `Readonly` **network**: [`NetworkModule`](../interfaces/network_network_module.NetworkModule)

#### Defined in

[src/golem-network/golem-network.ts:209](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L209)

___

### rental

• `Readonly` **rental**: [`RentalModule`](../interfaces/resource_rental_rental_module.RentalModule)

#### Defined in

[src/golem-network/golem-network.ts:210](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L210)

___

### services

• `Readonly` **services**: [`GolemServices`](../modules/golem_network_golem_network#golemservices)

Dependency Container

#### Defined in

[src/golem-network/golem-network.ts:215](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L215)

## Methods

### connect

▸ **connect**(): `Promise`\<`void`\>

"Connects" to the network by initializing the underlying components required to perform operations on Golem Network

#### Returns

`Promise`\<`void`\>

Resolves when all initialization steps are completed

#### Defined in

[src/golem-network/golem-network.ts:322](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L322)

___

### disconnect

▸ **disconnect**(): `Promise`\<`void`\>

"Disconnects" from the Golem Network

#### Returns

`Promise`\<`void`\>

Resolves when all shutdown steps are completed

#### Defined in

[src/golem-network/golem-network.ts:358](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L358)

___

### oneOf

▸ **oneOf**(`options`): `Promise`\<[`ResourceRental`](resource_rental_resource_rental.ResourceRental)\>

Define your computational resource demand and access a single instance

Use Case: Get a single instance of a resource from the market to execute operations on

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`OneOfOptions`](../interfaces/golem_network_golem_network.OneOfOptions) |

#### Returns

`Promise`\<[`ResourceRental`](resource_rental_resource_rental.ResourceRental)\>

**`Example`**

```ts
const rental = await glm.oneOf({ order });
await rental
 .getExeUnit()
 .then((exe) => exe.run("echo Hello, Golem! 👋"))
 .then((res) => console.log(res.stdout));
await rental.stopAndFinalize();
```

#### Defined in

[src/golem-network/golem-network.ts:425](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L425)

___

### manyOf

▸ **manyOf**(`options`): `Promise`\<[`ResourceRentalPool`](resource_rental_resource_rental_pool.ResourceRentalPool)\>

Define your computational resource demand and access a pool of instances.
The pool will grow up to the specified poolSize.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ManyOfOptions`](../interfaces/golem_network_golem_network.ManyOfOptions) |

#### Returns

`Promise`\<[`ResourceRentalPool`](resource_rental_resource_rental_pool.ResourceRentalPool)\>

**`Example`**

```ts
// create a pool that can grow up to 3 rentals at the same time
const pool = await glm.manyOf({
  poolSize: 3,
  demand
});
await Promise.allSettled([
  pool.withRental(async (rental) =>
    rental
      .getExeUnit()
      .then((exe) => exe.run("echo Hello, Golem from the first machine! 👋"))
      .then((res) => console.log(res.stdout)),
  ),
  pool.withRental(async (rental) =>
    rental
      .getExeUnit()
      .then((exe) => exe.run("echo Hello, Golem from the second machine! 👋"))
      .then((res) => console.log(res.stdout)),
  ),
  pool.withRental(async (rental) =>
    rental
      .getExeUnit()
      .then((exe) => exe.run("echo Hello, Golem from the third machine! 👋"))
      .then((res) => console.log(res.stdout)),
  ),
]);
```

#### Defined in

[src/golem-network/golem-network.ts:548](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L548)

___

### isConnected

▸ **isConnected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/golem-network/golem-network.ts:621](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L621)

___

### createNetwork

▸ **createNetwork**(`options?`): `Promise`\<[`Network`](network_network.Network)\>

Creates a new logical network within the Golem VPN infrastructure.
Allows communication between network nodes using standard network mechanisms,
but requires specific implementation in the ExeUnit/runtime,
which must be capable of providing a standard Unix-socket interface to their payloads
and marshaling the logical network traffic through the Golem Net transport layer

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`NetworkOptions`](../interfaces/network_network_module.NetworkOptions) |

#### Returns

`Promise`\<[`Network`](network_network.Network)\>

#### Defined in

[src/golem-network/golem-network.ts:633](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L633)

___

### destroyNetwork

▸ **destroyNetwork**(`network`): `Promise`\<`void`\>

Removes an existing network from the Golem VPN infrastructure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](network_network.Network) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/golem-network/golem-network.ts:641](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L641)
