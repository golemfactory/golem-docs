# Class: Command

[script/command](../modules/script_command.md).Command

## Hierarchy

- **`Command`**

  ↳ [`Deploy`](script_command.Deploy.md)

  ↳ [`Start`](script_command.Start.md)

  ↳ [`Run`](script_command.Run.md)

  ↳ [`Terminate`](script_command.Terminate.md)

  ↳ [`Transfer`](script_command.Transfer.md)

## Table of contents

### Constructors

- [constructor](script_command.Command.md#constructor)

### Properties

- [args](script_command.Command.md#args)

### Methods

- [toJson](script_command.Command.md#tojson)
- [toExeScriptRequest](script_command.Command.md#toexescriptrequest)
- [before](script_command.Command.md#before)
- [after](script_command.Command.md#after)

## Constructors

### constructor

• **new Command**(`commandName`, `args?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandName` | `string` |
| `args?` | `object` |

#### Defined in

[yajsapi/script/command.ts:9](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L9)

## Properties

### args

• `Protected` **args**: `object`

#### Defined in

[yajsapi/script/command.ts:8](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L8)

## Methods

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

#### Defined in

[yajsapi/script/command.ts:12](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L12)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Defined in

[yajsapi/script/command.ts:17](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L17)

___

### before

▸ **before**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/script/command.ts:20](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L20)

___

### after

▸ **after**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/script/command.ts:23](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/command.ts#L23)
