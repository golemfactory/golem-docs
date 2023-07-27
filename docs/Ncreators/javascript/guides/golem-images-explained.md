---
title: Golem images and usage explained
description: Learn what a Golem image is and how to create and use one
---




# Golem images and usage explained


## Golem Image

A Golem image is a software package that contains all tools, libraries, tools, configurations, dependencies and settings that are required to execute your tasks on a remote computer. The image is used to create the environment (VM) where your tasks are executed.

## Golem image creation 

Golem images are based on Docker images that are converted using the gvmkit-build tool to a `.gvmi` file format. The reason for using a specific Golem image format is to save file space and speed up transfer speeds of the images.

The general process of creating a Golem image looks like this:

* Define the image content in Docker format (Dockerfile)
* Build a Docker image from the Dockerfile
* Convert to Golem image using gvmkit-build ([example](../examples/tools/converting-an-image.md))

See our [Create Golem Image Tutorial](#custom-golem-image-step-by-step-tutorial) and [Examples](#installation-guide-and-other-examples) section to see how to create an image and examples on how to use the tool. 

## Golem image use

Image must be downloaded to a remote computer therefore we need to publish it. Golem provides a ‘repository’ to publish images. Images can be identified by their image hash or a tag name. The type of identifier depends on the way you publish your image and is driven by intended usage.

If you intend using your image just for testing it is enough to use image hash and upload them anonymously to the registry. If you intend to work on a more complex project where you would like to use several different versions of your image or collaborate with other users - you should consider creating an account in the registry and using tags to describe your images. Both cases are illustrated in our examples.

* Publishing the image anonymously. <!-- example is missing -->
* Publishing the image using tags. ([example](../examples/tools/publishing.md))
* Using the tag or hash in a requestor script. ([example](../examples/images.md))

## Dockerfile command support 

Basically all the Docker commands that are related to definition of the image content are supported. So if you are able to create a Docker image from your Dockerfile, you should be able to convert it to a Golem image.

Please take into account the following points:

### VOLUME

If your application requires transferring files to and/or from the provider node, you'll need to specifically define a place (or places) in the container's file system that will be used for file transfers. These places are called volumes.

Additionally, in case of large files, it is recommended to generate and store them in directories defined using the VOLUME clause. In such case they are stored on the host's disk drive and do not consume the storage available in RAM.

### WORKDIR

This will define the default directory to be used in shell commands sent to remote computer once the VM is running.

### ENTRYPOINT, CMD

Because of how Golem's VM execution unit works, Docker's `ENTRYPOINT` and `CMD` statements are effectively ignored. You need to pass the relevant initialization commands as part of the task sent to a remote computer as a part of your task function or use `beforeEach` method. See examples.

## Next steps

### Installation guide and other examples

!!! golem-icon ""

    [Installing gvmkit-build](../examples/tools/installing-gvmkit-build.md){ .md-button .md-button--primary }

### Custom Golem image Step by step Tutorial

!!! golem-icon ""

    [Creating custome Golem Image](../tutorials/image.md){ .md-button .md-button--primary }