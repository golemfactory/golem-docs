# Module: utils/yagna/yagna

## Table of contents

### Classes

- [Yagna](../classes/utils_yagna_yagna.Yagna.md)

### Type Aliases

- [YagnaApi](utils_yagna_yagna.md#yagnaapi)
- [YagnaOptions](utils_yagna_yagna.md#yagnaoptions)

## Type Aliases

### YagnaApi

Ƭ **YagnaApi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `market` | `MarketRequestorApi` |
| `activity` | { `control`: `RequestorControlApi` ; `state`: `RequestorStateApi`  } |
| `activity.control` | `RequestorControlApi` |
| `activity.state` | `RequestorStateApi` |
| `net` | `NetworkRequestorApi` |
| `payment` | `PaymentRequestorApi` |
| `identity` | [`RequestorApi`](../classes/utils_yagna_identity.RequestorApi.md) |
| `gsb` | [`RequestorApi`](../classes/utils_yagna_gsb.RequestorApi.md) |
| `yagnaOptions` | [`YagnaOptions`](utils_yagna_yagna.md#yagnaoptions) |

#### Defined in

[src/utils/yagna/yagna.ts:12](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/utils/yagna/yagna.ts#L12)

___

### YagnaOptions

Ƭ **YagnaOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey?` | `string` |
| `basePath?` | `string` |

#### Defined in

[src/utils/yagna/yagna.ts:22](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/utils/yagna/yagna.ts#L22)
