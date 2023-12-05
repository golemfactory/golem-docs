---
title: Publishing an image
description: Guide on how to publish a Golem image to the registry using gvmkit-build
type: Instructions
---

# Publishing an image in the registry

## Introduction

Once your image is built and tested you can push it to a remote repository so that it becomes available to providers within the Golem Network. Golem manages a freely-accessible repository that everybody can push into without any special requirements.
You can identify your image by a `hash` or by a `tag`.

If you intend to use your image just for testing, it is enough to use image hash and upload them anonymously to the registry. If you intend to work on a more complex project where you would like to use several different versions of your image or collaborate with other users - you should consider creating an account in the registry and using tags to describe your images. Both cases are illustrated in our examples.

{% alert level="info" %}

This example has been designed to work with the following environments:

- OS X, Ubuntu or Windows

{% /alert %}

## Prerequisites

- npm or pip installed
- gvmkit-build installed [instructions](/docs/creators/javascript/examples/tools/gvmkit-build-installation)
- a Docker image build [see instructions](/docs/creators/javascript/examples/tools/converting-docker-image-to-golem-format#building-your-docker-image)

{% alert level="info" %}

You can use npx and pipx tools to run gvmkit-build without installation.

{% /alert %}

## Publishing a custom Golem image to the registry (hash-based)

If you have your `gvmi` image built from a Docker image you can push it to the repository with the following command:

```bash
gvmkit-build --direct-file-upload my-test-<>.gvmi --push --nologin
```

{% alert level="info" %}

While the Docker image is not stored in the user folder, after conversion to GVMI format the output file is placed in the folder where you run the coversion tool. By default, the image name is a Docker image name followed by a part of its `hash`. When you push the gvmi image using this method you need to provide the name of the .gvmi file.

{% /alert %}

You can convert your Docker image and push the Golem image to the repository with one command:

```bash
gvmkit-build docker-image-name --push --nologin
```

## Publishing a custom Golem image to the registry (tag-based)

Golem image tags have a format of `username/repository_name:tag`, where `username` is your login to the registry portal, `repository_name` is the name of your repository, and `tag` is the text that you chose to describe the content/version of the image. The `tag` can be `latest` to constantly keep the latest version, or you can use a versioning system and e.g. make it `v0.0.1` and so on.

Let's assume for this example your username is `golem`, your Docker image is tagged `golem-example`, your repository name is `my_example` and the version is `latest`.

1. Create an account on the [registry portal](https://registry.golem.network/).
2. Create a repository on the registry portal.
3. Create and copy a personal access token from the registry portal.
4. Run the following command (you will be asked for your login and personal access token)

{% tabs %}
{% tab label="JavaScript" %}

```bash
gvmkit-build golem-example --push-to golem/my_example:latest
```

or if you do not have `gvmkit-build` installed:

```bash
npx gvmkit-build golem-example --push-to golem/my_example:latest
```

{% /tab %}
{% tab label="Python" %}

```bash
gvmkit-build golem-example --push-to golem/my_example:latest
```

{% /tab %}

{% /tabs %}

Your tag `golem/my_example:latest` is ready to use in one of Golem Network APIs

{% docnavigation title="Next steps" %}

- [Using an image in a requestor script](/docs/creators/javascript/examples/working-with-images) (JS API)

{% /docnavigation %}

{% docnavigation title="See also" %}

- [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).

{% /docnavigation %}
