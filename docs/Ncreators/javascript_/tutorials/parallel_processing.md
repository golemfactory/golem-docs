---
description: Parallel processing on Golem Network - Tutorial
---



This tutorial will lead you through steps required to execute tasks in parallel on Golem Network. 


!!! Prerequisites
	* Install and run yagna daemon on your machine (see quickstart)
	* Initialize payment with yagna payment init --sender (Note: payment needs to be initialized after each launch of yagna service run)
	* Have docker installed adn docker service available


We will go through the following steps:

* Define the problem and split into chunks that can be executed in parallel
* Create an Golem image
* Create a requestor script
* Run the tasks in parallel and process the output


## Define the problem

As a practical example for a problem that is sutiable for parallel processing we selected a task of recovering password using the `hashcat` tool. You can apply similar porcedure to utilize Golem Network for other problems that require parallel processing.

Let's assume we have a password hash obtained from an unknown password processed using the "phpass" algorithm. (Phpass is used as a hashing method by popular web frameworks such as WordPress and Drupal) and we know a password mask ?a?a?a (this means the password consists of three alphanumeric characters).
 
Our objective is to recover the password using  `Hashcat - command-line utility that cracks unknown passwords from their known hashes. 
Hashcat supports 320 hashing algorithms and 5 different attack types, but for this example, we'll use only the "phpass" algorithm and a simple brute-force attack.


To find the password that matches the given hash and mask, we could run the following command:
```bash
hashcat -a 3 -m 400 in.hash ?a?a?a 
```

where

- `-a 3` specifies a brute-force attack,
- `-m 400` specifies the `phpass` algorithm, 
- `in.hash` is the name of the file that contains the hashed password (for our examples we will use: `$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/`) and
- `?a?a?a` is the mask to use.

As a result of the above command, the file `hashcat.pot` file would be created with the following content:
`$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/:pas`. The output consist of original hash and the recovered password `pas` after `:`.


To speed up the process we can split the keyspace of the potential solution into smaller subsets and run the tasks in parallel.

To achieve this we need  determine the size of the keyspace for a given mask and algorithm:
```bash
hashcat --keyspace -a 3 ?a?a?a -m 400
```

There keyspace for this case is 9025 that could be split into 3 segements with following boundaries:

- 0..3008
- 3009..6017
- 6018..9025

Once we have the segment limits defined we can use `--skip` and `--limit` options in the `hashcat` command:
```bash
hashcat -a 3 -m 400 in.hash --skip 3009 --limit 6016  ?a?a?a
```

The above command will process the `3009..6016` fragment, and any results in that range will be written to the `hashcat.pot` file.

!!! info

For more information on hashcat arguments, see the complete [reference](https://hashcat.net/wiki/doku.php?id=hashcat)


## Preparing Image

!!! Info

You can skip this section if you do not have Docker installed and use the image hash provided in the example.

The tasks that we send to remote computer are executed in the context of the specified software package - the image. When we create Task Executor we provide the hashID of the image that will be used during processing. In the quick start example we used an image that contained node.js.

In our case we need to prepare a custom image containing a `hashcat` software that we will use on provider’s machines. 
Golem images are converted from Docker images, so we can start with any existing docker image that meets your needs and modify it to create a custom one.
For our task we will use an off-the-shelf hashcat image (dizcza/docker-hashcat:intel-cpu) and modify it slightly for Golem.

### Dockerfile
Create a `Dockerfile` file with followng content:

```bash
FROM dizcza/docker-hashcat:intel-cpu
VOLUME /golem/input /golem/output
WORKDIR /golem/work
```

!!! Error
	VOLUME out?

We use `dizcza/docker-hashcat:intel-cpu` Docker image as starting point, 

then define 2 volumes: `/golem/input` and `/golem/output` for input and output file transfer respectively. All changes in other (non-VOLUME mounted) container directories are kept in RAM. We do not expect to create a large file in this examples, but it is a good practice to store the files in directories defined as VOLUME to avoid running out of RAM.

Finally we define a working directory - `WORKDIR /golem/entrypoint` - do we need it?

### Docker image

To build the Docker image, use the following commands:
```bash
docker build . -f .Dockerfile -t hashcat
```

### Conversion to golem image

If you do not have installed yet: install Golem image conversion tool (gvmkit_build)
```bash
npm install -g @golem-sdk/gvmkit-build
```

then convert the Docker image into Golem format
```bash
gvmkit-build hashcat
```
and upload image anonymously to the repository.
```bash
gvmkit-build --direct-file-upload hashcat.gvmi --push --nologin
```
This command will produce the hash of the image that you can use in the example. 

```bash
-- image link (for use in SDK): 055911c811e56da4d75ffc928361a78ed13077933ffa8320fb1ec2db
```

!!! Info
	Note that lifetime of images uploaded anonymously to the repository is limited, and they can be removed from registry portal after some time without notice.


!!! Info
	The details of docker image conversion are described here: [Converting an image from Docker to Golem GVMI](link)


## The requestor script code

### Our algorithm 

Based on usage of hashcat tool our algorithm will be stright forward:

* First we will calculate the keyspace, then 
* split it into a number of segments and run tasks in parallel on a number of providers defined by user.
* Finally we will collect the results and provide user with the output.

Note we could calculate the spacekey locally, but in this example we will also do it on remote computer, avoiding insatlling hashcat on our computer. 

### JS project setup

Now create a project folder and initialise the project, install yajsapi library.

```bash
Mkdir parallel-example
Cd parallel-example
Npm init
Npm install yajsapi
```

Copy requestor script skeleton into index.js:

```bash
import { TaskExecutor } from "yajsapi";
import { program } from "commander";

