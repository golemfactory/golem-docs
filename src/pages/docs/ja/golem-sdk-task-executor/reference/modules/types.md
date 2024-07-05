---
title: "Module types"
pageTitle: "Module types - Task API Reference"
description: "Explore the detailed API reference documentation for the Module types within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Module: types

## Table of contents

### Type Aliases

- [RequireAtLeastOne](types#requireatleastone)

## Type Aliases

### RequireAtLeastOne

Ƭ **RequireAtLeastOne**<`T`, `Keys`\>: `Pick`<`T`, `Exclude`<keyof `T`, `Keys`\>\> & { [K in Keys]-?: Required<Pick<T, K\>\> & Partial<Pick<T, Exclude<Keys, K\>\>\> }[`Keys`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Keys` | extends keyof `T` = keyof `T` |

#### Defined in

[src/types.ts:12](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/types.ts#L12)
