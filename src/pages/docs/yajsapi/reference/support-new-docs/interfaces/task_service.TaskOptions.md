# Interface: TaskOptions

[task/service](../modules/task_service).TaskOptions

## Hierarchy

- `ActivityOptions`

  ↳ **`TaskOptions`**

## Table of contents

### Properties

- [maxParallelTasks](task_service.TaskOptions#maxparalleltasks)
- [taskRunningInterval](task_service.TaskOptions#taskrunninginterval)
- [activityStateCheckingInterval](task_service.TaskOptions#activitystatecheckinginterval)
- [activityPreparingTimeout](task_service.TaskOptions#activitypreparingtimeout)
- [taskTimeout](task_service.TaskOptions#tasktimeout)
- [logger](task_service.TaskOptions#logger)
- [storageProvider](task_service.TaskOptions#storageprovider)
- [yagnaOptions](task_service.TaskOptions#yagnaoptions)
- [activityRequestTimeout](task_service.TaskOptions#activityrequesttimeout)
- [activityExecuteTimeout](task_service.TaskOptions#activityexecutetimeout)
- [activityExeBatchResultsFetchInterval](task_service.TaskOptions#activityexebatchresultsfetchinterval)
- [eventTarget](task_service.TaskOptions#eventtarget)

## Properties

### maxParallelTasks

• `Optional` **maxParallelTasks**: `number`

Number of maximum parallel running task on one TaskExecutor instance

#### Defined in

[yajsapi/task/service.ts:13](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/service.ts#L13)

___

### taskRunningInterval

• `Optional` **taskRunningInterval**: `number`

#### Defined in

[yajsapi/task/service.ts:14](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/service.ts#L14)

___

### activityStateCheckingInterval

• `Optional` **activityStateCheckingInterval**: `number`

#### Defined in

[yajsapi/task/service.ts:15](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/service.ts#L15)

___

### activityPreparingTimeout

• `Optional` **activityPreparingTimeout**: `number`

#### Defined in

[yajsapi/task/service.ts:16](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/service.ts#L16)

___

### taskTimeout

• `Optional` **taskTimeout**: `number`

#### Defined in

[yajsapi/task/service.ts:17](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/service.ts#L17)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

#### Overrides

ActivityOptions.logger

#### Defined in

[yajsapi/task/service.ts:18](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/service.ts#L18)

___

### storageProvider

• `Optional` **storageProvider**: [`StorageProvider`](storage_provider.StorageProvider)

#### Defined in

[yajsapi/task/service.ts:19](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/service.ts#L19)

___

### yagnaOptions

• `Optional` **yagnaOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey?` | `string` | Yagna Api Key |
| `basePath?` | `string` | Yagna base path to Activity REST Api |

#### Inherited from

ActivityOptions.yagnaOptions

#### Defined in

[yajsapi/activity/activity.ts:33](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/activity/activity.ts#L33)

___

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Inherited from

ActivityOptions.activityRequestTimeout

#### Defined in

[yajsapi/activity/activity.ts:40](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/activity/activity.ts#L40)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Inherited from

ActivityOptions.activityExecuteTimeout

#### Defined in

[yajsapi/activity/activity.ts:42](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/activity/activity.ts#L42)

___

### activityExeBatchResultsFetchInterval

• `Optional` **activityExeBatchResultsFetchInterval**: `number`

interval for fetching batch results while polling

#### Inherited from

ActivityOptions.activityExeBatchResultsFetchInterval

#### Defined in

[yajsapi/activity/activity.ts:44](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/activity/activity.ts#L44)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

ActivityOptions.eventTarget

#### Defined in

[yajsapi/activity/activity.ts:48](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/activity/activity.ts#L48)