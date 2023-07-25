# Interface: TaskOptions

[task/service](../modules/task_service.md).TaskOptions

## Hierarchy

- [`ActivityOptions`](activity_activity.ActivityOptions.md)

  ↳ **`TaskOptions`**

## Table of contents

### Properties

- [maxParallelTasks](task_service.TaskOptions.md#maxparalleltasks)
- [taskRunningInterval](task_service.TaskOptions.md#taskrunninginterval)
- [activityStateCheckingInterval](task_service.TaskOptions.md#activitystatecheckinginterval)
- [taskTimeout](task_service.TaskOptions.md#tasktimeout)
- [logger](task_service.TaskOptions.md#logger)
- [storageProvider](task_service.TaskOptions.md#storageprovider)
- [yagnaOptions](task_service.TaskOptions.md#yagnaoptions)
- [activityRequestTimeout](task_service.TaskOptions.md#activityrequesttimeout)
- [activityExecuteTimeout](task_service.TaskOptions.md#activityexecutetimeout)
- [activityExeBatchResultsFetchInterval](task_service.TaskOptions.md#activityexebatchresultsfetchinterval)
- [eventTarget](task_service.TaskOptions.md#eventtarget)

## Properties

### maxParallelTasks

• `Optional` **maxParallelTasks**: `number`

Number of maximum parallel running task on one TaskExecutor instance

#### Defined in

[yajsapi/task/service.ts:13](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/service.ts#L13)

___

### taskRunningInterval

• `Optional` **taskRunningInterval**: `number`

#### Defined in

[yajsapi/task/service.ts:14](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/service.ts#L14)

___

### activityStateCheckingInterval

• `Optional` **activityStateCheckingInterval**: `number`

#### Defined in

[yajsapi/task/service.ts:15](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/service.ts#L15)

___

### taskTimeout

• `Optional` **taskTimeout**: `number`

#### Defined in

[yajsapi/task/service.ts:16](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/service.ts#L16)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger.Logger.md)

Logger module

#### Overrides

[ActivityOptions](activity_activity.ActivityOptions.md).[logger](activity_activity.ActivityOptions.md#logger)

#### Defined in

[yajsapi/task/service.ts:17](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/service.ts#L17)

___

### storageProvider

• `Optional` **storageProvider**: [`StorageProvider`](storage_provider.StorageProvider.md)

#### Defined in

[yajsapi/task/service.ts:18](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/service.ts#L18)

___

### yagnaOptions

• `Optional` **yagnaOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey?` | `string` | Yagna Api Key |
| `basePath?` | `string` | Yagna base path to Activity REST Api |

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions.md).[yagnaOptions](activity_activity.ActivityOptions.md#yagnaoptions)

#### Defined in

[yajsapi/activity/activity.ts:33](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/activity.ts#L33)

___

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions.md).[activityRequestTimeout](activity_activity.ActivityOptions.md#activityrequesttimeout)

#### Defined in

[yajsapi/activity/activity.ts:40](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/activity.ts#L40)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions.md).[activityExecuteTimeout](activity_activity.ActivityOptions.md#activityexecutetimeout)

#### Defined in

[yajsapi/activity/activity.ts:42](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/activity.ts#L42)

___

### activityExeBatchResultsFetchInterval

• `Optional` **activityExeBatchResultsFetchInterval**: `number`

interval for fetching batch results while polling

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions.md).[activityExeBatchResultsFetchInterval](activity_activity.ActivityOptions.md#activityexebatchresultsfetchinterval)

#### Defined in

[yajsapi/activity/activity.ts:44](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/activity.ts#L44)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions.md).[eventTarget](activity_activity.ActivityOptions.md#eventtarget)

#### Defined in

[yajsapi/activity/activity.ts:48](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/activity.ts#L48)
