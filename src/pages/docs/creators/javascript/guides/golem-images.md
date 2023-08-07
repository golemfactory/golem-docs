---
Description: Learn what a Golem image is and how to create and use one
---

# Golem images and usage explained

## Golem Image

A Golem image is a software package that contains libraries, tools, configurations, dependencies, and settings that are required to execute your tasks on a remote computer. The image is used to create the environment (VM) where your tasks are executed.

## Golem image creation 

Golem images are based on Docker images that are converted using the gvmkit-build tool to a `.gvmi` file format. The conversion brings a visible advantage for users. By using SquashFS we significantly reduced the size of the images thus saving file space and shortening the time needed to transfer the image to the provider node. Another benefit is running images in VMs instead of running them as Docker containers, which provides a separation of providers and requestor data and processes.

The general process of creating a Golem image looks like this:

* Define the image content in Docker format (Dockerfile)
* Build a Docker image from the Dockerfile
* Convert to Golem image using gvmkit-build ([example](../examples/tools/converting-docker-image-to-golem-format.md))

See our [Create Golem Image Tutorial](../tutorials/building-custom-image.md) on how to use the tool. 

## Publishing the image

Once your image is built and tested you can push it to a remote repository so that it becomes available to providers within the Golem Network. Golem manages a freely-accessible repository that everybody can push into without any special requirements. 


## Golem image use

The image must be downloaded to a remote computer therefore we need to publish it. Golem provides a ‘repository’ to publish images. Images can be identified by their image hash or a tag name. The type of identifier depends on the way you publish your image and is driven by intended usage.

If you intend to use your image just for testing it is enough to use image hash and upload them anonymously to the registry. If you intend to work on a more complex project where you would like to use several different versions of your image or collaborate with other users - you should consider creating an account in the registry and using tags to describe your images. Both cases are illustrated in our examples.

* Publishing the image anonymously. <!-- example is missing -->
* Publishing the image using tags. ([example](../examples/tools/publishing-custom-images.md))
* Using the tag or hash in a requestor script. ([example](../examples/working-with-images.md))

## Dockerfile command support 

All the Docker commands that are related to the definition of the image content are supported. So if you can create a Docker image from your Dockerfile, you should be able to convert it to a Golem image.

Please take into account the following points:

### VOLUME

If your application requires transferring files to and/or from the provider node, you'll need to specifically define a place (or places) in the container's file system that will be used for file transfers. These places are called volumes.

Additionally, in the case of large files, it is recommended to generate and store them in directories defined using the VOLUME clause. In such cases, they are stored on the host's disk drive and do not consume the storage available in RAM.

### WORKDIR

This will define the default directory to be used in shell commands sent to a remote computer once the VM is running.

### ENTRYPOINT, CMD

Because of how Golem's VM execution unit works, Docker's `ENTRYPOINT` and `CMD` statements are effectively ignored. You need to pass the relevant initialization commands as part of the task sent to a remote computer as a part of your task function or use `beforeEach()` method. See examples.

## Images, Virual Machines and file system content

When you engage a provider, its provider_agent runs exe-unit (a runtime) to run your image or WASM code. In the case of Golem Images that are run in VMs, the runtime being used is ya-runtime-vm.

In Golem terms such an image run on the provider is called an Activity. Activities are utilized to execute requestor tasks. Unless an activity is terminated, all subsequent tasks that will be scheduled on the same provider will use the same activity - meaning the same image container with its history. That means that within the lifecycle of the Activity the state of the file system is maintained. One consequence is that any filesystem changes - be it updates to volumes or to other locations within the VM - performed within a single execution of a task will still be present when subsequent tasks get executed.

## Next steps

### Installation guide and other examples

!!! golem-icon ""

    [Installing gvmkit-build](../examples/tools/gvmkit-build-installation.md)

### Custom Golem image Step-by-step Tutorial

!!! golem-icon ""

    [Creating custom Golem Image](../tutorials/building-custom-image.md)

### Golem images FAQ

!!! golem-icon ""

    [Golem Images FAQ](./golem-images-faq.md)