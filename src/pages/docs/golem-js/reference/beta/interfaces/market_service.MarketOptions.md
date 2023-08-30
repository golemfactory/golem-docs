# Interface: MarketOptions

[market/service](../modules/market_service.md).MarketOptions

## Hierarchy

- `DemandOptions`

  ↳ **`MarketOptions`**

## Table of contents

### Properties

- [proposalFilter](market_service.MarketOptions.md#proposalfilter)
- [debitNotesAcceptanceTimeout](market_service.MarketOptions.md#debitnotesacceptancetimeout)
- [subnetTag](market_service.MarketOptions.md#subnettag)
- [yagnaOptions](market_service.MarketOptions.md#yagnaoptions)
- [marketTimeout](market_service.MarketOptions.md#markettimeout)
- [marketOfferExpiration](market_service.MarketOptions.md#marketofferexpiration)
- [logger](market_service.MarketOptions.md#logger)
- [maxOfferEvents](market_service.MarketOptions.md#maxofferevents)
- [offerFetchingInterval](market_service.MarketOptions.md#offerfetchinginterval)
- [proposalTimeout](market_service.MarketOptions.md#proposaltimeout)
- [eventTarget](market_service.MarketOptions.md#eventtarget)

## Properties

### proposalFilter

• `Optional` **proposalFilter**: [`ProposalFilter`](../modules/market_service.md#proposalfilter)

A custom filter that checks every proposal coming from the market

#### Defined in

[src/market/service.ts:14](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/market/service.ts#L14)

___

### debitNotesAcceptanceTimeout

• `Optional` **debitNotesAcceptanceTimeout**: `number`

Maximum time for debit note acceptance

#### Defined in

[src/market/service.ts:16](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/market/service.ts#L16)

___

### subnetTag

• `Optional` **subnetTag**: `string`

#### Inherited from

DemandOptions.subnetTag

#### Defined in

[src/market/demand.ts:21](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/market/demand.ts#L21)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

#### Inherited from

DemandOptions.yagnaOptions

#### Defined in

[src/market/demand.ts:22](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/market/demand.ts#L22)

___

### marketTimeout

• `Optional` **marketTimeout**: `number`

#### Inherited from

DemandOptions.marketTimeout

#### Defined in

[src/market/demand.ts:23](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/market/demand.ts#L23)

___

### marketOfferExpiration

• `Optional` **marketOfferExpiration**: `number`

#### Inherited from

DemandOptions.marketOfferExpiration

#### Defined in

[src/market/demand.ts:24](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/market/demand.ts#L24)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger.md)

#### Inherited from

DemandOptions.logger

#### Defined in

[src/market/demand.ts:25](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/market/demand.ts#L25)

___

### maxOfferEvents

• `Optional` **maxOfferEvents**: `number`

#### Inherited from

DemandOptions.maxOfferEvents

#### Defined in

[src/market/demand.ts:26](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/market/demand.ts#L26)

___

### offerFetchingInterval

• `Optional` **offerFetchingInterval**: `number`

#### Inherited from

DemandOptions.offerFetchingInterval

#### Defined in

[src/market/demand.ts:27](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/market/demand.ts#L27)

___

### proposalTimeout

• `Optional` **proposalTimeout**: `number`

#### Inherited from

DemandOptions.proposalTimeout

#### Defined in

[src/market/demand.ts:28](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/market/demand.ts#L28)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Inherited from

DemandOptions.eventTarget

#### Defined in

[src/market/demand.ts:29](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/market/demand.ts#L29)
