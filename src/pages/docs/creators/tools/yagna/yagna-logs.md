---
title: How to get the Golem Requestor Logs
description: Information on the location and configuration of the Yagna requestor Logs.
type: Guide
---

# Where are Yagna logs stored?

Yagna logs are saved in the following location:

{% tabs %}
{% tab label="Linux" %}

The Yagna daemon saves its configuration and data files in a directory specified by the `YAGNA_DATADIR` environment variable. If you haven't set this variable, Yagna uses a default directory: `~/.local/share/yagna`.

To find out if your data is stored in a custom location, type this command in the terminal:

```bash
echo $YAGNA_DATADIR
```

{% /tab %}
{% tab label="Windows" %}
Yagna daemon logs, configuration, and persistent files are stored in the location defined by the `YAGNA_DATADIR` environment variable. If it is not set, then the default location for Yagna data is: `%HOMEPATH%\AppData\Roaming\GolemFactory\yagna`.

To verify whether you're using a custom location for Yagna data, execute this command:

```sh
set YAGNA_DATADIR
```

{% /tab %}
{% /tabs %}

Current logs are saved in the `yagna_rCURRENT/log` file.
Every day and on each restart a new log file is created and the older version is saved under name: `yagna_rYYYY-MM-DD_hh-mm-ss[restart-nnn]` where the `YYYY-MM-DD_hh-mm-ss` indicates the date and time of the log start and optional suffix `restart-nnn` indicates that the log was created during Yagna restart.

### Logging level

By default, Yagna logs on the INFO level so that the logs will contain ERRORs, WARNings, and INFOrmation.
If you need more detailed logs set the `RUST_LOG` variable value to `debug`.

{% tabs %}
{% tab label="Linux" %}

```bash
export RUST_LOG=debug
```

{% /tab %}
{% tab label="Windows" %}

```
set RUST_LOG=debug
```

{% /tab %}
{% /tabs %}

{% docnavigation title="See also" %}

- Logs format is described in this [article](/docs/providers/understanding-logs).

{% /docnavigation %}
