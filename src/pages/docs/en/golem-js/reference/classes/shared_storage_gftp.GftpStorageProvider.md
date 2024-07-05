---
title: "Class GftpStorageProvider"
pageTitle: "Class GftpStorageProvider - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GftpStorageProvider within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GftpStorageProvider

[shared/storage/gftp](../modules/shared_storage_gftp).GftpStorageProvider

## Implements

- [`StorageProvider`](../interfaces/shared_storage_provider.StorageProvider)

## Table of contents

### Constructors

- [constructor](shared_storage_gftp.GftpStorageProvider#constructor)

### Methods

- [init](shared_storage_gftp.GftpStorageProvider#init)
- [isInitiated](shared_storage_gftp.GftpStorageProvider#isinitiated)
- [receiveFile](shared_storage_gftp.GftpStorageProvider#receivefile)
- [receiveData](shared_storage_gftp.GftpStorageProvider#receivedata)
- [publishFile](shared_storage_gftp.GftpStorageProvider#publishfile)
- [publishData](shared_storage_gftp.GftpStorageProvider#publishdata)
- [release](shared_storage_gftp.GftpStorageProvider#release)
- [close](shared_storage_gftp.GftpStorageProvider#close)
- [isReady](shared_storage_gftp.GftpStorageProvider#isready)

## Constructors

### constructor

• **new GftpStorageProvider**(`logger?`): [`GftpStorageProvider`](shared_storage_gftp.GftpStorageProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger?` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |

#### Returns

[`GftpStorageProvider`](shared_storage_gftp.GftpStorageProvider)

#### Defined in

[src/shared/storage/gftp.ts:26](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/gftp.ts#L26)

## Methods

### init

▸ **init**(): `Promise`\<`void`\>

Initialize storage provider.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[init](../interfaces/shared_storage_provider.StorageProvider#init)

#### Defined in

[src/shared/storage/gftp.ts:33](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/gftp.ts#L33)

___

### isInitiated

▸ **isInitiated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/shared/storage/gftp.ts:66](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/gftp.ts#L66)

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

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[receiveFile](../interfaces/shared_storage_provider.StorageProvider#receivefile)

#### Defined in

[src/shared/storage/gftp.ts:78](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/gftp.ts#L78)

___

### receiveData

▸ **receiveData**(): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[receiveData](../interfaces/shared_storage_provider.StorageProvider#receivedata)

#### Defined in

[src/shared/storage/gftp.ts:83](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/gftp.ts#L83)

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

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[publishFile](../interfaces/shared_storage_provider.StorageProvider#publishfile)

#### Defined in

[src/shared/storage/gftp.ts:87](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/gftp.ts#L87)

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

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[publishData](../interfaces/shared_storage_provider.StorageProvider#publishdata)

#### Defined in

[src/shared/storage/gftp.ts:93](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/gftp.ts#L93)

___

### release

▸ **release**(): `Promise`\<`void`\>

Release previously allocated resource URL from Yagna.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[release](../interfaces/shared_storage_provider.StorageProvider#release)

#### Defined in

[src/shared/storage/gftp.ts:105](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/gftp.ts#L105)

___

### close

▸ **close**(): `Promise`\<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[close](../interfaces/shared_storage_provider.StorageProvider#close)

#### Defined in

[src/shared/storage/gftp.ts:119](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/gftp.ts#L119)

___

### isReady

▸ **isReady**(): `boolean`

Tells if the storage provider is ready for use

#### Returns

`boolean`

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[isReady](../interfaces/shared_storage_provider.StorageProvider#isready)

#### Defined in

[src/shared/storage/gftp.ts:179](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/gftp.ts#L179)
