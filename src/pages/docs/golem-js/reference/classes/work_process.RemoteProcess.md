---
title: "Class RemoteProcess"
pageTitle: "Class RemoteProcess - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class RemoteProcess within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: RemoteProcess

[work/process](../modules/work_process).RemoteProcess

RemoteProcess class representing the process spawned on the provider by WorkContext.runAndStream

## Table of contents

### Constructors

- [constructor](work_process.RemoteProcess#constructor)

### Properties

- [stdout](work_process.RemoteProcess#stdout)
- [stderr](work_process.RemoteProcess#stderr)

### Methods

- [waitForExit](work_process.RemoteProcess#waitforexit)

## Constructors

### constructor

• **new RemoteProcess**(`streamOfActivityResults`, `activity`): [`RemoteProcess`](work_process.RemoteProcess)

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamOfActivityResults` | `Readable` |
| `activity` | [`Activity`](activity_activity.Activity) |

#### Returns

[`RemoteProcess`](work_process.RemoteProcess)

#### Defined in

[src/work/process.ts:27](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/process.ts#L27)

## Properties

### stdout

• `Readonly` **stdout**: `Readable`

Stream connected to stdout from provider process

#### Defined in

[src/work/process.ts:17](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/process.ts#L17)

___

### stderr

• `Readonly` **stderr**: `Readable`

Stream connected to stderr from provider process

#### Defined in

[src/work/process.ts:21](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/process.ts#L21)

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

[src/work/process.ts:43](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/process.ts#L43)
