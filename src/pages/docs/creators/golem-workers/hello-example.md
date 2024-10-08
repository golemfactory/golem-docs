---
title: Golem-Workers Hello Service Usage Example
pageTitle: Golem-Workers Hello Service Usage Example
description: Step-by-step instructions on how to run example Hello Service with Golem-Workers

type: Example 
---

# Golem-Workers Hello Service Example

This example demonstrates how to run a simple "Hello" service using Golem-Workers. 
Unlike the **Stable Diffusion** example, this service does not require a GPU and can be run for free on the **testnet**. 
It is designed as a basic introduction for new users, with more advanced examples like 
the [Stable Diffusion tutorial](/docs/creators/golem-workers/sd-example) available for further exploration.

## Prerequisites

We will be using **`curl`** (for Windows users consider PowerShell command `Invoke-WebRequest` instead) 
to interact with the Golem-Workers API, which runs on **localhost:8000** 
(see [Getting started](/docs/creators/golem-workers/getting-started) if it is not).
All API requests will use **JSON data** to configure and manage the Golem-Workers service.

The JSON files used in this article can be found in the repository under the directory **`examples/hello-example`**. 
Make sure you run the `curl` commands from within this repository to ensure the paths to the JSON files are correct.

Feel free to experiment and modify the JSON files if you’d like to adjust configurations or explore different setups.

## 1. Create a Cluster

To start, create a cluster with any name you choose (`cluster_id`). For this example, we'll use `example` as the `cluster_id`.

```bash
curl --location 'http://localhost:8000/create-cluster' \
--header 'Content-Type: application/json' \
--data @create-cluster.json 
```

This is the json file you have just used (also available on 
[GitHub](https://github.com/golemfactory/golem-workers/raw/main/examples/hello-example/create-cluster.json)):
{% codefromgithub url="https://github.com/golemfactory/golem-workers/raw/main/examples/hello-example/create-cluster.json" language="json" %}

{% /codefromgithub %}


### `create-cluster` JSON explained

- **Budget**: We set up a budget using `golem_workers.budgets.AveragePerCpuUsageLinearModelBudget` to limit costs.
In this example, we specify that the node should not cost more than **1.5 tGLM**,
assuming it runs for **0.5 hours** with **1 CPU** in use.

- **Network**: The network configuration sets up an IP range for the cluster nodes.

## 2. Create a Node

Next, create a node using the **Hello Service** image from the Golem Registry. 
This service listens on port **80** and simply returns "Hello" when accessed.

```bash
curl --location 'http://localhost:8000/create-node' \
--header 'Content-Type: application/json' \
--data @create-node.json
```

This is the json file you have just used (also available on 
[GitHub](https://github.com/golemfactory/golem-workers/raw/main/examples/hello-example/create-node.json)):
{% codefromgithub url="https://github.com/golemfactory/golem-workers/raw/main/examples/hello-example/create-node.json" language="json" %}

{% /codefromgithub %}

### `create-node` JSON explained

- **Image**: The node runs the **Hello Service** image `modelserve/echo-test:2`,
which is a simple NGINX-based service that returns "Hello" on port **80**.
- **Commands**: We deploy the node and start the service using NGINX.
- **Port Forwarding**: We forward port **80** on the node to **localhost:8080** on your machine,
allowing you to access the service locally.

## 3. Get the cluster's status

Next, you should wait until your node is up.
Check the cluster and node state with a call to `get-cluster`:

```bash
curl --location 'http://localhost:8000/get-cluster' \
--header 'Content-Type: application/json' \
--data @get-cluster.json
```

This is the json file you have just used (also available on 
[GitHub](https://github.com/golemfactory/golem-workers/raw/main/examples/hello-example/get-cluster.json)):
{% codefromgithub url="https://github.com/golemfactory/golem-workers/raw/main/examples/hello-example/get-cluster.json" language="json" %}

{% /codefromgithub %}

## 4. Access the Hello Service

Once the node is **started**, open your browser and navigate to [http://localhost:8080](http://localhost:8080).
You should see the message **Hello** displayed.

## 5. Stop the Cluster

After you're done, you should shut down the cluster using the following command:

```bash
curl --location 'http://localhost:8000/delete-cluster' \
--header 'Content-Type: application/json' \
--data @delete-cluster.json
```

This is the json file you have just used (also available on 
[GitHub](https://github.com/golemfactory/golem-workers/raw/main/examples/hello-example/delete-cluster.json)):
{% codefromgithub url="https://github.com/golemfactory/golem-workers/raw/main/examples/hello-example/delete-cluster.json" language="json" %}

{% /codefromgithub %}

---

For more advanced example of deploying GPU-based nodes to run **Stable Diffusion**, 
check out [this article](/docs/creators/golem-workers/sd-example).
