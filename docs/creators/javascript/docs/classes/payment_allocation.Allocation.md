# Class: Allocation

[payment/allocation](../modules/payment_allocation.md).Allocation

Allocation module - an object represents a designated sum of money reserved for the purpose of making some particular payments. Allocations are currently purely virtual objects. An Allocation is connected to a payment account (wallet) specified by address and payment platform field.

## Table of contents

### Methods

- [create](payment_allocation.Allocation.md#create)
- [getRemainingAmount](payment_allocation.Allocation.md#getremainingamount)
- [getSpentAmount](payment_allocation.Allocation.md#getspentamount)
- [release](payment_allocation.Allocation.md#release)
- [getDemandDecoration](payment_allocation.Allocation.md#getdemanddecoration)

### Properties

- [id](payment_allocation.Allocation.md#id)
- [timestamp](payment_allocation.Allocation.md#timestamp)
- [timeout](payment_allocation.Allocation.md#timeout)
- [address](payment_allocation.Allocation.md#address)
- [paymentPlatform](payment_allocation.Allocation.md#paymentplatform)
- [totalAmount](payment_allocation.Allocation.md#totalamount)

## Methods

### create

▸ `Static` **create**(`options`): `Promise`<[`Allocation`](payment_allocation.Allocation.md)\>

Create allocation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`AllocationOptions`](../interfaces/payment_allocation.AllocationOptions.md) | [AllocationOptions](../interfaces/payment_allocation.AllocationOptions.md) |

#### Returns

`Promise`<[`Allocation`](payment_allocation.Allocation.md)\>

#### Defined in

[yajsapi/payment/allocation.ts:39](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L39)

___

### getRemainingAmount

▸ **getRemainingAmount**(): `Promise`<`string`\>

Returns remaining amount for allocation

#### Returns

`Promise`<`string`\>

amount remaining

#### Defined in

[yajsapi/payment/allocation.ts:93](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L93)

___

### getSpentAmount

▸ **getSpentAmount**(): `Promise`<`string`\>

Returns already spent amount for allocation

#### Returns

`Promise`<`string`\>

spent amount

#### Defined in

[yajsapi/payment/allocation.ts:103](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L103)

___

### release

▸ **release**(): `Promise`<`void`\>

Release allocation

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/payment/allocation.ts:111](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L111)

___

### getDemandDecoration

▸ **getDemandDecoration**(): `Promise`<`MarketDecoration`\>

Returns Market ya-ts-client decoration

#### Returns

`Promise`<`MarketDecoration`\>

MarketDecoration

#### Defined in

[yajsapi/payment/allocation.ts:123](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L123)

## Properties

### id

• `Readonly` **id**: `string`

Allocation ID

#### Defined in

[yajsapi/payment/allocation.ts:20](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L20)

___

### timestamp

• `Readonly` **timestamp**: `string`

Timestamp of creation

#### Defined in

[yajsapi/payment/allocation.ts:22](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L22)

___

### timeout

• `Optional` `Readonly` **timeout**: `string`

Timeout

#### Defined in

[yajsapi/payment/allocation.ts:24](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L24)

___

### address

• `Readonly` **address**: `string`

Address of requestor

#### Defined in

[yajsapi/payment/allocation.ts:26](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L26)

___

### paymentPlatform

• `Readonly` **paymentPlatform**: `string`

Payment platform

#### Defined in

[yajsapi/payment/allocation.ts:28](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L28)

___

### totalAmount

• `Readonly` **totalAmount**: `string`

Total allocation Amount

#### Defined in

[yajsapi/payment/allocation.ts:30](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L30)
