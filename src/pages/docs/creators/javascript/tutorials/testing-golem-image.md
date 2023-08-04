---
description: How to run a .gvmi image locally for the sake of testing and debugging
---

# Testing a Golem image

## Introduction

In this tutorial we're going to explore `ya-runtime-dbg`, a tool built specifically for debugging user-built images.

!!! Info
This tutorial assumes that you're already familiar with Docker and the basics of building a Golem application.

## Installation

!!! Warning
`ya-runtime-dbg` is currently available for **Linux** **only**.

You can download the latest `.deb` package from the project's [releases page](https://github.com/golemfactory/ya-runtime-dbg/releases) and install it using `dpkg`:

```bash
sudo dpkg -i path/to/.../ya-runtime-dbg_v0.2.3_amd64.deb
```

If you don't want to (or cannot) use a `.deb` package you can also download a pre-built binary (`.tar.gz` file in the most recent GitHub release).

`ya-runtime-dbg` requires one of the available Golem runtimes to be available on your system.

A set of default runtimes can be installed by the `yagna` provider installer:

```bash
curl -sSf https://join.golem.network/as-provider | bash -
```

After using the installer your runtime binaries should be present under `~/.local/lib/yagna/plugins` (again, we're assuming Linux as it's the only supported platform for `ya-runtime-dbg` for now).

Alternatively, you can download a runtime package manually from its releases page (e.g. [VM runtime](https://github.com/golemfactory/ya-runtime-vm/releases)).

Later on we're going to see how to specify the runtime to be used by the debugger.

## Running the debugger

!!! Info
This section assumes you already have a `.gvmi` file ready on your machine. If you don't then follow the [Creating a custom image](image.md) tutorial or [Converting an image from Docker to Golem](../examples/tools/converting-an-image.md) example.


Let's now see how we can use `ya-runtime-dbg` together with our image. We can learn about the program's required arguments by calling `ya-runtime-dbg --help`:

```bash
USAGE:
    ya-runtime-dbg [FLAGS] [OPTIONS] --runtime <runtime> --task-package <task-package> --workdir <workdir> [varargs]...
```

The program has three mandatory arguments:

* `--runtime` path to the Golem runtime we want to use,
* `--task-package` path to the package (i.e. `.gvmi` image) we'd like to debug,
* `--workdir` path to the directory that will store directories mounted as volumes inside the image.

!!! Warning
Please note: the program does not support **relative paths** (i.e. paths relative to your shell's present directory).

Let's now run the debugger supplying it with appropriate parameters:

```bash
ya-runtime-dbg \
    --runtime ~/.local/lib/yagna/plugins/ya-runtime-vm/ya-runtime-vm \
    --task-package ~/.../docker-runtime-dbg-example-latest-be31909af5.gvmi \
    --workdir /tmp/workdir
```

The command is split into multiple lines using `\` so that it's easier to read. Some remarks related to the above call:

1. The path in `--task-package` needs to be changed so that it points to where you built your `.gvmi` file.
2. `/tmp/workdir` is an example path, it may not exist on your system. You can create it by calling `mkdir /tmp/workdir` or use some other location.

Running the command should produce output similar to this:

```bash
[INFO] Deploying
{"valid":{"Ok":""},"vols":[{"name":"vol-20c86845-e4ef-46a2-9137-d777c66703df","path":"/golem/input"},{"name":"vol-f61c0ce8-dc63-41ca-9f1d-54e020a1ac6b","path":"/golem/output"}],"startMode":"blocking"}
[INFO] Starting
[INFO] Entering prompt, press C-d to exit
```

Followed by a prompt character (`▶`). This indicates the debugger is now ready to be used!

## Using the debugger

With the debugger running we now have full access to our virtual machine!

The debugger provides us with an interactive shell which, by default, uses `bash`(indicated by the name next to the prompt character). This means we can use regular command line tools, for example:

```bash
bash ▶ pwd
/golem/work
```

Calling `pwd` (present working directory) returns `/golem/work`, matching the path we specified in `WORKDIR` in our original `Dockerfile`.

This interactive prompt gives us full access to the virtual machine. For example, we could run the program or script that is normally executed by a provider.

Now, let's see how we can interact with the mounted volumes. First off, let's take a closer look at the startup output from the debugger (specifically, the `vols` field from the second line):

```bash
[
  {
    "name": "vol-32e25157-5865-4fd2-9d35-909cd9893682",
    "path": "/golem/input"
  },
  {
    "name": "vol-1e319bdb-8d07-4d7b-b480-c076ee779f5d",
    "path": "/golem/output"
  }
]
```

This tells us about the directory mapping between our host machine and the virtual machine. The host directories are created under the path we specified as `--workdir` when starting the debugger (in our case it's `/tmp/workdir`).

Let's say we'd like to provide some data to the VM. We can do so by creating a file in the host directory that's mapped to `/golem/input` inside the VM. Looking at the mapping definition above, this directory is going to be `/tmp/workdir/vol-32e25157-5865-4fd2-9d35-909cd9893682`:

```bash
echo "stuff" > /tmp/workdir/vol-32e25157-5865-4fd2-9d35-909cd9893682/data.txt
```

With the debugger still running, let's now verify that this file is accessible inside our VM. Using the debugger prompt let's issue the below command:

```bash
bash ▶ cat /golem/input/data.txt
stuff
```

Success! Our input data is there and can be read by the VM.

!!! Info
`ya-runtime-dbg` is going to create new directories for volumes in each run.

Once you're done debugging or want to restart the VM, press `Ctrl+D` while in the debugger prompt.

Having issues? Make sure to take a look at our [VM runtime FAQ](../guides/images-FAQ.md).

## Summary

`ya-runtime-dbg` provides us with the **exact same** environment a provider would use to execute our image. This allows for more accurate testing compared to running the original Docker image manually.

Here are some other advantages of using this debugger while developing a Golem application:

* shorter iteration times while working on the payload for the provider,
* isolated testing: no need to run the entire application,
* fully controlled, local environment with access to mounted volumes,
* full shell access to the virtual machine.
