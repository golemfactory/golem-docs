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
- [downloadFile](task_work.WorkContext.md#downloadfile)
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

[yajsapi/task/work.ts:51](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L51)

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

[yajsapi/task/work.ts:42](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L42)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Defined in

[yajsapi/task/work.ts:43](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L43)

___

### activityId

• `Readonly` **activityId**: `string`

#### Defined in

[yajsapi/task/work.ts:44](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L44)

## Methods

### before

▸ **before**(): `Promise`<`void` \| `Result`[]\>

#### Returns

`Promise`<`void` \| `Result`[]\>

#### Defined in

[yajsapi/task/work.ts:61](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L61)

___

### run

▸ **run**(`...args`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | (`string` \| `string`[] \| `CommandOptions`)[] |

#### Returns

`Promise`<`Result`\>

#### Defined in

[yajsapi/task/work.ts:96](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L96)

___

### uploadFile

▸ **uploadFile**(`src`, `dst`, `options?`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | `CommandOptions` |

#### Returns

`Promise`<`Result`\>

#### Defined in

[yajsapi/task/work.ts:106](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L106)

___

### uploadJson

▸ **uploadJson**(`json`, `dst`, `options?`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `object` |
| `dst` | `string` |
| `options?` | `CommandOptions` |

#### Returns

`Promise`<`Result`\>

#### Defined in

[yajsapi/task/work.ts:110](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L110)

___

### downloadFile

▸ **downloadFile**(`src`, `dst`, `options?`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | `CommandOptions` |

#### Returns

`Promise`<`Result`\>

#### Defined in

[yajsapi/task/work.ts:115](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L115)

___

### beginBatch

▸ **beginBatch**(): [`Batch`](task_batch.Batch.md)

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[yajsapi/task/work.ts:119](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L119)

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

[yajsapi/task/work.ts:122](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L122)

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

[yajsapi/task/work.ts:125](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L125)

___

### getState

▸ **getState**(): `Promise`<`ActivityStateEnum`\>

#### Returns

`Promise`<`ActivityStateEnum`\>

#### Defined in

[yajsapi/task/work.ts:130](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/task/work.ts#L130)
