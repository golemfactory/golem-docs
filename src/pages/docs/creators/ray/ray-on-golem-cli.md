---
title: Ray on Golem CLI 
pageTitle: Ray on Golem CLI In-Depth Guide
description: Explore the nuances of running Ray on Golem command-line tools 
type: article 
---

# Ray on Golem CLI 

Ray on Golem exposes a command line interface to help you manage the cluster.

This article explains the commands available, which are useful when working with Ray on Golem.

## Commands Overview

Ray on Golem supports the followig commands
- `ray-on-golem network-stats golem-cluster.yaml` scans the network and offers information about available providers ([details](#network-stats))
- `ray-on-golem webserver` starts Golem requestor service controlling the providers used by the cluster

## Network stats

The tool scans the network and gives you overview of the availability of the providers.
It allows you to test the settings of your [cluster yaml](/docs/creators/ray/cluster-yaml) file. 

You can use it to test different [budget control](/docs/creators/ray/cluster-yaml#avoiding-too-expensive-providers) settings, both on [the testnet and the mainnet](/docs/creators/ray/cluster-yaml#network).

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
Passed Reject if max_average_usage_cost exceeds 1.5: 48
Passed Reject if price_initial exceeds 0.5: 48
Passed Reject if price_cpu_sec exceeds 0.0005: 48
Passed Reject if price_duration_sec exceeds 0.0005: 48
Negotiation initialized: 48 
Negotiated successfully: 37

Negotiation errors:
Outbound rejected because: Everyone rule didn't match whitelist ; Audited-Payload rule requires manifest signature ; Partner rule requires node descriptor ; : 4
No capacity available. Reached Agreements limit: 1: 2
Failed to send proposal response! Request timed out: 1
Failed to send proposal response! 500: {"message":"Failed to send response for Proposal [***]. Error: Countering Proposal [***] GSB error: GSB failure: Net: error forwarding message: Connection timed out.."}: 1
```

### Duration

Golem Network is peer-to-peer, which means that providers' proposals are not always available at first. They get broadcasted from time to time.

Negotiating with a provider also takes up some time.

Use `--duration` parameter to set how long you want to be scanning the network. It gives time for gathering proposals and negotiating them

### Output

- `Initial` proposals found during the scan (there might be more than one proposal per provider)
- `Not blacklisted` - proposals comming from non-blacklisted providers (we blacklist providers with a history of misbehaving)
- `Passed Reject if max_expected_usage_cost exceeds` - proposals not exceeding your [`max_expected_usage_cost` setting](/docs/creators/ray/cluster-yaml#choosing-the-cheapest-providers-maximum-average-usage-cost)
- `Passed Reject if price_initial exceeds` - proposals not exceeding your [`price_initial` setting](/docs/creators/ray/cluster-yaml#maximum-provider-prices)
- `Passed Reject if price_cpu_sec exceeds` - proposals not exceeding your [`price_cpu_sec` setting](/docs/creators/ray/cluster-yaml#maximum-provider-prices)
- `Passed Reject if price_duration_sec exceeds` - proposals not exceeding your [`price_duration_sec` setting](/docs/creators/ray/cluster-yaml#maximum-provider-prices)
- `Negotiation initialized` - proposals passing all the above limitations
- `Negotiated successfully` - providers ready to deploy Ray on Golem image

At the end of the output you can see the reasons of failing negotiations. 
The most interesting are the reasons around providers' outbound settings, but for now we don't offer any actionable follow up.

### Nodes availability

The scanning ends with the successful negotiations - the `Negotiated successfully` line shows you the potential size of your cluster.
Notice that the availability is dynamic - providers might be hired by someone else, more providers might become available, and also more providers might get discovered while your cluster is alive.

The last thing is the image deployment. When starting the actual cluster (with `ray up`) the providers might also fail to start Ray on Golem image. This might decrease the maximum size of your cluster too.
