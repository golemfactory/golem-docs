# Class: WorkContext

[task/work](../modules/task_work).WorkContext

Work Context

**`Description`**

## Table of contents

### Constructors

- [constructor](task_work.WorkContext#constructor)

### Properties

- [provider](task_work.WorkContext#provider)
- [agreementId](task_work.WorkContext#agreementid)
- [activityId](task_work.WorkContext#activityid)

### Methods

- [before](task_work.WorkContext#before)
- [run](task_work.WorkContext#run)
- [uploadFile](task_work.WorkContext#uploadfile)
- [uploadJson](task_work.WorkContext#uploadjson)
- [uploadData](task_work.WorkContext#uploaddata)
- [downloadFile](task_work.WorkContext#downloadfile)
- [downloadData](task_work.WorkContext#downloaddata)
- [downloadJson](task_work.WorkContext#downloadjson)
- [beginBatch](task_work.WorkContext#beginbatch)
- [rejectResult](task_work.WorkContext#rejectresult)
- [getWebsocketUri](task_work.WorkContext#getwebsocketuri)
- [getState](task_work.WorkContext#getstate)

## Constructors

### constructor

• **new WorkContext**(`activity`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | `Activity` |
| `options?` | [`WorkOptions`](../interfaces/task_work.WorkOptions) |

#### Defined in

[src/task/work.ts:61](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L61)

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

[src/task/work.ts:52](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L52)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Defined in

[src/task/work.ts:53](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L53)

___

### activityId

• `Readonly` **activityId**: `string`

#### Defined in

[src/task/work.ts:54](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L54)

## Methods

### before

▸ **before**(): `Promise`<`void` \| `Result`<`unknown`\>[]\>

#### Returns

`Promise`<`void` \| `Result`<`unknown`\>[]\>

#### Defined in

[src/task/work.ts:74](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L74)

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

[src/task/work.ts:117](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L117)

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

[src/task/work.ts:126](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L126)

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

[src/task/work.ts:138](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L138)

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

[src/task/work.ts:143](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L143)

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

[src/task/work.ts:148](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L148)

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

[src/task/work.ts:152](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L152)

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

[src/task/work.ts:156](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L156)

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

[src/task/work.ts:161](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L161)

___

### beginBatch

▸ **beginBatch**(): [`Batch`](task_batch.Batch)

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/work.ts:176](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L176)

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

[src/task/work.ts:183](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L183)

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

[src/task/work.ts:187](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L187)

___

### getState

▸ **getState**(): `Promise`<`ActivityStateEnum`\>

#### Returns

`Promise`<`ActivityStateEnum`\>

#### Defined in

[src/task/work.ts:192](https://github.com/golemfactory/golem-js/blob/614ea72/src/task/work.ts#L192)
