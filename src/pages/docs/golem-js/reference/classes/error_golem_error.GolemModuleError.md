---
title: "Class GolemModuleError"
pageTitle: "Class GolemModuleError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemModuleError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemModuleError

[error/golem-error](../modules/error_golem_error).GolemModuleError

Module specific errors - Market, Work, Payment.
Each of the major modules will have its own domain specific root error type,
additionally containing an error code specific to a given subdomain

## Hierarchy

- [`GolemError`](error_golem_error.GolemError)

  ↳ **`GolemModuleError`**

  ↳↳ [`GolemMarketError`](market_error.GolemMarketError)

  ↳↳ [`GolemNetworkError`](network_error.GolemNetworkError)

  ↳↳ [`GolemPaymentError`](payment_error.GolemPaymentError)

  ↳↳ [`GolemWorkError`](task_error.GolemWorkError)

## Table of contents

### Constructors

- [constructor](error_golem_error.GolemModuleError#constructor)

### Properties

- [code](error_golem_error.GolemModuleError#code)
- [previous](error_golem_error.GolemModuleError#previous)

## Constructors

### constructor

• **new GolemModuleError**(`message`, `code`, `previous?`): [`GolemModuleError`](error_golem_error.GolemModuleError)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | `number` |
| `previous?` | `Error` |

#### Returns

[`GolemModuleError`](error_golem_error.GolemModuleError)

#### Overrides

[GolemError](error_golem_error.GolemError).[constructor](error_golem_error.GolemError#constructor)

#### Defined in

[src/error/golem-error.ts:64](https://github.com/golemfactory/golem-js/blob/9789a95/src/error/golem-error.ts#L64)

## Properties

### code

• **code**: `number`

#### Defined in

[src/error/golem-error.ts:66](https://github.com/golemfactory/golem-js/blob/9789a95/src/error/golem-error.ts#L66)

___

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemError](error_golem_error.GolemError).[previous](error_golem_error.GolemError#previous)

#### Defined in

[src/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/9789a95/src/error/golem-error.ts#L10)
