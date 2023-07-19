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

Ƭ **Worker**<`InputType`, `OutputType`\>: (`ctx`: [`WorkContext`](../classes/task_work.WorkContext.md), `data?`: `InputType`) => `Promise`<`OutputType` \| `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputType` | `unknown` |
| `OutputType` | `unknown` |

#### Type declaration

▸ (`ctx`, `data?`): `Promise`<`OutputType` \| `undefined`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`WorkContext`](../classes/task_work.WorkContext.md) |
| `data?` | `InputType` |

##### Returns

`Promise`<`OutputType` \| `undefined`\>

#### Defined in

[yajsapi/task/work.ts:9](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L9)
