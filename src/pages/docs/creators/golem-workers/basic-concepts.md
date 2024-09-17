---
title: Golem-Workers Basic Concepts
pageTitle: Golem-Workers Basic Concepts 
description: Explanation of Golem-Workers' basic concepts 

type: Article
---

# Golem-Workers Basic Concepts

The following guide will walk you through the fundamental concepts of using Golem-Workers, 
explaining how to manage clusters and nodes and interact with the Golem Network.

### 1. Explore the API Documentation

To start, access the built-in API documentation provided by the Golem-Workers server 
([Getting Started](/docs/creators/golem-workers/getting-started) explains how to start it). 
The documentation is auto-generated and available by default at [http://localhost:8000/docs](http://localhost:8000/docs). 

This interface is a useful resource for understanding:
- **Schemas**: Detailed structure of the API requests and responses.
- **Example requests**: Predefined request examples to help you quickly test and implement.

By familiarizing yourself with these docs, you'll have a better understanding of the available endpoints and how to interact with them.

The spec also allows you to try the endpoints out - you can modify the examples and execute them on your Golem-Workers server.

## 2. Managing Clusters

Golem-Workers organizes computational resources into **clusters**. A cluster is a group of nodes that share the same virtual network, 
allowing them to interact with each other as if they were on the same local network. 
This is ideal for tasks that require distributed computing.

To manage clusters, Golem-Workers provides three API endpoints:

- **Create Cluster** (`/create-cluster`): Creates a new cluster identified by a unique name. You can customize 
the configuration, specify the network characteristics, and define the common attributes of your nodes.
  
- **Get Cluster** (`/get-cluster`): Retrieves information about an existing cluster, 
including the nodes within the cluster and their status (see [node statuses section](#node-statuses)).

- **Delete Cluster** (`/delete-cluster`): Removes a cluster from the system, along with all its associated nodes.

To rent any resource with Golem-Workers you need to create a cluster.

### 3. Managing Nodes

Once a cluster is set up, individual nodes can be added or removed. Each node represents a virtual machine with CPUs and/or GPUs, 
running on the Golem Network. 
These nodes can run custom environments based on images of your choice.

Key endpoints for node management include:

- **Create Node** (`/create-node`): This is the most central and important endpoint, allowing you to provision a new node in 
the Golem Network. When calling this endpoint, you can specify parameters such as the computing resources required (CPU, GPU, etc.) 
and the software environment (image). Last, you can specify the commands to run on the node when it is started.

- **Get Node** (`/get-node`): Retrieves the status and details of a specific node within the cluster.

- **Delete Node** (`/delete-node`): Terminates a node and releases the computational resources back to the Golem Network.

Each node operates independently but can communicate with others within the same cluster. 
This flexibility allows you to scale and fine-tune the computing environment for your specific workload.

#### Node statuses

Whether you use `get-cluster` or `get-node` endpoint the most interesting node statuses are:

- `provisioning` means you have to wait a bit more for the negotiations with the available nodes to finish
- `starting` means the node is rented, the image is being deployed and the `on_start_commands` are being run
- `started` means the node is ready, the image is deployed, the commands `on_start_commands` have been run successfully

### 4. Exploring the Golem Market with Proposals

The Golem Network offers a decentralized marketplace where computing resources (ie machines with GPUs and CPUs) are available for rent. 
Before creating a node, you might want to survey the market to understand the available resources.

The **Get Proposals** (`/get-proposals`) endpoint is designed for this purpose. It allows you to query the Golem market and retrieve a 
list of available resources based on your criteria. For example, you can check:
- Available GPU models
- Pricing and resource specifications

Once you’ve gathered information on the available resources, you can instruct the `create-node` endpoint to rent a specific type of resource that fits your task requirements. This ensures that you're allocating the right resources for your computation tasks in the most efficient way.
