---
description: quick and easy, copy and run instructions on launching and decommissioning the Ray on the Golem cluster
title: Ray on Golem QuickStart
type: quickstart 
---

# QuickStart

This quickstart shows you how to set Ray and Ray on Golem up, start your cluster, test it, and then stop it.
It limits the explanation to the bare minimum - if you are looking for more details jump to [setup tutorial](/docs/creators/ray/setup-tutorial)


## Install software

The first step is installing Ray on Golem (recommended within a clean virtual environment). It will install Ray as a dependency.

```bash
# install ray-on-golem & ray (recommended within a clean virtual environment)
pip3 install -U ray-on-golem
```

For now, you also need to download and install Golem node software representing you in the Golem network.

```bash
# install yagna - golem network daemon
curl -sSf https://join.golem.network/as-requestor | bash -
```

{% partial file="ray/websocat-requirement.md" /%}

## Set the cluster up

With the packages in place, you can download our sample golem cluster configuration yaml, and use it with `ray up` to start up the cluster.
It will give you a cluster of one node (which will expand when you feed it with work) on the Golem test network (free, but not very powerful)


```bash
# Download the golem-cluster.yaml
wget https://github.com/golemfactory/ray-on-golem/raw/main/golem-cluster.yaml

# In this command:
# * Yagna starts in the background (if not running)
# * ray-on-golem cluster manager starts in the background
# * ray head node is started on a golem provider
ray up golem-cluster.yaml --yes

```

## Execute a Ray application

Download our example Ray app and execute it locally (a Ray instance will be created on your machine)

```bash
# Download the example Ray app
wget https://github.com/golemfactory/ray-on-golem/raw/main/examples/simple-task.py

# Execute the app locally by starting a local ray instance on your computer
python3 simple-task.py
```

Now that you know that Ray is working, execute the app on the cluster. Observe how Ray on Golem cluster expands during the computation

```bash
# Run some ray-based code (that knows *nothing** about Golem) - this will either:
# A) Run only on one node (the head node), if the autoscaler decides there is no need for a worker node
# B) Or create worker node(s) on the Golem Network. Worker nodes will be later auto-terminated by the autoscaler)

# Submit the app to be executed on your cluster
ray submit golem-cluster.yaml simple-task.py 
```

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


