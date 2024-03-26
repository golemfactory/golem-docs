---
title: "Class Terminate"
pageTitle: "Class Terminate - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Terminate within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Terminate

[script/command](../modules/script_command).Terminate

## Hierarchy

- `Command`

  ↳ **`Terminate`**

## Table of contents

### Constructors

- [constructor](script_command.Terminate#constructor)

### Properties

- [args](script_command.Terminate#args)

### Methods

- [toJson](script_command.Terminate#tojson)
- [toExeScriptRequest](script_command.Terminate#toexescriptrequest)
- [before](script_command.Terminate#before)
- [after](script_command.Terminate#after)

## Constructors

### constructor

• **new Terminate**(`args?`): [`Terminate`](script_command.Terminate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Record`\<`string`, `unknown`\> |

#### Returns

[`Terminate`](script_command.Terminate)

#### Overrides

Command.constructor

#### Defined in

[src/script/command.ts:110](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L110)

## Properties

### args

• `Protected` **args**: `Record`\<`string`, `unknown`\>

#### Inherited from

Command.args

#### Defined in

[src/script/command.ts:20](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L20)

## Methods

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

#### Inherited from

Command.toJson

#### Defined in

[src/script/command.ts:29](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L29)

___

### toExeScriptRequest

▸ **toExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Inherited from

Command.toExeScriptRequest

#### Defined in

[src/script/command.ts:35](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L35)

___

### before

▸ **before**(): `Promise`\<`void`\>

Setup local environment for executing this command.

#### Returns

`Promise`\<`void`\>

#### Inherited from

Command.before

#### Defined in

[src/script/command.ts:42](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L42)

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

Command.after

#### Defined in

[src/script/command.ts:57](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/script/command.ts#L57)
