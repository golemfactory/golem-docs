---
title: Pushing an image to the registry
description: Guide on how to push a Golem image to the registry using gvmkit-build
---

# Pushing an image to the registry

## Prerequisites

!!! info

    * OS X 10.14+, Ubuntu 18.04 or 20.04, or Windows
    * Having followed the [gvmkit-build installation](installing-gvmkit-build.md)
    * Having [converted your Docker image to Golem](converting-an-image.md)

??? info "Pushing your Golem image to the registry (hash-based)"

    The examples below show how to quickly convert and push a Docker image tagged `golem-example`. If the image is already converted to `.gvmi`, it will only be pushed. The hash is found after the `image link` section of the console output.

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
        gvmkit-build golem- --push --nologin
        ```

??? info "Pushing your Golem image to the registry (tag-based)"

    1. Create an account on the [registry portal](https://registry.golem.network/).

    2. Create a repository on the registry portal.

    3. Note down your personal access token from the registry portal.

    4. We will show you how to convert and push a local Docker image tagged `docker_image` to a repository in the following format: `username/repository_name:tag`.

        !!! info

            Note that `docker_image`, `username`, `repository_name`, and `tag` will depend on the names you choose to use. The `tag` can be `latest` to constantly keep a latest version, or you can use a versioning system and e.g. make it `v0.0.1` and so on.

    5. Find the appropriate command below to convert and push your image and be ready to enter your details (login information and personal access token).

    === "Python/pip"
        === "Ubuntu"
            ```bash
            python3 -m gvmkit_build docker_image --push-to username/repository_name:tag
            ```
        === "macOS"
            ```bash
            python3 -m gvmkit_build docker_image --push-to username/repository_name:tag
            ```
        === "Windows"
            ```bash
            python -m gvmkit_build docker_image --push-to username/repository_name:tag
            ```

    === "JavaScript/npm"

        ```bash
        npx gvmkit-build docker_image --push-to username/repository_name:tag
        ```

    === "Rust/cargo"

        ```bash
        gvmkit-build docker_image --push-to username/repository_name:tag
        ```

!!! golem-icon "Next steps:"

    ??? quote "Return"

        [Golem images and usage explained](../golem-images-explained.md){ .md-button .md-button--primary }

    ??? question "Continue"

        [Installing gvmkit-build](installing-gvmkit-build.md){ .md-button .md-button--primary }

        [Converting an image from Docker to Golem](converting-an-image.md){ .md-button .md-button--primary }

        [Using an image in a requestor script](using-golem-image.md){ .md-button .md-button--primary }

        Note: more information can be found in the [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).