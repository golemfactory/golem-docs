---
title: "Class GolemTimeoutError"
pageTitle: "Class GolemTimeoutError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemTimeoutError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemTimeoutError

[error/golem-error](../modules/error_golem_error).GolemTimeoutError

SDK timeout errors
@examples:
 - Not receiving any offers within the configured time.
 - The activity not starting within the configured time.
 - The request (task) timing out (started on an activity but didn't finish on time).
 - The request start timing out (the task didn't start within the configured amount of time).

## Hierarchy

- [`GolemError`](error_golem_error.GolemError)

  ↳ **`GolemTimeoutError`**

## Table of contents

### Constructors

- [constructor](error_golem_error.GolemTimeoutError#constructor)

### Properties

- [previous](error_golem_error.GolemTimeoutError#previous)

## Constructors

### constructor

• **new GolemTimeoutError**(`message`, `previous?`): [`GolemTimeoutError`](error_golem_error.GolemTimeoutError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemTimeoutError`](error_golem_error.GolemTimeoutError)

#### Inherited from

[GolemError](error_golem_error.GolemError).[constructor](error_golem_error.GolemError#constructor)

#### Defined in

[src/error/golem-error.ts:5](https://github.com/golemfactory/golem-js/blob/9789a95/src/error/golem-error.ts#L5)

## Properties

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemError](error_golem_error.GolemError).[previous](error_golem_error.GolemError#previous)

#### Defined in

[src/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/9789a95/src/error/golem-error.ts#L10)
