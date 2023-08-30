# Class: Task<InputType, OutputType\>

[task/task](../modules/task_task.md).Task

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

- [constructor](task_task.Task.md#constructor)

### Properties

- [id](task_task.Task.md#id)

### Methods

- [start](task_task.Task.md#start)
- [stop](task_task.Task.md#stop)
- [isQueueable](task_task.Task.md#isqueueable)
- [isRetry](task_task.Task.md#isretry)
- [isDone](task_task.Task.md#isdone)
- [isFinished](task_task.Task.md#isfinished)
- [isRejected](task_task.Task.md#isrejected)
- [isPending](task_task.Task.md#ispending)
- [isNew](task_task.Task.md#isnew)
- [getResults](task_task.Task.md#getresults)
- [getData](task_task.Task.md#getdata)
- [getWorker](task_task.Task.md#getworker)
- [getInitWorker](task_task.Task.md#getinitworker)
- [getRetriesCount](task_task.Task.md#getretriescount)
- [getError](task_task.Task.md#geterror)

## Constructors

### constructor

• **new Task**<`InputType`, `OutputType`\>(`id`, `worker`, `data?`, `initWorker?`, `maxTaskRetries?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputType` | `unknown` |
| `OutputType` | `unknown` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `worker` | [`Worker`](../modules/task_work.md#worker)<`InputType`, `OutputType`\> | `undefined` |
| `data?` | `InputType` | `undefined` |
| `initWorker?` | [`Worker`](../modules/task_work.md#worker)<`undefined`\> | `undefined` |
| `maxTaskRetries` | `number` | `MAX_RETRIES` |

#### Defined in

[src/task/task.ts:25](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L25)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/task/task.ts:26](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L26)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/task/task.ts:33](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L33)

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

[src/task/task.ts:36](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L36)

___

### isQueueable

▸ **isQueueable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

QueueableTask.isQueueable

#### Defined in

[src/task/task.ts:46](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L46)

___

### isRetry

▸ **isRetry**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:49](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L49)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:53](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L53)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:56](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L56)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:59](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L59)

___

### isPending

▸ **isPending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:62](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L62)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:65](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L65)

___

### getResults

▸ **getResults**(): `undefined` \| `OutputType`

#### Returns

`undefined` \| `OutputType`

#### Defined in

[src/task/task.ts:68](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L68)

___

### getData

▸ **getData**(): `undefined` \| `InputType`

#### Returns

`undefined` \| `InputType`

#### Defined in

[src/task/task.ts:71](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L71)

___

### getWorker

▸ **getWorker**(): [`Worker`](../modules/task_work.md#worker)<`InputType`\>

#### Returns

[`Worker`](../modules/task_work.md#worker)<`InputType`\>

#### Defined in

[src/task/task.ts:74](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L74)

___

### getInitWorker

▸ **getInitWorker**(): `undefined` \| [`Worker`](../modules/task_work.md#worker)<`undefined`\>

#### Returns

`undefined` \| [`Worker`](../modules/task_work.md#worker)<`undefined`\>

#### Defined in

[src/task/task.ts:77](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L77)

___

### getRetriesCount

▸ **getRetriesCount**(): `number`

#### Returns

`number`

#### Defined in

[src/task/task.ts:80](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L80)

___

### getError

▸ **getError**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[src/task/task.ts:83](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/task.ts#L83)
