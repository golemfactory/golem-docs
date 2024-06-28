---
title: Docker to Golem Image Conversion and Usage Tutorial
description: Step-by-step tutorial on creating a Docker image, converting it to a Golem-compatible format (GVMI, .gvmi), and integrating it into a requestor script.
type: Tutorial
---

## Introduction

This article will go through the process of creating a Dockerfile, building a Docker image, then converting it to a Golem image and using it in a requestor script.

## Prerequisites

- Have Docker installed and Docker service available. If you don't have Docker installed follow these [instructions](https://www.docker.com/products/docker-desktop)
- Gvmkit-build installed ([see instructions](/docs/creators/tools/gvmkit/gvmkit-build-installation))
- Yagna service installed and running with the `try_golem` app-key configured ([see instructions](/docs/creators/tools/yagna/yagna-installation-for-requestors))

## Creating the Dockerfile

This is the simple `Dockerfile` we are going to use, using the `Node` base image, creating one volume, and setting the working directory. Simply create a file with the name `Dockerfile`, without any file extension, and paste the following contents:

```dockerfile
FROM node:latest
WORKDIR /golem/work
VOLUME /golem/work
COPY Dockerfile /golem/info/description.txt
COPY Dockerfile /golem/work/info.txt
```

Note we copy the Dockerfile content into 2 different locations:

- to /golem/info (this folder is not defined as VOLUME)
- and to /golem/work (this folder is defined as VOLUME)

## Building the Docker image

To build the Docker image from the `Dockerfile`, we can run the following command in the same directory (`.`) as the Dockerfile to build an image tagged `golem-node`:

{% tabs %}
{% tab label="Linux" %}

```bash
docker build -t golem-node .
```

{% /tab %}
{% tab label="macOS" %}

```bash
docker build --platform linux/amd64 -t golem-node .
```

{% /tab %}
{% tab label="Windows" %}

```bash
docker build -t golem-node .
```

{% /tab %}
{% /tabs %}

The output should look like this:

![Terminal output of building a docker image](/image_tutorial_build.png)

{% alert level="info" %}

Note that the image won't be turned into a file in the same directory. The location of the actual Docker image file depends on the Docker and your operating system version. Please consult the Docker manual for additional information.

{% /alert  %}

## Converting from Docker to Golem and uploading it to the registry

Now when you have a Docker image built, we can convert it to a Golem image. To save time, we will also upload it to the registry with the same command. To do this, you need to run the appropriate command that uses `gvmkit-build` to convert and push the image `golem-node` to the registry.

{% alert level="info" %}

If you do not have `gvmkit-build` installed please follow [installation intructions](/docs/creators/tools/gvmkit/gvmkit-build-installation). You can also use it without installation using `npx` or `pipx` commands.

{% /alert  %}

{% tabs %}
{% tab label="JavaScript" %}

```bash
gvmkit-build golem-node --push --nologin
```

{% /tab %}
{% tab label="Python" %}

```bash
gvmkit-build golem-node --push --nologin
```

{% /tab %}
{% /tabs %}

After running the command, you will see an output that looks like this:

![Image showing the output of the command](/image_tutorial_upload.png)

The hash is found after the `image link`, which in this case gives us the hash `8b238595299444d0733b41095f27fadd819a71d29002b614c665b27c`. If you ever lose your hash, you can always recover/re-generate it by running the same command again.

## Using the image in a requestor script

Let's use the newly created image in a requestor script and ensure this is the one we have just made.

We need to prepare our environment:

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/task-executor
```

We can now create our `index.mjs` requestor file, with the `package: "8b238595..."` matching our image hash.

{% tabs %}
{% tab label="JavaScript" %}

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/tutorials/building-custom-image/index.mjs" language="javascript" /%}

{% /tab  %}
{% /tabs %}

In the script, we specify that our task should use the newly created image (indicated by `hash`: `8b238595...`). We try to run two commands. The first one prints the content of the `decription.txt` file (it is a copy of the Dockerfile used to create the image). The second command should list the content of the /golem/work folder. We copied some files there as well (check the content of the `description.txt` file), but as /golem/work is defined as VOLUME and created as new when VM is started, this folder will be empty.

## Running the script

Run the following command after ensuring the Yagna service is running and configured correctly:

`node index.mjs`

You have successfully created and used your Golem image in a requestor script!

![Image showing successfull use of a golem image in a script](/image_tutorial_upload.png)

Note that the content of the `description.txt` file that was created in the /golem/info folder is accessible, while the /golem/work folder is empty.

{% docnavigation title="Next steps" %}

- Try your image in one of [examples](/docs/creators/javascript/examples)!

{% /docnavigation %}
