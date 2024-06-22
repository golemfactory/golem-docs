---
title: "Interface IActivityApi"
pageTitle: "Interface IActivityApi - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface IActivityApi within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: IActivityApi

[activity/api](../modules/activity_api).IActivityApi

Represents a set of use cases related to managing the lifetime of an activity

## Implemented by

- [`ActivityApiAdapter`](../classes/shared_yagna_adapters_activity_api_adapter.ActivityApiAdapter)

## Table of contents

### Methods

- [getActivity](activity_api.IActivityApi#getactivity)
- [createActivity](activity_api.IActivityApi#createactivity)
- [destroyActivity](activity_api.IActivityApi#destroyactivity)
- [getActivityState](activity_api.IActivityApi#getactivitystate)
- [executeScript](activity_api.IActivityApi#executescript)
- [getExecBatchResults](activity_api.IActivityApi#getexecbatchresults)
- [getExecBatchEvents](activity_api.IActivityApi#getexecbatchevents)

## Methods

### getActivity

▸ **getActivity**(`id`): `Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

#### Defined in

[src/activity/api.ts:35](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/api.ts#L35)

___

### createActivity

▸ **createActivity**(`agreement`): `Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |

#### Returns

`Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

#### Defined in

[src/activity/api.ts:37](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/api.ts#L37)

___

### destroyActivity

▸ **destroyActivity**(`activity`): `Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](../classes/activity_activity.Activity) |

#### Returns

`Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

#### Defined in

[src/activity/api.ts:39](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/api.ts#L39)

___

### getActivityState

▸ **getActivityState**(`id`): `Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Defined in

[src/activity/api.ts:41](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/api.ts#L41)

___

### executeScript

▸ **executeScript**(`activity`, `script`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](../classes/activity_activity.Activity) |
| `script` | [`ExeScriptRequest`](activity_exe_script_executor.ExeScriptRequest) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/activity/api.ts:43](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/api.ts#L43)

___

### getExecBatchResults

▸ **getExecBatchResults**(`activity`, `batchId`, `commandIndex?`, `timeout?`): `Promise`\<[`Result`](../classes/activity_results.Result)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](../classes/activity_activity.Activity) |
| `batchId` | `string` |
| `commandIndex?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`\<[`Result`](../classes/activity_results.Result)\<`any`\>[]\>

#### Defined in

[src/activity/api.ts:45](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/api.ts#L45)

___

### getExecBatchEvents

▸ **getExecBatchEvents**(`activity`, `batchId`, `commandIndex?`): `Observable`\<[`StreamingBatchEvent`](activity_results.StreamingBatchEvent)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](../classes/activity_activity.Activity) |
| `batchId` | `string` |
| `commandIndex?` | `number` |

#### Returns

`Observable`\<[`StreamingBatchEvent`](activity_results.StreamingBatchEvent)\>

#### Defined in

[src/activity/api.ts:47](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/api.ts#L47)