async function main(args) {


console.log(args); 

// todo: create Executor
// todo: calculate keyspece
// todo: calculate boundaries for each chunk
// todo: run the task on multiple providers in parallel
// todo: process and print results
// todo: end executor

}

program
 .option("--number-of-providers <number_of_providers>", "number of providers", (value) => parseInt(value), 3)
 .option("--mask <mask>")
 .requiredOption("--hash <hash>");

program.parse();

const options = program.opts();

main(options).catch((e) => console.error(e));
```

We use the `commander` library to pass arguments such as --mask and --max-workers. This library will print a nice argument description and an example invocation when we run the requestor script with --help. Note you need to install it with `npm install commander`.

The main function contains the body of the requestor application. Its sole argument, `args`, contains information on the command-line arguments read by the argument parser.

We do not run anything on golem yet.


### TaskExecutor and package definition

To execute our tasks on the Golem network, we need to create a TaskExecutor instance.

```bash
const executor = await TaskExecutor.create({
   package: "055911c811e56da4d75ffc928361a78ed13077933ffa8320fb1ec2db",
   maxParallelTasks: args.numberOfProviders,
   yagnaOptions: { apiKey: 'try_golem' }
 });
```


The package parameter is required and points to the image that we want the containers to run. We use the hash of the image created by us, but you can use the hash received from gvmkit-build when you created your image.


The other parameters are:
`maxParallelTasks`: the maximum number of tasks we want to run in parallel
`yagnaOptions: { appKey: 'try_golem' }` - the app key that links your script to identity on the network.


### Running a single task on the network to calculate the keyspace


The first step in the computation is to check the keyspace size. For this, we only need to execute hashcat with --keyspace and read the command's output.
With the TaskExecutor instance running, we can now send such task to one of the providers using the run method:

```bash
const keyspace = await executor.run(async (ctx) => {
 	const result = await ctx.run(`hashcat --keyspace -a 3 ${args.mask} -m 400`);
	return parseInt(result.stdout || "");
});

if (!keyspace) throw new Error(`Cannot calculate keyspace`);
  console.log(`Keyspace size computed. Keyspace size = ${keyspace}.`);
