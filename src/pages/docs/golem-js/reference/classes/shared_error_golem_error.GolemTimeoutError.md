---
title: "Class GolemTimeoutError"
pageTitle: "Class GolemTimeoutError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemTimeoutError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemTimeoutError

[shared/error/golem-error](../modules/shared_error_golem_error).GolemTimeoutError

SDK timeout errors
@examples:
 - Not receiving any offers within the configured time.
 - The activity not starting within the configured time.
 - The request (task) timing out (started on an activity but didn't finish on time).
 - The request start timing out (the task didn't start within the configured amount of time).

## Hierarchy

- [`GolemError`](shared_error_golem_error.GolemError)

  ↳ **`GolemTimeoutError`**

## Table of contents

### Constructors

- [constructor](shared_error_golem_error.GolemTimeoutError#constructor)

### Properties

- [previous](shared_error_golem_error.GolemTimeoutError#previous)

## Constructors

### constructor

• **new GolemTimeoutError**(`message`, `previous?`): [`GolemTimeoutError`](shared_error_golem_error.GolemTimeoutError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemTimeoutError`](shared_error_golem_error.GolemTimeoutError)

#### Inherited from

[GolemError](shared_error_golem_error.GolemError).[constructor](shared_error_golem_error.GolemError#constructor)

#### Defined in

[src/shared/error/golem-error.ts:5](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/error/golem-error.ts#L5)

## Properties

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemError](shared_error_golem_error.GolemError).[previous](shared_error_golem_error.GolemError#previous)

#### Defined in

[src/shared/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/error/golem-error.ts#L10)
