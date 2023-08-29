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

[src/task/work.ts:62](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L62)

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

[src/task/work.ts:53](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L53)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Defined in

[src/task/work.ts:54](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L54)

___

### activityId

• `Readonly` **activityId**: `string`

#### Defined in

[src/task/work.ts:55](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L55)

## Methods

### before

▸ **before**(): `Promise`<`void` \| `Result`<`unknown`\>[]\>

#### Returns

`Promise`<`void` \| `Result`<`unknown`\>[]\>

#### Defined in

[src/task/work.ts:75](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L75)

___

### run

▸ **run**(`...args`): `Promise`<`Result`<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | (`string` \| `string`[] \| `CommandOptions`)[] |

#### Returns

`Promise`<`Result`<`unknown`\>\>

#### Defined in

[src/task/work.ts:111](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L111)

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

[src/task/work.ts:121](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L121)

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

[src/task/work.ts:126](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L126)

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

[src/task/work.ts:130](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L130)

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

[src/task/work.ts:133](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L133)

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

[src/task/work.ts:137](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L137)

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

[src/task/work.ts:142](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L142)

___

### beginBatch

▸ **beginBatch**(): [`Batch`](task_batch.Batch)

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/work.ts:157](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L157)

___

### rejectResult

▸ **rejectResult**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Defined in

[src/task/work.ts:160](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L160)

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

[src/task/work.ts:163](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L163)

___

### getState

▸ **getState**(): `Promise`<`ActivityStateEnum`\>

#### Returns

`Promise`<`ActivityStateEnum`\>

#### Defined in

[src/task/work.ts:168](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/work.ts#L168)
