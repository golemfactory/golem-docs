---
title: 'Module experimental/reputation/system'
pageTitle: 'Module experimental/reputation/system - golem-js API Reference'
description: 'Explore the detailed API reference documentation for the Module experimental/reputation/system within the golem-js SDK for the Golem Network.'
type: 'JS API Reference'
---

# Module: experimental/reputation/system

## Table of contents

### Classes

- [ReputationSystem](../classes/experimental_reputation_system.ReputationSystem)

### Variables

- [DEFAULT_PROPOSAL_MIN_SCORE](experimental_reputation_system#default_proposal_min_score)
- [DEFAULT_PROPOSAL_WEIGHTS](experimental_reputation_system#default_proposal_weights)
- [DEFAULT_AGREEMENT_WEIGHTS](experimental_reputation_system#default_agreement_weights)
- [DEFAULT_REPUTATION_URL](experimental_reputation_system#default_reputation_url)
- [DEFAULT_AGREEMENT_TOP_POOL_SIZE](experimental_reputation_system#default_agreement_top_pool_size)
- [REPUTATION_PRESETS](experimental_reputation_system#reputation_presets)

## Variables

### DEFAULT_PROPOSAL_MIN_SCORE

• `Const` **DEFAULT_PROPOSAL_MIN_SCORE**: `0.8`

Default minimum score for proposals.

#### Defined in

[src/experimental/reputation/system.ts:23](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L23)

---

### DEFAULT_PROPOSAL_WEIGHTS

• `Const` **DEFAULT_PROPOSAL_WEIGHTS**: [`ReputationWeights`](experimental_reputation_types#reputationweights)

Default weights used to calculate the score for proposals.

#### Defined in

[src/experimental/reputation/system.ts:29](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L29)

---

### DEFAULT_AGREEMENT_WEIGHTS

• `Const` **DEFAULT_AGREEMENT_WEIGHTS**: [`ReputationWeights`](experimental_reputation_types#reputationweights)

Default weights used to calculate the score for agreements.

#### Defined in

[src/experimental/reputation/system.ts:38](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L38)

---

### DEFAULT_REPUTATION_URL

• `Const` **DEFAULT_REPUTATION_URL**: `"https://reputation.golem.network/v2/providers/scores"`

Default reputation service URL.

#### Defined in

[src/experimental/reputation/system.ts:47](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L47)

---

### DEFAULT_AGREEMENT_TOP_POOL_SIZE

• `Const` **DEFAULT_AGREEMENT_TOP_POOL_SIZE**: `2`

The number of top scoring providers to consider when selecting an agreement.

Default for `topPoolSize` agreement selector option.

#### Defined in

[src/experimental/reputation/system.ts:54](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L54)

---

### REPUTATION_PRESETS

• `Const` **REPUTATION_PRESETS**: [`ReputationPresets`](../interfaces/experimental_reputation_types.ReputationPresets)

Predefined presets for reputation system.

#### Defined in

[src/experimental/reputation/system.ts:59](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/system.ts#L59)
