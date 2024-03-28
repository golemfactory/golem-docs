---
title: How to remove Yagna?
description: Step-by-step guide to removing Yagna components, configs, and data for Requestors.
type: noindex
---

# Golem Requestor uninstallation guide

{% alert level="warning" %}
Before removing Yagna please make sure you have backup-up your private key to the address where you have GLMs. You can find instructions [here](/docs/creators/javascript/examples/tools/golem-wallet-backup).
{% /alert %}

## Quick path (Linux only)

If you used default settings for installation, this set of commands should be sufficient:

```bash
rm ~/.local/bin/yagna
rm -fr ~/.local/share/yagna
rm -fr ~/.local/share/ya-installer
```

## Detailed instructions for custom installations

### Removing Yagna binaries

{% tabs %}
{% tab label="Linux" %}
The default Yagna binaries (actually link to binaries) location is: `~/.local/bin/yagna`.

```bash
rm ~/.local/bin/yagna
```

{% /tab %}
{% tab label="Windows" %}
The Yagna is "installed" manually by unziping the archive file. All you need to do is find and remove two files: `yagna.exe` and `gftp.exe`.
If they are within your path, you can find them using:

```sh
whereis yagna gftp
```

Then remove using `rm <the-path-to-the-file>`.

{% /tab %}
{% /tabs %}

### Removing Yagna data

{% tabs %}
{% tab label="Linux" %}

Yagna daemon configuration and persistent files are stored in the location defined by the `YAGNA_DATADIR` environment variable. If it was not set, then the default location for Yagna data is: `~/.local/share/yagna`.

To check if you use a custom data location run:

```bash
echo $YAGNA_DATADIR
```

To remove Yagna data in default location use:

```bash
rm -r ~/.local/share/yagna
```

{% /tab %}
{% tab label="Windows" %}
Yagna daemon configuration and persistent files are stored in the location defined by the `YAGNA_DATADIR` environment variable. If it is not set, then the default location for Yagna data is: `%HOMEPATH%\AppData\Roaming\GolemFactory\yagna`.

To check if you use a custom data location run:

```sh
set YAGNA_DATADIR
```

To remove Yagna data in default location use:

```sh
rm -r %HOMEPATH%\AppData\Roaming\GolemFactory\yagna
```

{% /tab %}
{% /tabs %}

### Removing Yagna installer files

{% tabs %}
{% tab label="Linux" %}

To remove Yagna installer files in default location use:

```bash
rm -r ~/.local/share/ya-installer
```

{% /tab %}
{% tab label="Windows" %}

On Windows, you can remove the zip file downloaded from Github.

{% /tab %}
{% /tabs %}

## Uninstalling `gvmkit-build`

You can check if you have installed `gvmkit-build` globally using:

```sh
npm ls -g | grep gvmkit
```

If so, you can uninstall it with the following command:

```sh
npm uninstall -g gvmkit-build
```

{% docnavigation title="See also" %}

- If you are looking for intructions for Providers see [here](/docs/providers/provider-uninstall).

{% /docnavigation %}
