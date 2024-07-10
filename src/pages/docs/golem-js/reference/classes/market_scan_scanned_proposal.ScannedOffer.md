---
title: "Class ScannedOffer"
pageTitle: "Class ScannedOffer - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ScannedOffer within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ScannedOffer

[market/scan/scanned-proposal](../modules/market_scan_scanned_proposal).ScannedOffer

## Table of contents

### Constructors

- [constructor](market_scan_scanned_proposal.ScannedOffer#constructor)

### Accessors

- [properties](market_scan_scanned_proposal.ScannedOffer#properties)
- [constraints](market_scan_scanned_proposal.ScannedOffer#constraints)
- [pricing](market_scan_scanned_proposal.ScannedOffer#pricing)
- [provider](market_scan_scanned_proposal.ScannedOffer#provider)
- [transferProtocol](market_scan_scanned_proposal.ScannedOffer#transferprotocol)
- [cpuBrand](market_scan_scanned_proposal.ScannedOffer#cpubrand)
- [cpuCapabilities](market_scan_scanned_proposal.ScannedOffer#cpucapabilities)
- [cpuCores](market_scan_scanned_proposal.ScannedOffer#cpucores)
- [cpuThreads](market_scan_scanned_proposal.ScannedOffer#cputhreads)
- [memory](market_scan_scanned_proposal.ScannedOffer#memory)
- [storage](market_scan_scanned_proposal.ScannedOffer#storage)
- [publicNet](market_scan_scanned_proposal.ScannedOffer#publicnet)
- [runtimeCapabilities](market_scan_scanned_proposal.ScannedOffer#runtimecapabilities)
- [runtimeName](market_scan_scanned_proposal.ScannedOffer#runtimename)

## Constructors

### constructor

• **new ScannedOffer**(`model`): [`ScannedOffer`](market_scan_scanned_proposal.ScannedOffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `Offer` |

#### Returns

[`ScannedOffer`](market_scan_scanned_proposal.ScannedOffer)

#### Defined in

[src/market/scan/scanned-proposal.ts:8](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L8)

## Accessors

### properties

• `get` **properties**(): [`ProposalProperties`](../modules/market_proposal_proposal_properties#proposalproperties)

#### Returns

[`ProposalProperties`](../modules/market_proposal_proposal_properties#proposalproperties)

#### Defined in

[src/market/scan/scanned-proposal.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L10)

___

### constraints

• `get` **constraints**(): `string`

#### Returns

`string`

#### Defined in

[src/market/scan/scanned-proposal.ts:14](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L14)

___

### pricing

• `get` **pricing**(): [`PricingInfo`](../modules/market_proposal_offer_proposal#pricinginfo)

#### Returns

[`PricingInfo`](../modules/market_proposal_offer_proposal#pricinginfo)

#### Defined in

[src/market/scan/scanned-proposal.ts:18](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L18)

___

### provider

• `get` **provider**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |

#### Defined in

[src/market/scan/scanned-proposal.ts:48](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L48)

___

### transferProtocol

• `get` **transferProtocol**(): (``"http"`` \| ``"https"`` \| ``"gftp"``)[]

#### Returns

(``"http"`` \| ``"https"`` \| ``"gftp"``)[]

#### Defined in

[src/market/scan/scanned-proposal.ts:54](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L54)

___

### cpuBrand

• `get` **cpuBrand**(): `string`

#### Returns

`string`

#### Defined in

[src/market/scan/scanned-proposal.ts:57](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L57)

___

### cpuCapabilities

• `get` **cpuCapabilities**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/market/scan/scanned-proposal.ts:60](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L60)

___

### cpuCores

• `get` **cpuCores**(): `number`

#### Returns

`number`

#### Defined in

[src/market/scan/scanned-proposal.ts:63](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L63)

___

### cpuThreads

• `get` **cpuThreads**(): `number`

#### Returns

`number`

#### Defined in

[src/market/scan/scanned-proposal.ts:66](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L66)

___

### memory

• `get` **memory**(): `number`

#### Returns

`number`

#### Defined in

[src/market/scan/scanned-proposal.ts:69](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L69)

___

### storage

• `get` **storage**(): `number`

#### Returns

`number`

#### Defined in

[src/market/scan/scanned-proposal.ts:72](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L72)

___

### publicNet

• `get` **publicNet**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/market/scan/scanned-proposal.ts:75](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L75)

___

### runtimeCapabilities

• `get` **runtimeCapabilities**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/market/scan/scanned-proposal.ts:78](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L78)

___

### runtimeName

• `get` **runtimeName**(): `string`

#### Returns

`string`

#### Defined in

[src/market/scan/scanned-proposal.ts:81](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/scanned-proposal.ts#L81)
