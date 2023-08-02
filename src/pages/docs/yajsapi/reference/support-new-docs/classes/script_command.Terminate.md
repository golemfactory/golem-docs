# Class: Terminate

[script/command](../modules/script_command).Terminate

## Hierarchy

- `Command`

  ↳ **`Terminate`**

## Table of contents

### Constructors

- [constructor](script_command.Terminate#constructor)

### Properties

- [args](script_command.Terminate#args)

### Methods

- [toJson](script_command.Terminate#tojson)
- [toExeScriptRequest](script_command.Terminate#toexescriptrequest)
- [before](script_command.Terminate#before)
- [after](script_command.Terminate#after)

## Constructors

### constructor

• **new Terminate**(`args?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `object` |

#### Overrides

Command.constructor

#### Defined in

[yajsapi/script/command.ts:75](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/script/command.ts#L75)

## Properties

### args

• `Protected` **args**: `object`

#### Inherited from

Command.args

#### Defined in

[yajsapi/script/command.ts:8](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/script/command.ts#L8)

## Methods

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

#### Inherited from

Command.toJson

#### Defined in

[yajsapi/script/command.ts:12](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/script/command.ts#L12)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Inherited from

Command.toExeScriptRequest

#### Defined in

[yajsapi/script/command.ts:17](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/script/command.ts#L17)

___

### before

▸ **before**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Command.before

#### Defined in

[yajsapi/script/command.ts:20](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/script/command.ts#L20)

___

### after

▸ **after**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Command.after

#### Defined in

[yajsapi/script/command.ts:23](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/script/command.ts#L23)
