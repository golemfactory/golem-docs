---
title: "Class GolemError"
pageTitle: "Class GolemError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemError

[error/golem-error](../modules/error_golem_error).GolemError

Base class for all errors directly thrown by Golem SDK.

## Hierarchy

- `Error`

  ↳ **`GolemError`**

  ↳↳ [`GolemUserError`](error_golem_error.GolemUserError)

  ↳↳ [`GolemInternalError`](error_golem_error.GolemInternalError)

  ↳↳ [`GolemPlatformError`](error_golem_error.GolemPlatformError)

  ↳↳ [`GolemTimeoutError`](error_golem_error.GolemTimeoutError)

  ↳↳ [`GolemModuleError`](error_golem_error.GolemModuleError)

## Table of contents

### Constructors

- [constructor](error_golem_error.GolemError#constructor)

### Properties

- [previous](error_golem_error.GolemError#previous)

## Constructors

### constructor

• **new GolemError**(`message`, `previous?`): [`GolemError`](error_golem_error.GolemError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemError`](error_golem_error.GolemError)

#### Overrides

Error.constructor

#### Defined in

[src/error/golem-error.ts:5](https://github.com/golemfactory/golem-js/blob/9789a95/src/error/golem-error.ts#L5)

## Properties

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Defined in

[src/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/9789a95/src/error/golem-error.ts#L10)
