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

- [`GolemModuleError`](shared_error_golem_error.GolemModuleError)

  ↳ **`GolemMarketError`**

## Table of contents

### Constructors

- [constructor](market_error.GolemMarketError#constructor)

### Properties

- [code](market_error.GolemMarketError#code)
- [previous](market_error.GolemMarketError#previous)

## Constructors

### constructor

• **new GolemMarketError**(`message`, `code`, `previous?`): [`GolemMarketError`](market_error.GolemMarketError)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`MarketErrorCode`](../enums/market_error.MarketErrorCode) |
| `previous?` | `Error` |

#### Returns

[`GolemMarketError`](market_error.GolemMarketError)

#### Overrides

[GolemModuleError](shared_error_golem_error.GolemModuleError).[constructor](shared_error_golem_error.GolemModuleError#constructor)

#### Defined in

[src/market/error.ts:21](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/error.ts#L21)

## Properties

### code

• **code**: [`MarketErrorCode`](../enums/market_error.MarketErrorCode)

#### Inherited from

[GolemModuleError](shared_error_golem_error.GolemModuleError).[code](shared_error_golem_error.GolemModuleError#code)

#### Defined in

[src/market/error.ts:23](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/error.ts#L23)

___

### previous

• `Optional` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemModuleError](shared_error_golem_error.GolemModuleError).[previous](shared_error_golem_error.GolemModuleError#previous)

#### Defined in

[src/market/error.ts:24](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/error.ts#L24)
