---
title: "Class GolemWorkError"
pageTitle: "Class GolemWorkError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemWorkError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemWorkError

[task/error](../modules/task_error).GolemWorkError

Module specific errors - Market, Work, Payment.
Each of the major modules will have its own domain specific root error type,
additionally containing an error code specific to a given subdomain

## Hierarchy

- [`GolemModuleError`](error_golem_error.GolemModuleError)

  ↳ **`GolemWorkError`**

## Table of contents

### Constructors

- [constructor](task_error.GolemWorkError#constructor)

### Properties

- [code](task_error.GolemWorkError#code)
- [agreement](task_error.GolemWorkError#agreement)
- [activity](task_error.GolemWorkError#activity)
- [provider](task_error.GolemWorkError#provider)
- [previous](task_error.GolemWorkError#previous)

## Constructors

### constructor

• **new GolemWorkError**(`message`, `code`, `agreement?`, `activity?`, `provider?`, `previous?`): [`GolemWorkError`](task_error.GolemWorkError)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`WorkErrorCode`](../enums/task_error.WorkErrorCode) |
| `agreement?` | `Agreement` |
| `activity?` | [`Activity`](activity_activity.Activity) |
| `provider?` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `previous?` | `Error` |

#### Returns

[`GolemWorkError`](task_error.GolemWorkError)

#### Overrides

[GolemModuleError](error_golem_error.GolemModuleError).[constructor](error_golem_error.GolemModuleError#constructor)

#### Defined in

[src/task/error.ts:20](https://github.com/golemfactory/golem-js/blob/9789a95/src/task/error.ts#L20)

## Properties

### code

• **code**: [`WorkErrorCode`](../enums/task_error.WorkErrorCode)

#### Inherited from

[GolemModuleError](error_golem_error.GolemModuleError).[code](error_golem_error.GolemModuleError#code)

#### Defined in

[src/task/error.ts:22](https://github.com/golemfactory/golem-js/blob/9789a95/src/task/error.ts#L22)

___

### agreement

• `Optional` **agreement**: `Agreement`

#### Defined in

[src/task/error.ts:23](https://github.com/golemfactory/golem-js/blob/9789a95/src/task/error.ts#L23)

___

### activity

• `Optional` **activity**: [`Activity`](activity_activity.Activity)

#### Defined in

[src/task/error.ts:24](https://github.com/golemfactory/golem-js/blob/9789a95/src/task/error.ts#L24)

___

### provider

• `Optional` **provider**: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)

#### Defined in

[src/task/error.ts:25](https://github.com/golemfactory/golem-js/blob/9789a95/src/task/error.ts#L25)

___

### previous

• `Optional` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemModuleError](error_golem_error.GolemModuleError).[previous](error_golem_error.GolemModuleError#previous)

#### Defined in

[src/task/error.ts:26](https://github.com/golemfactory/golem-js/blob/9789a95/src/task/error.ts#L26)
