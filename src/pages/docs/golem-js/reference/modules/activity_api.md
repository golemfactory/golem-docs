---
title: "Module activity/api"
pageTitle: "Module activity/api - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module activity/api within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: activity/api

## Table of contents

### Interfaces

- [IActivityApi](../interfaces/activity_api.IActivityApi)

### Type Aliases

- [ActivityEvents](activity_api#activityevents)

## Type Aliases

### ActivityEvents

Ƭ **ActivityEvents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `activityCreated` | (`activity`: [`Activity`](../classes/activity_activity.Activity)) => `void` |
| `errorCreatingActivity` | (`error`: `Error`) => `void` |
| `activityDestroyed` | (`activity`: [`Activity`](../classes/activity_activity.Activity)) => `void` |
| `errorDestroyingActivity` | (`activity`: [`Activity`](../classes/activity_activity.Activity), `error`: `Error`) => `void` |
| `exeUnitInitialized` | (`activity`: [`Activity`](../classes/activity_activity.Activity)) => `void` |
| `errorInitializingExeUnit` | (`activity`: [`Activity`](../classes/activity_activity.Activity), `error`: `Error`) => `void` |
| `activityStateChanged` | (`activity`: [`Activity`](../classes/activity_activity.Activity), `previousState`: [`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)) => `void` |
| `errorRefreshingActivity` | (`activity`: [`Activity`](../classes/activity_activity.Activity), `error`: `Error`) => `void` |
| `scriptSent` | (`activity`: [`Activity`](../classes/activity_activity.Activity), `script`: [`ExeScriptRequest`](../interfaces/activity_exe_script_executor.ExeScriptRequest)) => `void` |
| `scriptExecuted` | (`activity`: [`Activity`](../classes/activity_activity.Activity), `script`: [`ExeScriptRequest`](../interfaces/activity_exe_script_executor.ExeScriptRequest), `result`: `string`) => `void` |
| `errorExecutingScript` | (`activity`: [`Activity`](../classes/activity_activity.Activity), `script`: [`ExeScriptRequest`](../interfaces/activity_exe_script_executor.ExeScriptRequest), `error`: `Error`) => `void` |
| `batchResultsReceived` | (`activity`: [`Activity`](../classes/activity_activity.Activity), `batchId`: `string`, `results`: [`Result`](../classes/activity_results.Result)[]) => `void` |
| `errorGettingBatchResults` | (`activity`: [`Activity`](../classes/activity_activity.Activity), `batchId`: `string`, `error`: `Error`) => `void` |
| `batchEventsReceived` | (`activity`: [`Activity`](../classes/activity_activity.Activity), `batchId`: `string`, `event`: [`StreamingBatchEvent`](../interfaces/activity_results.StreamingBatchEvent)) => `void` |
| `errorGettingBatchEvents` | (`activity`: [`Activity`](../classes/activity_activity.Activity), `batchId`: `string`, `error`: `Error`) => `void` |

#### Defined in

[src/activity/api.ts:7](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/api.ts#L7)
