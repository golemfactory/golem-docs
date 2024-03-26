---
title: "Class GolemWorkError"
pageTitle: "Class GolemWorkError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemWorkError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemWorkError

[work/error](../modules/work_error).GolemWorkError

Module specific errors - Market, Work, Payment.
Each of the major modules will have its own domain specific root error type,
additionally containing an error code specific to a given subdomain

## Hierarchy

- [`GolemModuleError`](error_golem_error.GolemModuleError)

  ↳ **`GolemWorkError`**

## Table of contents

### Constructors

- [constructor](work_error.GolemWorkError#constructor)

### Properties

- [code](work_error.GolemWorkError#code)
- [previous](work_error.GolemWorkError#previous)

### Methods

- [getAgreement](work_error.GolemWorkError#getagreement)
- [getActivity](work_error.GolemWorkError#getactivity)
- [getProvider](work_error.GolemWorkError#getprovider)

## Constructors

### constructor

• **new GolemWorkError**(`message`, `code`, `agreement?`, `activity?`, `provider?`, `previous?`): [`GolemWorkError`](work_error.GolemWorkError)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`WorkErrorCode`](../enums/work_error.WorkErrorCode) |
| `agreement?` | `Agreement` |
| `activity?` | [`Activity`](activity_activity.Activity) |
| `provider?` | [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo) |
| `previous?` | `Error` |

#### Returns

[`GolemWorkError`](work_error.GolemWorkError)

#### Overrides

[GolemModuleError](error_golem_error.GolemModuleError).[constructor](error_golem_error.GolemModuleError#constructor)

#### Defined in

[src/work/error.ts:20](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/error.ts#L20)

## Properties

### code

• **code**: [`WorkErrorCode`](../enums/work_error.WorkErrorCode)

#### Inherited from

[GolemModuleError](error_golem_error.GolemModuleError).[code](error_golem_error.GolemModuleError#code)

#### Defined in

[src/work/error.ts:22](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/error.ts#L22)

___

### previous

• `Optional` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemModuleError](error_golem_error.GolemModuleError).[previous](error_golem_error.GolemModuleError#previous)

#### Defined in

[src/work/error.ts:26](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/error.ts#L26)

## Methods

### getAgreement

▸ **getAgreement**(): `undefined` \| `Agreement`

#### Returns

`undefined` \| `Agreement`

#### Defined in

[src/work/error.ts:33](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/error.ts#L33)

___

### getActivity

▸ **getActivity**(): `undefined` \| [`Activity`](activity_activity.Activity)

#### Returns

`undefined` \| [`Activity`](activity_activity.Activity)

#### Defined in

[src/work/error.ts:36](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/error.ts#L36)

___

### getProvider

▸ **getProvider**(): `undefined` \| [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)

#### Returns

`undefined` \| [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)

#### Defined in

[src/work/error.ts:39](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/error.ts#L39)
