# Class: DecreaseScoreForUnconfirmedAgreementMarketStrategy

[market/strategy](../modules/market_strategy.md).DecreaseScoreForUnconfirmedAgreementMarketStrategy

## Implements

- [`MarketStrategy`](../interfaces/market_strategy.MarketStrategy.md)

## Table of contents

### Constructors

- [constructor](market_strategy.DecreaseScoreForUnconfirmedAgreementMarketStrategy.md#constructor)

### Methods

- [getDemandDecoration](market_strategy.DecreaseScoreForUnconfirmedAgreementMarketStrategy.md#getdemanddecoration)
- [scoreProposal](market_strategy.DecreaseScoreForUnconfirmedAgreementMarketStrategy.md#scoreproposal)

## Constructors

### constructor

• **new DecreaseScoreForUnconfirmedAgreementMarketStrategy**(`baseStrategy`, `factor`, `computationHistory`, `logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseStrategy` | [`MarketStrategy`](../interfaces/market_strategy.MarketStrategy.md) |
| `factor` | `number` |
| `computationHistory` | [`ComputationHistory`](../interfaces/market_strategy.ComputationHistory.md) |
| `logger?` | [`Logger`](../interfaces/utils_logger.Logger.md) |

#### Defined in

[yajsapi/market/strategy.ts:132](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/market/strategy.ts#L132)

## Methods

### getDemandDecoration

▸ **getDemandDecoration**(): `MarketDecoration`

#### Returns

`MarketDecoration`

#### Implementation of

[MarketStrategy](../interfaces/market_strategy.MarketStrategy.md).[getDemandDecoration](../interfaces/market_strategy.MarketStrategy.md#getdemanddecoration)

#### Defined in

[yajsapi/market/strategy.ts:139](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/market/strategy.ts#L139)

___

### scoreProposal

▸ **scoreProposal**(`proposal`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`Proposal`](market_proposal.Proposal.md) |

#### Returns

`number`

#### Implementation of

[MarketStrategy](../interfaces/market_strategy.MarketStrategy.md).[scoreProposal](../interfaces/market_strategy.MarketStrategy.md#scoreproposal)

#### Defined in

[yajsapi/market/strategy.ts:146](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/market/strategy.ts#L146)
