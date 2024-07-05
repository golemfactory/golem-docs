---
title: "Interface ProposalSelectorOptions"
pageTitle: "Interface ProposalSelectorOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ProposalSelectorOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ProposalSelectorOptions

[experimental/reputation/types](../modules/experimental_reputation_types).ProposalSelectorOptions

Options for the agreement selector.

## Table of contents

### Properties

- [topPoolSize](experimental_reputation_types.ProposalSelectorOptions#toppoolsize)

## Properties

### topPoolSize

• `Optional` **topPoolSize**: `number`

The size of top provider pool used to pick a random one.

If you want to just use the best available one, set this to 1.

Default is `DEFAULT_AGREEMENT_TOP_POOL_SIZE`.

#### Defined in

[src/experimental/reputation/types.ts:107](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/reputation/types.ts#L107)
