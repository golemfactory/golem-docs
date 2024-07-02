---
title: "Class GolemConfigError"
pageTitle: "Class GolemConfigError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemConfigError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemConfigError

[shared/error/golem-error](../modules/shared_error_golem_error).GolemConfigError

Represents configuration errors.

**`Example`**

```ts
Api key not defined
```

## Hierarchy

- [`GolemUserError`](shared_error_golem_error.GolemUserError)

  ↳ **`GolemConfigError`**

## Table of contents

### Constructors

- [constructor](shared_error_golem_error.GolemConfigError#constructor)

### Properties

- [previous](shared_error_golem_error.GolemConfigError#previous)

## Constructors

### constructor

• **new GolemConfigError**(`message`, `previous?`): [`GolemConfigError`](shared_error_golem_error.GolemConfigError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemConfigError`](shared_error_golem_error.GolemConfigError)

#### Inherited from

[GolemUserError](shared_error_golem_error.GolemUserError).[constructor](shared_error_golem_error.GolemUserError#constructor)

#### Defined in

[src/shared/error/golem-error.ts:5](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/error/golem-error.ts#L5)

## Properties

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemUserError](shared_error_golem_error.GolemUserError).[previous](shared_error_golem_error.GolemUserError#previous)

#### Defined in

[src/shared/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/error/golem-error.ts#L10)
