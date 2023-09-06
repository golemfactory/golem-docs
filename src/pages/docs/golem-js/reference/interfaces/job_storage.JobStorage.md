# Interface: JobStorage

[job/storage](../modules/job_storage).JobStorage

## Implemented by

- [`InMemoryJobStorage`](../classes/job_storage.InMemoryJobStorage)

## Table of contents

### Methods

- [setJob](job_storage.JobStorage#setjob)
- [getJob](job_storage.JobStorage#getjob)

## Methods

### setJob

▸ **setJob**(`jobId`, `state`, `results?`, `error?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jobId` | `string` |
| `state` | [`TaskState`](../enums/task_task.TaskState) |
| `results?` | `unknown` |
| `error?` | `Error` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/job/storage.ts:10](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/job/storage.ts#L10)

___

### getJob

▸ **getJob**(`jobId`): `Promise`<``null`` \| [`SerializedJob`](../modules/job_storage#serializedjob)<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jobId` | `string` |

#### Returns

`Promise`<``null`` \| [`SerializedJob`](../modules/job_storage#serializedjob)<`unknown`\>\>

#### Defined in

[src/job/storage.ts:11](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/job/storage.ts#L11)
