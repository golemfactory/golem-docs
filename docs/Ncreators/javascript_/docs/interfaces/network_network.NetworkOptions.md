# Interface: NetworkOptions

[network/network](../modules/network_network.md).NetworkOptions

## Table of contents

### Properties

- [networkOwnerId](network_network.NetworkOptions.md#networkownerid)
- [yagnaOptions](network_network.NetworkOptions.md#yagnaoptions)
- [networkIp](network_network.NetworkOptions.md#networkip)
- [networkOwnerIp](network_network.NetworkOptions.md#networkownerip)
- [networkMask](network_network.NetworkOptions.md#networkmask)
- [networkGateway](network_network.NetworkOptions.md#networkgateway)
- [logger](network_network.NetworkOptions.md#logger)

## Properties

### networkOwnerId

• **networkOwnerId**: `string`

the node ID of the owner of this VPN (the requestor)

#### Defined in

[yajsapi/network/network.ts:12](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/network/network.ts#L12)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

YagnaOptions

#### Defined in

[yajsapi/network/network.ts:14](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/network/network.ts#L14)

___

### networkIp

• `Optional` **networkIp**: `string`

the IP address of the network. May contain netmask, e.g. "192.168.0.0/24"

#### Defined in

[yajsapi/network/network.ts:16](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/network/network.ts#L16)

___

### networkOwnerIp

• `Optional` **networkOwnerIp**: `string`

the desired IP address of the requestor node within the newly-created network

#### Defined in

[yajsapi/network/network.ts:18](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/network/network.ts#L18)

___

### networkMask

• `Optional` **networkMask**: `string`

optional netmask (only if not provided within the `ip` argument)

#### Defined in

[yajsapi/network/network.ts:20](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/network/network.ts#L20)

___

### networkGateway

• `Optional` **networkGateway**: `string`

optional gateway address for the network

#### Defined in

[yajsapi/network/network.ts:22](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/network/network.ts#L22)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger.Logger.md)

optional custom logger module

#### Defined in

[yajsapi/network/network.ts:24](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/network/network.ts#L24)
