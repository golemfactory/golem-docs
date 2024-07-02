---
title: "Class GolemUserError"
pageTitle: "Class GolemUserError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemUserError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemUserError

[shared/error/golem-error](../modules/shared_error_golem_error).GolemUserError

User-caused errors in the Golem SDK containing logic errors.

**`Example`**

```ts
you cannot create an activity for an agreement that already expired
```

## Hierarchy

- [`GolemError`](shared_error_golem_error.GolemError)

  ↳ **`GolemUserError`**

  ↳↳ [`GolemAbortError`](shared_error_golem_error.GolemAbortError)

  ↳↳ [`GolemConfigError`](shared_error_golem_error.GolemConfigError)

## Table of contents

### Constructors

- [constructor](shared_error_golem_error.GolemUserError#constructor)

### Properties

- [previous](shared_error_golem_error.GolemUserError#previous)

## Constructors

### constructor

• **new GolemUserError**(`message`, `previous?`): [`GolemUserError`](shared_error_golem_error.GolemUserError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemUserError`](shared_error_golem_error.GolemUserError)

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
