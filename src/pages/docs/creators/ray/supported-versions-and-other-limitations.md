---
description: list of supported Python and ray versions, and other known issues
title: Ray on Golem Supported versions and other limitations
type: Article
pageTitle: Ray on Golem Compatibility - Python and Ray Versions, Platform Support, and Limitations
---

# Supported versions and other limitations

The current version of Ray on Golem is an MVP. We believe it to be sufficiently easy to use and free of errors to allow people interested in running simple Ray applications to be able to use it without too much hassle.
We are working on supporting all Ray use cases. 
If you find any bugs or issues or would like to discuss missing features
that are critical to what you're working on, please let us know
(on [`#Ray on Golem` discord channel](https://chat.golem.network/)) - 
we will be happy to assist you.

Ray on Golem works on both the Golem test network (free but not very powerful) 
and the [mainnet](/docs/creators/ray/mainnet).

## Python and Ray image base

The basic Ray on Golem image contains `ray 2.9.3` and `python 3.10.13`.
It should work with any combination of local Ray and Python versions.

Please let us know if you have any troubles because of that (on [`#Ray on Golem` discord channel](https://chat.golem.network/))

There is also an image supporting Golem GPU Providers - learn more about [image configuration](/docs/creators/ray/cluster-yaml#image-tag-and-image-hash).

## Platforms

We have tested Ray on Golem on Ubuntu and WSL, but it should work on other Linux distributions. For now, we don't support MacOS or bare Windows.

## Libraries

Ray on Golem image contains only the basic Python libraries.

If you need any dependencies in your Ray app,
you can use `pip` via [cluster yaml `initialization_commands`](/docs/creators/ray/cluster-yaml#initializationcommands)

You can also instruct Ray on Golem to use the needed libraries during execution by passing the `runtime_env` parameter to `ray.init()`.
It is demonstrated for example in [this tutorial](/docs/creators/ray/conversion-to-ray-on-golem-tutorial#passendplaylibraryrequirementtoray).
