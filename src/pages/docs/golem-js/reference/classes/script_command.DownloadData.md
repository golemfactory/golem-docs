---
title: "Class DownloadData"
pageTitle: "Class DownloadData - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DownloadData within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: DownloadData

[script/command](../modules/script_command).DownloadData

## Hierarchy

- `Transfer`\<`Uint8Array`\>

  ↳ **`DownloadData`**

## Table of contents

### Constructors

- [constructor](script_command.DownloadData#constructor)

### Properties

- [from](script_command.DownloadData#from)
- [to](script_command.DownloadData#to)
- [args](script_command.DownloadData#args)

### Methods

- [before](script_command.DownloadData#before)
- [after](script_command.DownloadData#after)
- [toJson](script_command.DownloadData#tojson)
- [toExeScriptRequest](script_command.DownloadData#toexescriptrequest)

## Constructors

### constructor

• **new DownloadData**(`storageProvider`, `srcPath`): [`DownloadData`](script_command.DownloadData)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageProvider` | [`StorageProvider`](../interfaces/storage_provider.StorageProvider) |
| `srcPath` | `string` |

#### Returns

[`DownloadData`](script_command.DownloadData)

#### Overrides

Transfer\&lt;Uint8Array\&gt;.constructor

#### Defined in

[src/script/command.ts:203](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L203)

## Properties

### from

• `Protected` `Optional` **from**: `string`

#### Inherited from

Transfer.from

#### Defined in

[src/script/command.ts:120](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L120)

___

### to

• `Protected` `Optional` **to**: `string`

#### Inherited from

Transfer.to

#### Defined in

[src/script/command.ts:121](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L121)

___

### args

• `Protected` **args**: `Record`\<`string`, `unknown`\>

#### Inherited from

Transfer.args

#### Defined in

[src/script/command.ts:20](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L20)

## Methods

### before

▸ **before**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

Transfer.before

#### Defined in

[src/script/command.ts:211](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L211)

___

### after

▸ **after**(`result`): `Promise`\<[`Result`](activity_results.Result)\<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`Result`](activity_results.Result)\<`any`\> |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`Uint8Array`\>\>

#### Overrides

Transfer.after

#### Defined in

[src/script/command.ts:218](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L218)

___

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

#### Inherited from

Transfer.toJson

#### Defined in

[src/script/command.ts:29](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L29)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Inherited from

Transfer.toExeScriptRequest

#### Defined in

[src/script/command.ts:35](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L35)
