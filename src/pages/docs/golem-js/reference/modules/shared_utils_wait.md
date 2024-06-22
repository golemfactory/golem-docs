---
title: "Module shared/utils/wait"
pageTitle: "Module shared/utils/wait - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module shared/utils/wait within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: shared/utils/wait

## Table of contents

### Functions

- [waitForCondition](shared_utils_wait#waitforcondition)
- [waitAndCall](shared_utils_wait#waitandcall)

## Functions

### waitForCondition

▸ **waitForCondition**(`check`, `opts?`): `Promise`\<`void`\>

Utility function that helps to block the execution until a condition is met (check returns true) or the timeout happens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `check` | () => `boolean` \| `Promise`\<`boolean`\> | The function checking if the condition is met. |
| `opts?` | `Object` | Options controlling the timeout and check interval in seconds. |
| `opts.signalOrTimeout?` | `number` \| `AbortSignal` | The timeout value in miliseconds or AbortSignal. |
| `opts.intervalSeconds?` | `number` | The interval between condition checks in seconds. |

#### Returns

`Promise`\<`void`\>

- Resolves when the condition is met or rejects with a timeout error if it wasn't met on time.

#### Defined in

[src/shared/utils/wait.ts:14](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/utils/wait.ts#L14)

___

### waitAndCall

▸ **waitAndCall**\<`T`\>(`fn`, `waitSeconds`): `Promise`\<`T`\>

Simple utility that allows you to wait n-seconds and then call the provided function

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `T` \| `Promise`\<`T`\> |
| `waitSeconds` | `number` |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/shared/utils/wait.ts:52](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/utils/wait.ts#L52)
