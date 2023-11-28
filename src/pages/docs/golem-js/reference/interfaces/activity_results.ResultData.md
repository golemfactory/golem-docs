---
title: "Interface ResultData"
pageTitle: "Interface ResultData - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ResultData within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ResultData\<T\>

[activity/results](../modules/activity_results).ResultData

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Implemented by

- [`Result`](../classes/activity_results.Result)

## Table of contents

### Properties

- [index](activity_results.ResultData#index)
- [eventDate](activity_results.ResultData#eventdate)
- [result](activity_results.ResultData#result)
- [stdout](activity_results.ResultData#stdout)
- [stderr](activity_results.ResultData#stderr)
- [message](activity_results.ResultData#message)
- [isBatchFinished](activity_results.ResultData#isbatchfinished)
- [data](activity_results.ResultData#data)

## Properties

### index

• **index**: `number`

Index of script command

#### Defined in

[src/activity/results.ts:9](https://github.com/golemfactory/golem-js/blob/627e370/src/activity/results.ts#L9)

___

### eventDate

• **eventDate**: `string`

The datetime of the event on which the result was received

#### Defined in

[src/activity/results.ts:11](https://github.com/golemfactory/golem-js/blob/627e370/src/activity/results.ts#L11)

___

### result

• **result**: `ExeScriptCommandResultResultEnum`

If is success

#### Defined in

[src/activity/results.ts:13](https://github.com/golemfactory/golem-js/blob/627e370/src/activity/results.ts#L13)

___

### stdout

• `Optional` **stdout**: ``null`` \| `string` \| `ArrayBuffer`

stdout of script command

#### Defined in

[src/activity/results.ts:15](https://github.com/golemfactory/golem-js/blob/627e370/src/activity/results.ts#L15)

___

### stderr

• `Optional` **stderr**: ``null`` \| `string` \| `ArrayBuffer`

stderr of script command

#### Defined in

[src/activity/results.ts:17](https://github.com/golemfactory/golem-js/blob/627e370/src/activity/results.ts#L17)

___

### message

• `Optional` **message**: ``null`` \| `string`

an error message if the result is not successful

#### Defined in

[src/activity/results.ts:19](https://github.com/golemfactory/golem-js/blob/627e370/src/activity/results.ts#L19)

___

### isBatchFinished

• `Optional` **isBatchFinished**: `boolean`

Is batch of already finished

#### Defined in

[src/activity/results.ts:21](https://github.com/golemfactory/golem-js/blob/627e370/src/activity/results.ts#L21)

___

### data

• `Optional` **data**: `T`

In case the command was related to upload or download, this will contain the transferred data

#### Defined in

[src/activity/results.ts:24](https://github.com/golemfactory/golem-js/blob/627e370/src/activity/results.ts#L24)
