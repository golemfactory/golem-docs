---
title: "Class InMemoryJobStorage - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class InMemoryJobStorage within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: InMemoryJobStorage

[job/storage](../modules/job_storage).InMemoryJobStorage

## Implements

- [`JobStorage`](../interfaces/job_storage.JobStorage)

## Table of contents

### Constructors

- [constructor](job_storage.InMemoryJobStorage#constructor)

### Methods

- [setJob](job_storage.InMemoryJobStorage#setjob)
- [getJob](job_storage.InMemoryJobStorage#getjob)

## Constructors

### constructor

• **new InMemoryJobStorage**(): [`InMemoryJobStorage`](job_storage.InMemoryJobStorage)

#### Returns

[`InMemoryJobStorage`](job_storage.InMemoryJobStorage)

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

#### Implementation of

[JobStorage](../interfaces/job_storage.JobStorage).[setJob](../interfaces/job_storage.JobStorage#setjob)

#### Defined in

[src/job/storage.ts:17](https://github.com/golemfactory/golem-js/blob/00d03ae/src/job/storage.ts#L17)

___

### getJob

▸ **getJob**(`jobId`): `Promise`<``null`` \| [`SerializedJob`](../modules/job_storage#serializedjob)<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jobId` | `string` |

#### Returns

`Promise`<``null`` \| [`SerializedJob`](../modules/job_storage#serializedjob)<`unknown`\>\>

#### Implementation of

[JobStorage](../interfaces/job_storage.JobStorage).[getJob](../interfaces/job_storage.JobStorage#getjob)

#### Defined in

[src/job/storage.ts:21](https://github.com/golemfactory/golem-js/blob/00d03ae/src/job/storage.ts#L21)
