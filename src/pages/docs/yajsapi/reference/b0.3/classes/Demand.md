[JavaScript API reference](../README) / Demand

# Class: Demand

Demand module - an object which can be considered an "open" or public Demand, as it is not directed at a specific Provider, but rather is sent to the market so that the matching mechanism implementation can associate relevant Offers.
It is a special entity type because it inherits from the `EventTarget` class. Therefore, after creating it, you can add listeners to it, which will listen to offers from the market on an event of a specific type: `DemandEventType`.

## Hierarchy

- `EventTarget`

  ↳ **`Demand`**

## Table of contents

### Properties

- [id](Demand#id)

### Methods

- [create](Demand#create)
- [unsubscribe](Demand#unsubscribe)

## Properties

### id

• `Readonly` **id**: `any`

demand ID

#### Defined in

[market/demand.ts:61](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/demand.ts#L61)

## Methods

### create

▸ `Static` **create**(`taskPackage`, `allocations`, `options?`): `Promise`<[`Demand`](Demand)\>

Create demand for given taskPackage
Note: it is an "atomic" operation, ie. as soon as Demand is created, the subscription is published on the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taskPackage` | [`Package`](Package) | [Package](Package) |
| `allocations` | [`Allocation`](Allocation)[] | [Allocation](Allocation) |
| `options?` | [`DemandOptions`](../interfaces/DemandOptions) | [DemandOptions](../interfaces/DemandOptions) |

#### Returns

`Promise`<[`Demand`](Demand)\>

Demand

#### Defined in

[market/demand.ts:50](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/demand.ts#L50)

___

### unsubscribe

▸ **unsubscribe**(): `Promise`<`void`\>

Unsubscribe demand from the market

#### Returns

`Promise`<`void`\>

#### Defined in

[market/demand.ts:70](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/demand.ts#L70)
