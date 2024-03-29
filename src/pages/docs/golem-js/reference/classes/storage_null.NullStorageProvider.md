---
title: "Class NullStorageProvider"
pageTitle: "Class NullStorageProvider - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class NullStorageProvider within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: NullStorageProvider

[storage/null](../modules/storage_null).NullStorageProvider

Null Storage Provider.

Blocks all storage operations. Any attempt to use storage will result in an error.

This will be the default storage provider if no default storage provider is available
for the platform the SDK is running on.

## Implements

- [`StorageProvider`](../interfaces/storage_provider.StorageProvider)

## Table of contents

### Constructors

- [constructor](storage_null.NullStorageProvider#constructor)

### Methods

- [close](storage_null.NullStorageProvider#close)
- [init](storage_null.NullStorageProvider#init)
- [publishData](storage_null.NullStorageProvider#publishdata)
- [publishFile](storage_null.NullStorageProvider#publishfile)
- [receiveFile](storage_null.NullStorageProvider#receivefile)
- [receiveData](storage_null.NullStorageProvider#receivedata)
- [release](storage_null.NullStorageProvider#release)

## Constructors

### constructor

• **new NullStorageProvider**(): [`NullStorageProvider`](storage_null.NullStorageProvider)

#### Returns

[`NullStorageProvider`](storage_null.NullStorageProvider)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[close](../interfaces/storage_provider.StorageProvider#close)

#### Defined in

[src/storage/null.ts:15](https://github.com/golemfactory/golem-js/blob/4182943/src/storage/null.ts#L15)

___

### init

▸ **init**(): `Promise`\<`void`\>

Initialize storage provider.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[init](../interfaces/storage_provider.StorageProvider#init)

#### Defined in

[src/storage/null.ts:19](https://github.com/golemfactory/golem-js/blob/4182943/src/storage/null.ts#L19)

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

[src/storage/null.ts:24](https://github.com/golemfactory/golem-js/blob/4182943/src/storage/null.ts#L24)

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

[src/storage/null.ts:29](https://github.com/golemfactory/golem-js/blob/4182943/src/storage/null.ts#L29)

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

[src/storage/null.ts:34](https://github.com/golemfactory/golem-js/blob/4182943/src/storage/null.ts#L34)

___

### receiveData

▸ **receiveData**(`callback`): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StorageProviderDataCallback`](../modules/storage_provider#storageproviderdatacallback) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[receiveData](../interfaces/storage_provider.StorageProvider#receivedata)

#### Defined in

[src/storage/null.ts:39](https://github.com/golemfactory/golem-js/blob/4182943/src/storage/null.ts#L39)

___

### release

▸ **release**(`urls`): `Promise`\<`void`\>

Release previously allocated resource URL from Yagna.

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `string`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[release](../interfaces/storage_provider.StorageProvider#release)

#### Defined in

[src/storage/null.ts:44](https://github.com/golemfactory/golem-js/blob/4182943/src/storage/null.ts#L44)
