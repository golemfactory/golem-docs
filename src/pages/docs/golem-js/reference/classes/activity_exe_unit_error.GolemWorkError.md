---
title: "Class GolemWorkError"
pageTitle: "Class GolemWorkError - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemWorkError within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemWorkError

[activity/exe-unit/error](../modules/activity_exe_unit_error).GolemWorkError

Module specific errors - Market, Work, Payment.
Each of the major modules will have its own domain specific root error type,
additionally containing an error code specific to a given subdomain

## Hierarchy

- [`GolemModuleError`](shared_error_golem_error.GolemModuleError)

  ↳ **`GolemWorkError`**

## Table of contents

### Constructors

- [constructor](activity_exe_unit_error.GolemWorkError#constructor)

### Properties

- [code](activity_exe_unit_error.GolemWorkError#code)
- [previous](activity_exe_unit_error.GolemWorkError#previous)

### Methods

- [getAgreement](activity_exe_unit_error.GolemWorkError#getagreement)
- [getActivity](activity_exe_unit_error.GolemWorkError#getactivity)
- [getProvider](activity_exe_unit_error.GolemWorkError#getprovider)

## Constructors

### constructor

• **new GolemWorkError**(`message`, `code`, `agreement?`, `activity?`, `provider?`, `previous?`): [`GolemWorkError`](activity_exe_unit_error.GolemWorkError)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`WorkErrorCode`](../enums/activity_exe_unit_error.WorkErrorCode) |
| `agreement?` | [`Agreement`](market_agreement_agreement.Agreement) |
| `activity?` | [`Activity`](activity_activity.Activity) |
| `provider?` | [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo) |
| `previous?` | `Error` |

#### Returns

[`GolemWorkError`](activity_exe_unit_error.GolemWorkError)

#### Overrides

[GolemModuleError](shared_error_golem_error.GolemModuleError).[constructor](shared_error_golem_error.GolemModuleError#constructor)

#### Defined in

[src/activity/exe-unit/error.ts:21](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/error.ts#L21)

## Properties

### code

• **code**: [`WorkErrorCode`](../enums/activity_exe_unit_error.WorkErrorCode)

#### Inherited from

[GolemModuleError](shared_error_golem_error.GolemModuleError).[code](shared_error_golem_error.GolemModuleError#code)

#### Defined in

[src/activity/exe-unit/error.ts:23](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/error.ts#L23)

___

### previous

• `Optional` **previous**: `Error`

The previous error, if any, that led to this error.

#### Inherited from

[GolemModuleError](shared_error_golem_error.GolemModuleError).[previous](shared_error_golem_error.GolemModuleError#previous)

#### Defined in

[src/activity/exe-unit/error.ts:27](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/error.ts#L27)

## Methods

### getAgreement

▸ **getAgreement**(): `undefined` \| [`Agreement`](market_agreement_agreement.Agreement)

#### Returns

`undefined` \| [`Agreement`](market_agreement_agreement.Agreement)

#### Defined in

[src/activity/exe-unit/error.ts:34](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/error.ts#L34)

___

### getActivity

▸ **getActivity**(): `undefined` \| [`Activity`](activity_activity.Activity)

#### Returns

`undefined` \| [`Activity`](activity_activity.Activity)

#### Defined in

[src/activity/exe-unit/error.ts:37](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/error.ts#L37)

___

### getProvider

▸ **getProvider**(): `undefined` \| [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Returns

`undefined` \| [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Defined in

[src/activity/exe-unit/error.ts:40](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/error.ts#L40)
