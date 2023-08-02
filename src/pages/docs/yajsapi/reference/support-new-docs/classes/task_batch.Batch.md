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
- [downloadFile](task_batch.Batch#downloadfile)
- [end](task_batch.Batch#end)
- [endStream](task_batch.Batch#endstream)

## Constructors

### constructor

• **new Batch**(`activity`, `storageProvider?`, `logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | `Activity` |
| `storageProvider?` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Defined in

[yajsapi/task/batch.ts:12](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/batch.ts#L12)

## Methods

### create

▸ `Static` **create**(`activity`, `storageProvider?`, `logger?`): [`Batch`](task_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | `Activity` |
| `storageProvider?` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[yajsapi/task/batch.ts:9](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/batch.ts#L9)

___

### run

▸ **run**(`...args`): [`Batch`](task_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | (`string` \| `string`[])[] |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[yajsapi/task/batch.ts:15](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/batch.ts#L15)

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

[yajsapi/task/batch.ts:21](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/batch.ts#L21)

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

[yajsapi/task/batch.ts:26](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/batch.ts#L26)

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

[yajsapi/task/batch.ts:32](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/batch.ts#L32)

___

### end

▸ **end**(): `Promise`<`Result`[]\>

#### Returns

`Promise`<`Result`[]\>

#### Defined in

[yajsapi/task/batch.ts:37](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/batch.ts#L37)

___

### endStream

▸ **endStream**(): `Promise`<`Readable`\>

#### Returns

`Promise`<`Readable`\>

#### Defined in

[yajsapi/task/batch.ts:60](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/task/batch.ts#L60)
