---
title: "Class GolemInternalError"
pageTitle: "Class GolemInternalError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemInternalError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemInternalError

[shared/error/golem-error](../modules/shared_error_golem_error).GolemInternalError

Represents errors when the SDK encountered an internal error that wasn't handled correctly.

**`Example`**

```ts
JSON.parse(undefined) -> Error: Unexpected token u in JSON at position 0
```

## Hierarchy

- [`GolemError`](shared_error_golem_error.GolemError)

  ↳ **`GolemInternalError`**

## Table of contents

### Constructors

- [constructor](shared_error_golem_error.GolemInternalError#constructor)

### Properties

- [previous](shared_error_golem_error.GolemInternalError#previous)

## Constructors

### constructor

• **new GolemInternalError**(`message`, `previous?`): [`GolemInternalError`](shared_error_golem_error.GolemInternalError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemInternalError`](shared_error_golem_error.GolemInternalError)

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
