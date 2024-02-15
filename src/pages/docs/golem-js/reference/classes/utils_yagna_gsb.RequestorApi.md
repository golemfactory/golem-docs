---
title: "Class RequestorApi"
pageTitle: "Class RequestorApi - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class RequestorApi within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: RequestorApi

[utils/yagna/gsb](../modules/utils_yagna_gsb).RequestorApi

## Hierarchy

- `BaseAPI`

  ↳ **`RequestorApi`**

## Implements

- `GsbRequestorApi`

## Table of contents

### Constructors

- [constructor](utils_yagna_gsb.RequestorApi#constructor)

### Methods

- [createService](utils_yagna_gsb.RequestorApi#createservice)
- [deleteService](utils_yagna_gsb.RequestorApi#deleteservice)

## Constructors

### constructor

• **new RequestorApi**(`configuration?`, `basePath?`, `axios?`): [`RequestorApi`](utils_yagna_gsb.RequestorApi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

[`RequestorApi`](utils_yagna_gsb.RequestorApi)

#### Inherited from

BaseAPI.constructor

#### Defined in

node_modules/ya-ts-client/dist/ya-net/base.d.ts:43

## Methods

### createService

▸ **createService**(`fileInfo`, `components`): `Promise`\<[`ServiceModel`](../modules/utils_yagna_gsb#servicemodel)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileInfo` | [`GftpFileInfo`](../modules/utils_yagna_gsb#gftpfileinfo) |
| `components` | `string`[] |

#### Returns

`Promise`\<[`ServiceModel`](../modules/utils_yagna_gsb#servicemodel)\>

#### Implementation of

GsbRequestorApi.createService

#### Defined in

[src/utils/yagna/gsb.ts:21](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/gsb.ts#L21)

___

### deleteService

▸ **deleteService**(`id`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

GsbRequestorApi.deleteService

#### Defined in

[src/utils/yagna/gsb.ts:45](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/gsb.ts#L45)
