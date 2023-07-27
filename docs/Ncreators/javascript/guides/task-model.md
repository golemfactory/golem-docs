---
description: Introduction to Golem Network and Task model
---


# Introduction to Golem Network and Task model

## Golem Network

Golem Network is a p2p network that consists of many nodes. Each node is a system with a __yagna__ demon running on it. The nodes that offer their resources for others are called __providers__. The nodes that hire resources are called __requestors__.
	
In order to get things done (the Job) in the Network, you need to define it and split into your task(s) and send it to the network using the yagna demon. This is done using requestor script that will utilize Golem JS SDK. You also need to define the environment used to run your activity on a provider, it is done by software package in the form of an __image__. 

So, to run your tasks on Golem Network you need:

* A yagna demon that will let you connect to the Golem Network. (Yagna)
* Image, that constitute an environment in with you will run your commands (Working with Images)
* A script, in which you will define tasks and execute them. (Simple script)

Script will use Task API provided by yajsapi lib, so let’s get familiar with the Task model.


## Task model

You can use the Golem Network resoruce to do a Job. A simplest Job is just a single task that you want to execute on the remote computer. In fact to take full advantage of the network you should split your Job into many Tasks.
	
A single task will be run on a single provider. If you can divide your Job into many smaller independent fragments - they will be processed in parallel on multiple providers. The Task API will spawn them on available providers for you.

Tasks are defined as functions that implement Worker Interface. Each task function may be a single command (like: `echo “Hello World”``), but may consist of multiple, separate steps, including sending files to and from the provider to your local machine. We provide examples showing the usage of API in different scenarios.

Tasks are run in the context that is defined by an image. In our examples we use Golem standard images, but we also provide tutorials on how to prepare your own image.

## Main Tasks API features:

!!! info

    Click on the links to go the the usage examples.

### Orchestrating tasks execution

Task executor may run:

* a single task on a single provider (`.run()` method). 
* multiple tasks on available providers (`.map()` and `.forEach()` methods). The number of providers is defined by the user, providers may be used more than once until all tasks are executed.
* an initialising command run once per engaged provider (`.beforeEach()`). This allows to prepare workers before processing main batch of tasks.

User can also define how the Job is realised by defining maximum numer of providers engaged to execute tasks (`maxParallelTasks` parameter).

	
### Defining Tasks

Tasks are defined as task functions. The simplest function contains just a single `run()` call on worker context `ctx`. You can run commands in sequence or chain them into batches. In this section you be provided with examples showing how to: 

* run a single command on remote computer (`.run()` method).
* organise a set of commands into a batch: (`.beginBatch()` method) with 2 different output types:
	* Promise (`.end()` method)
	* stream (`.endStream()` method)

`run` commands may be combined with other worker context methods.  

### Sending Data to and from Providers

User can send:

* files to remote computer (`.uploadFile()` method)
* files from remote computer (`.downloadFile()` method)
* json to remote computer (`.uploadJson()` method)

Note: user must define a VOLUME to indicate a folder designed to contain files on remote computer.

###  Processing results

Each command (run, uploadFile) will produce a result object that contains stdout, stderr of the respective step run.

The way you can process results depends on the way you manage tasks and also how are they defined. 
It also defines how the potential failures on provider side will be handled by the yajsapi.
  

### Defining minimal requirements for provider system / selectin providers.

User can define minimal requirements for the provider's system (like memory, storage, CPU Threds, CPU cores) via initial parameters provided to the `TaskExecutor.create()` method.

`yajsapi` provides the user with a number of build-in filters that can be used to selectt better providers. User can also define his own filter where he can i.e. select provider on the basis of user defined criteria.


You can explore our [tutorials] to see how to use these features effectively.

!!! golem-icon "Next steps:"

[JS Examples](../examples/index.md)
   
