---
title: "Class Job"
pageTitle: "Class Job - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Job within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Job\<Output\>

[experimental/job/job](../modules/experimental_job_job).Job

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

- [constructor](experimental_job_job.Job#constructor)

### Properties

- [events](experimental_job_job.Job#events)
- [results](experimental_job_job.Job#results)
- [error](experimental_job_job.Job#error)
- [state](experimental_job_job.Job#state)
- [id](experimental_job_job.Job#id)

### Methods

- [isRunning](experimental_job_job.Job#isrunning)
- [startWork](experimental_job_job.Job#startwork)
- [cancel](experimental_job_job.Job#cancel)
- [waitForResult](experimental_job_job.Job#waitforresult)

## Constructors

### constructor

• **new Job**\<`Output`\>(`id`, `glm`, `order`, `logger`): [`Job`](experimental_job_job.Job)\<`Output`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `glm` | [`GolemNetwork`](golem_network_golem_network.GolemNetwork) |
| `order` | [`MarketOrderSpec`](../interfaces/golem_network_golem_network.MarketOrderSpec) |
| `logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |

#### Returns

[`Job`](experimental_job_job.Job)\<`Output`\>

#### Defined in

[src/experimental/job/job.ts:76](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L76)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`JobEventsDict`](../interfaces/experimental_job_job.JobEventsDict), `any`\>

#### Defined in

[src/experimental/job/job.ts:63](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L63)

___

### results

• **results**: `undefined` \| `Output`

#### Defined in

[src/experimental/job/job.ts:66](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L66)

___

### error

• **error**: `undefined` \| `Error`

#### Defined in

[src/experimental/job/job.ts:67](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L67)

___

### state

• **state**: [`JobState`](../enums/experimental_job_job.JobState) = `JobState.New`

#### Defined in

[src/experimental/job/job.ts:68](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L68)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[src/experimental/job/job.ts:77](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L77)

## Methods

### isRunning

▸ **isRunning**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/experimental/job/job.ts:83](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L83)

___

### startWork

▸ **startWork**(`workOnGolem`): `void`

Run your worker function on the Golem Network. This method will synchronously initialize all internal services and validate the job options. The work itself will be run asynchronously in the background.
You can use the [experimental/job/job.Job.events](experimental_job_job.Job#events) event emitter to listen for state changes.
You can also use [experimental/job/job.Job.waitForResult](experimental_job_job.Job#waitforresult) to wait for the job to finish and get the results.
If you want to cancel the job, use [experimental/job/job.Job.cancel](experimental_job_job.Job#cancel).
If you want to run multiple jobs in parallel, you can use [experimental/job/job_manager.JobManager.createJob](experimental_job_job_manager.JobManager#createjob) to create multiple jobs and run them in parallel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workOnGolem` | [`WorkFunction`](../modules/experimental_job_job#workfunction)\<`Output`\> | Your worker function that will be run on the Golem Network. |

#### Returns

`void`

#### Defined in

[src/experimental/job/job.ts:98](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L98)

___

### cancel

▸ **cancel**(): `Promise`\<`void`\>

Cancel the job. This method will stop the activity and wait for it to finish.
Throws an error if the job is not running.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/experimental/job/job.ts:161](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L161)

___

### waitForResult

▸ **waitForResult**(): `Promise`\<`unknown`\>

Wait for the job to finish and return the results.
Throws an error if the job was not started.

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/experimental/job/job.ts:175](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L175)
