# Interface: StorageProvider

[storage/provider](../modules/storage_provider.md).StorageProvider

## Implemented by

- [`GftpStorageProvider`](../classes/storage_gftp.GftpStorageProvider.md)

## Table of contents

### Methods

- [init](storage_provider.StorageProvider.md#init)
- [close](storage_provider.StorageProvider.md#close)
- [receive](storage_provider.StorageProvider.md#receive)
- [publish](storage_provider.StorageProvider.md#publish)
- [release](storage_provider.StorageProvider.md#release)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/storage/provider.ts:2](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/provider.ts#L2)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/storage/provider.ts:3](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/provider.ts#L3)

___

### receive

▸ **receive**(`path`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[yajsapi/storage/provider.ts:4](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/provider.ts#L4)

___

### publish

▸ **publish**(`src`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` \| `Buffer` |

#### Returns

`Promise`<`string`\>

#### Defined in

[yajsapi/storage/provider.ts:5](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/provider.ts#L5)

___

### release

▸ **release**(`urls`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/storage/provider.ts:6](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/storage/provider.ts#L6)
