---
title: "Interface TaskServiceOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface TaskServiceOptions within the golem-js SDK for the Golem Network."
type: "reference"
---
# Interface: TaskServiceOptions

[task/service](../modules/task_service).TaskServiceOptions

## Hierarchy

- [`ActivityOptions`](activity_activity.ActivityOptions)

  ↳ **`TaskServiceOptions`**

## Table of contents

### Properties

- [maxParallelTasks](task_service.TaskServiceOptions#maxparalleltasks)
- [taskRunningInterval](task_service.TaskServiceOptions#taskrunninginterval)
- [activityStateCheckingInterval](task_service.TaskServiceOptions#activitystatecheckinginterval)
- [activityPreparingTimeout](task_service.TaskServiceOptions#activitypreparingtimeout)
- [taskTimeout](task_service.TaskServiceOptions#tasktimeout)
- [logger](task_service.TaskServiceOptions#logger)
- [storageProvider](task_service.TaskServiceOptions#storageprovider)
- [activityRequestTimeout](task_service.TaskServiceOptions#activityrequesttimeout)
- [activityExecuteTimeout](task_service.TaskServiceOptions#activityexecutetimeout)
- [activityExeBatchResultPollIntervalSeconds](task_service.TaskServiceOptions#activityexebatchresultpollintervalseconds)
- [eventTarget](task_service.TaskServiceOptions#eventtarget)

## Properties

### maxParallelTasks

• `Optional` **maxParallelTasks**: `number`

Number of maximum parallel running task on one TaskExecutor instance

#### Defined in

[src/task/service.ts:15](https://github.com/golemfactory/golem-js/blob/cd3b295/src/task/service.ts#L15)

___

### taskRunningInterval

• `Optional` **taskRunningInterval**: `number`

#### Defined in

[src/task/service.ts:16](https://github.com/golemfactory/golem-js/blob/cd3b295/src/task/service.ts#L16)

___

### activityStateCheckingInterval

• `Optional` **activityStateCheckingInterval**: `number`

#### Defined in

[src/task/service.ts:17](https://github.com/golemfactory/golem-js/blob/cd3b295/src/task/service.ts#L17)

___

### activityPreparingTimeout

• `Optional` **activityPreparingTimeout**: `number`

#### Defined in

[src/task/service.ts:18](https://github.com/golemfactory/golem-js/blob/cd3b295/src/task/service.ts#L18)

___

### taskTimeout

• `Optional` **taskTimeout**: `number`

#### Defined in

[src/task/service.ts:19](https://github.com/golemfactory/golem-js/blob/cd3b295/src/task/service.ts#L19)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Overrides

[ActivityOptions](activity_activity.ActivityOptions).[logger](activity_activity.ActivityOptions#logger)

#### Defined in

[src/task/service.ts:20](https://github.com/golemfactory/golem-js/blob/cd3b295/src/task/service.ts#L20)

___

### storageProvider

• `Optional` **storageProvider**: [`StorageProvider`](storage_provider.StorageProvider)

#### Defined in

[src/task/service.ts:21](https://github.com/golemfactory/golem-js/blob/cd3b295/src/task/service.ts#L21)

___

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[activityRequestTimeout](activity_activity.ActivityOptions#activityrequesttimeout)

#### Defined in

[src/activity/activity.ts:27](https://github.com/golemfactory/golem-js/blob/cd3b295/src/activity/activity.ts#L27)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[activityExecuteTimeout](activity_activity.ActivityOptions#activityexecutetimeout)

#### Defined in

[src/activity/activity.ts:29](https://github.com/golemfactory/golem-js/blob/cd3b295/src/activity/activity.ts#L29)

___

### activityExeBatchResultPollIntervalSeconds

• `Optional` **activityExeBatchResultPollIntervalSeconds**: `number`

interval for fetching batch results while polling

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[activityExeBatchResultPollIntervalSeconds](activity_activity.ActivityOptions#activityexebatchresultpollintervalseconds)

#### Defined in

[src/activity/activity.ts:31](https://github.com/golemfactory/golem-js/blob/cd3b295/src/activity/activity.ts#L31)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

[ActivityOptions](activity_activity.ActivityOptions).[eventTarget](activity_activity.ActivityOptions#eventtarget)

#### Defined in

[src/activity/activity.ts:35](https://github.com/golemfactory/golem-js/blob/cd3b295/src/activity/activity.ts#L35)
