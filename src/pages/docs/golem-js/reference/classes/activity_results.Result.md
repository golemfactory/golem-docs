---
title: "Class Result - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Result within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: Result<TData\>

[activity/results](../modules/activity_results).Result

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `any` |

## Implements

- [`ResultData`](../interfaces/activity_results.ResultData)<`TData`\>

## Table of contents

### Constructors

- [constructor](activity_results.Result#constructor)

### Properties

- [index](activity_results.Result#index)
- [eventDate](activity_results.Result#eventdate)
- [result](activity_results.Result#result)
- [stdout](activity_results.Result#stdout)
- [stderr](activity_results.Result#stderr)
- [message](activity_results.Result#message)
- [isBatchFinished](activity_results.Result#isbatchfinished)
- [data](activity_results.Result#data)

### Methods

- [getOutputAsJson](activity_results.Result#getoutputasjson)

## Constructors

### constructor

• **new Result**<`TData`\>(`props`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ResultData`](../interfaces/activity_results.ResultData)<`any`\> |

#### Defined in

[src/activity/results.ts:39](https://github.com/golemfactory/golem-js/blob/0448b6b/src/activity/results.ts#L39)

## Properties

### index

• **index**: `number`

Index of script command

#### Implementation of

[ResultData](../interfaces/activity_results.ResultData).[index](../interfaces/activity_results.ResultData#index)

#### Defined in

[src/activity/results.ts:30](https://github.com/golemfactory/golem-js/blob/0448b6b/src/activity/results.ts#L30)

___

### eventDate

• **eventDate**: `string`

The datetime of the event on which the result was received

#### Implementation of

[ResultData](../interfaces/activity_results.ResultData).[eventDate](../interfaces/activity_results.ResultData#eventdate)

#### Defined in

[src/activity/results.ts:31](https://github.com/golemfactory/golem-js/blob/0448b6b/src/activity/results.ts#L31)

___

### result

• **result**: `ExeScriptCommandResultResultEnum`

If is success

#### Implementation of

[ResultData](../interfaces/activity_results.ResultData).[result](../interfaces/activity_results.ResultData#result)

#### Defined in

[src/activity/results.ts:32](https://github.com/golemfactory/golem-js/blob/0448b6b/src/activity/results.ts#L32)

___

### stdout

• `Optional` **stdout**: ``null`` \| `string` \| `ArrayBuffer`

stdout of script command

#### Implementation of

[ResultData](../interfaces/activity_results.ResultData).[stdout](../interfaces/activity_results.ResultData#stdout)

#### Defined in

[src/activity/results.ts:33](https://github.com/golemfactory/golem-js/blob/0448b6b/src/activity/results.ts#L33)

___

### stderr

• `Optional` **stderr**: ``null`` \| `string` \| `ArrayBuffer`

stderr of script command

#### Implementation of

[ResultData](../interfaces/activity_results.ResultData).[stderr](../interfaces/activity_results.ResultData#stderr)

#### Defined in

[src/activity/results.ts:34](https://github.com/golemfactory/golem-js/blob/0448b6b/src/activity/results.ts#L34)

___

### message

• `Optional` **message**: ``null`` \| `string`

an error message if the result is not successful

#### Implementation of

[ResultData](../interfaces/activity_results.ResultData).[message](../interfaces/activity_results.ResultData#message)

#### Defined in

[src/activity/results.ts:35](https://github.com/golemfactory/golem-js/blob/0448b6b/src/activity/results.ts#L35)

___

### isBatchFinished

• `Optional` **isBatchFinished**: `boolean`

Is batch of already finished

#### Implementation of

[ResultData](../interfaces/activity_results.ResultData).[isBatchFinished](../interfaces/activity_results.ResultData#isbatchfinished)

#### Defined in

[src/activity/results.ts:36](https://github.com/golemfactory/golem-js/blob/0448b6b/src/activity/results.ts#L36)

___

### data

• `Optional` **data**: `TData`

In case the command was related to upload or download, this will contain the transferred data

#### Implementation of

[ResultData](../interfaces/activity_results.ResultData).[data](../interfaces/activity_results.ResultData#data)

#### Defined in

[src/activity/results.ts:37](https://github.com/golemfactory/golem-js/blob/0448b6b/src/activity/results.ts#L37)

## Methods

### getOutputAsJson

▸ **getOutputAsJson**<`Output`\>(): `Output`

Helper method making JSON-like output results more accessible

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `object` |

#### Returns

`Output`

#### Defined in

[src/activity/results.ts:53](https://github.com/golemfactory/golem-js/blob/0448b6b/src/activity/results.ts#L53)
