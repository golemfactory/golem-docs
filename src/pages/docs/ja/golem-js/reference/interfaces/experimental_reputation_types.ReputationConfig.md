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
- [preset](experimental_reputation_types.ReputationConfig#preset)

## Properties

### url

• `Optional` **url**: `string`

Reputation service URL

#### Defined in

[src/experimental/reputation/types.ts:160](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/types.ts#L160)

___

### paymentNetwork

• `Optional` **paymentNetwork**: `string`

Network to query data for.

This is the main filter for the data.

You can leave it empty if you are controlling the payment network through `PAYMENT_NETWORK` environment variable.

#### Defined in

[src/experimental/reputation/types.ts:169](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/types.ts#L169)

___

### logger

• `Optional` **logger**: [`Logger`](shared_utils_logger_logger.Logger)

Logger to use.

#### Defined in

[src/experimental/reputation/types.ts:174](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/types.ts#L174)

___

### preset

• `Optional` **preset**: keyof ReputationPresets

#### Defined in

[src/experimental/reputation/types.ts:176](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/types.ts#L176)
