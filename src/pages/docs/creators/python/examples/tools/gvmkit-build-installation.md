---
title: Gvmkit-build Installation Guide
description: Step-by-step instructions for installing gvmkit-build to convert Docker images for Golem's GVMI format.
pageTitle: Install gvmkit-build - Convert Docker to GVMI for Golem Network

type: instructions
---

# Gvmkit-build installation

## Prerequisites

- npm or pip installed

## Introduction

`gvmkit-build` is a tool that converts Docker images into the GVMI format used by Golem. To install it, please follow the instructions below:

{% tabs %}
{% tab label="Python/pip" %}
Ensure you have a Python 3 environment equipped with pip.

```bash
pip install gvmkit-build
```

{% /tab %}
{% tab label="JavaScript/npm" %}
Ensure npm is already installed.

```bash
npm install -g @golem-sdk/gvmkit-build
```

{% /tab %}
{% /tabs %}

The installation can be verified by running the following command: `gvmkit-build --version`

{% docnavigation title="Next steps" %}

- [Converting an image to Golem format](/docs/creators/python/examples/tools/converting-docker-image-to-golem-format)
- [Custom Golem image Step by step Tutorial](/docs/creators/python/tutorials/building-custom-image)

{% /docnavigation %}

{% docnavigation title="See also" %}

More information can be found in the: [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).

{% /docnavigation %}
