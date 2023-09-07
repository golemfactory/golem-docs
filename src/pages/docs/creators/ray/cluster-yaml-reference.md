---
description: details of every configuration option of Ray on Golem cluster yaml
title: Ray on Golem cluster yaml reference 
type: article 
---

# Ray on Golem cluster yaml reference

This article explains Ray on Golem cluster yaml options.

## Example Ray on Golem cluster configuration

The basic `golem-cluter.yaml` is [available on github](https://github.com/golemfactory/golem-ray/blob/main/golem-cluster.yaml).

It allows you to start a cluster on our testnet with one head node and three worker nodes. It will scale up to 10 nodes when the need arises. Check out the [setup tutorial](/docs/creators/ray/setup-tutorial) for more detailed guidance.

All the details of general Ray supported properties can be found on [Ray docs site](https://docs.ray.io/en/latest/cluster/vms/references/ray-cluster-configuration.html).


Ray on Golem strives to support all configuration possibilities available for general Ray cluster managers. 
When you find a property we are not supporting yet, please [let us know](https://discord.com/channels/684703559954333727/1136986696907505775).

## Interesting properties

Let's have a look at more interesting properties (including the ones specific for Ray on Golem clusters)

### Max workers

Max workers define the size of the cluster that the Ray autoscaler might scale up to. This includes the head node.
Consider using more workers when you run your cluster on the mainnet.


```yaml
# The maximum number of workers the cluster will have at any given time
max_workers: 10
```

### Min workers

Minimum number of workers can be specified per node type, and decide how many nodes are started with `ray up`.
Also when Ray is scaling the cluster down, it will stop when there is the minimum number of nodes running.

```yaml
  ray.worker.default:
     min_workers: 3
```


### Idle timeout 

Idle timeout controls how fast Ray decommisions nodes that are not busy. It will always leave `min_workers` workers though.

```yaml
# The number of minutes that need to pass before an idle worker node is removed by the Autoscaler
idle_timeout_minutes: 5
```

### Initialization commands

You can use initialization commands to initialize your nodes - install all dependencies with pip.

```yaml
# List of commands that will be run to initialize the nodes (before `setup_commands`)
#initialization_commands: [
#   "pip install endplay", 
#]
initialization_commands: []
```

### Provider section

The whole provider section describes lots of Golem node provider internals.
You can change some of the properties.

#### Webserver port

Ray on Golem uses `golem-ray` server to control Golem nodes, payments etc. This property is used when the server is starting and when the autoscaler from the Ray head node wants to add or remove nodes to / from your cluster.

#### Network

Ray on Golem uses blockchain technology to pay for ray nodes hosting.
Currently, while we support only Golem testnet, the payments use Goerli test blockchain.
When you move to mainnet `network` property needs to be changed to `polygon`

```yaml
# Blockchain used for payments. 
# Goerli means running free nodes on testnet, 
# Polygon is for mainnet operations.
network: "goerli"
```

#### Image tag and image hash

Image tag and image hash properties describe images Golem nodes will start to host ray software.

Ray on Golem autodetects your local configuration and starts images with matching Python and Ray versions

You can however use the properties to override the detection and order a specific image. Supported tags are available on [Golem registry](https://registry.golem.network/explore/golem/ray-on-golem).


