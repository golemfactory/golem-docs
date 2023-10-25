---
title: Ray on Golem troubleshooting
description: This is the troubleshooting section for Ray on Golem.
type: troubleshooting
---

# Ray on Golem troubleshooting

{% troubleshooting %}

## When something goes wrong
 
{% problem /%}

When something goes wrong with `ray up` or any other ray commands we display an error message and a few last lines of the log file.

Sometimes it is not enough.

{% solution %}

There are a couple of log files:
- `/tmp/ray_on_golem/ONE_SUPER_LOG` one log, combining all the information we have.
- `/tmp/ray_on_golem/webserver.*` - cluster manager logs
- `~/.local/share/yagna/yagna_rCURRENT.log` - golem node (yagna) logs
- `/tmp/ray/*` - ray logs

Now you can:
- Look at the ONE_SUPER_LOG log yourself
- Share the ONE_SUPER_LOG log with us on [`#Ray on Golem` discord channel](https://chat.golem.network/) - we will be more than happy to assist.


{% /solution %}
{% feedback identifier="ray-when-something-goes-wrong" /%}
{% /troubleshooting %}


{% troubleshooting %}

## Not stopping everything clean with ray down

{% problem /%}

Sometimes `ray down` doesn't clean up all the components. Sometimes it is not a problem with consecutive `ray up` but sometimes it is.

{% solution %}

First of all, let check if indeed there are any orphaned components:
```bash
ps axu | grep -E 'yagna|ray-on-golem'
```

It produces an output like this:
```
mateusz     6427  3.3  0.2 339416 91284 ?        Ssl  08:12  13:08 /home/mateusz/.envs/ray-on-golem-test-0.1.3-2/bin/python3 /home/mateusz/.envs/ray-on-golem-test-0.1.3-2/bin/ray-on-golem -p 4578 --self-shutdown --log-level info
mateusz     6428  3.2  0.5 595272 178088 ?       Sl   08:12  12:36 yagna service run
mateusz    18021  0.0  0.0  11744  2816 pts/3    S+   14:40   0:00 grep --color=auto -E yagna|ray-on-golem
```

The above shows running `ray-on-golem` and `yagna` services (the last line resulting from our peeking).

The surest way to stop them is killing them (using pid numbers as shown in the second column):
```bash
kill -9 6427 6428
```

After it is done, there should be no more hanging process:
```bash
ps axu | grep -E 'yagna|ray-on-golem'
```
```
mateusz    18121  0.0  0.0  11744  2688 pts/3    S+   14:44   0:00 grep --color=auto -E yagna|ray-on-golem
```



{% /solution %}
{% feedback identifier="ray-not-stopping-on-ray-down" /%}
{% /troubleshooting %}

{% troubleshooting %}

## How can I resolve the node not found error?
 
{% problem /%}

Sometimes, `ray up` might timeout with a note saying that there is no node available.

It might look like this:
```
ray_on_golem.client.exceptions.RayOnGolemClientError: Couldn't create node: {"error": "Creating activities timeout reached"}

```

{% solution %}

This means, that there is not enough providers on the network. 

If you are running Ray on Golem on the testnet (property `network: "goerli"` in the cluster yaml) - most likely all the nodes are busy with requests of other users.

We are preparing a tool to check providers availability.
Another solution would be to move to mainnet - we are also working on enabling this option.

For now the best course of action would be to report the situation on [`#Ray on Golem` discord channel](https://chat.golem.network/) - we will be more than happy to assist.

Usually testnet isn't busy for a long time - it might be enought to wait a couple minutes.

{% /solution %}
{% feedback identifier="ray-node-not-found" /%}
{% /troubleshooting %}


<!--
{% troubleshooting %}

## Libraries not present on the cluster 
 

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

## Libraries not installing properly on the cluster 
 

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
