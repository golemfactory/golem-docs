---
title: Golem-Workers Create Node Explained 
pageTitle: Golem-Workers Create Node Explained
description: Explanation of the `create-node` endpoint

type: Article
---

# Golem-Workers Create Node Explained

The **Create Node** endpoint is the central one for Golem-Workers, 
enabling developers to spin up individual nodes within a cluster.
When invoking this endpoint, you can configure various aspects of the node, including budget, network settings, 
and specific node configurations. 

This section will walk through its configurable aspects but do not hesitate to 
consult the Open API spec for more details.
It is provided by the Golem-Workers server 
([Getting Started](/docs/creators/golem-workers/getting-started) explains how to start it). 
The documentation is auto-generated and available by default at [http://localhost:8000/docs](http://localhost:8000/docs). 

## Node Creation Options

When creating a node using the **Create Node** endpoint, you inherit base configuration building blocks were defined
when creating the cluster. These include:

- `budget_type`: This defines the budget type the node will use, as defined when creating the cluster. 
The budget type impacts how and how much you pay for the node.

- `node_networks`: This specifies which network the node should use from those defined at the time of cluster creation. 
You can also optionally specify a particular IP address for the node within this network.

- `node_type`: You can define the base configuration for the node by specifying one of the node types defined 
when the cluster was created. These node types could represent different resource configurations, such as CPU or GPU-heavy instances.

Once these high-level settings are in place, you can further customize the node 
through its **specific configuration**, described below.

## Specific Node Configuration

The `node_config` is where most of the customization takes place.
It includes several key components that allow you to fine-tune the node’s behavior and functionality.

### Market Configuration

The `market_config` section allows you to specify 
- how the node should be selected for renting from the Golem Network (CPU, GPU, memory, disk space, etc.)
- what image should the node run
- how the node should be able to access the internet

By setting up the `market_config`, you ensure that the node matches your specific needs before it's rented.

### Sidecars

**Sidecars** are services that run alongside the main node. These services can enhance the node’s functionality, 
especially in terms of network and communication. Currently, there are two notable sidecars:

- `golem_workers.sidecars.WebsocatPortTunnelSidecar`: This sidecar enables port forwarding, 
making ports from the node visible on the Golem-Workers server.
It’s useful for applications that require network communication with the node.

- `golem_workers.sidecars.SshPortTunnelSidecar`: Similar to the Websocat sidecar, 
this one uses SSH for port forwarding. It also supports reversed port forwarding, 
meaning that a port from the Golem-Workers server can be made visible on the rented node.
This might be useful for example for managing clusters from within the cluster itself, such as adding or removing nodes.

Both sidecars provide flexibility in how nodes interact with the Golem-Workers server and external systems.

### On Start Commands

The `on_start_commands` option allows you to execute shell commands on the node as soon as it starts.
These commands are highly customizable and can be used for various tasks such as initializing services or preparing the environment.

Available commands:
- `golem_workers.work.run_in_shell`: This is a general-purpose command for executing shell commands on the node.
It’s versatile and can be used for tasks like downloading files, setting up environments, or running services.
An example of its usage is in the [Stable Diffusion example](/docs/creators/golem-workers/sd-example), 
where this command is used to download and launch the Stable Diffusion model via Automatic1111.

- `golem_workers.work.prepare_and_run_ssh_server`: This command sets up the SSH environment on the node, 
configuring secure connections between the node and the Golem-Workers server.
It requires specific binaries and packages to be present in the node image, ie. `ssh-keygen`, `apt`, `service`, and `openssh-server`.


### On Stop Commands

Similar to start commands, `on_stop_commands` enables shell commands to be executed when the node is stopped.
These can be used to gracefully terminate services, clean up resources, or perform any required shutdown tasks.


