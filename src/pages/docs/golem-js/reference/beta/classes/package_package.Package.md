# Class: Package

[package/package](../modules/package_package).Package

Package module - an object for descriptions of the payload required by the requestor.

## Table of contents

### Accessors

- [details](package_package.Package#details)

### Methods

- [create](package_package.Package#create)
- [getImageIdentifier](package_package.Package#getimageidentifier)
- [GetHashFromTag](package_package.Package#gethashfromtag)
- [getDemandDecoration](package_package.Package#getdemanddecoration)

## Accessors

### details

• `get` **details**(): [`PackageDetails`](../interfaces/package_package.PackageDetails)

#### Returns

[`PackageDetails`](../interfaces/package_package.PackageDetails)

#### Defined in

[src/package/package.ts:140](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/package/package.ts#L140)

## Methods

### create

▸ `Static` **create**(`options`): [`Package`](package_package.Package)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `PackageOptions` |

#### Returns

[`Package`](package_package.Package)

#### Defined in

[src/package/package.ts:60](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/package/package.ts#L60)

___

### getImageIdentifier

▸ `Static` **getImageIdentifier**(`str`): [`RequireAtLeastOne`](../modules/utils_types#requireatleastone)<{ `imageHash`: `string` ; `imageTag`: `string`  }, ``"imageHash"`` \| ``"imageTag"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`RequireAtLeastOne`](../modules/utils_types#requireatleastone)<{ `imageHash`: `string` ; `imageTag`: `string`  }, ``"imageHash"`` \| ``"imageTag"``\>

#### Defined in

[src/package/package.ts:66](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/package/package.ts#L66)

___

### GetHashFromTag

▸ `Static` **GetHashFromTag**(`tag`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

`string`

#### Defined in

[src/package/package.ts:81](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/package/package.ts#L81)

___

### getDemandDecoration

▸ **getDemandDecoration**(): `Promise`<`MarketDecoration`\>

#### Returns

`Promise`<`MarketDecoration`\>

#### Defined in

[src/package/package.ts:85](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/package/package.ts#L85)
