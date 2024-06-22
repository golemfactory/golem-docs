---
title: "Class GolemModuleError"
pageTitle: "Class GolemModuleError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemModuleError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemModuleError

[shared/error/golem-error](../modules/shared_error_golem_error).GolemModuleError

Module specific errors - Market, Work, Payment.
Each of the major modules will have its own domain specific root error type,
additionally containing an error code specific to a given subdomain

## Hierarchy

- [`GolemError`](shared_error_golem_error.GolemError)

  ↳ **`GolemModuleError`**

  ↳↳ [`GolemWorkError`](activity_exe_unit_error.GolemWorkError)

  ↳↳ [`GolemReputationError`](experimental_reputation_error.GolemReputationError)

  ↳↳ [`GolemMarketError`](market_error.GolemMarketError)

  ↳↳ [`GolemNetworkError`](network_error.GolemNetworkError)

  ↳↳ [`GolemPaymentError`](payment_error.GolemPaymentError)

## Table of contents

### Constructors

- [constructor](shared_error_golem_error.GolemModuleError#constructor)

### Properties

- [code](shared_error_golem_error.GolemModuleError#code)
- [previous](shared_error_golem_error.GolemModuleError#previous)

## Constructors

### constructor

• **new GolemModuleError**(`message`, `code`, `previous?`): [`GolemModuleError`](shared_error_golem_error.GolemModuleError)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | `string` \| `number` |
| `previous?` | `Error` |

#### Returns

[`GolemModuleError`](shared_error_golem_error.GolemModuleError)

#### Overrides

[GolemError](shared_error_golem_error.GolemError).[constructor](shared_error_golem_error.GolemError#constructor)

#### Defined in

[src/shared/error/golem-error.ts:64](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/error/golem-error.ts#L64)

## Properties

### code

• **code**: `string` \| `number`

#### Defined in

[src/shared/error/golem-error.ts:66](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/error/golem-error.ts#L66)

___

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemError](shared_error_golem_error.GolemError).[previous](shared_error_golem_error.GolemError#previous)

#### Defined in

[src/shared/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/error/golem-error.ts#L10)
