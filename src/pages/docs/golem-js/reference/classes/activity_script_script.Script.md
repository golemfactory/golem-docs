---
title: "Class Script"
pageTitle: "Class Script - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Script within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Script

[activity/script/script](../modules/activity_script_script).Script

Represents a series of Commands that can be sent to exe-unit via yagna's API

## Table of contents

### Constructors

- [constructor](activity_script_script.Script#constructor)

### Methods

- [create](activity_script_script.Script#create)
- [add](activity_script_script.Script#add)
- [before](activity_script_script.Script#before)
- [after](activity_script_script.Script#after)
- [getExeScriptRequest](activity_script_script.Script#getexescriptrequest)

## Constructors

### constructor

• **new Script**(`commands?`): [`Script`](activity_script_script.Script)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `commands` | [`Command`](activity_script_command.Command)\<`unknown`\>[] | `[]` |

#### Returns

[`Script`](activity_script_script.Script)

#### Defined in

[src/activity/script/script.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/script/script.ts#L10)

## Methods

### create

▸ **create**(`commands?`): [`Script`](activity_script_script.Script)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands?` | [`Command`](activity_script_command.Command)\<`unknown`\>[] |

#### Returns

[`Script`](activity_script_script.Script)

#### Defined in

[src/activity/script/script.ts:12](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/script/script.ts#L12)

___

### add

▸ **add**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`Command`](activity_script_command.Command)\<`unknown`\> |

#### Returns

`void`

#### Defined in

[src/activity/script/script.ts:16](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/script/script.ts#L16)

___

### before

▸ **before**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/activity/script/script.ts:20](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/script/script.ts#L20)

___

### after

▸ **after**(`results`): `Promise`\<[`Result`](activity_results.Result)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | [`Result`](activity_results.Result)\<`any`\>[] |

#### Returns

`Promise`\<[`Result`](activity_results.Result)\<`any`\>[]\>

#### Defined in

[src/activity/script/script.ts:24](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/script/script.ts#L24)

___

### getExeScriptRequest

▸ **getExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Defined in

[src/activity/script/script.ts:29](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/script/script.ts#L29)
