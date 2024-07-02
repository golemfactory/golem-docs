---
title: "Class DownloadFile"
pageTitle: "Class DownloadFile - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class DownloadFile within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: DownloadFile

[activity/script/command](../modules/activity_script_command).DownloadFile

Generic command that can be send to an exe-unit via yagna's API

## Hierarchy

- [`Transfer`](activity_script_command.Transfer)

  ↳ **`DownloadFile`**

## Table of contents

### Constructors

- [constructor](activity_script_command.DownloadFile#constructor)

### Properties

- [from](activity_script_command.DownloadFile#from)
- [to](activity_script_command.DownloadFile#to)
- [args](activity_script_command.DownloadFile#args)

### Methods

- [before](activity_script_command.DownloadFile#before)
- [after](activity_script_command.DownloadFile#after)
- [toJson](activity_script_command.DownloadFile#tojson)
- [toExeScriptRequest](activity_script_command.DownloadFile#toexescriptrequest)

## Constructors

### constructor

• **new DownloadFile**(`storageProvider`, `srcPath`, `dstPath`): [`DownloadFile`](activity_script_command.DownloadFile)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageProvider` | [`StorageProvider`](../interfaces/shared_storage_provider.StorageProvider) |
| `srcPath` | `string` |
| `dstPath` | `string` |

#### Returns

[`DownloadFile`](activity_script_command.DownloadFile)

#### Overrides

[Transfer](activity_script_command.Transfer).[constructor](activity_script_command.Transfer#constructor)

#### Defined in

[src/activity/script/command.ts:159](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L159)

## Properties

### from

• `Protected` `Optional` **from**: `string`

#### Inherited from

[Transfer](activity_script_command.Transfer).[from](activity_script_command.Transfer#from)

#### Defined in

[src/activity/script/command.ts:110](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L110)

___

### to

• `Protected` `Optional` **to**: `string`

#### Inherited from

[Transfer](activity_script_command.Transfer).[to](activity_script_command.Transfer#to)

#### Defined in

[src/activity/script/command.ts:111](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L111)

___

### args

• `Protected` **args**: `Record`\<`string`, `unknown`\>

#### Inherited from

[Transfer](activity_script_command.Transfer).[args](activity_script_command.Transfer#args)

#### Defined in

[src/activity/script/command.ts:16](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L16)

## Methods

### before

▸ **before**(): `Promise`\<`void`\>

Setup local environment for executing this command.

#### Returns

`Promise`\<`void`\>

#### Overrides

[Transfer](activity_script_command.Transfer).[before](activity_script_command.Transfer#before)

#### Defined in

[src/activity/script/command.ts:168](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L168)

___

### after

▸ **after**(`result`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

Cleanup local setup that was needed for the command to run.

It is called after the command was sent to the activity, and the command was processed.

When run within scripts or batch commands, after() might be called without any results, as one of the previous
commands might have failed. In this case, the command should still cleanup its local setup and return an empty
error result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`Result`](activity_results.Result)\<`any`\> |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>\>

#### Overrides

[Transfer](activity_script_command.Transfer).[after](activity_script_command.Transfer#after)

#### Defined in

[src/activity/script/command.ts:172](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L172)

___

### toJson

▸ **toJson**(): `Object`

Serializes the command to a JSON representation

#### Returns

`Object`

#### Inherited from

[Transfer](activity_script_command.Transfer).[toJson](activity_script_command.Transfer#tojson)

#### Defined in

[src/activity/script/command.ts:28](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L28)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

Converts the command into

#### Returns

`ExeScriptRequest`

#### Inherited from

[Transfer](activity_script_command.Transfer).[toExeScriptRequest](activity_script_command.Transfer#toexescriptrequest)

#### Defined in

[src/activity/script/command.ts:37](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L37)
