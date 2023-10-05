---
title: "Class WorkContext - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class WorkContext within the golem-js SDK for the Golem Network."
type: "reference"
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

• **new WorkContext**(`activity`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `options?` | [`WorkOptions`](../interfaces/task_work.WorkOptions) |

#### Defined in

[src/task/work.ts:61](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L61)

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

[src/task/work.ts:52](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L52)

___

### agreementId

• `Readonly` **agreementId**: `string`

#### Defined in

[src/task/work.ts:53](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L53)

___

### activityId

• `Readonly` **activityId**: `string`

#### Defined in

[src/task/work.ts:54](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L54)

## Methods

### before

▸ **before**(): `Promise`<`void` \| [`Result`](activity_results.Result)<`any`\>[]\>

#### Returns

`Promise`<`void` \| [`Result`](activity_results.Result)<`any`\>[]\>

#### Defined in

[src/task/work.ts:74](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L74)

___

### run

▸ **run**(`commandLine`, `options?`): `Promise`<[`Result`](activity_results.Result)<`any`\>\>

Execute a command on provider using a shell (/bin/sh).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandLine` | `string` | Shell command to execute. |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) | Additional run options. |

#### Returns

`Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Defined in

[src/task/work.ts:117](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L117)

▸ **run**(`executable`, `args`, `options?`): `Promise`<[`Result`](activity_results.Result)<`any`\>\>

Execute an executable on provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executable` | `string` | Executable to run. |
| `args` | `string`[] | Executable arguments. |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) | Additional run options. |

#### Returns

`Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Defined in

[src/task/work.ts:126](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L126)

___

### transfer

▸ **transfer**(`from`, `to`, `options?`): `Promise`<[`Result`](activity_results.Result)<`any`\>\>

Generic transfer command, requires the user to provide a publicly readable transfer source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | publicly available resource for reading. Supported protocols: file, http, ftp or gftp |
| `to` | `string` | file path |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) | Additional run options. |

#### Returns

`Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Defined in

[src/task/work.ts:145](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L145)

___

### uploadFile

▸ **uploadFile**(`src`, `dst`, `options?`): `Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Defined in

[src/task/work.ts:149](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L149)

___

### uploadJson

▸ **uploadJson**(`json`, `dst`, `options?`): `Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Defined in

[src/task/work.ts:154](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L154)

___

### uploadData

▸ **uploadData**(`data`, `dst`, `options?`): `Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Defined in

[src/task/work.ts:159](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L159)

___

### downloadFile

▸ **downloadFile**(`src`, `dst`, `options?`): `Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Defined in

[src/task/work.ts:163](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L163)

___

### downloadData

▸ **downloadData**(`src`, `options?`): `Promise`<[`Result`](activity_results.Result)<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`<[`Result`](activity_results.Result)<`Uint8Array`\>\>

#### Defined in

[src/task/work.ts:167](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L167)

___

### downloadJson

▸ **downloadJson**(`src`, `options?`): `Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `options?` | [`CommandOptions`](../interfaces/task_work.CommandOptions) |

#### Returns

`Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Defined in

[src/task/work.ts:172](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L172)

___

### beginBatch

▸ **beginBatch**(): [`Batch`](task_batch.Batch)

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/work.ts:187](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L187)

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

[src/task/work.ts:194](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L194)

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

[src/task/work.ts:198](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L198)

___

### getIp

▸ **getIp**(): `string`

#### Returns

`string`

#### Defined in

[src/task/work.ts:203](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L203)

___

### getState

▸ **getState**(): `Promise`<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Returns

`Promise`<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Defined in

[src/task/work.ts:208](https://github.com/golemfactory/golem-js/blob/f88d138/src/task/work.ts#L208)
