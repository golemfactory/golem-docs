---
title: "Class GolemPlatformError"
pageTitle: "Class GolemPlatformError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemPlatformError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemPlatformError

[shared/error/golem-error](../modules/shared_error_golem_error).GolemPlatformError

Represents errors resulting from yagna’s errors or provider failure
@examples:
 - yagna results with a HTTP 500-error
 - the provider failed to deploy the activity - permission denied when creating the activity on the provider system itself

## Hierarchy

- [`GolemError`](shared_error_golem_error.GolemError)

  ↳ **`GolemPlatformError`**

## Table of contents

### Constructors

- [constructor](shared_error_golem_error.GolemPlatformError#constructor)

### Properties

- [previous](shared_error_golem_error.GolemPlatformError#previous)

## Constructors

### constructor

• **new GolemPlatformError**(`message`, `previous?`): [`GolemPlatformError`](shared_error_golem_error.GolemPlatformError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemPlatformError`](shared_error_golem_error.GolemPlatformError)

#### Inherited from

[GolemError](shared_error_golem_error.GolemError).[constructor](shared_error_golem_error.GolemError#constructor)

#### Defined in

[src/shared/error/golem-error.ts:5](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/error/golem-error.ts#L5)

## Properties

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemError](shared_error_golem_error.GolemError).[previous](shared_error_golem_error.GolemError#previous)

#### Defined in

[src/shared/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/error/golem-error.ts#L10)
