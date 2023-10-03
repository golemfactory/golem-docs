---
title: Installing gvmkit-build
description: Guide on how to install gvmkit-build
type: instructions
---

# Gvmkit-build installation

{% alert level="info" %}

This example has been designed to work with the following environments:

- OS X 10.14+, Ubuntu 20.04 or Windows

{% /alert %}

## Prerequisites

- npm or pip installed

## Introduction

Gvmkit-build is a tool that converts Docker images into .gvmi formats used by Golem. To install the tool, you need to follow the steps found below for your appropriate setup:

{% tabs %}
{% tab label="JavaScript/npm" %}
Note that npm must be installed.

```bash
npm install -g @golem-sdk/gvmkit-build
```

{% /tab %}
{% tab label="Python/pip" %}
Note that python3/python with a pip installer is required.

```bash
pip install gvmkit-build
```

{% /tab %}
{% /tabs %}

The installation can be verified by running the following command: `gvmkit-build --version`

{% docnavigation title="Next steps" %}

- [Converting an image to Golem format](/docs/creators/javascript/examples/tools/converting-docker-image-to-golem-format)
- [Custom Golem image Step by step Tutorial](/docs/creators/javascript/tutorials/building-custom-image)

{% /docnavigation %}

{% docnavigation title="See also" %}

More information can be found in the: [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).

{% /docnavigation %}
