---
title: "Class GolemAbortError"
pageTitle: "Class GolemAbortError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemAbortError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemAbortError

[error/golem-error](../modules/error_golem_error).GolemAbortError

Represents errors related to the user choosing to abort or stop running activities.

**`Example`**

```ts
CTRL+C abort error
```

## Hierarchy

- [`GolemUserError`](error_golem_error.GolemUserError)

  ↳ **`GolemAbortError`**

## Table of contents

### Constructors

- [constructor](error_golem_error.GolemAbortError#constructor)

### Properties

- [previous](error_golem_error.GolemAbortError#previous)

## Constructors

### constructor

• **new GolemAbortError**(`message`, `previous?`): [`GolemAbortError`](error_golem_error.GolemAbortError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemAbortError`](error_golem_error.GolemAbortError)

#### Inherited from

[GolemUserError](error_golem_error.GolemUserError).[constructor](error_golem_error.GolemUserError#constructor)

#### Defined in

[src/error/golem-error.ts:5](https://github.com/golemfactory/golem-js/blob/22da85c/src/error/golem-error.ts#L5)

## Properties

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemUserError](error_golem_error.GolemUserError).[previous](error_golem_error.GolemUserError#previous)

#### Defined in

[src/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/22da85c/src/error/golem-error.ts#L10)
