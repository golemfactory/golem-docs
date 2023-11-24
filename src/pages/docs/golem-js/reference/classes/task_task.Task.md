---
title: "Class Task - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Task within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: Task\<InputType, OutputType\>

[task/task](../modules/task_task).Task

One computation unit.

**`Description`**

Represents one computation unit that will be run on the one provider machine (e.g. rendering of one frame of an animation).

## Type parameters

| Name | Type |
| :------ | :------ |
| `InputType` | `unknown` |
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
- [getData](task_task.Task#getdata)
- [getWorker](task_task.Task#getworker)
- [getInitWorker](task_task.Task#getinitworker)
- [getRetriesCount](task_task.Task#getretriescount)
- [getError](task_task.Task#geterror)

## Constructors

### constructor

• **new Task**\<`InputType`, `OutputType`\>(`id`, `worker`, `data?`, `initWorker?`, `options?`): [`Task`](task_task.Task)\<`InputType`, `OutputType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputType` | `unknown` |
| `OutputType` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `worker` | [`Worker`](../modules/task_work#worker)\<`InputType`, `OutputType`\> |
| `data?` | `InputType` |
| `initWorker?` | [`Worker`](../modules/task_work#worker)\<`undefined`\> |
| `options?` | [`TaskOptions`](../modules/task_task#taskoptions) |

#### Returns

[`Task`](task_task.Task)\<`InputType`, `OutputType`\>

#### Defined in

[src/task/task.ts:39](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L39)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/task/task.ts:40](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L40)

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

[src/task/task.ts:50](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L50)

___

### cleanup

▸ **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[src/task/task.ts:53](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L53)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/task/task.ts:58](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L58)

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

[src/task/task.ts:63](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L63)

___

### isQueueable

▸ **isQueueable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

QueueableTask.isQueueable

#### Defined in

[src/task/task.ts:75](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L75)

___

### isRetry

▸ **isRetry**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:78](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L78)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:81](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L81)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:84](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L84)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:87](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L87)

___

### isPending

▸ **isPending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:90](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L90)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:93](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L93)

___

### getResults

▸ **getResults**(): `undefined` \| `OutputType`

#### Returns

`undefined` \| `OutputType`

#### Defined in

[src/task/task.ts:96](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L96)

___

### getData

▸ **getData**(): `undefined` \| `InputType`

#### Returns

`undefined` \| `InputType`

#### Defined in

[src/task/task.ts:99](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L99)

___

### getWorker

▸ **getWorker**(): [`Worker`](../modules/task_work#worker)\<`InputType`\>

#### Returns

[`Worker`](../modules/task_work#worker)\<`InputType`\>

#### Defined in

[src/task/task.ts:102](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L102)

___

### getInitWorker

▸ **getInitWorker**(): `undefined` \| [`Worker`](../modules/task_work#worker)\<`undefined`\>

#### Returns

`undefined` \| [`Worker`](../modules/task_work#worker)\<`undefined`\>

#### Defined in

[src/task/task.ts:105](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L105)

___

### getRetriesCount

▸ **getRetriesCount**(): `number`

#### Returns

`number`

#### Defined in

[src/task/task.ts:108](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L108)

___

### getError

▸ **getError**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[src/task/task.ts:111](https://github.com/golemfactory/golem-js/blob/5c570c3/src/task/task.ts#L111)
