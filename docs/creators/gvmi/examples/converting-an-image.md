---
title: Converting an image
description: Guide on how to convert an image from Docker to Golem using gvmkit-build
---

# Converting an image

## Prerequisites

!!! info

    * OS X 10.14+, Ubuntu 18.04 or 20.04, or Windows
    * Basic knowledge of Docker along with an installation
    * Having followed the [gvmkit-build installation](installing-gvmkit-build.md)

To convert an image from Docker to Golem using gvmkit-build, you need to:

??? info "1. Build your Docker image"

    Here are examples for each operating system that works with the `Dockerfile` provided in [the three-part tutorial](../tutorial/creating-our-docker-image.md). The examples below show how to build a Docker image with the tag `golem-example` in the current directory. For more advanced builds, refer to Docker documentation or unofficial sources to learn more.

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

??? info "2a. Convert your Docker image to a Golem image"

    The examples below show how to convert the Docker image tagged `golem-example` to a `.gmvi` file in the current directory of the terminal session.

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

    === "JavaScript/npm"

        ```bash
        npx gvmkit-build golem-example
        ```

    === "Rust/cargo"

        ```bash
        gvmkit-build golem-example
        ```

??? info "2b. Convert and push your image at once (hash-based)"

    This example will only show the hash-based command, for more commands (e.g. tag-based ones), please refer to [this example](pushing-to-registry.md). The examples below show how to quickly convert and push a Docker image tagged `golem-example`. If the image is already converted to `.gvmi`, it will only be pushed. The hash is found after the `image link` section of the console output.

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

    === "JavaScript/npm"

        ```bash
        npx gvmkit-build golem-example --push --nologin
        ```

    === "Rust/cargo"

        ```bash
        gvmkit-build golem-example --push --nologin
        ```

!!! golem-icon "Next steps:"

    ??? quote "Return"

        [Golem images and usage explained](../golem-images-explained.md){ .md-button .md-button--primary }

    ??? question "Continue"

        [Installing gvmkit-build](installing-gvmkit-build.md){ .md-button .md-button--primary }

        [Pushing an image to the registry](pushing-to-registry.md){ .md-button .md-button--primary }

        [Using an image in a requestor script](using-golem-image.md){ .md-button .md-button--primary }

        Note: more information can be found in the [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).