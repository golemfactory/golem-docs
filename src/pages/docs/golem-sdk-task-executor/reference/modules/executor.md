---
title: "Module executor"
pageTitle: "Module executor - Task API Reference"
description: "Explore the detailed API reference documentation for the Module executor within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Module: executor

## Table of contents

### Classes

- [TaskExecutor](../classes/executor.TaskExecutor)

### Interfaces

- [TaskSpecificOptions](../interfaces/executor.TaskSpecificOptions)

### Type Aliases

- [ExecutorMainOptions](executor#executormainoptions)
- [TaskExecutorOptions](executor#taskexecutoroptions)
- [TaskFunction](executor#taskfunction)

## Type Aliases

### ExecutorMainOptions

Ƭ **ExecutorMainOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enableLogging?` | `boolean` | Set to `false` to completely disable logging (even if a logger is provided) |
| `skipProcessSignals?` | `boolean` | Do not install signal handlers for SIGINT, SIGTERM, SIGBREAK, SIGHUP. By default, TaskExecutor will install those and terminate itself when any of those signals is received. This is to make sure proper shutdown with completed invoice payments. Note: If you decide to set this to `true`, you will be responsible for proper shutdown of task executor. |
| `startupTimeout?` | `number` | Timeout for waiting for at least one offer from the market expressed in milliseconds. This parameter (set to 90 sec by default) will issue a warning when executing `TaskExecutor.run` if no offer from the market is accepted before this time. If you'd like to change this behavior, and throw an error instead, set `exitOnNoProposals` to `true`. You can set a slightly higher time in a situation where your parameters such as proposalFilter or minimum hardware requirements are quite restrictive and finding a suitable provider that meets these criteria may take a bit longer. |
| `vpn?` | `boolean` \| `NetworkOptions` | Creates a new logical network within the Golem VPN infrastructure. Allows communication between tasks using standard network mechanisms, but requires specific implementation in the ExeUnit/runtime, which must be capable of providing a standard Unix-socket interface to their payloads and marshaling the logical network traffic through the Golem Net transport layer. If boolean - true is provided, the network will be created with default parameters |
| `task?` | [`TaskSpecificOptions`](../interfaces/executor.TaskSpecificOptions) | - |

#### Defined in

[executor.ts:97](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L97)

___

### TaskExecutorOptions

Ƭ **TaskExecutorOptions**: [`ExecutorMainOptions`](executor#executormainoptions) & `GolemNetworkOptions` & `MarketOrderSpec`

Contains information needed to start executor

#### Defined in

[executor.ts:135](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L135)

___

### TaskFunction

Ƭ **TaskFunction**\<`OutputType`\>: (`exe`: `ExeUnit`) => `Promise`\<`OutputType`\>

#### Type parameters

| Name |
| :------ |
| `OutputType` |

#### Type declaration

▸ (`exe`): `Promise`\<`OutputType`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `exe` | `ExeUnit` |

##### Returns

`Promise`\<`OutputType`\>

#### Defined in

[executor.ts:137](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/executor.ts#L137)
