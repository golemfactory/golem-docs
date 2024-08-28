---
title: "Interface TaskSpecificOptions"
pageTitle: "Interface TaskSpecificOptions - Task API Reference"
description: "Explore the detailed API reference documentation for the Interface TaskSpecificOptions within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Interface: TaskSpecificOptions

[executor](../modules/executor).TaskSpecificOptions

## Table of contents

### Properties

- [maxParallelTasks](executor.TaskSpecificOptions#maxparalleltasks)
- [taskTimeout](executor.TaskSpecificOptions#tasktimeout)
- [maxTaskRetries](executor.TaskSpecificOptions#maxtaskretries)
- [taskStartupTimeout](executor.TaskSpecificOptions#taskstartuptimeout)
- [taskRetryOnTimeout](executor.TaskSpecificOptions#taskretryontimeout)
- [setup](executor.TaskSpecificOptions#setup)
- [teardown](executor.TaskSpecificOptions#teardown)

## Properties

### maxParallelTasks

• `Optional` **maxParallelTasks**: `number`

Number of maximum parallel running task on one TaskExecutor instance. Default is 5

#### Defined in

[executor.ts:29](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L29)

___

### taskTimeout

• `Optional` **taskTimeout**: `number`

Timeout for execute one task in ms. Default is 300_000 (5 minutes).

#### Defined in

[executor.ts:32](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L32)

___

### maxTaskRetries

• `Optional` **maxTaskRetries**: `number`

The maximum number of retries when the job failed on the provider

#### Defined in

[executor.ts:35](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L35)

___

### taskStartupTimeout

• `Optional` **taskStartupTimeout**: `number`

Timeout for waiting for signing an agreement with an available provider from the moment the task initiated.
This parameter is expressed in ms.
If it is not possible to sign an agreement within the specified time,
the task will stop with an error and will be queued to be retried if the `maxTaskRetries` parameter > 0

#### Defined in

[executor.ts:43](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L43)

___

### taskRetryOnTimeout

• `Optional` **taskRetryOnTimeout**: `boolean`

Set to false by default. If enabled, timeouts will be retried in case of timeout errors.

#### Defined in

[executor.ts:48](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L48)

___

### setup

• `Optional` **setup**: `LifecycleFunction`

A setup function that will be run when an exe-unit is ready.
This is the perfect place to run setup function that need to be run only once per exe-unit,
for example uploading files that will be used by all tasks in the exe-unit.

**`Example`**

```ts
const uploadFile = async (exe) => exe.uploadFile("./file1.txt", "/file1.txt");

const executor = await TaskExecutor.create({
  demand: {
    workload: {
      imageTag: "golem/alpine:latest",
    },
  },
  task: {
    setup: uploadFile,
  }
});
```

#### Defined in

[executor.ts:71](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L71)

___

### teardown

• `Optional` **teardown**: `LifecycleFunction`

A teardown function that will be run before the exe unit is destroyed.
This is the perfect place to run teardown function that need to be run only once per
exe-unit at the end of the entire work, for example cleaning of the working environment.

**`Example`**

```ts
const removeFile = async (exe) => exe.run("rm ./file.txt");

const executor = await TaskExecutor.create({
  demand: {
    workload: {
      imageTag: "golem/alpine:latest",
    },
  },
  task: {
    teardown: removeFile,
  }
});
```

#### Defined in

[executor.ts:94](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L94)
