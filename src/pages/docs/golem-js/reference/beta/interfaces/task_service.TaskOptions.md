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
- [activityPreparingTimeout](task_service.TaskOptions.md#activitypreparingtimeout)
- [taskTimeout](task_service.TaskOptions.md#tasktimeout)
- [logger](task_service.TaskOptions.md#logger)
- [storageProvider](task_service.TaskOptions.md#storageprovider)
- [activityRequestTimeout](task_service.TaskOptions.md#activityrequesttimeout)
- [activityExecuteTimeout](task_service.TaskOptions.md#activityexecutetimeout)
- [activityExeBatchResultsFetchInterval](task_service.TaskOptions.md#activityexebatchresultsfetchinterval)
- [eventTarget](task_service.TaskOptions.md#eventtarget)

## Properties

### maxParallelTasks

• `Optional` **maxParallelTasks**: `number`

Number of maximum parallel running task on one TaskExecutor instance

#### Defined in

[src/task/service.ts:15](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L15)

___

### taskRunningInterval

• `Optional` **taskRunningInterval**: `number`

#### Defined in

[src/task/service.ts:16](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L16)

___

### activityStateCheckingInterval

• `Optional` **activityStateCheckingInterval**: `number`

#### Defined in

[src/task/service.ts:17](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L17)

___

### activityPreparingTimeout

• `Optional` **activityPreparingTimeout**: `number`

#### Defined in

[src/task/service.ts:18](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L18)

___

### taskTimeout

• `Optional` **taskTimeout**: `number`

#### Defined in

[src/task/service.ts:19](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L19)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger.md)

Logger module

#### Overrides

[ActivityOptions](activity_activity.ActivityOptions.md).[logger](activity_activity.ActivityOptions.md#logger)

#### Defined in

[src/task/service.ts:20](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L20)

___

### storageProvider

• `Optional` **storageProvider**: [`StorageProvider`](storage_provider.StorageProvider.md)

#### Defined in

[src/task/service.ts:21](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L21)

___

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions.md).[activityRequestTimeout](activity_activity.ActivityOptions.md#activityrequesttimeout)

#### Defined in

[src/activity/activity.ts:32](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L32)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions.md).[activityExecuteTimeout](activity_activity.ActivityOptions.md#activityexecutetimeout)

#### Defined in

[src/activity/activity.ts:34](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L34)

___

### activityExeBatchResultsFetchInterval

• `Optional` **activityExeBatchResultsFetchInterval**: `number`

interval for fetching batch results while polling

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions.md).[activityExeBatchResultsFetchInterval](activity_activity.ActivityOptions.md#activityexebatchresultsfetchinterval)

#### Defined in

[src/activity/activity.ts:36](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L36)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions.md).[eventTarget](activity_activity.ActivityOptions.md#eventtarget)

#### Defined in

[src/activity/activity.ts:40](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L40)
