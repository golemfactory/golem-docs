---
title: "Class GolemUserError"
pageTitle: "Class GolemUserError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemUserError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemUserError

[error/golem-error](../modules/error_golem_error).GolemUserError

User-caused errors in the Golem SDK containing logic errors.

**`Example`**

```ts
you cannot create an activity for an agreement that already expired
```

## Hierarchy

- [`GolemError`](error_golem_error.GolemError)

  ↳ **`GolemUserError`**

  ↳↳ [`GolemAbortError`](error_golem_error.GolemAbortError)

  ↳↳ [`GolemConfigError`](error_golem_error.GolemConfigError)

## Table of contents

### Constructors

- [constructor](error_golem_error.GolemUserError#constructor)

### Properties

- [previous](error_golem_error.GolemUserError#previous)

## Constructors

### constructor

• **new GolemUserError**(`message`, `previous?`): [`GolemUserError`](error_golem_error.GolemUserError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemUserError`](error_golem_error.GolemUserError)

#### Inherited from

[GolemError](error_golem_error.GolemError).[constructor](error_golem_error.GolemError#constructor)

#### Defined in

[src/error/golem-error.ts:5](https://github.com/golemfactory/golem-js/blob/7cee55b/src/error/golem-error.ts#L5)

## Properties

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemError](error_golem_error.GolemError).[previous](error_golem_error.GolemError#previous)

#### Defined in

[src/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/7cee55b/src/error/golem-error.ts#L10)
