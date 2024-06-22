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

[src/activity/exe-script-executor.ts:33](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-script-executor.ts#L33)

## Properties

### activity

• `Readonly` **activity**: [`Activity`](activity_activity.Activity)

#### Defined in

[src/activity/exe-script-executor.ts:34](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-script-executor.ts#L34)

## Methods

### execute

▸ **execute**(`script`, `stream?`, `signalOrTimeout?`, `maxRetries?`): `Promise`\<`Readable`\>

Execute script

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `script` | [`ExeScriptRequest`](../interfaces/activity_exe_script_executor.ExeScriptRequest) | exe script request |
| `stream?` | `boolean` | define type of getting results from execution (polling or streaming) |
| `signalOrTimeout?` | `number` \| `AbortSignal` | the timeout in milliseconds or an AbortSignal that will be used to cancel the execution |
| `maxRetries?` | `number` | maximum number of retries retrieving results when an error occurs, default: 10 |

#### Returns

`Promise`\<`Readable`\>

#### Defined in

[src/activity/exe-script-executor.ts:51](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-script-executor.ts#L51)

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

[src/activity/exe-script-executor.ts:98](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-script-executor.ts#L98)
