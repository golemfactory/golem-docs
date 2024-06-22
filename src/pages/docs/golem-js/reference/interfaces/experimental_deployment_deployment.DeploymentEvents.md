---
title: "Interface DeploymentEvents"
pageTitle: "Interface DeploymentEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface DeploymentEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: DeploymentEvents

[experimental/deployment/deployment](../modules/experimental_deployment_deployment).DeploymentEvents

## Table of contents

### Properties

- [ready](experimental_deployment_deployment.DeploymentEvents#ready)
- [beforeEnd](experimental_deployment_deployment.DeploymentEvents#beforeend)
- [end](experimental_deployment_deployment.DeploymentEvents#end)

## Properties

### ready

• **ready**: () => `void`

Fires when backend is started.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/experimental/deployment/deployment.ts:26](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/deployment.ts#L26)

___

### beforeEnd

• **beforeEnd**: () => `void`

Fires when backend is about to be stopped.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/experimental/deployment/deployment.ts:37](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/deployment.ts#L37)

___

### end

• **end**: () => `void`

Fires when backend is completely terminated.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/experimental/deployment/deployment.ts:42](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/deployment/deployment.ts#L42)
