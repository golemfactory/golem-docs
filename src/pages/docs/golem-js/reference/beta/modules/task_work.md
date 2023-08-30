# Module: task/work

## Table of contents

### Classes

- [WorkContext](../classes/task_work.WorkContext.md)

### Interfaces

- [WorkOptions](../interfaces/task_work.WorkOptions.md)

### Type Aliases

- [Worker](task_work.md#worker)

## Type Aliases

### Worker

Ƭ **Worker**<`InputType`, `OutputType`\>: (`ctx`: [`WorkContext`](../classes/task_work.WorkContext.md), `data?`: `InputType`) => `Promise`<`OutputType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputType` | `unknown` |
| `OutputType` | `unknown` |

#### Type declaration

▸ (`ctx`, `data?`): `Promise`<`OutputType`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`WorkContext`](../classes/task_work.WorkContext.md) |
| `data?` | `InputType` |

##### Returns

`Promise`<`OutputType`\>

#### Defined in

[src/task/work.ts:19](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L19)
