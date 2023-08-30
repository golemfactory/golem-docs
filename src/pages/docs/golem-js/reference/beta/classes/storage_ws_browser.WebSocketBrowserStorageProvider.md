# Class: WebSocketBrowserStorageProvider

[storage/ws-browser](../modules/storage_ws_browser.md).WebSocketBrowserStorageProvider

Storage provider that uses GFTP over WebSockets.

## Implements

- [`StorageProvider`](../interfaces/storage_provider.StorageProvider.md)

## Table of contents

### Constructors

- [constructor](storage_ws_browser.WebSocketBrowserStorageProvider.md#constructor)

### Methods

- [close](storage_ws_browser.WebSocketBrowserStorageProvider.md#close)
- [init](storage_ws_browser.WebSocketBrowserStorageProvider.md#init)
- [publishData](storage_ws_browser.WebSocketBrowserStorageProvider.md#publishdata)
- [publishFile](storage_ws_browser.WebSocketBrowserStorageProvider.md#publishfile)
- [receiveData](storage_ws_browser.WebSocketBrowserStorageProvider.md#receivedata)
- [receiveFile](storage_ws_browser.WebSocketBrowserStorageProvider.md#receivefile)
- [release](storage_ws_browser.WebSocketBrowserStorageProvider.md#release)

## Constructors

### constructor

• **new WebSocketBrowserStorageProvider**(`yagnaApi`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](../modules/utils_yagna_yagna.md#yagnaapi) |
| `options` | [`WebSocketStorageProviderOptions`](../interfaces/storage_ws_browser.WebSocketStorageProviderOptions.md) |

#### Defined in

[src/storage/ws-browser.ts:61](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/ws-browser.ts#L61)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[close](../interfaces/storage_provider.StorageProvider.md#close)

#### Defined in

[src/storage/ws-browser.ts:68](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/ws-browser.ts#L68)

___

### init

▸ **init**(): `Promise`<`void`\>

Initialize storage provider.

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[init](../interfaces/storage_provider.StorageProvider.md#init)

#### Defined in

[src/storage/ws-browser.ts:72](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/ws-browser.ts#L72)

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

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[publishData](../interfaces/storage_provider.StorageProvider.md#publishdata)

#### Defined in

[src/storage/ws-browser.ts:76](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/ws-browser.ts#L76)

___

### publishFile

▸ **publishFile**(): `Promise`<`string`\>

Return allocated resource URL from Yagna of a file to be uploaded.

#### Returns

`Promise`<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[publishFile](../interfaces/storage_provider.StorageProvider.md#publishfile)

#### Defined in

[src/storage/ws-browser.ts:101](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/ws-browser.ts#L101)

___

### receiveData

▸ **receiveData**(`callback`): `Promise`<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StorageProviderDataCallback`](../modules/storage_provider.md#storageproviderdatacallback) |

#### Returns

`Promise`<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[receiveData](../interfaces/storage_provider.StorageProvider.md#receivedata)

#### Defined in

[src/storage/ws-browser.ts:105](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/ws-browser.ts#L105)

___

### receiveFile

▸ **receiveFile**(): `Promise`<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Returns

`Promise`<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[receiveFile](../interfaces/storage_provider.StorageProvider.md#receivefile)

#### Defined in

[src/storage/ws-browser.ts:131](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/ws-browser.ts#L131)

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

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[release](../interfaces/storage_provider.StorageProvider.md#release)

#### Defined in

[src/storage/ws-browser.ts:135](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/ws-browser.ts#L135)
