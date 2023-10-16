---
title: "Class GftpStorageProvider - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GftpStorageProvider within the golem-js SDK for the Golem Network."
type: "reference"
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

• **new GftpStorageProvider**(`logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Defined in

[src/storage/gftp.ts:20](https://github.com/golemfactory/golem-js/blob/f41abd4/src/storage/gftp.ts#L20)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

Initialize storage provider.

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[init](../interfaces/storage_provider.StorageProvider#init)

#### Defined in

[src/storage/gftp.ts:26](https://github.com/golemfactory/golem-js/blob/f41abd4/src/storage/gftp.ts#L26)

___

### isInitiated

▸ **isInitiated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/storage/gftp.ts:61](https://github.com/golemfactory/golem-js/blob/f41abd4/src/storage/gftp.ts#L61)

___

### receiveFile

▸ **receiveFile**(`path`): `Promise`<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[receiveFile](../interfaces/storage_provider.StorageProvider#receivefile)

#### Defined in

[src/storage/gftp.ts:73](https://github.com/golemfactory/golem-js/blob/f41abd4/src/storage/gftp.ts#L73)

___

### receiveData

▸ **receiveData**(): `Promise`<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Returns

`Promise`<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[receiveData](../interfaces/storage_provider.StorageProvider#receivedata)

#### Defined in

[src/storage/gftp.ts:78](https://github.com/golemfactory/golem-js/blob/f41abd4/src/storage/gftp.ts#L78)

___

### publishFile

▸ **publishFile**(`src`): `Promise`<`string`\>

Return allocated resource URL from Yagna of a file to be uploaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[publishFile](../interfaces/storage_provider.StorageProvider#publishfile)

#### Defined in

[src/storage/gftp.ts:82](https://github.com/golemfactory/golem-js/blob/f41abd4/src/storage/gftp.ts#L82)

___

### publishData

▸ **publishData**(`src`): `Promise`<`string`\>

Return allocated resource URL from Yagna of data to be uploaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `Uint8Array` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[publishData](../interfaces/storage_provider.StorageProvider#publishdata)

#### Defined in

[src/storage/gftp.ts:88](https://github.com/golemfactory/golem-js/blob/f41abd4/src/storage/gftp.ts#L88)

___

### release

▸ **release**(): `Promise`<`void`\>

Release previously allocated resource URL from Yagna.

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[release](../interfaces/storage_provider.StorageProvider#release)

#### Defined in

[src/storage/gftp.ts:100](https://github.com/golemfactory/golem-js/blob/f41abd4/src/storage/gftp.ts#L100)

___

### close

▸ **close**(): `Promise`<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[close](../interfaces/storage_provider.StorageProvider#close)

#### Defined in

[src/storage/gftp.ts:114](https://github.com/golemfactory/golem-js/blob/f41abd4/src/storage/gftp.ts#L114)
