---
title: "Module market/builder"
pageTitle: "Module market/builder - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/builder within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/builder

## Table of contents

### Type Aliases

- [MarketDecoration](market_builder#marketdecoration)

## Type Aliases

### MarketDecoration

Ƭ **MarketDecoration**: `Object`

Properties and constraints to be added to a market object (i.e. a demand or an offer).

#### Type declaration

| Name | Type |
| :------ | :------ |
| `properties` | \{ `key`: `string` ; `value`: `string` \| `number` \| `boolean`  }[] |
| `constraints` | `string`[] |

#### Defined in

[src/market/builder.ts:8](https://github.com/golemfactory/golem-js/blob/7cee55b/src/market/builder.ts#L8)
