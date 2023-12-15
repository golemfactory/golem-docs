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

• **new WebSocketBrowserStorageProvider**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WebSocketStorageProviderOptions`](../interfaces/storage_ws_browser.WebSocketStorageProviderOptions) |

#### Defined in

[src/storage/ws-browser.ts:66](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/ws-browser.ts#L66)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[close](../interfaces/storage_provider.StorageProvider#close)

#### Defined in

[src/storage/ws-browser.ts:70](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/ws-browser.ts#L70)

___

### init

▸ **init**(): `Promise`\<`void`\>

Initialize storage provider.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[init](../interfaces/storage_provider.StorageProvider#init)

#### Defined in

[src/storage/ws-browser.ts:74](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/ws-browser.ts#L74)

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

[src/storage/ws-browser.ts:78](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/ws-browser.ts#L78)

___

### publishFile

▸ **publishFile**(): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be uploaded.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[publishFile](../interfaces/storage_provider.StorageProvider#publishfile)

#### Defined in

[src/storage/ws-browser.ts:103](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/ws-browser.ts#L103)

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

[src/storage/ws-browser.ts:107](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/ws-browser.ts#L107)

___

### receiveFile

▸ **receiveFile**(): `Promise`\<`string`\>

Return allocated resource URL from Yagna of a file to be downloaded.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[receiveFile](../interfaces/storage_provider.StorageProvider#receivefile)

#### Defined in

[src/storage/ws-browser.ts:133](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/ws-browser.ts#L133)

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

[src/storage/ws-browser.ts:137](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/ws-browser.ts#L137)
