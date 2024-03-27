---
title: "Module gvmi/gvmiServer"
pageTitle: "Module gvmi/gvmiServer - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module gvmi/gvmiServer within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: gvmi/gvmiServer

## Table of contents

### Classes

- [GvmiServer](../classes/gvmi_gvmiServer.GvmiServer)

### Functions

- [serveLocalGvmi](gvmi_gvmiServer#servelocalgvmi)

## Functions

### serveLocalGvmi

▸ **serveLocalGvmi**(`gvmiPath`, `storageProvider?`): [`GvmiServer`](../classes/gvmi_gvmiServer.GvmiServer)

Serve a local gvmi file so a provider can download it directly from you.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gvmiPath` | `string` |
| `storageProvider?` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |

#### Returns

[`GvmiServer`](../classes/gvmi_gvmiServer.GvmiServer)

**`Example`**

```ts
const server = serveLocalGvmi("/path/to/your.gvmi");
const { url, hash } = server.getImage();
const package = Package.create({
 imageHash: hash,
 imageUrl: url,
});
```

#### Defined in

[src/gvmi/gvmiServer.ts:72](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/gvmi/gvmiServer.ts#L72)
