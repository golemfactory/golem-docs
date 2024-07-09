---
title: "Interface ProposalFilterOptions"
pageTitle: "Interface ProposalFilterOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ProposalFilterOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ProposalFilterOptions

[experimental/reputation/types](../modules/experimental_reputation_types).ProposalFilterOptions

Options for the proposal filter.

## Table of contents

### Properties

- [acceptUnlisted](experimental_reputation_types.ProposalFilterOptions#acceptunlisted)
- [min](experimental_reputation_types.ProposalFilterOptions#min)

## Properties

### acceptUnlisted

• `Optional` **acceptUnlisted**: `boolean`

Should providers with no reputation data be accepted.

Default is false if there are listed providers, true if there are no listed providers.

#### Defined in

[src/experimental/reputation/types.ts:85](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/types.ts#L85)

___

### min

• `Optional` **min**: `number`

Minimum weighted score a provider on the list needs to have in order to not get rejected.

Default is `DEFAULT_PROPOSAL_MIN_SCORE`.

#### Defined in

[src/experimental/reputation/types.ts:92](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/types.ts#L92)
