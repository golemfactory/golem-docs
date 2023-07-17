[JavaScript API reference](../README) / UploadFile

# Class: UploadFile

## Hierarchy

- [`Transfer`](Transfer)

  ↳ **`UploadFile`**

## Table of contents

### Constructors

- [constructor](UploadFile#constructor)

### Methods

- [before](UploadFile#before)
- [toJson](UploadFile#tojson)
- [toExeScriptRequest](UploadFile#toexescriptrequest)
- [after](UploadFile#after)

## Constructors

### constructor

• **new UploadFile**(`storageProvider`, `src`, `dstPath`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageProvider` | `StorageProvider` |
| `src` | `string` \| `Buffer` |
| `dstPath` | `string` |

#### Overrides

[Transfer](Transfer).[constructor](Transfer#constructor)

#### Defined in

[script/command.ts:93](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L93)

## Methods

### before

▸ **before**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[Transfer](Transfer).[before](Transfer#before)

#### Defined in

[script/command.ts:97](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L97)

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
