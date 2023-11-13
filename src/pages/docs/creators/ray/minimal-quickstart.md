---
description: quick and easy, copy and run instructions on launching and decommissioning the Ray on Golem cluster
title: Ray on Golem Quickstart
type: quickstart
---

# Quickstart

This quickstart shows you how to set Ray and Ray on Golem up, start your cluster, test it, and then stop it.
It limits the explanation to the bare minimum - if you are looking for more details jump to [setup tutorial](/docs/creators/ray/setup-tutorial)

## Super quickstart

Run the following to get a feeling of how Ray on Golem works. 
It will install all necessary packages, start a small, free cluster, run an example ray application, and tear down the cluster at the end. 
Below you will find step-by-step explanation of what is happening.

{% partial file="ray/recommend-venv.md" /%}

```bash
# Install ray-on-golem & ray (recommended within a clean virtual environment)
pip3 install -U ray-on-golem

# Download the golem-cluster.yaml
wget https://github.com/golemfactory/ray-on-golem/raw/main/golem-cluster.yaml

# In this command:
# * yagna (golem-node) starts in the background (if not running)
# * ray-on-golem cluster manager starts in the background
# * ray head node is started on a golem provider
ray up golem-cluster.yaml --yes

# Download the example Ray app
wget https://github.com/golemfactory/ray-on-golem/raw/main/examples/simple-task.py 

# Submit the app to be executed on your cluster
ray submit golem-cluster.yaml simple-task.py

# Tear down the cluster
ray down golem-cluster.yaml --yes

```

## Install software

{% partial file="ray/recommend-venv.md" /%}

The first step is installing Ray on Golem. It will install Ray as a dependency.

```bash
# install ray-on-golem & ray (recommended within a clean virtual environment)
pip3 install -U ray-on-golem
```

{% partial file="ray/installation-alert.md" /%}

## Set the cluster up

With the packages in place, you can download our sample golem cluster configuration yaml, and use it with `ray up` to start up the cluster.
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

{% partial file="ray/consult-troubleshooting.md" /%}

## Execute a Ray application

Download our example Ray app and execute it locally (a Ray instance will be created on your machine)

```bash
# Download the example Ray app
wget https://github.com/golemfactory/ray-on-golem/raw/main/examples/simple-task.py 

# Execute the app locally by starting a local ray instance on your computer
python3 simple-task.py
```

This particular script shows information about the cluster it is being run on 
and also visualizes the number of tasks run on different nodes (by default it executes 100 tasks).

Once you ensure the app works, you can feed it to your Ray on Golem cluster:

```bash
# Submit the app to be executed on your cluster
ray submit golem-cluster.yaml simple-task.py
```

You can see the information about the cluster both before and after running the computations.

Submit the script again, requesting more tasks to see how the autoscaler expands the cluster, as the work progresses (give it up to 5 mins):

```bash
# Submit the app with 400 tasks
ray submit golem-cluster.yaml simple-task.py -- --count 400 
```

The above shows the usual workflow with Ray apps.
- You develop them, while at the same time testing them, on your local machine.
- When you are ready to get more power - you send them to a Ray cluster **without changing a single line** of your application's code.

## Stop the cluster

Finally, stop your cluster to free the Golem network providers and to avoid spending more than needed (the testnet is free, but good practice is a good practice).

```bash
# Tear down the cluster.
ray down golem-cluster.yaml --yes
```

## Summary

By completing the above quickstart you have successfully:

- Installed ray and ray-on-golem packages
- Downloaded the example golem cluster yaml and the example ray application
- Started up the Ray on Golem cluster
- Run the app on your local computer and then on the cluster
- Stopped the cluster

Congratulations!

{% docnavigation title="See also" %}

- [Ray on Golem concept](/docs/creators/ray/concept)
- [Basic Ray tasks usage tutorial](/docs/creators/ray/basic-ray-tasks-usage-tutorial)
{% /docnavigation %}
