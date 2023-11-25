---
title: "Class WebSocketBrowserStorageProvider - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class WebSocketBrowserStorageProvider within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: WebSocketBrowserStorageProvider

[storage/ws-browser](../modules/storage_ws_browser).WebSocketBrowserStorageProvider

Storage provider that uses GFTP over WebSockets.

## Implements

- [`StorageProvider`](../interfaces/storage_provider.StorageProvider)

## Table of contents

### Constructors

- [constructor](storage_ws_browser.WebSocketBrowserStorageProvider#constructor)

### Methods

- [close](storage_ws_browser.WebSocketBrowserStorageProvider#close)
- [init](storage_ws_browser.WebSocketBrowserStorageProvider#init)
- [publishData](storage_ws_browser.WebSocketBrowserStorageProvider#publishdata)
- [publishFile](storage_ws_browser.WebSocketBrowserStorageProvider#publishfile)
- [receiveData](storage_ws_browser.WebSocketBrowserStorageProvider#receivedata)
- [receiveFile](storage_ws_browser.WebSocketBrowserStorageProvider#receivefile)
- [release](storage_ws_browser.WebSocketBrowserStorageProvider#release)

## Constructors

### constructor

• **new WebSocketBrowserStorageProvider**(`yagnaApi`, `options`): [`WebSocketBrowserStorageProvider`](storage_ws_browser.WebSocketBrowserStorageProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi) |
| `options` | [`WebSocketStorageProviderOptions`](../interfaces/storage_ws_browser.WebSocketStorageProviderOptions) |

#### Returns

[`WebSocketBrowserStorageProvider`](storage_ws_browser.WebSocketBrowserStorageProvider)

#### Defined in

[src/storage/ws-browser.ts:61](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/storage/ws-browser.ts#L61)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[close](../interfaces/storage_provider.StorageProvider#close)

#### Defined in

[src/storage/ws-browser.ts:68](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/storage/ws-browser.ts#L68)

___

### init

▸ **init**(): `Promise`\<`void`\>

Initialize storage provider.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[init](../interfaces/storage_provider.StorageProvider#init)

#### Defined in

[src/storage/ws-browser.ts:72](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/storage/ws-browser.ts#L72)

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

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[publishData](../interfaces/storage_provider.StorageProvider#publishdata)

#### Defined in

[src/storage/ws-browser.ts:76](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/storage/ws-browser.ts#L76)

___

### publishFile

▸ **publishFile**(): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be uploaded.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[publishFile](../interfaces/storage_provider.StorageProvider#publishfile)

#### Defined in

[src/storage/ws-browser.ts:101](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/storage/ws-browser.ts#L101)

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

[src/storage/ws-browser.ts:105](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/storage/ws-browser.ts#L105)

___

### receiveFile

▸ **receiveFile**(): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[receiveFile](../interfaces/storage_provider.StorageProvider#receivefile)

#### Defined in

[src/storage/ws-browser.ts:131](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/storage/ws-browser.ts#L131)

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

[src/storage/ws-browser.ts:135](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/storage/ws-browser.ts#L135)
