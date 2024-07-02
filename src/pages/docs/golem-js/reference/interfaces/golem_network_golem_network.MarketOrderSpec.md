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

• **demand**: [`OrderDemandOptions`](../modules/market_demand_demand#orderdemandoptions)

#### Defined in

[src/golem-network/golem-network.ts:141](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L141)

___

### market

• **market**: [`OrderMarketOptions`](market_market_module.OrderMarketOptions)

#### Defined in

[src/golem-network/golem-network.ts:142](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L142)

___

### activity

• `Optional` **activity**: [`ExecutionOptions`](activity_exe_script_executor.ExecutionOptions)

#### Defined in

[src/golem-network/golem-network.ts:143](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L143)

___

### payment

• `Optional` **payment**: `Partial`\<[`PaymentProcessOptions`](payment_agreement_payment_process.PaymentProcessOptions)\> & `AllocationOptions`

#### Defined in

[src/golem-network/golem-network.ts:144](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L144)

___

### network

• `Optional` **network**: [`Network`](../classes/network_network.Network)

The network that should be used for communication between the resources rented as part of this order

#### Defined in

[src/golem-network/golem-network.ts:146](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L146)
