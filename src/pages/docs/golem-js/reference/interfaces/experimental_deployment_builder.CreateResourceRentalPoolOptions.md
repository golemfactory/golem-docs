---
title: "Interface CreateResourceRentalPoolOptions"
pageTitle: "Interface CreateResourceRentalPoolOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface CreateResourceRentalPoolOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: CreateResourceRentalPoolOptions

[experimental/deployment/builder](../modules/experimental_deployment_builder).CreateResourceRentalPoolOptions

Represents the order specifications which will result in access to ResourceRental.

## Hierarchy

- [`MarketOrderSpec`](golem_network_golem_network.MarketOrderSpec)

  ↳ **`CreateResourceRentalPoolOptions`**

## Table of contents

### Properties

- [deployment](experimental_deployment_builder.CreateResourceRentalPoolOptions#deployment)
- [demand](experimental_deployment_builder.CreateResourceRentalPoolOptions#demand)
- [market](experimental_deployment_builder.CreateResourceRentalPoolOptions#market)
- [activity](experimental_deployment_builder.CreateResourceRentalPoolOptions#activity)
- [payment](experimental_deployment_builder.CreateResourceRentalPoolOptions#payment)
- [network](experimental_deployment_builder.CreateResourceRentalPoolOptions#network)

## Properties

### deployment

• **deployment**: [`DeploymentOptions`](experimental_deployment_builder.DeploymentOptions)

#### Defined in

[src/experimental/deployment/builder.ts:13](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/deployment/builder.ts#L13)

___

### demand

• **demand**: [`OrderDemandOptions`](../modules/market_demand_demand#orderdemandoptions)

#### Inherited from

[MarketOrderSpec](golem_network_golem_network.MarketOrderSpec).[demand](golem_network_golem_network.MarketOrderSpec#demand)

#### Defined in

[src/golem-network/golem-network.ts:141](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L141)

___

### market

• **market**: [`OrderMarketOptions`](market_market_module.OrderMarketOptions)

#### Inherited from

[MarketOrderSpec](golem_network_golem_network.MarketOrderSpec).[market](golem_network_golem_network.MarketOrderSpec#market)

#### Defined in

[src/golem-network/golem-network.ts:142](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L142)

___

### activity

• `Optional` **activity**: [`ExecutionOptions`](activity_exe_script_executor.ExecutionOptions)

#### Inherited from

[MarketOrderSpec](golem_network_golem_network.MarketOrderSpec).[activity](golem_network_golem_network.MarketOrderSpec#activity)

#### Defined in

[src/golem-network/golem-network.ts:143](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L143)

___

### payment

• `Optional` **payment**: `Partial`\<[`PaymentProcessOptions`](payment_agreement_payment_process.PaymentProcessOptions)\> & `AllocationOptions`

#### Inherited from

[MarketOrderSpec](golem_network_golem_network.MarketOrderSpec).[payment](golem_network_golem_network.MarketOrderSpec#payment)

#### Defined in

[src/golem-network/golem-network.ts:144](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L144)

___

### network

• `Optional` **network**: [`Network`](../classes/network_network.Network)

The network that should be used for communication between the resources rented as part of this order

#### Inherited from

[MarketOrderSpec](golem_network_golem_network.MarketOrderSpec).[network](golem_network_golem_network.MarketOrderSpec#network)

#### Defined in

[src/golem-network/golem-network.ts:146](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L146)
