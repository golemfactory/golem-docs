---
description: Parallel processing on Golem Network - Tutorial
---



This tutorial will lead you through steps required to execute on Golem Network tasks that can be processed in parallel. 


!!! info

Prerequisites:
Install and run yagna daemon on your machine (see quickstart)
Have docker installed
Initialize payment with yagna payment init --sender (Note: payment needs to be initialized after each launch of yagna service run)


We will go through the following steps:

* Define the problem and split into chunks that can be executed in parallel
* Create an Golem image
* Create a requestor script
* Run the task and process the output
* Run the tasks in parallel and process the output


## Define the problem

As a practical example for a problem that is sutiable forparallel processing we selected a task of recovering password using the hashcat tool. You can apply similar porcedure to utilize Golem Network for other problems that require parallel processing.

Let's assume we have a password hash obtained from an unknown password processed using the "phpass" algorithm. (Phpass is used as a hashing method by popular web frameworks such as WordPress and Drupal) and we know a password mask ?a?a?a (this means the password consists of three alphanumeric characters).
 
Our objective is to recover the password using  Hashcat - command-line utility that cracks unknown passwords from their known hashes. 
Hashcat supports 320 hashing algorithms and 5 different attack types, but for this example, we'll use only the "phpass" algorithm and a simple brute-force attack.


To find the password that matches the given hash and mask, we could run the following command:
```bash
hashcat -a 3 -m 400 in.hash ?a?a?a 
```

where
`-a 3` specifies a brute-force attack,
`-m 400` specifies the `phpass` algorithm, 
`in.hash` is the name of the file that contains the hashed password (for our examples we will use: `$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/`),
`?a?a?a` is the mask to use.

As a result of the above command, the file `hashcat.pot` file will be created and contain the following content:
`$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/:pas`. The output consist of original hash and the recovered password `pas` after `:`.


To speed up the process we could split the keyspace of the potential solution into smaller subsets and run the tasks in parallel.

To achieve this we need  determine the size of the keyspace for a given mask and algorithm:
```bash
hashcat --keyspace -a 3 ?a?a?a -m 400
```

There keyspace for this case is 9025 that could be split into 3 segements with following boundaries:

0..3008
3009..6016
6017..9025

Once we have the segment limits defined we can use `--skip` and `--limit` options in the hashcat command:
```bash
hashcat -a 3 -m 400 in.hash --skip 3009 --limit 6016  ?a?a?a
```

The above command will process the `3009..6016` fragment, and any results in that range will be written to the `hashcat.pot` file.

!!! info

For more information on hashcat arguments, see the complete reference: https://hashcat.net/wiki/doku.php?id=hashcat


## Preparing Image

!!! Info

You can skip this section if you do not have Docker installed and use the image hash provided in the example.

The tasks that we send to remote computer are executer in the context of the specified software package - the image. When we create Task Executor we provide the hashID of the image that will be used during processing. In the quick start example we used an image that contained node.js.

In our case we need to prepare a custom image containing a `hashcat` software that we will use on provider’s machines. 
Golem images are converted from Docker images, so we can start with any existing docker image that meets your needs and modify it to create a custom one.
For our task we will use an off-the-shelf hashcat image (dizcza/docker-hashcat:intel-cpu) and modify it slightly for Golem.

### Dockerfile
Create a `.Dockerfile` file with followng content:

```bash
FROM dizcza/docker-hashcat:intel-cpu
VOLUME /golem/input /golem/output
WORKDIR /golem/entrypoint
```

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
This command will produce the hash of the image that you can use in the example. ?? You can also use the our hash ?? 

 -- image link (for use in SDK): f0a369604d416869654f24e8707a23f31a64af35a32ea6c28bac0480

Note that lifetime of images uploaded anonymously to the repository is limited, and they can be removed from registry portal after some time without notice.

!!! Info

The details of docker image conversion are described here: [Converting an image from Docker to Golem GVMI](link)


