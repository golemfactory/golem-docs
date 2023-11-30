---
title: "Module market/helpers - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/helpers within the golem-js SDK for the Golem Network."
type: "reference"
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

[src/market/helpers.ts:8](https://github.com/golemfactory/golem-js/blob/cd3b295/src/market/helpers.ts#L8)
