---
title: "Class GolemInternalError"
pageTitle: "Class GolemInternalError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemInternalError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemInternalError

[error/golem-error](../modules/error_golem_error).GolemInternalError

Represents errors when the SDK encountered an internal error that wasn't handled correctly.

**`Example`**

```ts
JSON.parse(undefined) -> Error: Unexpected token u in JSON at position 0
```

## Hierarchy

- [`GolemError`](error_golem_error.GolemError)

  ↳ **`GolemInternalError`**

## Table of contents

### Constructors

- [constructor](error_golem_error.GolemInternalError#constructor)

### Properties

- [previous](error_golem_error.GolemInternalError#previous)

## Constructors

### constructor

• **new GolemInternalError**(`message`, `previous?`): [`GolemInternalError`](error_golem_error.GolemInternalError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemInternalError`](error_golem_error.GolemInternalError)

#### Inherited from

[GolemError](error_golem_error.GolemError).[constructor](error_golem_error.GolemError#constructor)

#### Defined in

[src/error/golem-error.ts:5](https://github.com/golemfactory/golem-js/blob/22da85c/src/error/golem-error.ts#L5)

## Properties

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemError](error_golem_error.GolemError).[previous](error_golem_error.GolemError#previous)

#### Defined in

[src/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/22da85c/src/error/golem-error.ts#L10)
