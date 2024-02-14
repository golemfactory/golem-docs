---
title: "Class GolemNetworkError"
pageTitle: "Class GolemNetworkError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemNetworkError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemNetworkError

[network/error](../modules/network_error).GolemNetworkError

Module specific errors - Market, Work, Payment.
Each of the major modules will have its own domain specific root error type,
additionally containing an error code specific to a given subdomain

## Hierarchy

- [`GolemModuleError`](error_golem_error.GolemModuleError)

  ↳ **`GolemNetworkError`**

## Table of contents

### Constructors

- [constructor](network_error.GolemNetworkError#constructor)

### Properties

- [code](network_error.GolemNetworkError#code)
- [network](network_error.GolemNetworkError#network)
- [previous](network_error.GolemNetworkError#previous)

## Constructors

### constructor

• **new GolemNetworkError**(`message`, `code`, `network?`, `previous?`): [`GolemNetworkError`](network_error.GolemNetworkError)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`NetworkErrorCode`](../enums/network_error.NetworkErrorCode) |
| `network?` | [`NetworkInfo`](../interfaces/network_network.NetworkInfo) |
| `previous?` | `Error` |

#### Returns

[`GolemNetworkError`](network_error.GolemNetworkError)

#### Overrides

[GolemModuleError](error_golem_error.GolemModuleError).[constructor](error_golem_error.GolemModuleError#constructor)

#### Defined in

[src/network/error.ts:17](https://github.com/golemfactory/golem-js/blob/7cee55b/src/network/error.ts#L17)

## Properties

### code

• **code**: [`NetworkErrorCode`](../enums/network_error.NetworkErrorCode)

#### Inherited from

[GolemModuleError](error_golem_error.GolemModuleError).[code](error_golem_error.GolemModuleError#code)

#### Defined in

[src/network/error.ts:19](https://github.com/golemfactory/golem-js/blob/7cee55b/src/network/error.ts#L19)

___

### network

• `Optional` **network**: [`NetworkInfo`](../interfaces/network_network.NetworkInfo)

#### Defined in

[src/network/error.ts:20](https://github.com/golemfactory/golem-js/blob/7cee55b/src/network/error.ts#L20)

___

### previous

• `Optional` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemModuleError](error_golem_error.GolemModuleError).[previous](error_golem_error.GolemModuleError#previous)

#### Defined in

[src/network/error.ts:21](https://github.com/golemfactory/golem-js/blob/7cee55b/src/network/error.ts#L21)
