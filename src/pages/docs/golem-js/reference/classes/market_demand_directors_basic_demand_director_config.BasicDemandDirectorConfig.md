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

- [expirationSec](market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfig#expirationsec)
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

[src/market/demand/directors/basic-demand-director-config.ts:14](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/basic-demand-director-config.ts#L14)

## Properties

### expirationSec

• `Readonly` **expirationSec**: `number`

#### Implementation of

[BasicDemandDirectorConfigOptions](../interfaces/market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfigOptions).[expirationSec](../interfaces/market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfigOptions#expirationsec)

#### Defined in

[src/market/demand/directors/basic-demand-director-config.ts:11](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/basic-demand-director-config.ts#L11)

___

### subnetTag

• `Readonly` **subnetTag**: `string`

#### Implementation of

[BasicDemandDirectorConfigOptions](../interfaces/market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfigOptions).[subnetTag](../interfaces/market_demand_directors_basic_demand_director_config.BasicDemandDirectorConfigOptions#subnettag)

#### Defined in

[src/market/demand/directors/basic-demand-director-config.ts:12](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/basic-demand-director-config.ts#L12)

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

[src/market/demand/directors/base-config.ts:7](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/base-config.ts#L7)
