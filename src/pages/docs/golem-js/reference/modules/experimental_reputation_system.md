---
title: "Module experimental/reputation/system"
pageTitle: "Module experimental/reputation/system - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module experimental/reputation/system within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: experimental/reputation/system

## Table of contents

### Classes

- [ReputationSystem](../classes/experimental_reputation_system.ReputationSystem)

### Variables

- [DEFAULT\_PROPOSAL\_MIN\_SCORE](experimental_reputation_system#default_proposal_min_score)
- [DEFAULT\_PROPOSAL\_WEIGHTS](experimental_reputation_system#default_proposal_weights)
- [DEFAULT\_AGREEMENT\_WEIGHTS](experimental_reputation_system#default_agreement_weights)
- [DEFAULT\_REPUTATION\_URL](experimental_reputation_system#default_reputation_url)
- [DEFAULT\_AGREEMENT\_TOP\_POOL\_SIZE](experimental_reputation_system#default_agreement_top_pool_size)
- [REPUTATION\_PRESETS](experimental_reputation_system#reputation_presets)

## Variables

### DEFAULT\_PROPOSAL\_MIN\_SCORE

• `Const` **DEFAULT\_PROPOSAL\_MIN\_SCORE**: ``0.8``

Default minimum score for proposals.

#### Defined in

[src/experimental/reputation/system.ts:23](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L23)

___

### DEFAULT\_PROPOSAL\_WEIGHTS

• `Const` **DEFAULT\_PROPOSAL\_WEIGHTS**: [`ReputationWeights`](experimental_reputation_types#reputationweights)

Default weights used to calculate the score for proposals.

#### Defined in

[src/experimental/reputation/system.ts:29](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L29)

___

### DEFAULT\_AGREEMENT\_WEIGHTS

• `Const` **DEFAULT\_AGREEMENT\_WEIGHTS**: [`ReputationWeights`](experimental_reputation_types#reputationweights)

Default weights used to calculate the score for agreements.

#### Defined in

[src/experimental/reputation/system.ts:38](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L38)

___

### DEFAULT\_REPUTATION\_URL

• `Const` **DEFAULT\_REPUTATION\_URL**: ``"https://reputation.dev-test.golem.network/v2/providers/scores"``

Default reputation service URL.

#### Defined in

[src/experimental/reputation/system.ts:47](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L47)

___

### DEFAULT\_AGREEMENT\_TOP\_POOL\_SIZE

• `Const` **DEFAULT\_AGREEMENT\_TOP\_POOL\_SIZE**: ``2``

The number of top scoring providers to consider when selecting an agreement.

Default for `topPoolSize` agreement selector option.

#### Defined in

[src/experimental/reputation/system.ts:54](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L54)

___

### REPUTATION\_PRESETS

• `Const` **REPUTATION\_PRESETS**: [`ReputationPresets`](../interfaces/experimental_reputation_types.ReputationPresets)

Predefined presets for reputation system.

#### Defined in

[src/experimental/reputation/system.ts:59](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L59)
