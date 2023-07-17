[JavaScript API reference](../README) / Run

# Class: Run

## Hierarchy

- `Command`

  ↳ **`Run`**

## Table of contents

### Constructors

- [constructor](Run#constructor)

### Methods

- [toJson](Run#tojson)
- [toExeScriptRequest](Run#toexescriptrequest)
- [before](Run#before)
- [after](Run#after)

## Constructors

### constructor

• **new Run**(`cmd`, `args?`, `env?`, `capture?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |
| `args?` | ``null`` \| `string`[] |
| `env?` | ``null`` \| `object` |
| `capture?` | `Capture` |

#### Overrides

Command.constructor

#### Defined in

[script/command.ts:61](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L61)

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
