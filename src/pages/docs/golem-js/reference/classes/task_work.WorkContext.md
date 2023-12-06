---
title: "Class WorkContext"
pageTitle: "Class WorkContext - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class WorkContext within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: WorkContext

[task/work](../modules/task_work).WorkContext

Work Context

**`Description`**

## Table of contents

### Constructors

- [constructor](task_work.WorkContext#constructor)

### Properties

- [provider](task_work.WorkContext#provider)
- [activity](task_work.WorkContext#activity)

### Methods

- [before](task_work.WorkContext#before)
- [run](task_work.WorkContext#run)
- [spawn](task_work.WorkContext#spawn)
- [transfer](task_work.WorkContext#transfer)
- [uploadFile](task_work.WorkContext#uploadfile)
- [uploadJson](task_work.WorkContext#uploadjson)
- [uploadData](task_work.WorkContext#uploaddata)
- [downloadFile](task_work.WorkContext#downloadfile)
- [downloadData](task_work.WorkContext#downloaddata)
- [downloadJson](task_work.WorkContext#downloadjson)
- [beginBatch](task_work.WorkContext#beginbatch)
- [rejectResult](task_work.WorkContext#rejectresult)
- [getWebsocketUri](task_work.WorkContext#getwebsocketuri)
- [getIp](task_work.WorkContext#getip)
- [getState](task_work.WorkContext#getstate)

## Constructors

### constructor

• **new WorkContext**(`activity`, `options?`): [`WorkContext`](task_work.WorkContext)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `options?` | [`WorkOptions`](../interfaces/task_work.WorkOptions) |

#### Returns

[`WorkContext`](task_work.WorkContext)

#### Defined in

[src/task/work.ts:57](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L57)

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

[src/task/work.ts:50](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L50)

___

### activity

• `Readonly` **activity**: [`Activity`](activity_activity.Activity)

#### Defined in

[src/task/work.ts:58](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L58)

## Methods

### before

▸ **before**(): `Promise`\<`void` \| [`Result`](activity_results.Result)\<`any`\>[]\>

#### Returns

`Promise`\<`void` \| [`Result`](activity_results.Result)\<`any`\>[]\>

#### Defined in

[src/task/work.ts:68](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L68)

___

### run

▸ **run**(`commandLine`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

Execute a command on provider using a shell (/bin/sh).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandLine` | `string` | Shell command to execute. |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/task/work.ts:120](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L120)

▸ **run**(`executable`, `args`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

Execute an executable on provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executable` | `string` | Executable to run. |
| `args` | `string`[] | Executable arguments. |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/task/work.ts:129](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L129)

___

### spawn

▸ **spawn**(`commandLine`, `options?`): `Promise`\<[`RemoteProcess`](task_process.RemoteProcess)\>

Spawn an executable on provider and return [RemoteProcess](task_process.RemoteProcess) object
that contain stdout and stderr as Readable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandLine` | `string` | Shell command to execute. |
| `options?` | `Omit`\<[`CommandOptions`](../interfaces/task_work.CommandOptions), ``"capture"``\> | Additional run options. |

#### Returns

`Promise`\<[`RemoteProcess`](task_process.RemoteProcess)\>

#### Defined in

[src/task/work.ts:154](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L154)

▸ **spawn**(`executable`, `args`, `options?`): `Promise`\<[`RemoteProcess`](task_process.RemoteProcess)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executable` | `string` | Executable to run. |
| `args` | `string`[] | Executable arguments. |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`RemoteProcess`](task_process.RemoteProcess)\>

#### Defined in

[src/task/work.ts:160](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L160)

___

### transfer

▸ **transfer**(`from`, `to`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

Generic transfer command, requires the user to provide a publicly readable transfer source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | publicly available resource for reading. Supported protocols: file, http, ftp or gftp |
| `to` | `string` | file path |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/task/work.ts:196](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L196)

___

### uploadFile

▸ **uploadFile**(`src`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/task/work.ts:201](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L201)

___

### uploadJson

▸ **uploadJson**(`json`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/task/work.ts:207](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L207)

___

### uploadData

▸ **uploadData**(`data`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/task/work.ts:213](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L213)

___

### downloadFile

▸ **downloadFile**(`src`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/task/work.ts:218](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L218)

___

### downloadData

▸ **downloadData**(`src`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`Uint8Array`\>\>

#### Defined in

[src/task/work.ts:223](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L223)

___

### downloadJson

▸ **downloadJson**(`src`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/task/work.ts:229](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L229)

___

### beginBatch

▸ **beginBatch**(): [`Batch`](task_batch.Batch)

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/work.ts:245](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L245)

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

[src/task/work.ts:252](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L252)

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

[src/task/work.ts:256](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L256)

___

### getIp

▸ **getIp**(): `string`

#### Returns

`string`

#### Defined in

[src/task/work.ts:261](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L261)

___

### getState

▸ **getState**(): `Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Returns

`Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Defined in

[src/task/work.ts:266](https://github.com/golemfactory/golem-js/blob/c827e77/src/task/work.ts#L266)
