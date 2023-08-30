# Class: Batch

[task/batch](../modules/task_batch.md).Batch

## Table of contents

### Constructors

- [constructor](task_batch.Batch.md#constructor)

### Methods

- [create](task_batch.Batch.md#create)
- [run](task_batch.Batch.md#run)
- [uploadFile](task_batch.Batch.md#uploadfile)
- [uploadJson](task_batch.Batch.md#uploadjson)
- [uploadData](task_batch.Batch.md#uploaddata)
- [downloadFile](task_batch.Batch.md#downloadfile)
- [end](task_batch.Batch.md#end)
- [endStream](task_batch.Batch.md#endstream)

## Constructors

### constructor

• **new Batch**(`activity`, `storageProvider`, `logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | `Activity` |
| `storageProvider` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider.md) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger.md) |

#### Defined in

[src/task/batch.ts:15](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/batch.ts#L15)

## Methods

### create

▸ `Static` **create**(`activity`, `storageProvider`, `logger?`): [`Batch`](task_batch.Batch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | `Activity` |
| `storageProvider` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider.md) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger.md) |

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[src/task/batch.ts:11](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/batch.ts#L11)

___

### run

▸ **run**(`commandLine`): [`Batch`](task_batch.Batch.md)

Execute a command on provider using a shell (/bin/sh).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandLine` | `string` | Shell command to execute. |

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[src/task/batch.ts:28](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/batch.ts#L28)

▸ **run**(`executable`, `args`): [`Batch`](task_batch.Batch.md)

Execute an executable on provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executable` | `string` | Executable to run. |
| `args` | `string`[] | Executable arguments. |

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[src/task/batch.ts:36](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/batch.ts#L36)

___

### uploadFile

▸ **uploadFile**(`src`, `dst`): [`Batch`](task_batch.Batch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[src/task/batch.ts:47](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/batch.ts#L47)

___

### uploadJson

▸ **uploadJson**(`json`, `dst`): [`Batch`](task_batch.Batch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `object` |
| `dst` | `string` |

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[src/task/batch.ts:52](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/batch.ts#L52)

___

### uploadData

▸ **uploadData**(`data`, `dst`): [`Batch`](task_batch.Batch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `dst` | `string` |

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[src/task/batch.ts:58](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/batch.ts#L58)

___

### downloadFile

▸ **downloadFile**(`src`, `dst`): [`Batch`](task_batch.Batch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[src/task/batch.ts:63](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/batch.ts#L63)

___

### end

▸ **end**(): `Promise`<`Result`<`unknown`\>[]\>

Executes the batch of commands added via [run](task_batch.Batch.md#run) returning result for each of the steps.

In case any of the commands will fail, the execution of the batch will be interrupted by the Provider.

#### Returns

`Promise`<`Result`<`unknown`\>[]\>

#### Defined in

[src/task/batch.ts:73](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/batch.ts#L73)

___

### endStream

▸ **endStream**(): `Promise`<`Readable`\>

#### Returns

`Promise`<`Readable`\>

#### Defined in

[src/task/batch.ts:99](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/task/batch.ts#L99)
