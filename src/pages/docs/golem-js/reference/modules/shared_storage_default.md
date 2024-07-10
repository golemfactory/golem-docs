---
title: "Module shared/storage/default"
pageTitle: "Module shared/storage/default - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module shared/storage/default within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: shared/storage/default

## Table of contents

### Functions

- [createDefaultStorageProvider](shared_storage_default#createdefaultstorageprovider)

## Functions

### createDefaultStorageProvider

▸ **createDefaultStorageProvider**(`yagnaApi`, `logger?`): [`GftpStorageProvider`](../classes/shared_storage_gftp.GftpStorageProvider) \| [`NullStorageProvider`](../classes/shared_storage_null.NullStorageProvider) \| [`WebSocketBrowserStorageProvider`](../classes/shared_storage_ws_browser.WebSocketBrowserStorageProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](../classes/shared_yagna_yagnaApi.YagnaApi) |
| `logger?` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |

#### Returns

[`GftpStorageProvider`](../classes/shared_storage_gftp.GftpStorageProvider) \| [`NullStorageProvider`](../classes/shared_storage_null.NullStorageProvider) \| [`WebSocketBrowserStorageProvider`](../classes/shared_storage_ws_browser.WebSocketBrowserStorageProvider)

#### Defined in

[src/shared/storage/default.ts:6](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/storage/default.ts#L6)
