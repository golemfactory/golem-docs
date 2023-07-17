[JavaScript API reference](../README) / DownloadFile

# Class: DownloadFile

## Hierarchy

- [`Transfer`](Transfer)

  ↳ **`DownloadFile`**

## Table of contents

### Constructors

- [constructor](DownloadFile#constructor)

### Methods

- [before](DownloadFile#before)
- [toJson](DownloadFile#tojson)
- [toExeScriptRequest](DownloadFile#toexescriptrequest)
- [after](DownloadFile#after)

## Constructors

### constructor

• **new DownloadFile**(`storageProvider`, `srcPath`, `dstPath`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageProvider` | `StorageProvider` |
| `srcPath` | `string` |
| `dstPath` | `string` |

#### Overrides

[Transfer](Transfer).[constructor](Transfer#constructor)

#### Defined in

[script/command.ts:106](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L106)

## Methods

### before

▸ **before**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[Transfer](Transfer).[before](Transfer#before)

#### Defined in

[script/command.ts:110](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L110)

___

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

#### Inherited from

[Transfer](Transfer).[toJson](Transfer#tojson)

#### Defined in

[script/command.ts:12](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L12)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Inherited from

[Transfer](Transfer).[toExeScriptRequest](Transfer#toexescriptrequest)

#### Defined in

[script/command.ts:17](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L17)

___

### after

▸ **after**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Transfer](Transfer).[after](Transfer#after)

#### Defined in

[script/command.ts:23](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L23)
