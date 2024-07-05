---
title: Ray on Golem CLI
pageTitle: Ray on Golem CLI In-Depth Guide
description: Explore the nuances of running Ray on Golem command-line tools
type: Article
---

# Ray on Golem CLI

Ray on Golem exposes a command line interface to help you manage the cluster.

This article explains the commands available, which are useful when working with Ray on Golem.

## Commands Overview

Ray on Golem supports the following commands

- `ray-on-golem start` launches `ray-on-golem`'s webserver and the `yagna` daemon to shorten the cluster spin-up time once you run `ray up` ([details](#ray-on-golem-start-stop)) later on
- `ray-on-golem stop` stops `ray-on-golem`'s webserver and the `yagna` daemon. Use it when you are done with using ray for a while ([details](#ray-on-golem-start-stop))
- `ray-on-golem status` gives you the basic information about running `ray-on-golem`'s webserver.
- `ray-on-golem reputation [block|unblock|list]` gives you control over which nodes not to choose for your cluster
- `ray-on-golem version` prints `ray-on-golem` package information. Please use it when reporting problems - it makes it easier for us to find and fix them.
- `ray-on-golem network-stats golem-cluster.yaml` scans the network and offers information about available providers ([details](#network-stats))
- `ray-on-golem webserver` starts the Golem requestor service, which acts as an interface between Ray and the Golem network, managing the provider nodes that constitute the Ray cluster. The command is invoked internally - either when you start it manually with `ray-on-golem start`, or automatically on `ray up`. In most cases, you don't need to use it explicitly on its own.

## ray-on-golem [start|stop]

Apart from Ray itself, Ray on Golem utilizes two additional services running on the user's computer:

- `yagna` daemon acts as a gateway to the Golem Network
- `ray-on-golem` webserver controls the Ray cluster and reacts to Ray autoscaler's commands (spin up new nodes or stop the nodes, which are no longer required)

When you execute `ray up`, Ray on Golem ensures the two services are running, starting them if necessary. Conversely though, `ray down` doesn't stop them.
The rationale is to allow them to run and keep gathering updates from Golem Network about available nodes, to speed up launching a new cluster on a subsequent `ray up`.

They are supposed to be light and normally we don't recommend stopping them.
However, you might want to do that, for example:

- if you've finished working with Ray on Golem and won't be using it for a while
- in case you wish to clear Ray on Golem's state and start afresh. Ideally, this shouldn't be necessary -
  if you often find such a restart helps, please let us know -
  probably something is wrong and we would love to fix it.

Because the process of gathering offers from Golem Network's market can take a couple of minutes,
you might wish to launch them even before you first run `ray up`.
That way, they'll have time to warm up and will already have more knowledge about the network
when you request a new cluster to start.

Two commands allow you to manage those two services independently from Ray itself:

- `ray-on-golem start` launches them and leaves them running in the background
- `ray-on-golem stop` terminates them and ensures graceful shutdown and proper cleanup.

## Smart provider selection

Read about the ideas behind selecting provider selection in the [mainnet article](/docs/ja/creators/ray/mainnet#smart-provider-selection).

Use the following `ray-on-golem` commands to manipulate the settings:

- `ray-on-golem reputation [block|unblock]` - add/remove a node to/from the blakclist
- `ray-on-golem reputation list` - outputs a table with current reputation scores and information about blacklisted nodes
- `ray-on-golem reputation update` - triggers additional providers' scoring update

## Network stats

The tool scans the network and gives you an overview of the availability of the providers.
It allows you to test the settings of your [cluster yaml](/docs/ja/creators/ray/cluster-yaml) file.

You can use it to verify and fine-tune different [budget control](/docs/ja/creators/ray/cluster-yaml#avoiding-too-expensive-providers) parameters,
both on [the testnet and the mainnet](/docs/ja/creators/ray/cluster-yaml#network).

### Example usage

```bash
ray-on-golem network-stats golem-cluster.yaml --duration 5
```

```
Gathering stats data for 5 minutes...
Gathering stats data done

Proposals count:
Initial: 48
Not blacklisted: 48
Passed Reject if per cpu expected cost exceeds `max_cost` = 1.5: 48
Passed Reject if start price exceeds `max_start_price = 0.5: 48
Passed Reject if cpu per hour price exceeds `max_cpu_per_hour` = 0.5: 48
Passed Reject if env per hour price exceeds `max_env_per_hour_price` = 0.5: 48
Negotiation initialized: 48
Negotiated successfully: 37

Negotiation errors:
Outbound rejected because: Everyone rule didn't match whitelist ; Audited-Payload rule requires manifest signature ; Partner rule requires node descriptor ; : 4
No capacity available. Reached Agreements limit: 1: 2
Failed to send proposal response! Request timed out: 1
Failed to send proposal response! 500: {"message":"Failed to send response for Proposal [***]. Error: Countering Proposal [***] GSB error: GSB failure: Net: error forwarding message: Connection timed out.."}: 1
```

### Duration

Golem Network is peer-to-peer, which means there is no central registry of providers offers. Therefore,
providers' proposals are not immediately available to a newly-connected requestor. They get re-broadcasted at a certain interval and accumulate over time.

Additionally, negotiating with individual providers also takes some time.

Use the `--duration` parameter to set how long you want your network scan to last. It allows time to gather and negotiate the incoming proposals

### Output

- `Initial` proposals found during the scan (there might be more than one proposal per provider)
- `Not blacklisted` - proposals coming from non-blacklisted providers (we blacklist providers with a history of misbehaving)
- `Passed Reject if per cpu expected cost exceeds` - proposals not exceeding your [`max_cost` setting](/docs/ja/creators/ray/cluster-yaml#choosing-the-cheapest-providers-maximum-expected-usage-cost)
- `Passed Reject if start price exceeds` - proposals not exceeding your [`max_start_price` setting](/docs/ja/creators/ray/cluster-yaml#maximum-provider-prices)
- `Passed Reject if cpu per hour price exceeds` - proposals not exceeding your [`max_cpu_per_hour_price` setting](/docs/ja/creators/ray/cluster-yaml#maximum-provider-prices)
- `Passed Reject if env per hour price exceeds` - proposals not exceeding your [`max_env_per_hour_price` setting](/docs/ja/creators/ray/cluster-yaml#maximum-provider-prices)
- `Negotiation initialized` - proposals passing all the above limitations
- `Negotiated successfully` - providers ready to deploy the Ray on Golem image

At the end of the output, you can see the reasons for failing negotiations.
The most interesting are the reasons around providers' outbound settings, but for now, we don't offer any actionable follow-up.

### Nodes availability

The scanning ends with the successful negotiations - the `Negotiated successfully` line shows you the potential size of your cluster.
Notice that the availability is dynamic - providers might be hired by someone else, more providers might become available, and more providers might get discovered while your cluster is alive.

The last thing is the image deployment. When starting the actual cluster (with `ray up`) the providers might also fail to start the Ray on Golem image. This might decrease the maximum size of your cluster too.
