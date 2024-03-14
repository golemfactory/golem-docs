---
title: "Class TaskExecutor"
pageTitle: "Class TaskExecutor - Task API Reference"
description: "Explore the detailed API reference documentation for the Class TaskExecutor within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Class: TaskExecutor

[executor](../modules/executor).TaskExecutor

A high-level module for defining and executing tasks in the golem network

## Table of contents

### Constructors

- [constructor](executor.TaskExecutor#constructor)

### Properties

- [events](executor.TaskExecutor#events)

### Methods

- [create](executor.TaskExecutor#create)
- [init](executor.TaskExecutor#init)
- [shutdown](executor.TaskExecutor#shutdown)
- [getStats](executor.TaskExecutor#getstats)
- [onActivityReady](executor.TaskExecutor#onactivityready)
- [run](executor.TaskExecutor#run)
- [cancel](executor.TaskExecutor#cancel)

## Constructors

### constructor

• **new TaskExecutor**(`options`)

Create a new TaskExecutor object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ExecutorOptionsMixin`](../modules/executor#executoroptionsmixin) | contains information needed to start executor, if string the imageHash is required, otherwise it should be a type of [ExecutorOptions](../modules/executor#executoroptions) |

#### Defined in

[src/executor.ts:186](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L186)

## Properties

### events

• `Readonly` **events**: `EventEmitter`<[`TaskExecutorEventsDict`](../interfaces/events.TaskExecutorEventsDict), `any`\>

EventEmitter (EventEmitter3) instance emitting TaskExecutor events.

**`See`**

TaskExecutorEventsDict for available events.

#### Defined in

[src/executor.ts:111](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L111)

## Methods

### create

▸ `Static` **create**(`options`): `Promise`<[`TaskExecutor`](executor.TaskExecutor)\>

Create a new Task Executor

**`Description`**

Factory Method that create and initialize an instance of the TaskExecutor

**`Example`**

**Simple usage of Task Executor**

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

**Usage of Task Executor with custom parameters**

Or by passing some optional parameters, e.g.
```js
const executor = await TaskExecutor.create({
  subnetTag: "public",
  payment: { driver: "erc-20", network: "goerli" },
  package: "golem/alpine:3.18.2",
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ExecutorOptionsMixin`](../modules/executor#executoroptionsmixin) | Task executor options |

#### Returns

`Promise`<[`TaskExecutor`](executor.TaskExecutor)\>

TaskExecutor

#### Defined in

[src/executor.ts:175](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L175)

___

### init

▸ **init**(): `Promise`<`void`\>

Initialize executor

**`Description`**

Method responsible initialize all executor services.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/executor.ts:244](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L244)

___

### shutdown

▸ **shutdown**(): `Promise`<`void`\>

Stop all executor services and shut down executor instance.

You can call this method multiple times, it will resolve only once the executor is shutdown.

When shutdown() is initially called, a beforeEnd event is emitted.

Once the executor is fully stopped, an end event is emitted.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/executor.ts:308](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L308)

___

### getStats

▸ **getStats**(): `Object`

Statistics of execution process

#### Returns

`Object`

array

#### Defined in

[src/executor.ts:345](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L345)

___

### onActivityReady

▸ **onActivityReady**(`worker`): `void`

Registers a worker function that will be run when an activity is ready.
This is the perfect place to run setup functions that need to be run only once per
activity, for example uploading files that will be used by all tasks in the activity.
This function can be called multiple times, each worker will be run in the order
they were registered.

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worker` | `Worker`<`unknown`\> | worker function that will be run when an activity is ready |

#### Returns

`void`

#### Defined in

[src/executor.ts:370](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L370)

___

### run

▸ **run**<`OutputType`\>(`worker`, `options?`): `Promise`<`OutputType`\>

Run task - allows to execute a single worker function on the Golem network with a single provider.

**`Example`**

```typescript
await executor.run(async (ctx) => console.log((await ctx.run("echo 'Hello World'")).stdout));
```

#### Type parameters

| Name |
| :------ |
| `OutputType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worker` | `Worker`<`OutputType`\> | function that run task |
| `options?` | [`TaskOptions`](../modules/task#taskoptions) | task options |

#### Returns

`Promise`<`OutputType`\>

result of task computation

#### Defined in

[src/executor.ts:385](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L385)

___

### cancel

▸ **cancel**(`reason`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/executor.ts:431](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L431)
