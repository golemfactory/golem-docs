---
title: Golem-Workers Hello Service Usage Example
pageTitle: Golem-Workers Hello Service Usage Example
description: Step-by-step instructions on how to run example Hello Service with Golem-Workers

type: Article
---

# Golem-Workers Hello Service Example

This example demonstrates how to run a simple "Hello" service using Golem Workers. 
Unlike the **Stable Diffusion** example, this service does not require a GPU and can be run for free on the **testnet**. 
It is designed as a basic introduction for new users, with more advanced examples like 
the [Stable Diffusion tutorial](/docs/creators/golem-workers/sd-example) available for further exploration.

## 1. Create a Cluster

To start, create a cluster with any name you choose (`cluster_id`). For this example, we'll use `example` as the `cluster_id`.

```bash
curl --location 'http://localhost:8000/create-cluster' --header 'Content-Type: application/json' --data '{
  "cluster_id": "example",
  "budget_types": {
    "default": {
      "budget": {
        "golem_workers.budgets.AveragePerCpuUsageLinearModelBudget": {
          "average_cpu_load": 1,
          "average_duration_hours": 0.5,
          "average_max_cost": 1.5
        }
      },
      "scope": "cluster"
    }
  },
  "network_types": {
    "default": {
      "ip": "192.168.0.1/16"
    }
  },
  "node_types": {
    "default": {
      "market_config": {
        "filters": [
          {
            "golem_reputation.ProviderBlacklistPlugin": {
              "payment_network": "holesky"
            }
          }
        ],
        "sorters": [
          {
            "golem_reputation.ReputationScorer": {
              "payment_network": "holesky"
            }
          }
        ]
      }
    }
  }
}'
```

### `create-cluster` JSON explained

- **Budget**: We set up a budget using `golem_workers.budgets.AveragePerCpuUsageLinearModelBudget` to limit costs.
In this example, we specify that the node should not cost more than **1.5 tGLM**,
assuming it runs for **0.5 hours** with **1 CPU** in use.

- **Network**: The network configuration sets up an IP range for the cluster nodes.

## 2. Create a Node

Next, create a node using the **Hello Service** image from the Golem Registry. 
This service listens on port **80** and simply returns "Hello" when accessed.

```bash
curl --location 'http://localhost:8000/create-node' --header 'Content-Type: application/json' --data '{
  "cluster_id": "example",
  "node_networks": {
    "default": {}
  },
  "node_config": {
    "market_config": {
      "demand": {
        "payloads": [
          {
            "golem_workers.payloads.ClusterNodePayload": {
              "image_tag": "scalepointai/echo-test:2"
            }
          }
        ]
      }
    },
    "on_start_commands": [
      {
        "golem_workers.work.deploy_and_start_activity": {
          "deploy_timeout_minutes": 60
        }
      },
      {
        "golem_workers.work.run_in_shell": [
          [
            "nginx"
          ]
        ]
      }
    ],
    "sidecars": [
      {
        "golem_workers.sidecars.WebsocatPortTunnelSidecar": {
          "network_name": "default",
          "local_port": "8080",
          "remote_port": "80"
        }
      }
    ]
  }
}'
```

### `create-node` JSON explained

- **Image**: The node runs the **Hello Service** image `scalepointai/echo-test:2`,
which is a simple NGINX-based service that returns "Hello" on port **80**.
- **Commands**: We deploy the node and start the service using NGINX.
- **Port Forwarding**: We forward port **80** on the node to **localhost:8080** on your machine,
allowing you to access the service locally.

## 4. Access the Hello Service

Once the node is **started**, open your browser and navigate to [http://localhost:8080](http://localhost:8080).
You should see the message **Hello** displayed.

## 5. Stop the Cluster

After you're done, you should shut down the cluster using the following command:

```bash
curl --location 'http://localhost:8000/delete-cluster' --header 'Content-Type: application/json' --data '{
  "cluster_id": "example"
}'
```

---

For more advanced example of deploying GPU-based nodes to run **Stable Diffusion**, 
check out [this article](/docs/creators/golem-workers/sd-example).