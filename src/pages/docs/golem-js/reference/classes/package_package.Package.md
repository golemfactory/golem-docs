---
title: "Class Package"
pageTitle: "Class Package - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Package within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Package

[package/package](../modules/package_package).Package

Package module - an object for descriptions of the payload required by the requestor.

## Table of contents

### Accessors

- [details](package_package.Package#details)

### Methods

- [create](package_package.Package#create)
- [getImageIdentifier](package_package.Package#getimageidentifier)
- [getDemandDecoration](package_package.Package#getdemanddecoration)

## Accessors

### details

• `get` **details**(): [`PackageDetails`](../interfaces/package_package.PackageDetails)

#### Returns

[`PackageDetails`](../interfaces/package_package.PackageDetails)

#### Defined in

[src/package/package.ts:139](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/package/package.ts#L139)

## Methods

### create

▸ **create**(`options`): [`Package`](package_package.Package)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PackageOptions`](../modules/package_package#packageoptions) |

#### Returns

[`Package`](package_package.Package)

#### Defined in

[src/package/package.ts:56](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/package/package.ts#L56)

___

### getImageIdentifier

▸ **getImageIdentifier**(`str`): [`RequireAtLeastOne`](../modules/utils_types#requireatleastone)\<\{ `imageHash`: `string` ; `imageTag`: `string`  }, ``"imageHash"`` \| ``"imageTag"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`RequireAtLeastOne`](../modules/utils_types#requireatleastone)\<\{ `imageHash`: `string` ; `imageTag`: `string`  }, ``"imageHash"`` \| ``"imageTag"``\>

#### Defined in

[src/package/package.ts:62](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/package/package.ts#L62)

___

### getDemandDecoration

▸ **getDemandDecoration**(): `Promise`\<[`MarketDecoration`](../modules/market_builder#marketdecoration)\>

#### Returns

`Promise`\<[`MarketDecoration`](../modules/market_builder#marketdecoration)\>

#### Defined in

[src/package/package.ts:77](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/package/package.ts#L77)
