---
title: "Class BasicDemandDirectorConfig"
pageTitle: "Class BasicDemandDirectorConfig - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class BasicDemandDirectorConfig within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: BasicDemandDirectorConfig

[market/demand/directors/basic-demand-director-config](../modules/market_demand_directors_basic_demand_director_config).BasicDemandDirectorConfig

Basic config utility class

Helps in building more specific config classes

## Hierarchy

- [`BaseConfig`](market_demand_directors_base_config.BaseConfig)

  ↳ **`BasicDemandDirectorConfig`**

## Implements

- [`BasicDemandDirectorConfigOptions`](../interfaces/market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfigOptions)

## Table of contents

### Constructors

- [constructor](market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfig#constructor)

### Properties

- [subnetTag](market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfig#subnettag)

### Methods

- [isPositiveInt](market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfig#ispositiveint)

## Constructors

### constructor

• **new BasicDemandDirectorConfig**(`options?`): [`BasicDemandDirectorConfig`](market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<[`BasicDemandDirectorConfigOptions`](../interfaces/market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfigOptions)\> |

#### Returns

[`BasicDemandDirectorConfig`](market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfig)

#### Overrides

[BaseConfig](market_demand_directors_base_config.BaseConfig).[constructor](market_demand_directors_base_config.BaseConfig#constructor)

#### Defined in

[src/market/demand/directors/basic-demand-director-config.ts:12](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/basic-demand-director-config.ts#L12)

## Properties

### subnetTag

• `Readonly` **subnetTag**: `string`

Determines which subnet tag should be used for the offer/demand matching

#### Implementation of

[BasicDemandDirectorConfigOptions](../interfaces/market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfigOptions).[subnetTag](../interfaces/market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfigOptions#subnettag)

#### Defined in

[src/market/demand/directors/basic-demand-director-config.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/basic-demand-director-config.ts#L10)

## Methods

### isPositiveInt

▸ **isPositiveInt**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`boolean`

#### Inherited from

[BaseConfig](market_demand_directors_base_config.BaseConfig).[isPositiveInt](market_demand_directors_base_config.BaseConfig#ispositiveint)

#### Defined in

[src/market/demand/directors/base-config.ts:7](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/base-config.ts#L7)
