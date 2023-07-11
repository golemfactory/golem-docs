---
title: Creating our Docker image
description: Creating our Docker image and explaining some limitations/caveats
---

# Creating our Docker image

This article will go through the process of creating a Dockerfile, building a Docker image, and explaining some limitations and caveats with Golem, to later be converted to a Golem image used by a requestor script.

## Prerequisites

!!! info
    
    * OS X 10.14+, Ubuntu 18.04 or 20.04, or Windows
    * Basic knowledge of Docker along with an installation

## Example Dockerfile

This is our simple `Dockerfile` we are going to use, using the debian base image, creating two volumes, and changing the work directory. Simply create a file with the name `Dockerfile`, without any file extension, and paste the following contents:

```dockerfile
FROM debian:latest
VOLUME /golem/input /golem/output
WORKDIR /golem/work
```

??? info "Explanation of the non-obvious parts of the Dockerfile"

    ### Missing start-up instruction

    In the Dockerfile, one caveat is made clear: there is no `ENTRYPOINT`, `CMD`, or similar instruction to start any application. This is because commands are run from the requestor scripts and not on start-up. However, `RUN` instructions are still supported and are run when building the image.

    ### VOLUME

    If your application requires transferring files between the requestor and provider, you will need to specify volumes. The example creates two volumes: one for incoming file transfers and one for outgoing file transfers.

    ```dockerfile
    VOLUME /golem/input /golem/output
    ```

## Building the image

To build the Docker image from the `Dockerfile`, we can run the following command in the same directory (`.`) as the Dockerfile to build an image tagged `golem-example`:

=== "Ubuntu"

    ```bash
    docker build -t golem-example .
    ```

=== "macOS"

    ```bash
    docker build --platform linux/amd64 -t golem-example .
    ```

=== "Windows"

    ```bash
    docker build -t golem-example .
    ```

And we are done with this step. We have now built our Docker image, which in the next step will be converted to a Golem image and be published to the registry for it to be accessible for providers to download.


!!! golem-icon "Next steps:"

    ??? quote "Return"

        [Golem images and usage explained](../golem-images-explained.md){ .md-button .md-button--primary }

    ??? question "Continue"

        [2. Converting to Golem and publishing to registry](converting-docker-to-golem.md){ .md-button .md-button--primary }