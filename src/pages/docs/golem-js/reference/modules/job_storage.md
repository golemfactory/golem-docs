# Module: job/storage

## Table of contents

### Classes

- [InMemoryJobStorage](../classes/job_storage.InMemoryJobStorage)

### Interfaces

- [JobStorage](../interfaces/job_storage.JobStorage)

### Type Aliases

- [SerializedJob](job_storage#serializedjob)

## Type Aliases

### SerializedJob

Ƭ **SerializedJob**<`OutputType`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OutputType` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `state` | [`TaskState`](../enums/task_task.TaskState) |
| `results?` | `OutputType` |
| `error?` | `string` |

#### Defined in

[src/job/storage.ts:3](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/job/storage.ts#L3)
