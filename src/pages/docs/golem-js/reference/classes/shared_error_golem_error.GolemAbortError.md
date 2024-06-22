---
title: "Class GolemAbortError"
pageTitle: "Class GolemAbortError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemAbortError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemAbortError

[shared/error/golem-error](../modules/shared_error_golem_error).GolemAbortError

Represents errors related to the user choosing to abort or stop running activities.

**`Example`**

```ts
CTRL+C abort error
```

## Hierarchy

- [`GolemUserError`](shared_error_golem_error.GolemUserError)

  ↳ **`GolemAbortError`**

## Table of contents

### Constructors

- [constructor](shared_error_golem_error.GolemAbortError#constructor)

### Properties

- [previous](shared_error_golem_error.GolemAbortError#previous)

## Constructors

### constructor

• **new GolemAbortError**(`message`, `previous?`): [`GolemAbortError`](shared_error_golem_error.GolemAbortError)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `previous?` | `Error` | The previous error, if any, that led to this error. |

#### Returns

[`GolemAbortError`](shared_error_golem_error.GolemAbortError)

#### Inherited from

[GolemUserError](shared_error_golem_error.GolemUserError).[constructor](shared_error_golem_error.GolemUserError#constructor)

#### Defined in

[src/shared/error/golem-error.ts:5](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/error/golem-error.ts#L5)

## Properties

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemUserError](shared_error_golem_error.GolemUserError).[previous](shared_error_golem_error.GolemUserError#previous)

#### Defined in

[src/shared/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/error/golem-error.ts#L10)
