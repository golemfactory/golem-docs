---
description: Differences between Docker containers and Golem VM runtime
title: Differences between Docker containers and Golem VM runtime
---

# Differences between Docker containers and Golem VM runtime 

While Golem’s VM images derive from Docker’s, there are quite a few implementation and design differences that necessitate a careful approach when creating Golem decentralized apps.

## Cross-container connections

Golem doesn’t include its own mechanism of mapping host names to IP addresses across the nodes of its virtual private networks. Therefore, the connections between the services need to be specified directly using IP addresses.

It’s best to parametrize the images so that you can specify the exact connection parameters in the initialization scripts.

## Volumes cannot contain initial content

If you specify a location in an image as volume, a shared directory from the host’s filesystem will be mounted there instead of the original location. Therefore, any files and subdirectories within that location won’t be accessible.

It’s an important point to consider when designing your own images or tweaking existing ones, since the root filesystem is an in-memory one, which may limit its usefulness when it comes to large amounts of data.

Additionally, volumes are the only locations that can be written-to and read-from using ExeScript `transfer` commands (which are not currently supported by the `dapp-runner`).

## Volumes use 9p filesystem

To map the contents of the host directory to a VM volume, the virtual machine runtime uses the `9p` filesystem. It doesn’t support functions that operate directly on filesystem inodes which may cause some tools not to work correctly.

Currently, the only supported solution is switching the working locations to a location that’s not on a volume.

## Broken file permissions on the root directory

The VM runtime overrides the permissions for the root directory of the container. It’s owned by `root` and only includes permission for the root user. If you launch processes as non-root users, as some stock VM images do by default (notably `nginx` and `postgresql`), they won’t be able to access their data directories.

Specifically, the stock image of the nginx server fails to serve the data files correctly and returns a "404 Not Found" error when accessing otherwise correct paths.

The solution is to incorporate a `chmod +x /` command at the beginning of your `init` script.


## No support for ENTRYPOINT and/or CMD

Dapp-runner doesn’t currently support executing initialization scripts configured directly in the image with `ENTRYPOINT` and `CMD` clauses. Such support already exists in the VM runtime and will soon be included in the rest of the stack. 

There is a caveat though that running commands this way (either through entrypoint or by scheduling them to run in the background) makes the execution script finish after those commands are launched and their output/error streams are no longer available.

## No direct support for environment variables

There’s no way to pass environment variables to commands executed from the application descriptors. The current work-around is to include dotenv files support into the service run inside the container, and initialize the `.env` files in the `init` script - or - to pass those environment variables alongside your commands, e.g.:

```yaml
init:
      - ["/bin/sh", "-c", "YOUR_VAR=123 your command"]
```

Direct support for the passing of environment variables is planned soon.
