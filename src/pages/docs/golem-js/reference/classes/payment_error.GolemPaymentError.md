---
title: "Class GolemPaymentError"
pageTitle: "Class GolemPaymentError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemPaymentError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemPaymentError

[payment/error](../modules/payment_error).GolemPaymentError

Module specific errors - Market, Work, Payment.
Each of the major modules will have its own domain specific root error type,
additionally containing an error code specific to a given subdomain

## Hierarchy

- [`GolemModuleError`](shared_error_golem_error.GolemModuleError)

  ↳ **`GolemPaymentError`**

## Table of contents

### Constructors

- [constructor](payment_error.GolemPaymentError#constructor)

### Properties

- [code](payment_error.GolemPaymentError#code)
- [previous](payment_error.GolemPaymentError#previous)

### Methods

- [getAllocation](payment_error.GolemPaymentError#getallocation)
- [getProvider](payment_error.GolemPaymentError#getprovider)

## Constructors

### constructor

• **new GolemPaymentError**(`message`, `code`, `allocation?`, `provider?`, `previous?`): [`GolemPaymentError`](payment_error.GolemPaymentError)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`PaymentErrorCode`](../enums/payment_error.PaymentErrorCode) |
| `allocation?` | [`Allocation`](payment_allocation.Allocation) |
| `provider?` | [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo) |
| `previous?` | `Error` |

#### Returns

[`GolemPaymentError`](payment_error.GolemPaymentError)

#### Overrides

[GolemModuleError](shared_error_golem_error.GolemModuleError).[constructor](shared_error_golem_error.GolemModuleError#constructor)

#### Defined in

[src/payment/error.ts:23](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/error.ts#L23)

## Properties

### code

• **code**: [`PaymentErrorCode`](../enums/payment_error.PaymentErrorCode)

#### Inherited from

[GolemModuleError](shared_error_golem_error.GolemModuleError).[code](shared_error_golem_error.GolemModuleError#code)

#### Defined in

[src/payment/error.ts:25](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/error.ts#L25)

___

### previous

• `Optional` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemModuleError](shared_error_golem_error.GolemModuleError).[previous](shared_error_golem_error.GolemModuleError#previous)

#### Defined in

[src/payment/error.ts:28](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/error.ts#L28)

## Methods

### getAllocation

▸ **getAllocation**(): `undefined` \| [`Allocation`](payment_allocation.Allocation)

#### Returns

`undefined` \| [`Allocation`](payment_allocation.Allocation)

#### Defined in

[src/payment/error.ts:34](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/error.ts#L34)

___

### getProvider

▸ **getProvider**(): `undefined` \| [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Returns

`undefined` \| [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Defined in

[src/payment/error.ts:37](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/error.ts#L37)
