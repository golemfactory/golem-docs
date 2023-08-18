---
title: Publishing an image
tescription: Guide on how to publish a Golem image to the registry using gvmkit-build
---

# Publishing an image in the registry




# JS Task API Examples: composing tasks

{% alert level="info" %}

This example has been designed to work with the following environments:

- OS X 10.14+, Ubuntu 20.04 or Windows

{% /alert %}

## Prerequisites

- npm or pip installed
- gvmkit-build installed [instructions](/docs/creators/javascript/examples/tools/gvmkit-build-installation)
- a Docker image build [see instructions](/docs/creators/javascript/examples/tools/converting-docker-image-to-golem-format#building-your-docker-image)

{% alert level="info" %}

You can use npx and pipx tools to run gvmkit-build without installation. 

{% /alert %}


## Introduction

Once your image is built and tested you can push it to a remote repository so that it becomes available to providers within the Golem Network. Golem manages a freely-accessible repository that everybody can push into without any special requirements. 
You can identify ou image by a `hash` or by a `tag`.

If you intend to use your image just for testing it is enough to use image hash and upload them anonymously to the registry. If you intend to work on a more complex project where you would like to use several different versions of your image or collaborate with other users - you should consider creating an account in the registry and using tags to describe your images. Both cases are illustrated in our examples.


## Publishing custom Golem image to the registry (hash-based)

If you have you `gvmi` image build from a Docker image you can push it to repository with following command:

```bash
gvmkit-build --direct-file-upload my-test-<>.gvmi --push --nologin
```
{% alert level="info" %}

While the Docker image is not stored in user folder, after convertion to GVMI format the output file is placed in the folder where you run coversion tool. By default the image name is a Docker image name followed by a part of its `hash`. When you [ush the gvmi image using this method you need to provide the name of the .gvmi file.]

{% /alert %}



## Publishing custom Golem image to the registry (tag-based)

Golem image tags have a format of `username/repository_name:tag`, where `username` is your login to the registry portal, `repository_name` is the name of your repository, and `tag` is a text that you chose to describe the content/version of the image. The `tag` can be `latest` to constantly keep the latest version, or you can use a versioning system and e.g. make it `v0.0.1` and so on.

Let's assume for this example your username is `golem`, your Docker image is tagged `golem-example`, your repository name is `my_example` and the version is `latest`.


1. Create an account on the [registry portal](https://registry.golem.network/).
2. Create a repository on the registry portal.
3. Crate and copy personal access token from the registry portal.
4. Run the following command (you will be asked for login and personal access token)


{% tabs %}
{% tab label="JavaScript" %}
```bash
gvmkit-build golem-example --push-to golem/my_example:latest
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
