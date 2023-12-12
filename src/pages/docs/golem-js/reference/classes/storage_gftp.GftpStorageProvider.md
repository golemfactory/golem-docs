---
title: "Class GftpStorageProvider"
pageTitle: "Class GftpStorageProvider - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GftpStorageProvider within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GftpStorageProvider

[storage/gftp](../modules/storage_gftp).GftpStorageProvider

## Implements

- [`StorageProvider`](../interfaces/storage_provider.StorageProvider)

## Table of contents

### Constructors

- [constructor](storage_gftp.GftpStorageProvider#constructor)

### Methods

- [init](storage_gftp.GftpStorageProvider#init)
- [isInitiated](storage_gftp.GftpStorageProvider#isinitiated)
- [receiveFile](storage_gftp.GftpStorageProvider#receivefile)
- [receiveData](storage_gftp.GftpStorageProvider#receivedata)
- [publishFile](storage_gftp.GftpStorageProvider#publishfile)
- [publishData](storage_gftp.GftpStorageProvider#publishdata)
- [release](storage_gftp.GftpStorageProvider#release)
- [close](storage_gftp.GftpStorageProvider#close)

## Constructors

### constructor

• **new GftpStorageProvider**(`logger?`): [`GftpStorageProvider`](storage_gftp.GftpStorageProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Returns

[`GftpStorageProvider`](storage_gftp.GftpStorageProvider)

#### Defined in

[src/storage/gftp.ts:25](https://github.com/golemfactory/golem-js/blob/c2379e3/src/storage/gftp.ts#L25)

## Methods

### init

▸ **init**(): `Promise`\<`void`\>

Initialize storage provider.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[init](../interfaces/storage_provider.StorageProvider#init)

#### Defined in

[src/storage/gftp.ts:31](https://github.com/golemfactory/golem-js/blob/c2379e3/src/storage/gftp.ts#L31)

___

### isInitiated

▸ **isInitiated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/storage/gftp.ts:64](https://github.com/golemfactory/golem-js/blob/c2379e3/src/storage/gftp.ts#L64)

___

### receiveFile

▸ **receiveFile**(`path`): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[receiveFile](../interfaces/storage_provider.StorageProvider#receivefile)

#### Defined in

[src/storage/gftp.ts:76](https://github.com/golemfactory/golem-js/blob/c2379e3/src/storage/gftp.ts#L76)

___

### receiveData

▸ **receiveData**(): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[receiveData](../interfaces/storage_provider.StorageProvider#receivedata)

#### Defined in

[src/storage/gftp.ts:81](https://github.com/golemfactory/golem-js/blob/c2379e3/src/storage/gftp.ts#L81)

___

### publishFile

▸ **publishFile**(`src`): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be uploaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[publishFile](../interfaces/storage_provider.StorageProvider#publishfile)

#### Defined in

[src/storage/gftp.ts:85](https://github.com/golemfactory/golem-js/blob/c2379e3/src/storage/gftp.ts#L85)

___

### publishData

▸ **publishData**(`src`): `Promise`\<`string`\>

Return allocated resource URL from Yagna of data to be uploaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `Uint8Array` |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[publishData](../interfaces/storage_provider.StorageProvider#publishdata)

#### Defined in

[src/storage/gftp.ts:91](https://github.com/golemfactory/golem-js/blob/c2379e3/src/storage/gftp.ts#L91)

___

### release

▸ **release**(): `Promise`\<`void`\>

Release previously allocated resource URL from Yagna.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[release](../interfaces/storage_provider.StorageProvider#release)

#### Defined in

[src/storage/gftp.ts:103](https://github.com/golemfactory/golem-js/blob/c2379e3/src/storage/gftp.ts#L103)

___

### close

▸ **close**(): `Promise`\<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[close](../interfaces/storage_provider.StorageProvider#close)

#### Defined in

[src/storage/gftp.ts:117](https://github.com/golemfactory/golem-js/blob/c2379e3/src/storage/gftp.ts#L117)
