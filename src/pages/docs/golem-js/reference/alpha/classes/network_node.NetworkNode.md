# Class: NetworkNode

[network/node](../modules/network_node).NetworkNode

Describes a node in a VPN, mapping a Golem node id to an IP address

## Table of contents

### Constructors

- [constructor](network_node.NetworkNode#constructor)

### Properties

- [id](network_node.NetworkNode#id)
- [ip](network_node.NetworkNode#ip)

### Methods

- [getNetworkConfig](network_node.NetworkNode#getnetworkconfig)
- [getWebsocketUri](network_node.NetworkNode#getwebsocketuri)

## Constructors

### constructor

• **new NetworkNode**(`id`, `ip`, `getNetworkInfo`, `apiUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `ip` | `IPv4` |
| `getNetworkInfo` | () => [`NetworkInfo`](../interfaces/network_network.NetworkInfo) |
| `apiUrl` | `string` |

#### Defined in

[src/network/node.ts:8](https://github.com/golemfactory/golem-js/blob/614ea72/src/network/node.ts#L8)

## Properties

### id

• `Readonly` **id**: `any`

#### Defined in

[src/network/node.ts:9](https://github.com/golemfactory/golem-js/blob/614ea72/src/network/node.ts#L9)

___

### ip

• `Readonly` **ip**: `IPv4`

#### Defined in

[src/network/node.ts:10](https://github.com/golemfactory/golem-js/blob/614ea72/src/network/node.ts#L10)

## Methods

### getNetworkConfig

▸ **getNetworkConfig**(): `Object`

Generate a dictionary of arguments that are required for the appropriate
`Deploy` command of an exescript in order to pass the network configuration to the runtime
on the provider's end.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `net` | { `nodeIp`: `string` ; `id`: `string` ; `ip`: `string` ; `mask`: `string` ; `nodes`: { `[ip: string]`: `string`;  }  }[] |

#### Defined in

[src/network/node.ts:20](https://github.com/golemfactory/golem-js/blob/614ea72/src/network/node.ts#L20)

___

### getWebsocketUri

▸ **getWebsocketUri**(`port`): `string`

Get the websocket URI corresponding with a specific TCP port on this Node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `port` | `number` | TCP port of the service within the runtime |

#### Returns

`string`

the url

#### Defined in

[src/network/node.ts:36](https://github.com/golemfactory/golem-js/blob/614ea72/src/network/node.ts#L36)
