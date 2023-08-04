---
Title: Installing gvmkit-build
Description: Guide on how to install gvmkit-build
---

# Installing gvmkit-build

!!! info

    * The tool works on: OS X 10.14+, Ubuntu 18.04 or 20.04, and Windows
    * Required: npm or pip


Gvmkit-build is a tool that converts Docker images into .gvmi formats used by Golem. To install the tool, you need to follow the steps found below for your appropriate setup:


=== "JavaScript/npm"
    
    Note that npm must be installed.
    
    ```bash
    npm install -g @golem-sdk/gvmkit-build
    ```

    The installation can be verified by running the following command: `gvmkit-build --version`

=== "Python/pip"
    
    Note that python3/python with a pip installer is required.
    
    ```bash
    pip install gvmkit-build
    ```

    The installation can be verified by running the following command: `python3 -m gvmkit-build --version` on everything except Windows, where you instead run: `python -m gvmkit-build --version`



!!! golem-icon "Next steps:"

    [Converting an image to Golem format](converting-an-image.md){ .md-button .md-button--primary }

    [Custom Golem image Step by step Tutorial](../../tutorials/image.md){ .md-button .md-button--primary }

    Note: More information can be found in the [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).