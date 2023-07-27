---
description: Create your own JavaScript application on Golem
---

# JS QuickStart Explained

Let's look closer at our requestor.js script that is used to run a JS QuickStart task on Golem Network.

## JS script structure

The basic structure of the script:

```bash
import { TaskExecutor } from "yajsapi";

(async () => {
  	 //... Function body in here 
})();
```

Here we do two things:

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
	
	// 2. run the task
	const taskResult = await executor.run( /*taskToRunOnProvider to be provideed here */);

	
	// 3. finish Task Executor
	await executor.end();

	console.log("Task result:", taskResult);

})();
```

In (1) we create a TaskExcutor Instance using a factory method. In this example we use the minimal set of parameters: namely the hash indicating the image with node.js installed - the image we will deploy on the provider and api-key value - a key that will give us access to `yagna` REST API. `yagna` is a daemon that connects us to the network. 
We use api-key that was generated in the process of [yagna installation](../examples/tools/install_yagna.md)

```js
 const executor = await TaskExecutor.create({
    	package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
		yagnaOptions: { appKey: 'try_golem' }});
```

Next (2) we run the task. Here we use a run method that accepts the worker function as its argument. We will define the task function in a moment. We store the result of the `executor.run()` into taskResult variable. 

Note there are other methods that allow you to execute tasks, they are introduced in [Task API Guide](../guides/task-model.md) and explained in [examples](../examples/index.md) section.


```js
	const taskResult = await executor.run(taskToRunOnProvider);
```

Finally (3) we gracefully finish task executor:

```js
	await executor.end();
```


## Defining task function

Let’s see how the task is defined and replace the `taskToRunOnProvider` placeholder we used in the previous step.

The task is defined as a function that implements the Worker interface. This function will get its parameter workContext from the executor. It is an object that let you to run your commands in the scope of one task on one provider. 

```js
const taskToRunOnProvider = async (ctx) => // task is defined here;
```

Our task in this example is simple and consists of a single command: namely `node -v`. We will use the async method `run()` of workerContext `ctx`. The output of this method is a Promise of `result` object, once it is resolved it contains output of the command we run, available as `stdout` property.

```js
const taskToRunOnProvider = async (ctx) =>  (await ctx.run("node -v")).stdout;
```

The output of the task function is passed to `executor.run()` and assigned to taskResult. 
Finally we print it to the console.


```js
import { TaskExecutor } from "yajsapi";

(async () => {

	const executor = await TaskExecutor.create({
    	package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
		yagnaOptions: { appKey: 'try_golem' }});
	
	const taskResult = await executor.run(async (ctx) => (await ctx.run("node -v")).stdout);
	
	await executor.end();
	
	console.log("Task result:", taskResult);

})();
```

## Summary

We had created a simplest requestor script, that run a single command on remote computer. 
to achive it we had:

* imported yajsapi lib
* utilized Immediately Invoked Async Function Expression
* created Task Executor
* defined a task as a function that runs our command
* finally read the command result from the result object and provided it to the user


In this example, we had run a simple command (node -v) in a shall on the remote computer. You can run other executable programs in more interesting scenarios. See other examples for more advanced use cases.

