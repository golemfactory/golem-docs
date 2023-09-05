---
description: list of supported python & ray versions, and other known issues
title: Ray on Golem Supported versions and other limitations 
type: article
---

# Supported versions and other limitations

## Python and Ray image base

`golem-ray` supports images with different combinations of python and ray versions.
The image should reflect your local environment - during `ray up` the versions are identified, and proper image is selected.

You can override automatic image selection by editing `image_tag` property in your cluster yaml.

Currently we officially support a handful of python and ray versions combinations:
- todo
- todo 

We are preparing the tools for users to build and upload their own images, but for now - please let [us know (on our Discord)](https://discord.com/channels/684703559954333727/1136986696907505775) if you are in need of an image with version combination we haven't prepared yet. We will happily help you.

## Libraries

You may want to use any library in your Ray app. You can instruct Ray on Golem to install it on the workers by passing `runtime_env` parameter to `ray.init()`.
It is demonstrated for example in [this tutorial](/docs/creators/ray/practical-bridge-simulation-tutorial#passendplaylibraryrequirementtoray).

