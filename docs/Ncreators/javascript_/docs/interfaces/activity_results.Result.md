# Interface: Result

[activity/results](../modules/activity_results.md).Result

## Table of contents

### Properties

- [index](activity_results.Result.md#index)
- [eventDate](activity_results.Result.md#eventdate)
- [result](activity_results.Result.md#result)
- [stdout](activity_results.Result.md#stdout)
- [stderr](activity_results.Result.md#stderr)
- [message](activity_results.Result.md#message)
- [isBatchFinished](activity_results.Result.md#isbatchfinished)

## Properties

### index

• **index**: `number`

Index of script command

#### Defined in

[yajsapi/activity/results.ts:6](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/results.ts#L6)

___

### eventDate

• **eventDate**: `string`

The datetime of the event on which the result was received

#### Defined in

[yajsapi/activity/results.ts:8](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/results.ts#L8)

___

### result

• `Optional` **result**: ``"Ok"`` \| ``"Error"``

If is success

#### Defined in

[yajsapi/activity/results.ts:10](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/results.ts#L10)

___

### stdout

• `Optional` **stdout**: `string`

stdout of script command

#### Defined in

[yajsapi/activity/results.ts:12](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/results.ts#L12)

___

### stderr

• `Optional` **stderr**: `string`

stderr of script command

#### Defined in

[yajsapi/activity/results.ts:14](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/results.ts#L14)

___

### message

• `Optional` **message**: `string`

an error message if the result is not successful

#### Defined in

[yajsapi/activity/results.ts:16](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/results.ts#L16)

___

### isBatchFinished

• `Optional` **isBatchFinished**: `boolean`

Is batch of already finished

#### Defined in

[yajsapi/activity/results.ts:18](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/activity/results.ts#L18)
