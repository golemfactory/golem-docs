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
- [agreementId](task_work.WorkContext#agreementid)
- [activityId](task_work.WorkContext#activityid)

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

[src/task/work.ts:59](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L59)

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

[src/task/work.ts:50](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L50)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Defined in

[src/task/work.ts:51](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L51)

___

### activityId

• `Readonly` **activityId**: `string`

#### Defined in

[src/task/work.ts:52](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L52)

## Methods

### before

▸ **before**(): `Promise`\<`void` \| [`Result`](activity_results.Result)\<`any`\>[]\>

#### Returns

`Promise`\<`void` \| [`Result`](activity_results.Result)\<`any`\>[]\>

#### Defined in

[src/task/work.ts:72](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L72)

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

[src/task/work.ts:124](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L124)

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

[src/task/work.ts:133](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L133)

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

[src/task/work.ts:158](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L158)

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

[src/task/work.ts:164](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L164)

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

[src/task/work.ts:200](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L200)

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

[src/task/work.ts:205](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L205)

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

[src/task/work.ts:211](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L211)

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

[src/task/work.ts:217](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L217)

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

[src/task/work.ts:222](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L222)

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

[src/task/work.ts:227](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L227)

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

[src/task/work.ts:233](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L233)

___

### beginBatch

▸ **beginBatch**(): [`Batch`](task_batch.Batch)

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/work.ts:249](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L249)

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

[src/task/work.ts:256](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L256)

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

[src/task/work.ts:260](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L260)

___

### getIp

▸ **getIp**(): `string`

#### Returns

`string`

#### Defined in

[src/task/work.ts:265](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L265)

___

### getState

▸ **getState**(): `Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Returns

`Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Defined in

[src/task/work.ts:270](https://github.com/golemfactory/golem-js/blob/627e370/src/task/work.ts#L270)
