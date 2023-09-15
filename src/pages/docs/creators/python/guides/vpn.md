---
description: Golem VPN networking concept
title: Golem VPN networking concept
type: Guide
---

# Golem VPN networking concept

## Intro

The Golem ecosystem allows for building distributed applications, where multiple Provider nodes are instantiated and coordinated by a central Requestor. Such applications may include payloads that require connectivity **between Provider nodes**.

Golem VPN feature has been designed to provide such connectivity in a manner that is as close as possible to standard network connectivity mechanisms. From the perspective of a VM, the connectivity is conducted using regular IP connections to assigned addresses and ports within the private network so payloads may be ignorant of the fact that the Provider host is embedded in the Golem network and all network traffic happens in the Golem network itself.

Golem VPN requires specific implementation in the ExeUnit/runtime, which must be capable of providing a standard Unix-socket interface to their payloads and marshaling the logical network traffic through the Golem Net transport layer - thus achieving actual both Virtual and Private networking capabilities.

{% alert level="info" %}
The Golem VPN mechanism enables node-to-node connectivity, implemented on the back of the Golem Net transport layer. It does not provide node-to-Internet, nor Internet-to-node connectivity directly.

One of our bundled examples [`http-proxy`](/docs/creators/python/tutorials/service-example-3-vpn-simple-http-proxy) presents (an extremely simplified) way to provide the latter.

{% /alert %}

![](/golem-vpn.png)

### Features

The Golem VPN concept includes the following key features:

- Network configuration is controlled via a Net API - a RESTful API available on the `yagna` service (alongside e.g. Market API or Activity API). Net API endpoints allow for defining a logical Golem VPN network, adding/removing nodes (visible in the network under their "virtual" IP addresses).
- Allow Provider-side payload to open a listening net socket to accept incoming network traffic. This generally allows to launch of typical server applications leveraging TCP/IP protocol, like HTTP servers, telnet/SSH servers, messaging or file servers, etc. Connection-less protocols (like UDP or ICMP) are also supported.
- Allow Provider-side payload to create network connections to another Provider-side payload in the same "virtual" network.
- Allow an application on the Requestor side to open a network communication channel to a payload module running on a selected Provider node. This is achieved using a Websocket-based Net "gate" published by the `yagna` service running on the Requestor side, which provides authenticated access to a Golem VPN network.
- The network traffic between the nodes is marshaled over the Golem network, so all features of the Golem net apply.
- The logical model of Golem VPN allows for any IP-based network protocol to be wrapped in the Golem network transport layer, however, the protocols supported are specific to ExeUnit runtime implementation.

### Configuration

A typical VPN setup sequence of activities performed by a Golem application is as follows:

- **Create network** - a logical network record gets created and is ready to accept "virtual" nodes.
- **Add node to network** - once a Provider is contracted, its node ID can be added to the virtual network under a "virtual" IP.
- **Activate the node** - During provider deployment, the ExeUnit initiates network interfaces to connect the payload to the VPN.
- Run payload...
- **Remove node from network** - once the Provider node is no longer needed, it gets removed from the VPN network.
- **Remove network** - once the whole VPN is no longer needed, it may (and should) be removed to free the resources on the requestor yagna daemon.

The configuration is specified via calls to Yagna Net API. The nuances of Net API calls are wrapped by Golem SDK to simplify the developer's experience. Please refer to the examples listed at the bottom of the page to get examples for specific SDKs.

### Caveats

While the Golem VPN feature is being implemented, it still includes known gaps or deficiencies, such as the ones listed below:

- Once a Provider node is added to the VPN and ExeUnit is launched and connected to this network - its network configuration (including virtual IP address) cannot be changed.
- IPv4 is supported.
- Multicast is not supported.
- Marshalling generic network traffic over Golem Net layer incurs substantial overhead (eg. due to TCP-over-TCP layering)
- Custom ExeUnit runtime SDK allows for implementing Golem VPN capability but does not include a default/reference implementation.

{% docnavigation title="Next steps" %}

Explore examples that illustrate usage of Golem VPN features in practice:

- A [ssh terminal](/docs/creators/python/tutorials/service-example-2-vpn-ssh-terminal)

- Simple [http proxy](/docs/creators/python/tutorials/service-example-3-vpn-simple-http-proxy)

{% /docnavigation %}

--------

parking zone:
A Golem VPN requires configuration which defines the mapping of "virtual" IP addresses to nodes. The VPN configuration includes following entries/structures:

- Network
  - Network id
- Nodes
  - Golem node id
  - Virtual IP address

The configuration is specified via calls to Net API. The nuances of Net API calls are wrapped by Golem High Level APIs to simplify developer's experience.

### Golem VPN setup sequence

A typical VPN setup sequence of activities performed by a Golem application is as follows:

- **Create network** - a logical network record gets created and is ready to accept "virtual" nodes.
- **Create agreement and start activity** - identify a Provider node and launch an activity.
- **Add node** to network - once a Provider is identified and contracted, its node id can be added to virtual network under a "virtual" IP.
- **Exec(DEPLOY)** - send DEPLOY command to the Provider's ExeUnit. At this point the network configuration is passed to the ExeUnit, which can initiate its network intrfaces to connect the ExeUnit (and payload) to the VPN.
- Run payload...
- **Remove node** from network - once the Provider node is no longer needed, it gets removed from the VPN network.
- **Remove network** - once the whole VPN is no longer needed, it may (and should) be removed so as to free the resources on the requestor yagna daemon.


