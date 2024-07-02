---
title: "Interface MarketModuleOptions"
pageTitle: "Interface MarketModuleOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface MarketModuleOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: MarketModuleOptions

[market/market.module](../modules/market_market_module).MarketModuleOptions

## Table of contents

### Properties

- [demandRefreshIntervalSec](market_market_module.MarketModuleOptions#demandrefreshintervalsec)

## Properties

### demandRefreshIntervalSec

• **demandRefreshIntervalSec**: `number`

Number of seconds after which the demand will be un-subscribed and subscribed again to get fresh
offers from the market

**`Default`**

```ts
30 minutes
```

#### Defined in

[src/market/market.module.ts:80](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/market.module.ts#L80)
