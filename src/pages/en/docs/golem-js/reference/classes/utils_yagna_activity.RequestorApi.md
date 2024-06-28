---
title: "Class RequestorApi"
pageTitle: "Class RequestorApi - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class RequestorApi within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: RequestorApi

[utils/yagna/activity](../modules/utils_yagna_activity).RequestorApi

## Hierarchy

- `RequestorStateApi`

  ↳ **`RequestorApi`**

## Table of contents

### Constructors

- [constructor](utils_yagna_activity.RequestorApi#constructor)

### Methods

- [getActivityAgreementId](utils_yagna_activity.RequestorApi#getactivityagreementid)

## Constructors

### constructor

• **new RequestorApi**(`configuration?`, `basePath?`, `axios?`): [`RequestorApi`](utils_yagna_activity.RequestorApi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

[`RequestorApi`](utils_yagna_activity.RequestorApi)

#### Inherited from

RequestorStateApi.constructor

#### Defined in

node_modules/ya-ts-client/dist/ya-activity/base.d.ts:43

## Methods

### getActivityAgreementId

▸ **getActivityAgreementId**(`activityId`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `activityId` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/utils/yagna/activity.ts:6](https://github.com/golemfactory/golem-js/blob/4182943/src/utils/yagna/activity.ts#L6)
