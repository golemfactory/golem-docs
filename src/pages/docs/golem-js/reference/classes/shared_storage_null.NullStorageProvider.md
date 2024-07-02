---
title: "Class NullStorageProvider"
pageTitle: "Class NullStorageProvider - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class NullStorageProvider within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: NullStorageProvider

[shared/storage/null](../modules/shared_storage_null).NullStorageProvider

Null Storage Provider.

Blocks all storage operations. Any attempt to use storage will result in an error.

This will be the default storage provider if no default storage provider is available
for the platform the SDK is running on.

## Implements

- [`StorageProvider`](../interfaces/shared_storage_provider.StorageProvider)

## Table of contents

### Constructors

- [constructor](shared_storage_null.NullStorageProvider#constructor)

### Methods

- [close](shared_storage_null.NullStorageProvider#close)
- [init](shared_storage_null.NullStorageProvider#init)
- [publishData](shared_storage_null.NullStorageProvider#publishdata)
- [publishFile](shared_storage_null.NullStorageProvider#publishfile)
- [receiveFile](shared_storage_null.NullStorageProvider#receivefile)
- [receiveData](shared_storage_null.NullStorageProvider#receivedata)
- [release](shared_storage_null.NullStorageProvider#release)
- [isReady](shared_storage_null.NullStorageProvider#isready)

## Constructors

### constructor

• **new NullStorageProvider**(): [`NullStorageProvider`](shared_storage_null.NullStorageProvider)

#### Returns

[`NullStorageProvider`](shared_storage_null.NullStorageProvider)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[close](../interfaces/shared_storage_provider.StorageProvider#close)

#### Defined in

[src/shared/storage/null.ts:15](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/null.ts#L15)

___

### init

▸ **init**(): `Promise`\<`void`\>

Initialize storage provider.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[init](../interfaces/shared_storage_provider.StorageProvider#init)

#### Defined in

[src/shared/storage/null.ts:19](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/null.ts#L19)

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

[src/shared/storage/null.ts:24](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/null.ts#L24)

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

[src/shared/storage/null.ts:29](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/null.ts#L29)

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

[src/shared/storage/null.ts:34](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/null.ts#L34)

___

### receiveData

▸ **receiveData**(`callback`): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StorageProviderDataCallback`](../modules/shared_storage_provider#storageproviderdatacallback) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[receiveData](../interfaces/shared_storage_provider.StorageProvider#receivedata)

#### Defined in

[src/shared/storage/null.ts:39](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/null.ts#L39)

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

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[release](../interfaces/shared_storage_provider.StorageProvider#release)

#### Defined in

[src/shared/storage/null.ts:44](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/null.ts#L44)

___

### isReady

▸ **isReady**(): `boolean`

Tells if the storage provider is ready for use

#### Returns

`boolean`

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[isReady](../interfaces/shared_storage_provider.StorageProvider#isready)

#### Defined in

[src/shared/storage/null.ts:48](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/null.ts#L48)