## The requestor script code

### Our algorithm 

Based on usage of hashcat tool our algorithm will be stright forward:

* First we will calculate the keyspace, then 
* split it into 3 segments and run 3 tasks in parallel.
* Then we will collect the results and provide user with the output.

Note we could calculate the spacekey locally, but in this example we will also do it on remote computer, avoiding insatlling hashcat on our computer. 

### JS project setup

Now create a project folder and initialise the project. Install yajsapi library.

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

// create Executor - todo
// calculate keyspece - todo
// calculate boundaries for each chunk - todo
// run many providers in parallel - todo
// process and print results  - todo
// end executor  - todo

}

program
 .option("--number-of-providers <number_of_providers>", "number of providers", (value) => parseInt(value), 3)
 .option("--mask <mask>")
.option”--input <filename>
 .requiredOption("--hash <hash>");

program.parse();

const options = program.opts();

main(options).catch((e) => console.error(e));
```

We use the `commander` library to pass arguments such as --mask and --max-workers. This library will print a nice argument description and an example invocation when we run the requestor script with --help. Note you need to install it with `npm install commander`.

The main function contains the main body of the requestor application. Its sole argument, `args`, contains information on the command-line arguments read by the argument parser.

We do not run anything on golme yet.


### TaskExecutor and package definition

To execute our tasks on the Golem network, we need to create a TaskExecutor instance.

```bash
const executor = await TaskExecutor.create({
   package: "055911c811e56da4d75ffc928361a78ed13077933ffa8320fb1ec2db",
   maxParallelTasks: args.numberOfProviders,
   yagnaOptions: { appKey: 'try_golem' }
 });
```


The package parameter is required and points to the image that we want the containers to run. We use the hash of the image created by us, but you can use the hash received from gvmkit-build when you created your image.
.
The other parameters are:
maxParallelTasks: the maximum number of tasks we want to run in parallel
yagnaOptions: { appKey: 'try_golem' } - the app key that links your script to identity on the network.


### Running a single task on the network to calculate the kayspace


The first step in the computation is to check the keyspace size. For this, we only need to execute hashcat with --keyspace and read the command's output.
With the TaskExecutor instance running, we can now send such task to one of the providers using the run method:

```bash
const keyspace = await executor.run(async (ctx) => {
 	const result = await ctx.run(`hashcat --keyspace -a 3 ${args.mask} -m 400`);
	return parseInt(result.stdout || "");
});
```

This call tells the `executor` to execute a single task defined by the task function `async (ctx) => {}`. The ctx object allows us to run single or batch of commands on the provider side.
The keyspace size can be obtained from the result attribute of the executed command.


### Calculate boundaries for chunks

Knowing the keyspace size, we define the list of tasks to execute on providers. We will run hashcat on a fragment of the whole keyspace, using the --skip and --limit parameters.
For each such fragment, we define a separate task for task executor.

```bash

