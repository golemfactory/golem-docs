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
- [glm](executor.TaskExecutor#glm)

### Methods

- [create](executor.TaskExecutor#create)
- [init](executor.TaskExecutor#init)
- [shutdown](executor.TaskExecutor#shutdown)
- [getStats](executor.TaskExecutor#getstats)
- [run](executor.TaskExecutor#run)
- [cancel](executor.TaskExecutor#cancel)

## Constructors

### constructor

• **new TaskExecutor**(`options`)

Create a new TaskExecutor object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`TaskExecutorOptions`](../modules/executor#taskexecutoroptions) | [TaskExecutorOptions](../modules/executor#taskexecutoroptions) |

#### Defined in

[executor.ts:221](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L221)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`ExecutorEvents`](../interfaces/events.ExecutorEvents), `any`\>

#### Defined in

[executor.ts:143](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L143)

___

### glm

• `Readonly` **glm**: `GolemNetwork`

This object is the main entry-point to the basic golem-js api.
Allows you to listen to events from core golem-js modules such as market, payment, etc.
Provides full access to the low-level api intended for more advanced users

#### Defined in

[executor.ts:149](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L149)

## Methods

### create

▸ `Static` **create**(`options`): `Promise`\<[`TaskExecutor`](executor.TaskExecutor)\>

Create a new Task Executor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`TaskExecutorOptions`](../modules/executor#taskexecutoroptions) | Task executor options |

#### Returns

`Promise`\<[`TaskExecutor`](executor.TaskExecutor)\>

TaskExecutor

**`Description`**

Factory Method that create and initialize an instance of the TaskExecutor

**`Example`**

```ts
**Simple usage of Task Executor**

The executor can be created by passing appropriate initial parameters such as market, payment, payment etc.
```

**`Example`**

**Usage of Task Executor with custom parameters**

```js
const executor = await TaskExecutor.create({
  logger: pinoPrettyLogger({ level: "info" }),
  demand: {
    workload: {
      imageTag: "golem/alpine:latest",
    },
  },
  market: {
    rentHours: 0.5,
    pricing: {
      model: "linear",
      maxStartPrice: 0.5,
      maxCpuPerHourPrice: 1.0,
      maxEnvPerHourPrice: 0.5,
    },
  },
});
```

#### Defined in

[executor.ts:210](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L210)

___

### init

▸ **init**(): `Promise`\<`void`\>

Initialize executor
Method responsible for connecting to the golem network and initiating all required services.

#### Returns

`Promise`\<`void`\>

#### Defined in

[executor.ts:238](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L238)

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

[executor.ts:286](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L286)

___

### getStats

▸ **getStats**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `retries` | `undefined` \| `number` |
| `providers` | `number` |
| `agreements` | `number` |
| `invoicesReceived` | `number` |
| `invoicesPaid` | `number` |
| `invoicesUnpaid` | `number` |
| `invoicesMissing` | `number` |
| `invoicePaymentRate` | `number` |

#### Defined in

[executor.ts:315](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L315)

___

### run

▸ **run**\<`OutputType`\>(`taskFunction`, `options?`): `Promise`\<`OutputType`\>

Run task - allows to execute a single taskFunction function on the Golem network with a single provider.

#### Type parameters

| Name |
| :------ |
| `OutputType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taskFunction` | [`TaskFunction`](../modules/executor#taskfunction)\<`OutputType`\> | function that run task |
| `options?` | [`TaskOptions`](../modules/task#taskoptions) | task options |

#### Returns

`Promise`\<`OutputType`\>

result of task computation

**`Example`**

```typescript
await executor.run(async (exe) => console.log((await exe.run("echo 'Hello World'")).stdout));
```

#### Defined in

[executor.ts:333](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L333)

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

[executor.ts:374](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L374)
