# Class: NullStorageProvider

[storage/null](../modules/storage_null.md).NullStorageProvider

Null Storage Provider.

Blocks all storage operations. Any attempt to use storage will result in an error.

This will be the default storage provider if no default storage provider is available
for the platform the SDK is running on.

## Implements

- [`StorageProvider`](../interfaces/storage_provider.StorageProvider.md)

## Table of contents

### Constructors

- [constructor](storage_null.NullStorageProvider.md#constructor)

### Methods

- [close](storage_null.NullStorageProvider.md#close)
- [init](storage_null.NullStorageProvider.md#init)
- [publishData](storage_null.NullStorageProvider.md#publishdata)
- [publishFile](storage_null.NullStorageProvider.md#publishfile)
- [receiveFile](storage_null.NullStorageProvider.md#receivefile)
- [receiveData](storage_null.NullStorageProvider.md#receivedata)
- [release](storage_null.NullStorageProvider.md#release)

## Constructors

### constructor

• **new NullStorageProvider**()

## Methods

### close

▸ **close**(): `Promise`<`void`\>

Close storage provider and release all resources.

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[close](../interfaces/storage_provider.StorageProvider.md#close)

#### Defined in

[src/storage/null.ts:14](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/null.ts#L14)

___

### init

▸ **init**(): `Promise`<`void`\>

Initialize storage provider.

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[init](../interfaces/storage_provider.StorageProvider.md#init)

#### Defined in

[src/storage/null.ts:18](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/null.ts#L18)

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

[src/storage/null.ts:23](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/null.ts#L23)

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

[src/storage/null.ts:28](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/null.ts#L28)

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

[src/storage/null.ts:33](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/null.ts#L33)

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

[src/storage/null.ts:38](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/null.ts#L38)

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

[src/storage/null.ts:43](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/storage/null.ts#L43)
