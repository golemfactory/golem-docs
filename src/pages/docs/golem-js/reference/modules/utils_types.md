---
title: "Module utils/types - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module utils/types within the golem-js SDK for the Golem Network."
type: "reference"
---
# Module: utils/types

## Table of contents

### Type Aliases

- [RequireAtLeastOne](utils_types#requireatleastone)

## Type Aliases

### RequireAtLeastOne

Ƭ **RequireAtLeastOne**<`T`, `Keys`\>: `Pick`<`T`, `Exclude`<keyof `T`, `Keys`\>\> & { [K in Keys]-?: Required<Pick<T, K\>\> & Partial<Pick<T, Exclude<Keys, K\>\>\> }[`Keys`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Keys` | extends keyof `T` = keyof `T` |

#### Defined in

[src/utils/types.ts:12](https://github.com/golemfactory/golem-js/blob/7df98a2/src/utils/types.ts#L12)
