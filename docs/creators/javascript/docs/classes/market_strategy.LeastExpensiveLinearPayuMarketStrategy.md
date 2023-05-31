# Class: LeastExpensiveLinearPayuMarketStrategy

[market/strategy](../modules/market_strategy.md).LeastExpensiveLinearPayuMarketStrategy

## Implements

- [`MarketStrategy`](../interfaces/market_strategy.MarketStrategy.md)

## Table of contents

### Constructors

- [constructor](market_strategy.LeastExpensiveLinearPayuMarketStrategy.md#constructor)

### Methods

- [getDemandDecoration](market_strategy.LeastExpensiveLinearPayuMarketStrategy.md#getdemanddecoration)
- [scoreProposal](market_strategy.LeastExpensiveLinearPayuMarketStrategy.md#scoreproposal)

## Constructors

### constructor

• **new LeastExpensiveLinearPayuMarketStrategy**(`expectedTimeSecs?`, `maxFixedPrice?`, `maxPriceFor?`, `logger?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `expectedTimeSecs` | `number` | `60` |
| `maxFixedPrice?` | `number` | `undefined` |
| `maxPriceFor?` | `Map`<`Counter`, `number`\> | `undefined` |
| `logger?` | [`Logger`](../interfaces/utils_logger.Logger.md) | `undefined` |

#### Defined in

[yajsapi/market/strategy.ts:54](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/strategy.ts#L54)

## Methods

### getDemandDecoration

▸ **getDemandDecoration**(): `MarketDecoration`

#### Returns

`MarketDecoration`

#### Implementation of

[MarketStrategy](../interfaces/market_strategy.MarketStrategy.md).[getDemandDecoration](../interfaces/market_strategy.MarketStrategy.md#getdemanddecoration)

#### Defined in

[yajsapi/market/strategy.ts:61](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/strategy.ts#L61)

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

[yajsapi/market/strategy.ts:68](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/strategy.ts#L68)
