---
title: "Interface ReputationConfig"
pageTitle: "Interface ReputationConfig - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ReputationConfig within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ReputationConfig

[experimental/reputation/types](../modules/experimental_reputation_types).ReputationConfig

Configuration for ReputationSystem class.

## Table of contents

### Properties

- [url](experimental_reputation_types.ReputationConfig#url)
- [paymentNetwork](experimental_reputation_types.ReputationConfig#paymentnetwork)
- [logger](experimental_reputation_types.ReputationConfig#logger)

## Properties

### url

• `Optional` **url**: `string`

Reputation service URL

#### Defined in

[src/experimental/reputation/types.ts:128](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/reputation/types.ts#L128)

___

### paymentNetwork

• `Optional` **paymentNetwork**: `string`

Network to query data for.

This is the main filter for the data.

You can leave it empty if you are controlling the payment network through `PAYMENT_NETWORK` environment variable.

#### Defined in

[src/experimental/reputation/types.ts:137](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/reputation/types.ts#L137)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger to use.

#### Defined in

[src/experimental/reputation/types.ts:142](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/reputation/types.ts#L142)
