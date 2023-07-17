[JavaScript API reference](../README) / Allocation

# Class: Allocation

Allocation module - an object represents a designated sum of money reserved for the purpose of making some particular payments. Allocations are currently purely virtual objects. An Allocation is connected to a payment account (wallet) specified by address and payment platform field.

## Table of contents

### Properties

- [id](Allocation#id)
- [timestamp](Allocation#timestamp)
- [timeout](Allocation#timeout)
- [address](Allocation#address)
- [paymentPlatform](Allocation#paymentplatform)
- [totalAmount](Allocation#totalamount)

### Methods

- [create](Allocation#create)
- [getRemainingAmount](Allocation#getremainingamount)
- [getSpentAmount](Allocation#getspentamount)
- [release](Allocation#release)
- [getDemandDecoration](Allocation#getdemanddecoration)

## Properties

### id

• `Readonly` **id**: `string`

Allocation ID

#### Defined in

[payment/allocation.ts:20](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/allocation.ts#L20)

___

### timestamp

• `Readonly` **timestamp**: `string`

Timestamp of creation

#### Defined in

[payment/allocation.ts:22](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/allocation.ts#L22)

___

### timeout

• `Optional` `Readonly` **timeout**: `string`

Timeout

#### Defined in

[payment/allocation.ts:24](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/allocation.ts#L24)

___

### address

• `Readonly` **address**: `string`

Address of requestor

#### Defined in

[payment/allocation.ts:26](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/allocation.ts#L26)

___

### paymentPlatform

• `Readonly` **paymentPlatform**: `string`

Payment platform

#### Defined in

[payment/allocation.ts:28](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/allocation.ts#L28)

___

### totalAmount

• `Readonly` **totalAmount**: `string`

Total allocation Amount

#### Defined in

[payment/allocation.ts:30](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/allocation.ts#L30)

## Methods

### create

▸ `Static` **create**(`options`): `Promise`<[`Allocation`](Allocation)\>

Create allocation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `AllocationOptions` | AllocationOptions |

#### Returns

`Promise`<[`Allocation`](Allocation)\>

#### Defined in

[payment/allocation.ts:39](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/allocation.ts#L39)

___

### getRemainingAmount

▸ **getRemainingAmount**(): `Promise`<`string`\>

Returns remaining amount for allocation

#### Returns

`Promise`<`string`\>

amount remaining

#### Defined in

[payment/allocation.ts:93](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/allocation.ts#L93)

___

### getSpentAmount

▸ **getSpentAmount**(): `Promise`<`string`\>

Returns already spent amount for allocation

#### Returns

`Promise`<`string`\>

spent amount

#### Defined in

[payment/allocation.ts:103](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/allocation.ts#L103)

___

### release

▸ **release**(): `Promise`<`void`\>

Release allocation

#### Returns

`Promise`<`void`\>

#### Defined in

[payment/allocation.ts:111](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/allocation.ts#L111)

___

### getDemandDecoration

▸ **getDemandDecoration**(): `Promise`<`MarketDecoration`\>

Returns Market ya-ts-client decoration

#### Returns

`Promise`<`MarketDecoration`\>

MarketDecoration

#### Defined in

[payment/allocation.ts:123](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/payment/allocation.ts#L123)
