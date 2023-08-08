# Class: Package

[package/package](../modules/package_package.md).Package

Package module - an object for descriptions of the payload required by the requestor.

## Table of contents

### Accessors

- [details](package_package.Package.md#details)

### Methods

- [create](package_package.Package.md#create)
- [getImageIdentifier](package_package.Package.md#getimageidentifier)
- [GetHashFromTag](package_package.Package.md#gethashfromtag)
- [getDemandDecoration](package_package.Package.md#getdemanddecoration)

## Accessors

### details

• `get` **details**(): [`PackageDetails`](../interfaces/package_package.PackageDetails.md)

#### Returns

[`PackageDetails`](../interfaces/package_package.PackageDetails.md)

#### Defined in

[yajsapi/package/package.ts:141](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/package/package.ts#L141)

## Methods

### create

▸ `Static` **create**(`options`): [`Package`](package_package.Package.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PackageOptions`](../modules/package_package.md#packageoptions) |

#### Returns

[`Package`](package_package.Package.md)

#### Defined in

[yajsapi/package/package.ts:57](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/package/package.ts#L57)

___

### getImageIdentifier

▸ `Static` **getImageIdentifier**(`str`): [`RequireAtLeastOne`](../modules/utils_types.md#requireatleastone)<{ `imageHash`: `string` ; `imageTag`: `string`  }, ``"imageHash"`` \| ``"imageTag"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`RequireAtLeastOne`](../modules/utils_types.md#requireatleastone)<{ `imageHash`: `string` ; `imageTag`: `string`  }, ``"imageHash"`` \| ``"imageTag"``\>

#### Defined in

[yajsapi/package/package.ts:63](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/package/package.ts#L63)

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

[yajsapi/package/package.ts:78](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/package/package.ts#L78)

___

### getDemandDecoration

▸ **getDemandDecoration**(): `Promise`<`MarketDecoration`\>

#### Returns

`Promise`<`MarketDecoration`\>

#### Defined in

[yajsapi/package/package.ts:82](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/package/package.ts#L82)
