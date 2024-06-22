---
title: "Class GolemDeploymentBuilder"
pageTitle: "Class GolemDeploymentBuilder - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemDeploymentBuilder within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemDeploymentBuilder

[experimental/deployment/builder](../modules/experimental_deployment_builder).GolemDeploymentBuilder

## Table of contents

### Constructors

- [constructor](experimental_deployment_builder.GolemDeploymentBuilder#constructor)

### Methods

- [reset](experimental_deployment_builder.GolemDeploymentBuilder#reset)
- [createResourceRentalPool](experimental_deployment_builder.GolemDeploymentBuilder#createresourcerentalpool)
- [createNetwork](experimental_deployment_builder.GolemDeploymentBuilder#createnetwork)
- [getDeployment](experimental_deployment_builder.GolemDeploymentBuilder#getdeployment)

## Constructors

### constructor

• **new GolemDeploymentBuilder**(`glm`): [`GolemDeploymentBuilder`](experimental_deployment_builder.GolemDeploymentBuilder)

#### Parameters

| Name | Type |
| :------ | :------ |
| `glm` | [`GolemNetwork`](golem_network_golem_network.GolemNetwork) |

#### Returns

[`GolemDeploymentBuilder`](experimental_deployment_builder.GolemDeploymentBuilder)

#### Defined in

[src/experimental/deployment/builder.ts:29](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/builder.ts#L29)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/experimental/deployment/builder.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/builder.ts#L22)

___

### createResourceRentalPool

▸ **createResourceRentalPool**(`name`, `options`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | [`CreateResourceRentalPoolOptions`](../interfaces/experimental_deployment_builder.CreateResourceRentalPoolOptions) |

#### Returns

`this`

#### Defined in

[src/experimental/deployment/builder.ts:31](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/builder.ts#L31)

___

### createNetwork

▸ **createNetwork**(`name`, `options?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | [`NetworkOptions`](../interfaces/network_network_module.NetworkOptions) |

#### Returns

`this`

#### Defined in

[src/experimental/deployment/builder.ts:41](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/builder.ts#L41)

___

### getDeployment

▸ **getDeployment**(): [`Deployment`](experimental_deployment_deployment.Deployment)

#### Returns

[`Deployment`](experimental_deployment_deployment.Deployment)

#### Defined in

[src/experimental/deployment/builder.ts:51](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/builder.ts#L51)
