---
title: "Interface ReputationProviderScores"
pageTitle: "Interface ReputationProviderScores - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ReputationProviderScores within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ReputationProviderScores

[experimental/reputation/types](../modules/experimental_reputation_types).ReputationProviderScores

Set of normalized scores for a provider.

All values are between 0 and 1.

Higher score is better.

## Table of contents

### Properties

- [successRate](experimental_reputation_types.ReputationProviderScores#successrate)
- [uptime](experimental_reputation_types.ReputationProviderScores#uptime)
- [cpuSingleThreadScore](experimental_reputation_types.ReputationProviderScores#cpusinglethreadscore)
- [cpuMultiThreadScore](experimental_reputation_types.ReputationProviderScores#cpumultithreadscore)

## Properties

### successRate

• **successRate**: `number`

Percentage of successful tasks in the last "period" (last N test runs?)

#### Defined in

[src/experimental/reputation/types.ts:15](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/types.ts#L15)

___

### uptime

• **uptime**: `number`

Ping percentage that got responses.

#### Defined in

[src/experimental/reputation/types.ts:17](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/types.ts#L17)

___

### cpuSingleThreadScore

• **cpuSingleThreadScore**: `number`

CPU single threaded benchmark score.

#### Defined in

[src/experimental/reputation/types.ts:19](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/types.ts#L19)

___

### cpuMultiThreadScore

• **cpuMultiThreadScore**: `number`

CPU multi-thread benchmark score.

#### Defined in

[src/experimental/reputation/types.ts:21](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/types.ts#L21)
