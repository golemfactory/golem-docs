---
title: "Interface ResourceRentalOptions"
pageTitle: "Interface ResourceRentalOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ResourceRentalOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ResourceRentalOptions

[resource-rental/resource-rental](../modules/resource_rental_resource_rental).ResourceRentalOptions

## Table of contents

### Properties

- [exeUnit](resource_rental_resource_rental.ResourceRentalOptions#exeunit)
- [activity](resource_rental_resource_rental.ResourceRentalOptions#activity)
- [payment](resource_rental_resource_rental.ResourceRentalOptions#payment)
- [networkNode](resource_rental_resource_rental.ResourceRentalOptions#networknode)

## Properties

### exeUnit

• `Optional` **exeUnit**: `Pick`\<[`ExeUnitOptions`](activity_exe_unit_exe_unit.ExeUnitOptions), ``"teardown"`` \| ``"setup"`` \| ``"activityDeployingTimeout"``\>

#### Defined in

[src/resource-rental/resource-rental.ts:27](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L27)

___

### activity

• `Optional` **activity**: [`ExecutionOptions`](activity_exe_script_executor.ExecutionOptions)

#### Defined in

[src/resource-rental/resource-rental.ts:28](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L28)

___

### payment

• `Optional` **payment**: `Partial`\<[`PaymentProcessOptions`](payment_agreement_payment_process.PaymentProcessOptions)\>

#### Defined in

[src/resource-rental/resource-rental.ts:29](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L29)

___

### networkNode

• `Optional` **networkNode**: [`NetworkNode`](../classes/network_node.NetworkNode)

#### Defined in

[src/resource-rental/resource-rental.ts:30](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/resource-rental/resource-rental.ts#L30)