```

This call tells the `executor` to execute a single task defined by the task function `async (ctx) => {}`. The ctx object allows us to run a task consisting of single or batch of commands on the provider side.
The keyspace size can be obtained from the stdout attribute of the result object returned by the task function.
In case we cannot calculate the size of keyspace we will throw an error.


### Calculate boundaries for chunks

As we will run hashcat on a fragments of the whole keyspace, using the --skip and --limit parameters, we need to split the keyspace into chunks.
Knowing the keyspace size and maximum numer of providers we range for each of the task:


```js
const step = Math.floor(keyspace / args.numberOfProviders + 1);
const range = [...Array(Math.floor(keyspace / step)+1).keys()].map((i) => i*step);
```

Note that the number of chunks does not determine the number of engaged providers. In this examples we decided to split the job into 3 tasks, but the number of provider we want to engage is determined by the `maxParallelTasks` parameter. Executor will try to engage that number of providers and them pass the tasks to them. Once a provider is ready to execute a task, it takes up the next task from a common pool of tasks, so a fast provider may end up executing more tasks than a slow one. 


### Running many task in multiple providers

Next, we can start looking for the password using multiple workers, executing the tasks on multiple providers simultaneously.

For each worker, we perform the following steps:

* Execute hashcat with proper --skip and --limit values on the provider.
* Get the hashcat_{skip}.potfile from the provider to the requestor.
* Parse the result from the .potfile.

With the range, we use the executor.map method to run the split tasks simultaneously on the Golem Network:

const results = executor.map(range, async (ctx, skip = 0) => {
   const results = await ctx
     .beginBatch()
     .run(`hashcat -a 3 -m 400 '${args.hash}' '${args.mask}' --skip=${skip} --limit=${Math.min(keyspace-1,step + step-1)} -o pass.potfile`)
     .run("cat pass.potfile")
     .end()
     .catch((err) => console.error(err));
   if (!results?.[1]?.stdout) return false;
   return results?.[1]?.stdout.split(":")[1];
 });


Note, we use the `beginBatch()` method to organise together 2 sequential commands: first will run the hashcat and the second will print the content of the output file.
As we conclude the batch with `end()` method the task function will return an array of results objects. As the `cat pass.potfile` is run as a second command its result will by inder index 1. Keep in mind that tasks executed on a single worker instance run within the same virtual machine and share the contents of a VOLUME. This means that files in the VOLUME left over from one task execution will be present in a subsequent run as long as the execution takes place on the same provider and thus, the same file system.



### Processing the results

The results object return by `map()` is type of AsyncIterable, that can be iterated with the for await statement:


```js
for await (const result of results) {
   if (result) {
     password = result;
     break;
   }

if (!password) console.log("No password found");
 else console.log(`Password found: ${password}`);
 
await executor.end();
```

Once we get the password we print it in the console and end executor.

### The complete example

```js
import { TaskExecutor } from "yajsapi";
import { program } from "commander";

async function main(args) {


const executor = await TaskExecutor.create({
   package: "055911c811e56da4d75ffc928361a78ed13077933ffa8320fb1ec2db",
   maxParallelTasks: args.numberOfProviders,
   yagnaOptions: { apiKey: 'try_golem' }
 });


 const keyspace = await executor.run(async (ctx) => {
   const result = await ctx.run(`hashcat --keyspace -a 3 ${args.mask} -m 400`);
   return parseInt(result.stdout || "");
 });

 if (!keyspace) throw new Error(`Cannot calculate keyspace`);

 console.log(`Keyspace size computed. Keyspace size = ${keyspace}.`);
 const step = Math.floor(keyspace / args.numberOfProviders + 1);
 const range = [...Array(Math.floor(keyspace / step)+1).keys()].map((i) => i*step);

 const results = executor.map(range, async (ctx, skip = 0) => {
   console.log(`hashcat -a 3 -m 400 '${args.hash}' '${args.mask}' --skip=${skip} --limit=${Math.min(keyspace-1,skip + step-1)} -o pass.potfile`);
   const results = await ctx
           .beginBatch()
           .run(`hashcat -a 3 -m 400 '${args.hash}' '${args.mask}' --skip=${skip} --limit=${Math.min(keyspace-1,skip + step-1)} -o pass.potfile`)
           .run("cat pass.potfile")
           .end()
           .catch((err) => console.error(err));
   if (!results?.[1]?.stdout) return false;
   return results?.[1]?.stdout.split(":")[1];
 });

 let password = "";
 for await (const result of results) {
   if (result) {
     password = result;
     break;
   }
 }

 if (!password) console.log("No password found");
 else console.log(`Password found: ${password}`);
 await executor.end();
}

program
 .option("--number-of-providers <number_of_providers>", "number of providers", (value) => parseInt(value), 3)
 .option("--mask <mask>")
 .requiredOption("--hash <hash>");
program.parse();
const options = program.opts();
main(options).catch((e) => console.error(e));

```

To test our script, copy it into index.mjs file. Ensure your yagna daemon is running run:

=== "Linux/ Mac"
    
	```js
	node index.mjs  --mask '?a?a?a' --hash '$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/'
	```
=== "Windows"
	```js
	node index.mjs  --mask "?a?a?a" --hash "$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/"
	```


!!! Info

You can clone yajsapi repository and find the complete project in the the `examples/hashcat` folder.


## Summary

In this tutorial we led you through following steps:

* Custom Golem image creation
* Parallel task execution across multiple providers
* Submitting multiple commands sequences as a single task
* Reading output from commands executed on a provider


!!! golem-icon "Next steps:"

	[Examples](index.md){ .md-button .md-button--primary }


