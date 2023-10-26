---
title: Creating and using images on Golem
description: Creating and using images on Golem
type: tutorial
---

# Introduction

This article will go through the process of creating a Dockerfile, building a Docker image, then converting it to a Golem image and using it in a requestor script.

{% alert level="info" %}

This the tutorial is designed for: OS X 10.14+, Ubuntu 18.04 or 20.04, and Windows

Prerequisites:

- Have Docker installed and Docker service available. If you don't have Docker installed follow these [instructions](https://www.docker.com/products/docker-desktop)
- Gvmkit-build installed ([see instructions](/docs/creators/python/examples/tools/gvmkit-build-installation))
- Yagna service installed and running with `try_golem` app-key configured ([see instructions](/docs/creators/python/examples/tools/yagna-installation-for-requestors))

{% /alert %}

## Creating the Dockerfile

This is the simple `Dockerfile` we are going to use, using the `Node` base image, creating one volume, and setting the working directory. Simply create a file with the name `Dockerfile`, without any file extension, and paste the following contents:

```dockerfile
FROM python:latest
WORKDIR /golem/work
VOLUME /golem/work
COPY Dockerfile /golem/info/description.txt
COPY Dockerfile /golem/work/info.txt
```

Note we copy Dockerfile content into 2 different locations:

- to /golem/info (this folder is not defined as VOLUME)
- and to /golem/work (this folder is defied as VOLUME)

## Building the Docker image

To build the Docker image from the `Dockerfile`, we can run the following command in the same directory (`.`) as the Dockerfile to build an image tagged `python-example`:

{% tabs %}
{% tab label="Linux" %}

```bash
docker build -t python-example .
```

{% /tab %}
{% tab label="macOS" %}

```bash
docker build --platform linux/amd64 -t python-example .
```

{% /tab %}
{% tab label="Windows" %}

```bash
docker build -t python-example .
```

{% /tab %}
{% /tabs %}

The output should look like this:

![Docker Image Build log](/image_tutorial_build.png)

{% alert level="info" %}

Note that the image won't be turned into a file in the same directory. The location of the actual Docker image file depends on the Docker and your operating system version. Please consult the Docker manual for additional information.

{% /alert  %}

## Converting from Docker to Golem and uploading it to the registry

Now when you have a Docker image built, we can convert it to a Golem image. To save time, we will also upload it to the registry with the same command. To do this, you need to run the appropriate command that uses `gvmkit-build` to convert and push the image `python-example` to the registry.

{% alert level="info" %}

If you do not have `gvmkit-build` installed please follow [installation intructions](/docs/creators/javascript/examples/tools/gvmkit-build-installation). You can also use it without installation using `pipx` commands.

{% /alert  %}

```bash
gvmkit-build python-example --push --nologin
```

After running the command, you will see an output that looks like this:

![Golem Image upload log](/image_tutorial_upload.png)

The hash is found after the `image link`, which in this case gives us the hash `7e31861bd912a201f363cb6bdddcc5a00e069cec1c3ecc5afee292bc`. If you ever lose your hash, you can always recover/re-generate it by running the same command again.

## Using the image in a requestor script

Let's use the newly created image in a requestor script and ensure this is the one we have just made.

We need to prepare our environment:

```bash
mkdir golem-example
cd golem-example
```

{% tabs %}
{% tab label="Linux" %}

```shell
python3 -m venv --clear ~/.envs/image-python-tutorial
source ~/.envs/image-python-tutorial/bin/activate
```

{% /tab  %}
{% tab label="Windows" %}

```shell
python -m venv --clear %HOMEDRIVE%%HOMEPATH%\.envs\image-python-tutorial
%HOMEDRIVE%%HOMEPATH%\.envs\image-python-tutorial\Scripts\activate.bat
```

{% /tab  %}
{% /tabs %}

We can now create our `requestor.py` requestor file, with the `package: "7e31861bd912a201..."` matching our image hash.

```python
#!/usr/bin/env python3
import asyncio
from typing import AsyncIterable

from yapapi import Golem, Task, WorkContext
from yapapi.log import enable_default_logger
from yapapi.payload import vm


async def worker(context: WorkContext, tasks: AsyncIterable[Task]):
    async for task in tasks:
        script = context.new_script()
        future_result = script.run("/bin/sh", "-c", "cat /golem/info/description.txt")

        yield script

        res_0 = await future_result
        script = context.new_script()
        future_result = script.run("/bin/sh", "-c", "ls -l /golem/work)

        yield script
        task.accept_result(result=[res_0, await future_result)


async def main():
    package = await vm.repo(
        image_hash="7e31861bd912a201f363cb6bdddcc5a00e069cec1c3ecc5afee292bc",
    )

    tasks = [Task(data=None)]

    async with Golem(budget=1.0, subnet_tag="public") as golem:
        async for completed in golem.execute_tasks(worker, tasks, payload=package):
            print(completed.result[0].stdout)
            print(completed.result[1].stdout)


if __name__ == "__main__":
    enable_default_logger(log_file="hello.log")

    loop = asyncio.get_event_loop()
    task = loop.create_task(main())
    loop.run_until_complete(task)

```

In the script, we specify that our task should use the newly created image (indicated by `hash`: `7e31861bd912a201...`). We run two commands. The first one prints the content of the `decription.txt` file (it is a copy of the Dockerfile used to create the image). The second command lists the content of the /golem/work folder. We copied some files there as well (check the content of the `description.txt` file), but as /golem/work is defined as VOLUME and created as new when VM is started, this folder will be empty.

## Running the script

Setup the api key with the command:

{% tabs %}
{% tab label="Linux" %}

```shell
export YAGNA_APPKEY=insert-your-32-char-app-key-here
```

{% /tab  %}
{% tab label="Windows" %}

```shell
set YAGNA_APPKEY=your-32-char-app-key
```

{% /tab  %}
{% /tabs %}

Run the following command after ensuring the Yagna service is running and configured correctly:

`python requestor.py`

You have successfully created and used your Golem image in a requestor script!

![Golem Image upload log](/image_tutorial_upload.png)

Note that the content of the `description.txt` file that was created in the /golem/info folder is accessible, while the /golem/work folder is empty.

{% docnavigation title="Next steps" %}

- Try your image in one of [examples](/docs/creators/python/examples)!

{% /docnavigation %}
