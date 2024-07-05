---
title: "Class Task"
pageTitle: "Class Task - Task API Reference"
description: "Explore the detailed API reference documentation for the Class Task within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Class: Task<OutputType\>

[task](../modules/task).Task

One computation unit.

**`Description`**

Represents one computation unit that will be run on the one provider machine (e.g. rendering of one frame of an animation).

## Type parameters

| Name | Type |
| :------ | :------ |
| `OutputType` | `unknown` |

## Implements

- `QueueableTask`

## Table of contents

### Constructors

- [constructor](task.Task#constructor)

### Properties

- [retryOnTimeout](task.Task#retryontimeout)
- [id](task.Task#id)

### Methods

- [onStateChange](task.Task#onstatechange)
- [cleanup](task.Task#cleanup)
- [init](task.Task#init)
- [start](task.Task#start)
- [stop](task.Task#stop)
- [isQueueable](task.Task#isqueueable)
- [isRetry](task.Task#isretry)
- [isDone](task.Task#isdone)
- [isFinished](task.Task#isfinished)
- [isRejected](task.Task#isrejected)
- [isQueued](task.Task#isqueued)
- [isPending](task.Task#ispending)
- [isNew](task.Task#isnew)
- [isFailed](task.Task#isfailed)
- [getResults](task.Task#getresults)
- [getWorker](task.Task#getworker)
- [getActivityReadySetupFunctions](task.Task#getactivityreadysetupfunctions)
- [getRetriesCount](task.Task#getretriescount)
- [getError](task.Task#geterror)
- [getActivity](task.Task#getactivity)
- [getNetworkNode](task.Task#getnetworknode)
- [getState](task.Task#getstate)
- [getDetails](task.Task#getdetails)

## Constructors

### constructor

• **new Task**<`OutputType`\>(`id`, `worker`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OutputType` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `worker` | `Worker`<`OutputType`\> |
| `options?` | [`TaskOptions`](../modules/task#taskoptions) |

#### Defined in

[src/task.ts:81](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L81)

## Properties

### retryOnTimeout

• `Readonly` **retryOnTimeout**: `boolean`

#### Defined in

[src/task.ts:70](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L70)

___

### id

• `Readonly` **id**: `string`

#### Implementation of

QueueableTask.id

#### Defined in

[src/task.ts:82](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L82)

## Methods

### onStateChange

▸ **onStateChange**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`state`: [`TaskState`](../enums/task.TaskState)) => `void` |

#### Returns

`void`

#### Defined in

[src/task.ts:98](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L98)

___

### cleanup

▸ **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[src/task.ts:101](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L101)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/task.ts:105](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L105)

___

### start

▸ **start**(`activity`, `networkNode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | `Activity` |
| `networkNode?` | `NetworkNode` |

#### Returns

`void`

#### Defined in

[src/task.ts:122](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L122)

___

### stop

▸ **stop**(`results?`, `error?`, `retry?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `results?` | `OutputType` | `undefined` |
| `error?` | `Error` | `undefined` |
| `retry` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/task.ts:137](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L137)

___

### isQueueable

▸ **isQueueable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

QueueableTask.isQueueable

#### Defined in

[src/task.ts:157](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L157)

___

### isRetry

▸ **isRetry**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:160](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L160)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:163](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L163)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:166](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L166)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:169](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L169)

___

### isQueued

▸ **isQueued**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:172](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L172)

___

### isPending

▸ **isPending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:175](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L175)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:178](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L178)

___

### isFailed

▸ **isFailed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:181](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L181)

___

### getResults

▸ **getResults**(): `undefined` \| `OutputType`

#### Returns

`undefined` \| `OutputType`

#### Defined in

[src/task.ts:184](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L184)

___

### getWorker

▸ **getWorker**(): `Worker`<`OutputType`\>

#### Returns

`Worker`<`OutputType`\>

#### Defined in

[src/task.ts:187](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L187)

___

### getActivityReadySetupFunctions

▸ **getActivityReadySetupFunctions**(): `Worker`<`unknown`\>[]

#### Returns

`Worker`<`unknown`\>[]

#### Defined in

[src/task.ts:190](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L190)

___

### getRetriesCount

▸ **getRetriesCount**(): `number`

#### Returns

`number`

#### Defined in

[src/task.ts:193](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L193)

___

### getError

▸ **getError**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[src/task.ts:196](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L196)

___

### getActivity

▸ **getActivity**(): `undefined` \| `Activity`

#### Returns

`undefined` \| `Activity`

#### Defined in

[src/task.ts:199](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L199)

___

### getNetworkNode

▸ **getNetworkNode**(): `undefined` \| `NetworkNode`

#### Returns

`undefined` \| `NetworkNode`

#### Defined in

[src/task.ts:202](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L202)

___

### getState

▸ **getState**(): [`TaskState`](../enums/task.TaskState)

#### Returns

[`TaskState`](../enums/task.TaskState)

#### Defined in

[src/task.ts:205](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L205)

___

### getDetails

▸ **getDetails**(): [`TaskDetails`](../modules/task#taskdetails)

#### Returns

[`TaskDetails`](../modules/task#taskdetails)

#### Defined in

[src/task.ts:214](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/task.ts#L214)
