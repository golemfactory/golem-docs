---
title: "Class JobManager"
pageTitle: "Class JobManager - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class JobManager within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: JobManager

[experimental/job/job\_manager](../modules/experimental_job_job_manager).JobManager

This API is experimental and subject to change. Use at your own risk.

The Golem Network class provides a high-level API for running jobs on the Golem Network.

## Table of contents

### Constructors

- [constructor](experimental_job_job_manager.JobManager#constructor)

### Methods

- [isInitialized](experimental_job_job_manager.JobManager#isinitialized)
- [init](experimental_job_job_manager.JobManager#init)
- [createJob](experimental_job_job_manager.JobManager#createjob)
- [getJobById](experimental_job_job_manager.JobManager#getjobbyid)
- [close](experimental_job_job_manager.JobManager#close)

## Constructors

### constructor

• **new JobManager**(`config?`, `logger?`): [`JobManager`](experimental_job_job_manager.JobManager)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`JobManagerConfig`](../modules/experimental_job_job_manager#jobmanagerconfig) | Configuration options that will be passed to all jobs created by this instance. |
| `logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |  |

#### Returns

[`JobManager`](experimental_job_job_manager.JobManager)

#### Defined in

[src/experimental/job/job_manager.ts:30](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/job/job_manager.ts#L30)

## Methods

### isInitialized

▸ **isInitialized**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/experimental/job/job_manager.ts:47](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/job/job_manager.ts#L47)

___

### init

▸ **init**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/experimental/job/job_manager.ts:51](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/job/job_manager.ts#L51)

___

### createJob

▸ **createJob**\<`Output`\>(`order`): [`Job`](experimental_job_job.Job)\<`Output`\>

Create a new job and add it to the list of jobs managed by this instance.
This method does not start any work on the network, use [experimental/job/job.Job.startWork](experimental_job_job.Job#startwork) for that.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `order` | [`MarketOrderSpec`](../interfaces/golem_network_golem_network.MarketOrderSpec) |

#### Returns

[`Job`](experimental_job_job.Job)\<`Output`\>

#### Defined in

[src/experimental/job/job_manager.ts:61](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/job/job_manager.ts#L61)

___

### getJobById

▸ **getJobById**(`id`): `undefined` \| [`Job`](experimental_job_job.Job)\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Job`](experimental_job_job.Job)\<`unknown`\>

#### Defined in

[src/experimental/job/job_manager.ts:71](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/job/job_manager.ts#L71)

___

### close

▸ **close**(): `Promise`\<`void`\>

Close the connection to the Yagna service and cancel all running jobs.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/experimental/job/job_manager.ts:80](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/job/job_manager.ts#L80)
