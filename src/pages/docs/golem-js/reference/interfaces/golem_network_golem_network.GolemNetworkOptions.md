---
title: 'Interface GolemNetworkOptions'
pageTitle: 'Interface GolemNetworkOptions - golem-js API Reference'
description: 'Explore the detailed API reference documentation for the Interface GolemNetworkOptions within the golem-js SDK for the Golem Network.'
type: 'JS API Reference'
---

# Interface: GolemNetworkOptions

[golem-network/golem-network](../modules/golem_network_golem_network).GolemNetworkOptions

## Table of contents

### Properties

- [logger](golem_network_golem_network.GolemNetworkOptions#logger)
- [api](golem_network_golem_network.GolemNetworkOptions#api)
- [payment](golem_network_golem_network.GolemNetworkOptions#payment)
- [market](golem_network_golem_network.GolemNetworkOptions#market)
- [dataTransferProtocol](golem_network_golem_network.GolemNetworkOptions#datatransferprotocol)
- [override](golem_network_golem_network.GolemNetworkOptions#override)

## Properties

### logger

• `Optional` **logger**: [`Logger`](shared_utils_logger_logger.Logger)

Logger instance to use for logging.
If no logger is provided you can view debug logs by setting the
`DEBUG` environment variable to `golem-js:*`.

#### Defined in

[src/golem-network/golem-network.ts:80](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L80)

---

### api

• `Optional` **api**: `Object`

Set the API key and URL for the Yagna API.

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `key?` | `string` |
| `url?` | `string` |

#### Defined in

[src/golem-network/golem-network.ts:85](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L85)

---

### payment

• `Optional` **payment**: `Partial`\<[`PaymentModuleOptions`](payment_payment_module.PaymentModuleOptions)\>

Set payment-related options.

This is where you can specify the network, payment driver and more.
By default, the network is set to the `hoodi` test network.

#### Defined in

[src/golem-network/golem-network.ts:96](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L96)

---

### market

• `Optional` **market**: `Partial`\<[`MarketModuleOptions`](market_market_module.MarketModuleOptions)\>

Set market related options.

This is where you can globally specify several options that determine how the SDK will
interact with the market.

#### Defined in

[src/golem-network/golem-network.ts:104](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L104)

---

### dataTransferProtocol

• `Optional` **dataTransferProtocol**: [`DataTransferProtocol`](../modules/shared_types#datatransferprotocol)

Set the data transfer protocol to use for file transfers.
Default is `gftp`.

#### Defined in

[src/golem-network/golem-network.ts:110](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L110)

---

### override

• `Optional` **override**: `Partial`\<[`GolemServices`](../modules/golem_network_golem_network#golemservices) & \{ `market`: [`InstanceOrFactory`](../modules/golem_network_golem_network#instanceorfactory)\<[`MarketModule`](market_market_module.MarketModule), `never`[]\> ; `payment`: [`InstanceOrFactory`](../modules/golem_network_golem_network#instanceorfactory)\<[`PaymentModule`](payment_payment_module.PaymentModule), `never`[]\> ; `activity`: [`InstanceOrFactory`](../modules/golem_network_golem_network#instanceorfactory)\<[`ActivityModule`](activity_activity_module.ActivityModule), `never`[]\> ; `network`: [`InstanceOrFactory`](../modules/golem_network_golem_network#instanceorfactory)\<[`NetworkModule`](network_network_module.NetworkModule), `never`[]\> ; `rental`: [`InstanceOrFactory`](../modules/golem_network_golem_network#instanceorfactory)\<[`RentalModule`](resource_rental_rental_module.RentalModule), `never`[]\> }\>

Override some of the services used by the GolemNetwork instance.
This is useful for testing or when you want to provide your own implementation of some services.
Only set this if you know what you are doing.
To override a module you can pass either an instance of an object or a factory function (that we can call `new` on).

#### Defined in

[src/golem-network/golem-network.ts:118](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L118)
