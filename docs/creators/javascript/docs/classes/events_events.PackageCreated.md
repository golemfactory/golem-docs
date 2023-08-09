# Class: PackageCreated

[events/events](../modules/events_events.md).PackageCreated

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent.md)<{ `packageReference`: [`RequireAtLeastOne`](../modules/utils_types.md#requireatleastone)<{ `imageHash`: `string` ; `imageTag`: `string` ; `manifest`: `string`  }\> ; `details`: [`PackageDetails`](../interfaces/package_package.PackageDetails.md)  }\>

  ↳ **`PackageCreated`**

## Table of contents

### Constructors

- [constructor](events_events.PackageCreated.md#constructor)

### Properties

- [detail](events_events.PackageCreated.md#detail)
- [name](events_events.PackageCreated.md#name)
- [timestamp](events_events.PackageCreated.md#timestamp)

## Constructors

### constructor

• **new PackageCreated**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.packageReference` | [`RequireAtLeastOne`](../modules/utils_types.md#requireatleastone)<{ `imageHash`: `string` ; `imageTag`: `string` ; `manifest`: `string`  }\> |
| `data.details` | [`PackageDetails`](../interfaces/package_package.PackageDetails.md) |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[constructor](events_events.BaseEvent.md#constructor)

#### Defined in

[yajsapi/events/events.ts:28](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `packageReference` | [`RequireAtLeastOne`](../modules/utils_types.md#requireatleastone)<{ `imageHash`: `string` ; `imageTag`: `string` ; `manifest`: `string`  }\> |
| `details` | [`PackageDetails`](../interfaces/package_package.PackageDetails.md) |

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[detail](events_events.BaseEvent.md#detail)

#### Defined in

[yajsapi/events/events.ts:16](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[name](events_events.BaseEvent.md#name)

#### Defined in

[yajsapi/events/events.ts:17](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent.md).[timestamp](events_events.BaseEvent.md#timestamp)

#### Defined in

[yajsapi/events/events.ts:18](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/events/events.ts#L18)
