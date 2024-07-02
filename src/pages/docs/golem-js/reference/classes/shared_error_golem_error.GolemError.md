---
title: "Class GolemError"
pageTitle: "Class GolemError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemError

[shared/error/golem-error](../modules/shared_error_golem_error).GolemError

Base class for all errors directly thrown by Golem SDK.

## Hierarchy

- `Error`

  ↳ **`GolemError`**

  ↳↳ [`GolemUserError`](shared_error_golem_error.GolemUserError)

  ↳↳ [`GolemInternalError`](shared_error_golem_error.GolemInternalError)

  ↳↳ [`GolemPlatformError`](shared_error_golem_error.GolemPlatformError)

  ↳↳ [`GolemTimeoutError`](shared_error_golem_error.GolemTimeoutError)

  ↳↳ [`GolemModuleError`](shared_error_golem_error.GolemModuleError)

## Table of contents

### Constructors

- [constructor](shared_error_golem_error.GolemError#constructor)

### Properties

- [previous](shared_error_golem_error.GolemError#previous)

## Constructors

### constructor

• **new GolemError**(`message`, `previous?`): [`GolemError`](shared_error_golem_error.GolemError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemError`](shared_error_golem_error.GolemError)

#### Overrides

Error.constructor

#### Defined in

[src/shared/error/golem-error.ts:5](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/error/golem-error.ts#L5)

## Properties

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Defined in

[src/shared/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/error/golem-error.ts#L10)
