# Interface: WorkOptions

[task/work](../modules/task_work).WorkOptions

## Table of contents

### Properties

- [activityPreparingTimeout](task_work.WorkOptions#activitypreparingtimeout)
- [activityStateCheckingInterval](task_work.WorkOptions#activitystatecheckinginterval)
- [provider](task_work.WorkOptions#provider)
- [storageProvider](task_work.WorkOptions#storageprovider)
- [networkNode](task_work.WorkOptions#networknode)
- [logger](task_work.WorkOptions#logger)
- [initWorker](task_work.WorkOptions#initworker)
- [isRunning](task_work.WorkOptions#isrunning)

## Properties

### activityPreparingTimeout

• `Optional` **activityPreparingTimeout**: `number`

#### Defined in

[yajsapi/task/work.ts:20](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/work.ts#L20)

___

### activityStateCheckingInterval

• `Optional` **activityStateCheckingInterval**: `number`

#### Defined in

[yajsapi/task/work.ts:21](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/work.ts#L21)

___

### provider

• `Optional` **provider**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `id` | `string` |
| `networkConfig?` | `object` |

#### Defined in

[yajsapi/task/work.ts:22](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/work.ts#L22)

___

### storageProvider

• `Optional` **storageProvider**: [`StorageProvider`](storage_provider.StorageProvider)

#### Defined in

[yajsapi/task/work.ts:23](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/work.ts#L23)

___

### networkNode

• `Optional` **networkNode**: [`NetworkNode`](../classes/network_node.NetworkNode)

#### Defined in

[yajsapi/task/work.ts:24](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/work.ts#L24)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

#### Defined in

[yajsapi/task/work.ts:25](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/work.ts#L25)

___

### initWorker

• `Optional` **initWorker**: [`Worker`](../modules/task_work#worker)<`undefined`, `unknown`\>

#### Defined in

[yajsapi/task/work.ts:26](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/work.ts#L26)

___

### isRunning

• **isRunning**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[yajsapi/task/work.ts:27](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/work.ts#L27)
