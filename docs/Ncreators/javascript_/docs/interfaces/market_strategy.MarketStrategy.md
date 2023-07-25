# Interface: MarketStrategy

[market/strategy](../modules/market_strategy.md).MarketStrategy

## Implemented by

- [`DecreaseScoreForUnconfirmedAgreementMarketStrategy`](../classes/market_strategy.DecreaseScoreForUnconfirmedAgreementMarketStrategy.md)
- [`DefaultMarketStrategy`](../classes/market_strategy.DefaultMarketStrategy.md)
- [`LeastExpensiveLinearPayuMarketStrategy`](../classes/market_strategy.LeastExpensiveLinearPayuMarketStrategy.md)

## Table of contents

### Methods

- [getDemandDecoration](market_strategy.MarketStrategy.md#getdemanddecoration)
- [scoreProposal](market_strategy.MarketStrategy.md#scoreproposal)

## Methods

### getDemandDecoration

▸ **getDemandDecoration**(): `MarketDecoration`

#### Returns

`MarketDecoration`

#### Defined in

[yajsapi/market/strategy.ts:22](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/strategy.ts#L22)

___

### scoreProposal

▸ **scoreProposal**(`proposal`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`Proposal`](../classes/market_proposal.Proposal.md) |

#### Returns

`number`

#### Defined in

[yajsapi/market/strategy.ts:23](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/strategy.ts#L23)
