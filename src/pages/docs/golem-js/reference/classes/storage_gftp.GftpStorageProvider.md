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
- [readStream](storage_gftp.GftpStorageProvider#readstream)

## Constructors

### constructor

• **new GftpStorageProvider**(`logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Defined in

[src/storage/gftp.ts:20](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/gftp.ts#L20)

## Methods

### init

▸ **init**(): `Promise`\<`void`\>

Initialize storage provider.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[init](../interfaces/storage_provider.StorageProvider#init)

#### Defined in

[src/storage/gftp.ts:26](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/gftp.ts#L26)

___

### isInitiated

▸ **isInitiated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/storage/gftp.ts:61](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/gftp.ts#L61)

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

[src/storage/gftp.ts:77](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/gftp.ts#L77)

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

[src/storage/gftp.ts:83](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/gftp.ts#L83)

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

[src/storage/gftp.ts:87](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/gftp.ts#L87)

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

[src/storage/gftp.ts:93](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/gftp.ts#L93)

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

[src/storage/gftp.ts:106](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/gftp.ts#L106)

___

### close

▸ **close**(): `Promise`\<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[close](../interfaces/storage_provider.StorageProvider#close)

#### Defined in

[src/storage/gftp.ts:120](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/gftp.ts#L120)

___

### readStream

▸ **readStream**(`readable`): `AsyncGenerator`\<`string`, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `readable` | `any` |

#### Returns

`AsyncGenerator`\<`string`, `void`, `unknown`\>

#### Defined in

[src/storage/gftp.ts:147](https://github.com/golemfactory/golem-js/blob/614ea72/src/storage/gftp.ts#L147)
