---
title: "Module shared/utils/abortSignal"
pageTitle: "Module shared/utils/abortSignal - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module shared/utils/abortSignal within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: shared/utils/abortSignal

## Table of contents

### Functions

- [createAbortSignalFromTimeout](shared_utils_abortSignal#createabortsignalfromtimeout)
- [anyAbortSignal](shared_utils_abortSignal#anyabortsignal)

## Functions

### createAbortSignalFromTimeout

▸ **createAbortSignalFromTimeout**(`timeoutOrSignal`): `AbortSignal`

If provided an AbortSignal, returns it.
If provided a number, returns an AbortSignal that will be aborted after the specified number of milliseconds.
If provided undefined, returns an AbortSignal that will never be aborted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutOrSignal` | `undefined` \| `number` \| `AbortSignal` |

#### Returns

`AbortSignal`

#### Defined in

[src/shared/utils/abortSignal.ts:6](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/utils/abortSignal.ts#L6)

___

### anyAbortSignal

▸ **anyAbortSignal**(`...signals`): `AbortSignal`

Combine multiple AbortSignals into a single signal that will be aborted if any
of the input signals are aborted. If any of the input signals are already aborted,
the returned signal will be aborted immediately.

Polyfill for AbortSignal.any(), since it's only available starting in Node 20
https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static

#### Parameters

| Name | Type |
| :------ | :------ |
| `...signals` | `AbortSignal`[] |

#### Returns

`AbortSignal`

#### Defined in

[src/shared/utils/abortSignal.ts:24](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/utils/abortSignal.ts#L24)
