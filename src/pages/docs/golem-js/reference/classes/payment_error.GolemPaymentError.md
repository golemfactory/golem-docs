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

- [`GolemModuleError`](error_golem_error.GolemModuleError)

  ↳ **`GolemPaymentError`**

## Table of contents

### Constructors

- [constructor](payment_error.GolemPaymentError#constructor)

### Properties

- [code](payment_error.GolemPaymentError#code)
- [allocation](payment_error.GolemPaymentError#allocation)
- [provider](payment_error.GolemPaymentError#provider)
- [previous](payment_error.GolemPaymentError#previous)

## Constructors

### constructor

• **new GolemPaymentError**(`message`, `code`, `allocation?`, `provider?`, `previous?`): [`GolemPaymentError`](payment_error.GolemPaymentError)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`PaymentErrorCode`](../enums/payment_error.PaymentErrorCode) |
| `allocation?` | `Allocation` |
| `provider?` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `previous?` | `Error` |

#### Returns

[`GolemPaymentError`](payment_error.GolemPaymentError)

#### Overrides

[GolemModuleError](error_golem_error.GolemModuleError).[constructor](error_golem_error.GolemModuleError#constructor)

#### Defined in

[src/payment/error.ts:19](https://github.com/golemfactory/golem-js/blob/7cee55b/src/payment/error.ts#L19)

## Properties

### code

• **code**: [`PaymentErrorCode`](../enums/payment_error.PaymentErrorCode)

#### Inherited from

[GolemModuleError](error_golem_error.GolemModuleError).[code](error_golem_error.GolemModuleError#code)

#### Defined in

[src/payment/error.ts:21](https://github.com/golemfactory/golem-js/blob/7cee55b/src/payment/error.ts#L21)

___

### allocation

• `Optional` **allocation**: `Allocation`

#### Defined in

[src/payment/error.ts:22](https://github.com/golemfactory/golem-js/blob/7cee55b/src/payment/error.ts#L22)

___

### provider

• `Optional` **provider**: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)

#### Defined in

[src/payment/error.ts:23](https://github.com/golemfactory/golem-js/blob/7cee55b/src/payment/error.ts#L23)

___

### previous

• `Optional` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemModuleError](error_golem_error.GolemModuleError).[previous](error_golem_error.GolemModuleError#previous)

#### Defined in

[src/payment/error.ts:24](https://github.com/golemfactory/golem-js/blob/7cee55b/src/payment/error.ts#L24)
