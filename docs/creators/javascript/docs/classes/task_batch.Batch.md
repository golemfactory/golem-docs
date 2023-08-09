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
- [downloadFile](task_batch.Batch.md#downloadfile)
- [end](task_batch.Batch.md#end)
- [endStream](task_batch.Batch.md#endstream)

## Constructors

### constructor

• **new Batch**(`activity`, `storageProvider?`, `logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | `Activity` |
| `storageProvider?` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider.md) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger.md) |

#### Defined in

[yajsapi/task/batch.ts:12](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/task/batch.ts#L12)

## Methods

### create

▸ `Static` **create**(`activity`, `storageProvider?`, `logger?`): [`Batch`](task_batch.Batch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | `Activity` |
| `storageProvider?` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider.md) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger.md) |

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[yajsapi/task/batch.ts:9](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/task/batch.ts#L9)

___

### run

▸ **run**(`...args`): [`Batch`](task_batch.Batch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | (`string` \| `string`[])[] |

#### Returns

[`Batch`](task_batch.Batch.md)

#### Defined in

[yajsapi/task/batch.ts:15](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/task/batch.ts#L15)

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

[yajsapi/task/batch.ts:21](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/task/batch.ts#L21)

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

[yajsapi/task/batch.ts:26](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/task/batch.ts#L26)

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

[yajsapi/task/batch.ts:32](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/task/batch.ts#L32)

___

### end

▸ **end**(): `Promise`<`Result`[]\>

#### Returns

`Promise`<`Result`[]\>

#### Defined in

[yajsapi/task/batch.ts:37](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/task/batch.ts#L37)

___

### endStream

▸ **endStream**(): `Promise`<`Readable`\>

#### Returns

`Promise`<`Readable`\>

#### Defined in

[yajsapi/task/batch.ts:60](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/task/batch.ts#L60)
