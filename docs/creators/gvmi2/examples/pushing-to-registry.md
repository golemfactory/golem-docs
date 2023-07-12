---
title: Publishing an image
description: Guide on how to publish a Golem image to the registry using gvmkit-build
---

# Publishing an image in the registry (identified by tag)

## Prerequisites

!!! info

    * OS X 10.14+, Ubuntu 18.04 or 20.04, or Windows
    * ??? Have you [Docker image converted to .gvmi format](converting-an-image.md) ???
    * Have [gvmkit-build installed](installing-gvmkit-build.md)

Note: you can also use npx /pipx tools to run gvmkit-build without installation.
    


## Publishing custom Golem image to the registry (tag-based)

Note: Golem image tags have a format of `username/repository_name:tag`, where `username` is your login to registry portal, `repository_name` is name of your repository and `tag` is a text that you chose to describe the content/version of the image. The `tag` can be `latest` to constantly keep a latest version, or you can use a versioning system and e.g. make it `v0.0.1` and so on.

Let's assume for this example you user name is `golem`, your repository name is `my_example` and the tag is `latest`.


1. Create an account on the [registry portal](https://registry.golem.network/).
2. Create a repository on the registry portal.
3. Crate and copy personal access token from the registry portal.
4. Run the following coomand (you will be asked for login and personal access token)

=== "JavaScript/npm"
    ```bash
        npx gvmkit-build golem-example --push-to golem/my_example:latest
    ```
=== "Python/pip"
    === "Ubuntu"
        ```bash
            python3 -m gvmkit_build golem-example --push-to golem/my_example:latest
        ```
    === "macOS"
        ```bash
            python3 -m gvmkit_build golem-example --push-to golem/my_example:latest
        ```
    === "Windows"
        ```bash
            python -m gvmkit_build golem-example --push-to golem/my_example:latest
        ```


Your tag `golem/my_example:latest` is ready to use in one of Golem Network APIs

!!! golem-icon "Next steps:"

        [Using an image in a requestor script](using-golem-image.md){ .md-button .md-button--primary }

	[Golem images and usage explained](../golem-images-explained.md){ .md-button .md-button--primary }

    Note: more information can be found in the [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).