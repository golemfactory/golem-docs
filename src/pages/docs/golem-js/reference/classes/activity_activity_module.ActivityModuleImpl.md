---
title: "Class ActivityModuleImpl"
pageTitle: "Class ActivityModuleImpl - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ActivityModuleImpl within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ActivityModuleImpl

[activity/activity.module](../modules/activity_activity_module).ActivityModuleImpl

## Implements

- [`ActivityModule`](../interfaces/activity_activity_module.ActivityModule)

## Table of contents

### Constructors

- [constructor](activity_activity_module.ActivityModuleImpl#constructor)

### Properties

- [events](activity_activity_module.ActivityModuleImpl#events)

### Methods

- [createScriptExecutor](activity_activity_module.ActivityModuleImpl#createscriptexecutor)
- [executeScript](activity_activity_module.ActivityModuleImpl#executescript)
- [getBatchResults](activity_activity_module.ActivityModuleImpl#getbatchresults)
- [observeStreamingBatchEvents](activity_activity_module.ActivityModuleImpl#observestreamingbatchevents)
- [createActivity](activity_activity_module.ActivityModuleImpl#createactivity)
- [destroyActivity](activity_activity_module.ActivityModuleImpl#destroyactivity)
- [refreshActivity](activity_activity_module.ActivityModuleImpl#refreshactivity)
- [findActivityById](activity_activity_module.ActivityModuleImpl#findactivitybyid)
- [createExeUnit](activity_activity_module.ActivityModuleImpl#createexeunit)

## Constructors

### constructor

• **new ActivityModuleImpl**(`services`): [`ActivityModuleImpl`](activity_activity_module.ActivityModuleImpl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `services` | [`GolemServices`](../modules/golem_network_golem_network#golemservices) |

#### Returns

[`ActivityModuleImpl`](activity_activity_module.ActivityModuleImpl)

#### Defined in

[src/activity/activity.module.ts:117](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L117)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`ActivityEvents`](../modules/activity_api#activityevents), `any`\>

#### Implementation of

[ActivityModule](../interfaces/activity_activity_module.ActivityModule).[events](../interfaces/activity_activity_module.ActivityModule#events)

#### Defined in

[src/activity/activity.module.ts:111](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L111)

## Methods

### createScriptExecutor

▸ **createScriptExecutor**(`activity`, `options?`): [`ExeScriptExecutor`](activity_exe_script_executor.ExeScriptExecutor)

Factory method for creating a script executor for the activity

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `options?` | [`ExecutionOptions`](../interfaces/activity_exe_script_executor.ExecutionOptions) |

#### Returns

[`ExeScriptExecutor`](activity_exe_script_executor.ExeScriptExecutor)

#### Implementation of

[ActivityModule](../interfaces/activity_activity_module.ActivityModule).[createScriptExecutor](../interfaces/activity_activity_module.ActivityModule#createscriptexecutor)

#### Defined in

[src/activity/activity.module.ts:121](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L121)

___

### executeScript

▸ **executeScript**(`activity`, `script`): `Promise`\<`string`\>

Execute a script on the activity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `script` | [`ExeScriptRequest`](../interfaces/activity_exe_script_executor.ExeScriptRequest) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[ActivityModule](../interfaces/activity_activity_module.ActivityModule).[executeScript](../interfaces/activity_activity_module.ActivityModule#executescript)

#### Defined in

[src/activity/activity.module.ts:125](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L125)

___

### getBatchResults

▸ **getBatchResults**(`activity`, `batchId`, `commandIndex?`, `timeout?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>[]\>

Fetch the results of a batch execution.

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

[ActivityModule](../interfaces/activity_activity_module.ActivityModule).[getBatchResults](../interfaces/activity_activity_module.ActivityModule#getbatchresults)

#### Defined in

[src/activity/activity.module.ts:153](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L153)

___

### observeStreamingBatchEvents

▸ **observeStreamingBatchEvents**(`activity`, `batchId`, `commandIndex?`): `Observable`\<[`StreamingBatchEvent`](../interfaces/activity_results.StreamingBatchEvent)\>

Create an observable that will emit events from the streaming batch.

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `batchId` | `string` |
| `commandIndex?` | `number` |

#### Returns

`Observable`\<[`StreamingBatchEvent`](../interfaces/activity_results.StreamingBatchEvent)\>

#### Implementation of

[ActivityModule](../interfaces/activity_activity_module.ActivityModule).[observeStreamingBatchEvents](../interfaces/activity_activity_module.ActivityModule#observestreamingbatchevents)

#### Defined in

[src/activity/activity.module.ts:185](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L185)

___

### createActivity

▸ **createActivity**(`agreement`): `Promise`\<[`Activity`](activity_activity.Activity)\>

Create and start a new activity on the provider for the supplied agreement

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement` | [`Agreement`](market_agreement_agreement.Agreement) |

#### Returns

`Promise`\<[`Activity`](activity_activity.Activity)\>

The resulting activity on the provider for further use

#### Implementation of

[ActivityModule](../interfaces/activity_activity_module.ActivityModule).[createActivity](../interfaces/activity_activity_module.ActivityModule#createactivity)

#### Defined in

[src/activity/activity.module.ts:218](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L218)

___

### destroyActivity

▸ **destroyActivity**(`activity`): `Promise`\<[`Activity`](activity_activity.Activity)\>

Definitely terminate any work on the provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |

#### Returns

`Promise`\<[`Activity`](activity_activity.Activity)\>

The activity that was permanently terminated

#### Implementation of

[ActivityModule](../interfaces/activity_activity_module.ActivityModule).[destroyActivity](../interfaces/activity_activity_module.ActivityModule#destroyactivity)

#### Defined in

[src/activity/activity.module.ts:233](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L233)

___

### refreshActivity

▸ **refreshActivity**(`staleActivity`): `Promise`\<[`Activity`](activity_activity.Activity)\>

Fetches the latest state of the activity. It's recommended to use this method
before performing any actions on the activity to make sure it's in the correct state.
If the fetched activity's state is different from the one you have, an event will be emitted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `staleActivity` | [`Activity`](activity_activity.Activity) |

#### Returns

`Promise`\<[`Activity`](activity_activity.Activity)\>

#### Implementation of

[ActivityModule](../interfaces/activity_activity_module.ActivityModule).[refreshActivity](../interfaces/activity_activity_module.ActivityModule#refreshactivity)

#### Defined in

[src/activity/activity.module.ts:249](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L249)

___

### findActivityById

▸ **findActivityById**(`activityId`): `Promise`\<[`Activity`](activity_activity.Activity)\>

Fetches the activity by its ID from yagna. If the activity doesn't exist, an error will be thrown.

#### Parameters

| Name | Type |
| :------ | :------ |
| `activityId` | `string` |

#### Returns

`Promise`\<[`Activity`](activity_activity.Activity)\>

#### Implementation of

[ActivityModule](../interfaces/activity_activity_module.ActivityModule).[findActivityById](../interfaces/activity_activity_module.ActivityModule#findactivitybyid)

#### Defined in

[src/activity/activity.module.ts:272](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L272)

___

### createExeUnit

▸ **createExeUnit**(`activity`, `options?`): `Promise`\<[`ExeUnit`](activity_exe_unit_exe_unit.ExeUnit)\>

Create a exe-unit "within" the activity so that you can perform commands on the rented resources

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `options?` | [`ExeUnitOptions`](../interfaces/activity_exe_unit_exe_unit.ExeUnitOptions) |

#### Returns

`Promise`\<[`ExeUnit`](activity_exe_unit_exe_unit.ExeUnit)\>

An ExeUnit that's fully commissioned and the user can execute their commands

#### Implementation of

[ActivityModule](../interfaces/activity_activity_module.ActivityModule).[createExeUnit](../interfaces/activity_activity_module.ActivityModule#createexeunit)

#### Defined in

[src/activity/activity.module.ts:277](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.module.ts#L277)
