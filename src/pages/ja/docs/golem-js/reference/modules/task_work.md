---
title: "Module task/work"
pageTitle: "Module task/work - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module task/work within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: task/work

## Table of contents

### Classes

- [WorkContext](../classes/task_work.WorkContext)

### Interfaces

- [WorkOptions](../interfaces/task_work.WorkOptions)
- [CommandOptions](../interfaces/task_work.CommandOptions)

### Type Aliases

- [Worker](task_work#worker)

## Type Aliases

### Worker

Ƭ **Worker**\<`OutputType`\>: (`ctx`: [`WorkContext`](../classes/task_work.WorkContext)) => `Promise`\<`OutputType`\>

#### Type parameters

| Name |
| :------ |
| `OutputType` |

#### Type declaration

▸ (`ctx`): `Promise`\<`OutputType`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`WorkContext`](../classes/task_work.WorkContext) |

##### Returns

`Promise`\<`OutputType`\>

#### Defined in

[src/task/work.ts:24](https://github.com/golemfactory/golem-js/blob/4182943/src/task/work.ts#L24)
