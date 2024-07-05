---
title: "Module market/market.module"
pageTitle: "Module market/market.module - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/market.module within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/market.module

## Table of contents

### Classes

- [MarketModuleImpl](../classes/market_market_module.MarketModuleImpl)

### Interfaces

- [OrderMarketOptions](../interfaces/market_market_module.OrderMarketOptions)
- [MarketModuleOptions](../interfaces/market_market_module.MarketModuleOptions)
- [MarketModule](../interfaces/market_market_module.MarketModule)
- [IDemandDirector](../interfaces/market_market_module.IDemandDirector)

### Type Aliases

- [DemandEngine](market_market_module#demandengine)
- [PricingOptions](market_market_module#pricingoptions)

## Type Aliases

### DemandEngine

Ƭ **DemandEngine**: ``"vm"`` \| ``"vm-nvidia"`` \| ``"wasmtime"``

#### Defined in

[src/market/market.module.ts:45](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L45)

___

### PricingOptions

Ƭ **PricingOptions**: \{ `model`: ``"linear"`` ; `maxStartPrice`: `number` ; `maxCpuPerHourPrice`: `number` ; `maxEnvPerHourPrice`: `number`  } \| \{ `model`: ``"burn-rate"`` ; `avgGlmPerHour`: `number`  }

#### Defined in

[src/market/market.module.ts:47](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L47)
