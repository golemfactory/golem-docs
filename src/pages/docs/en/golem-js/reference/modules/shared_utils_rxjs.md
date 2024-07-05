---
title: "Module shared/utils/rxjs"
pageTitle: "Module shared/utils/rxjs - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module shared/utils/rxjs within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: shared/utils/rxjs

## Table of contents

### Functions

- [mergeUntilFirstComplete](shared_utils_rxjs#mergeuntilfirstcomplete)

## Functions

### mergeUntilFirstComplete

▸ **mergeUntilFirstComplete**\<`FirstObsType`, `SecondObsType`\>(`observable1`, `observable2`): `Observable`\<`FirstObsType` \| `SecondObsType`\>

Merges two observables until the first one completes (or errors).
The difference between this and `merge` is that this will complete when the first observable completes,
while `merge` would only complete when _all_ observables complete.

#### Type parameters

| Name |
| :------ |
| `FirstObsType` |
| `SecondObsType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable1` | `Observable`\<`FirstObsType`\> |
| `observable2` | `Observable`\<`SecondObsType`\> |

#### Returns

`Observable`\<`FirstObsType` \| `SecondObsType`\>

#### Defined in

[src/shared/utils/rxjs.ts:8](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/utils/rxjs.ts#L8)
