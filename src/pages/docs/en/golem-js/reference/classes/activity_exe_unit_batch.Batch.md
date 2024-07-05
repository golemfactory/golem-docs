---
title: "Class Batch"
pageTitle: "Class Batch - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Batch within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Batch

[activity/exe-unit/batch](../modules/activity_exe_unit_batch).Batch

## Table of contents

### Constructors

- [constructor](activity_exe_unit_batch.Batch#constructor)

### Methods

- [run](activity_exe_unit_batch.Batch#run)
- [transfer](activity_exe_unit_batch.Batch#transfer)
- [uploadFile](activity_exe_unit_batch.Batch#uploadfile)
- [uploadJson](activity_exe_unit_batch.Batch#uploadjson)
- [uploadData](activity_exe_unit_batch.Batch#uploaddata)
- [downloadFile](activity_exe_unit_batch.Batch#downloadfile)
- [end](activity_exe_unit_batch.Batch#end)
- [endStream](activity_exe_unit_batch.Batch#endstream)

## Constructors

### constructor

• **new Batch**(`executor`, `storageProvider`, `logger`): [`Batch`](activity_exe_unit_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `executor` | [`ExeScriptExecutor`](activity_exe_script_executor.ExeScriptExecutor) |
| `storageProvider` | [`StorageProvider`](../interfaces/shared_storage_provider.StorageProvider) |
| `logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |

#### Returns

[`Batch`](activity_exe_unit_batch.Batch)

#### Defined in

[src/activity/exe-unit/batch.ts:13](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/batch.ts#L13)

## Methods

### run

▸ **run**(`commandLine`): [`Batch`](activity_exe_unit_batch.Batch)

Execute a command on provider using a shell (/bin/sh).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandLine` | `string` | Shell command to execute. |

#### Returns

[`Batch`](activity_exe_unit_batch.Batch)

#### Defined in

[src/activity/exe-unit/batch.ts:26](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/batch.ts#L26)

▸ **run**(`executable`, `args`): [`Batch`](activity_exe_unit_batch.Batch)

Execute an executable on provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executable` | `string` | Executable to run. |
| `args` | `string`[] | Executable arguments. |

#### Returns

[`Batch`](activity_exe_unit_batch.Batch)

#### Defined in

[src/activity/exe-unit/batch.ts:34](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/batch.ts#L34)

___

### transfer

▸ **transfer**(`from`, `to`): [`Batch`](activity_exe_unit_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |

#### Returns

[`Batch`](activity_exe_unit_batch.Batch)

#### Defined in

[src/activity/exe-unit/batch.ts:45](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/batch.ts#L45)

___

### uploadFile

▸ **uploadFile**(`src`, `dst`): [`Batch`](activity_exe_unit_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |

#### Returns

[`Batch`](activity_exe_unit_batch.Batch)

#### Defined in

[src/activity/exe-unit/batch.ts:50](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/batch.ts#L50)

___

### uploadJson

▸ **uploadJson**(`json`, `dst`): [`Batch`](activity_exe_unit_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `object` |
| `dst` | `string` |

#### Returns

[`Batch`](activity_exe_unit_batch.Batch)

#### Defined in

[src/activity/exe-unit/batch.ts:55](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/batch.ts#L55)

___

### uploadData

▸ **uploadData**(`data`, `dst`): [`Batch`](activity_exe_unit_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `dst` | `string` |

#### Returns

[`Batch`](activity_exe_unit_batch.Batch)

#### Defined in

[src/activity/exe-unit/batch.ts:61](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/batch.ts#L61)

___

### downloadFile

▸ **downloadFile**(`src`, `dst`): [`Batch`](activity_exe_unit_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |

#### Returns

[`Batch`](activity_exe_unit_batch.Batch)

#### Defined in

[src/activity/exe-unit/batch.ts:66](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/batch.ts#L66)

___

### end

▸ **end**(): `Promise`\<[`Result`](activity_results.Result)\<`any`\>[]\>

Executes the batch of commands added via [run](activity_exe_unit_batch.Batch#run) returning result for each of the steps.

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>[]\>

#### Defined in

[src/activity/exe-unit/batch.ts:74](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/batch.ts#L74)

___

### endStream

▸ **endStream**(): `Promise`\<`Observable`\<[`Result`](activity_results.Result)\<`any`\>\>\>

#### Returns

`Promise`\<`Observable`\<[`Result`](activity_results.Result)\<`any`\>\>\>

#### Defined in

[src/activity/exe-unit/batch.ts:139](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/batch.ts#L139)
