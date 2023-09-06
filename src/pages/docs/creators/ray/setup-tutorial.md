---
description: step-by-step explanation of the quickstart instructions
title: Ray on Golem setup tutorial
type: guide 
---

# Ray on Golem setup tutorial 

This tutorial explains all the steps needed to start, test, and stop a Ray on Golem cluster.

To start a Ray cluster on Golem, you will use the Ray cluster launcher with the Golem Network client & Golem Ray cluster manager.

## Install Ray cluster launcher & Golem Ray cluster manager

The Ray cluster launcher is part of the Ray CLI. Use the CLI to start and stop a ray cluster using commands such as `ray up` and `ray down`. 
You can use pip to install the Ray CLI with cluster launcher support. 

Below you can see how to install default ray packages, but if you need more Ray-specific details follow [the Ray installation documentation](https://docs.ray.io/en/latest/ray-overview/installation.html#installation).

You also need to download the Golem cluster manager, which will facilitate your access to Golem network nodes.

```bash
# install ray & golem-ray
pip install -U ray[default] golem-ray
```

## Install yagna (Golem daemon used to schedule work on Golem Network)

For now, you also need to manually install yagna to be able to connect to the Golem network. Later on, we will make the installation happen behind the scenes.
Please follow the [yagna installation guide from Golem handbook](https://handbook.golem.network/requestor-tutorials/flash-tutorial-of-requestor-development). 
Stop before running the daemon - `golem-ray` will do the rest for you. 

TLDR install yagna:

```bash
# install yagna - golem network daemon
curl -sSf https://join.golem.network/as-requestor | bash -
```

## Start Ray with the Ray cluster launcher

Once the packages are installed you can immediately proceed to launching your cluster. 
The provided [example golem cluster config file](https://github.com/golemfactory/golem-ray/blob/main/golem-cluster.yaml) defines a small Golem cluster with one head node 
that is configured to autoscale to up to 10 worker nodes (with ??? cpus, ??? ram, ??? disk space each).

Each Ray cluster consists of one head node and a number of worker nodes. The head node drives the computation, and the worker nodes execute the tasks. The head node serves also as a worker. 

When you run Ray locally it starts the head node on your computer - it allows Ray to speed your code out of the box just by running it on all cores.

Note that you will get yagna (Golem daemon used to schedule work on Golem Network) configured during the first startup of the cluster. 

The example cluster config file contains payment information. As a default it runs for free on Golem testnet - it should be enough to try it out (which is all we are supporting for now)

The command to start the cluster is `ray up`:

```bash
# Download the example-golem-cluster.yaml
wget https://github.com/golemfactory/golem-ray/blob/main/golem-cluster.yaml

# In this command:
# * yagna starts in the background (if not running)
# * golem-ray cluster manager starts in the background
# * ray head node is started on a golem provider
ray up example-golem-cluster.yaml

```

Test now that your Ray on Golem cluster works by running the following commands on your local machine. 
It will connect to the head node and execute the simplest ray code on the cluster.

```bash
# Check if Ray on Golem cluster is running 
ray exec example-golem-cluster.yaml 'python -c \'import ray; ray.init(address="auto")\''

```

Congrats, you have started a Ray on Golem cluster!



## Test the cluster with example app

You are now ready to run some ray computations.

We have provided a test application that you can use to check if your brand-new cluster works properly.

At first, it is recommended to run the app locally (without connecting to the cluster)

```bash
# Download the example Ray app
wget https://github.com/golemfactory/golem-ray/blob/mateusz/docs/examples/simple-task.py 

# Submit the app to be executed on your cluster
python3 example-ray-app.py

# Execute the app locally by starting a local ray instance on your computer
python3 example-ray-app.py
```

This particular app shows information about the cluster it is being run on and also visualizes the number of tasks run on different nodes.

After you are sure the app works you can feed it to your Ray on Golem cluster

```bash
# Run some ray-based code (that knows *nothing** about Golem) - this will either:
# A) Run only on the head node, if the autoscaler decides there is no need for a worker node
# B) Or create worker node(s) on the Golem Network. Worker nodes will be later auto-terminated by the autoscaler

# Submit the app to be executed on your cluster
ray submit example-ray-app.py
```

You can see the information about the cluster both before and after running the computations.
Observe how at first the cluster consists of only one node and how autoscaler expands the cluster during the work.

The above way shows the usual work with Ray apps. 
- You develop them at the same time testing them on your local machine.
- When you are ready to get more power - you send them to Ray cluster **without changing a single line** of your code.

## Run your own ray app on your golem cluster

You are now ready to run your own code with `ray submit` \o/.

If you need help with preparing your ray code you can check out [ray getting started guide](https://docs.ray.io/en/latest/ray-core/walkthrough.html). 


## Stop the cluster

When you are happy with your results you can stop your cluster until you need it again.

It is important because running a cluster uses up the Golem network nodes. In the case of testnet, it means others might find the network busy, and in the case of mainnet, it means you pay more :)

```bash
# Tear down the cluster.
ray down example-golem-cluster.yaml
```


