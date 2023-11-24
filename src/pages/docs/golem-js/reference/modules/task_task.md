---
title: Module task/task
pageTitle: Module task/task - golem-js API Reference
description: Explore the detailed API reference documentation for the Module task/task within the golem-js SDK for the Golem Network.
type: JS API Reference
---
# Module: task/task

## Table of contents

### Enumerations

- [TaskState](../enums/task_task.TaskState)

### Classes

- [Task](../classes/task_task.Task)

### Type Aliases

- [TaskOptions](task_task#taskoptions)

## Type Aliases

### TaskOptions

Ƭ **TaskOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxRetries?` | `number` | maximum number of retries if task failed due to provider reason, default = 5 |
| `timeout?` | `number` | timeout in ms for task execution, including retries, default = 300_000 (5min) |
| `activityReadySetupFunctions?` | [`Worker`](task_work#worker)\<`unknown`\>[] | array of setup functions to run on each activity |

#### Defined in

[src/task/task.ts:12](https://github.com/golemfactory/golem-js/blob/8487362/src/task/task.ts#L12)
