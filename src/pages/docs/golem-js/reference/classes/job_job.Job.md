---
title: "Class Job"
pageTitle: "Class Job - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Job within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Job\<Output\>

[job/job](../modules/job_job).Job

This API is experimental and subject to change. Use at your own risk.

The Job class represents a single self-contained unit of work that can be run on the Golem Network.
It is responsible for managing the lifecycle of the work and providing information about its state.
It also provides an event emitter that can be used to listen for state changes.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `unknown` |

## Table of contents

### Constructors

- [constructor](job_job.Job#constructor)

### Properties

- [events](job_job.Job#events)
- [results](job_job.Job#results)
- [error](job_job.Job#error)
- [state](job_job.Job#state)
- [id](job_job.Job#id)

### Methods

- [isRunning](job_job.Job#isrunning)
- [startWork](job_job.Job#startwork)
- [cancel](job_job.Job#cancel)
- [waitForResult](job_job.Job#waitforresult)

## Constructors

### constructor

• **new Job**\<`Output`\>(`id`, `yagnaApi`, `defaultOptions?`): [`Job`](job_job.Job)\<`Output`\>

Create a new Job instance. It is recommended to use GolemNetwork to create jobs instead of using this constructor directly.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `yagnaApi` | [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi) |
| `defaultOptions` | `Partial`\<[`RunJobOptions`](../modules/job_job#runjoboptions)\> |

#### Returns

[`Job`](job_job.Job)\<`Output`\>

#### Defined in

[src/job/job.ts:76](https://github.com/golemfactory/golem-js/blob/22da85c/src/job/job.ts#L76)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`JobEventsDict`](../interfaces/job_job.JobEventsDict), `any`\>

#### Defined in

[src/job/job.ts:62](https://github.com/golemfactory/golem-js/blob/22da85c/src/job/job.ts#L62)

___

### results

• **results**: `undefined` \| `Output`

#### Defined in

[src/job/job.ts:65](https://github.com/golemfactory/golem-js/blob/22da85c/src/job/job.ts#L65)

___

### error

• **error**: `undefined` \| `Error`

#### Defined in

[src/job/job.ts:66](https://github.com/golemfactory/golem-js/blob/22da85c/src/job/job.ts#L66)

___

### state

• **state**: [`TaskState`](../enums/task_task.TaskState) = `JobState.New`

#### Defined in

[src/job/job.ts:67](https://github.com/golemfactory/golem-js/blob/22da85c/src/job/job.ts#L67)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[src/job/job.ts:77](https://github.com/golemfactory/golem-js/blob/22da85c/src/job/job.ts#L77)

## Methods

### isRunning

▸ **isRunning**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/job/job.ts:82](https://github.com/golemfactory/golem-js/blob/22da85c/src/job/job.ts#L82)

___

### startWork

▸ **startWork**(`workOnGolem`, `options?`): `void`

Run your worker function on the Golem Network. This method will synchronously initialize all internal services and validate the job options. The work itself will be run asynchronously in the background.
You can use the [Job.events](job_job.Job#events) event emitter to listen for state changes.
You can also use [Job.waitForResult](job_job.Job#waitforresult) to wait for the job to finish and get the results.
If you want to cancel the job, use [Job.cancel](job_job.Job#cancel).
If you want to run multiple jobs in parallel, you can use GolemNetwork.createJob to create multiple jobs and run them in parallel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workOnGolem` | [`Worker`](../modules/task_work#worker)\<`Output`\> | Your worker function that will be run on the Golem Network. |
| `options` | [`RunJobOptions`](../modules/job_job#runjoboptions) | Configuration options for the job. These options will be merged with the options passed to the constructor. |

#### Returns

`void`

#### Defined in

[src/job/job.ts:98](https://github.com/golemfactory/golem-js/blob/22da85c/src/job/job.ts#L98)

___

### cancel

▸ **cancel**(): `Promise`\<`void`\>

Cancel the job. This method will stop the activity and wait for it to finish.
Throws an error if the job is not running.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/job/job.ts:235](https://github.com/golemfactory/golem-js/blob/22da85c/src/job/job.ts#L235)

___

### waitForResult

▸ **waitForResult**(): `Promise`\<`unknown`\>

Wait for the job to finish and return the results.
Throws an error if the job was not started.

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/job/job.ts:249](https://github.com/golemfactory/golem-js/blob/22da85c/src/job/job.ts#L249)
