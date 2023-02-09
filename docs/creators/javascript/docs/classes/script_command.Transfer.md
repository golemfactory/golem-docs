# Class: Transfer

[script/command](../modules/script_command.md).Transfer

## Hierarchy

- [`Command`](script_command.Command.md)

  ↳ **`Transfer`**

  ↳↳ [`UploadFile`](script_command.UploadFile.md)

  ↳↳ [`DownloadFile`](script_command.DownloadFile.md)

## Table of contents

### Constructors

- [constructor](script_command.Transfer.md#constructor)

### Properties

- [from](script_command.Transfer.md#from)
- [to](script_command.Transfer.md#to)
- [args](script_command.Transfer.md#args)

### Methods

- [toJson](script_command.Transfer.md#tojson)
- [toExeScriptRequest](script_command.Transfer.md#toexescriptrequest)
- [before](script_command.Transfer.md#before)
- [after](script_command.Transfer.md#after)

## Constructors

### constructor

• **new Transfer**(`from?`, `to?`, `args?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `string` |
| `to?` | `string` |
| `args?` | `object` |

#### Overrides

[Command](script_command.Command.md).[constructor](script_command.Command.md#constructor)

#### Defined in

[yajsapi/script/command.ts:84](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/script/command.ts#L84)

## Properties

### from

• `Protected` `Optional` **from**: `string`

#### Defined in

[yajsapi/script/command.ts:84](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/script/command.ts#L84)

___

### to

• `Protected` `Optional` **to**: `string`

#### Defined in

[yajsapi/script/command.ts:84](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/script/command.ts#L84)

___

### args

• `Protected` **args**: `object`

#### Inherited from

[Command](script_command.Command.md).[args](script_command.Command.md#args)

#### Defined in

[yajsapi/script/command.ts:8](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/script/command.ts#L8)

## Methods

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

#### Inherited from

[Command](script_command.Command.md).[toJson](script_command.Command.md#tojson)

#### Defined in

[yajsapi/script/command.ts:12](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/script/command.ts#L12)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Inherited from

[Command](script_command.Command.md).[toExeScriptRequest](script_command.Command.md#toexescriptrequest)

#### Defined in

[yajsapi/script/command.ts:17](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/script/command.ts#L17)

___

### before

▸ **before**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Command](script_command.Command.md).[before](script_command.Command.md#before)

#### Defined in

[yajsapi/script/command.ts:20](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/script/command.ts#L20)

___

### after

▸ **after**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Command](script_command.Command.md).[after](script_command.Command.md#after)

#### Defined in

[yajsapi/script/command.ts:23](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/script/command.ts#L23)
