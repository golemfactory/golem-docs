# Class: PackageCreated

[events/events](../modules/events_events).PackageCreated

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)<{ `packageReference`: [`RequireAtLeastOne`](../modules/utils_types#requireatleastone)<{ `imageHash`: `string` ; `imageTag`: `string` ; `manifest`: `string`  }\> ; `details`: [`PackageDetails`](../interfaces/package_package.PackageDetails)  }\>

  ↳ **`PackageCreated`**

## Table of contents

### Constructors

- [constructor](events_events.PackageCreated#constructor)

### Properties

- [detail](events_events.PackageCreated#detail)
- [name](events_events.PackageCreated#name)
- [timestamp](events_events.PackageCreated#timestamp)

## Constructors

### constructor

• **new PackageCreated**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Object` |
| `data.packageReference` | [`RequireAtLeastOne`](../modules/utils_types#requireatleastone)<{ `imageHash`: `string` ; `imageTag`: `string` ; `manifest`: `string`  }\> |
| `data.details` | [`PackageDetails`](../interfaces/package_package.PackageDetails) |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/614ea72/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `packageReference` | [`RequireAtLeastOne`](../modules/utils_types#requireatleastone)<{ `imageHash`: `string` ; `imageTag`: `string` ; `manifest`: `string`  }\> |
| `details` | [`PackageDetails`](../interfaces/package_package.PackageDetails) |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/614ea72/src/events/events.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/614ea72/src/events/events.ts#L17)

___

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/614ea72/src/events/events.ts#L18)
