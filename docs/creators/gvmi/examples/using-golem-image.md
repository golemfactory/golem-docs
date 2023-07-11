---
title: Using Golem images
description: Examples of how to use your own Golem image in a requestor script
---

# Using Golem images

## Prerequisites

!!! info

    * OS X 10.14+, Ubuntu 18.04 or 20.04, or Windows
    * An installation of yagna
    * An environment for Golem tasks or services

The example requestor script we are going to use is taken from the [QuickStart](../../javascript/quickstart.md). To use your own Golem image, simply change the hash (`529 [...] 1106d4`) in the script to your own hash or tag. More modification, how to run, and other notes are available in the [third part of the three-part tutorial](../tutorial/using-the-golem-image.md).

=== "JavaScript/npm"
    **index.mjs**
    ```mjs
    import { TaskExecutor } from "yajsapi";

    (async () => {
    const executor = await TaskExecutor.create("529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4");

    const taskToRunOnProvider = async (workerContext) => {
        const commandToRunInProviderShell = "node -v";
        const result = await workerContext.run(commandToRunInProviderShell);
        return result.stdout;
    }

    const taskResult = await executor.run(taskToRunOnProvider);
    await executor.end();

    console.log('Task result:', taskResult);
    })();
    ```
!!! golem-icon "Next steps:"

    ??? quote "Return"

        [Golem images and usage explained](../golem-images-explained.md){ .md-button .md-button--primary }

    ??? question "Continue"

        [Installing gvmkit-build](installing-gvmkit-build.md){ .md-button .md-button--primary }

        [Converting an image from Docker to Golem](converting-an-image.md){ .md-button .md-button--primary }

        [Pushing an image to the registry](pushing-to-registry.md){ .md-button .md-button--primary }

        Note: more information can be found in the [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).