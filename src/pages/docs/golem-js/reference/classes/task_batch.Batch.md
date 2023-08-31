# Class: Batch

[task/batch](../modules/task_batch).Batch

## Table of contents

### Constructors

- [constructor](task_batch.Batch#constructor)

### Methods

- [create](task_batch.Batch#create)
- [run](task_batch.Batch#run)
- [uploadFile](task_batch.Batch#uploadfile)
- [uploadJson](task_batch.Batch#uploadjson)
- [uploadData](task_batch.Batch#uploaddata)
- [downloadFile](task_batch.Batch#downloadfile)
- [end](task_batch.Batch#end)
- [endStream](task_batch.Batch#endstream)

## Constructors

### constructor

• **new Batch**(`activity`, `storageProvider`, `logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `storageProvider` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Defined in

[src/task/batch.ts:15](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/task/batch.ts#L15)

## Methods

### create

▸ `Static` **create**(`activity`, `storageProvider`, `logger?`): [`Batch`](task_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | [`Activity`](activity_activity.Activity) |
| `storageProvider` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/batch.ts:11](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/task/batch.ts#L11)

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

[src/task/batch.ts:28](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/task/batch.ts#L28)

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

[src/task/batch.ts:36](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/task/batch.ts#L36)

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

[src/task/batch.ts:47](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/task/batch.ts#L47)

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

[src/task/batch.ts:52](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/task/batch.ts#L52)

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

[src/task/batch.ts:58](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/task/batch.ts#L58)

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

[src/task/batch.ts:63](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/task/batch.ts#L63)

___

### end

▸ **end**(): `Promise`<[`Result`](activity_results.Result)<`any`\>[]\>

Executes the batch of commands added via [run](task_batch.Batch#run) returning result for each of the steps.

In case any of the commands will fail, the execution of the batch will be interrupted by the Provider.

#### Returns

`Promise`<[`Result`](activity_results.Result)<`any`\>[]\>

#### Defined in

[src/task/batch.ts:73](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/task/batch.ts#L73)

___

### endStream

▸ **endStream**(): `Promise`<`Readable`\>

#### Returns

`Promise`<`Readable`\>

#### Defined in

[src/task/batch.ts:99](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/task/batch.ts#L99)
