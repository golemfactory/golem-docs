---
title: "Class GolemMarketError"
pageTitle: "Class GolemMarketError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemMarketError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemMarketError

[market/error](../modules/market_error).GolemMarketError

Module specific errors - Market, Work, Payment.
Each of the major modules will have its own domain specific root error type,
additionally containing an error code specific to a given subdomain

## Hierarchy

- [`GolemModuleError`](error_golem_error.GolemModuleError)

  ↳ **`GolemMarketError`**

## Table of contents

### Constructors

- [constructor](market_error.GolemMarketError#constructor)

### Properties

- [code](market_error.GolemMarketError#code)
- [demand](market_error.GolemMarketError#demand)
- [previous](market_error.GolemMarketError#previous)

## Constructors

### constructor

• **new GolemMarketError**(`message`, `code`, `demand?`, `previous?`): [`GolemMarketError`](market_error.GolemMarketError)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`MarketErrorCode`](../enums/market_error.MarketErrorCode) |
| `demand?` | `Demand` |
| `previous?` | `Error` |

#### Returns

[`GolemMarketError`](market_error.GolemMarketError)

#### Overrides

[GolemModuleError](error_golem_error.GolemModuleError).[constructor](error_golem_error.GolemModuleError#constructor)

#### Defined in

[src/market/error.ts:18](https://github.com/golemfactory/golem-js/blob/7cee55b/src/market/error.ts#L18)

## Properties

### code

• **code**: [`MarketErrorCode`](../enums/market_error.MarketErrorCode)

#### Inherited from

[GolemModuleError](error_golem_error.GolemModuleError).[code](error_golem_error.GolemModuleError#code)

#### Defined in

[src/market/error.ts:20](https://github.com/golemfactory/golem-js/blob/7cee55b/src/market/error.ts#L20)

___

### demand

• `Optional` **demand**: `Demand`

#### Defined in

[src/market/error.ts:21](https://github.com/golemfactory/golem-js/blob/7cee55b/src/market/error.ts#L21)

___

### previous

• `Optional` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemModuleError](error_golem_error.GolemModuleError).[previous](error_golem_error.GolemModuleError#previous)

#### Defined in

[src/market/error.ts:22](https://github.com/golemfactory/golem-js/blob/7cee55b/src/market/error.ts#L22)
