---
title: "Class ExeScriptExecutor"
pageTitle: "Class ExeScriptExecutor - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ExeScriptExecutor within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ExeScriptExecutor

[activity/exe-script-executor](../modules/activity_exe_script_executor).ExeScriptExecutor

## Table of contents

### Constructors

- [constructor](activity_exe_script_executor.ExeScriptExecutor#constructor)

### Properties

- [activity](activity_exe_script_executor.ExeScriptExecutor#activity)

### Methods

- [execute](activity_exe_script_executor.ExeScriptExecutor#execute)
- [getResultsObservable](activity_exe_script_executor.ExeScriptExecutor#getresultsobservable)
- [send](activity_exe_script_executor.ExeScriptExecutor#send)

## Constructors

### constructor

• **new ExeScriptExecutor**(`activity`, `activityModule`, `logger`, `options?`): [`ExeScriptExecutor`](activity_exe_script_executor.ExeScriptExecutor)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `activityModule` | [`ActivityModule`](../interfaces/activity_activity_module.ActivityModule) |
| `logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |
| `options?` | [`ExecutionOptions`](../interfaces/activity_exe_script_executor.ExecutionOptions) |

#### Returns

[`ExeScriptExecutor`](activity_exe_script_executor.ExeScriptExecutor)

#### Defined in

[src/activity/exe-script-executor.ts:46](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-script-executor.ts#L46)

## Properties

### activity

• `Readonly` **activity**: [`Activity`](activity_activity.Activity)

#### Defined in

[src/activity/exe-script-executor.ts:47](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-script-executor.ts#L47)

## Methods

### execute

▸ **execute**(`script`): `Promise`\<[`ScriptExecutionMetadata`](../interfaces/activity_exe_script_executor.ScriptExecutionMetadata)\>

Executes the provided script and returns the batch id and batch size that can be used
to fetch it's results

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`ExeScriptRequest`](../interfaces/activity_exe_script_executor.ExeScriptRequest) |

#### Returns

`Promise`\<[`ScriptExecutionMetadata`](../interfaces/activity_exe_script_executor.ScriptExecutionMetadata)\>

script execution metadata - batch id and batch size that can be used to fetch results using `getResultsObservable`

#### Defined in

[src/activity/exe-script-executor.ts:62](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-script-executor.ts#L62)

___

### getResultsObservable

▸ **getResultsObservable**(`batch`, `stream?`, `signalOrTimeout?`, `maxRetries?`): `Observable`\<[`Result`](activity_results.Result)\<`any`\>\>

Given a batch id and batch size collect the results from yagna. You can choose to either
stream them as they go or poll for them. When a timeout is reached (by either the timeout provided
as an argument here or in the constructor) the observable will emit an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `batch` | [`ScriptExecutionMetadata`](../interfaces/activity_exe_script_executor.ScriptExecutionMetadata) | batch id and batch size |
| `stream?` | `boolean` | define type of getting results from execution (polling or streaming) |
| `signalOrTimeout?` | `number` \| `AbortSignal` | the timeout in milliseconds or an AbortSignal that will be used to cancel the execution |
| `maxRetries?` | `number` | maximum number of retries retrieving results when an error occurs, default: 10 |

#### Returns

`Observable`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/activity/exe-script-executor.ts:102](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-script-executor.ts#L102)

___

### send

▸ **send**(`script`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`ExeScriptRequest`](../interfaces/activity_exe_script_executor.ExeScriptRequest) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/activity/exe-script-executor.ts:130](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-script-executor.ts#L130)
