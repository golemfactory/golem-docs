[JavaScript API reference](../README) / Deploy

# Class: Deploy

## Hierarchy

- `Command`

  ↳ **`Deploy`**

## Table of contents

### Constructors

- [constructor](Deploy#constructor)

### Methods

- [toJson](Deploy#tojson)
- [toExeScriptRequest](Deploy#toexescriptrequest)
- [before](Deploy#before)
- [after](Deploy#after)

## Constructors

### constructor

• **new Deploy**(`args?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `object` |

#### Overrides

Command.constructor

#### Defined in

[script/command.ts:32](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L32)

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
