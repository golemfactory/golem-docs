---
title: "Module shared/utils/types"
pageTitle: "Module shared/utils/types - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module shared/utils/types within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: shared/utils/types

## Table of contents

### Type Aliases

- [RequireAtLeastOne](shared_utils_types#requireatleastone)
- [ElementOf](shared_utils_types#elementof)

## Type Aliases

### RequireAtLeastOne

Ƭ **RequireAtLeastOne**\<`T`, `Keys`\>: `Pick`\<`T`, `Exclude`\<keyof `T`, `Keys`\>\> & \{ [K in Keys]-?: Required\<Pick\<T, K\>\> & Partial\<Pick\<T, Exclude\<Keys, K\>\>\> }[`Keys`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Keys` | extends keyof `T` = keyof `T` |

#### Defined in

[src/shared/utils/types.ts:12](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/utils/types.ts#L12)

___

### ElementOf

Ƭ **ElementOf**\<`T`\>: `T` extends infer U[] ? `U` : `never`

Utility type extracting the type of the element of a typed array

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/shared/utils/types.ts:20](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/utils/types.ts#L20)
