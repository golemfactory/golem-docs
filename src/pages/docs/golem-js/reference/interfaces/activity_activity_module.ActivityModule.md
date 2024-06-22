---
title: "Interface ActivityModule"
pageTitle: "Interface ActivityModule - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ActivityModule within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ActivityModule

[activity/activity.module](../modules/activity_activity_module).ActivityModule

## Implemented by

- [`ActivityModuleImpl`](../classes/activity_activity_module.ActivityModuleImpl)

## Table of contents

### Properties

- [events](activity_activity_module.ActivityModule#events)

### Methods

- [createActivity](activity_activity_module.ActivityModule#createactivity)
- [destroyActivity](activity_activity_module.ActivityModule#destroyactivity)
- [refreshActivity](activity_activity_module.ActivityModule#refreshactivity)
- [findActivityById](activity_activity_module.ActivityModule#findactivitybyid)
- [createExeUnit](activity_activity_module.ActivityModule#createexeunit)
- [createScriptExecutor](activity_activity_module.ActivityModule#createscriptexecutor)
- [executeScript](activity_activity_module.ActivityModule#executescript)
- [getBatchResults](activity_activity_module.ActivityModule#getbatchresults)
- [observeStreamingBatchEvents](activity_activity_module.ActivityModule#observestreamingbatchevents)

## Properties

### events

• **events**: `EventEmitter`\<[`ActivityEvents`](../modules/activity_api#activityevents), `any`\>

#### Defined in

[src/activity/activity.module.ts:12](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L12)

## Methods

### createActivity

▸ **createActivity**(`agreement`): `Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

Create and start a new activity on the provider for the supplied agreement

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](../classes/market_agreement_agreement.Agreement) |

#### Returns

`Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

The resulting activity on the provider for further use

#### Defined in

[src/activity/activity.module.ts:19](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L19)

___

### destroyActivity

▸ **destroyActivity**(`activity`): `Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

Definitely terminate any work on the provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](../classes/activity_activity.Activity) |

#### Returns

`Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

The activity that was permanently terminated

#### Defined in

[src/activity/activity.module.ts:26](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L26)

___

### refreshActivity

▸ **refreshActivity**(`staleActivity`): `Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

Fetches the latest state of the activity. It's recommended to use this method
before performing any actions on the activity to make sure it's in the correct state.
If the fetched activity's state is different from the one you have, an event will be emitted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `staleActivity` | [`Activity`](../classes/activity_activity.Activity) |

#### Returns

`Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

#### Defined in

[src/activity/activity.module.ts:33](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L33)

___

### findActivityById

▸ **findActivityById**(`activityId`): `Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

Fetches the activity by its ID from yagna. If the activity doesn't exist, an error will be thrown.

#### Parameters

| Name | Type |
| :------ | :------ |
| `activityId` | `string` |

#### Returns

`Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

#### Defined in

[src/activity/activity.module.ts:38](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L38)

___

### createExeUnit

▸ **createExeUnit**(`activity`, `options?`): `Promise`\<[`ExeUnit`](../classes/activity_exe_unit_exe_unit.ExeUnit)\>

Create a exe-unit "within" the activity so that you can perform commands on the rented resources

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](../classes/activity_activity.Activity) |
| `options?` | [`ExeUnitOptions`](activity_exe_unit_exe_unit.ExeUnitOptions) |

#### Returns

`Promise`\<[`ExeUnit`](../classes/activity_exe_unit_exe_unit.ExeUnit)\>

An ExeUnit that's fully commissioned and the user can execute their commands

#### Defined in

[src/activity/activity.module.ts:45](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L45)

___

### createScriptExecutor

▸ **createScriptExecutor**(`activity`, `options?`): [`ExeScriptExecutor`](../classes/activity_exe_script_executor.ExeScriptExecutor)

Factory method for creating a script executor for the activity

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](../classes/activity_activity.Activity) |
| `options?` | [`ExecutionOptions`](activity_exe_script_executor.ExecutionOptions) |

#### Returns

[`ExeScriptExecutor`](../classes/activity_exe_script_executor.ExeScriptExecutor)

#### Defined in

[src/activity/activity.module.ts:50](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L50)

___

### executeScript

▸ **executeScript**(`activity`, `script`): `Promise`\<`string`\>

Execute a script on the activity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](../classes/activity_activity.Activity) |
| `script` | [`ExeScriptRequest`](activity_exe_script_executor.ExeScriptRequest) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/activity/activity.module.ts:55](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L55)

___

### getBatchResults

▸ **getBatchResults**(`activity`, `batchId`, `commandIndex?`, `timeout?`): `Promise`\<[`Result`](../classes/activity_results.Result)\<`any`\>[]\>

Fetch the results of a batch execution.

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

[src/activity/activity.module.ts:60](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L60)

___

### observeStreamingBatchEvents

▸ **observeStreamingBatchEvents**(`activity`, `batchId`, `commandIndex?`): `Observable`\<[`StreamingBatchEvent`](activity_results.StreamingBatchEvent)\>

Create an observable that will emit events from the streaming batch.

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](../classes/activity_activity.Activity) |
| `batchId` | `string` |
| `commandIndex?` | `number` |

#### Returns

`Observable`\<[`StreamingBatchEvent`](activity_results.StreamingBatchEvent)\>

#### Defined in

[src/activity/activity.module.ts:65](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L65)
