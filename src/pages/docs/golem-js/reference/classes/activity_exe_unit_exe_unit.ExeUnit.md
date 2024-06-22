---
title: "Class ExeUnit"
pageTitle: "Class ExeUnit - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ExeUnit within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ExeUnit

[activity/exe-unit/exe-unit](../modules/activity_exe_unit_exe_unit).ExeUnit

Groups most common operations that the requestors might need to implement their workflows

## Table of contents

### Constructors

- [constructor](activity_exe_unit_exe_unit.ExeUnit#constructor)

### Properties

- [provider](activity_exe_unit_exe_unit.ExeUnit#provider)
- [activity](activity_exe_unit_exe_unit.ExeUnit#activity)
- [activityModule](activity_exe_unit_exe_unit.ExeUnit#activitymodule)

### Methods

- [setup](activity_exe_unit_exe_unit.ExeUnit#setup)
- [teardown](activity_exe_unit_exe_unit.ExeUnit#teardown)
- [run](activity_exe_unit_exe_unit.ExeUnit#run)
- [runAndStream](activity_exe_unit_exe_unit.ExeUnit#runandstream)
- [transfer](activity_exe_unit_exe_unit.ExeUnit#transfer)
- [uploadFile](activity_exe_unit_exe_unit.ExeUnit#uploadfile)
- [uploadJson](activity_exe_unit_exe_unit.ExeUnit#uploadjson)
- [uploadData](activity_exe_unit_exe_unit.ExeUnit#uploaddata)
- [downloadFile](activity_exe_unit_exe_unit.ExeUnit#downloadfile)
- [downloadData](activity_exe_unit_exe_unit.ExeUnit#downloaddata)
- [downloadJson](activity_exe_unit_exe_unit.ExeUnit#downloadjson)
- [beginBatch](activity_exe_unit_exe_unit.ExeUnit#beginbatch)
- [getWebsocketUri](activity_exe_unit_exe_unit.ExeUnit#getwebsocketuri)
- [getIp](activity_exe_unit_exe_unit.ExeUnit#getip)
- [createTcpProxy](activity_exe_unit_exe_unit.ExeUnit#createtcpproxy)
- [getDto](activity_exe_unit_exe_unit.ExeUnit#getdto)

## Constructors

### constructor

• **new ExeUnit**(`activity`, `activityModule`, `options?`): [`ExeUnit`](activity_exe_unit_exe_unit.ExeUnit)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `activityModule` | [`ActivityModule`](../interfaces/activity_activity_module.ActivityModule) |
| `options?` | [`ExeUnitOptions`](../interfaces/activity_exe_unit_exe_unit.ExeUnitOptions) |

#### Returns

[`ExeUnit`](activity_exe_unit_exe_unit.ExeUnit)

#### Defined in

[src/activity/exe-unit/exe-unit.ts:68](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L68)

## Properties

### provider

• `Readonly` **provider**: [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Defined in

[src/activity/exe-unit/exe-unit.ts:59](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L59)

___

### activity

• `Readonly` **activity**: [`Activity`](activity_activity.Activity)

#### Defined in

[src/activity/exe-unit/exe-unit.ts:69](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L69)

___

### activityModule

• `Readonly` **activityModule**: [`ActivityModule`](../interfaces/activity_activity_module.ActivityModule)

#### Defined in

[src/activity/exe-unit/exe-unit.ts:70](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L70)

## Methods

### setup

▸ **setup**(): `Promise`\<`void` \| [`Result`](activity_results.Result)\<`any`\>[]\>

This function initializes the exe unit by deploying the image to the remote machine
and preparing and running the environment.
This process also includes running setup function if the user has defined it

#### Returns

`Promise`\<`void` \| [`Result`](activity_results.Result)\<`any`\>[]\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:109](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L109)

___

### teardown

▸ **teardown**(): `Promise`\<`void`\>

This function starts the teardown function if the user has defined it.
It is run before the machine is destroyed.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:151](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L151)

___

### run

▸ **run**(`commandLine`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

Execute a command on provider using a shell (/bin/sh).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandLine` | `string` | Shell command to execute. |
| `options?` | [`CommandOptions`](../interfaces/activity_exe_unit_exe_unit.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:191](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L191)

▸ **run**(`executable`, `args`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

Execute an executable on provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executable` | `string` | Executable to run. |
| `args` | `string`[] | Executable arguments. |
| `options?` | [`CommandOptions`](../interfaces/activity_exe_unit_exe_unit.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:200](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L200)

___

### runAndStream

▸ **runAndStream**(`commandLine`, `options?`): `Promise`\<[`RemoteProcess`](activity_exe_unit_process.RemoteProcess)\>

Run an executable on provider and return [RemoteProcess](activity_exe_unit_process.RemoteProcess) that will allow streaming
  that contain stdout and stderr as Readable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandLine` | `string` | Shell command to execute. |
| `options?` | `Omit`\<[`CommandOptions`](../interfaces/activity_exe_unit_exe_unit.CommandOptions), ``"capture"``\> | Additional run options. |

#### Returns

`Promise`\<[`RemoteProcess`](activity_exe_unit_process.RemoteProcess)\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:224](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L224)

▸ **runAndStream**(`executable`, `args`, `options?`): `Promise`\<[`RemoteProcess`](activity_exe_unit_process.RemoteProcess)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executable` | `string` | Executable to run. |
| `args` | `string`[] | Executable arguments. |
| `options?` | [`CommandOptions`](../interfaces/activity_exe_unit_exe_unit.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`RemoteProcess`](activity_exe_unit_process.RemoteProcess)\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:230](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L230)

___

### transfer

▸ **transfer**(`from`, `to`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

Generic transfer command, requires the user to provide a publicly readable transfer source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | publicly available resource for reading. Supported protocols: file, http, ftp or gftp |
| `to` | `string` | file path |
| `options?` | [`CommandOptions`](../interfaces/activity_exe_unit_exe_unit.CommandOptions) | Additional run options. |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:272](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L272)

___

### uploadFile

▸ **uploadFile**(`src`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/activity_exe_unit_exe_unit.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:277](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L277)

___

### uploadJson

▸ **uploadJson**(`json`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/activity_exe_unit_exe_unit.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:283](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L283)

___

### uploadData

▸ **uploadData**(`data`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/activity_exe_unit_exe_unit.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:289](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L289)

___

### downloadFile

▸ **downloadFile**(`src`, `dst`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `options?` | [`CommandOptions`](../interfaces/activity_exe_unit_exe_unit.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:294](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L294)

___

### downloadData

▸ **downloadData**(`src`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `options?` | [`CommandOptions`](../interfaces/activity_exe_unit_exe_unit.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`Uint8Array`\>\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:299](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L299)

___

### downloadJson

▸ **downloadJson**(`src`, `options?`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `options?` | [`CommandOptions`](../interfaces/activity_exe_unit_exe_unit.CommandOptions) |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Defined in

[src/activity/exe-unit/exe-unit.ts:304](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L304)

___

### beginBatch

▸ **beginBatch**(): [`Batch`](activity_exe_unit_batch.Batch)

#### Returns

[`Batch`](activity_exe_unit_batch.Batch)

#### Defined in

[src/activity/exe-unit/exe-unit.ts:320](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L320)

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

[src/activity/exe-unit/exe-unit.ts:329](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L329)

___

### getIp

▸ **getIp**(): `string`

#### Returns

`string`

#### Defined in

[src/activity/exe-unit/exe-unit.ts:342](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L342)

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

[src/activity/exe-unit/exe-unit.ts:359](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L359)

___

### getDto

▸ **getDto**(): [`ActivityDTO`](../interfaces/activity_exe_unit_exe_unit.ActivityDTO)

#### Returns

[`ActivityDTO`](../interfaces/activity_exe_unit_exe_unit.ActivityDTO)

#### Defined in

[src/activity/exe-unit/exe-unit.ts:369](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-unit/exe-unit.ts#L369)
