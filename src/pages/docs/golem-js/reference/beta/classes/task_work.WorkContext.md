# Class: WorkContext

[task/work](../modules/task_work.md).WorkContext

Work Context

**`Description`**

## Table of contents

### Constructors

- [constructor](task_work.WorkContext.md#constructor)

### Properties

- [provider](task_work.WorkContext.md#provider)
- [agreementId](task_work.WorkContext.md#agreementid)
- [activityId](task_work.WorkContext.md#activityid)

### Methods

- [before](task_work.WorkContext.md#before)
- [run](task_work.WorkContext.md#run)
- [uploadFile](task_work.WorkContext.md#uploadfile)
- [uploadJson](task_work.WorkContext.md#uploadjson)
- [uploadData](task_work.WorkContext.md#uploaddata)
- [downloadFile](task_work.WorkContext.md#downloadfile)
- [downloadData](task_work.WorkContext.md#downloaddata)
- [downloadJson](task_work.WorkContext.md#downloadjson)
- [beginBatch](task_work.WorkContext.md#beginbatch)
- [rejectResult](task_work.WorkContext.md#rejectresult)
- [getWebsocketUri](task_work.WorkContext.md#getwebsocketuri)
- [getState](task_work.WorkContext.md#getstate)

## Constructors

### constructor

• **new WorkContext**(`activity`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | `Activity` |
| `options?` | [`WorkOptions`](../interfaces/task_work.WorkOptions.md) |

#### Defined in

[src/task/work.ts:60](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L60)

## Properties

### provider

• `Optional` `Readonly` **provider**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `id` | `string` |
| `networkConfig?` | `object` |

#### Defined in

[src/task/work.ts:51](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L51)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Defined in

[src/task/work.ts:52](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L52)

___

### activityId

• `Readonly` **activityId**: `string`

#### Defined in

[src/task/work.ts:53](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L53)

## Methods

### before

▸ **before**(): `Promise`<`void` \| `Result`<`unknown`\>[]\>

#### Returns

`Promise`<`void` \| `Result`<`unknown`\>[]\>

#### Defined in

[src/task/work.ts:73](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L73)

___

### run

▸ **run**(`commandLine`, `options?`): `Promise`<`Result`<`unknown`\>\>

Execute a command on provider using a shell (/bin/sh).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandLine` | `string` | Shell command to execute. |
| `options?` | `CommandOptions` | Additional run options. |

#### Returns

`Promise`<`Result`<`unknown`\>\>

#### Defined in

[src/task/work.ts:116](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L116)

▸ **run**(`executable`, `args`, `options?`): `Promise`<`Result`<`unknown`\>\>

Execute an executable on provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executable` | `string` | Executable to run. |
| `args` | `string`[] | Executable arguments. |
| `options?` | `CommandOptions` | Additional run options. |

#### Returns

`Promise`<`Result`<`unknown`\>\>

#### Defined in

[src/task/work.ts:125](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L125)

___

### uploadFile

▸ **uploadFile**(`src`, `dst`, `options?`): `Promise`<`Result`<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | `CommandOptions` |

#### Returns

`Promise`<`Result`<`unknown`\>\>

#### Defined in

[src/task/work.ts:137](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L137)

___

### uploadJson

▸ **uploadJson**(`json`, `dst`, `options?`): `Promise`<`Result`<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `dst` | `string` |
| `options?` | `CommandOptions` |

#### Returns

`Promise`<`Result`<`unknown`\>\>

#### Defined in

[src/task/work.ts:142](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L142)

___

### uploadData

▸ **uploadData**(`data`, `dst`, `options?`): `Promise`<`Result`<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `dst` | `string` |
| `options?` | `CommandOptions` |

#### Returns

`Promise`<`Result`<`unknown`\>\>

#### Defined in

[src/task/work.ts:147](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L147)

___

### downloadFile

▸ **downloadFile**(`src`, `dst`, `options?`): `Promise`<`Result`<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | `CommandOptions` |

#### Returns

`Promise`<`Result`<`unknown`\>\>

#### Defined in

[src/task/work.ts:151](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L151)

___

### downloadData

▸ **downloadData**(`src`, `options?`): `Promise`<`Result`<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `options?` | `CommandOptions` |

#### Returns

`Promise`<`Result`<`Uint8Array`\>\>

#### Defined in

[src/task/work.ts:155](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L155)

___

### downloadJson

▸ **downloadJson**(`src`, `options?`): `Promise`<`Result`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `options?` | `CommandOptions` |

#### Returns

`Promise`<`Result`<`any`\>\>

#### Defined in

[src/task/work.ts:160](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L160)

___

### beginBatch

▸ **beginBatch**(): [`Batch`](task_batch.Batch.md)

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[src/task/work.ts:175](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L175)

___

### rejectResult

▸ **rejectResult**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

**`Deprecated`**

This function is only used to throw errors from unit tests. It should be removed.

#### Defined in

[src/task/work.ts:182](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L182)

___

### getWebsocketUri

▸ **getWebsocketUri**(`port`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

`string`

#### Defined in

[src/task/work.ts:186](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L186)

___

### getState

▸ **getState**(): `Promise`<`ActivityStateEnum`\>

#### Returns

`Promise`<`ActivityStateEnum`\>

#### Defined in

[src/task/work.ts:191](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/work.ts#L191)
