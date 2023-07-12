---
title: Installing gvmkit-build
description: Guide on how to install gvmkit-build
---

# Installing gvmkit-build

## Prerequisites

!!! info

    * OS X 10.14+, Ubuntu 18.04 or 20.04, or Windows
    * An installation of Docker
    * One of: pip, npm


Gvmkit-build is a tool that converts Docker images into .gvmi formats used by Golem.


=== "JavaScript/npm"
    
    Note that npm must be installed.
    
    ```bash
    npm install -g @golem-sdk/gvmkit-build
    ```

=== "Python/pip"
    
    Note that python3/python with a pip installer is required.
    
    ```bash
    pip install gvmkit-build
    ```



!!! golem-icon "Next steps:"

        [Converting from a docker image Docker](converting-an-image.md){ .md-button .md-button--primary }

        [Publishing an image to the registry](pushing-to-registry.md){ .md-button .md-button--primary }

        [Using an image in a requestor script](using-golem-image.md){ .md-button .md-button--primary }

        Note: more information can be found in the [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).