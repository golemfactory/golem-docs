---
title: "Module market/helpers"
pageTitle: "Module market/helpers - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/helpers within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/helpers

## Table of contents

### Functions

- [getHealthyProvidersWhiteList](market_helpers#gethealthyproviderswhitelist)

## Functions

### getHealthyProvidersWhiteList

▸ **getHealthyProvidersWhiteList**(): `Promise`\<`string`[]\>

Helps to obtain a whitelist of providers which were health-tested.

Important: This helper requires internet access to function properly.

#### Returns

`Promise`\<`string`[]\>

An array with Golem Node IDs of the whitelisted providers.

#### Defined in

[src/market/helpers.ts:10](https://github.com/golemfactory/golem-js/blob/4182943/src/market/helpers.ts#L10)
