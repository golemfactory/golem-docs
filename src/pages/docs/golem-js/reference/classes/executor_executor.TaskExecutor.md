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
- [shutdown](executor_executor.TaskExecutor#shutdown)
- [getStats](executor_executor.TaskExecutor#getstats)
- [onActivityReady](executor_executor.TaskExecutor#onactivityready)
- [run](executor_executor.TaskExecutor#run)
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

[src/executor/executor.ts:169](https://github.com/golemfactory/golem-js/blob/4182943/src/executor/executor.ts#L169)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`TaskExecutorEventsDict`](../interfaces/executor_events.TaskExecutorEventsDict), `any`\>

EventEmitter (EventEmitter3) instance emitting TaskExecutor events.

**`See`**

TaskExecutorEventsDict for available events.

#### Defined in

[src/executor/executor.ts:94](https://github.com/golemfactory/golem-js/blob/4182943/src/executor/executor.ts#L94)

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
  payment: { driver: "erc-20", network: "holesky" },
  package: "golem/alpine:3.18.2",
});
```

#### Defined in

[src/executor/executor.ts:158](https://github.com/golemfactory/golem-js/blob/4182943/src/executor/executor.ts#L158)

___

### init

▸ **init**(): `Promise`\<`void`\>

Initialize executor

#### Returns

`Promise`\<`void`\>

**`Description`**

Method responsible initialize all executor services.

#### Defined in

[src/executor/executor.ts:222](https://github.com/golemfactory/golem-js/blob/4182943/src/executor/executor.ts#L222)

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

[src/executor/executor.ts:286](https://github.com/golemfactory/golem-js/blob/4182943/src/executor/executor.ts#L286)

___

### getStats

▸ **getStats**(): `Object`

Statistics of execution process

#### Returns

`Object`

array

#### Defined in

[src/executor/executor.ts:323](https://github.com/golemfactory/golem-js/blob/4182943/src/executor/executor.ts#L323)

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

[src/executor/executor.ts:348](https://github.com/golemfactory/golem-js/blob/4182943/src/executor/executor.ts#L348)

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

[src/executor/executor.ts:363](https://github.com/golemfactory/golem-js/blob/4182943/src/executor/executor.ts#L363)

___

### cancel

▸ **cancel**(`reason`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/executor/executor.ts:414](https://github.com/golemfactory/golem-js/blob/4182943/src/executor/executor.ts#L414)
