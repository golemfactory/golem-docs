---
title: "Interface ExeUnitOptions"
pageTitle: "Interface ExeUnitOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ExeUnitOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ExeUnitOptions

[activity/exe-unit/exe-unit](../modules/activity_exe_unit_exe_unit).ExeUnitOptions

## Table of contents

### Properties

- [activityDeployingTimeout](activity_exe_unit_exe_unit.ExeUnitOptions#activitydeployingtimeout)
- [storageProvider](activity_exe_unit_exe_unit.ExeUnitOptions#storageprovider)
- [networkNode](activity_exe_unit_exe_unit.ExeUnitOptions#networknode)
- [logger](activity_exe_unit_exe_unit.ExeUnitOptions#logger)
- [yagnaOptions](activity_exe_unit_exe_unit.ExeUnitOptions#yagnaoptions)
- [setup](activity_exe_unit_exe_unit.ExeUnitOptions#setup)
- [teardown](activity_exe_unit_exe_unit.ExeUnitOptions#teardown)
- [executionOptions](activity_exe_unit_exe_unit.ExeUnitOptions#executionoptions)
- [signalOrTimeout](activity_exe_unit_exe_unit.ExeUnitOptions#signalortimeout)

## Properties

### activityDeployingTimeout

• `Optional` **activityDeployingTimeout**: `number`

#### Defined in

[src/activity/exe-unit/exe-unit.ts:30](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/exe-unit.ts#L30)

___

### storageProvider

• `Optional` **storageProvider**: [`StorageProvider`](shared_storage_provider.StorageProvider)

#### Defined in

[src/activity/exe-unit/exe-unit.ts:31](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/exe-unit.ts#L31)

___

### networkNode

• `Optional` **networkNode**: [`NetworkNode`](../classes/network_node.NetworkNode)

#### Defined in

[src/activity/exe-unit/exe-unit.ts:32](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/exe-unit.ts#L32)

___

### logger

• `Optional` **logger**: [`Logger`](shared_utils_logger_logger.Logger)

#### Defined in

[src/activity/exe-unit/exe-unit.ts:33](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/exe-unit.ts#L33)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/shared_yagna_yagnaApi#yagnaoptions)

#### Defined in

[src/activity/exe-unit/exe-unit.ts:34](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/exe-unit.ts#L34)

___

### setup

• `Optional` **setup**: [`LifecycleFunction`](../modules/activity_exe_unit_exe_unit#lifecyclefunction)

this function is called as soon as the exe unit is ready

#### Defined in

[src/activity/exe-unit/exe-unit.ts:36](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/exe-unit.ts#L36)

___

### teardown

• `Optional` **teardown**: [`LifecycleFunction`](../modules/activity_exe_unit_exe_unit#lifecyclefunction)

this function is called before the exe unit is destroyed

#### Defined in

[src/activity/exe-unit/exe-unit.ts:38](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/exe-unit.ts#L38)

___

### executionOptions

• `Optional` **executionOptions**: [`ExecutionOptions`](activity_exe_script_executor.ExecutionOptions)

#### Defined in

[src/activity/exe-unit/exe-unit.ts:39](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/exe-unit.ts#L39)

___

### signalOrTimeout

• `Optional` **signalOrTimeout**: `number` \| `AbortSignal`

#### Defined in

[src/activity/exe-unit/exe-unit.ts:40](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/exe-unit/exe-unit.ts#L40)
