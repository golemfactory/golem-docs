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

[src/task.ts:60](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L60)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/task.ts:61](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L61)

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

[src/task.ts:73](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L73)

___

### cleanup

▸ **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[src/task.ts:76](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L76)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/task.ts:80](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L80)

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

[src/task.ts:84](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L84)

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

[src/task.ts:94](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L94)

___

### isQueueable

▸ **isQueueable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

QueueableTask.isQueueable

#### Defined in

[src/task.ts:113](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L113)

___

### isRetry

▸ **isRetry**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:116](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L116)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:119](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L119)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:122](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L122)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:125](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L125)

___

### isQueued

▸ **isQueued**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:128](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L128)

___

### isPending

▸ **isPending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:131](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L131)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:134](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L134)

___

### isFailed

▸ **isFailed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task.ts:137](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L137)

___

### getResults

▸ **getResults**(): `undefined` \| `OutputType`

#### Returns

`undefined` \| `OutputType`

#### Defined in

[src/task.ts:140](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L140)

___

### getWorker

▸ **getWorker**(): `Worker`<`OutputType`\>

#### Returns

`Worker`<`OutputType`\>

#### Defined in

[src/task.ts:143](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L143)

___

### getActivityReadySetupFunctions

▸ **getActivityReadySetupFunctions**(): `Worker`<`unknown`\>[]

#### Returns

`Worker`<`unknown`\>[]

#### Defined in

[src/task.ts:146](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L146)

___

### getRetriesCount

▸ **getRetriesCount**(): `number`

#### Returns

`number`

#### Defined in

[src/task.ts:149](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L149)

___

### getError

▸ **getError**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[src/task.ts:152](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L152)

___

### getActivity

▸ **getActivity**(): `undefined` \| `Activity`

#### Returns

`undefined` \| `Activity`

#### Defined in

[src/task.ts:155](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L155)

___

### getNetworkNode

▸ **getNetworkNode**(): `undefined` \| `NetworkNode`

#### Returns

`undefined` \| `NetworkNode`

#### Defined in

[src/task.ts:158](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L158)

___

### getState

▸ **getState**(): [`TaskState`](../enums/task.TaskState)

#### Returns

[`TaskState`](../enums/task.TaskState)

#### Defined in

[src/task.ts:161](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L161)

___

### getDetails

▸ **getDetails**(): [`TaskDetails`](../modules/task#taskdetails)

#### Returns

[`TaskDetails`](../modules/task#taskdetails)

#### Defined in

[src/task.ts:164](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L164)
