---
title: Using the Golem image in a requestor script
description: Showing how to download a Golem image by hash and verifying by testing
---

# Using the Golem image in a requestor script

In the [last part of this tutorial](converting-docker-to-golem.md), we ended up with a hash that your Golem image can be downloaded by. This article will go through the process of creating a simple requestor script for the purpose of letting a provider download your Golem image.

## Prerequisites

!!! info

    * An installation of yagna
    * An installation of yarn

!!! warning

    **You must have followed the tutorial every step from the first part: [1) Creating our Docker image](creating-our-docker-image.md)**

## The requestor script

The example requestor script we are going to use is taken from the [QuickStart](../../javascript/quickstart.md) and modified. Just like in the QuickStart, we will prepare our environment with the following commands before creating our `index.mjs` file.

```
npm init
npm add yajsapi
```

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

In the example above, which can be run with the `node index.mjs` command, there are two important things to know when continuing:

1. The image hash is `529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4`. By changing out the hash to our own, the provider will have the environment of our Golem image.

2. The result is the console output of the `node -v` command. By changing this, we can experiment with other functionality, such as the volumes.

Here is an example requestor script using the image hash from the previous part of the tutorial. In the requestor script, we create a file `result.txt` and without learning new commands, we can read the name of the file with the `ls /golem/output/` command.

=== "JavaScript/npm"
    **index.mjs**
    ```mjs
    import { TaskExecutor } from "yajsapi";

    (async () => {
    const executor = await TaskExecutor.create("b43b9ae9a413768e3c764b5e4fdfbb0f607b2bcdde941b731bdb433f");

    const taskToRunOnProvider = async (workerContext) => {
        await workerContext.run('echo "Hello Requestor!" > /golem/output/result.txt');
        const result = await workerContext.run("ls /golem/output/");
        return result.stdout;
    }

    const taskResult = await executor.run(taskToRunOnProvider);
    await executor.end();

    console.log('Task result:', taskResult);
    })();
    ```

!!! info

    Note that the full path is required in all commands from a requestor script, regardless of what was specified in the `WORKDIR` instruction in your Dockerfile. This means that you upload and download files, and point commands to a directory and a file and not just a file.

You have now successsfully created and used your own Golem image in a requestor script!

By using the `workerContext.run()` command you are able to run any commands allowed by your Dockerfile.  You can experiment more by learning more commands or by changing your Dockerfile and starting over.

!!! example "Challenge yourself:"

    Try see if you can change the command so that it logs out the contents of the file or if you can figure out how to download the file to your own computer.

!!! golem-icon "Next steps:"

    ??? quote "Return"

        [Golem images and usage explained](../golem-images-explained.md){ .md-button .md-button--primary }