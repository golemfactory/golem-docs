# Class: Task<InputType, OutputType\>

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

• **new Task**<`InputType`, `OutputType`\>(`id`, `worker`, `data?`, `initWorker?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputType` | `unknown` |
| `OutputType` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `worker` | [`Worker`](../modules/task_work#worker)<`InputType`, `OutputType`\> |
| `data?` | `InputType` |
| `initWorker?` | [`Worker`](../modules/task_work#worker)<`undefined`\> |
| `options?` | [`TaskOptions`](../modules/task_task#taskoptions) |

#### Defined in

[src/task/task.ts:38](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L38)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/task/task.ts:39](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L39)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/task/task.ts:49](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L49)

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

[src/task/task.ts:53](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L53)

___

### isQueueable

▸ **isQueueable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

QueueableTask.isQueueable

#### Defined in

[src/task/task.ts:64](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L64)

___

### isRetry

▸ **isRetry**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:67](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L67)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:71](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L71)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:74](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L74)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:77](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L77)

___

### isPending

▸ **isPending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:80](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L80)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/task/task.ts:83](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L83)

___

### getResults

▸ **getResults**(): `undefined` \| `OutputType`

#### Returns

`undefined` \| `OutputType`

#### Defined in

[src/task/task.ts:86](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L86)

___

### getData

▸ **getData**(): `undefined` \| `InputType`

#### Returns

`undefined` \| `InputType`

#### Defined in

[src/task/task.ts:89](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L89)

___

### getWorker

▸ **getWorker**(): [`Worker`](../modules/task_work#worker)<`InputType`\>

#### Returns

[`Worker`](../modules/task_work#worker)<`InputType`\>

#### Defined in

[src/task/task.ts:92](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L92)

___

### getInitWorker

▸ **getInitWorker**(): `undefined` \| [`Worker`](../modules/task_work#worker)<`undefined`\>

#### Returns

`undefined` \| [`Worker`](../modules/task_work#worker)<`undefined`\>

#### Defined in

[src/task/task.ts:95](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L95)

___

### getRetriesCount

▸ **getRetriesCount**(): `number`

#### Returns

`number`

#### Defined in

[src/task/task.ts:98](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L98)

___

### getError

▸ **getError**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[src/task/task.ts:101](https://github.com/golemfactory/golem-js/blob/491c0c9/src/task/task.ts#L101)
