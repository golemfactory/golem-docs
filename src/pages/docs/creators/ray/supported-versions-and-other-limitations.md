---
description: list of supported Python & ray versions, and other known issues
title: Ray on Golem Supported versions and other limitations 
type: article
---

# Supported versions and other limitations

The current version is `pre-alpha` which means the happy path is working on the Golem test network. 
We use this version to show the direction and get feedback.

## Python and Ray image base

There is one Ray on the Golem image. It contains `ray 2.3.1` and `python 3.10.13`.
It should work with any combination of local Ray and Python versions. 

Please let us know if you have any troubles because of that (on [`#Ray on Golem` discord channel](https://chat.golem.network/))


<!--To override this automatic image selection, you can edit the `image_tag` property in your cluster yaml file.
We are preparing the tools for users to build and upload their images, but for now - please [let us know on `#Ray on Golem` discord channel)](https://chat.golem.network/) if you need an image with a version combination we haven't prepared it yet. We will be happy to help you.
-->

## Platforms

We have tested Ray on Golem on Ubuntu and WSL, but it should work on other Linux distributions. For now, we don't support MacOS or bare Windows.


## Libraries

Ray on Golem image contains only the basic Python libraries.

If you need any dependencies in your Ray app,
you can use `pip` via [cluster yaml `initialization_commands`](https://golem-docs-git-mateusz-ray-on-golem-pre-alpha-golem.vercel.app/docs/creators/ray/cluster-yaml-reference#initializationcommands)

You can also instruct Ray on Golem to use the needed libraries during execution by passing the `runtime_env` parameter to `ray.init()`.
It is demonstrated for example in [this tutorial](/docs/creators/ray/conversion-to-ray-on-golem-tutorial#passendplaylibraryrequirementtoray).

## Websocat

{% partial file="ray/websocat-requirement.md" /%}

