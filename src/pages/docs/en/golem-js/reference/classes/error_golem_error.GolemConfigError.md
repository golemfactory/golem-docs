---
title: "Class GolemConfigError"
pageTitle: "Class GolemConfigError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemConfigError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemConfigError

[error/golem-error](../modules/error_golem_error).GolemConfigError

Represents configuration errors.

**`Example`**

```ts
Api key not defined
```

## Hierarchy

- [`GolemUserError`](error_golem_error.GolemUserError)

  ↳ **`GolemConfigError`**

## Table of contents

### Constructors

- [constructor](error_golem_error.GolemConfigError#constructor)

### Properties

- [previous](error_golem_error.GolemConfigError#previous)

## Constructors

### constructor

• **new GolemConfigError**(`message`, `previous?`): [`GolemConfigError`](error_golem_error.GolemConfigError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemConfigError`](error_golem_error.GolemConfigError)

#### Inherited from

[GolemUserError](error_golem_error.GolemUserError).[constructor](error_golem_error.GolemUserError#constructor)

#### Defined in

[src/error/golem-error.ts:5](https://github.com/golemfactory/golem-js/blob/4182943/src/error/golem-error.ts#L5)

## Properties

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemUserError](error_golem_error.GolemUserError).[previous](error_golem_error.GolemUserError#previous)

#### Defined in

[src/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/4182943/src/error/golem-error.ts#L10)
