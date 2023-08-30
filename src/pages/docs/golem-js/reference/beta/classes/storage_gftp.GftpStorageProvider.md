# Class: GftpStorageProvider

[storage/gftp](../modules/storage_gftp.md).GftpStorageProvider

## Implements

- [`StorageProvider`](../interfaces/storage_provider.StorageProvider.md)

## Table of contents

### Constructors

- [constructor](storage_gftp.GftpStorageProvider.md#constructor)

### Methods

- [init](storage_gftp.GftpStorageProvider.md#init)
- [isInitiated](storage_gftp.GftpStorageProvider.md#isinitiated)
- [receiveFile](storage_gftp.GftpStorageProvider.md#receivefile)
- [receiveData](storage_gftp.GftpStorageProvider.md#receivedata)
- [publishFile](storage_gftp.GftpStorageProvider.md#publishfile)
- [publishData](storage_gftp.GftpStorageProvider.md#publishdata)
- [release](storage_gftp.GftpStorageProvider.md#release)
- [close](storage_gftp.GftpStorageProvider.md#close)
- [readStream](storage_gftp.GftpStorageProvider.md#readstream)

## Constructors

### constructor

• **new GftpStorageProvider**(`logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger.md) |

#### Defined in

[src/storage/gftp.ts:20](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/gftp.ts#L20)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

Initialize storage provider.

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[init](../interfaces/storage_provider.StorageProvider.md#init)

#### Defined in

[src/storage/gftp.ts:26](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/gftp.ts#L26)

___

### isInitiated

▸ **isInitiated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/storage/gftp.ts:61](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/gftp.ts#L61)

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

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[receiveFile](../interfaces/storage_provider.StorageProvider.md#receivefile)

#### Defined in

[src/storage/gftp.ts:77](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/gftp.ts#L77)

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

[src/storage/gftp.ts:83](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/gftp.ts#L83)

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

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[publishFile](../interfaces/storage_provider.StorageProvider.md#publishfile)

#### Defined in

[src/storage/gftp.ts:87](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/gftp.ts#L87)

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

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[publishData](../interfaces/storage_provider.StorageProvider.md#publishdata)

#### Defined in

[src/storage/gftp.ts:93](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/gftp.ts#L93)

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

[src/storage/gftp.ts:106](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/gftp.ts#L106)

___

### close

▸ **close**(): `Promise`<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[close](../interfaces/storage_provider.StorageProvider.md#close)

#### Defined in

[src/storage/gftp.ts:120](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/gftp.ts#L120)

___

### readStream

▸ **readStream**(`readable`): `AsyncGenerator`<`string`, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `readable` | `any` |

#### Returns

`AsyncGenerator`<`string`, `void`, `unknown`\>

#### Defined in

[src/storage/gftp.ts:147](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/gftp.ts#L147)
