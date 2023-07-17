[JavaScript API reference](../README) / Transfer

# Class: Transfer

## Hierarchy

- `Command`

  ↳ **`Transfer`**

  ↳↳ [`UploadFile`](UploadFile)

  ↳↳ [`DownloadFile`](DownloadFile)

## Table of contents

### Constructors

- [constructor](Transfer#constructor)

### Methods

- [toJson](Transfer#tojson)
- [toExeScriptRequest](Transfer#toexescriptrequest)
- [before](Transfer#before)
- [after](Transfer#after)

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

Command.constructor

#### Defined in

[script/command.ts:84](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/command.ts#L84)

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
