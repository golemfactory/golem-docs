# Class: Run

[script/command](../modules/script_command.md).Run

## Hierarchy

- [`Command`](script_command.Command.md)

  ↳ **`Run`**

## Table of contents

### Constructors

- [constructor](script_command.Run.md#constructor)

### Properties

- [args](script_command.Run.md#args)

### Methods

- [toJson](script_command.Run.md#tojson)
- [toExeScriptRequest](script_command.Run.md#toexescriptrequest)
- [before](script_command.Run.md#before)
- [after](script_command.Run.md#after)

## Constructors

### constructor

• **new Run**(`cmd`, `args?`, `env?`, `capture?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |
| `args?` | ``null`` \| `string`[] |
| `env?` | ``null`` \| `object` |
| `capture?` | [`Capture`](../modules/script_command.md#capture) |

#### Overrides

[Command](script_command.Command.md).[constructor](script_command.Command.md#constructor)

#### Defined in

[yajsapi/script/command.ts:61](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L61)

## Properties

### args

• `Protected` **args**: `object`

#### Inherited from

[Command](script_command.Command.md).[args](script_command.Command.md#args)

#### Defined in

[yajsapi/script/command.ts:8](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L8)

## Methods

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

#### Inherited from

[Command](script_command.Command.md).[toJson](script_command.Command.md#tojson)

#### Defined in

[yajsapi/script/command.ts:12](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L12)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Inherited from

[Command](script_command.Command.md).[toExeScriptRequest](script_command.Command.md#toexescriptrequest)

#### Defined in

[yajsapi/script/command.ts:17](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L17)

___

### before

▸ **before**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Command](script_command.Command.md).[before](script_command.Command.md#before)

#### Defined in

[yajsapi/script/command.ts:20](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L20)

___

### after

▸ **after**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Command](script_command.Command.md).[after](script_command.Command.md#after)

#### Defined in

[yajsapi/script/command.ts:23](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L23)
