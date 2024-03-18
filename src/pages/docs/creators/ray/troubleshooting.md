---
title: Ray on Golem troubleshooting
description: Comprehensive guide for resolving common Ray on Golem issues, including log file analysis and problem-solving techniques.
pageTitle: Ray on Golem Troubleshooting Guide - Identify and Resolve Common Issues

type: Troubleshooting
---

# Ray on Golem troubleshooting

{% troubleshooting %}

## What is going on with my cluster - status and dashboard

{% problem /%}

Often you will find yourself wondering "How is my cluster doing?"

{% solution %}

Ray offers two tools to inspect the cluster state: the status and the dashboard.

Ray status shows information about the nodes that make up the cluster, the total resources of the cluster, and their current usage.

The `ray status` command needs to be executed on the head node:

```bash
ray exec golem-cluster.yaml 'ray status'
```

```
Ray On Golem webserver
  Not starting webserver, as it's already running
Fetched IP: 192.168.0.3
======== Autoscaler status: 2023-11-28 08:09:48.391906 ========
Node status
---------------------------------------------------------------
Healthy:
 1 ray.head.default
 1 ray.worker.default
Pending:
 ray.worker.default, 5 launching
Recent failures:
 (no failures)

Resources
---------------------------------------------------------------
Usage:
 2.0/2.0 CPU
 0B/5.34GiB memory
 0B/2.61GiB object_store_memory

Demands:
 {'CPU': 1.0}: 385+ pending tasks/actors
Shared connection to 192.168.0.3 closed.

```

Ray dashboard visualizes the nodes and various other aspects of a running cluster, like specific jobs and function calls that get executed by each node.

Run `ray dashboard golem-cluster.yaml` to forward your cluster's dashboard to [http://localhost:8265](http://localhost:8265).
Keep it running in the background so that the tunnel stays active as long as you need it.

For a more thorough description of the dashboard's amazing secrets, check out the [Ray docs](https://docs.ray.io/en/latest/ray-observability/getting-started.html).

{% /solution %}
{% feedback identifier="what-is-going-on-with-my-cluster" /%}
{% /troubleshooting %}

{% troubleshooting %}

## Ray on Golem's log files

{% problem /%}

When you encounter issues while running one of the various Ray commands that utilize Ray on Golem,
it may not always be immediately obvious what the problem is from the output of the command itself.

Where possible, we try to display a meaningful error message - e.g. when `ray up` fails to start up
the Ray on Golem's webserver, we display a few last lines of the logs.

If that's not enough to suggest a way to fix the issue, investigating the logs may provide the required details.

{% solution %}

The log files that Ray on Golem produces are stored in the following files (in a default, platform-dependent application directory):

- `~/.local/share/ray_on_golem/webserver.log` - cluster manager log - basic Ray on Golem logs.
- `~/.local/share/ray_on_golem/webserver_debug.log` cluster manager debug log - more detailed Ray on Golem logs.
- `~/.local/share/ray_on_golem/yagna.log` - Golem node (yagna) logs.

Given these, you can either:

