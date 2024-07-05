---
title: "Class ActivityApiAdapter"
pageTitle: "Class ActivityApiAdapter - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ActivityApiAdapter within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ActivityApiAdapter

[shared/yagna/adapters/activity-api-adapter](../modules/shared_yagna_adapters_activity_api_adapter).ActivityApiAdapter

Represents a set of use cases related to managing the lifetime of an activity

## Implements

- [`IActivityApi`](../interfaces/activity_api.IActivityApi)

## Table of contents

### Constructors

- [constructor](shared_yagna_adapters_activity_api_adapter.ActivityApiAdapter#constructor)

### Methods

- [getActivity](shared_yagna_adapters_activity_api_adapter.ActivityApiAdapter#getactivity)
- [createActivity](shared_yagna_adapters_activity_api_adapter.ActivityApiAdapter#createactivity)
- [destroyActivity](shared_yagna_adapters_activity_api_adapter.ActivityApiAdapter#destroyactivity)
- [getActivityState](shared_yagna_adapters_activity_api_adapter.ActivityApiAdapter#getactivitystate)
- [executeScript](shared_yagna_adapters_activity_api_adapter.ActivityApiAdapter#executescript)
- [getExecBatchResults](shared_yagna_adapters_activity_api_adapter.ActivityApiAdapter#getexecbatchresults)
- [getExecBatchEvents](shared_yagna_adapters_activity_api_adapter.ActivityApiAdapter#getexecbatchevents)

## Constructors

### constructor

• **new ActivityApiAdapter**(`state`, `control`, `exec`, `activityRepo`): [`ActivityApiAdapter`](shared_yagna_adapters_activity_api_adapter.ActivityApiAdapter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `RequestorStateService` |
| `control` | `RequestorControlService` |
| `exec` | [`YagnaExeScriptObserver`](../interfaces/shared_yagna_yagnaApi.YagnaExeScriptObserver) |
| `activityRepo` | [`IActivityRepository`](../interfaces/activity_activity.IActivityRepository) |

#### Returns

[`ActivityApiAdapter`](shared_yagna_adapters_activity_api_adapter.ActivityApiAdapter)

#### Defined in

[src/shared/yagna/adapters/activity-api-adapter.ts:12](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/adapters/activity-api-adapter.ts#L12)

## Methods

### getActivity

▸ **getActivity**(`id`): `Promise`\<[`Activity`](activity_activity.Activity)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Activity`](activity_activity.Activity)\>

#### Implementation of

[IActivityApi](../interfaces/activity_api.IActivityApi).[getActivity](../interfaces/activity_api.IActivityApi#getactivity)

#### Defined in

[src/shared/yagna/adapters/activity-api-adapter.ts:19](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/adapters/activity-api-adapter.ts#L19)

___

### createActivity

▸ **createActivity**(`agreement`): `Promise`\<[`Activity`](activity_activity.Activity)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](market_agreement_agreement.Agreement) |

#### Returns

`Promise`\<[`Activity`](activity_activity.Activity)\>

#### Implementation of

[IActivityApi](../interfaces/activity_api.IActivityApi).[createActivity](../interfaces/activity_api.IActivityApi#createactivity)

#### Defined in

[src/shared/yagna/adapters/activity-api-adapter.ts:23](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/adapters/activity-api-adapter.ts#L23)

___

### destroyActivity

▸ **destroyActivity**(`activity`): `Promise`\<[`Activity`](activity_activity.Activity)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |

#### Returns

`Promise`\<[`Activity`](activity_activity.Activity)\>

#### Implementation of

[IActivityApi](../interfaces/activity_api.IActivityApi).[destroyActivity](../interfaces/activity_api.IActivityApi#destroyactivity)

#### Defined in

[src/shared/yagna/adapters/activity-api-adapter.ts:47](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/adapters/activity-api-adapter.ts#L47)

___

### getActivityState

▸ **getActivityState**(`id`): `Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Implementation of

[IActivityApi](../interfaces/activity_api.IActivityApi).[getActivityState](../interfaces/activity_api.IActivityApi#getactivitystate)

#### Defined in

[src/shared/yagna/adapters/activity-api-adapter.ts:63](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/adapters/activity-api-adapter.ts#L63)

___

### executeScript

▸ **executeScript**(`activity`, `script`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `script` | [`ExeScriptRequest`](../interfaces/activity_exe_script_executor.ExeScriptRequest) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[IActivityApi](../interfaces/activity_api.IActivityApi).[executeScript](../interfaces/activity_api.IActivityApi#executescript)

#### Defined in

[src/shared/yagna/adapters/activity-api-adapter.ts:67](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/adapters/activity-api-adapter.ts#L67)

___

### getExecBatchResults

▸ **getExecBatchResults**(`activity`, `batchId`, `commandIndex?`, `timeout?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `batchId` | `string` |
| `commandIndex?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>[]\>

#### Implementation of

[IActivityApi](../interfaces/activity_api.IActivityApi).[getExecBatchResults](../interfaces/activity_api.IActivityApi#getexecbatchresults)

#### Defined in

[src/shared/yagna/adapters/activity-api-adapter.ts:82](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/adapters/activity-api-adapter.ts#L82)

___

### getExecBatchEvents

▸ **getExecBatchEvents**(`activity`, `batchId`): `Observable`\<[`StreamingBatchEvent`](../interfaces/activity_results.StreamingBatchEvent)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `batchId` | `string` |

#### Returns

`Observable`\<[`StreamingBatchEvent`](../interfaces/activity_results.StreamingBatchEvent)\>

#### Implementation of

[IActivityApi](../interfaces/activity_api.IActivityApi).[getExecBatchEvents](../interfaces/activity_api.IActivityApi#getexecbatchevents)

#### Defined in

[src/shared/yagna/adapters/activity-api-adapter.ts:104](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/adapters/activity-api-adapter.ts#L104)