calculation code
```

Note that the number of chunks does not determine the number of engaged providers. In this examples we decided to split the job into 3 tasks, but the number of provider we want to engage is determined by the `maxParallelTasks` parameter. Executor will try to engage that number of providers and them pass the tasks to them. Once a provider is ready to execute a task, it takes up the next task from a common pool of tasks, so a fast provider may end up executing more tasks than a slow one. 


### Running many providers in parallel

Next, we can start looking for the password using multiple workers, executing the tasks on multiple providers simultaneously.
For each worker, we perform the following steps:
Execute hashcat with proper --skip and --limit values on the provider.
Get the hashcat_{skip}.potfile from the provider to the requestor.
Parse the result from the .potfile.


Second call to executor.map: Performing the attack
Next, we can split the whole keyspace into chunks based on the maximum number of providers and prepare a range of computations for each task:

With the range, we use the executor.map method to run the split tasks simultaneously on the Golem Network:
const results = executor.map(range, async (ctx, skip = 0) => {
   const results = await ctx
     .beginBatch()
     .run(`hashcat -a 3 -m 400 '${args.hash}' '${args.mask}' --skip=${skip} --limit=${skip + step} -o pass.potfile`)
     .run("cat pass.potfile")
     .end()
     .catch((err) => console.error(err));
   if (!results?.[1]?.stdout) return false;
   return results?.[1]?.stdout.split(":")[1];
 });




Process the result:




The results object is type of AsyncIterable, that can be iterated with the for await statement:
for await (const result of results) {
   if (result) {
     password = result;
     break;
   }


Alternative
Jeżeli bym ściagał pliki:
	downloadFile (z indeksem by się na nadpisamy) w ramach batch
	To result trzeba dać .result  z result[1] “ok”


To potem 
for await (const result of results) {
   if (result != “ok”) {
     //password = result;
  // no result from provider n
     break;
   }

// locally echo content and parse




let’s run whole example


import { TaskExecutor } from "yajsapi";
import { program } from "commander";

async function main(args) {

 const executor = await TaskExecutor.create({
   package: "055911c811e56da4d75ffc928361a78ed13077933ffa8320fb1ec2db",
   maxParallelTasks: args.numberOfProviders,
   });

 const keyspace = await executor.run<number>(async (ctx) => {
   const result = await ctx.run(`hashcat --keyspace -a 3 ${args.mask} -m 400`);
   return parseInt(result.stdout || "");
 });

 if (!keyspace) throw new Error(`Cannot calculate keyspace`);

 console.log(`Keyspace size computed. Keyspace size = ${keyspace}.`);
 const step = Math.floor(keyspace / args.numberOfProviders + 1);
 const range = [...Array(Math.floor(keyspace / step)).keys()].map((i) => i + step);

before each (send file)

 const results = executor.map(range, async (ctx, skip = 0) => {
   const results = await ctx
           .beginBatch()
           .run(`hashcat -a 3 -m 400 '${args.hash}' '${args.mask}' --skip=${skip} --limit=${skip + step} -o pass.potfile`)
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
.option”--input <filename>
 .requiredOption("--hash <hash>");
program.parse();
const options = program.opts();
main(options).catch((e) => console.error(e));


Example run
To demonstrate the usage of yacat.ts script, let's consider a scenario where you have a hash $P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/ and a mask ?a?a?a. The goal is to crack the password for the given hash.
To run yacat.ts and recover the password, follow the below steps:
Navigate to the directory /examples/yacat
Run the following command in the terminal:
node indext.js  --mask '?a?a?a' --hash '$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/'


This will start the cracking process and should return the password as "pas".

Overview
This example demonstrates the following Golem features:
VM runtime / image
Task execution
Parallel task execution across multiple providers
Submitting multiple task sequences to a single Golem engine
Setting timeouts for commands executed on a provider
Reading output from commands executed on a provider
File transfer to/from a provider's exe unit


tutorial examples)
Then, navigate to examples/yacat:
cd examples/yacat


In the examples/yacat directory, you'll find two files that will be used in this example:
yacat.Dockerfile - the Docker file used for the definition of the provider's container images
yacat.ts - requestor agent's entry point which deals with orchestration of the container runs.














Install dependencies and clone the yajsapi repository (which contains the Success
Please note that the following should be in place before starting the example:
The yagna daemon is running in the background



Keep in mind that tasks within a single worker instance run within the same virtual machine and share the contents of a VOLUME. This means that files in the VOLUME left over from one task execution will be present in a subsequent run as long as the execution takes place on the same provider and thus, the same file system.







# JS QuickStart Explained

Let's look closer at our requestor.js script that is used to run a QuickStart task in Golem Network.

## JS script structure
The basic structure of the script is like this:

```bash
import { TaskExecutor } from "yajsapi";
(async () => {
  	 //... Function body in here 
})();
```

Here we do 2 things:

* import TaskExecutor from yajsapi and 
* create IIAFE (Immediately Invoked Async Function Expression). It has async function declaration because TaskExecutor provides async methods.


## Utilising Task Executor instance

Inside the function body there will be a sequence of 3 steps, that constitute simplest Task Executor lifecycle. Task Executor is a primary object provided by our Task API.  

```js
import { TaskExecutor } from "yajsapi";
(async () => {

	// 1. create Task Executor Instance
	const executor = await TaskExecutor.create({
    		package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
		yagnaOptions: { appKey: 'try_golem' }});
	
	const taskToRunOnProvider = async (workerContext) => {
   		// ... body of task that will be run on same provider
	}

	// 2. run the task
	const taskResult = await executor.run(taskToRunOnProvider);

	
	// 3. finish Task Executor
	await **executor.end()**;

	console.log("Task result:", taskResult);

})();
```

Here we had (1) created a TaskExcutor Instance using a factory method. In this example we used the minimal set of parameters: namely the hash indicating the image with node.js installed - the image we will deploy on the provider and app-key value - a key that will relate our script with idententity on the network.  

```js
 const executor = await TaskExecutor.create({
    		package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
		yagnaOptions: { appKey: 'try_golem' }});
