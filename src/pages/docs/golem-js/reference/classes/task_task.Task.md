---
title: Class Task
pageTitle: Class Task - golem-js API Reference
description: Explore the detailed API reference documentation for the Class Task within the golem-js SDK for the Golem Network.
type: JS API Reference
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
- [getActivityReadySetupFunctions](task_task.Task#getactivityreadysetupfunctions)
- [getRetriesCount](task_task.Task#getretriescount)
- [getError](task_task.Task#geterror)

## Constructors

### constructor

• **new Task**\<`InputType`, `OutputType`\>(`id`, `worker`, `data?`, `options?`): [`Task`](task_task.Task)\<`InputType`, `OutputType`\>

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
| `options?` | [`TaskOptions`](../modules/task_task#taskoptions) |

#### Returns

[`Task`](task_task.Task)\<`InputType`, `OutputType`\>

#### Defined in

[src/task/task.ts:42](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L42)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/task/task.ts:43](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L43)

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

[src/task/task.ts:53](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L53)

___

### cleanup

▸ **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[src/task/task.ts:56](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L56)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/task/task.ts:61](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L61)

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

[src/task/task.ts:66](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L66)

___

### isQueueable

▸ **isQueueable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

QueueableTask.isQueueable

#### Defined in

[src/task/task.ts:78](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L78)

___

### isRetry

▸ **isRetry**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:81](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L81)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:84](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L84)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:87](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L87)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:90](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L90)

___

### isPending

▸ **isPending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:93](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L93)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:96](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L96)

___

### getResults

▸ **getResults**(): `undefined` \| `OutputType`

#### Returns

`undefined` \| `OutputType`

#### Defined in

[src/task/task.ts:99](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L99)

___

### getData

▸ **getData**(): `undefined` \| `InputType`

#### Returns

`undefined` \| `InputType`

#### Defined in

[src/task/task.ts:102](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L102)

___

### getWorker

▸ **getWorker**(): [`Worker`](../modules/task_work#worker)\<`InputType`\>

#### Returns

[`Worker`](../modules/task_work#worker)\<`InputType`\>

#### Defined in

[src/task/task.ts:105](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L105)

___

### getActivityReadySetupFunctions

▸ **getActivityReadySetupFunctions**(): [`Worker`](../modules/task_work#worker)[]

#### Returns

[`Worker`](../modules/task_work#worker)[]

#### Defined in

[src/task/task.ts:108](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L108)

___

### getRetriesCount

▸ **getRetriesCount**(): `number`

#### Returns

`number`

#### Defined in

[src/task/task.ts:111](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L111)

___

### getError

▸ **getError**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[src/task/task.ts:114](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/task.ts#L114)
