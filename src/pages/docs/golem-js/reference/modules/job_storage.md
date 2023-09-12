---
title: "Module job/storage - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module job/storage within the golem-js SDK for the Golem Network."
type: "reference"
---
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

[src/job/storage.ts:3](https://github.com/golemfactory/golem-js/blob/0448b6b/src/job/storage.ts#L3)
