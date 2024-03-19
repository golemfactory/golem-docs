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

Your options of what you can do on a remote node will depend on how your image is configured. You already know that transferring data to and from a provider is possible only to/from folders that are configured as `VOLUME` in your image definition. (See [here](/docs/creators/javascript/guides/golem-images) for information about images and how to create one.)

If you run the command `df -h` on a VM built from this image on a provider, you'll receive an output similar to this:

```
Filesystem Size Used Available Use% Mounted on
overlay 128.0M 8.0K 128.0M 0% /
devtmpfs 630.2M 0 630.2M 0% /dev
tmpfs 632.8M 0 632.8M 0% /tmp
tmpfs 632.8M 0 632.8M 0% /dev/shm
mnt0 24.0G 10.2G 13.8G 42% /golem/work
```

Take a look at this output to better understand some Golem concepts.

- The ‘/’ directory is limited to 128 MB of size as it's a filesystem stored in memory and can't be increased.
- ‘Tmpfs` directories are by default limited to 50% of the provider's allocated memory.
- The `/` and `tmpfs` directories are stored in the provider's memory.
- The ‘/golem/work’ directory has much more space available, as it has access to disk storage offered by the provider. While this might not be obvious, this folder was defined as the `VOLUME` directory in the Dockerfile, that was used to create the `golem/examples-outbound: latest` image. On this provider, the user can utilize up to 13.8 GB of disk storage.

## Important conclusions from these observations:

- The available space for installing extra software in the default location is limited. As a result, although the `outbound` feature allows for the downloading and installation of certain apps, it's recommended to pre-install these applications directly into the image. This approach not only saves space but also speeds up task completion as the necessary software with be inside the cached image. Our recommendation is to adjust the image accordingly to include these applications from the start.

- You can increase the `tmpfs` partitions up to the limit of the memory available to your VM, however, it will be at the cost of memory available for your application. Note, to do this you need to make sure that the required tools/commands are installed in your image.

- If you do not define any folder as a `VOLUME` you will not get access to the disk storage available for your VM. While you can still save your output to the other folders, their total maximum capacity is limited to memory available for your payload (by default each of `tmpfs` will get 50% of memory available).

- When using the `VOLUME` directive, remember that when a Golem VM is started, a new directory is created in the host's file system for each of the defined volumes. Therefore, any previous content (placed there during image creation) will not be available to you. Do not locate any of your data in such directories during image creation.

- Please remember that `VOLUME` directories are required to transfer data to and from the VM. For example if within the JS SDK you use work context methods like: `downloadFile()` or `uploadFile()`, you must use such a directory as a source/target directory.

- If your software produces a large amount of data, save the output to a directory defined as a `VOLUME`.

Let's look at this once again on the picture:

![Filesystem on a VM](/requestor-vm-comms.jpg)