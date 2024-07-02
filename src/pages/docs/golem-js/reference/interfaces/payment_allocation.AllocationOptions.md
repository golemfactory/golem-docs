---
title: "Interface AllocationOptions"
pageTitle: "Interface AllocationOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface AllocationOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: AllocationOptions

[payment/allocation](../modules/payment_allocation).AllocationOptions

## Hierarchy

- [`BasePaymentOptions`](payment_config.BasePaymentOptions)

  ↳ **`AllocationOptions`**

## Table of contents

### Properties

- [account](payment_allocation.AllocationOptions#account)
- [expirationSec](payment_allocation.AllocationOptions#expirationsec)
- [yagnaOptions](payment_allocation.AllocationOptions#yagnaoptions)
- [budget](payment_allocation.AllocationOptions#budget)
- [payment](payment_allocation.AllocationOptions#payment)
- [paymentTimeout](payment_allocation.AllocationOptions#paymenttimeout)
- [paymentRequestTimeout](payment_allocation.AllocationOptions#paymentrequesttimeout)
- [unsubscribeTimeoutMs](payment_allocation.AllocationOptions#unsubscribetimeoutms)
- [logger](payment_allocation.AllocationOptions#logger)

## Properties

### account

• **account**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `platform` | `string` |

#### Defined in

[src/payment/allocation.ts:6](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/allocation.ts#L6)

___

### expirationSec

• `Optional` **expirationSec**: `number`

#### Defined in

[src/payment/allocation.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/allocation.ts#L10)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/shared_yagna_yagnaApi#yagnaoptions)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[yagnaOptions](payment_config.BasePaymentOptions#yagnaoptions)

#### Defined in

[src/payment/config.ts:4](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/config.ts#L4)

___

### budget

• `Optional` **budget**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[budget](payment_config.BasePaymentOptions#budget)

#### Defined in

[src/payment/config.ts:5](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/config.ts#L5)

___

### payment

• `Optional` **payment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `driver?` | `string` |
| `network?` | `string` |

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[payment](payment_config.BasePaymentOptions#payment)

#### Defined in

[src/payment/config.ts:6](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/config.ts#L6)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[paymentTimeout](payment_config.BasePaymentOptions#paymenttimeout)

#### Defined in

[src/payment/config.ts:7](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/config.ts#L7)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[paymentRequestTimeout](payment_config.BasePaymentOptions#paymentrequesttimeout)

#### Defined in

[src/payment/config.ts:8](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/config.ts#L8)

___

### unsubscribeTimeoutMs

• `Optional` **unsubscribeTimeoutMs**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[unsubscribeTimeoutMs](payment_config.BasePaymentOptions#unsubscribetimeoutms)

#### Defined in

[src/payment/config.ts:9](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/config.ts#L9)

___

### logger

• `Optional` **logger**: [`Logger`](shared_utils_logger_logger.Logger)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions).[logger](payment_config.BasePaymentOptions#logger)

#### Defined in

[src/payment/config.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/config.ts#L10)
