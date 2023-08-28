---
title: Creating and using images on Golem
description: Creating and using images on Golem
---

# Introduction

This article will go through the process of creating a Dockerfile, building a Docker image, then converting it to a Golem image and using it in a requestor script.

{% alert level="info" %}

This the tutorial is designed for: OS X 10.14+, Ubuntu 18.04 or 20.04, and Windows

Prerequisites:

- Have Docker installed and Docker service available. If you don't have Docker installed follow these [instructions](https://www.docker.com/products/docker-desktop)
- Gvmkit-build installed ([see instructions](/docs/creators/javascript/examples/tools/gvmkit-build-installation))
- Yagna service installed and running with `try_golem` app-key configured ([see instructions](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors))

{% /alert %}

## Creating the Dockerfile

This is the simple `Dockerfile` we are going to use, using the `Node` base image, creating one volume, and setting the working directory. Simply create a file with the name `Dockerfile`, without any file extension, and paste the following contents:

```dockerfile
FROM node:latest
WORKDIR /golem/work
VOLUME /golem/work
COPY Dockerfile /golem/info/description.txt
COPY Dockerfile /golem/work/info.txt
```

Note we copy Dockerfile content into 2 different locations:
- to /golem/info (this folder is not defined as VOLUME)
- and to /golem/work (this folder is defied as VOLUME)


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

![](/image_tutorial_build.png)

{% alert level="info" %}

Note that the image won't be turned into a file in the same directory. The location of the actual Docker image file depends on the Docker and your operating system version. Please consult the Docker manual for additional information.

{% /alert  %}

## Converting from Docker to Golem and uploading it to the registry

Now when you have a Docker image built, we can convert it to a Golem image. To save time, we will also upload it to the registry with the same command. To do this, you need to run the appropriate command that uses `gvmkit-build` to convert and push the image `golem-node` to the registry.

{% alert level="info" %}

If you do not have `gvmkit-build` installed please follow [installation intructions](/docs/creators/javascript/examples/tools/gvmkit-build-installation). You can also use it without installation using `npx` or `pipx` commands.

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

![](/image_tutorial_upload.png)

The hash is found after the `image link`, which in this case gives us the hash `8b238595299444d0733b41095f27fadd819a71d29002b614c665b27c`. If you ever lose your hash, you can always recover/re-generate it by running the same command again.

## Using the image in a requestor script

Let's use the newly created image in a requestor script and ensure this is the one we have just made.

We need to prepare our environment:

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/golem-js
```

We can now create our `index.mjs` requestor file, with the `package: "8b238595..."` matching our image hash.

{% tabs %}
{% tab label="JavaScript" %}
**`index.mjs`**

```js
import { TaskExecutor } from "@golem-sdk/golem-js";

(async () => {
  const executor = await TaskExecutor.create({
    package: "8b238595299444d0733b41095f27fadd819a71d29002b614c665b27c",    
    yagnaOptions: { apiKey: 'try_golem' }
  });


  const result = await executor.run(
        async (ctx) =>  {
    
          console.log('Description.txt: ',(await ctx.run("cat /golem/info/description.txt")).stdout);
          console.log('/golem/work content: ', (await ctx.run("ls /golem/work")).stdout);
        });
        

  


  await executor.end(); 
    
  
})();

```

{% /tab  %}
{% /tabs %}

In the script, we specify that our task should use the newly created image (indicated by `hash`: `8b238595...`). We try to run two commands. The first one prints the the content of the `decription.txt` file (it is a copy of the Dockerfile used to create the image). The second command should list the content of the /golem/work folder. We copied some files there as well (check the content of the `description.txt` file), but as /golem/work is defined as VOLUME and created as new when VM is started, this folder will be empty.

## Running the script

Run the following command after ensuring the Yagna service is running and configured correctly:

`node index.mjs`

You have successfully created and used your Golem image in a requestor script!

![](/image_tutorial_upload.png)

Note that the content of the `description.txt` file that was created in the  /golem/info folder is accessible, while the /golem/work folder is empty.

{% docnavigation title="Next steps" %}

- Try your image in one of [examples](/docs/creators/javascript/examples)!

{% /docnavigation %}
