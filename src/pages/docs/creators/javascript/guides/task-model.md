---
Description: Introduction to Golem Network and Task model
---


# Introduction to Golem Network and Task model

## Golem Network

Golem Network is a p2p network that consists of many nodes. Each node is a system with a __Yagna__ daemon running on it. The nodes that offer their resources to others are called __providers__. The nodes that hire resources are called __requestors__.
    
To get things done (the Job) in the Network, you need to define it, split it into task(s), and send it to the network using the Yagna demon. This is done using a __requestor script__ (or simply __Golem app__) that will utilize Golem JS SDK. You also need to define the environment used to run your activity on a provider, it is done by a software package in the form of a Docker-like __image__. 

Let's get familiar with other terms that will help you navigate through Golem docs and find relevant information more easily.

A most simple operation, like running a command or sending a file, is called a __command__
We __compose__ tasks from commands.
Tasks are __executed__ on __providers__ aka __remote computers__.

So, to run your app on Golem Network you need:

* A Yagna demon that will let you connect to the Golem Network.
* A Docker-like [Image](../guides/golem-images-explained.md), that constitutes an environment in which you will run your commands.
* A [requestor script](../guides/golem-images-explained.md), in which you will define tasks and execute them.

The script will use Task API provided by JS SDK lib, so let’s get familiar with the Task model.


## Task model

You can use the Golem Network resources to do a Job. A simple Job is just a single Task that you want to execute on the remote computer. In fact to take full advantage of the network you should split your Job into many Tasks.
    
A single Task will be run on a single provider. If you can divide your Job into many smaller independent fragments - they will be processed in parallel on multiple providers. The Task API will spawn them on available providers for you.

Tasks are defined as functions that implement Worker Interface. Each task function may be a single command (like: `echo “Hello World”``) but may consist of multiple, separate steps, including sending files to and from the provider. We provide examples showing the usage of API in different scenarios.

Tasks are run in the context that is defined by an image. Images are defined using Dockerfiles and then converted to Golem format using Golem provided tool. In our examples, we use Golem standard images, but we also provide tutorials on how to prepare your image.

## Main Task API features:

!!! info

    Click on the links to go the the usage examples.

### Orchestrating task execution

Task executor may run:

* a single task on a single provider (`.run()` method). 
* multiple tasks on available providers (`.map()` and `.forEach()` methods). The maximum number of concurrently engaged providers is defined by the user; providers can be engaged more than once until all tasks are executed.
* An initializing command runs once per engaged provider (`.beforeEach()`). It allows for the preparation of workers before processing the main batch of tasks.

Users can also define the maximum number of concurrently engaged providers (`maxParallelTasks` parameter).

See examples [here](../examples/tasks.md).

    
### Composing task

Tasks are defined by task functions. The simplest function contains just a single `run()` call on worker context `ctx`. You can run commands in sequence or chain them into batches. In this section you will be provided with examples showing how to: 

* Run a single command on a remote computer (`.run()` method).
* Organise a set of commands into a batch: (`.beginBatch()` method) with 2 different output types:
    * Promise (`.end()` method)
    * ReadableStream (`.endStream()` method) 

See examples [here](../examples/commands.md).   

### Sending data to and from providers

Users can send:

* files to remote computer (`.uploadFile()` method)
* files from remote computer (`.downloadFile()` method)
* json to remote computer (`.uploadJson()` method)

Note: The user must define a VOLUME within an image definition, to indicate a folder designed to contain files on a remote computer to enable data transfer.

See examples [here](../examples/data.md).   

###  Processing results

Each command (run, uploadFile) produces a result object that contains stdout, stderr of the respective step run. Users can use this output to manage program flow.

The way you can process results depends on the method you compose tasks and how tasks are composed. 
It also defines how the potential failures on the provider side are handled by the JS SDK.

See examples [here](../examples/results.md).    
  

### Defining minimal requirements for provider system / selecting providers.

Users can define minimal requirements for the provider's system (like memory, storage, CPU Threads, and CPU cores) via dedicated parameters provided by the `TaskExecutor.create()` method.

JS SDK provides the user with several built-in filters: `whiteListProposalIdsFilter()`, `blackListProposalIdsFilter()`, `whiteListProposalNamesFilter()`, `blackListProposalNamesFilter()` that can be used to select or exclude certain providers.

The user can also define his filter using the custom `proposalFilter`.

See examples [here](../examples/demands.md).    


!!! golem-icon "Next steps:"

[JS Examples](../examples/index.md)
You can explore our [tutorials] to see how to use these features effectively.
   
