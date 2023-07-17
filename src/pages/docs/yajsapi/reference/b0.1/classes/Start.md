[JavaScript API reference](../README) / Start

# Class: Start

## Hierarchy

- `Command`

  ↳ **`Start`**

## Table of contents

### Constructors

- [constructor](Start#constructor)

### Methods

- [toJson](Start#tojson)
- [toExeScriptRequest](Start#toexescriptrequest)
- [before](Start#before)
- [after](Start#after)

## Constructors

### constructor

• **new Start**(`args?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `object` |

#### Overrides

Command.constructor

#### Defined in

[script/command.ts:41](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L41)

## Methods

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

#### Inherited from

Command.toJson

#### Defined in

[script/command.ts:12](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L12)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Inherited from

Command.toExeScriptRequest

#### Defined in

[script/command.ts:17](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L17)

___

### before

▸ **before**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Command.before

#### Defined in

[script/command.ts:20](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L20)

___

### after

▸ **after**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Command.after

#### Defined in

[script/command.ts:23](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L23)
