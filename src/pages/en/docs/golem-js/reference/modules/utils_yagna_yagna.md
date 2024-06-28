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

[src/utils/yagna/yagna.ts:17](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L17)

___

### YagnaOptions

Ƭ **YagnaOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey?` | `string` |
| `basePath?` | `string` |
| `abortController?` | `AbortController` |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Defined in

[src/utils/yagna/yagna.ts:28](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L28)

## Variables

### MIN\_SUPPORTED\_YAGNA

• `Const` **MIN\_SUPPORTED\_YAGNA**: ``"0.13.2"``

#### Defined in

[src/utils/yagna/yagna.ts:54](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/yagna.ts#L54)
