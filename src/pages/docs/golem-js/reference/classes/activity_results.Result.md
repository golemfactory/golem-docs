# Class: Result<TData\>

[activity/results](../modules/activity_results).Result

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `any` |

## Implements

- `ResultData`<`TData`\>

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
| `props` | `ResultData`<`any`\> |

#### Defined in

[src/activity/results.ts:42](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/results.ts#L42)

## Properties

### index

• **index**: `number`

#### Implementation of

ResultData.index

#### Defined in

[src/activity/results.ts:33](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/results.ts#L33)

___

### eventDate

• **eventDate**: `string`

#### Implementation of

ResultData.eventDate

#### Defined in

[src/activity/results.ts:34](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/results.ts#L34)

___

### result

• **result**: `ExeScriptCommandResultResultEnum`

#### Implementation of

ResultData.result

#### Defined in

[src/activity/results.ts:35](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/results.ts#L35)

___

### stdout

• `Optional` **stdout**: ``null`` \| `string` \| `ArrayBuffer`

#### Implementation of

ResultData.stdout

#### Defined in

[src/activity/results.ts:36](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/results.ts#L36)

___

### stderr

• `Optional` **stderr**: ``null`` \| `string` \| `ArrayBuffer`

#### Implementation of

ResultData.stderr

#### Defined in

[src/activity/results.ts:37](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/results.ts#L37)

___

### message

• `Optional` **message**: ``null`` \| `string`

#### Implementation of

ResultData.message

#### Defined in

[src/activity/results.ts:38](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/results.ts#L38)

___

### isBatchFinished

• `Optional` **isBatchFinished**: `boolean`

#### Implementation of

ResultData.isBatchFinished

#### Defined in

[src/activity/results.ts:39](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/results.ts#L39)

___

### data

• `Optional` **data**: `TData`

#### Implementation of

ResultData.data

#### Defined in

[src/activity/results.ts:40](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/results.ts#L40)

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

[src/activity/results.ts:56](https://github.com/golemfactory/golem-js/blob/f1546de/src/activity/results.ts#L56)
