# Class: Job<Output\>

[job/job](../modules/job_job).Job

State of a computation unit.

**`Description`**

Represents the state of some computation unit. The purpose of this class is to provide a way to check the state, results and error of a computation unit knowing only its id.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `unknown` |

## Table of contents

### Constructors

- [constructor](job_job.Job#constructor)

### Properties

- [id](job_job.Job#id)

### Methods

- [saveInitialState](job_job.Job#saveinitialstate)
- [saveState](job_job.Job#savestate)
- [fetchState](job_job.Job#fetchstate)
- [fetchResults](job_job.Job#fetchresults)
- [fetchError](job_job.Job#fetcherror)

## Constructors

### constructor

• **new Job**<`Output`\>(`id`, `jobStorage`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jobStorage` | [`JobStorage`](../interfaces/job_storage.JobStorage) |

#### Defined in

[src/job/job.ts:10](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/job/job.ts#L10)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/job/job.ts:11](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/job/job.ts#L11)

## Methods

### saveInitialState

▸ **saveInitialState**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/job/job.ts:15](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/job/job.ts#L15)

___

### saveState

▸ **saveState**(`state`, `results?`, `error?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`TaskState`](../enums/task_task.TaskState) |
| `results?` | `Output` |
| `error?` | `Error` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/job/job.ts:19](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/job/job.ts#L19)

___

### fetchState

▸ **fetchState**(): `Promise`<[`TaskState`](../enums/task_task.TaskState)\>

#### Returns

`Promise`<[`TaskState`](../enums/task_task.TaskState)\>

#### Defined in

[src/job/job.ts:31](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/job/job.ts#L31)

___

### fetchResults

▸ **fetchResults**(): `Promise`<`undefined` \| `Output`\>

#### Returns

`Promise`<`undefined` \| `Output`\>

#### Defined in

[src/job/job.ts:35](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/job/job.ts#L35)

___

### fetchError

▸ **fetchError**(): `Promise`<`undefined` \| `Error`\>

#### Returns

`Promise`<`undefined` \| `Error`\>

#### Defined in

[src/job/job.ts:39](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/job/job.ts#L39)
