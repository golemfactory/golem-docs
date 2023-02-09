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
- [isFinished](task_task.Task.md#isfinished)
- [isRejected](task_task.Task.md#isrejected)
- [isPending](task_task.Task.md#ispending)
- [isNew](task_task.Task.md#isnew)
- [getResults](task_task.Task.md#getresults)
- [getData](task_task.Task.md#getdata)
- [getWorker](task_task.Task.md#getworker)
- [getInitWorker](task_task.Task.md#getinitworker)
- [getRetriesCount](task_task.Task.md#getretriescount)

## Constructors

### constructor

• **new Task**<`InputType`, `OutputType`\>(`id`, `worker`, `data?`, `initWorker?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputType` | `unknown` |
| `OutputType` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `worker` | [`Worker`](../modules/task_work.md#worker)<`InputType`, `OutputType`\> |
| `data?` | `InputType` |
| `initWorker?` | [`Worker`](../modules/task_work.md#worker)<`undefined`, `unknown`\> |

#### Defined in

[yajsapi/task/task.ts:23](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L23)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[yajsapi/task/task.ts:24](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L24)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[yajsapi/task/task.ts:30](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L30)

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

[yajsapi/task/task.ts:33](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L33)

___

### isQueueable

▸ **isQueueable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

QueueableTask.isQueueable

#### Defined in

[yajsapi/task/task.ts:42](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L42)

___

### isRetry

▸ **isRetry**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/task/task.ts:45](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L45)

___

### isFinished

▸ **isFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/task/task.ts:48](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L48)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/task/task.ts:51](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L51)

___

### isPending

▸ **isPending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/task/task.ts:54](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L54)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/task/task.ts:57](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L57)

___

### getResults

▸ **getResults**(): `undefined` \| `OutputType`

#### Returns

`undefined` \| `OutputType`

#### Defined in

[yajsapi/task/task.ts:60](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L60)

___

### getData

▸ **getData**(): `undefined` \| `InputType`

#### Returns

`undefined` \| `InputType`

#### Defined in

[yajsapi/task/task.ts:63](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L63)

___

### getWorker

▸ **getWorker**(): [`Worker`](../modules/task_work.md#worker)<`InputType`, `unknown`\>

#### Returns

[`Worker`](../modules/task_work.md#worker)<`InputType`, `unknown`\>

#### Defined in

[yajsapi/task/task.ts:66](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L66)

___

### getInitWorker

▸ **getInitWorker**(): `undefined` \| [`Worker`](../modules/task_work.md#worker)<`undefined`, `unknown`\>

#### Returns

`undefined` \| [`Worker`](../modules/task_work.md#worker)<`undefined`, `unknown`\>

#### Defined in

[yajsapi/task/task.ts:69](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L69)

___

### getRetriesCount

▸ **getRetriesCount**(): `number`

#### Returns

`number`

#### Defined in

[yajsapi/task/task.ts:72](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/task/task.ts#L72)
