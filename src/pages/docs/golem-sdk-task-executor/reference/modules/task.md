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

- [TaskFunction](task#taskfunction)
- [TaskOptions](task#taskoptions)
- [TaskDetails](task#taskdetails)

## Type Aliases

### TaskFunction

Ƭ **TaskFunction**\<`OutputType`\>: (`exe`: `ExeUnit`) => `Promise`\<`OutputType`\>

#### Type parameters

| Name |
| :------ |
| `OutputType` |

#### Type declaration

▸ (`exe`): `Promise`\<`OutputType`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `exe` | `ExeUnit` |

##### Returns

`Promise`\<`OutputType`\>

#### Defined in

[task.ts:10](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L10)

___

### TaskOptions

Ƭ **TaskOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxRetries?` | `number` | maximum number of retries if task failed due to provider reason, default = 5 |
| `retryOnTimeout?` | `boolean` | Opt-in for retries of the tasks when the [timeout](task#timeout) [startupTimeout](task#startuptimeout) are reached **`Default`** ```ts false ``` |
| `timeout?` | `number` | timeout in ms for task execution, measured for one attempt from start to stop, default = 300_000 (5min) |
| `startupTimeout?` | `number` | timeout in ms for task startup, measured from initialization to start, default = 120_000 (2min) |

#### Defined in

[task.ts:21](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L21)

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

[task.ts:39](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/task.ts#L39)
