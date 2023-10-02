---
title: "Class RequestorApi - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class RequestorApi within the golem-js SDK for the Golem Network."
type: "reference"
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

• **new RequestorApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

node_modules/ya-ts-client/dist/ya-net/base.d.ts:43

## Methods

### createService

▸ **createService**(`fileInfo`, `components`): `Promise`<`AxiosResponse`<[`ServiceModel`](../modules/utils_yagna_gsb#servicemodel), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileInfo` | [`GftpFileInfo`](../modules/utils_yagna_gsb#gftpfileinfo) |
| `components` | `string`[] |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceModel`](../modules/utils_yagna_gsb#servicemodel), `any`\>\>

#### Implementation of

GsbRequestorApi.createService

#### Defined in

[src/utils/yagna/gsb.ts:20](https://github.com/golemfactory/golem-js/blob/c332187/src/utils/yagna/gsb.ts#L20)

___

### deleteService

▸ **deleteService**(`id`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Implementation of

GsbRequestorApi.deleteService

#### Defined in

[src/utils/yagna/gsb.ts:35](https://github.com/golemfactory/golem-js/blob/c332187/src/utils/yagna/gsb.ts#L35)
