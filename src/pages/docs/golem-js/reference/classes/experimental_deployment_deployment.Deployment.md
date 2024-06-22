---
title: "Class Deployment"
pageTitle: "Class Deployment - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Deployment within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Deployment

[experimental/deployment/deployment](../modules/experimental_deployment_deployment).Deployment

This feature is experimental!!!

## Table of contents

### Constructors

- [constructor](experimental_deployment_deployment.Deployment#constructor)

### Properties

- [events](experimental_deployment_deployment.Deployment#events)

### Methods

- [getState](experimental_deployment_deployment.Deployment#getstate)
- [start](experimental_deployment_deployment.Deployment#start)
- [stop](experimental_deployment_deployment.Deployment#stop)
- [getResourceRentalPool](experimental_deployment_deployment.Deployment#getresourcerentalpool)
- [getNetwork](experimental_deployment_deployment.Deployment#getnetwork)

## Constructors

### constructor

• **new Deployment**(`components`, `deps`): [`Deployment`](experimental_deployment_deployment.Deployment)

#### Parameters

| Name | Type |
| :------ | :------ |
| `components` | [`DeploymentComponents`](../modules/experimental_deployment_deployment#deploymentcomponents) |
| `deps` | `Object` |
| `deps.logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |
| `deps.yagna` | [`YagnaApi`](shared_yagna_yagnaApi.YagnaApi) |
| `deps.market` | [`MarketModule`](../interfaces/market_market_module.MarketModule) |
| `deps.activity` | [`ActivityModule`](../interfaces/activity_activity_module.ActivityModule) |
| `deps.payment` | [`PaymentModule`](../interfaces/payment_payment_module.PaymentModule) |
| `deps.network` | [`NetworkModule`](../interfaces/network_network_module.NetworkModule) |
| `deps.rental` | [`RentalModule`](../interfaces/resource_rental_rental_module.RentalModule) |

#### Returns

[`Deployment`](experimental_deployment_deployment.Deployment)

#### Defined in

[src/experimental/deployment/deployment.ts:82](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/deployment.ts#L82)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`DeploymentEvents`](../interfaces/experimental_deployment_deployment.DeploymentEvents), `any`\>

#### Defined in

[src/experimental/deployment/deployment.ts:54](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/deployment.ts#L54)

## Methods

### getState

▸ **getState**(): [`DeploymentState`](../enums/experimental_deployment_deployment.DeploymentState)

#### Returns

[`DeploymentState`](../enums/experimental_deployment_deployment.DeploymentState)

#### Defined in

[src/experimental/deployment/deployment.ts:111](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/deployment.ts#L111)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/experimental/deployment/deployment.ts:115](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/deployment.ts#L115)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/experimental/deployment/deployment.ts:191](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/deployment.ts#L191)

___

### getResourceRentalPool

▸ **getResourceRentalPool**(`name`): [`ResourceRentalPool`](resource_rental_resource_rental_pool.ResourceRentalPool)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ResourceRentalPool`](resource_rental_resource_rental_pool.ResourceRentalPool)

#### Defined in

[src/experimental/deployment/deployment.ts:222](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/deployment.ts#L222)

___

### getNetwork

▸ **getNetwork**(`name`): [`Network`](network_network.Network)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Network`](network_network.Network)

#### Defined in

[src/experimental/deployment/deployment.ts:230](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/deployment.ts#L230)
