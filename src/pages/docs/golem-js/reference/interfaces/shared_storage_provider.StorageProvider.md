---
title: "Interface StorageProvider"
pageTitle: "Interface StorageProvider - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface StorageProvider within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: StorageProvider

[shared/storage/provider](../modules/shared_storage_provider).StorageProvider

## Implemented by

- [`GftpStorageProvider`](../classes/shared_storage_gftp.GftpStorageProvider)
- [`NullStorageProvider`](../classes/shared_storage_null.NullStorageProvider)
- [`WebSocketBrowserStorageProvider`](../classes/shared_storage_ws_browser.WebSocketBrowserStorageProvider)

## Table of contents

### Methods

- [init](shared_storage_provider.StorageProvider#init)
- [isReady](shared_storage_provider.StorageProvider#isready)
- [close](shared_storage_provider.StorageProvider#close)
- [receiveFile](shared_storage_provider.StorageProvider#receivefile)
- [receiveData](shared_storage_provider.StorageProvider#receivedata)
- [publishFile](shared_storage_provider.StorageProvider#publishfile)
- [publishData](shared_storage_provider.StorageProvider#publishdata)
- [release](shared_storage_provider.StorageProvider#release)

## Methods

### init

▸ **init**(): `Promise`\<`void`\>

Initialize storage provider.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/shared/storage/provider.ts:7](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/provider.ts#L7)

___

### isReady

▸ **isReady**(): `boolean`

Tells if the storage provider is ready for use

#### Returns

`boolean`

#### Defined in

[src/shared/storage/provider.ts:12](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/provider.ts#L12)

___

### close

▸ **close**(): `Promise`\<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/shared/storage/provider.ts:17](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/provider.ts#L17)

___

### receiveFile

▸ **receiveFile**(`destPath`): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `destPath` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/shared/storage/provider.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/provider.ts#L22)

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

#### Defined in

[src/shared/storage/provider.ts:27](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/provider.ts#L27)

___

### publishFile

▸ **publishFile**(`srcPath`): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be uploaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcPath` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/shared/storage/provider.ts:33](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/provider.ts#L33)

___

### publishData

▸ **publishData**(`data`): `Promise`\<`string`\>

Return allocated resource URL from Yagna of data to be uploaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/shared/storage/provider.ts:39](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/provider.ts#L39)

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

#### Defined in

[src/shared/storage/provider.ts:45](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/provider.ts#L45)
