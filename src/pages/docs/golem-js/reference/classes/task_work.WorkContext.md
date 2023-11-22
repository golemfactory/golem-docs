---
title: Class WorkContext
pageTitle: Class WorkContext - golem-js API Reference
description: Explore the detailed API reference documentation for the Class WorkContext within the golem-js SDK for the Golem Network.
type: JS API Reference
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

[src/task/work.ts:62](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L62)

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

[src/task/work.ts:53](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L53)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Defined in

[src/task/work.ts:54](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L54)

___

### activityId

• `Readonly` **activityId**: `string`

#### Defined in

[src/task/work.ts:55](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L55)

## Methods

### before

▸ **before**(): `Promise`\<`void` \| [`Result`](activity_results.Result)\<`any`\>[]\>

#### Returns

`Promise`\<`void` \| [`Result`](activity_results.Result)\<`any`\>[]\>

#### Defined in

[src/task/work.ts:75](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L75)

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

[src/task/work.ts:127](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L127)

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

[src/task/work.ts:136](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L136)

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

[src/task/work.ts:161](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L161)

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

[src/task/work.ts:167](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L167)

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

[src/task/work.ts:203](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L203)

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

[src/task/work.ts:208](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L208)

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

[src/task/work.ts:214](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L214)

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

[src/task/work.ts:220](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L220)

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

[src/task/work.ts:225](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L225)

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

[src/task/work.ts:230](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L230)

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

[src/task/work.ts:236](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L236)

___

### beginBatch

▸ **beginBatch**(): [`Batch`](task_batch.Batch)

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/work.ts:252](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L252)

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

[src/task/work.ts:259](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L259)

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

[src/task/work.ts:263](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L263)

___

### getIp

▸ **getIp**(): `string`

#### Returns

`string`

#### Defined in

[src/task/work.ts:268](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L268)

___

### getState

▸ **getState**(): `Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Returns

`Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Defined in

[src/task/work.ts:273](https://github.com/golemfactory/golem-js/blob/49297d9/src/task/work.ts#L273)
