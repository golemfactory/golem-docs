# Class: DefaultMarketStrategy

[market/strategy](../modules/market_strategy.md).DefaultMarketStrategy

## Implements

- [`MarketStrategy`](../interfaces/market_strategy.MarketStrategy.md)

## Table of contents

### Constructors

- [constructor](market_strategy.DefaultMarketStrategy.md#constructor)

### Methods

- [getDemandDecoration](market_strategy.DefaultMarketStrategy.md#getdemanddecoration)
- [scoreProposal](market_strategy.DefaultMarketStrategy.md#scoreproposal)

## Constructors

### constructor

• **new DefaultMarketStrategy**(`computationHistory`, `logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `computationHistory` | [`ComputationHistory`](../interfaces/market_strategy.ComputationHistory.md) |
| `logger?` | [`Logger`](../interfaces/utils_logger.Logger.md) |

#### Defined in

[yajsapi/market/strategy.ts:28](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/strategy.ts#L28)

## Methods

### getDemandDecoration

▸ **getDemandDecoration**(): `MarketDecoration`

#### Returns

`MarketDecoration`

#### Implementation of

[MarketStrategy](../interfaces/market_strategy.MarketStrategy.md).[getDemandDecoration](../interfaces/market_strategy.MarketStrategy.md#getdemanddecoration)

#### Defined in

[yajsapi/market/strategy.ts:44](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/strategy.ts#L44)

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

[yajsapi/market/strategy.ts:48](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/strategy.ts#L48)
