# Class: UploadFile

[script/command](../modules/script_command.md).UploadFile

## Hierarchy

- [`Transfer`](script_command.Transfer.md)

  ↳ **`UploadFile`**

## Table of contents

### Constructors

- [constructor](script_command.UploadFile.md#constructor)

### Methods

- [before](script_command.UploadFile.md#before)
- [toJson](script_command.UploadFile.md#tojson)
- [toExeScriptRequest](script_command.UploadFile.md#toexescriptrequest)
- [after](script_command.UploadFile.md#after)

### Properties

- [from](script_command.UploadFile.md#from)
- [to](script_command.UploadFile.md#to)
- [args](script_command.UploadFile.md#args)

## Constructors

### constructor

• **new UploadFile**(`storageProvider`, `src`, `dstPath`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageProvider` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider.md) |
| `src` | `string` \| `Buffer` |
| `dstPath` | `string` |

#### Overrides

[Transfer](script_command.Transfer.md).[constructor](script_command.Transfer.md#constructor)

#### Defined in

[yajsapi/script/command.ts:93](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L93)

## Methods

### before

▸ **before**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[Transfer](script_command.Transfer.md).[before](script_command.Transfer.md#before)

#### Defined in

[yajsapi/script/command.ts:97](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L97)

___

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

#### Inherited from

[Transfer](script_command.Transfer.md).[toJson](script_command.Transfer.md#tojson)

#### Defined in

[yajsapi/script/command.ts:12](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L12)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Inherited from

[Transfer](script_command.Transfer.md).[toExeScriptRequest](script_command.Transfer.md#toexescriptrequest)

#### Defined in

[yajsapi/script/command.ts:17](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L17)

___

### after

▸ **after**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Transfer](script_command.Transfer.md).[after](script_command.Transfer.md#after)

#### Defined in

[yajsapi/script/command.ts:23](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L23)

## Properties

### from

• `Protected` `Optional` **from**: `string`

#### Inherited from

[Transfer](script_command.Transfer.md).[from](script_command.Transfer.md#from)

#### Defined in

[yajsapi/script/command.ts:84](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L84)

___

### to

• `Protected` `Optional` **to**: `string`

#### Inherited from

[Transfer](script_command.Transfer.md).[to](script_command.Transfer.md#to)

#### Defined in

[yajsapi/script/command.ts:84](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L84)

___

### args

• `Protected` **args**: `object`

#### Inherited from

[Transfer](script_command.Transfer.md).[args](script_command.Transfer.md#args)

#### Defined in

[yajsapi/script/command.ts:8](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L8)
