# Class: Start

[script/command](../modules/script_command.md).Start

## Hierarchy

- [`Command`](script_command.Command.md)

  ↳ **`Start`**

## Table of contents

### Constructors

- [constructor](script_command.Start.md#constructor)

### Properties

- [args](script_command.Start.md#args)

### Methods

- [toJson](script_command.Start.md#tojson)
- [toExeScriptRequest](script_command.Start.md#toexescriptrequest)
- [before](script_command.Start.md#before)
- [after](script_command.Start.md#after)

## Constructors

### constructor

• **new Start**(`args?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `object` |

#### Overrides

[Command](script_command.Command.md).[constructor](script_command.Command.md#constructor)

#### Defined in

[yajsapi/script/command.ts:41](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/script/command.ts#L41)

## Properties

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
