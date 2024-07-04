---
title: Golem VM Conversion and Image FAQ
description: Dive into why Golem uses .gvmi over Docker images, the converting benefits, Dockerfile requirements for Golem VM, and solutions to common issues.
pageTitle: Golem Network VM Image Guide - FAQs, Tips and Best Practices
type: Article
---

# Frequently asked questions

## Why is it necessary to convert from a Docker image to .gvmi?

The most important reason for this is to reduce the size of the images. When converting to `.gvmi` all redundant layers from the Docker image are discarded and the filesystem itself gets compressed using [`squashfs`](https://www.kernel.org/doc/html/latest/filesystems/squashfs.html).

This results in a substantial size difference between the two images. For example, as of the time of writing this answer, the Docker image built as part of [Creating a custom Golem image](/docs/creators/python/tutorials/building-custom-image) tutorial is about `650 MB` in disk size. After conversion, the resulting `.gvmi` file weighs around `50 MB`. That's a 13x size difference!

But why do we need this? Most importantly, to reduce the setup time for providers downloading a new image. If a provider node does not have the specific image in their cache yet then it will need to download it as the first step to performing some computations.

## Are there any requirements when preparing a Dockerfile for Golem's VM runtime?

If you intend to transfer files to and from the provider, there is one strict requirement: **at least one volume** directory must be specified using the `VOLUME` command.

Besides the above, a number of commands are currently **not supported** by `gvmkit-build` converter. These are:

- `CMD`
- `ENTRYPOINT`
- `ENV`
- `PORTS`

## When building my image, I copied some files to one of the volumes. Why can't I see them when I run the image?

When a `.gvmi` image is started by the VM runtime, an **empty host directory is mounted** under each of its directories declared as **volumes** (`VOLUME` command in the `Dockerfile`).

If there is anything stored in the image under the volume directory it gets "shadowed" by the mounted host directory.

## My VM has run out of storage space while running, why is that?

In a running Golem VM, the storage space outside of volumes (declared through Docker's `VOLUME` command) is **limited to `128 MB`** of size stored in RAM using [`tmpfs`](https://www.kernel.org/doc/html/latest/filesystems/tmpfs.html).

This only applies to files created once the VM is running. Anything that was included in the image during the build process stays available (the VM's filesystem is an overlay).

Any larger files and chunks of data should be transferred to the VM's volumes. Since these directories are mounted from the host operating system they are only limited by the provider's storage space.

## I cannot reproduce a problem when I run the Docker image locally. What should I do?

In general, it's better to test the `.gvmi` image itself rather than the base Docker image. This guarantees that all Golem-specific conditions (filesystem characteristics, for example) are included. Also, testing with the VM runtime is as close to the provider's environment as possible.

You can learn more about testing the VM runtime locally in the [Testing a Golem image](/docs/creators/python/tutorials/testing-golem-image) article.

## My application's use case requires large files being processed by the providers. What is the best way to approach this?

This is related to the answer given to 'My VM has run out of storage space' topic above.

There you are two options here:

1. If the files are **static** (that is: they are always the same) then you can include them in the VM image itself while building it. You can learn more about that in: [Golem image explained](/docs/creators/python/guides/golem-images).
2. If the files are **dynamic** (that is: they may differ between task executions) then your best option is to transfer the files as a command within the requestor agent. Make sure you use a **volume directory as the destination**.