- Look at the `webserver.log` yourself - our aim is for you to be able to diagnose and resolve the most straightforward issues on your own.
- Share the `webserver_debug.log` and `yagna.log` with us on [`#Ray on Golem` discord channel](https://chat.golem.network/) - we will be more than happy to assist.

{% /solution %}
{% feedback identifier="ray-when-something-goes-wrong" /%}
{% /troubleshooting %}

{% troubleshooting %}

## Starting over with a clean slate

{% problem /%}

It may happen that something goes wrong and you wish to start over with a clean slate.

{% solution %}

The first thing to do is `ray down` - it should be enough to clear the situation, 
but sadly it isn't always the case.

You can use `ray-on-golem stop` to ultimately stop all Ray on Golem components.
The next `ray up` will start them again in a totally fresh state. 
Check out more details about Ray on Golem [stoping and starting](/docs/creators/ray/ray-on-golem-cli#ray-on-golem-start-stop).

It might also be a good idea to clean up Ray's configuration cache files:

```bash
rm /tmp/ray-config-*
```

{% /solution %}
{% feedback identifier="ray-not-stopping-on-ray-down" /%}
{% /troubleshooting %}

{% troubleshooting %}

## Additional packages required on the cluster

{% problem /%}

Your app might need non-standard packages to run on a Ray on Golem cluster.
The default VM image includes nothing besides the bare minimum.

In such a case, the output for `ray submit` may look like this:

```
Traceback (most recent call last):
  File "/root/dds-with-ray.py", line 49, in <module>
    results = get_lots_of_deals()
  File "/root/dds-with-ray.py", line 42, in get_lots_of_deals
    results = ray.get(result_ids)
  File "/usr/local/lib/python3.10/site-packages/ray/_private/auto_init_hook.py", line 24, in auto_init_wrapper
    return fn(*args, **kwargs)
  File "/usr/local/lib/python3.10/site-packages/ray/_private/client_mode_hook.py", line 103, in wrapper
    return func(*args, **kwargs)
  File "/usr/local/lib/python3.10/site-packages/ray/_private/worker.py", line 2547, in get
    raise value.as_instanceof_cause()
ray.exceptions.RayTaskError(ModuleNotFoundError): ray::get_deal() (pid=871, ip=192.168.0.3)
  File "/root/dds-with-ray.py", line 30, in get_deal
    from endplay.dds import calc_dd_table
ModuleNotFoundError: No module named 'endplay'
Shared connection to 192.168.0.3 closed.
Error: Command failed:
```

{% solution %}

Note that even if you have the needed dependencies installed, and your app runs on your local environment, you still need to tell Ray on Golem cluster the packages are needed.

The best way to do it is by adding an appropriate `pip install` command to `setup_commands` in the cluster yaml file.
Check out the [cluster yaml](/docs/creators/ray/cluster-yaml#initialization-commands) article to get more information.

{% /solution %}
{% feedback identifier="ray-additional-packages" /%}
{% /troubleshooting %}

{% troubleshooting %}

## Passing arguments to your Ray script fails

{% problem /%}

Often, you need to pass arguments to the Ray script you are submitting:

```bash
ray submit golem-cluster.yaml examples/simple-task.py -n 20
```

While it looks correct, in this particular case it won't have the intended effect of passing the parameter to the `simple-stask.py` script. Instead, it will cause Ray to, seemingly, suddenly require a password for the node, i.e.:

```
Checking External environment settings
Ray On Golem webserver
  Not starting webserver, as it's already running
Fetched IP: 192.168.0.3
root@192.168.0.3's password:
```

{% solution %}

`ray submit` and other ray commands have their own arguments. If your script arguments are named the same, Ray will get confused.

In this example `-n` stands for cluster name, which we don't support yet - hence the unexpected request for the SSH password.

The solution is to precede your arguments with the double-dash symbol (`--`):

```bash
ray submit golem-cluster.yaml examples/simple-task.py -- -n 20
```

This informs Ray that everything after the double dash is not to be interpreted, but instead passed as-is to the executed script.
{% /solution %}
{% feedback identifier="ray-passing-arguments-to-your-ray-script-fails" /%}
{% /troubleshooting %}

{% troubleshooting %}

## Head node not found

{% problem /%}

Sometimes, you might get `RuntimeError: Head node of cluster (golem-cluster) not found!` error message when attempting to run a ray cli command.

{% solution %}

This means, that you are trying to run a command that requires a cluster to be up (like `ray submit`), but the cluster is not alive.

The simplest reason might be that you hadn't successfully run `ray up`.
Checkout [the logs](/docs/creators/ray/troubleshooting#ray-on-golem-s-log-files) to see what happened.

Another explanation might be that the cluster had been launched, but it stopped or crashed - please share the logs with us to help us prevent this from happening in the future.

If you see nothing interesting in the logs, you might want to [start over](/docs/creators/ray/troubleshooting#starting-over-with-a-clean-slate).

Feel free to reach out to us on [`#Ray on Golem` discord channel](https://chat.golem.network/) - we will be more than happy to assist.

{% /solution %}
{% feedback identifier="head-node-not-found" /%}
{% /troubleshooting %}

<!--
{% troubleshooting %}

## Topic


{% problem /%}

Description

{% solution %}

Solution

{% /solution %}
{% feedback identifier="ray-unique-tip-reference-for-feedback-gathering" /%}
{% /troubleshooting %}
-->
