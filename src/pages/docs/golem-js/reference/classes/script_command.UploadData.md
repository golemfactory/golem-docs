---
title: "Class UploadData - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class UploadData within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: UploadData

[script/command](../modules/script_command).UploadData

## Hierarchy

- `Transfer`

  ↳ **`UploadData`**

## Table of contents

### Constructors

- [constructor](script_command.UploadData#constructor)

### Properties

- [from](script_command.UploadData#from)
- [to](script_command.UploadData#to)
- [args](script_command.UploadData#args)

### Methods

- [before](script_command.UploadData#before)
- [after](script_command.UploadData#after)
- [toJson](script_command.UploadData#tojson)
- [toExeScriptRequest](script_command.UploadData#toexescriptrequest)

## Constructors

### constructor

• **new UploadData**(`storageProvider`, `src`, `dstPath`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageProvider` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |
| `src` | `Uint8Array` |
| `dstPath` | `string` |

#### Overrides

Transfer.constructor

#### Defined in

[src/script/command.ts:151](https://github.com/golemfactory/golem-js/blob/19d9abe/src/script/command.ts#L151)

## Properties

### from

• `Protected` `Optional` **from**: `string`

#### Inherited from

Transfer.from

#### Defined in

[src/script/command.ts:116](https://github.com/golemfactory/golem-js/blob/19d9abe/src/script/command.ts#L116)

___

### to

• `Protected` `Optional` **to**: `string`

#### Inherited from

Transfer.to

#### Defined in

[src/script/command.ts:117](https://github.com/golemfactory/golem-js/blob/19d9abe/src/script/command.ts#L117)

___

### args

• `Protected` **args**: `object`

#### Inherited from

Transfer.args

#### Defined in

[src/script/command.ts:16](https://github.com/golemfactory/golem-js/blob/19d9abe/src/script/command.ts#L16)

## Methods

### before

▸ **before**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

Transfer.before

#### Defined in

[src/script/command.ts:160](https://github.com/golemfactory/golem-js/blob/19d9abe/src/script/command.ts#L160)

___

### after

▸ **after**(`result`): `Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`Result`](activity_results.Result)<`any`\> |

#### Returns

`Promise`<[`Result`](activity_results.Result)<`any`\>\>

#### Overrides

Transfer.after

#### Defined in

[src/script/command.ts:164](https://github.com/golemfactory/golem-js/blob/19d9abe/src/script/command.ts#L164)

___

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

#### Inherited from

Transfer.toJson

#### Defined in

[src/script/command.ts:25](https://github.com/golemfactory/golem-js/blob/19d9abe/src/script/command.ts#L25)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Inherited from

Transfer.toExeScriptRequest

#### Defined in

[src/script/command.ts:31](https://github.com/golemfactory/golem-js/blob/19d9abe/src/script/command.ts#L31)
