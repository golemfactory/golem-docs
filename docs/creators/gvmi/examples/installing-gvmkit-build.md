---
title: Installing gvmkit-build
description: Guide on how to install gvmkit-build
---

# Installing gvmkit-build

## Prerequisites

!!! info

    * OS X 10.14+, Ubuntu 18.04 or 20.04, or Windows
    * An installation of Docker
    * One of: python3/python & pip, npm, or rust

=== "Python/pip"
    
    Note that python3/python with a pip installer is required.
    
    ```bash
    pip install gvmkit-build
    ```

=== "JavaScript/npm"
    
    Note that npm must be installed.
    
    ```bash
    npm install -g @golem-sdk/gvmkit-build
    ```

=== "Rust/cargo"
    
    Note that Rust must be installed.
    
    ```bash
    cargo install gvmkit-build
    ```

=== "Download prebuild"
    
    https://github.com/golemfactory/gvmkit-build-rs/releases

=== "Build from source"
    
    Note that Rust must be installed.
    
    The binary can be found in target/release/gvmkit-build.
    
    ```bash
    cargo install gvmkit-build
    ```

!!! golem-icon "Next steps:"

    ??? quote "Return"

        [Golem images and usage explained](../golem-images-explained.md){ .md-button .md-button--primary }

    ??? question "Continue"

        [Converting an image from Docker to Golem](converting-an-image.md){ .md-button .md-button--primary }

        [Pushing an image to the registry](pushing-to-registry.md){ .md-button .md-button--primary }

        [Using an image in a requestor script](using-golem-image.md){ .md-button .md-button--primary }

        Note: more information can be found in the [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).