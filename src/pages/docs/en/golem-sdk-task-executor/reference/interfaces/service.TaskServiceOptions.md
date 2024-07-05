---
title: "Interface TaskServiceOptions"
pageTitle: "Interface TaskServiceOptions - Task API Reference"
description: "Explore the detailed API reference documentation for the Interface TaskServiceOptions within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Interface: TaskServiceOptions

[service](../modules/service).TaskServiceOptions

## Hierarchy

- `ActivityOptions`

  ↳ **`TaskServiceOptions`**

## Table of contents

### Properties

- [maxParallelTasks](service.TaskServiceOptions#maxparalleltasks)
- [taskRunningInterval](service.TaskServiceOptions#taskrunninginterval)
- [activityStateCheckingInterval](service.TaskServiceOptions#activitystatecheckinginterval)
- [activityPreparingTimeout](service.TaskServiceOptions#activitypreparingtimeout)
- [taskTimeout](service.TaskServiceOptions#tasktimeout)
- [logger](service.TaskServiceOptions#logger)
- [storageProvider](service.TaskServiceOptions#storageprovider)

## Properties

### maxParallelTasks

• `Optional` **maxParallelTasks**: `number`

Number of maximum parallel running task on one TaskExecutor instance

#### Defined in

[src/service.ts:28](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/service.ts#L28)

___

### taskRunningInterval

• `Optional` **taskRunningInterval**: `number`

#### Defined in

[src/service.ts:29](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/service.ts#L29)

___

### activityStateCheckingInterval

• `Optional` **activityStateCheckingInterval**: `number`

#### Defined in

[src/service.ts:30](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/service.ts#L30)

___

### activityPreparingTimeout

• `Optional` **activityPreparingTimeout**: `number`

#### Defined in

[src/service.ts:31](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/service.ts#L31)

___

### taskTimeout

• `Optional` **taskTimeout**: `number`

#### Defined in

[src/service.ts:32](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/service.ts#L32)

___

### logger

• `Optional` **logger**: `Logger`

#### Overrides

ActivityOptions.logger

#### Defined in

[src/service.ts:33](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/service.ts#L33)

___

### storageProvider

• `Optional` **storageProvider**: `StorageProvider`

#### Defined in

[src/service.ts:34](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/service.ts#L34)
