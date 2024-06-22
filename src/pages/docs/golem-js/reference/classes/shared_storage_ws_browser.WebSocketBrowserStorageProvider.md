---
title: "Class WebSocketBrowserStorageProvider"
pageTitle: "Class WebSocketBrowserStorageProvider - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class WebSocketBrowserStorageProvider within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: WebSocketBrowserStorageProvider

[shared/storage/ws-browser](../modules/shared_storage_ws_browser).WebSocketBrowserStorageProvider

Storage provider that uses GFTP over WebSockets.

## Implements

- [`StorageProvider`](../interfaces/shared_storage_provider.StorageProvider)

## Table of contents

### Constructors

- [constructor](shared_storage_ws_browser.WebSocketBrowserStorageProvider#constructor)

### Methods

- [close](shared_storage_ws_browser.WebSocketBrowserStorageProvider#close)
- [init](shared_storage_ws_browser.WebSocketBrowserStorageProvider#init)
- [publishData](shared_storage_ws_browser.WebSocketBrowserStorageProvider#publishdata)
- [publishFile](shared_storage_ws_browser.WebSocketBrowserStorageProvider#publishfile)
- [receiveData](shared_storage_ws_browser.WebSocketBrowserStorageProvider#receivedata)
- [receiveFile](shared_storage_ws_browser.WebSocketBrowserStorageProvider#receivefile)
- [release](shared_storage_ws_browser.WebSocketBrowserStorageProvider#release)
- [isReady](shared_storage_ws_browser.WebSocketBrowserStorageProvider#isready)

## Constructors

### constructor

• **new WebSocketBrowserStorageProvider**(`yagnaApi`, `options`): [`WebSocketBrowserStorageProvider`](shared_storage_ws_browser.WebSocketBrowserStorageProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](shared_yagna_yagnaApi.YagnaApi) |
| `options` | [`WebSocketStorageProviderOptions`](../interfaces/shared_storage_ws_browser.WebSocketStorageProviderOptions) |

#### Returns

[`WebSocketBrowserStorageProvider`](shared_storage_ws_browser.WebSocketBrowserStorageProvider)

#### Defined in

[src/shared/storage/ws-browser.ts:64](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/ws-browser.ts#L64)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[close](../interfaces/shared_storage_provider.StorageProvider#close)

#### Defined in

[src/shared/storage/ws-browser.ts:71](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/ws-browser.ts#L71)

___

### init

▸ **init**(): `Promise`\<`void`\>

Initialize storage provider.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[init](../interfaces/shared_storage_provider.StorageProvider#init)

#### Defined in

[src/shared/storage/ws-browser.ts:76](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/ws-browser.ts#L76)

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

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[publishData](../interfaces/shared_storage_provider.StorageProvider#publishdata)

#### Defined in

[src/shared/storage/ws-browser.ts:81](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/ws-browser.ts#L81)

___

### publishFile

▸ **publishFile**(): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be uploaded.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[publishFile](../interfaces/shared_storage_provider.StorageProvider#publishfile)

#### Defined in

[src/shared/storage/ws-browser.ts:106](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/ws-browser.ts#L106)

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

[src/shared/storage/ws-browser.ts:110](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/ws-browser.ts#L110)

___

### receiveFile

▸ **receiveFile**(): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[receiveFile](../interfaces/shared_storage_provider.StorageProvider#receivefile)

#### Defined in

[src/shared/storage/ws-browser.ts:136](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/ws-browser.ts#L136)

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

[src/shared/storage/ws-browser.ts:140](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/ws-browser.ts#L140)

___

### isReady

▸ **isReady**(): `boolean`

Tells if the storage provider is ready for use

#### Returns

`boolean`

#### Implementation of

[StorageProvider](../interfaces/shared_storage_provider.StorageProvider).[isReady](../interfaces/shared_storage_provider.StorageProvider#isready)

#### Defined in

[src/shared/storage/ws-browser.ts:152](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/ws-browser.ts#L152)
