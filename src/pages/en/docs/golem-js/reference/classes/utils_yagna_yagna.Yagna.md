---
title: "Class Yagna"
pageTitle: "Class Yagna - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Yagna within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Yagna

[utils/yagna/yagna](../modules/utils_yagna_yagna).Yagna

## Table of contents

### Constructors

- [constructor](utils_yagna_yagna.Yagna#constructor)

### Properties

- [apiKey](utils_yagna_yagna.Yagna#apikey)
- [apiBaseUrl](utils_yagna_yagna.Yagna#apibaseurl)

### Methods

- [getApi](utils_yagna_yagna.Yagna#getapi)
- [connect](utils_yagna_yagna.Yagna#connect)
- [end](utils_yagna_yagna.Yagna#end)
- [getVersion](utils_yagna_yagna.Yagna#getversion)
- [createApi](utils_yagna_yagna.Yagna#createapi)
- [getApiConfig](utils_yagna_yagna.Yagna#getapiconfig)
- [getApiUrl](utils_yagna_yagna.Yagna#getapiurl)
- [errorHandler](utils_yagna_yagna.Yagna#errorhandler)
- [addErrorHandler](utils_yagna_yagna.Yagna#adderrorhandler)
- [removeErrorHandler](utils_yagna_yagna.Yagna#removeerrorhandler)

## Constructors

### constructor

• **new Yagna**(`options?`): [`Yagna`](utils_yagna_yagna.Yagna)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`YagnaOptions`](../modules/utils_yagna_yagna#yagnaoptions) |

#### Returns

[`Yagna`](utils_yagna_yagna.Yagna)

#### Defined in

[src/utils/yagna/yagna.ts:67](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L67)

## Properties

### apiKey

• `Protected` `Readonly` **apiKey**: `string`

#### Defined in

[src/utils/yagna/yagna.ts:59](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L59)

___

### apiBaseUrl

• `Protected` `Readonly` **apiBaseUrl**: `string`

#### Defined in

[src/utils/yagna/yagna.ts:60](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L60)

## Methods

### getApi

▸ **getApi**(): [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Returns

[`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Defined in

[src/utils/yagna/yagna.ts:79](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L79)

___

### connect

▸ **connect**(): `Promise`\<[`IdentityModel`](../interfaces/utils_yagna_identity.IdentityModel)\>

#### Returns

`Promise`\<[`IdentityModel`](../interfaces/utils_yagna_identity.IdentityModel)\>

#### Defined in

[src/utils/yagna/yagna.ts:83](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L83)

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/utils/yagna/yagna.ts:110](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L110)

___

### getVersion

▸ **getVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/utils/yagna/yagna.ts:117](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L117)

___

### createApi

▸ **createApi**(): [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Returns

[`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Defined in

[src/utils/yagna/yagna.ts:130](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L130)

___

### getApiConfig

▸ **getApiConfig**(): `Configuration`

#### Returns

`Configuration`

#### Defined in

[src/utils/yagna/yagna.ts:154](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L154)

___

### getApiUrl

▸ **getApiUrl**(`apiName?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiName?` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/yagna/yagna.ts:165](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L165)

___

### errorHandler

▸ **errorHandler**(`error`): `Promise`\<`Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`Promise`\<`Error`\>

#### Defined in

[src/utils/yagna/yagna.ts:169](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L169)

___

### addErrorHandler

▸ **addErrorHandler**(`api`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi) |

#### Returns

`number`

#### Defined in

[src/utils/yagna/yagna.ts:182](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L182)

___

### removeErrorHandler

▸ **removeErrorHandler**(`api`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi) |

#### Returns

`void`

#### Defined in

[src/utils/yagna/yagna.ts:194](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L194)
