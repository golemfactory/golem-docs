---
title: "Class RemoteProcess"
pageTitle: "Class RemoteProcess - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class RemoteProcess within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: RemoteProcess

[task/process](../modules/task_process).RemoteProcess

RemoteProcess class representing the process spawned on the provider by WorkContext.spawn

## Table of contents

### Constructors

- [constructor](task_process.RemoteProcess#constructor)

### Properties

- [stdout](task_process.RemoteProcess#stdout)
- [stderr](task_process.RemoteProcess#stderr)

### Methods

- [waitForExit](task_process.RemoteProcess#waitforexit)

## Constructors

### constructor

• **new RemoteProcess**(`streamOfActivityResults`): [`RemoteProcess`](task_process.RemoteProcess)

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamOfActivityResults` | `Readable` |

#### Returns

[`RemoteProcess`](task_process.RemoteProcess)

#### Defined in

[src/task/process.ts:22](https://github.com/golemfactory/golem-js/blob/9137662/src/task/process.ts#L22)

## Properties

### stdout

• `Readonly` **stdout**: `Readable`

Stream connected to stdout from provider process

#### Defined in

[src/task/process.ts:15](https://github.com/golemfactory/golem-js/blob/9137662/src/task/process.ts#L15)

___

### stderr

• `Readonly` **stderr**: `Readable`

Stream connected to stderr from provider process

#### Defined in

[src/task/process.ts:19](https://github.com/golemfactory/golem-js/blob/9137662/src/task/process.ts#L19)

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

[src/task/process.ts:35](https://github.com/golemfactory/golem-js/blob/9137662/src/task/process.ts#L35)
