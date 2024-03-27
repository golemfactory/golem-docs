---
title: "Class GvmiServer"
pageTitle: "Class GvmiServer - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GvmiServer within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GvmiServer

[gvmi/gvmiServer](../modules/gvmi_gvmiServer).GvmiServer

Helper class to serve a local gvmi file so a provider can
download it directly from you. When you start serving the file,
the server will calculate the hash automatically.

## Table of contents

### Constructors

- [constructor](gvmi_gvmiServer.GvmiServer#constructor)

### Properties

- [fileHash](gvmi_gvmiServer.GvmiServer#filehash)

### Methods

- [calculateFileHash](gvmi_gvmiServer.GvmiServer#calculatefilehash)
- [isServing](gvmi_gvmiServer.GvmiServer#isserving)
- [serve](gvmi_gvmiServer.GvmiServer#serve)
- [close](gvmi_gvmiServer.GvmiServer#close)
- [getImage](gvmi_gvmiServer.GvmiServer#getimage)

## Constructors

### constructor

• **new GvmiServer**(`gvmiPath`, `storageProvider?`): [`GvmiServer`](gvmi_gvmiServer.GvmiServer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gvmiPath` | `string` |
| `storageProvider?` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |

#### Returns

[`GvmiServer`](gvmi_gvmiServer.GvmiServer)

#### Defined in

[src/gvmi/gvmiServer.ts:17](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/gvmi/gvmiServer.ts#L17)

## Properties

### fileHash

• `Readonly` **fileHash**: `string`

#### Defined in

[src/gvmi/gvmiServer.ts:14](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/gvmi/gvmiServer.ts#L14)

## Methods

### calculateFileHash

▸ **calculateFileHash**(): `string`

#### Returns

`string`

#### Defined in

[src/gvmi/gvmiServer.ts:27](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/gvmi/gvmiServer.ts#L27)

___

### isServing

▸ **isServing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gvmi/gvmiServer.ts:32](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/gvmi/gvmiServer.ts#L32)

___

### serve

▸ **serve**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/gvmi/gvmiServer.ts:36](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/gvmi/gvmiServer.ts#L36)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/gvmi/gvmiServer.ts:44](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/gvmi/gvmiServer.ts#L44)

___

### getImage

▸ **getImage**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `hash` | `string` |

#### Defined in

[src/gvmi/gvmiServer.ts:48](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/gvmi/gvmiServer.ts#L48)
