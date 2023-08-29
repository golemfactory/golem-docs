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
| `activity` | `Activity` |
| `storageProvider` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Defined in

[src/task/batch.ts:15](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/batch.ts#L15)

## Methods

### create

▸ `Static` **create**(`activity`, `storageProvider`, `logger?`): [`Batch`](task_batch.Batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activity` | `Activity` |
| `storageProvider` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) |

#### Returns

[`Batch`](task_batch.Batch)

#### Defined in

[src/task/batch.ts:11](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/batch.ts#L11)

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

[src/task/batch.ts:23](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/batch.ts#L23)

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

[src/task/batch.ts:30](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/batch.ts#L30)

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

[src/task/batch.ts:35](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/batch.ts#L35)

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

[src/task/batch.ts:41](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/batch.ts#L41)

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

[src/task/batch.ts:46](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/batch.ts#L46)

___

### end

▸ **end**(): `Promise`<`Result`<`unknown`\>[]\>

#### Returns

`Promise`<`Result`<`unknown`\>[]\>

#### Defined in

[src/task/batch.ts:51](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/batch.ts#L51)

___

### endStream

▸ **endStream**(): `Promise`<`Readable`\>

#### Returns

`Promise`<`Readable`\>

#### Defined in

[src/task/batch.ts:81](https://github.com/golemfactory/yajsapi/blob/7987f19/src/task/batch.ts#L81)
