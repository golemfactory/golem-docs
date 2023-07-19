# Module: utils/types

## Table of contents

### Type Aliases

- [RequireAtLeastOne](utils_types.md#requireatleastone)

## Type Aliases

### RequireAtLeastOne

Ƭ **RequireAtLeastOne**<`T`, `Keys`\>: `Pick`<`T`, `Exclude`<keyof `T`, `Keys`\>\> & { [K in Keys]-?: Required<Pick<T, K\>\> & Partial<Pick<T, Exclude<Keys, K\>\>\> }[`Keys`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Keys` | extends keyof `T` = keyof `T` |

#### Defined in

[yajsapi/utils/types.ts:12](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/utils/types.ts#L12)
