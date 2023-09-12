---
description: list of supported python & ray versions, and other known issues
title: Ray on Golem Supported versions and other limitations 
type: article
---

# Supported versions and other limitations

## Python and Ray image base

`golem-ray` supports images with different combinations of python and ray versions.
The image should reflect your local environment - during `ray up` the versions are identified, and the proper image is selected.

To override this automatic image selection, you can edit the `image_tag` property in your cluster yaml file.

Currently, we officially support a handful of python and ray version combinations:
- todo
- todo 

We are preparing the tools for users to build and upload their own images, but for now - please [let us know on `#Ray on Golem` discord channel)](https://chat.golem.network/) if you are in a need of an image with a version combination we haven't prepared yet. We will be happy to help you.

## Libraries

You may want to use any library in your Ray app. You can instruct Ray on Golem to install it on the workers by passing `runtime_env` parameter to `ray.init()`.
It is demonstrated for example in [this tutorial](/docs/creators/ray/conversion-to-ray-on-golem-tutorial#passendplaylibraryrequirementtoray).

