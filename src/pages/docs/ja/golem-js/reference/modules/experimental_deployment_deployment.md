---
title: "Module experimental/deployment/deployment"
pageTitle: "Module experimental/deployment/deployment - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module experimental/deployment/deployment within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: experimental/deployment/deployment

## Table of contents

### Enumerations

- [DeploymentState](../enums/experimental_deployment_deployment.DeploymentState)

### Classes

- [Deployment](../classes/experimental_deployment_deployment.Deployment)

### Interfaces

- [DeploymentEvents](../interfaces/experimental_deployment_deployment.DeploymentEvents)

### Type Aliases

- [DeploymentComponents](experimental_deployment_deployment#deploymentcomponents)

## Type Aliases

### DeploymentComponents

Ƭ **DeploymentComponents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `resourceRentalPools` | \{ `name`: `string` ; `options`: [`CreateResourceRentalPoolOptions`](../interfaces/experimental_deployment_builder.CreateResourceRentalPoolOptions)  }[] |
| `networks` | \{ `name`: `string` ; `options`: [`NetworkOptions`](../interfaces/network_network_module.NetworkOptions)  }[] |

#### Defined in

[src/experimental/deployment/deployment.ts:45](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/deployment/deployment.ts#L45)
