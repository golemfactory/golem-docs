---
title: How to remove Yagna?
description: Step-by-step guide to removing Yagna components, configs, and data for Requestors.
type: Instructions
---

# Golem Requestor uninstallation guide

{% alert level="warning" %}
Before removing Yagna, please make sure you have backed up your private key. You can find the instructions [here](/docs/creators/javascript/examples/tools/golem-wallet-backup).
{% /alert %}

## Quick path (Linux only)

If you installed Yagna using our quick-installer, execute the following commands to remove all associated components:

```bash
rm ~/.local/bin/yagna
rm -rf ~/.local/share/yagna
rm -rf ~/.local/share/ya-installer
```

## Detailed instructions for custom installations

### Removing Yagna binaries

{% tabs %}
{% tab label="Linux" %}
Yagna binaries are typically located at: `~/.local/bin/yagna`.

```bash
rm ~/.local/bin/yagna
```

{% /tab %}
{% tab label="Windows" %}
Yagna is manually installed by extracting from an archive. Simply locate and delete the `yagna.exe` and `gftp.exe` files.
If they are in your system's PATH, you can locate them with the following command:

```sh
whereis yagna gftp
```

Then remove using `rm <the-path-to-the-file>`.

{% /tab %}
{% /tabs %}

### Removing Yagna data

{% tabs %}
{% tab label="Linux" %}

The configuration and data files for the Yagna daemon are saved in a directory specified by the `YAGNA_DATADIR` environment variable. If you haven't set this variable, Yagna uses a default directory: `~/.local/share/yagna`.



To find out if your data is stored in a custom location, type this command in the terminal:

```bash
echo $YAGNA_DATADIR
```

If your Yagna data is in the default directory and you wish to remove it, use the following command:

```bash
rm -r ~/.local/share/yagna
```

{% /tab %}
{% tab label="Windows" %}
Yagna daemon configuration and persistent files are stored in the location defined by the `YAGNA_DATADIR` environment variable. If it is not set, then the default location for Yagna data is: `%HOMEPATH%\AppData\Roaming\GolemFactory\yagna`.

To verify whether you're using a custom location for Yagna data, execute this command:

```sh
set YAGNA_DATADIR
```

If your Yagna data is in the default directory and you wish to remove it, use the following command:

```sh
rm -r %HOMEPATH%\AppData\Roaming\GolemFactory\yagna
```

{% /tab %}
{% /tabs %}

### Removing Yagna installer files

{% tabs %}
{% tab label="Linux" %}

To delete the Yagna installer files from their default location, enter the following command:

```bash
rm -r ~/.local/share/ya-installer
```

{% /tab %}
{% tab label="Windows" %}

On Windows, you can remove the zip file downloaded from Github.

{% /tab %}
{% /tabs %}

## Uninstalling `gvmkit-build`

To determine if `gvmkit-build` is installed globally on your system, run the following command:

```sh
npm ls -g | grep gvmkit
```

If the command finds `gvmkit-build`, you can remove it by executing:

```sh
npm uninstall -g gvmkit-build
```

{% docnavigation title="See also" %}

- If you are looking for intructions for Providers see [here](/docs/providers/provider-uninstall).

{% /docnavigation %}
