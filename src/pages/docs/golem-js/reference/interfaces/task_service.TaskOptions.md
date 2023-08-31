# Interface: TaskOptions

[task/service](../modules/task_service).TaskOptions

## Hierarchy

- [`ActivityOptions`](activity_activity.ActivityOptions)

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

[src/task/service.ts:15](https://github.com/golemfactory/golem-js/blob/f1546de/src/task/service.ts#L15)

___

### taskRunningInterval

• `Optional` **taskRunningInterval**: `number`

#### Defined in

[src/task/service.ts:16](https://github.com/golemfactory/golem-js/blob/f1546de/src/task/service.ts#L16)

___

### activityStateCheckingInterval

• `Optional` **activityStateCheckingInterval**: `number`

#### Defined in

[src/task/service.ts:17](https://github.com/golemfactory/golem-js/blob/f1546de/src/task/service.ts#L17)

___

### activityPreparingTimeout

• `Optional` **activityPreparingTimeout**: `number`

#### Defined in

[src/task/service.ts:18](https://github.com/golemfactory/golem-js/blob/f1546de/src/task/service.ts#L18)

___

### taskTimeout

• `Optional` **taskTimeout**: `number`

#### Defined in

[src/task/service.ts:19](https://github.com/golemfactory/golem-js/blob/f1546de/src/task/service.ts#L19)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Overrides

[ActivityOptions](activity_activity.ActivityOptions).[logger](activity_activity.ActivityOptions#logger)

#### Defined in

[src/task/service.ts:20](https://github.com/golemfactory/golem-js/blob/f1546de/src/task/service.ts#L20)

___

### storageProvider

• `Optional` **storageProvider**: [`StorageProvider`](storage_provider.StorageProvider)

#### Defined in

[src/task/service.ts:21](https://github.com/golemfactory/golem-js/blob/f1546de/src/task/service.ts#L21)

___

### yagnaOptions

• `Optional` **yagnaOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey?` | `string` | Yagna Api Key |
| `basePath?` | `string` | Yagna base path to Activity REST Api |

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[yagnaOptions](activity_activity.ActivityOptions#yagnaoptions)

#### Defined in

[src/activity/activity.ts:30](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/activity.ts#L30)

___

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[activityRequestTimeout](activity_activity.ActivityOptions#activityrequesttimeout)

#### Defined in

[src/activity/activity.ts:37](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/activity.ts#L37)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[activityExecuteTimeout](activity_activity.ActivityOptions#activityexecutetimeout)

#### Defined in

[src/activity/activity.ts:39](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/activity.ts#L39)

___

### activityExeBatchResultsFetchInterval

• `Optional` **activityExeBatchResultsFetchInterval**: `number`

interval for fetching batch results while polling

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[activityExeBatchResultsFetchInterval](activity_activity.ActivityOptions#activityexebatchresultsfetchinterval)

#### Defined in

[src/activity/activity.ts:41](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/activity.ts#L41)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[eventTarget](activity_activity.ActivityOptions#eventtarget)

#### Defined in

[src/activity/activity.ts:45](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/activity.ts#L45)
