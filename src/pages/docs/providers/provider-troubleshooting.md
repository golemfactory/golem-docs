---
description: Guides to help you troubleshoot a faulty provider.
title: Provider troubleshooting
type: Instructions
---

# Provider Troubleshooting

This article will show you how to troubleshoot some common issues with providers. If none of the following information is helpful, you can join our [Discord Server](https://chat.golem.network/) for tech support.

## Provider installer on Ubuntu exits without an error but doesn't run.

If you run the Golem Provider one-line installer on a minimal install of Ubuntu and it completes without error but doesn't run then you might have a symlink issue.

Solution: See this [guide](https://geekrewind.com/setup-and-manage-symlinks-on-ubuntu-18-04-16-04/) on setting up and managing Symlinks.

## Connectivity issue

If you are not receiving tasks at all, have the correct subnet configured, have reasonable prices set for using your HW, and have VM valid, then the most probable cause is a yagna "connectivity" issue.

Solution: Kill and restart the process

## Invalid VM

In case the `golemsp status` command returns a status other than `valid`:

a\) If: `the user has no access to /dev/kvm` run

```text
curl -o setup-kvm.sh https://join.golem.network/setup-kvm.sh && chmod +x ./setup-kvm.sh && ./setup-kvm.sh
```

Afterwards, log out and log in again into your OS and then, rerun `golemsp run`

b\) If: `running inside Docker without access to /dev/kvm` run

```text
docker run --privileged
```

**or** mount the `/dev/kvm` device to the Docker container.

  
c\) If: `unsupported virtualization type: XEN` 

We do not support **XEN hypervisor**



* In any other case with the virtualization, we recommend the:

`sudo apt install cpu-checker && sudo kvm-ok` command and follow the steps as given in the terminal interface.

