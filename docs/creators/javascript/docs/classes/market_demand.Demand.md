# Class: Demand

[market/demand](../modules/market_demand.md).Demand

Demand module - an object which can be considered an "open" or public Demand, as it is not directed at a specific Provider, but rather is sent to the market so that the matching mechanism implementation can associate relevant Offers.
It is a special entity type because it inherits from the `EventTarget` class. Therefore, after creating it, you can add listeners to it, which will listen to offers from the market on an event of a specific type: `DemandEventType`.

## Hierarchy

- `EventTarget`

  ↳ **`Demand`**

## Table of contents

### Methods

- [create](market_demand.Demand.md#create)
- [unsubscribe](market_demand.Demand.md#unsubscribe)

### Properties

- [id](market_demand.Demand.md#id)

## Methods

### create

▸ `Static` **create**(`taskPackage`, `allocations`, `options?`): `Promise`<[`Demand`](market_demand.Demand.md)\>

Create demand for given taskPackage
Note: it is an "atomic" operation, ie. as soon as Demand is created, the subscription is published on the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taskPackage` | [`Package`](package_package.Package.md) | Package |
| `allocations` | [`Allocation`](payment_allocation.Allocation.md)[] | Allocation |
| `options?` | [`DemandOptions`](../interfaces/market_demand.DemandOptions.md) | [DemandOptions](../interfaces/market_demand.DemandOptions.md) |

#### Returns

`Promise`<[`Demand`](market_demand.Demand.md)\>

Demand

#### Defined in

[yajsapi/market/demand.ts:50](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/demand.ts#L50)

___

### unsubscribe

▸ **unsubscribe**(): `Promise`<`void`\>

Unsubscribe demand from the market

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/market/demand.ts:70](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/demand.ts#L70)

## Properties

### id

• `Readonly` **id**: `any`

demand ID

#### Defined in

[yajsapi/market/demand.ts:61](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/demand.ts#L61)
