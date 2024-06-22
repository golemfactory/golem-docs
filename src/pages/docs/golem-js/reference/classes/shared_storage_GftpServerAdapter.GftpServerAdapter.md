---
title: "Class GftpServerAdapter"
pageTitle: "Class GftpServerAdapter - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GftpServerAdapter within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GftpServerAdapter

[shared/storage/GftpServerAdapter](../modules/shared_storage_GftpServerAdapter).GftpServerAdapter

This class provides GFTP based implementation of the IFileServer interface used in the SDK

## Implements

- [`IFileServer`](../interfaces/activity_activity_module.IFileServer)

## Table of contents

### Constructors

- [constructor](shared_storage_GftpServerAdapter.GftpServerAdapter#constructor)

### Methods

- [publishFile](shared_storage_GftpServerAdapter.GftpServerAdapter#publishfile)
- [isServing](shared_storage_GftpServerAdapter.GftpServerAdapter#isserving)
- [getPublishInfo](shared_storage_GftpServerAdapter.GftpServerAdapter#getpublishinfo)
- [isFilePublished](shared_storage_GftpServerAdapter.GftpServerAdapter#isfilepublished)

## Constructors

### constructor

• **new GftpServerAdapter**(`storage`): [`GftpServerAdapter`](shared_storage_GftpServerAdapter.GftpServerAdapter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageProvider`](../interfaces/shared_storage_provider.StorageProvider) |

#### Returns

[`GftpServerAdapter`](shared_storage_GftpServerAdapter.GftpServerAdapter)

#### Defined in

[src/shared/storage/GftpServerAdapter.ts:13](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/GftpServerAdapter.ts#L13)

## Methods

### publishFile

▸ **publishFile**(`sourcePath`): `Promise`\<\{ `fileUrl`: `string` ; `fileHash`: `string`  }\>

Exposes a file that can be accessed via Golem Network and GFTP

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourcePath` | `string` |

#### Returns

`Promise`\<\{ `fileUrl`: `string` ; `fileHash`: `string`  }\>

#### Implementation of

[IFileServer](../interfaces/activity_activity_module.IFileServer).[publishFile](../interfaces/activity_activity_module.IFileServer#publishfile)

#### Defined in

[src/shared/storage/GftpServerAdapter.ts:15](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/GftpServerAdapter.ts#L15)

___

### isServing

▸ **isServing**(): `boolean`

Tells if the server is currently serving any files

#### Returns

`boolean`

#### Implementation of

[IFileServer](../interfaces/activity_activity_module.IFileServer).[isServing](../interfaces/activity_activity_module.IFileServer#isserving)

#### Defined in

[src/shared/storage/GftpServerAdapter.ts:37](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/GftpServerAdapter.ts#L37)

___

### getPublishInfo

▸ **getPublishInfo**(`sourcePath`): `undefined` \| [`FileServerEntry`](../modules/activity_activity_module#fileserverentry)

Returns publishing information for a file that has been already served

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourcePath` | `string` |

#### Returns

`undefined` \| [`FileServerEntry`](../modules/activity_activity_module#fileserverentry)

#### Implementation of

[IFileServer](../interfaces/activity_activity_module.IFileServer).[getPublishInfo](../interfaces/activity_activity_module.IFileServer#getpublishinfo)

#### Defined in

[src/shared/storage/GftpServerAdapter.ts:41](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/GftpServerAdapter.ts#L41)

___

### isFilePublished

▸ **isFilePublished**(`sourcePath`): `boolean`

Tells if the file was already published on the server

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourcePath` | `string` |

#### Returns

`boolean`

#### Implementation of

[IFileServer](../interfaces/activity_activity_module.IFileServer).[isFilePublished](../interfaces/activity_activity_module.IFileServer#isfilepublished)

#### Defined in

[src/shared/storage/GftpServerAdapter.ts:45](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/storage/GftpServerAdapter.ts#L45)
