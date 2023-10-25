---
description: a step-by-step explanation of the quickstart instructions
title: Ray on Golem setup tutorial
type: guide 
---

# Ray on Golem setup tutorial 

This tutorial explains all the steps needed to start, test, and stop a Ray on Golem cluster. 
If you have already proceeded through our [Quickstart](/docs/creators/ray/quickstart), you'll find this tutorial familiar. 
The point is to go through the same actions but now, provide you with more details on each one.

To start a Ray cluster on Golem, you will use the Ray cluster launcher with the Golem Network client & Ray on Golem cluster manager.

## Install Ray cluster launcher & Ray on Golem cluster manager

{% partial file="ray/recommend-venv.md" /%}

The Ray cluster launcher is part of the Ray CLI. Use the CLI to start and stop a Ray cluster using commands such as `ray up` and `ray down`. 
You can use pip to install the Ray CLI with cluster launcher support.

You need to download the Golem cluster manager, which enables Ray to utilize the Golem network nodes.

It will install the default ray package as a dependency, but if you want more Ray-specific details follow [the Ray installation documentation](https://docs.ray.io/en/latest/ray-overview/installation.html#installation).

```bash
# install ray-on-golem and ray (recommended within a clean virtual environment)
pip3 install -U ray-on-golem
```

As a prerequisite, it also installs yagna - Golem daemon used to schedule work on the Golem Network.

## Start Ray with the Ray cluster launcher

Once the packages are installed, you can proceed with launching your cluster.

All you need is a cluster config file, you can download an example one from our repository.

The command to start the cluster is `ray up`:

```bash
# Download the example golem-cluster.yaml
wget https://github.com/golemfactory/ray-on-golem/raw/main/golem-cluster.yaml

# In this command:
# * yagna starts in the background (if not running)
# * ray-on-golem cluster manager starts in the background
# * ray head node is started on a golem provider
ray up golem-cluster.yaml --yes

```

{% partial file="ray/example-cluster-testnet-and-cap.md" /%}

You can now verify that your Ray on Golem cluster works, by running the following command on your local machine. 
It will connect to the head node and execute the `ray status` command which will print cluster information.

```bash
# Check if Ray on Golem cluster is running 
ray exec golem-cluster.yaml 'ray status'

```

The `ray up` succeeds when the head node is running. The remaining 2 nodes should be launching, but don't have to be fully operational.

Congrats, you have started a Ray on Golem cluster!

{% partial file="ray/consult-troubleshooting.md" /%}

## Test the cluster with example app

You are now ready to run some ray computations. 

We have provided a test application that you can use to check if your brand-new cluster works properly.

At first, it is recommended to run the app locally (without connecting to the cluster)

```bash
# Download the example Ray app
wget https://github.com/golemfactory/ray-on-golem/raw/main/examples/simple-task.py 

# Execute the app locally by starting a local ray instance on your computer
python3 simple-task.py
```

This particular script shows information about the cluster it is being run on 
and also visualizes the number of tasks run on different nodes.

Expect information about 100 tasks being executed on one IP, and the cluster of one node plus as many workers as many cores your CPU has.

Once you ensure the app works, you can feed it to your Ray on Golem cluster

```bash
# Submit the app to be executed on your cluster
ray submit golem-cluster.yaml simple-task.py
```

You can see the information about the cluster both before and after running the computations.

The most important feature of Ray is the autoscaler. When the cluster is busy it starts up more nodes.
When nodes are idle for some time (5 minutes by default), the autoscaler shuts them down.

Node addition is not instantaneous, as machines and workers need to be set up.

If you submit the script immediately after `ray up`, it will run only on the head node. 
If you wait longer it will start with up to 3 nodes (the minimum defined in the cluster yaml.

The default 100 tasks of `simple-task.py` are rather fast and even when Ray orders new nodes it doesn't always manage to finish before the computation is over.

Submit the code again, requesting more tasks to see how the autoscaler expands the cluster, as the work progresses (give it up to 5 mins).

```bash
# Submit the app with 400 tasks
ray submit golem-cluster.yaml simple-task.py -- --count 400 
```

The above shows the usual workflow with Ray apps.
- You develop them, while at the same time testing them, on your local machine.
- When you are ready to get more power - you send them to a Ray cluster **without changing a single line** of your application's code.


## Run your ray app on your golem cluster

You are now ready to run your own code with `ray submit` \o/.

If you need help with preparing your ray code you can check out [ray getting started guide](https://docs.ray.io/en/latest/ray-core/walkthrough.html). 

## Stop the cluster

When you are happy with your results, you can stop your cluster until you need it again.

This is important because running a cluster uses up the Golem network nodes. In the case of testnet, it means others might find the network busy, and in the case of mainnet, it means you pay more.

```bash
# Tear down the cluster.
ray down golem-cluster.yaml --yes
```

{% docnavigation title="See also" %}
- [Ray on Golem concept](/docs/creators/ray/concept)
- [Basic Ray tasks usage tutorial](/docs/creators/ray/basic-ray-tasks-usage-tutorial)
{% /docnavigation %}
