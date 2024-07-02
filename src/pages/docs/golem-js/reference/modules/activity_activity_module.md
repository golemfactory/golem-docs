---
title: "Module activity/activity.module"
pageTitle: "Module activity/activity.module - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module activity/activity.module within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: activity/activity.module

## Table of contents

### Classes

- [ActivityModuleImpl](../classes/activity_activity_module.ActivityModuleImpl)

### Interfaces

- [ActivityModule](../interfaces/activity_activity_module.ActivityModule)
- [IFileServer](../interfaces/activity_activity_module.IFileServer)

### Type Aliases

- [FileServerEntry](activity_activity_module#fileserverentry)

## Type Aliases

### FileServerEntry

Ƭ **FileServerEntry**: `Object`

Information about a file that has been published via the FileServer

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileUrl` | `string` | The URL of the file, that the clients can use to reach and download the file |
| `fileHash` | `string` | The checksum that can be used by clients to validate integrity of the downloaded file |

#### Defined in

[src/activity/activity.module.ts:75](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.module.ts#L75)
