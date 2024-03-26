---
title: "Class YagnaApi"
pageTitle: "Class YagnaApi - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class YagnaApi within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: YagnaApi

[utils/yagna/yagnaApi](../modules/utils_yagna_yagnaApi).YagnaApi

Utility class that groups various Yagna APIs under a single wrapper

## Table of contents

### Constructors

- [constructor](utils_yagna_yagnaApi.YagnaApi#constructor)

### Properties

- [appSessionId](utils_yagna_yagnaApi.YagnaApi#appsessionid)
- [yagnaOptions](utils_yagna_yagnaApi.YagnaApi#yagnaoptions)
- [basePath](utils_yagna_yagnaApi.YagnaApi#basepath)
- [identity](utils_yagna_yagnaApi.YagnaApi#identity)
- [market](utils_yagna_yagnaApi.YagnaApi#market)
- [activity](utils_yagna_yagnaApi.YagnaApi#activity)
- [net](utils_yagna_yagnaApi.YagnaApi#net)
- [payment](utils_yagna_yagnaApi.YagnaApi#payment)
- [gsb](utils_yagna_yagnaApi.YagnaApi#gsb)
- [version](utils_yagna_yagnaApi.YagnaApi#version)

### Methods

- [connect](utils_yagna_yagnaApi.YagnaApi#connect)
- [getVersion](utils_yagna_yagnaApi.YagnaApi#getversion)

## Constructors

### constructor

• **new YagnaApi**(`options?`): [`YagnaApi`](utils_yagna_yagnaApi.YagnaApi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`YagnaOptions`](../modules/utils_yagna_yagnaApi#yagnaoptions) |

#### Returns

[`YagnaApi`](utils_yagna_yagnaApi.YagnaApi)

#### Defined in

[src/utils/yagna/yagnaApi.ts:54](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L54)

## Properties

### appSessionId

• `Readonly` **appSessionId**: `string`

#### Defined in

[src/utils/yagna/yagnaApi.ts:24](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L24)

___

### yagnaOptions

• `Readonly` **yagnaOptions**: [`YagnaOptions`](../modules/utils_yagna_yagnaApi#yagnaoptions)

#### Defined in

[src/utils/yagna/yagnaApi.ts:26](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L26)

___

### basePath

• `Readonly` **basePath**: `string`

Base path used to build paths to Yagna's API

**`Example`**

```ts
http://localhost:7465
```

#### Defined in

[src/utils/yagna/yagnaApi.ts:35](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L35)

___

### identity

• `Readonly` **identity**: `DefaultService`

#### Defined in

[src/utils/yagna/yagnaApi.ts:37](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L37)

___

### market

• **market**: `RequestorService`

#### Defined in

[src/utils/yagna/yagnaApi.ts:39](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L39)

___

### activity

• **activity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `control` | `RequestorControlService` |
| `state` | `RequestorStateService` |

#### Defined in

[src/utils/yagna/yagnaApi.ts:41](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L41)

___

### net

• **net**: `RequestorService`

#### Defined in

[src/utils/yagna/yagnaApi.ts:46](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L46)

___

### payment

• **payment**: `RequestorService`

#### Defined in

[src/utils/yagna/yagnaApi.ts:48](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L48)

___

### gsb

• **gsb**: `RequestorService`

#### Defined in

[src/utils/yagna/yagnaApi.ts:50](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L50)

___

### version

• **version**: `DefaultService`

#### Defined in

[src/utils/yagna/yagnaApi.ts:52](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L52)

## Methods

### connect

▸ **connect**(): `Promise`\<{}\>

#### Returns

`Promise`\<{}\>

#### Defined in

[src/utils/yagna/yagnaApi.ts:127](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L127)

___

### getVersion

▸ **getVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/utils/yagna/yagnaApi.ts:154](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/utils/yagna/yagnaApi.ts#L154)
