---
title: "Module utils/yagna/yagna"
pageTitle: "Module utils/yagna/yagna - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module utils/yagna/yagna within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: utils/yagna/yagna

## Table of contents

### Classes

- [Yagna](../classes/utils_yagna_yagna.Yagna)

### Type Aliases

- [YagnaApi](utils_yagna_yagna#yagnaapi)
- [YagnaOptions](utils_yagna_yagna#yagnaoptions)

## Type Aliases

### YagnaApi

Ƭ **YagnaApi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `market` | `MarketRequestorApi` |
| `activity` | \{ `control`: `RequestorControlApi` ; `state`: `RequestorStateApi`  } |
| `activity.control` | `RequestorControlApi` |
| `activity.state` | `RequestorStateApi` |
| `net` | `NetworkRequestorApi` |
| `payment` | `PaymentRequestorApi` |
| `identity` | [`RequestorApi`](../classes/utils_yagna_identity.RequestorApi) |
| `gsb` | [`RequestorApi`](../classes/utils_yagna_gsb.RequestorApi) |
| `yagnaOptions` | [`YagnaOptions`](utils_yagna_yagna#yagnaoptions) |
| `appSessionId` | `string` |

#### Defined in

[src/utils/yagna/yagna.ts:13](https://github.com/golemfactory/golem-js/blob/a42794e/src/utils/yagna/yagna.ts#L13)

___

### YagnaOptions

Ƭ **YagnaOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey?` | `string` |
| `basePath?` | `string` |

#### Defined in

[src/utils/yagna/yagna.ts:24](https://github.com/golemfactory/golem-js/blob/a42794e/src/utils/yagna/yagna.ts#L24)
