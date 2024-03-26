---
title: "Class WorkContext"
pageTitle: "Class WorkContext - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class WorkContext within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: WorkContext

[work/work](../modules/work_work).WorkContext

Groups most common operations that the requestors might need to implement their workflows

## Table of contents

### Constructors

- [constructor](work_work.WorkContext#constructor)

### Properties

- [provider](work_work.WorkContext#provider)
- [activity](work_work.WorkContext#activity)

### Methods

- [before](work_work.WorkContext#before)
- [run](work_work.WorkContext#run)
- [spawn](work_work.WorkContext#spawn)
- [runAndStream](work_work.WorkContext#runandstream)
- [transfer](work_work.WorkContext#transfer)
- [uploadFile](work_work.WorkContext#uploadfile)
- [uploadJson](work_work.WorkContext#uploadjson)
- [uploadData](work_work.WorkContext#uploaddata)
- [downloadFile](work_work.WorkContext#downloadfile)
- [downloadData](work_work.WorkContext#downloaddata)
- [downloadJson](work_work.WorkContext#downloadjson)
- [beginBatch](work_work.WorkContext#beginbatch)
- [getWebsocketUri](work_work.WorkContext#getwebsocketuri)
- [getIp](work_work.WorkContext#getip)
- [createTcpProxy](work_work.WorkContext#createtcpproxy)
- [getState](work_work.WorkContext#getstate)

## Constructors

### constructor

• **new WorkContext**(`activity`, `options`): [`WorkContext`](work_work.WorkContext)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `options` | [`WorkOptions`](../interfaces/work_work.WorkOptions) |

#### Returns

[`WorkContext`](work_work.WorkContext)

#### Defined in

[src/work/work.ts:61](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L61)

## Properties

### provider

• `Readonly` **provider**: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)

#### Defined in

[src/work/work.ts:55](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L55)

___

### activity

• `Readonly` **activity**: [`Activity`](activity_activity.Activity)

#### Defined in

[src/work/work.ts:62](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L62)

## Methods

### before

▸ **before**(): `Promise`\<`void` \| [`Result`](activity_results.Result)\<`any`\>[]\>

#### Returns

`Promise`\<`void` \| [`Result`](activity_results.Result)\<`any`\>[]\>

#### Defined in

[src/work/work.ts:75](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L75)

___

### run

▸ **run**(`commandLine`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

Execute a command on provider using a shell (/bin/sh).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandLine` | `string` | Shell command to execute. |
| `options?` | [`CommandOptions`](../interfaces/work_work.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/work/work.ts:174](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L174)

▸ **run**(`executable`, `args`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

Execute an executable on provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executable` | `string` | Executable to run. |
| `args` | `string`[] | Executable arguments. |
| `options?` | [`CommandOptions`](../interfaces/work_work.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/work/work.ts:183](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L183)

___

### spawn

▸ **spawn**(`commandLine`, `options?`): `Promise`\<[`RemoteProcess`](work_process.RemoteProcess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandLine` | `string` |
| `options?` | `Omit`\<[`CommandOptions`](../interfaces/work_work.CommandOptions), ``"capture"``\> |

#### Returns

`Promise`\<[`RemoteProcess`](work_process.RemoteProcess)\>

**`Deprecated`**

Use [WorkContext.runAndStream](work_work.WorkContext#runandstream) instead

#### Defined in

[src/work/work.ts:201](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L201)

▸ **spawn**(`executable`, `args`, `options?`): `Promise`\<[`RemoteProcess`](work_process.RemoteProcess)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `executable` | `string` |
| `args` | `string`[] |
| `options?` | [`CommandOptions`](../interfaces/work_work.CommandOptions) |

#### Returns

`Promise`\<[`RemoteProcess`](work_process.RemoteProcess)\>

**`Deprecated`**

Use [WorkContext.runAndStream](work_work.WorkContext#runandstream) instead

#### Defined in

[src/work/work.ts:203](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L203)

___

### runAndStream

▸ **runAndStream**(`commandLine`, `options?`): `Promise`\<[`RemoteProcess`](work_process.RemoteProcess)\>

Run an executable on provider and return [RemoteProcess](work_process.RemoteProcess) that will allow streaming
  that contain stdout and stderr as Readable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandLine` | `string` | Shell command to execute. |
| `options?` | `Omit`\<[`CommandOptions`](../interfaces/work_work.CommandOptions), ``"capture"``\> | Additional run options. |

#### Returns

`Promise`\<[`RemoteProcess`](work_process.RemoteProcess)\>

#### Defined in

[src/work/work.ts:220](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L220)

▸ **runAndStream**(`executable`, `args`, `options?`): `Promise`\<[`RemoteProcess`](work_process.RemoteProcess)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executable` | `string` | Executable to run. |
| `args` | `string`[] | Executable arguments. |
| `options?` | [`CommandOptions`](../interfaces/work_work.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`RemoteProcess`](work_process.RemoteProcess)\>

#### Defined in

[src/work/work.ts:226](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L226)

___

### transfer

▸ **transfer**(`from`, `to`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

Generic transfer command, requires the user to provide a publicly readable transfer source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | publicly available resource for reading. Supported protocols: file, http, ftp or gftp |
| `to` | `string` | file path |
| `options?` | [`CommandOptions`](../interfaces/work_work.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/work/work.ts:268](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L268)

___

### uploadFile

▸ **uploadFile**(`src`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/work_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/work/work.ts:273](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L273)

___

### uploadJson

▸ **uploadJson**(`json`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/work_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/work/work.ts:279](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L279)

___

### uploadData

▸ **uploadData**(`data`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/work_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/work/work.ts:285](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L285)

___

### downloadFile

▸ **downloadFile**(`src`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/work_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/work/work.ts:290](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L290)

___

### downloadData

▸ **downloadData**(`src`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `options?` | [`CommandOptions`](../interfaces/work_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`Uint8Array`\>\>

#### Defined in

[src/work/work.ts:295](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L295)

___

### downloadJson

▸ **downloadJson**(`src`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `options?` | [`CommandOptions`](../interfaces/work_work.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/work/work.ts:300](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L300)

___

### beginBatch

▸ **beginBatch**(): [`Batch`](work_batch.Batch)

#### Returns

[`Batch`](work_batch.Batch)

#### Defined in

[src/work/work.ts:316](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L316)

___

### getWebsocketUri

▸ **getWebsocketUri**(`port`): `string`

Provides a WebSocket URI that allows communicating with a remote process listening on the target port

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `port` | `number` | The port number used by the service running within an activity on the provider |

#### Returns

`string`

#### Defined in

[src/work/work.ts:325](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L325)

___

### getIp

▸ **getIp**(): `string`

#### Returns

`string`

#### Defined in

[src/work/work.ts:338](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L338)

___

### createTcpProxy

▸ **createTcpProxy**(`portOnProvider`): [`TcpProxy`](network_tcpProxy.TcpProxy)

Creates a new TCP proxy that will allow tunnelling the TPC traffic from the provider via the requestor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `portOnProvider` | `number` | The port that the service running on the provider is listening to |

#### Returns

[`TcpProxy`](network_tcpProxy.TcpProxy)

#### Defined in

[src/work/work.ts:355](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L355)

___

### getState

▸ **getState**(): `Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Returns

`Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Defined in

[src/work/work.ts:365](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/work/work.ts#L365)
