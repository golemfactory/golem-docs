---
title: "Interface IFileServer"
pageTitle: "Interface IFileServer - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface IFileServer within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: IFileServer

[activity/activity.module](../modules/activity_activity_module).IFileServer

An abstract interface describing a File Server that can be used to expose files from the Requestor to the Golem Network

## Implemented by

- [`GftpServerAdapter`](../classes/shared_storage_GftpServerAdapter.GftpServerAdapter)

## Table of contents

### Methods

- [publishFile](activity_activity_module.IFileServer#publishfile)
- [isFilePublished](activity_activity_module.IFileServer#isfilepublished)
- [getPublishInfo](activity_activity_module.IFileServer#getpublishinfo)
- [isServing](activity_activity_module.IFileServer#isserving)

## Methods

### publishFile

▸ **publishFile**(`sourcePath`): `Promise`\<[`FileServerEntry`](../modules/activity_activity_module#fileserverentry)\>

Exposes a file that can be accessed via Golem Network and GFTP

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourcePath` | `string` |

#### Returns

`Promise`\<[`FileServerEntry`](../modules/activity_activity_module#fileserverentry)\>

#### Defined in

[src/activity/activity.module.ts:90](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.module.ts#L90)

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

#### Defined in

[src/activity/activity.module.ts:95](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.module.ts#L95)

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

#### Defined in

[src/activity/activity.module.ts:100](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.module.ts#L100)

___

### isServing

▸ **isServing**(): `boolean`

Tells if the server is currently serving any files

#### Returns

`boolean`

#### Defined in

[src/activity/activity.module.ts:105](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.module.ts#L105)
