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

[src/utils/yagna/yagna.ts:61](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L61)

## Properties

### apiKey

• `Protected` `Readonly` **apiKey**: `string`

#### Defined in

[src/utils/yagna/yagna.ts:57](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L57)

___

### apiBaseUrl

• `Protected` `Readonly` **apiBaseUrl**: `string`

#### Defined in

[src/utils/yagna/yagna.ts:58](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L58)

## Methods

### getApi

▸ **getApi**(): [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Returns

[`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Defined in

[src/utils/yagna/yagna.ts:70](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L70)

___

### connect

▸ **connect**(): `Promise`\<[`IdentityModel`](../interfaces/utils_yagna_identity.IdentityModel)\>

#### Returns

`Promise`\<[`IdentityModel`](../interfaces/utils_yagna_identity.IdentityModel)\>

#### Defined in

[src/utils/yagna/yagna.ts:74](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L74)

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/utils/yagna/yagna.ts:99](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L99)

___

### getVersion

▸ **getVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/utils/yagna/yagna.ts:104](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L104)

___

### createApi

▸ **createApi**(): [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Returns

[`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Defined in

[src/utils/yagna/yagna.ts:117](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L117)

___

### getApiConfig

▸ **getApiConfig**(): `Configuration`

#### Returns

`Configuration`

#### Defined in

[src/utils/yagna/yagna.ts:142](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L142)

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

[src/utils/yagna/yagna.ts:153](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L153)

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

[src/utils/yagna/yagna.ts:157](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L157)

___

### addErrorHandler

▸ **addErrorHandler**(`api`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi) |

#### Returns

`void`

#### Defined in

[src/utils/yagna/yagna.ts:169](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L169)
