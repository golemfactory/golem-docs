---
title: Ray on Golem troubleshooting
description: Comprehensive guide for resolving common Ray on Golem issues, including log file analysis and problem solving techniques.
pageTitle: Ray on Golem Troubleshooting Guide - Identify and Resolve Common Issues

type: troubleshooting
---

# Ray on Golem troubleshooting

{% troubleshooting %}

## Ray on Golem's log files
 
{% problem /%}

When you encounter issues while running one of the various Ray commands that utilize Ray on Golem,
it may not always be immediately obvious what the problem is from the output of the command itself.

Where possible, we try to display a meaningful error message - e.g. when `ray up` fails to start up
the Ray on Golem's webserver, we display a few last lines of the logs.

If that's not enough to suggest a way to fix the issue, an investigation of logs may prove more useful. 

{% solution %}

The log files that Ray on Golem produces are stored in the following files:
- `/tmp/ray_on_golem/webserver.log` - cluster manager log - basic Ray on Golem logs.
- `/tmp/ray_on_golem/webserver_debug.log` cluster manager debug log - more detailed Ray on Golem logs.
- `/tmp/ray_on_golem/yagna.log` - Golem node (yagna) logs.

Given these, you can either:
- Look at the `webserver.log` yourself - our aim is for you to be able to diagnose and resolve the most straightforward issues on your own.
- Share the `webserver_debug.log` and `yagna.log` with us on [`#Ray on Golem` discord channel](https://chat.golem.network/) - we will be more than happy to assist.


{% /solution %}
{% feedback identifier="ray-when-something-goes-wrong" /%}
{% /troubleshooting %}


{% troubleshooting %}

## Lack of a complete cleanup on shutdown

{% problem /%}

It may happen that some of Ray on Golem's components are still up after the successful completion of `ray down`.
While it's usually not a problem in itself, you might wish to start with a clean slate on consecutive `ray up` runs.

{% solution %}

To perform a cleanup, let's first check if there are any orphaned components indeed:
```bash
ps axc | grep -v grep | grep -E 'yagna|ray-on-golem'
```

It produces an output like this:
```
  71257 ?        Ssl    0:02 ray-on-golem
  71258 ?        Sl     2:35 yagna
```

The above shows `ray-on-golem` webserver and the `yagna` daemon are running.

Note that Ray on Golem leaves `yagna` daemon running on purpose - it stays connected to the Golem network maintaining current information about the providers so that when you decide to start up your cluster again the nodes are found quicker. 
With that in mind, we recommend killing only `ray-on-golem` and leaving `yagna` running. 

The surest way to stop these services is to kill them (using the PID numbers as shown in the first column):
```bash
kill -9 71257 71258
```

After it is done, the above command should show no more hanging processes:
```bash
ps axc | grep -v grep | grep -E 'yagna|ray-on-golem'
```
```
```

It might also be a good idea to clean up Ray's configuration cache files:
```bash
rm /tmp/ray-config-*
```

{% /solution %}
{% feedback identifier="ray-not-stopping-on-ray-down" /%}
{% /troubleshooting %}

{% troubleshooting %}

## How can I resolve the node not found error?
 
{% problem /%}

Sometimes, `ray up` might time out with a note saying that there is no node available.

It might look like this:
```
ray_on_golem.client.exceptions.RayOnGolemClientError: Couldn't create node: {"error": "Creating activities timeout reached"}

```

{% solution %}

This means, that there are not enough providers on the network. 

If you are running Ray on Golem on the testnet (property `network: "goerli"` in the cluster yaml) - most likely all the nodes are busy with requests of other users.

We are preparing a tool to check providers' availability.
Another solution would be to move to mainnet - we are also working on enabling this option.

For now, the best course of action would be to report the situation on [`#Ray on Golem` discord channel](https://chat.golem.network/).

Usually, the testnet isn't busy for a long time - it might be enough to wait a couple of minutes.

{% /solution %}
{% feedback identifier="ray-node-not-found" /%}
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


<!--
{% troubleshooting %}

## Second `ray up` doesn't work 
 

{% problem /%}

Description

{% solution %}

Solution

{% /solution %}
{% feedback identifier="ray-unique-tip-reference-for-feedback-gathering" /%}
{% /troubleshooting %}
-->


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
