---
title: "Class Batch"
pageTitle: "Class Batch - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Batch within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Batch

[task/batch](../modules/task_batch).Batch

## Table of contents

### Constructors

- [constructor](task_batch.Batch#constructor)

### Methods

- [create](task_batch.Batch#create)
- [run](task_batch.Batch#run)
- [transfer](task_batch.Batch#transfer)
- [uploadFile](task_batch.Batch#uploadfile)
- [uploadJson](task_batch.Batch#uploadjson)
- [uploadData](task_batch.Batch#uploaddata)
- [downloadFile](task_batch.Batch#downloadfile)
- [end](task_batch.Batch#end)
- [endStream](task_batch.Batch#endstream)

## Constructors

### constructor

• **new Batch**(`activity`, `storageProvider`, `logger?`): [`Batch`](task_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `storageProvider` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/batch.ts:15](https://github.com/golemfactory/golem-js/blob/d4f6a75/src/task/batch.ts#L15)

## Methods

### create

▸ **create**(`activity`, `storageProvider`, `logger?`): [`Batch`](task_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `storageProvider` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/batch.ts:11](https://github.com/golemfactory/golem-js/blob/d4f6a75/src/task/batch.ts#L11)

___

### run

▸ **run**(`commandLine`): [`Batch`](task_batch.Batch)

Execute a command on provider using a shell (/bin/sh).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandLine` | `string` | Shell command to execute. |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/batch.ts:28](https://github.com/golemfactory/golem-js/blob/d4f6a75/src/task/batch.ts#L28)

▸ **run**(`executable`, `args`): [`Batch`](task_batch.Batch)

Execute an executable on provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executable` | `string` | Executable to run. |
| `args` | `string`[] | Executable arguments. |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/batch.ts:36](https://github.com/golemfactory/golem-js/blob/d4f6a75/src/task/batch.ts#L36)

___

### transfer

▸ **transfer**(`from`, `to`): [`Batch`](task_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/batch.ts:47](https://github.com/golemfactory/golem-js/blob/d4f6a75/src/task/batch.ts#L47)

___

### uploadFile

▸ **uploadFile**(`src`, `dst`): [`Batch`](task_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/batch.ts:52](https://github.com/golemfactory/golem-js/blob/d4f6a75/src/task/batch.ts#L52)

___

### uploadJson

▸ **uploadJson**(`json`, `dst`): [`Batch`](task_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `object` |
| `dst` | `string` |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/batch.ts:57](https://github.com/golemfactory/golem-js/blob/d4f6a75/src/task/batch.ts#L57)

___

### uploadData

▸ **uploadData**(`data`, `dst`): [`Batch`](task_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `dst` | `string` |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/batch.ts:63](https://github.com/golemfactory/golem-js/blob/d4f6a75/src/task/batch.ts#L63)

___

### downloadFile

▸ **downloadFile**(`src`, `dst`): [`Batch`](task_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/batch.ts:68](https://github.com/golemfactory/golem-js/blob/d4f6a75/src/task/batch.ts#L68)

___

### end

▸ **end**(): `Promise`\<[`Result`](activity_results.Result)\<`any`\>[]\>

Executes the batch of commands added via [run](task_batch.Batch#run) returning result for each of the steps.

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>[]\>

#### Defined in

[src/task/batch.ts:76](https://github.com/golemfactory/golem-js/blob/d4f6a75/src/task/batch.ts#L76)

___

### endStream

▸ **endStream**(): `Promise`\<`Readable`\>

#### Returns

`Promise`\<`Readable`\>

#### Defined in

[src/task/batch.ts:120](https://github.com/golemfactory/golem-js/blob/d4f6a75/src/task/batch.ts#L120)
