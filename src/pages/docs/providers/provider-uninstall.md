---
title: How to remove Yagna?
description: Step-by-step guide to removing Yagna components, configs, and data for Providers.
type: Instructions
---

# Golem Provider uninstallation guide

{% alert level="warning" %}
Before removing Yagna please make sure you have backup-up your private key to the address where you received GLMs. You can find instructions [here](/docs/providers/wallet/backup).
{% /alert %}

## Quick path

If you used default settings for installation, this set of commands should be sufficient:

```bash
rm ~/.local/bin/yagna
rm ~/.local/bin/golemsp
rm ~/.local/bin/ya-provider
rm -fr ~/.local/share/yagna
rm -fr ~/.local/share/ya-installer
rm -fr ~/.local/share/ya-provider
rm -fr ~/.local/lib/yagna
```

## Detailed instructions for custom installations

### Removing binaries

The default Yagna binaries (actually link to binaries) location is: `~/.local/bin/yagna`.

```bash
rm ~/.local/bin/yagna
rm ~/.local/bin/golemsp
rm ~/.local/bin/ya-provider
```

### Removing Yagna binaries

Yagna daemon configuration and persistent files are stored in the location defined by the `YAGNA_DATADIR` environment variable. If it was not set, then the default location for Yagna data is: `~/.local/share/yagna`.

To check if you use a custom data location run:

```bash
echo $YAGNA_DATADIR
```

To remove in default location use:

```bash
rm -r ~/.local/share/yagna
```

## Removing Yagna installer files

To remove in default location use:

```bash
rm -r ~/.local/share/ya-installer
```

## Removing Provider data

Provider agent configuration files, cached images, logs, and ExeUnit data directories are located in `$DATADIR`. If this variable is not defined the default location is: `~/.local/share/ya-provider`.

To check if you use a custom data location run:

```bash
echo $DATADIR
```

To remove in default location use:

```bash
rm -r ~/.local/share/ya-provider
```

## Removing the Runtimes directory

The runtimes directory is defined by the `$EXE_UNIT_PATH` variable. If this variable is not defined the default location is: `~/.local/lib/yagna`.

To check if you use a custom data location run:

```bash
echo $EXE_UNIT_PATH
```

To remove in the default location use:

```bash
rm -r ~/.local/lib/yagna
```

{% docnavigation title="See also" %}

- If you are looking for intructions for Providers see [here](/docs/creators/javascript/examples/tools/requestor-uninstall).

{% /docnavigation %}
