---
title: "Interface AgreementSelectorOption"
pageTitle: "Interface AgreementSelectorOption - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface AgreementSelectorOption within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: AgreementSelectorOption

[experimental/reputation/types](../modules/experimental_reputation_types).AgreementSelectorOption

Options for the agreement selector.

## Table of contents

### Properties

- [topPoolSize](experimental_reputation_types.AgreementSelectorOption#toppoolsize)
- [agreementBonus](experimental_reputation_types.AgreementSelectorOption#agreementbonus)

## Properties

### topPoolSize

• `Optional` **topPoolSize**: `number`

The size of top provider pool used to pick a random one.

If you want to just use the best available one, set this to 1.

Default is `DEFAULT_AGREEMENT_TOP_POOL_SIZE`.

#### Defined in

[src/experimental/reputation/types.ts:104](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/reputation/types.ts#L104)

___

### agreementBonus

• `Optional` **agreementBonus**: `number`

Add extra score to provider if it has an existing agreement.

Default is 0.

#### Defined in

[src/experimental/reputation/types.ts:111](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/reputation/types.ts#L111)
