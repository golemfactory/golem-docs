---
title: "Interface StorageProvider - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface StorageProvider within the golem-js SDK for the Golem Network."
type: "reference"
---
# Interface: StorageProvider

[storage/provider](../modules/storage_provider).StorageProvider

## Implemented by

- [`GftpStorageProvider`](../classes/storage_gftp.GftpStorageProvider)
- [`NullStorageProvider`](../classes/storage_null.NullStorageProvider)
- [`WebSocketBrowserStorageProvider`](../classes/storage_ws_browser.WebSocketBrowserStorageProvider)

## Table of contents

### Methods

- [init](storage_provider.StorageProvider#init)
- [close](storage_provider.StorageProvider#close)
- [receiveFile](storage_provider.StorageProvider#receivefile)
- [receiveData](storage_provider.StorageProvider#receivedata)
- [publishFile](storage_provider.StorageProvider#publishfile)
- [publishData](storage_provider.StorageProvider#publishdata)
- [release](storage_provider.StorageProvider#release)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

Initialize storage provider.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/storage/provider.ts:7](https://github.com/golemfactory/golem-js/blob/00d03ae/src/storage/provider.ts#L7)

___

### close

▸ **close**(): `Promise`<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/storage/provider.ts:12](https://github.com/golemfactory/golem-js/blob/00d03ae/src/storage/provider.ts#L12)

___

### receiveFile

▸ **receiveFile**(`destPath`): `Promise`<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `destPath` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/storage/provider.ts:17](https://github.com/golemfactory/golem-js/blob/00d03ae/src/storage/provider.ts#L17)

___

### receiveData

▸ **receiveData**(`callback`): `Promise`<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StorageProviderDataCallback`](../modules/storage_provider#storageproviderdatacallback) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/storage/provider.ts:22](https://github.com/golemfactory/golem-js/blob/00d03ae/src/storage/provider.ts#L22)

___

### publishFile

▸ **publishFile**(`srcPath`): `Promise`<`string`\>

Return allocated resource URL from Yagna of a file to be uploaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcPath` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/storage/provider.ts:28](https://github.com/golemfactory/golem-js/blob/00d03ae/src/storage/provider.ts#L28)

___

### publishData

▸ **publishData**(`data`): `Promise`<`string`\>

Return allocated resource URL from Yagna of data to be uploaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/storage/provider.ts:34](https://github.com/golemfactory/golem-js/blob/00d03ae/src/storage/provider.ts#L34)

___

### release

▸ **release**(`urls`): `Promise`<`void`\>

Release previously allocated resource URL from Yagna.

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/storage/provider.ts:40](https://github.com/golemfactory/golem-js/blob/00d03ae/src/storage/provider.ts#L40)
