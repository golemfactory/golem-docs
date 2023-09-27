---
description: a step-by-step explanation of the quickstart instructions
title: Ray on Golem setup tutorial
type: guide 
---

# Ray on Golem setup tutorial 

This tutorial explains all the steps needed to start, test, and stop a Ray on the Golem cluster. 
If you have already proceeded through our [Quickstart](/docs/creators/ray/quickstart), you'll find this tutorial familiar. 
The point is to go through the same actions but now, provide you with more details on each one.

To start a Ray cluster on Golem, you will use the Ray cluster launcher with the Golem Network client & Ray on Golem cluster manager.

## Install Ray cluster launcher & Ray on Golem cluster manager

The Ray cluster launcher is part of the Ray CLI. Use the CLI to start and stop a ray cluster using commands such as `ray up` and `ray down`. 
You can use pip to install the Ray CLI with cluster launcher support (recommended within a clean virtual environment)

You need to download the Golem cluster manager, which enables Ray to utilize the Golem network nodes.

It will install the default ray package as a dependency, but if you want more Ray-specific details follow [the Ray installation documentation](https://docs.ray.io/en/latest/ray-overview/installation.html#installation).

```bash
# install ray-on-golem and ray (recommended within a clean virtual environment)
pip3 install -U ray-on-golem
```

Additionally, a tool named [websocat](https://lib.rs/crates/websocat) is needed to wrap connections between your machine and Ray on the Golem cluster.
You can install websocat using [these instructions](https://lindevs.com/install-websocat-on-ubuntu/).

## Install yagna (Golem daemon used to schedule work on the Golem Network)

For now, you need to manually install Yagna to be able to connect to the Golem network.
Later on, we will make the installation happen behind the scenes.

```bash
# install yagna - golem network daemon
curl -sSf https://join.golem.network/as-requestor | bash -
```

## Start Ray with the Ray cluster launcher

Once the packages are installed, you can proceed with launching your cluster.

All you need is a cluster config file, you can download an example one from our repository.

The command to start the cluster is `ray up`:

```bash
# Download the example golem-cluster.yaml
wget https://github.com/golemfactory/ray-on-golem/raw/main/golem-cluster.yaml

# In this command:
# * Yagna starts in the background (if not running)
# * ray-on-golem cluster manager starts in the background
# * ray head node is started on a golem provider
ray up golem-cluster.yaml --yes

```

The provided example Golem cluster config file defines a small Golem cluster with one head node 
that is configured to autoscale to up to 10 worker nodes.

The example cluster config file also contains payment information. As a default it runs for free on Golem testnet - it should be enough to try it out (which is all we are supporting for now).

If you want more details about the config file, check out the [cluster yaml reference](/docs/creators/ray/cluster-yaml-reference) article.

You can now verify that your Ray on Golem cluster works, by running the following command on your local machine. 
It will connect to the head node and execute the `ray status` command which will print cluster information.

```bash
# Check if Ray on the Golem cluster is running 
ray exec golem-cluster.yaml 'ray status'

```

Congrats, you have started a Ray on the Golem cluster!

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

Once you ensure the app works, you can feed it to your Ray on the Golem cluster

```bash
# Submit the app to be executed on your cluster
ray submit golem-cluster.yaml simple-task.py
```

You can see the information about the cluster both before and after running the computations.
Observe how, at first, the cluster consists of only one node, and how the autoscaler expands it, as the work progresses.

You might need to submit the code more than once.
It is rather fast and even when Ray orders new nodes 
it doesn't always manage to finish before the computation is over.

The above shows the usual workflow with Ray apps.
- You develop them, while at the same time testing them, on your local machine.
- When you are ready to get more power - you send them to a Ray cluster **without changing a single line** of your application's code.

## Run your ray app on your golem cluster

You are now ready to run your code with `ray submit` \o/.

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
