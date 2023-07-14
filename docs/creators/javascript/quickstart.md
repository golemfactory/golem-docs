---
description: Create your own JavaScript application on Golem
---

# QuickStart

In this article, we'll show you how to run a simple task on Golem Network. 

The task is just a single shell command (checking node version) run on a rented computer. 
It will take just a few minutes to create and run a script that will request that task to be executed in the network and finally print out the result in the console. 


!!! Info
	**Note: This example is designed for environment:**

* OS X 10.14+, Ubuntu 18.04 or 20.04 or Windows
* Node.js version above 16.0.0
* Familiarity which the command line
    

## Installing and running yagna 

Yagna is a deamon that will let you communicate with Golem Network and perform operations on it. Let's install it.

#### Install yagna

=== "Easy installation"
    
    On Linux/ MacOS you can install it using our helper script like this:
    
    ```bash
    curl -sSf https://join.golem.network/as-requestor | bash -
    ```
    You might be asked to modify your PATH afterwards.

    

=== "Windows Manual installation"

    Alternatively, if you can't install in easy way, you will do it manually in the following way:
    
    1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/tag/v0.12.0](https://github.com/golemfactory/yagna/releases/latest).
    2. Unzip the archive to extract the two files: `yagna.exe` and `gftp.exe`.
    3. Copy those files to `C:\Windows\System32`.
	?? shall we install yagna in local folder for a quickstart ??


=== "Unix Manual installation"

    Alternatively, if you can't install in easy way, you will do it manually in the following way:
    
    1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/tag/v0.12.0](https://github.com/golemfactory/yagna/releases/tag/v0.12.0).
    2. Unpack `yagna` and `gftp` binaries and put within somewhere in your PATH (e.g. copy them to /usr/local/bin on Unix-like systems) or add the directory you placed the binaries in to your PATH.



!!! Note

    If you have encountered problems, contact us on discord channel or take a look in here: [Yagna troublesooting](https://handbook.golem.network/requestor-tutorials/flash-tutorial-of-requestor-development)


#### Start the daemon

Open a terminal (command line window) and  define the key to identify your application script:

=== "MacOS / Linux"

   
    ```bash
    export YAGNA_AUTOCONF_APPKEY=try_golem
    ```

=== "Windows"

    
    ```bash
    set YAGNA_AUTOCONF_APPKEY=try_golem
    ```

Then start the deamon:

```bash
yagna service run
```




#### Get some funds

Requesting tasks on Golem Network requires some credits on the network (GLM tokens). 
As this example will run on a test network you can get test credits.

Open another terminal and run the following command to complete configuration:

```bash
yagna payment fund
yagna payment init
```


!!! info

    You can learn more about Golem architecture, production and text network, GLM tokens here:



## Building your first Golem Network App 


Create a new Node.js project and install Golem SDK by typing in the command line:

```bash
mkdir try_golem
cd try_golem
npm init
npm install yajsapi
```

Create a requestor.mjs file and copy the following content there. This script defines the task ('node -v'), requests it to be run on the Network and prints the result on the console.

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
	package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",	
	yagnaOptions: { apiKey: 'try_golem' }});
  const result = await executor.run(
	async (ctx) => (await ctx.run("node -v")).stdout);
  await executor.end();

  console.log("Task result:", result);
})();
```

!!! info

    You can find detailed explanation of the above code here: [here](tutorials/quickstart_explained.md)


## Runing the script on Golem Network

Simply run the command:

```bash
node requestor.mjs
```

Result in the command line will look like:

![](/assets/js-tutorial-05.gif)


At the end of the script's logs you can see information about node version used on remote computer: v.16.14.0. This is a version included in Golem standard image that was used to run the task.


## Summary

You have installed yagna daemon and run a simple task on Golem Network.
You can do much more. There are some of the next steps to explore Golem Network world:

test

* [Quickstart Explained](tutorials/quickstart_explained.md)
* [Simple introduction to Golem Network and Task Model](../javascript/high-level/task-model.md)
* [Parallel processing tutorial](tutorials/parallel_processing.md)
* [Other examples](link)
* [Tutorials](link)
* [Guides](link)

