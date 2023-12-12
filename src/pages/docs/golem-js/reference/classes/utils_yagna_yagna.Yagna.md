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

[src/utils/yagna/yagna.ts:36](https://github.com/golemfactory/golem-js/blob/c2379e3/src/utils/yagna/yagna.ts#L36)

## Properties

### apiKey

• `Protected` `Readonly` **apiKey**: `string`

#### Defined in

[src/utils/yagna/yagna.ts:33](https://github.com/golemfactory/golem-js/blob/c2379e3/src/utils/yagna/yagna.ts#L33)

___

### apiBaseUrl

• `Protected` `Readonly` **apiBaseUrl**: `string`

#### Defined in

[src/utils/yagna/yagna.ts:34](https://github.com/golemfactory/golem-js/blob/c2379e3/src/utils/yagna/yagna.ts#L34)

## Methods

### getApi

▸ **getApi**(): [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Returns

[`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Defined in

[src/utils/yagna/yagna.ts:45](https://github.com/golemfactory/golem-js/blob/c2379e3/src/utils/yagna/yagna.ts#L45)

___

### connect

▸ **connect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/utils/yagna/yagna.ts:49](https://github.com/golemfactory/golem-js/blob/c2379e3/src/utils/yagna/yagna.ts#L49)

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/utils/yagna/yagna.ts:53](https://github.com/golemfactory/golem-js/blob/c2379e3/src/utils/yagna/yagna.ts#L53)

___

### createApi

▸ **createApi**(): [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Returns

[`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

#### Defined in

[src/utils/yagna/yagna.ts:58](https://github.com/golemfactory/golem-js/blob/c2379e3/src/utils/yagna/yagna.ts#L58)

___

### getApiConfig

▸ **getApiConfig**(): `Configuration`

#### Returns

`Configuration`

#### Defined in

[src/utils/yagna/yagna.ts:79](https://github.com/golemfactory/golem-js/blob/c2379e3/src/utils/yagna/yagna.ts#L79)

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

[src/utils/yagna/yagna.ts:90](https://github.com/golemfactory/golem-js/blob/c2379e3/src/utils/yagna/yagna.ts#L90)

___

### errorHandler

▸ **errorHandler**(`error`): `Promise`\<`AxiosError`\<`unknown`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `AxiosError`\<`unknown`, `any`\> |

#### Returns

`Promise`\<`AxiosError`\<`unknown`, `any`\>\>

#### Defined in

[src/utils/yagna/yagna.ts:94](https://github.com/golemfactory/golem-js/blob/c2379e3/src/utils/yagna/yagna.ts#L94)

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

[src/utils/yagna/yagna.ts:103](https://github.com/golemfactory/golem-js/blob/c2379e3/src/utils/yagna/yagna.ts#L103)
