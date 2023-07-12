---
title: Converting Docker to Golem
description: Converting our Docker image to a Golem image
---

# Converting our Docker image to Golem

This article will go through the process of converting a Docker image to a Golem image. In the [last part of this tutorial](creating-our-docker-image.md), we ended up with a Docker image we tagged `golem-example`, which in the end of this article will be turned into a Golem image uploaded to the registry accessible via a hash.

## Prerequisites

!!! info

    * Having followed the [gvmkit-build installation](../examples/installing-gvmkit-build.md)

!!! warning

    **You must have followed the tutorial every step from the first part: [1) Creating our Docker image](creating-our-docker-image.md)**

## Converting and uploading the Golem image to the registry

Now when you have a Docker image built, we can convert it to a Golem image. To save time, we will also upload it to the registry with the same command. To do this, you need to run the appropriate command that uses `gvmkit-build` to convert and push the image `golem-example` to the registry.

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

After running the command, you will see an output that looks like this:

```bash
Building image: golem-example
 -- connected to docker engine platform: Docker Engine - Community version: 20.10.12
 * Step1 - image for given name golem-example found, image creation skipped
 * Step2 - inspect docker image: golem-example ...
 -- Image name: golem-example
 -- Image id: 4109ac78c6aea8ca4c704cf460b146ed89910496850a9e232a8ae32d473d65d3
 -- Image size: 116.48 MB
 -- GVMI image output path: C:\Users\user\Desktop\gvmkitbuild\golem-example-latest-4109ac78c6.gvmi
 * Step3 - create container from image: golem-example ...
 -- Container id: 3ec32305ffc6
 * Step4 - tool image used for gvmi generation already exists: scx1332/squashfs ...
 -- Image command: mksquashfs /work/in /work/out/image.squashfs -info -comp lzo -noappend
 -- Tool container id: a4c459161b1b
 * Step5 - copy data between containers 3ec32305ffc6 and a4c459161b1b ...
 -- Copying data finished. Copied 121286144 bytes vs 116484478 bytes image
 * Step6 - Starting tool container to create image: a4c459161b1b
 * Step7 - Waiting for tool container to finish...
 -- Tool container finished
 * Step8 - Adding metadata... -- container metadata (419 bytes) added
 -- Output gvmi image size: 51.18 MB (51184035 bytes), path: C:\Users\user\Desktop\gvmkitbuild\golem-example-latest-4109ac78c6.gvmi
 * Writing file descriptor to C:\Users\user\Desktop\gvmkitbuild\golem-example-latest-4109ac78c6.gvmi.descr.bin
 -- file descriptor created successfully
 -- image link (for use in SDK): b43b9ae9a413768e3c764b5e4fdfbb0f607b2bcdde941b731bdb433f
Uploading image to golem registry: https://registry.golem.network
 * Uploading image descriptor to: https://registry.golem.network
 -- descriptor uploaded successfully
 -- download link: https://registry.golem.network/download/f657ce0a65d7d635e7585e2e4b8fdf100024367a72c702ec8eb558063652596d
 -- chunked upload finished successfully
 -- image validated successfully
```

And we are done with this step. The hash is found after the `image link`, which in this case gives us the hash `b43b9ae9a413768e3c764b5e4fdfbb0f607b2bcdde941b731bdb433f` to be used in a requestor script.

!!! golem-icon "Next steps:"

    ??? quote "Return"

        [Golem images and usage explained](../golem-images-explained.md){ .md-button .md-button--primary }

    ??? question "Continue"

        [3. Using the Golem image in a requestor script](using-the-golem-image.md){ .md-button .md-button--primary }