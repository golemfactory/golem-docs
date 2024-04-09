---
title: Ray on Golem cluster yaml
pageTitle: Ray on Golem Cluster YAML Configuration - In-Depth Guide
description: Explore the nuances of configuring Ray clusters on Golem Network, including worker nodes, idle timeout, and provider settings.
type: Article
---

# Ray on Golem cluster yaml

Ray uses a configuration yaml file to define the characteristics of the cluster.
There are provider-specific pieces of information (node definitions, payment platforms, etc.) and cluster-wide ones (number of nodes, autoscaling parameters, cluster name, etc.).

This article explains the options available when setting up a Ray on Golem cluster.

For more details check out the [Ray Cluster YAML Configuration Options](https://docs.ray.io/en/latest/cluster/vms/references/ray-cluster-configuration.html) reference.

## Example Ray on Golem cluster configuration

The basic `golem-cluster.yaml` is [available on github](https://github.com/golemfactory/ray-on-golem/blob/main/golem-cluster.yaml).

It allows you to start a cluster on our testnet with one head node and one worker node. It will scale up to 10 nodes when the need arises. Check out the [setup tutorial](/docs/creators/ray/setup-tutorial) for more detailed guidance.

The details of all the properties generally supported by Ray can be found on [Ray docs site](https://docs.ray.io/en/latest/cluster/vms/references/ray-cluster-configuration.html).

Ray on Golem strives to support all configuration possibilities available for general Ray cluster managers.
When you find a property we don't support yet, please [let us know (on `#Ray on Golem` discord channel)](https://chat.golem.network/).

Feel free to have a look at the [minimal](https://github.com/golemfactory/ray-on-golem/blob/main/golem-cluser.mini.yaml) and [full](https://github.com/golemfactory/ray-on-golem/blob/main/golem-cluser.full.yaml) yaml examples.
The minimal is stripped to the bare minimum, it shows only the properties that are required (we are striving to cut it even more in the future).
The full exemplifies *all* properties that can be changed.


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
Note that using `pip` requires its index URL to be present in [`outbound_urls`](#accessing-the-internet-outbound).

```yaml
# List of commands that will be run to initialize the nodes (before `setup_commands`)
#initialization_commands: [
#   "pip install endplay",
#]
initialization_commands: []
```

### File mounts

You can use file mounts to copy directories and files to the head node and the worker nodes.
The file mounts are synced during the nodes' initialization, so they are available 
when your application is executed.

The property accepts both absolute and relative paths, both locally and remotely.
Relative paths start in `/root/` on the providers, 
and in the directory where `ray up` is invoked on the local machine.
You can attach to your head node to examine its file system with `ray attach golem-cluster.yaml`.

Note, that transferring files to and from the head node can be done with 
[`ray rsync_up/down` commands](/docs/creators/ray/ray-cli).

```yaml
# The files or directories to copy to the head and worker nodes
# Remote workdir is /root/
file_mounts: {
  # <remote_path>: <local_path>
  # "/absolute/path/dir/": ".",
  # "./relative/path/dir/": ".",
  # "./relative/path/file.txt": "./file.txt"
}
```


### Provider section

The whole "provider" section describes various Golem node provider internal parameters.

Some of these properties influence how Ray on Golem works in general, but we still encourage you to experiment with different settings.
The worst that may happen is that you'll need to revert to a previous working setup and start your cluster anew.

We're eager to hear your feedback on the clarity, usability, or interesting usage of those parameters (on the [`#Ray on Golem` discord channel](https://chat.golem.network/))

#### Webserver port

Ray on Golem uses `ray-on-golem` server to control Golem nodes, payments, etc. This property is used when the server is starting and when the autoscaler from the Ray head node wants to add or remove nodes to/from your cluster.

#### Network

Ray on Golem uses the GLM token on the Ethereum blockchain to pay for the hosting of ray nodes.
Currently, while we support only the Golem testnet, the payments use the `holesky` test blockchain.
When you move to the mainnet, the `payment_network` property needs to be changed to `polygon`

```yaml
# Blockchain used for payments.
# "holesky" means running free nodes on testnet,
# "polygon" is for mainnet operations.
payment_network: 'holesky'
```

#### Image tag and image hash

Image tag and image hash properties refer to the virtual machine images 
that Golem provider nodes will start to host the Ray on Golem software.

By default, Ray on Golem uses prepackaged VM images including 
[relatively fresh](/docs/creators/ray/supported-versions-and-other-limitations#python-and-ray-image-base) 
Python and Ray versions.

However, you can use these properties to override the default and request a specific image.
Supported tags are available on 
[Golem registry](https://registry.golem.network/explore/golem/ray-on-golem). 
Make sure you use an image with the matching version with your `ray-on-golem` package.

More specifically, you might want to replace the vanilla Python image with one that supports 
Golem GPU providers.

Please [let us know on the `#Ray on Golem` discord channel)](https://chat.golem.network/) if you need an image with any specific content. We will be happy to help you.

#### Accessing the Internet (outbound)

The optional `outbound_urls` lists the addresses you want to access from the Ray on Golem cluster.
Check out the [accessing the internet](/docs/creators/ray/outbound) explanation 
and example to learn more.

Ray on Golem only accepts addresses prefixed with either the `http://` or `https://` scheme.

Our default cluster definition specifies `https://pypi.dev.golem.network` as a required 
outbound address which allows 
[downloading additional packages with pip](#initialization-commands). 
If you don't need to install any additional Python packages, you might want to remove that URL 
from `outbound_urls`.
It potentially allows more providers to participate in your cluster.

You can test the availability of providers supporting your outbound needs with the [network stats tool](/docs/creators/ray/ray-on-golem-cli#network-stats).

```yaml
# List of URLs that will be added to the Computation Manifest
# Requires protocol to be defined in all URLs
# If not provided demand will not use Computation Manifest
outbound_urls: ["https://pypi.dev.golem.network"]
```

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

You can use `provider.parameters.node_config.budget_control` section to define the limits on providers' prices.
Ray on Golem will reject providers exceeding the following price settings.

#### Maximum provider prices

Golem providers charge in three ways. They charge:
- start price at the beginning of image deployment,
- CPU per hour price for the total time their CPUs spent computing,
- environment per hour price for the total time they spent up and running,

So for example, if you rent a 3-CPU node for half an hour (0.5) and the average load is 0.8 per CPU you will be charged 
`start_price +  (env_per_hour_price * 0.5) + (3 * cpu_per_hour_price * 0.8 * 0.5)`.

The following properties allow you to reject providers with any of the prices exceeding your limits.
- `max_start_price`
- `max_cpu_per_hour_price`
- `max_env_per_hour_price`

Have a look at the list of [online providers](https://stats.golem.network/network/providers/online) to get a feeling of the prices on the market.

```yaml
provider:
  parameters:
    node_config:
      budget_control:

        # Amount of GLMs for worker starting 
        # causing Golem provider offer to be rejected
        max_start_price: 0.5

        # Amount of GLMs for CPU utilization per hour
        # causing Golem provider offer to be rejected
        max_cpu_per_hour_price: 0.5 

        # Amount of GLMs for each hour that the worker runs 
        # causing Golem provider offer to be rejected
        max_env_per_hour_price: 0.5
```

#### Choosing the cheapest providers - maximum expected usage cost (per CPU)

To work with the cheapest provider, we combine all [three prices](#maximum-provider-prices) into one value.

Please estimate the approximate time your application will require the cluster to operate, and the expected CPU load during that time.
Then, set the respective `duration_hours` and `cpu_load` properties to allow Ray on Golem to compute each provider's expected usage cost.

All providers' offers are internally sorted by estimated cost (per CPU), allowing Ray on Golem to negotiate and sign agreements with the cheapest nodes first.

You may also use `max_cost` to unconditionally cut off providers with too high an expected usage per CPU cost (in GLMs).

```yaml
provider:
  parameters:
    node_config:
      budget_control:
        per_cpu_expected_usage:

          # Estimated expected load and duration for worker 
          # allowing the picking of the least expensive Golem providers' offers first (per CPU).
          # If not provided, offers will be picked at random.
          # Both values need to be defined or undefined together.
          cpu_load: 0.8
          duration_hours: 0.5

          # Amount of GLMs for expected usage per CPU 
          # causing Golem provider offer to be rejected
          # Requires both `cpu_load` and `duration_hours`
          max_cost: 1.5
```
