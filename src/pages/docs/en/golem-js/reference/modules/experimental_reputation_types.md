---
title: "Module experimental/reputation/types"
pageTitle: "Module experimental/reputation/types - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module experimental/reputation/types within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: experimental/reputation/types

## Table of contents

### Interfaces

- [ReputationProviderScores](../interfaces/experimental_reputation_types.ReputationProviderScores)
- [ReputationProviderEntry](../interfaces/experimental_reputation_types.ReputationProviderEntry)
- [ReputationRejectedOperator](../interfaces/experimental_reputation_types.ReputationRejectedOperator)
- [ReputationRejectedProvider](../interfaces/experimental_reputation_types.ReputationRejectedProvider)
- [ReputationUntestedProvider](../interfaces/experimental_reputation_types.ReputationUntestedProvider)
- [ReputationData](../interfaces/experimental_reputation_types.ReputationData)
- [ProposalFilterOptions](../interfaces/experimental_reputation_types.ProposalFilterOptions)
- [ProposalSelectorOptions](../interfaces/experimental_reputation_types.ProposalSelectorOptions)
- [ReputationWeightsMixin](../interfaces/experimental_reputation_types.ReputationWeightsMixin)
- [ReputationPreset](../interfaces/experimental_reputation_types.ReputationPreset)
- [ReputationPresets](../interfaces/experimental_reputation_types.ReputationPresets)
- [ReputationConfig](../interfaces/experimental_reputation_types.ReputationConfig)

### Type Aliases

- [ReputationWeights](experimental_reputation_types#reputationweights)
- [ReputationPresetName](experimental_reputation_types#reputationpresetname)

## Type Aliases

### ReputationWeights

Ƭ **ReputationWeights**: `Partial`\<[`ReputationProviderScores`](../interfaces/experimental_reputation_types.ReputationProviderScores)\>

Weights used to calculate the score for providers.

#### Defined in

[src/experimental/reputation/types.ts:114](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/types.ts#L114)

___

### ReputationPresetName

Ƭ **ReputationPresetName**: keyof [`ReputationPresets`](../interfaces/experimental_reputation_types.ReputationPresets)

Names of predefined reputation presets.

#### Defined in

[src/experimental/reputation/types.ts:149](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/types.ts#L149)
