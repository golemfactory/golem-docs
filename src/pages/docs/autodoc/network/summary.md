[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/network)

The `network` folder in the `yajsapi` project contains code related to creating and managing a virtual private network (VPN) between nodes within the Golem Network. The main classes and functions in this folder are `Network`, `NetworkNode`, `NetworkService`, and `getIdentity`.

The `Network` class is responsible for creating and managing a VPN between nodes. It provides methods to create a new VPN, add a new node to the network, and remove the network. The `NetworkNode` class represents a node in the VPN and provides methods to generate a dictionary of arguments required for the appropriate `Deploy` command of an exescript and to get the websocket URI corresponding with a specific TCP port on the node.

The `NetworkService` class provides a simplified interface for managing a network of nodes. It can be used in the `TaskExecutor` of the larger project to create and manage a network of nodes. The `NetworkService` class can be used to add and remove nodes from the network and to start and stop the network service.

The `getIdentity` function retrieves the requestor's ID from a Yagna API endpoint, which can be used for authentication and authorization purposes.

Here's an example of how these classes and functions might be used together:

```javascript
import { Network } from 'yajsapi';
import { getIdentity } from 'yajsapi';

async function main() {
  const networkOwnerId = await getIdentity();
  const network = await Network.create({
    networkOwnerId: networkOwnerId,
    networkIp: '192.168.0.0/24',
    networkOwnerIp: '192.168.0.1',
  });

  const node = await network.addNode('new-node-id');
  console.log(network.getNetworkInfo());
  await network.remove();
}

main();
```

In this example, the `getIdentity` function is used to retrieve the requestor's ID, which is then used as the `networkOwnerId` when creating a new `Network` instance. The `Network` instance is used to create a VPN, add a new node to the network, and remove the network.

Overall, the code in the `network` folder is crucial for the `yajsapi` project, providing the necessary tools for network communication and service management. It abstracts away the details of network creation and management, making it easy for developers to create and manage VPNs within their applications.
