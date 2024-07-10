---
title: "Class GolemReputationError"
pageTitle: "Class GolemReputationError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemReputationError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemReputationError

[experimental/reputation/error](../modules/experimental_reputation_error).GolemReputationError

Module specific errors - Market, Work, Payment.
Each of the major modules will have its own domain specific root error type,
additionally containing an error code specific to a given subdomain

## Hierarchy

- [`GolemModuleError`](shared_error_golem_error.GolemModuleError)

  ↳ **`GolemReputationError`**

## Table of contents

### Constructors

- [constructor](experimental_reputation_error.GolemReputationError#constructor)

### Properties

- [code](experimental_reputation_error.GolemReputationError#code)
- [previous](experimental_reputation_error.GolemReputationError#previous)

## Constructors

### constructor

• **new GolemReputationError**(`message`, `cause?`): [`GolemReputationError`](experimental_reputation_error.GolemReputationError)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `cause?` | `Error` |

#### Returns

[`GolemReputationError`](experimental_reputation_error.GolemReputationError)

#### Overrides

[GolemModuleError](shared_error_golem_error.GolemModuleError).[constructor](shared_error_golem_error.GolemModuleError#constructor)

#### Defined in

[src/experimental/reputation/error.ts:4](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/error.ts#L4)

## Properties

### code

• **code**: `string` \| `number`

#### Inherited from

[GolemModuleError](shared_error_golem_error.GolemModuleError).[code](shared_error_golem_error.GolemModuleError#code)

#### Defined in

[src/shared/error/golem-error.ts:66](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/error/golem-error.ts#L66)

___

### previous

• `Optional` `Readonly` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemModuleError](shared_error_golem_error.GolemModuleError).[previous](shared_error_golem_error.GolemModuleError#previous)

#### Defined in

[src/shared/error/golem-error.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/error/golem-error.ts#L10)
