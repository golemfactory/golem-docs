---
title: "Class TaskExecutor"
pageTitle: "Class TaskExecutor - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class TaskExecutor within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: TaskExecutor

[executor/executor](../modules/executor_executor).TaskExecutor

A high-level module for defining and executing tasks in the golem network

## Table of contents

### Constructors

- [constructor](executor_executor.TaskExecutor#constructor)

### Properties

- [events](executor_executor.TaskExecutor#events)

### Methods

- [create](executor_executor.TaskExecutor#create)
- [init](executor_executor.TaskExecutor#init)
- [end](executor_executor.TaskExecutor#end)
- [shutdown](executor_executor.TaskExecutor#shutdown)
- [getStats](executor_executor.TaskExecutor#getstats)
- [beforeEach](executor_executor.TaskExecutor#beforeeach)
- [onActivityReady](executor_executor.TaskExecutor#onactivityready)
- [run](executor_executor.TaskExecutor#run)
- [createJob](executor_executor.TaskExecutor#createjob)
- [getJobById](executor_executor.TaskExecutor#getjobbyid)
- [cancel](executor_executor.TaskExecutor#cancel)

## Constructors

### constructor

• **new TaskExecutor**(`options`): [`TaskExecutor`](executor_executor.TaskExecutor)

Create a new TaskExecutor object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ExecutorOptionsMixin`](../modules/executor_executor#executoroptionsmixin) | contains information needed to start executor, if string the imageHash is required, otherwise it should be a type of [ExecutorOptions](../modules/executor_executor#executoroptions) |

#### Returns

[`TaskExecutor`](executor_executor.TaskExecutor)

#### Defined in

[src/executor/executor.ts:184](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L184)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`TaskExecutorEventsDict`](../interfaces/executor_events.TaskExecutorEventsDict), `any`\>

EventEmitter (EventEmitter3) instance emitting TaskExecutor events.

**`See`**

TaskExecutorEventsDict for available events.

#### Defined in

[src/executor/executor.ts:109](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L109)

## Methods

### create

▸ **create**(`options`): `Promise`\<[`TaskExecutor`](executor_executor.TaskExecutor)\>

Create a new Task Executor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ExecutorOptionsMixin`](../modules/executor_executor#executoroptionsmixin) | Task executor options |

#### Returns

`Promise`\<[`TaskExecutor`](executor_executor.TaskExecutor)\>

TaskExecutor

**`Description`**

Factory Method that create and initialize an instance of the TaskExecutor

**`Example`**

The executor can be created by passing appropriate initial parameters such as package, budget, subnet tag, payment driver, payment network etc.
One required parameter is a package. This can be done in two ways. First by passing only package image hash or image tag, e.g.
```js
const executor = await TaskExecutor.create("9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae");
```
or
```js
const executor = await TaskExecutor.create("golem/alpine:3.18.2");
```

**`Example`**

Or by passing some optional parameters, e.g.
```js
const executor = await TaskExecutor.create({
  subnetTag: "public",
  payment: { driver: "erc-20", network: "goerli" },
  package: "golem/alpine:3.18.2",
});
```

#### Defined in

[src/executor/executor.ts:173](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L173)

___

### init

▸ **init**(): `Promise`\<`void`\>

Initialize executor

#### Returns

`Promise`\<`void`\>

**`Description`**

Method responsible initialize all executor services.

#### Defined in

[src/executor/executor.ts:223](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L223)

___

### end

▸ **end**(): `Promise`\<`void`\>

Stop all executor services and shut down executor instance.

You can call this method multiple times, it will resolve only once the executor is shutdown.

#### Returns

`Promise`\<`void`\>

**`Deprecated`**

Use TaskExecutor.shutdown() instead.

#### Defined in

[src/executor/executor.ts:278](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L278)

___

### shutdown

▸ **shutdown**(): `Promise`\<`void`\>

Stop all executor services and shut down executor instance.

You can call this method multiple times, it will resolve only once the executor is shutdown.

When shutdown() is initially called, a beforeEnd event is emitted.

Once the executor is fully stopped, an end event is emitted.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/executor/executor.ts:291](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L291)

___

### getStats

▸ **getStats**(): `Object`

Statistics of execution process

#### Returns

`Object`

array

#### Defined in

[src/executor/executor.ts:328](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L328)

___

### beforeEach

▸ **beforeEach**(`worker`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worker` | [`Worker`](../modules/task_work#worker)\<`unknown`\> | worker function - task |

#### Returns

`void`

**`Deprecated`**

Use [TaskExecutor.onActivityReady](executor_executor.TaskExecutor#onactivityready) instead.

Define worker function that will be runs before every each computation Task, within the same activity.

**`Example`**

```typescript
executor.beforeEach(async (ctx) => {
  await ctx.uploadFile("./params.txt", "/params.txt");
});

await executor.forEach([1, 2, 3, 4, 5], async (ctx, item) => {
   await ctx
     .beginBatch()
     .run(`/run_some_command.sh --input ${item} --params /input_params.txt --output /output.txt`)
     .downloadFile("/output.txt", "./output.txt")
     .end();
});
```

#### Defined in

[src/executor/executor.ts:354](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L354)

___

### onActivityReady

▸ **onActivityReady**(`worker`): `void`

Registers a worker function that will be run when an activity is ready.
This is the perfect place to run setup functions that need to be run only once per
activity, for example uploading files that will be used by all tasks in the activity.
This function can be called multiple times, each worker will be run in the order
they were registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worker` | [`Worker`](../modules/task_work#worker)\<`unknown`\> | worker function that will be run when an activity is ready |

#### Returns

`void`

**`Example`**

```ts
const uploadFile1 = async (ctx) => ctx.uploadFile("./file1.txt", "/file1.txt");
const uploadFile2 = async (ctx) => ctx.uploadFile("./file2.txt", "/file2.txt");

executor.onActivityReady(uploadFile1);
executor.onActivityReady(uploadFile2);

await executor.run(async (ctx) => {
 await ctx.run("cat /file1.txt /file2.txt");
});
```

#### Defined in

[src/executor/executor.ts:379](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L379)

___

### run

▸ **run**\<`OutputType`\>(`worker`, `options?`): `Promise`\<`OutputType`\>

Run task - allows to execute a single worker function on the Golem network with a single provider.

#### Type parameters

| Name |
| :------ |
| `OutputType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worker` | [`Worker`](../modules/task_work#worker)\<`OutputType`\> | function that run task |
| `options?` | [`TaskOptions`](../modules/task_task#taskoptions) | task options |

#### Returns

`Promise`\<`OutputType`\>

result of task computation

**`Example`**

```typescript
await executor.run(async (ctx) => console.log((await ctx.run("echo 'Hello World'")).stdout));
```

#### Defined in

[src/executor/executor.ts:394](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L394)

___

### createJob

▸ **createJob**\<`OutputType`\>(`worker`): `Promise`\<[`Job`](job_job.Job)\<`OutputType`\>\>

Start a new job without waiting for the result. The job can be retrieved later using [TaskExecutor.getJobById](executor_executor.TaskExecutor#getjobbyid). The job's status is stored in the [JobStorage](../interfaces/job_storage.JobStorage) provided in the [ExecutorOptions](../modules/executor_executor#executoroptions) (in-memory by default). For distributed environments, it is recommended to use a form of storage that is accessible from all nodes (e.g. a database).

#### Type parameters

| Name |
| :------ |
| `OutputType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worker` | [`Worker`](../modules/task_work#worker)\<`OutputType`\> | Worker function to be executed |

#### Returns

`Promise`\<[`Job`](job_job.Job)\<`OutputType`\>\>

Job object

**`Example`**

```typescript
const job = executor.createJob(async (ctx) => {
 return (await ctx.run("echo 'Hello World'")).stdout;
});
// save job.id somewhere

// later...
const job = await executor.fetchJob(jobId);
const status = await job.fetchState();
const results = await job.fetchResults();
const error = await job.fetchError();
```

#### Defined in

[src/executor/executor.ts:449](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L449)

___

### getJobById

▸ **getJobById**(`jobId`): [`Job`](job_job.Job)\<`unknown`\>

Retrieve a job by its ID. The job's status is stored in the [JobStorage](../interfaces/job_storage.JobStorage) provided in the [ExecutorOptions](../modules/executor_executor#executoroptions) (in-memory by default). Use [Job.fetchState](job_job.Job#fetchstate), [Job.fetchResults](job_job.Job#fetchresults) and [Job.fetchError](job_job.Job#fetcherror) to get the job's status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jobId` | `string` | Job ID |

#### Returns

[`Job`](job_job.Job)\<`unknown`\>

Job object.

#### Defined in

[src/executor/executor.ts:473](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L473)

___

### cancel

▸ **cancel**(`reason?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/executor/executor.ts:496](https://github.com/golemfactory/golem-js/blob/c827e77/src/executor/executor.ts#L496)
