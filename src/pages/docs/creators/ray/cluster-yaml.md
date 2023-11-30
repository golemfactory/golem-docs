---
title: Ray on Golem cluster yaml 
pageTitle: Ray on Golem Cluster YAML Configuration - In-Depth Guide
description: Explore the nuances of configuring Ray clusters on Golem Network, including worker nodes, idle timeout, and provider settings.
type: article 
---

# Ray on Golem cluster yaml 

Ray uses a configuration yaml file to define the characteristics of the cluster.
There are provider-specific pieces of information (node definitions, payment platforms, etc.) and cluster-wide ones (number of nodes, autoscaling parameters, cluster name, etc.).

This article explains the options available when setting up a Ray on Golem cluster.

For more details check out the [Ray Cluster YAML Configuration Options](https://docs.ray.io/en/latest/cluster/vms/references/ray-cluster-configuration.html) reference.

## Example Ray on Golem cluster configuration

The basic `golem-cluster.yaml` is [available on github](https://github.com/golemfactory/golem-ray/blob/main/golem-cluster.yaml).

It allows you to start a cluster on our testnet with one head node and one worker node. It will scale up to 10 nodes when the need arises. Check out the [setup tutorial](/docs/creators/ray/setup-tutorial) for more detailed guidance.

The details of all the properties that are generally supported by Ray, can be found on [Ray docs site](https://docs.ray.io/en/latest/cluster/vms/references/ray-cluster-configuration.html).

Ray on Golem strives to support all configuration possibilities available for general Ray cluster managers. 
When you find a property we don't support yet, please [let us know (on `#Ray on Golem` discord channel)](https://chat.golem.network/).

## Most important properties

Let's have a look at the most important properties (including the ones specific for Ray on Golem clusters)

### Max workers

The "Max workers" setting defines the size of the cluster that the Ray autoscaler may scale up to, including the head node.
There is a limited number of providers on the testnet, so when you need more workers you should consider moving to the mainnet.


```yaml
# The maximum number of workers the cluster will have at any given time
max_workers: 10
```

### Min workers

The minimum number of workers can be specified per node type, and influences how many such nodes are started with `ray up`.
Additionally, this is the lowest number of nodes that Ray will automatically scale down to.

```yaml
  ray.worker.default:
     min_workers: 3
```


### Idle timeout 

Idle timeout controls how fast Ray decommisions the nodes that are not busy. It will always leave at least `min_workers` workers, though.

```yaml
# The number of minutes that need to pass before an idle worker node 
# is removed by the Autoscaler
idle_timeout_minutes: 5
```

### Initialization commands

You can use initialization commands to properly set up your nodes - e.g. install all the pip dependencies.

```yaml
# List of commands that will be run to initialize the nodes (before `setup_commands`)
#initialization_commands: [
#   "pip install endplay", 
#]
initialization_commands: []
```

### Provider section

The whole "provider" section describes various Golem node provider internal parameters. 

Some of these properties influence how Ray on Golem works in general, but we still encourage you to experiment with different settings. 
The worst that may happen is that you'll need to revert to a previous working setup and start your cluster anew. 

We're eager to hear your feedback on the clarity, usability, or interesting usage of those parameters (on the [`#Ray on Golem` discord channel](https://chat.golem.network/))

#### Webserver port

Ray on Golem uses `ray-on-golem` server to control Golem nodes, payments, etc. This property is used when the server is starting and when the autoscaler from the Ray head node wants to add or remove nodes to / from your cluster.

#### Network

Ray on Golem uses the GLM token on the Ethereum blockchain to pay for the hosting of ray nodes.
Currently, while we support only the Golem testnet, the payments use the `goerli` test blockchain.
When you move to the mainnet, the `payment_network` property needs to be changed to `polygon`

```yaml
# Blockchain used for payments. 
# "goerli" means running free nodes on testnet, 
# "polygon" is for mainnet operations.
payment_network: "goerli"
```

#### Image tag and image hash

Image tag and image hash properties refer to the virtual machine images that Golem provider nodes will start to host the Ray on Golem software.

By default, Ray on Golem uses prepackaged VM images including [relatively fresh](/docs/creators/ray/supported-versions-and-other-limitations#python-and-ray-image-base) Python and Ray versions.

However, you can use these properties to override the detection and request a specific image. 
Supported tags are available on [Golem registry](https://registry.golem.network/explore/golem/ray-on-golem).

Please [let us know on the `#Ray on Golem` discord channel)](https://chat.golem.network/) if you need an image with any specific content. We will be happy to help you.

## Budget control

### Spending hard limit

Within `provider.parameters` section there is the `total_budget` property.
It defines the maximum amount of GLMs paid for the whole cluster operations - from `ray up` until `ray down`.

At the moment, when the spending reaches the limit, Ray on Golem will stop spending, effectively terminating the cluster nodes.

```yaml
provider:
  parameters:

    # Maximum amount of GLMs that's going to be spent for the whole cluster
    total_budget: 5
```

### Avoiding too-expensive providers

You can use `provider.parameters.node_config.per_cpu_budget` section to define the limits on providers' prices.
Ray on Golem won't work with providers who exceed any of the following price settings.

#### Maximum provider prices

Golem providers charge in three ways. They charge:
- the initial price at the start of image deployment - we divide it by the number of CPUs so that the price is representative of the actual computing power that you pay for,
- CPU usage price for the total time (in hours) their CPUs spent computing,
- duration price for the total time (in hours) they spent up and running - again, we divide it by the number of CPUs to get a fair comparison,

So for example, if you rent a 3-CPU node for half an hour and the average load is 0.8 per CPU you will be charged 
`3 * initial_price_per_cpu + 3 * duration_price_per_cpu * 0.5 + 3 * cpu_usage_price * 0.8 * 0.5`.

The following properties allow you to reject providers with any of the prices exceeding your limits.
- `max_initial_price`
- `max_cpu_hour_price`
- `max_duration_hour_price`

```yaml
provider:
  parameters:
    node_config:
      per_cpu_budget:

        # Amount of GLMs for worker initiation 
        # causing Golem provider offer to be rejected
        max_initial_price: 0.5

        # Amount of GLMs for CPU utilization per hour 
        # causing Golem provider offer to be rejected
        max_cpu_hour_price: 0.5 

        # Amount of GLMs for each CPU for each hour that the worker runs 
        # causing Golem provider offer to be rejected
        max_duration_hour_price: 0.5
```

#### Choosing the cheapest providers - maximum expected usage cost

To work with the cheapest provider, we combine all [three prices](#maximum-provider-prices) into one value.

Please estimate the approximate time your application will require the cluster to operate, and the expected CPU load during that time. 
Then, set the respective `duration_hours` and `cpu_load` properties to allow Ray on Golem to compute each provider's expected usage cost.

All providers' offers are internally sorted by estimated cost, allowing Ray on Golem to negotiate and sign agreements with the cheapest nodes first.

You may also use `max_cost` to unconditionally cut off providers with too high an expected usage cost (in GLMs).

```yaml
provider:
  parameters:
    node_config:
      per_cpu_budget:
        expected_usage:

          # Estimated expected load and duration per CPU for worker 
          # allowing the picking of the least expensive Golem providers' offers first.
          # If not provided, offers will be picked at random.
          # Both values need to be defined or undefined together.
          cpu_load: 0.8
          duration_hours: 0.5

          # Amount of GLMs for expected usage 
          # causing Golem provider offer to be rejected
          # Requires both `cpu_load` and `duration_hours`
          max_cost: 1.5
```
