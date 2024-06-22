---
title: "Interface MarketOrderSpec"
pageTitle: "Interface MarketOrderSpec - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface MarketOrderSpec within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: MarketOrderSpec

[golem-network/golem-network](../modules/golem_network_golem_network).MarketOrderSpec

Represents the order specifications which will result in access to ResourceRental.

## Hierarchy

- **`MarketOrderSpec`**

  ↳ [`CreateResourceRentalPoolOptions`](experimental_deployment_builder.CreateResourceRentalPoolOptions)

## Table of contents

### Properties

- [demand](golem_network_golem_network.MarketOrderSpec#demand)
- [market](golem_network_golem_network.MarketOrderSpec#market)
- [activity](golem_network_golem_network.MarketOrderSpec#activity)
- [payment](golem_network_golem_network.MarketOrderSpec#payment)
- [network](golem_network_golem_network.MarketOrderSpec#network)

## Properties

### demand

• **demand**: [`BuildDemandOptions`](../modules/market_demand_demand#builddemandoptions)

#### Defined in

[src/golem-network/golem-network.ts:126](https://github.com/golemfactory/golem-js/blob/570126bc/src/golem-network/golem-network.ts#L126)

___

### market

• **market**: [`MarketOptions`](market_market_module.MarketOptions)

#### Defined in

[src/golem-network/golem-network.ts:127](https://github.com/golemfactory/golem-js/blob/570126bc/src/golem-network/golem-network.ts#L127)

___

### activity

• `Optional` **activity**: [`ExecutionOptions`](activity_exe_script_executor.ExecutionOptions)

#### Defined in

[src/golem-network/golem-network.ts:128](https://github.com/golemfactory/golem-js/blob/570126bc/src/golem-network/golem-network.ts#L128)

___

### payment

• `Optional` **payment**: `Partial`\<[`PaymentProcessOptions`](payment_agreement_payment_process.PaymentProcessOptions)\> & `AllocationOptions`

#### Defined in

[src/golem-network/golem-network.ts:129](https://github.com/golemfactory/golem-js/blob/570126bc/src/golem-network/golem-network.ts#L129)

___

### network

• `Optional` **network**: [`Network`](../classes/network_network.Network)

#### Defined in

[src/golem-network/golem-network.ts:130](https://github.com/golemfactory/golem-js/blob/570126bc/src/golem-network/golem-network.ts#L130)
