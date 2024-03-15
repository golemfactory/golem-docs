---
title: 'Golem concepts: filesystem on remote node'
description: Explore topics related to file system on a VM run on a remote node to better design your custom image.
pageTitle: VM Filesystem - how the image design impacts my options.
type: Guide
---

# Filesystem on VM run on a remote node.

{% alert level="info" %}

This example utilized the `golem/examples-outbound:latest` image deployed on one of the nodes in the `testnet`. Actual numbers will depend on the node on which you run such a task.

{% /alert %}

Your options of what you can do on a remote node will depend on how your image is configured. You already know that transferring data to and from a provider is possible only to/from folders that are configured as `VOLUME` in your image definition. (See [here](/docs/creators/javascript/guides/golem-images.md) for information about images and how to create one.)

If you would run `df -h` on a VM build from this image on a provider, you might receive an output like this:

```
Filesystem Size Used Available Use% Mounted on
overlay 128.0M 8.0K 128.0M 0% /
devtmpfs 630.2M 0 630.2M 0% /dev
tmpfs 632.8M 0 632.8M 0% /tmp
tmpfs 632.8M 0 632.8M 0% /dev/shm
mnt0 24.0G 10.2G 13.8G 42% /golem/work
```

Take a look at this output to better understand some Golem concepts.

- The ‘/’ folder is limited to 128 MB.
- ‘Tmpfs` folders by default are limited to 50% of the provider's memory available for your payload.
- The `/` and `tmpfs` folders are stored in the provider's memory.
- The ‘/golem/work’ folder has much more space available, as it has access to disk storage offered by the provider. While this might not be obvious, this folder was defined as the `VOLUME` directory in the Dockerfile, that was used to create the `golem/examples-outbound: latest` image. On this provider, the user can utilize up to 13.8 GB of disk storage.

## Important conclusions from these observations:

- The space for installation of additional software is limited (assuming you would install it in the default location). Therefore, even if the `outbound` feature lets you download and install some additional applications, the space available is limited and you should rather include them already in the image. Modify the image definition. An additional benefit is that your task will be completed faster.

- You can increase the `tmpfs` partitions up to the limit of the memory available to your VM, however, it will be at the cost of memory available for your application. Note, to do this you need to make sure that the required tools/commands are installed in your image.

- If you do not define any folder as a `VOLUME` you will not get access to the disk storage available for your VM. While you can still save your output to the other folders, their total maximum capacity is limited to memory available for your payload (by default each of `tmpfs` will get 50% of memory available).

- When using the `VOLUME` directive, remember that when a Golem VM is started, a new directory is created in the host's file system for each of the defined volumes. Therefore, any previous content (placed there during image creation) will not be available to you. Do not locate any of your data in such folders during image creation.

- Please remember that `VOLUME` folders are required to transfer data to and from the VM. For example if within JS SDK you use work context methods like: downloadFile() or uploadFile(), you must use such a folder as a source/target folder.

- If your software produces a large amount of data, save the output to a folder defined as a `VOLUME` one.

Let's look at this once again on the picture:

![Filesystem on a VM](/requestor-vm-comms.jpg)
