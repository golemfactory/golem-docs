---
title: "Class Transfer"
pageTitle: "Class Transfer - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Transfer within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Transfer\<T\>

[activity/script/command](../modules/activity_script_command).Transfer

Generic command that can be send to an exe-unit via yagna's API

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`Command`](activity_script_command.Command)\<`T`\>

  ↳ **`Transfer`**

  ↳↳ [`UploadFile`](activity_script_command.UploadFile)

  ↳↳ [`UploadData`](activity_script_command.UploadData)

  ↳↳ [`DownloadFile`](activity_script_command.DownloadFile)

  ↳↳ [`DownloadData`](activity_script_command.DownloadData)

## Table of contents

### Constructors

- [constructor](activity_script_command.Transfer#constructor)

### Properties

- [from](activity_script_command.Transfer#from)
- [to](activity_script_command.Transfer#to)
- [args](activity_script_command.Transfer#args)

### Methods

- [toJson](activity_script_command.Transfer#tojson)
- [toExeScriptRequest](activity_script_command.Transfer#toexescriptrequest)
- [before](activity_script_command.Transfer#before)
- [after](activity_script_command.Transfer#after)

## Constructors

### constructor

• **new Transfer**\<`T`\>(`from?`, `to?`, `args?`): [`Transfer`](activity_script_command.Transfer)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `string` |
| `to?` | `string` |
| `args?` | `object` |

#### Returns

[`Transfer`](activity_script_command.Transfer)\<`T`\>

#### Overrides

[Command](activity_script_command.Command).[constructor](activity_script_command.Command#constructor)

#### Defined in

[src/activity/script/command.ts:109](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L109)

## Properties

### from

• `Protected` `Optional` **from**: `string`

#### Defined in

[src/activity/script/command.ts:110](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L110)

___

### to

• `Protected` `Optional` **to**: `string`

#### Defined in

[src/activity/script/command.ts:111](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L111)

___

### args

• `Protected` **args**: `Record`\<`string`, `unknown`\>

#### Inherited from

[Command](activity_script_command.Command).[args](activity_script_command.Command#args)

#### Defined in

[src/activity/script/command.ts:16](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L16)

## Methods

### toJson

▸ **toJson**(): `Object`

Serializes the command to a JSON representation

#### Returns

`Object`

#### Inherited from

[Command](activity_script_command.Command).[toJson](activity_script_command.Command#tojson)

#### Defined in

[src/activity/script/command.ts:28](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L28)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

Converts the command into

#### Returns

`ExeScriptRequest`

#### Inherited from

[Command](activity_script_command.Command).[toExeScriptRequest](activity_script_command.Command#toexescriptrequest)

#### Defined in

[src/activity/script/command.ts:37](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L37)

___

### before

▸ **before**(): `Promise`\<`void`\>

Setup local environment for executing this command.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Command](activity_script_command.Command).[before](activity_script_command.Command#before)

#### Defined in

[src/activity/script/command.ts:44](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L44)

___

### after

▸ **after**(`result?`): `Promise`\<[`Result`](activity_results.Result)\<`T`\>\>

Cleanup local setup that was needed for the command to run.

It is called after the command was sent to the activity, and the command was processed.

When run within scripts or batch commands, after() might be called without any results, as one of the previous
commands might have failed. In this case, the command should still cleanup its local setup and return an empty
error result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `result?` | [`Result`](activity_results.Result)\<`T`\> |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`T`\>\>

#### Inherited from

[Command](activity_script_command.Command).[after](activity_script_command.Command#after)

#### Defined in

[src/activity/script/command.ts:57](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L57)
