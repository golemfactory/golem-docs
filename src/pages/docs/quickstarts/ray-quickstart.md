---
description: quick and easy, copy and run instructions on launching and decommissioning the Ray on Golem cluster
title: Ray on Golem QuickStart
type: quickstart 
---

# QuickStart

This quickstart shows you how to set Ray and Ray on Golem up, start your cluster, test it, and then stop it.
It limits the explanation to the bare minimum - if you are looking for more details jump to [setup tutorial](/docs/creators/ray/setup-tutorial)


## Install software

{% partial file="ray/recommend-venv.md" /%}

The first step is installing Ray on Golem. It will install Ray as a dependency.

```bash
# install ray-on-golem and ray (recommended within a clean virtual environment)
pip3 install -U ray-on-golem
```

For now, you also need to download and install Golem node software representing you in the Golem network.

```bash
# install Yagna - golem network daemon
curl -sSf https://join.golem.network/as-requestor | bash -
```

{% partial file="ray/websocat-requirement.md" /%}

## Set the cluster up

With the packages in place, you can download our sample golem cluster configuration yaml, and feed it to `ray up` to start up the cluster.
It will give you a cluster of one node (which will expand when you feed it with work) on the Golem test network (free, but not very powerful)


```bash
# Download the golem-cluster.yaml
wget https://github.com/golemfactory/ray-on-golem/raw/main/golem-cluster.yaml

# In this command:
# * yagna starts in the background (if not running)
# * ray-on-golem cluster manager starts in the background
# * ray head node is started on a golem provider
ray up golem-cluster.yaml --yes

```

## Execute a Ray application

{% partial file="ray/run-simple-task.md" /%}

## Stop the cluster

Finally, stop your cluster to free the Golem network providers and to avoid spending more than needed (the testnet is free, but good practice is a good practice).

```bash
# Tear down the cluster.
ray down golem-cluster.yaml --yes
```

## Summary

By completing the above quickstart you have successfully:
- installed ray and ray-on-golem packages
- downloaded the example golem cluster yaml and the example ray application
- started up the Ray on Golem cluster
- run the app on your local computer and then on the cluster
- stopped the cluster

Congratulations!


{% docnavigation title="See also" %}
- [Ray on Golem docs](/docs/creators/ray)
{% /docnavigation %}
