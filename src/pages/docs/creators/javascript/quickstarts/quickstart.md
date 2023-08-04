---
Description: Create your own JavaScript application on Golem
---

# QuickStart

In this article, we'll show you how to run a simple task on the Golem Network. 

The goal is to run just a basic shell command on a rented provider.  
It should take just a few minutes to complete and finally, you will see the command's result printed in your terminal. 


!!! Info
    **Note: This example has been designed to work with the following environments:**

* OS X 10.14+, Ubuntu 20.04 or Windows
* Node.js 16.0.0 or above
    

## Installing and running Yagna 

Yagna is a daemon whose purpose is to communicate and perform operations on the Golem Network. Let's get started by installing it.

#### Install Yagna

=== "Easy installation"
    
    On Linux/ MacOS you can install it using our helper script like this:
    
    ```bash
    curl -sSf https://join.golem.network/as-requestor | bash -
    ```
    You might be asked to modify your PATH afterward.

=== "Windows Manual installation"

    Alternatively, if you can't install it in an easy way, you will do it manually in the following way:
    
    1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
    2. Unzip the archive to extract the two files: `yagna.exe` and `gftp.exe`.
    3. Copy those files to `C:\Windows\System32`.

=== "Unix Manual installation"

    Alternatively, if you can't install it in an easy way, you will do it manually in the following way:
    
    1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
    2. Unpack `yagna` and `gftp` binaries and put them somewhere in your PATH (e.g. copy them to /usr/local/bin on Unix-like systems) or add the directory you placed the binaries into your PATH.
   


!!! Note
    Should you encounter any problems, please reach out to us via our [Discord channel](https://chat.golem.network/) or consult the following resource for troubleshooting: [Yagna Troubleshooting](missinglink_yagna_troubleshooting.md)

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

Then start the daemon:

```bash
yagna service run
```




#### Get some funds

Requesting tasks on the Golem Network requires some credits on the network (GLM tokens). 
As this example will run on a test network you can get test credits.

Open another terminal and run the following command to complete the configuration:

```bash
yagna payment fund
yagna payment init
```
The first one will top up your account with funds (actually tokens, you can pay with only in the test network, where by default your apps are running). 
The second one will initialize the payment driver.



## Building your first Golem Network App 


Create a new Node.js project and install the Golem SDK by typing in the command line:

```bash
mkdir try_golem
cd try_golem
npm init
npm install yajsapi
```

Create a file named requestor.mjs and copy the following content into it. The code itself defines a task whose goal is to run the command `node -v` on the Golem Network and print the result to your terminal.

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

    You can find a detailed explanation of the above code [here](../tutorials/quickstart_explained.md)


## Running the script on Golem Network

Simply run the command:

```bash
node requestor.mjs
```

The output of the script should look very similar to the one below:

![](/assets/js-tutorial-05.gif)

You can find information regarding the version of the node used on the remote computer - v.16.14.0 - at the end of the script's logs. This is the version incorporated into the standard Golem image used to execute the task.

## Summary

You've installed the Yagna daemon and executed a simple task on the Golem Network.
However, you can accomplish much more. Here are some suggested next steps to explore the Golem Network world:

Next steps:

* [QuickStart Explained](../tutorials/quickstart_explained.md)
* [Simple introduction to the Golem Network and Task Model](../guides/task-model.md)
* [Parallel processing tutorial](../tutorials/parallel_processing.md)


