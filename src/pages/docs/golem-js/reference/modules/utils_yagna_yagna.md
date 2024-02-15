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

### Variables

- [MIN\_SUPPORTED\_YAGNA](utils_yagna_yagna#min_supported_yagna)

## Type Aliases

### YagnaApi

Ƭ **YagnaApi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `market` | `MarketRequestorApi` |
| `activity` | \{ `control`: `RequestorControlApi` ; `state`: [`RequestorApi`](../classes/utils_yagna_activity.RequestorApi)  } |
| `activity.control` | `RequestorControlApi` |
| `activity.state` | [`RequestorApi`](../classes/utils_yagna_activity.RequestorApi) |
| `net` | `NetworkRequestorApi` |
| `payment` | `PaymentRequestorApi` |
| `identity` | [`RequestorApi`](../classes/utils_yagna_identity.RequestorApi) |
| `gsb` | [`RequestorApi`](../classes/utils_yagna_gsb.RequestorApi) |
| `yagnaOptions` | [`YagnaOptions`](utils_yagna_yagna#yagnaoptions) |
| `appSessionId` | `string` |

#### Defined in

[src/utils/yagna/yagna.ts:16](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L16)

___

### YagnaOptions

Ƭ **YagnaOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey?` | `string` |
| `basePath?` | `string` |
| `abortController?` | `AbortController` |

#### Defined in

[src/utils/yagna/yagna.ts:27](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L27)

## Variables

### MIN\_SUPPORTED\_YAGNA

• `Const` **MIN\_SUPPORTED\_YAGNA**: ``"0.13.2"``

#### Defined in

[src/utils/yagna/yagna.ts:52](https://github.com/golemfactory/golem-js/blob/22da85c/src/utils/yagna/yagna.ts#L52)
