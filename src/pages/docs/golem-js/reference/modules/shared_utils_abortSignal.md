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

[src/shared/utils/abortSignal.ts:6](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/utils/abortSignal.ts#L6)