```

Next (2) we run the task. Here we use a run method that accepts the worker function to be run as a parameter. We will define the worker function in a moment. We collect the result into taskResult variable. 

Note there are other methods that allow you to execute tasks, they are introduced in TaskExecutor Guide and explained in more advanced examples.


```js
	const taskResult = await executor.run(taskToRunOnProvider);
```

Finally (3) we gracefully finish task executor:

```js
	await executor.end();
```


## Defining worker function

Let’s see how the task is defined and fill the placeholder we created in the previous step.

```js
const taskToRunOnProvider = async (workerContext) => {
   // ... body of task that will be run on same provider
}
```

The task defined as a function that implements the Worker interface. This function will get its parameter workContext from the executor. It is an object that allows you to run the commands in the scope of one task on one provider. 


Our task in this example is simple and consist of a single command: namely node -v. We define the text of the command in commandToRunInProviderShell variable and within worker function will use the method run of workerContext. The output is a result object, it contains output of the command we run as stdout property. We print it on console.

```js
const taskToRunOnProvider = async (workerContext) => {
   
	const commandToRunInProviderShell = "node -v";
	const result = await workerContext.run(commandToRunInProviderShell);
	return result.stdout;  
}
```

Let’s  add the body of the worker function to our code:

```js
import { TaskExecutor } from "yajsapi";
(async () => {

 const executor = await TaskExecutor.create({
    		package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
		yagnaOptions: { appKey: 'try_golem' }});
	

// 4. define the task  
const taskToRunOnProvider = async (workerContext) => {

	const commandToRunInProviderShell = "node -v";

	const result = await workerContext.run(commandToRunInProviderShell);
	return result.stdout;  
}

	
const taskResult = await executor.run(taskToRunOnProvider);

await executor.end();

console.log("Task result:", taskResult);


})();
```


## Refactor of the code

In the future examples we will use refactored version of this example:

```js
import { TaskExecutor } from "yajsapi";

(async () => {

	const executor = await TaskExecutor.create({
    		package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
		yagnaOptions: { appKey: 'try_golem' }});
	
	const result = await executor.run(
		async (ctx) => (await ctx.run("node -v")).stdout);
	
	await executor.end();
	
	console.log("Task result:", result);

})();
```

## Summary

To create a requestor.js script we:

* imported yajsapi lib
* utilized Immediately Invoked Async Function Expression
* created Task Executor
* created a worker function with our command
* finally read the command result from the result object and provided it to the user


In this example, we had run a simple command (node -v) in a shall on the remote computer. You can run other executable programs in more interesting scenarios. See other examples for more advanced use cases.

