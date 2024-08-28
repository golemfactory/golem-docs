---
title: "Class Task"
pageTitle: "Class Task - Task API Reference"
description: "Explore the detailed API reference documentation for the Class Task within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Class: Task\<OutputType\>

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
- [getTaskFunction](task.Task#gettaskfunction)
- [getRetriesCount](task.Task#getretriescount)
- [getError](task.Task#geterror)
- [getResourceRental](task.Task#getresourcerental)
- [getExeUnit](task.Task#getexeunit)
- [getState](task.Task#getstate)
- [getDetails](task.Task#getdetails)

## Constructors

### constructor

• **new Task**\<`OutputType`\>(`id`, `taskFunction`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OutputType` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `taskFunction` | [`TaskFunction`](../modules/task#taskfunction)\<`OutputType`\> |
| `options?` | [`TaskOptions`](../modules/task#taskoptions) |

#### Defined in

[task.ts:72](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L72)

## Properties

### retryOnTimeout

• `Readonly` **retryOnTimeout**: `boolean`

#### Defined in

[task.ts:62](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L62)

___

### id

• `Readonly` **id**: `string`

#### Implementation of

QueueableTask.id

#### Defined in

[task.ts:73](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L73)

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

[task.ts:86](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L86)

___

### cleanup

▸ **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[task.ts:89](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L89)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[task.ts:93](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L93)

___

### start

▸ **start**(`resourceRental`, `exe`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceRental` | `ResourceRental` |
| `exe` | `ExeUnit` |

#### Returns

`void`

#### Defined in

[task.ts:110](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L110)

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

[task.ts:125](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L125)

___

### isQueueable

▸ **isQueueable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

QueueableTask.isQueueable

#### Defined in

[task.ts:145](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L145)

___

### isRetry

▸ **isRetry**(): `boolean`

#### Returns

`boolean`

#### Defined in

[task.ts:148](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L148)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[task.ts:151](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L151)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[task.ts:154](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L154)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[task.ts:157](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L157)

___

### isQueued

▸ **isQueued**(): `boolean`

#### Returns

`boolean`

#### Defined in

[task.ts:160](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L160)

___

### isPending

▸ **isPending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[task.ts:163](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L163)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[task.ts:166](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L166)

___

### isFailed

▸ **isFailed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[task.ts:169](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L169)

___

### getResults

▸ **getResults**(): `undefined` \| `OutputType`

#### Returns

`undefined` \| `OutputType`

#### Defined in

[task.ts:172](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L172)

___

### getTaskFunction

▸ **getTaskFunction**(): [`TaskFunction`](../modules/task#taskfunction)\<`OutputType`\>

#### Returns

[`TaskFunction`](../modules/task#taskfunction)\<`OutputType`\>

#### Defined in

[task.ts:175](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L175)

___

### getRetriesCount

▸ **getRetriesCount**(): `number`

#### Returns

`number`

#### Defined in

[task.ts:178](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L178)

___

### getError

▸ **getError**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[task.ts:181](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L181)

___

### getResourceRental

▸ **getResourceRental**(): `undefined` \| `ResourceRental`

#### Returns

`undefined` \| `ResourceRental`

#### Defined in

[task.ts:184](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L184)

___

### getExeUnit

▸ **getExeUnit**(): `undefined` \| `ExeUnit`

#### Returns

`undefined` \| `ExeUnit`

#### Defined in

[task.ts:187](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L187)

___

### getState

▸ **getState**(): [`TaskState`](../enums/task.TaskState)

#### Returns

[`TaskState`](../enums/task.TaskState)

#### Defined in

[task.ts:190](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L190)

___

### getDetails

▸ **getDetails**(): [`TaskDetails`](../modules/task#taskdetails)

#### Returns

[`TaskDetails`](../modules/task#taskdetails)

#### Defined in

[task.ts:199](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L199)
