---
title: "Class CacheService"
pageTitle: "Class CacheService - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class CacheService within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: CacheService\<T\>

[shared/cache/CacheService](../modules/shared_cache_CacheService).CacheService

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](shared_cache_CacheService.CacheService#constructor)

### Methods

- [set](shared_cache_CacheService.CacheService#set)
- [get](shared_cache_CacheService.CacheService#get)
- [delete](shared_cache_CacheService.CacheService#delete)
- [has](shared_cache_CacheService.CacheService#has)
- [getAll](shared_cache_CacheService.CacheService#getall)
- [flushAll](shared_cache_CacheService.CacheService#flushall)

## Constructors

### constructor

• **new CacheService**\<`T`\>(): [`CacheService`](shared_cache_CacheService.CacheService)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`CacheService`](shared_cache_CacheService.CacheService)\<`T`\>

## Methods

### set

▸ **set**(`key`, `value`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`T`

#### Defined in

[src/shared/cache/CacheService.ts:4](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/cache/CacheService.ts#L4)

___

### get

▸ **get**(`key`): `undefined` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/shared/cache/CacheService.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/cache/CacheService.ts#L10)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[src/shared/cache/CacheService.ts:14](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/cache/CacheService.ts#L14)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[src/shared/cache/CacheService.ts:18](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/cache/CacheService.ts#L18)

___

### getAll

▸ **getAll**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/shared/cache/CacheService.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/cache/CacheService.ts#L22)

___

### flushAll

▸ **flushAll**(): `void`

#### Returns

`void`

#### Defined in

[src/shared/cache/CacheService.ts:26](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/cache/CacheService.ts#L26)
