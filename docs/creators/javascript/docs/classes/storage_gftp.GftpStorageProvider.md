# Class: GftpStorageProvider

[storage/gftp](../modules/storage_gftp.md).GftpStorageProvider

GFTP Storage Provide

**`Description`**

## Implements

- [`StorageProvider`](../interfaces/storage_provider.StorageProvider.md)

## Table of contents

### Constructors

- [constructor](storage_gftp.GftpStorageProvider.md#constructor)

### Methods

- [init](storage_gftp.GftpStorageProvider.md#init)
- [isInitiated](storage_gftp.GftpStorageProvider.md#isinitiated)
- [receive](storage_gftp.GftpStorageProvider.md#receive)
- [publish](storage_gftp.GftpStorageProvider.md#publish)
- [release](storage_gftp.GftpStorageProvider.md#release)
- [close](storage_gftp.GftpStorageProvider.md#close)
- [readStream](storage_gftp.GftpStorageProvider.md#readstream)

## Constructors

### constructor

• **new GftpStorageProvider**(`logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger?` | [`Logger`](../interfaces/utils_logger.Logger.md) |

#### Defined in

[yajsapi/storage/gftp.ts:21](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/gftp.ts#L21)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[init](../interfaces/storage_provider.StorageProvider.md#init)

#### Defined in

[yajsapi/storage/gftp.ts:27](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/gftp.ts#L27)

___

### isInitiated

▸ **isInitiated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/storage/gftp.ts:34](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/gftp.ts#L34)

___

### receive

▸ **receive**(`path`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[receive](../interfaces/storage_provider.StorageProvider.md#receive)

#### Defined in

[yajsapi/storage/gftp.ts:49](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/gftp.ts#L49)

___

### publish

▸ **publish**(`src`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` \| `Buffer` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[publish](../interfaces/storage_provider.StorageProvider.md#publish)

#### Defined in

[yajsapi/storage/gftp.ts:54](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/gftp.ts#L54)

___

### release

▸ **release**(`urls`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[release](../interfaces/storage_provider.StorageProvider.md#release)

#### Defined in

[yajsapi/storage/gftp.ts:61](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/gftp.ts#L61)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider.md).[close](../interfaces/storage_provider.StorageProvider.md#close)

#### Defined in

[yajsapi/storage/gftp.ts:65](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/gftp.ts#L65)

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

[yajsapi/storage/gftp.ts:91](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/gftp.ts#L91)
