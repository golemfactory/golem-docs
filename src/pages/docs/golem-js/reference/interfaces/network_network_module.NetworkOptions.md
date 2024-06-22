---
title: "Interface NetworkOptions"
pageTitle: "Interface NetworkOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface NetworkOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: NetworkOptions

[network/network.module](../modules/network_network_module).NetworkOptions

## Table of contents

### Properties

- [ip](network_network_module.NetworkOptions#ip)
- [ownerIp](network_network_module.NetworkOptions#ownerip)
- [mask](network_network_module.NetworkOptions#mask)
- [gateway](network_network_module.NetworkOptions#gateway)

## Properties

### ip

• `Optional` **ip**: `string`

The IP address of the network. May contain netmask, e.g. "192.168.0.0/24".
This field can include the netmask directly in CIDR notation.

**`Default`**

```ts
"192.168.0.0"
```

#### Defined in

[src/network/network.module.ts:17](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/network.module.ts#L17)

___

### ownerIp

• `Optional` **ownerIp**: `string`

The desired IP address of the requestor node within the newly-created network.
This field is optional and if not provided, the first available IP address will be assigned.

#### Defined in

[src/network/network.module.ts:23](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/network.module.ts#L23)

___

### mask

• `Optional` **mask**: `string`

Optional network mask given in dotted decimal notation.
If the ip address was provided in Cidr notation this mask will override the mask from the Cidr notation

#### Defined in

[src/network/network.module.ts:29](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/network.module.ts#L29)

___

### gateway

• `Optional` **gateway**: `string`

Optional gateway address for the network.
This field can be used to specify a gateway IP address for the network.

#### Defined in

[src/network/network.module.ts:35](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/network.module.ts#L35)
