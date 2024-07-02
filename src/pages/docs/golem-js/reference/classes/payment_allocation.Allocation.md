---
title: "Class Allocation"
pageTitle: "Class Allocation - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Allocation within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Allocation

[payment/allocation](../modules/payment_allocation).Allocation

Represents a designated sum of money reserved for the purpose of making some particular payments. Allocations are currently purely virtual objects. An Allocation is connected to a payment account (wallet) specified by address and payment platform field.

## Table of contents

### Constructors

- [constructor](payment_allocation.Allocation#constructor)

### Properties

- [id](payment_allocation.Allocation#id)
- [timestamp](payment_allocation.Allocation#timestamp)
- [timeout](payment_allocation.Allocation#timeout)
- [address](payment_allocation.Allocation#address)
- [paymentPlatform](payment_allocation.Allocation#paymentplatform)
- [totalAmount](payment_allocation.Allocation#totalamount)
- [spentAmount](payment_allocation.Allocation#spentamount)
- [remainingAmount](payment_allocation.Allocation#remainingamount)

## Constructors

### constructor

• **new Allocation**(`model`): [`Allocation`](payment_allocation.Allocation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `Allocation` |

#### Returns

[`Allocation`](payment_allocation.Allocation)

#### Defined in

[src/payment/allocation.ts:41](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/allocation.ts#L41)

## Properties

### id

• `Readonly` **id**: `string`

Allocation ID

#### Defined in

[src/payment/allocation.ts:18](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/allocation.ts#L18)

___

### timestamp

• `Readonly` **timestamp**: `string`

Timestamp of creation

#### Defined in

[src/payment/allocation.ts:21](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/allocation.ts#L21)

___

### timeout

• `Optional` `Readonly` **timeout**: `string`

Timeout

#### Defined in

[src/payment/allocation.ts:24](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/allocation.ts#L24)

___

### address

• `Readonly` **address**: `string`

Address of requestor

#### Defined in

[src/payment/allocation.ts:27](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/allocation.ts#L27)

___

### paymentPlatform

• `Readonly` **paymentPlatform**: `string`

Payment platform

#### Defined in

[src/payment/allocation.ts:30](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/allocation.ts#L30)

___

### totalAmount

• `Readonly` **totalAmount**: `string`

Total allocation Amount

#### Defined in

[src/payment/allocation.ts:33](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/allocation.ts#L33)

___

### spentAmount

• `Readonly` **spentAmount**: `string`

The amount that has been already spent

#### Defined in

[src/payment/allocation.ts:36](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/allocation.ts#L36)

___

### remainingAmount

• `Readonly` **remainingAmount**: `string`

The amount left for spending

#### Defined in

[src/payment/allocation.ts:39](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/allocation.ts#L39)
