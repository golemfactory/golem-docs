---
title: Converting an image
Description: Guide on how to convert an image from Docker to Golem using gvmkit-build
---

# Converting an image

{% alert level="info" %}

Example is designed for: OS X 10.14+, Ubuntu 18.04 or 20.04, and Windows

Prerequisites:

- Have Docker installed and Docker service available.  If you don't have Docker installed follow these [instructions](https://www.docker.com/products/docker-desktop)
- Gvmkit-build installed ([see instructions](/docs/creators/javascript/examples/tools/gvmkit-build-installation))

Note: you can use npx and pipx tools to run gvmkit-build without installation. 

{% /alert %}

  
## Introduction  

Golem images are based on Docker images, which means that it is required to have a Docker image to be able to convert it to a Golem image. We will include a simple Dockerfile just to show how the tool and its commands work for demonstration purposes, and you are free to create your own Dockerfile.


## Building your Docker image

Create a `Dockerfile` file with the following content:

```bash
FROM debian:latest
VOLUME /golem/input /golem/output
WORKDIR /golem/work
``` 

Now build a Docker image tagged `golem-example` using the above Dockerfile. 


{% tabs %}

{% tab label="Linux" %}
```bash
docker build . -t golem-example
```
{% /tab %}
{% tab label="macOS" %}
```bash
docker build . --platform linux/amd64 -t golem-example
```
{% /tab %}
{% tab label="Windows" %}
```bash
docker build . -t golem-example
```
{% /tab %}
{% /tabs %}


## Converting Docker image to a Golem image

The examples below show how to convert the Docker image tagged `golem-example` to a `.gmvi` file in the current directory.

{% tabs %}
{% tab label="JavaScript" %}

```bash
gvmkit-build golem-example
```
or if you do not have `gvmkit-build`` installed:

```bash
npx gvmkit-build golem-example
```
{% /tab %}
{% tab label="Python" %}

```bash
gvmkit-build golem-example
```

{% /tab %}
{% /tabs %}        


## Converting and publishing your image at once (hash-based)

This example explains how to convert and publish an image that will be identified by its hash. The examples assume you have a Docker image tagged `golem-example` already created. 

The hash is found in the `image link` line of the console output:

```bash
 -- image link (for use in SDK): dcd99a5904bebf7ca655a833b73cc42b67fd40b4a111572e3d2007c3
``` 

Note if the image was already converted to `.gvmi`, it will only be pushed. 

{% tabs %}
{% tab label="JavaScript" %}
```bash
gvmkit-build golem-example --push --nologin
```
or if you do not have `gvmkit-build` installed:

```bash
npx gvmkit-build golem-example --push --nologin
```
{% /tab %}
{% tab label="Python" %}

```bash
gvmkit_build golem-example --push --nologin
```

{% /tab %}
{% /tabs %}

 
{% docnavigation title="Next steps" %}

- [Publishing an image in the registry](/docs/creators/javascript/examples/tools/publishing-custom-images)

{% /docnavigation %}


{% docnavigation title="See also" %}

Note: more information can be found in the [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).

{% /docnavigation %}