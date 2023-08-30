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
- [activityRequestTimeout](task_service.TaskOptions#activityrequesttimeout)
- [activityExecuteTimeout](task_service.TaskOptions#activityexecutetimeout)
- [activityExeBatchResultsFetchInterval](task_service.TaskOptions#activityexebatchresultsfetchinterval)
- [eventTarget](task_service.TaskOptions#eventtarget)

## Properties

### maxParallelTasks

• `Optional` **maxParallelTasks**: `number`

Number of maximum parallel running task on one TaskExecutor instance

#### Defined in

[src/task/service.ts:15](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L15)

---

### taskRunningInterval

• `Optional` **taskRunningInterval**: `number`

#### Defined in

[src/task/service.ts:16](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L16)

---

### activityStateCheckingInterval

• `Optional` **activityStateCheckingInterval**: `number`

#### Defined in

[src/task/service.ts:17](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L17)

---

### activityPreparingTimeout

• `Optional` **activityPreparingTimeout**: `number`

#### Defined in

[src/task/service.ts:18](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L18)

---

### taskTimeout

• `Optional` **taskTimeout**: `number`

#### Defined in

[src/task/service.ts:19](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L19)

---

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Overrides

[ActivityOptions](activity_activity.ActivityOptions).[logger](activity_activity.ActivityOptions#logger)

#### Defined in

[src/task/service.ts:20](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L20)

---

### storageProvider

• `Optional` **storageProvider**: [`StorageProvider`](storage_provider.StorageProvider)

#### Defined in

[src/task/service.ts:21](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/service.ts#L21)

---

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[activityRequestTimeout](activity_activity.ActivityOptions#activityrequesttimeout)

#### Defined in

[src/activity/activity.ts:32](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L32)

---

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[activityExecuteTimeout](activity_activity.ActivityOptions#activityexecutetimeout)

#### Defined in

[src/activity/activity.ts:34](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L34)

---

### activityExeBatchResultsFetchInterval

• `Optional` **activityExeBatchResultsFetchInterval**: `number`

interval for fetching batch results while polling

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[activityExeBatchResultsFetchInterval](activity_activity.ActivityOptions#activityexebatchresultsfetchinterval)

#### Defined in

[src/activity/activity.ts:36](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L36)

---

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[eventTarget](activity_activity.ActivityOptions#eventtarget)

#### Defined in

[src/activity/activity.ts:40](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L40)
