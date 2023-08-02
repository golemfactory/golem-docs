# Module: task/work

## Table of contents

### Classes

- [WorkContext](../classes/task_work.WorkContext)

### Interfaces

- [WorkOptions](../interfaces/task_work.WorkOptions)

### Type Aliases

- [Worker](task_work#worker)

## Type Aliases

### Worker

Ƭ **Worker**<`InputType`, `OutputType`\>: (`ctx`: [`WorkContext`](../classes/task_work.WorkContext), `data?`: `InputType`) => `Promise`<`OutputType` \| `undefined`\>

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
| `ctx` | [`WorkContext`](../classes/task_work.WorkContext) |
| `data?` | `InputType` |

##### Returns

`Promise`<`OutputType` \| `undefined`\>

#### Defined in

[yajsapi/task/work.ts:9](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/work.ts#L9)
