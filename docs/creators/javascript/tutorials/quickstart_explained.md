---
description: Create your own JavaScript application on Golem
---

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

