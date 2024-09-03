---
title: Locating and Configuring Yagna Requestor Logs
description: Instructions on finding and configuring your Yagna requestor logs for debugging and monitoring.
pageTitle:  Yagna Requestor Logs: Finding and Configuring Them
type: Instructions
---

# Understanding Yagna Requestor Logs

Yagna logs provide essential information for troubleshooting and monitoring your requestor node. This guide will show you how to locate your Yagna logs, understand their naming conventions, and configure the logging level for more detailed debugging.

## Finding Your Yagna Logs

Your Yagna logs are stored in a specific directory determined by your operating system and any custom settings you may have configured.

### Default Log Locations

- **Linux:** `~/.local/share/yagna/yagna_rCURRENT.log`
- **macOS:** `~/Library/Application Support/GolemFactory.yagna/yagna_rCURRENT.log`
- **Windows:**  `%HOMEPATH%\AppData\Roaming\GolemFactory\yagna\yagna_rCURRENT.log`

### Custom Log Directory

If you've set a custom location for your Yagna data using the `YAGNA_DATADIR` environment variable, your logs will be stored directly within that custom path.

To check if a custom data directory is in use, run the following command in your terminal:

{% tabs %}
{% tab label="Linux/macOS" %}

```bash
echo $YAGNA_DATADIR
```

{% /tab %}
{% tab label="Windows" %}

```bash
echo %YAGNA_DATADIR%
```

{% /tab %}
{% /tabs %}

If this command returns a path, that's where your logs are located. Otherwise, they're in the default location for your operating system.

## Log File Naming

Yagna generates a new log file daily and each time the service restarts. Older logs are renamed with timestamps for archival purposes. The naming convention is as follows:

- `yagna_rCURRENT.log`: This file contains the current log.
- `yagna_rYYYY-MM-DD_hh-mm-ss[restart-nnn].log`: This represents an older log file, where:
  - `YYYY-MM-DD_hh-mm-ss`: The date and time (in UTC) when the log began.
  - `restart-nnn`: (Optional) If the log was created due to a restart, this indicates the n-th restart log for that day.

## Log Levels and Enabling DEBUG Logs

Yagna uses various log levels to categorize messages according to their severity. By default, the logging level is set to `INFO`, which includes the following types of messages:

- `ERROR`: Critical errors that require immediate attention.
- `WARN`: Warnings about potential issues that should be investigated.
- `INFO`:  General information about your node's operations.

For more detailed debugging, you can enable the `DEBUG` level. This will provide significantly more information, useful for identifying and resolving issues within your application or when interacting with Golem's APIs.

**How to Enable DEBUG Logs:**

1. Open a terminal.
2. Start the `yagna` service with the `RUST_LOG` environment variable set to `debug`:

{% tabs %}
{% tab label="Linux/MacOS" %}

```bash
RUST_LOG=debug yagna service run
```

{% /tab %}
{% tab label="Windows" %}

```bash
set RUST_LOG=debug && yagna service run
```

{% /tab %}
{% /tabs %}

Your Yagna logs will now include `DEBUG` messages.
