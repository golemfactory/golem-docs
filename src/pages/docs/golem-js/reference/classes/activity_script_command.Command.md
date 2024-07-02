---
title: "Class Command"
pageTitle: "Class Command - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Command within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Command\<T\>

[activity/script/command](../modules/activity_script_command).Command

Generic command that can be send to an exe-unit via yagna's API

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`Command`**

  ↳ [`Deploy`](activity_script_command.Deploy)

  ↳ [`Start`](activity_script_command.Start)

  ↳ [`Run`](activity_script_command.Run)

  ↳ [`Terminate`](activity_script_command.Terminate)

  ↳ [`Transfer`](activity_script_command.Transfer)

## Table of contents

### Constructors

- [constructor](activity_script_command.Command#constructor)

### Properties

- [args](activity_script_command.Command#args)

### Methods

- [toJson](activity_script_command.Command#tojson)
- [toExeScriptRequest](activity_script_command.Command#toexescriptrequest)
- [before](activity_script_command.Command#before)
- [after](activity_script_command.Command#after)

## Constructors

### constructor

• **new Command**\<`T`\>(`commandName`, `args?`): [`Command`](activity_script_command.Command)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandName` | `string` |
| `args?` | `Record`\<`string`, `unknown`\> |

#### Returns

[`Command`](activity_script_command.Command)\<`T`\>

#### Defined in

[src/activity/script/command.ts:18](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L18)

## Properties

### args

• `Protected` **args**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/activity/script/command.ts:16](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L16)

## Methods

### toJson

▸ **toJson**(): `Object`

Serializes the command to a JSON representation

#### Returns

`Object`

#### Defined in

[src/activity/script/command.ts:28](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L28)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

Converts the command into

#### Returns

`ExeScriptRequest`

#### Defined in

[src/activity/script/command.ts:37](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L37)

___

### before

▸ **before**(): `Promise`\<`void`\>

Setup local environment for executing this command.

#### Returns

`Promise`\<`void`\>

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

#### Defined in

[src/activity/script/command.ts:57](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L57)
