---
title: How to uninstall the Golem Provider
description: Step-by-step guide to removing Yagna components, configs, and data for Providers.
type: Instructions
---

# How to uninstall the Golem Provider

{% alert level="warning" %}
Before removing Yagna, please make sure you have backed up your private key. You can find the instructions [here](/docs/providers/wallet/backup).
{% /alert %}

## Quick path

If you installed the provider using our quick-installer, execute the following commands to remove all associated components:

```bash
rm ~/.local/bin/yagna
rm ~/.local/bin/golemsp
rm ~/.local/bin/ya-provider
rm -rf ~/.local/share/yagna
rm -rf ~/.local/share/ya-installer
rm -rf ~/.local/share/ya-provider
rm -rf ~/.local/lib/yagna
```

## Detailed instructions for custom installations

### Removing binaries

Yagna binaries are typically located at: `~/.local/bin/`. Run the following command to remove all of the components.

```bash
rm ~/.local/bin/yagna && rm ~/.local/bin/golemsp && rm ~/.local/bin/ya-provider
```

### Removing Yagna binaries

Yagna daemon configuration and persistent files are stored in the location defined by the `YAGNA_DATADIR` environment variable. If it was not set, then the default location for Yagna data is: `~/.local/share/yagna`.

To verify if you use a custom data location, execute the following command:

```bash
echo $YAGNA_DATADIR
```

To remove the data in the default location, execute the command:

```bash
rm -r ~/.local/share/yagna
```

## Removing Yagna installer files

To remove the data in the default location, execute the command:

```bash
rm -r ~/.local/share/ya-installer
```

## Removing Provider data

The configuration files, cached images, logs, and ExeUnit data directories for the provider agent are all stored in the directory specified by the `$DATADIR` environment variable. Should this variable be unset, the system defaults to using the following location: `~/.local/share/ya-provider`.

To verify if you're using a custom data location, execute the command:

```bash
echo $DATADIR
```

To remove the data in the default location, execute the command:

```bash
rm -r ~/.local/share/ya-provider
```

## Removing the Runtimes directory

The runtimes directory is defined by the `EXE_UNIT_PATH` environment variable. If this variable is not defined the default location is: `~/.local/lib/yagna`.

To verify if you use a custom data location, execute the following command:

```bash
echo $EXE_UNIT_PATH
```

To remove the data in the default location, execute the command:

```bash
rm -r ~/.local/lib/yagna
```

{% docnavigation title="See also" %}

- If you're looking for intructions on how to uninstall the requestor, [click here](/docs/creators/javascript/examples/tools/requestor-uninstall).

{% /docnavigation %}
