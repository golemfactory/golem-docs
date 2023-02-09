# Class: DecorationsBuilder

[market/builder](../modules/market_builder.md).DecorationsBuilder

A helper class for creating market decorations for `Demand` published on the market.

## Table of contents

### Constructors

- [constructor](market_builder.DecorationsBuilder.md#constructor)

### Methods

- [addProperty](market_builder.DecorationsBuilder.md#addproperty)
- [addConstraint](market_builder.DecorationsBuilder.md#addconstraint)
- [getDecorations](market_builder.DecorationsBuilder.md#getdecorations)
- [getDemandRequest](market_builder.DecorationsBuilder.md#getdemandrequest)
- [addDecoration](market_builder.DecorationsBuilder.md#adddecoration)
- [addDecorations](market_builder.DecorationsBuilder.md#adddecorations)

## Constructors

### constructor

• **new DecorationsBuilder**()

## Methods

### addProperty

▸ **addProperty**(`key`, `value`): [`DecorationsBuilder`](market_builder.DecorationsBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` \| `number` \| `boolean` |

#### Returns

[`DecorationsBuilder`](market_builder.DecorationsBuilder.md)

#### Defined in

[yajsapi/market/builder.ts:38](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/market/builder.ts#L38)

___

### addConstraint

▸ **addConstraint**(`key`, `value`, `comparisonOperator?`): [`DecorationsBuilder`](market_builder.DecorationsBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `value` | `string` \| `number` | `undefined` |
| `comparisonOperator` | [`ComparisonOperator`](../enums/market_builder.ComparisonOperator.md) | `ComparisonOperator.Eq` |

#### Returns

[`DecorationsBuilder`](market_builder.DecorationsBuilder.md)

#### Defined in

[yajsapi/market/builder.ts:47](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/market/builder.ts#L47)

___

### getDecorations

▸ **getDecorations**(): [`MarketDecoration`](../modules/market_builder.md#marketdecoration)

#### Returns

[`MarketDecoration`](../modules/market_builder.md#marketdecoration)

#### Defined in

[yajsapi/market/builder.ts:51](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/market/builder.ts#L51)

___

### getDemandRequest

▸ **getDemandRequest**(): `DemandOfferBase`

#### Returns

`DemandOfferBase`

#### Defined in

[yajsapi/market/builder.ts:57](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/market/builder.ts#L57)

___

### addDecoration

▸ **addDecoration**(`decoration`): [`DecorationsBuilder`](market_builder.DecorationsBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoration` | [`MarketDecoration`](../modules/market_builder.md#marketdecoration) |

#### Returns

[`DecorationsBuilder`](market_builder.DecorationsBuilder.md)

#### Defined in

[yajsapi/market/builder.ts:81](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/market/builder.ts#L81)

___

### addDecorations

▸ **addDecorations**(`decorations`): [`DecorationsBuilder`](market_builder.DecorationsBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decorations` | [`MarketDecoration`](../modules/market_builder.md#marketdecoration)[] |

#### Returns

[`DecorationsBuilder`](market_builder.DecorationsBuilder.md)

#### Defined in

[yajsapi/market/builder.ts:95](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/market/builder.ts#L95)
