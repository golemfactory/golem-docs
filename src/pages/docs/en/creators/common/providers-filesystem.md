---
title: 'Golem concepts: filesystem on a provider'
description: Explore topics related to file system on a VM run on a remote provider to better design your custom image.
pageTitle: VM Filesystem - how the image design impacts my options.
type: Guide
---

# Understanding the filesystem in VMs operated on providers

Your options of what you can do on a provider will depend on how your image is configured. You already know that transferring data to and from a provider is possible only to/from locations within folders that are configured as `VOLUME` in your Dockerfile. ([Read here](/docs/en/creators/javascript/guides/golem-images) for information about images and how to create one.)

If you run the command `df -h` on a VM built from this image on a provider, you'll receive an output similar to this:

```
Filesystem Size Used Available Use% Mounted on
overlay 128.0M 8.0K 128.0M 0% /
devtmpfs 630.2M 0 630.2M 0% /dev
tmpfs 632.8M 0 632.8M 0% /tmp
tmpfs 632.8M 0 632.8M 0% /dev/shm
mnt0 24.0G 10.2G 13.8G 42% /golem/work
```

This example utilized the `golem/examples-outbound:latest` image deployed on one of the providers in the `testnet`. If you run this test yourself, you might get different capacities for `tmpfs` and `mnt0` filesystems as they depend on the resources offered by the provider on which you run the task.

Take a look at this output to better understand some Golem concepts.

- The filesystem mounted under ‘/’ is limited to 128 MB of size as it's a filesystem stored in memory and can't be increased.
- Filesystems of ‘tmpfs` type are by default limited to 50% of the provider's allocated memory (more precisely: container's memory) and are stored in the provider's memory.
- The ‘/golem/work’ directory has much more space available, as it has access to disk storage offered by the provider. While this might not be obvious, this folder was defined as the `VOLUME` directory in the Dockerfile, that was used to create the `golem/examples-outbound: latest` image. On this provider, the user can utilize up to 13.8 GB of disk storage.

Let's make another experiment: if you run the command `ls -l /golem` on a VM built from that image, you'll receive an output similar to this:

```
 drwxrwxr-x    2 1000     1000          4096 Apr 11 07:41 work
```

Note the owner of this directory.

Let's create a file in this directory and check its permissions:

```
touch /golem/work/testfile
ls -l /golem/work
```

The output should be:

```
-rw-r--r--    1 1000     1000             0 Apr 11 07:41 testfile
```

Now if you try to change the owner of this file:

```
chown root /golem/work/testfile
```

you will get an error:

```
chown: /golem/work/testfile: Operation not permitted"
```

as for the provider's security, the features on this filesystem are limited.

## Important conclusions from these observations

- The available space for installing extra software in the root location is limited. As a result, although the `outbound` feature allows for the downloading and installation of certain apps, it's recommended to pre-install these applications directly into the image. This approach not only saves space but also speeds up task completion as the necessary software with be inside the cached image. Our recommendation is to adjust the image accordingly to include these applications from the start.

- You can increase the `tmpfs` partitions up to the limit of the memory available to your VM, however, it will be at the cost of memory available for your application. Note, to do this you need to make sure that the required tools/commands are installed in your image.

- Not specifying a directory as a `VOLUME` results in the inability to access the disk storage capacity advertised by the provider, thus making it unavailable for your VM. Additionally, without this declaration, the maximum storage capacity for saving outputs in other directories is limited to 50% of the provider's available memory. This limitation is automatically applied to each `tmpfs` by default.

- When using the `VOLUME` directive, remember that when a Golem VM is started, a new directory is created in the host's file system for each of the defined volumes. Therefore, any previous content (placed there during image creation) will not be available to you. Do not locate any of your data in such directories during image creation.

- Please remember that `VOLUME` directories are required to transfer data to and from the VM. For example if within the JS SDK you use work context methods like: `downloadFile()` or `uploadFile()`, you must use such a directory as a source/target directory.

- If your software produces a large amount of data, save the output to a directory defined as a `VOLUME`.

- The Linux filesystem features on the filesystem marked as VOLUME are limited.

## A graphical representation

Take a look at this picture that visualizes topics discussed in this article.

![Filesystem on a VM](/requestor-vm-comms.jpg)
