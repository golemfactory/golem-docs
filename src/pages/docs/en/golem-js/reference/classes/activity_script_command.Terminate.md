---
title: "Class Terminate"
pageTitle: "Class Terminate - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Terminate within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Terminate

[activity/script/command](../modules/activity_script_command).Terminate

Generic command that can be send to an exe-unit via yagna's API

## Hierarchy

- [`Command`](activity_script_command.Command)

  ↳ **`Terminate`**

## Table of contents

### Constructors

- [constructor](activity_script_command.Terminate#constructor)

### Properties

- [args](activity_script_command.Terminate#args)

### Methods

- [toJson](activity_script_command.Terminate#tojson)
- [toExeScriptRequest](activity_script_command.Terminate#toexescriptrequest)
- [before](activity_script_command.Terminate#before)
- [after](activity_script_command.Terminate#after)

## Constructors

### constructor

• **new Terminate**(`args?`): [`Terminate`](activity_script_command.Terminate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Record`\<`string`, `unknown`\> |

#### Returns

[`Terminate`](activity_script_command.Terminate)

#### Overrides

[Command](activity_script_command.Command).[constructor](activity_script_command.Command#constructor)

#### Defined in

[src/activity/script/command.ts:103](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L103)

## Properties

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

▸ **after**(`result?`): `Promise`\<[`Result`](activity_results.Result)\<`unknown`\>\>

Cleanup local setup that was needed for the command to run.

It is called after the command was sent to the activity, and the command was processed.

When run within scripts or batch commands, after() might be called without any results, as one of the previous
commands might have failed. In this case, the command should still cleanup its local setup and return an empty
error result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `result?` | [`Result`](activity_results.Result)\<`unknown`\> |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`unknown`\>\>

#### Inherited from

[Command](activity_script_command.Command).[after](activity_script_command.Command#after)

#### Defined in

[src/activity/script/command.ts:57](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L57)