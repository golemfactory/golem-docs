---
title: "Module task"
pageTitle: "Module task - Task API Reference"
description: "Explore the detailed API reference documentation for the Module task within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Module: task

## Table of contents

### Enumerations

- [TaskState](../enums/task.TaskState)

### Classes

- [Task](../classes/task.Task)

### Interfaces

- [ProviderInfo](../interfaces/task.ProviderInfo)

### Type Aliases

- [TaskOptions](task#taskoptions)
- [TaskDetails](task#taskdetails)

## Type Aliases

### TaskOptions

Ƭ **TaskOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxRetries?` | `number` | maximum number of retries if task failed due to provider reason, default = 5 |
| `timeout?` | `number` | timeout in ms for task execution, including retries, default = 300_000 (5min) |
| `activityReadySetupFunctions?` | `Worker`<`unknown`\>[] | array of setup functions to run on each activity |

#### Defined in

[src/task.ts:19](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L19)

___

### TaskDetails

Ƭ **TaskDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `retriesCount` | `number` |
| `agreementId?` | `string` |
| `activityId?` | `string` |
| `provider?` | [`ProviderInfo`](../interfaces/task.ProviderInfo) |
| `error?` | `Error` |

#### Defined in

[src/task.ts:28](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/task.ts#L28)
