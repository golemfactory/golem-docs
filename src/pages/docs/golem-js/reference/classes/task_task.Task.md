---
title: "Class Task"
pageTitle: "Class Task - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Task within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Task\<OutputType\>

[task/task](../modules/task_task).Task

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

- [constructor](task_task.Task#constructor)

### Properties

- [id](task_task.Task#id)

### Methods

- [onStateChange](task_task.Task#onstatechange)
- [cleanup](task_task.Task#cleanup)
- [init](task_task.Task#init)
- [start](task_task.Task#start)
- [stop](task_task.Task#stop)
- [isQueueable](task_task.Task#isqueueable)
- [isRetry](task_task.Task#isretry)
- [isDone](task_task.Task#isdone)
- [isFinished](task_task.Task#isfinished)
- [isRejected](task_task.Task#isrejected)
- [isQueued](task_task.Task#isqueued)
- [isPending](task_task.Task#ispending)
- [isNew](task_task.Task#isnew)
- [isFailed](task_task.Task#isfailed)
- [getResults](task_task.Task#getresults)
- [getWorker](task_task.Task#getworker)
- [getActivityReadySetupFunctions](task_task.Task#getactivityreadysetupfunctions)
- [getRetriesCount](task_task.Task#getretriescount)
- [getError](task_task.Task#geterror)
- [getActivity](task_task.Task#getactivity)
- [getNetworkNode](task_task.Task#getnetworknode)

## Constructors

### constructor

• **new Task**\<`OutputType`\>(`id`, `worker`, `options?`): [`Task`](task_task.Task)\<`OutputType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OutputType` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `worker` | [`Worker`](../modules/task_work#worker)\<`OutputType`\> |
| `options?` | [`TaskOptions`](../modules/task_task#taskoptions) |

#### Returns

[`Task`](task_task.Task)\<`OutputType`\>

#### Defined in

[src/task/task.ts:48](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L48)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/task/task.ts:49](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L49)

## Methods

### onStateChange

▸ **onStateChange**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`state`: [`TaskState`](../enums/task_task.TaskState)) => `void` |

#### Returns

`void`

#### Defined in

[src/task/task.ts:61](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L61)

___

### cleanup

▸ **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[src/task/task.ts:64](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L64)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/task/task.ts:68](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L68)

___

### start

▸ **start**(`activity`, `networkNode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `networkNode?` | [`NetworkNode`](network_node.NetworkNode) |

#### Returns

`void`

#### Defined in

[src/task/task.ts:72](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L72)

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

[src/task/task.ts:82](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L82)

___

### isQueueable

▸ **isQueueable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

QueueableTask.isQueueable

#### Defined in

[src/task/task.ts:101](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L101)

___

### isRetry

▸ **isRetry**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:104](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L104)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:107](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L107)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:110](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L110)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:113](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L113)

___

### isQueued

▸ **isQueued**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:116](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L116)

___

### isPending

▸ **isPending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:119](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L119)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:122](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L122)

___

### isFailed

▸ **isFailed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:125](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L125)

___

### getResults

▸ **getResults**(): `undefined` \| `OutputType`

#### Returns

`undefined` \| `OutputType`

#### Defined in

[src/task/task.ts:128](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L128)

___

### getWorker

▸ **getWorker**(): [`Worker`](../modules/task_work#worker)\<`OutputType`\>

#### Returns

[`Worker`](../modules/task_work#worker)\<`OutputType`\>

#### Defined in

[src/task/task.ts:131](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L131)

___

### getActivityReadySetupFunctions

▸ **getActivityReadySetupFunctions**(): [`Worker`](../modules/task_work#worker)\<`unknown`\>[]

#### Returns

[`Worker`](../modules/task_work#worker)\<`unknown`\>[]

#### Defined in

[src/task/task.ts:134](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L134)

___

### getRetriesCount

▸ **getRetriesCount**(): `number`

#### Returns

`number`

#### Defined in

[src/task/task.ts:137](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L137)

___

### getError

▸ **getError**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[src/task/task.ts:140](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L140)

___

### getActivity

▸ **getActivity**(): `undefined` \| [`Activity`](activity_activity.Activity)

#### Returns

`undefined` \| [`Activity`](activity_activity.Activity)

#### Defined in

[src/task/task.ts:143](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L143)

___

### getNetworkNode

▸ **getNetworkNode**(): `undefined` \| [`NetworkNode`](network_node.NetworkNode)

#### Returns

`undefined` \| [`NetworkNode`](network_node.NetworkNode)

#### Defined in

[src/task/task.ts:146](https://github.com/golemfactory/golem-js/blob/7cee55b/src/task/task.ts#L146)
