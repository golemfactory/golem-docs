---
title: Golem images and usage explained
description: Learn what a Golem image is and how to create and use one
---

# Golem images and usage explained

A Golem image is an environment that is used for applications run on Golem. The Golem image will include everything that is required for your application to run in a new environment: copied files from your own machine, downloaded files from the internet, configurations and settings, dependencies, and more.

Golem images are based off Docker images and are converted using the gvmkit-build tool to a `.gvmi` file. The reason for using specific Golem images is to save file space and speed up transfer speeds on the images.

The general process of creating a Golem image looks like this:

- 1) Create/specify a Dockerfile
- 2) Build a Docker Image from the Dockerfile
- 3) Convert to Golem using gvmkit-build ([example](examples/converting-an-image.md))

The process of publishing and using Golem images differ depending on how you want to use the images and in which way. Tags can be used to have readable names for letting providers download your image, but take time to set up, and hashes are easy to set up but needs to be switched out for every updated version.

- 4) Publishing the image to the registry ([example](examples/pushing-to-registry.md))
- 5) Using the tag or hash in a requestor script ([example](examples/using-golem-image.md))

There are a few caveats that Golem images have, such as having both `ENTRYPOINT` and `CMD` instructions are done through the requestor script and not the Dockerfile. Besides this, the limitations and features from the exeUnits apply. <!-- For more information, go to [this section](). -->


## Installation guide and other references

<insert buttons for installing, simple usage (converting, pushing, using in requestor script)>

!!! golem-icon ""

    [Installing gvmkit-build](examples/installing-gvmkit-build.md){ .md-button .md-button--primary }

    [Converting an image from Docker to Golem](examples/converting-an-image.md){ .md-button .md-button--primary }

    [Pushing an image to the registry](examples/pushing-to-registry.md){ .md-button .md-button--primary }

    [Using an image in a requestor script](examples/using-golem-image.md){ .md-button .md-button--primary }

    Note: more information can be found in the [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).

## Tutorial on the process of creating and using a Golem image

!!! golem-icon ""

    [1. Creating and building our Docker image](tutorial/creating-our-docker-image.md){ .md-button .md-button--primary }

    [2. Converting to Golem and publishing to registry](tutorial/converting-docker-to-golem.md){ .md-button .md-button--primary }

    [3. Using the Golem image in a requestor script](tutorial/using-the-golem-image.md){ .md-button .md-button--primary }