---
title: Creating and using images on Golem
Description: Creating and using images on Golem
---

# Creating and using images on Golem

This article will go through the process of creating a Dockerfile, building a Docker image, then converting it to a Golem image and using it in a requestor script.

!!! info
    
    * Tutorial is designed for: OS X 10.14+, Ubuntu 18.04 or 20.04, and Windows
    * Docker service running is required
    * Required to have followed the [gvmkit-build installation](../examples/tools/installing-gvmkit-build.md)
    * Required: an installation of Yagna


!!! Note
    If you don't have Docker installed follow these instructions: https://www.docker.com/products/docker-desktop.


## Creating the Dockerfile

This is the simple `Dockerfile` we are going to use, using the `Debian` base image, creating one volume, and setting the working directory. Simply create a file with the name `Dockerfile`, without any file extension, and paste the following contents:

```dockerfile
FROM debian:latest
VOLUME /golem/work
WORKDIR /golem/work
```

## Building the Docker image

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

The output should look like this:

```
[+] Building 2.1s (6/6) FINISHED
 => [internal] load build definition from Dockerfile                                                               0.0s
 => => transferring dockerfile: 96B                                                                                0.0s
 => [internal] load .dockerignore                                                                                  0.0s
 => => transferring context: 2B                                                                                    0.0s
 => [internal] load metadata for docker.io/library/debian:latest                                                   1.9s
 => [1/2] FROM docker.io/library/debian:latest@sha256:3d868b5eb908155f3784317b3dda2941df87bbbbaa4608f84881de66d9b  0.0s
 => CACHED [2/2] WORKDIR /golem/work                                                                               0.0s
 => exporting to image                                                                                             0.1s
 => => exporting layers                                                                                            0.0s
 => => writing image sha256:a77505dbbedf13b43beca98a3a93e55a8f32acf0b1a8279c647c8d73ce281cc5                       0.1s
 => => naming to docker.io/library/golem-example                                                                   0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
```

!!! info

    Note that the image won't be turned into a file in the same directory. You don't need to see this file, but if you do, search the internet for where images are stored in your operating system.


## Converting from Docker to Golem and uploading it to the registry

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
    gvmkit-build golem-example --push --nologin
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
 -- Image id: 6cd25ac0a005cfb24538f44d6c683c688c41d07b9f81633be2dba3dc77a30db5
 -- Image size: 116.48 MB
 -- GVMI image output path: C:\Users\user\Desktop\convert_and_push_test\golem-example-latest-6cd25ac0a0.gvmi
 * Step3 - create container from image: golem-example ...
 -- Container id: 888e84f71116
 * Step4 - tool image used for gvmi generation already exists: scx1332/squashfs ...
 -- Image command: mksquashfs /work/in /work/out/image.squashfs -info -comp lzo -noappend
 -- Tool container id: cbff22637454
 * Step5 - copy data between containers 888e84f71116 and cbff22637454 ...
 -- Copying data finished. Copied 121286144 bytes vs 116484482 bytes image
 * Step6 - Starting tool container to create image: cbff22637454
 * Step7 - Waiting for tool container to finish...
 -- Tool container finished
 * Step8 - Adding metadata... -- container metadata (399 bytes) added
 -- Output gvmi image size: 51.18 MB (51184015 bytes), path: C:\Users\user\Desktop\convert_and_push_test\golem-example-latest-6cd25ac0a0.gvmi
 * Writing file descriptor to C:\Users\user\Desktop\convert_and_push_test\golem-example-latest-6cd25ac0a0.gvmi.descr.bin
 -- file descriptor created successfully
 -- image link (for use in SDK): 28704b5186fb46099b6138e6f1db814a631f6963da456492476d0db9
Uploading image to golem registry: https://registry.golem.network
 * Uploading image descriptor to: https://registry.golem.network
 -- descriptor uploaded successfully
 -- download link: https://registry.golem.network/download/55170fad5369f44406d6aa8b9a1e8a3e793cf81c7c544a648f988d7119b8a2af
 -- chunked upload finished successfully
 -- image validated successfully
```

The hash is found after the `image link`, which in this case gives us the hash `28704b5186fb46099b6138e6f1db814a631f6963da456492476d0db9`. If you ever lose your hash, you can always recover/re-generate it by running the same command again.

## Preparing the environment

To include the `yajsapi` library, we need to prepare our environment with the following commands:

```
npm init
npm install yajsapi
```

We can now create our `index.mjs` requestor file, with the `package: ...` matching our image hash.

=== "JavaScript/npm"
    **index.mjs**
    
    ```js
    import { TaskExecutor } from "yajsapi";
    (async () => {
    const executor = await TaskExecutor.create({ package: "28704b5186fb46099b6138e6f1db814a631f6963da456492476d0db9" });
    await executor.run(async (ctx) => {
        await ctx.uploadFile("image_description.txt", "/golem/work/image_description.txt");
        var result = (await ctx.run('cat image_description.txt')).stdout;
        console.log(result);
    });
    await executor.end();
    })();
    ```

Lastly, create an `image_description.txt` file to be uploaded and used on the provider:

```txt
The image hash is `28704b5186fb46099b6138e6f1db814a631f6963da456492476d0db9`. By altering the hash to another value  - corresponding to a different image, you ask the provider use anotjhe image to create remote environment when you will run you tasks.

The result is the console output of the `cat /golem/work/image_description.txt` command. By changing this, we can experiment with other functionality.

We also run the uploadFile command to upload the text file you're reading right now from the local machine to the provider machine.
```

## Running the script

Run the following command after ensuring the Yagna service is running and configured correctly:

```node index.mjs```

You have successfully created and used your Golem image in a requestor script!

<!-- !!! info

Note that the full path to a file is required in all commands inside a requestor script, regardless if the defined workign directory by `WORKDIR` instruction in your Dockerfile. -->

<!--
!!! "Challenge yourself:"

    Try to see if you can change the command so that it logs out the contents of the file or if you can figure out how to download the file to your computer.
-->