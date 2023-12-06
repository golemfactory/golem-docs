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
- [start](task_task.Task#start)
- [stop](task_task.Task#stop)
- [isQueueable](task_task.Task#isqueueable)
- [isRetry](task_task.Task#isretry)
- [isDone](task_task.Task#isdone)
- [isFinished](task_task.Task#isfinished)
- [isRejected](task_task.Task#isrejected)
- [isPending](task_task.Task#ispending)
- [isNew](task_task.Task#isnew)
- [getResults](task_task.Task#getresults)
- [getWorker](task_task.Task#getworker)
- [getActivityReadySetupFunctions](task_task.Task#getactivityreadysetupfunctions)
- [getRetriesCount](task_task.Task#getretriescount)
- [getError](task_task.Task#geterror)

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

[src/task/task.ts:42](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L42)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/task/task.ts:43](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L43)

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

[src/task/task.ts:55](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L55)

___

### cleanup

▸ **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[src/task/task.ts:58](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L58)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/task/task.ts:63](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L63)

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

[src/task/task.ts:68](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L68)

___

### isQueueable

▸ **isQueueable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

QueueableTask.isQueueable

#### Defined in

[src/task/task.ts:80](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L80)

___

### isRetry

▸ **isRetry**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:83](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L83)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:86](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L86)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:89](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L89)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:92](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L92)

___

### isPending

▸ **isPending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:95](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L95)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:98](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L98)

___

### getResults

▸ **getResults**(): `undefined` \| `OutputType`

#### Returns

`undefined` \| `OutputType`

#### Defined in

[src/task/task.ts:101](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L101)

___

### getWorker

▸ **getWorker**(): [`Worker`](../modules/task_work#worker)\<`OutputType`\>

#### Returns

[`Worker`](../modules/task_work#worker)\<`OutputType`\>

#### Defined in

[src/task/task.ts:104](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L104)

___

### getActivityReadySetupFunctions

▸ **getActivityReadySetupFunctions**(): [`Worker`](../modules/task_work#worker)\<`unknown`\>[]

#### Returns

[`Worker`](../modules/task_work#worker)\<`unknown`\>[]

#### Defined in

[src/task/task.ts:107](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L107)

___

### getRetriesCount

▸ **getRetriesCount**(): `number`

#### Returns

`number`

#### Defined in

[src/task/task.ts:110](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L110)

___

### getError

▸ **getError**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[src/task/task.ts:113](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/task.ts#L113)
