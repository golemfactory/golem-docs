---
title: Converting an image
Description: Guide on how to convert an image from Docker to Golem using gvmkit-build
---

# Converting an image

!!! info

    * The tool works on: OS X 10.14+, Ubuntu 18.04 or 20.04, and Windows
    * Required: [gvmkit-build installation](installing-gvmkit-build.md)
    * Basic knowledge of Docker along with the Docker service running
    
    (Note: you can use npx and pipx tools to run gvmkit-build without installation). 

Golem images are based on Docker images, which means that it is required to have a Docker image to be able to convert it to a Golem image. We will include a simple Dockerfile just to show how the tool and its commands work for demonstration purposes, and you are free to create your own Dockerfile.

!!! Note
    If you don't have Docker installed follow these instructions: https://www.docker.com/products/docker-desktop.


## Building your Docker image

Create a `Dockerfile` file with the following content:

```bash
FROM debian:latest
VOLUME /golem/input /golem/output
WORKDIR /golem/work
``` 

Now build a Docker image tagged `golem-example` using the above Dockerfile. 

=== "Linux"

    ```bash
    docker build . -t golem-example
    ```

=== "macOS"

    ```bash
    docker build . --platform linux/amd64 -t golem-example
    ```

=== "Windows"

    ```bash
    docker build . -t golem-example
    ```


## Converting Docker image to a Golem image

The examples below show how to convert the Docker image tagged `golem-example` to a `.gmvi` file in the current directory.

=== "JavaScript/npm"
    ```bash
    npx gvmkit-build golem-example
    ```
=== "Python/pip"
    === "Ubuntu"
        ```bash
        python3 -m gvmkit_build golem-example
        ```
    === "macOS"
        ```bash
        python3 -m gvmkit_build golem-example
        ```
    === "Windows"
        ```bash
        python -m gvmkit_build golem-example
        ```


## Converting and publishing your image at once (hash-based)

This example explains how to convert and publish an image that will be identified by its hash. The examples assume you have a Docker image tagged `golem-example` already created. 

The hash is found in the `image link` line of the console output:

```bash
 -- image link (for use in SDK): dcd99a5904bebf7ca655a833b73cc42b67fd40b4a111572e3d2007c3
``` 

Note if the image was already converted to `.gvmi`, it will only be pushed. 

=== "JavaScript/npm"
    ```bash
    gvmkit-build golem-example --push --nologin
    ```
=== "Python/pip"
    === "Ubuntu"
        ```bash
            python3 -m gvmkit_build golem-example --push --nologin
        ```
    === "macOS"
        ```bash
            python3 -m gvmkit_build golem-example --push --nologin
        ```
    === "Windows"
        ```bash
            python -m gvmkit_build golem-example --push --nologin
        ```

!!! golem-icon "Next steps:"

    [Publishing an image in the registry](publishing.md){ .md-button .md-button--primary }

    Note: more information can be found in the [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).
