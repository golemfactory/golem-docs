[JavaScript API reference](../README) / [Exports](../modules) / [task/task](../modules/task_task) / Task

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
| `worker` | [`Worker`](../modules/task_work#worker)<`InputType`, `OutputType`\> | `undefined` |
| `data?` | `InputType` | `undefined` |
| `initWorker?` | [`Worker`](../modules/task_work#worker)<`undefined`\> | `undefined` |
| `maxTaskRetries` | `number` | `MAX_RETRIES` |

#### Defined in

[yajsapi/task/task.ts:24](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L24)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[yajsapi/task/task.ts:25](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L25)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[yajsapi/task/task.ts:32](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L32)

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

[yajsapi/task/task.ts:35](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L35)

___

### isQueueable

▸ **isQueueable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

QueueableTask.isQueueable

#### Defined in

[yajsapi/task/task.ts:45](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L45)

___

### isRetry

▸ **isRetry**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/task/task.ts:48](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L48)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/task/task.ts:52](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L52)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/task/task.ts:55](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L55)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/task/task.ts:58](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L58)

___

### isPending

▸ **isPending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/task/task.ts:61](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L61)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/task/task.ts:64](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L64)

___

### getResults

▸ **getResults**(): `undefined` \| `OutputType`

#### Returns

`undefined` \| `OutputType`

#### Defined in

[yajsapi/task/task.ts:67](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L67)

___

### getData

▸ **getData**(): `undefined` \| `InputType`

#### Returns

`undefined` \| `InputType`

#### Defined in

[yajsapi/task/task.ts:70](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L70)

___

### getWorker

▸ **getWorker**(): [`Worker`](../modules/task_work#worker)<`InputType`\>

#### Returns

[`Worker`](../modules/task_work#worker)<`InputType`\>

#### Defined in

[yajsapi/task/task.ts:73](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L73)

___

### getInitWorker

▸ **getInitWorker**(): `undefined` \| [`Worker`](../modules/task_work#worker)<`undefined`\>

#### Returns

`undefined` \| [`Worker`](../modules/task_work#worker)<`undefined`\>

#### Defined in

[yajsapi/task/task.ts:76](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L76)

___

### getRetriesCount

▸ **getRetriesCount**(): `number`

#### Returns

`number`

#### Defined in

[yajsapi/task/task.ts:79](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L79)

___

### getError

▸ **getError**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Defined in

[yajsapi/task/task.ts:82](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/task.ts#L82)