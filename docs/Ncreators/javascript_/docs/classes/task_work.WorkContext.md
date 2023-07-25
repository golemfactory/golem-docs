# Class: WorkContext

[task/work](../modules/task_work.md).WorkContext

Work Context

**`Description`**

## Table of contents

### Constructors

- [constructor](task_work.WorkContext.md#constructor)

### Properties

- [provider](task_work.WorkContext.md#provider)

### Methods

- [before](task_work.WorkContext.md#before)
- [run](task_work.WorkContext.md#run)
- [uploadFile](task_work.WorkContext.md#uploadfile)
- [uploadJson](task_work.WorkContext.md#uploadjson)
- [downloadFile](task_work.WorkContext.md#downloadfile)
- [beginBatch](task_work.WorkContext.md#beginbatch)
- [rejectResult](task_work.WorkContext.md#rejectresult)
- [getWebsocketUri](task_work.WorkContext.md#getwebsocketuri)

## Constructors

### constructor

• **new WorkContext**(`activity`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity.md) |
| `options?` | [`WorkOptions`](../interfaces/task_work.WorkOptions.md) |

#### Defined in

[yajsapi/task/work.ts:43](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/work.ts#L43)

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

[yajsapi/task/work.ts:36](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/work.ts#L36)

## Methods

### before

▸ **before**(): `Promise`<`void` \| [`Result`](../interfaces/activity_results.Result.md)[]\>

#### Returns

`Promise`<`void` \| [`Result`](../interfaces/activity_results.Result.md)[]\>

#### Defined in

[yajsapi/task/work.ts:51](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/work.ts#L51)

___

### run

▸ **run**(`...args`): `Promise`<[`Result`](../interfaces/activity_results.Result.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | (`string` \| `string`[])[] |

#### Returns

`Promise`<[`Result`](../interfaces/activity_results.Result.md)\>

#### Defined in

[yajsapi/task/work.ts:74](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/work.ts#L74)

___

### uploadFile

▸ **uploadFile**(`src`, `dst`): `Promise`<[`Result`](../interfaces/activity_results.Result.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |

#### Returns

`Promise`<[`Result`](../interfaces/activity_results.Result.md)\>

#### Defined in

[yajsapi/task/work.ts:79](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/work.ts#L79)

___

### uploadJson

▸ **uploadJson**(`json`, `dst`): `Promise`<[`Result`](../interfaces/activity_results.Result.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `object` |
| `dst` | `string` |

#### Returns

`Promise`<[`Result`](../interfaces/activity_results.Result.md)\>

#### Defined in

[yajsapi/task/work.ts:83](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/work.ts#L83)

___

### downloadFile

▸ **downloadFile**(`src`, `dst`): `Promise`<[`Result`](../interfaces/activity_results.Result.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |

#### Returns

`Promise`<[`Result`](../interfaces/activity_results.Result.md)\>

#### Defined in

[yajsapi/task/work.ts:88](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/work.ts#L88)

___

### beginBatch

▸ **beginBatch**(): [`Batch`](task_batch.Batch.md)

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[yajsapi/task/work.ts:92](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/work.ts#L92)

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

[yajsapi/task/work.ts:95](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/work.ts#L95)

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

[yajsapi/task/work.ts:98](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/task/work.ts#L98)
