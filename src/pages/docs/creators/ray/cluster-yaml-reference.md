---
description: details of every configuration option of Ray on Golem cluster yaml
title: Ray on Golem cluster yaml reference 
type: article 
---

# Ray on Golem cluster yaml reference

This article explains the options available in the configuration yaml file when setting up a Ray on Golem cluster.

## Example Ray on Golem cluster configuration

The basic `golem-cluster.yaml` is [available on github](https://github.com/golemfactory/golem-ray/blob/main/golem-cluster.yaml).

It allows you to start a cluster on our testnet with one head node and three worker nodes. It will scale up to 10 nodes when the need arises. Check out the [setup tutorial](/docs/creators/ray/setup-tutorial) for more detailed guidance.

The details of all the properties that are generally supported by Ray, can be found on [Ray docs site](https://docs.ray.io/en/latest/cluster/vms/references/ray-cluster-configuration.html).

Ray on Golem strives to support all configuration possibilities available for general Ray cluster managers. 
When you find a property we don't support yet, please [let us know (on `#Ray on Golem` discord channel)](https://chat.golem.network/).

## Most important properties

Let's have a look at most important properties (including the ones specific for Ray on Golem clusters)

### Max workers

The "Max workers" setting defines the size of the cluster that the Ray autoscaler may scale up to, including the head node.
There is a limited number of providers on the testnet, so when you need more workers you should consider moving to the mainnet.


```yaml
# The maximum number of workers the cluster will have at any given time
max_workers: 10
```

### Min workers

Minimum number of workers can be specified per node type, and influences how many such nodes are started with `ray up`.
Additionally, this is the lowest number of nodes that Ray will automatically scale down to.

```yaml
  ray.worker.default:
     min_workers: 3
```


### Idle timeout 

Idle timeout controls how fast Ray decommisions the nodes that are not busy. It will always leave at least `min_workers` workers, though.

```yaml
# The number of minutes that need to pass before an idle worker node is removed by the Autoscaler
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

The whole "provider" section describes quite a lot of Golem node provider internals. 
Some of these properties interact with how Ray on Golem works in general, so be careful with those that you're unfamiliar with as changing them may render your cluster unusable.

#### Webserver port

Ray on Golem uses `golem-ray` server to control Golem nodes, payments etc. This property is used when the server is starting and when the autoscaler from the Ray head node wants to add or remove nodes to / from your cluster.

#### Network

Ray on Golem uses the GLM token on the Ethereum blockchain to pay for the hosting of ray nodes.
Currently, while we support only Golem testnet, the payments use the `goerli` test blockchain.
When you move to mainnet, the `network` property needs to be changed to `polygon`

```yaml
# Blockchain used for payments. 
# Goerli means running free nodes on testnet, 
# Polygon is for mainnet operations.
network: "goerli"
```

#### Image tag and image hash

Image tag and image hash properties refer to the virtual machine images that Golem provider nodes will start to host ray software.

Ray on Golem automatically detects your local configuration and starts images with matching Python and Ray versions.

However, you can use these properties to override the detection and request a specific image. Supported tags are available on [Golem registry](https://registry.golem.network/explore/golem/ray-on-golem).
