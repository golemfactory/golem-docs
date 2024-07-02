---
title: "Class RemoteProcess"
pageTitle: "Class RemoteProcess - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class RemoteProcess within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: RemoteProcess

[activity/exe-unit/process](../modules/activity_exe_unit_process).RemoteProcess

RemoteProcess class representing the process spawned on the provider by activity/exe-unit/exeunit.ExeUnit.runAndStream

## Table of contents

### Constructors

- [constructor](activity_exe_unit_process.RemoteProcess#constructor)

### Properties

- [stdout](activity_exe_unit_process.RemoteProcess#stdout)
- [stderr](activity_exe_unit_process.RemoteProcess#stderr)

### Methods

- [waitForExit](activity_exe_unit_process.RemoteProcess#waitforexit)

## Constructors

### constructor

• **new RemoteProcess**(`activityModule`, `activityResult$`, `activity`, `logger`): [`RemoteProcess`](activity_exe_unit_process.RemoteProcess)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activityModule` | [`ActivityModule`](../interfaces/activity_activity_module.ActivityModule) |
| `activityResult$` | `Observable`\<[`Result`](activity_results.Result)\<`any`\>\> |
| `activity` | [`Activity`](activity_activity.Activity) |
| `logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |

#### Returns

[`RemoteProcess`](activity_exe_unit_process.RemoteProcess)

#### Defined in

[src/activity/exe-unit/process.ts:30](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/process.ts#L30)

## Properties

### stdout

• `Readonly` **stdout**: `Subject`\<`undefined` \| ``null`` \| `string` \| `ArrayBuffer`\>

Stream connected to stdout from provider process

#### Defined in

[src/activity/exe-unit/process.ts:18](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/process.ts#L18)

___

### stderr

• `Readonly` **stderr**: `Subject`\<`undefined` \| ``null`` \| `string` \| `ArrayBuffer`\>

Stream connected to stderr from provider process

#### Defined in

[src/activity/exe-unit/process.ts:22](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/process.ts#L22)

## Methods

### waitForExit

▸ **waitForExit**(`timeout?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

Waits for the process to complete and returns the last part of the command's results as a [Result](activity_results.Result) object.
If the timeout is reached, the return promise will be rejected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout?` | `number` | maximum waiting time im ms for the final result (default: 20_000) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/activity/exe-unit/process.ts:58](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/process.ts#L58)
