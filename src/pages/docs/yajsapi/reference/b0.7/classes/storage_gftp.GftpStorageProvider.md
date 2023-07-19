[JavaScript API reference](../README) / [Exports](../modules) / [storage/gftp](../modules/storage_gftp) / GftpStorageProvider

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
- [receive](storage_gftp.GftpStorageProvider#receive)
- [publish](storage_gftp.GftpStorageProvider#publish)
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

[yajsapi/storage/gftp.ts:14](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/storage/gftp.ts#L14)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[init](../interfaces/storage_provider.StorageProvider#init)

#### Defined in

[yajsapi/storage/gftp.ts:20](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/storage/gftp.ts#L20)

___

### isInitiated

▸ **isInitiated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/storage/gftp.ts:31](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/storage/gftp.ts#L31)

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

[StorageProvider](../interfaces/storage_provider.StorageProvider).[receive](../interfaces/storage_provider.StorageProvider#receive)

#### Defined in

[yajsapi/storage/gftp.ts:47](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/storage/gftp.ts#L47)

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

[StorageProvider](../interfaces/storage_provider.StorageProvider).[publish](../interfaces/storage_provider.StorageProvider#publish)

#### Defined in

[yajsapi/storage/gftp.ts:52](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/storage/gftp.ts#L52)

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

[StorageProvider](../interfaces/storage_provider.StorageProvider).[release](../interfaces/storage_provider.StorageProvider#release)

#### Defined in

[yajsapi/storage/gftp.ts:59](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/storage/gftp.ts#L59)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[StorageProvider](../interfaces/storage_provider.StorageProvider).[close](../interfaces/storage_provider.StorageProvider#close)

#### Defined in

[yajsapi/storage/gftp.ts:63](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/storage/gftp.ts#L63)

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

[yajsapi/storage/gftp.ts:89](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/storage/gftp.ts#L89)
