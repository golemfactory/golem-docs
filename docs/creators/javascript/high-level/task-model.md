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

When you run your Job - you execute a Task. In fact to take full advantage of the network you should split your Job into many Tasks.
	
A single task will be run on a single provider. If you can divide your Job into many smaller independent fragemnts - they will be processed in parallel on multiple providers. The Task API will spawn them on available providers for you.

Tasks are defined as functions that implement Worker Interface. Each worker function may be a single command (like: echo “Hello World”), but may consist of multiple separate steps including sending files to and from the provider to your local machine. We provide examples showing the usage of API in different scenarios.

Tasks are run in the context that is defined by the image. In our examples we use Golem standard images, but we also provide tutorials on how to prepare your own images.

## Main Tasks API features:

!!! info

    Click on the links to go the the usage examples.

### Orchestrating tasks execution

Task executor may run:

* a single task on a single provider (`.run()` method). 
* multiple tasks on available providers (`.map()` and `.forEach()` methods). The number of providers is defined by the user, providers may be used more than once until all tasks are executed.
* a specific command run once per engaged provider (`.beforeEach()`). This allows to run some initialisation before processing main batch of tasks.

	
### Defining Tasks

Tasks are defined as worker functions. The function receives worker context that can be used to:

* run a single command on remote computer (`.run()` method). Commands can be run in sequence.
* organise a set of commands into a batch: (`.beginBatch()` method) with 2 different output forms:
	* Promise (`.end()` method)
	* stream (`.endStream()` method)

These commands may be combined with other methods designed to trasfer files to and from a provider.

### Sending Data to and from Providers

User can send:

* files to remote computer (`.uploadFile()` method)
* files from remote computer (`.downloadFile()` method)
* json to remote computer (`.uploadJson()` method)

Note: user must define a VOLUME to indicate a folder designed to contain files on remote computer.

###  Processing results

Each command (run, uploadFile) will produce a result object that contains stdout, stderr of the commmand run. 
In case of Tasks executor map method user will receive iterative object.
In case of batch provessed commands user will erceive an array of result objects or a stream of events/results ??
 

### Defining minimal requirements for provider system

User can define minimal requirements for the provider's system (like memory, storage, CPU Threds, CPU cores) via initial parameters provided to the `TaskExecutor.create()` method.

### Selecting providers

User can filter and select providers based on price, internal scoring table. 

### Other configuration parameters

User can define how the Job is realised by defining numer of providers engaged to execute tasks	(`maxParallelTasks` parameter).


You can explore our tutorials to see how to effectively use these functionalities.




!!! golem-icon "Next steps:"

    ??? quote "Return"

        [Introduction to Task API](index.md){ .md-button .md-button--primary }
    
    ??? abstract "Examples"
        
        [Task Example 0: Hello World!](../examples/hello.md){ .md-button .md-button--primary }

        [Task Example 1: Simple Usage of Task API](../examples/simple.md){ .md-button .md-button--primary }

        [Task Example 2: Hashcat on Golem](../examples/hashcat.md){ .md-button .md-button--primary }

        [Task Example 3: Requestor in browser](../examples/web.md){ .md-button .md-button--primary }

    ??? question "Continue"

        [Diving deeper with Core API](../mid-level/index.md){ .md-button .md-button--primary }