---
title: Ray CLI 
pageTitle: Ray CLI In-Depth Guide
description: Explore the nuances of running Ray command-line tools 
type: article 
---

# Ray CLI 

Ray exposes a command line interface to manage the cluster (and nodes).

This article explains the commands available, which are useful when working with Ray on Golem.

For more details check out the [Ray Cluster Management CLI](https://docs.ray.io/en/latest/cluster/cli.html) reference.

## Commands Overview

While `ray start` & `ray stop` are for manual node setup there are also many cluster commands
- `ray up golem-cluster.yaml` starts up a cluster specified by the yaml
- `ray down golem-cluster.yaml` terminates the cluster
- `ray submit golem-cluster.yaml ray-app.py` executes an app on the cluster
- `ray exec golem-cluster.yaml 'ray status'` shows cluster status
- `ray exec golem-cluster.yaml 'shell-command-line'` executes shell commands on the head node
- `ray attach golem-cluster.yaml` gives you shell access to the head node
- `ray dashboard golem-cluster.yaml` tunnels the Ray dashboard to 
