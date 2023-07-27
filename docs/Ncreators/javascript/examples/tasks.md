---
description: Executing task
---

!!! Info	
yagna daemon installed and running with `try_golem` app-key configured.


### Setting up project

Create a project folder, initialize node project and install yajsapi library.
```bash
mkdir golem-example
npm init
npm i yajsapi
```

### Introduction
You can execute a single task on a single provider or execute multiple tasks in parallel.
In the second scenario you can define how providers should be initialized and how many tasks you want to run at the same time.

In this article following examples are presented:

* Running tasks in parallel (map())
* Running tasks in parallel (forEach())
* Defining number of providers working in parallel
* Initializating providers
* Running a single task

### Running tasks in parallel using map() method

If you want to run your tasks in paralel, you can use `map()` method. 

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }
  });

 const data = [1, 2, 3, 4, 5];

 const results = executor.map(data, (ctx, item) => ctx.run(`echo "${item}"`));

 for await (const result of results) console.log(result.stdout);
   
 await executor.end(); 
    
  
})();

```
The method `map()` accepts an array that defines the total number of tasks to be executed and may contain the data used to define a tasks.
In the example we have an array of 5 elements `[1, 2, 3, 4, 5]` and we use these values within task function to define task details. For each task another element from data array is passed as `item` and then used to customise argument for the `echo` command.

Note that result of the executor `map()` is an asynchronous iterable object with each element accessible with the `for await` statement. 

![Multiple run map](/assets/map_log.png)
 
In the output logs you can see some interesting features:

First provider `sharkoon_379_6` was engaged first. When he finished his first task he was apparently still the only available provider and he recevied another tasks to execute. In the meantime other providers were succesfully engaged and the next tasks were dispatched to them.

Note that even if provider `sharkoon_379_8` was engaged before provider `10hx4r2_2.h`, the latter completed its task before the former. In the network different nodes offer different performance. 


### Running multiple tasks in parallel using forEach() method

If you do not need an object to facilitate proccessing results of all the tasks, you can use another method that can also execute tasks in prallel. Even if `forEach()` method does not return object to iterate through the result, you can still access the result object for each command within task function.  

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }
  });


 const data = [1, 2, 3, 4, 5];
 
 await executor.forEach(data, async (ctx, item) => {
  console.log((await ctx.run(`echo "${item}"`)).stdout);
});
   
 await executor.end(); 
    
  
})();
```

### Defining number of providers used 

You can decide the maximum number of providers to be engaged at the same time. Task executor will scan available proposals and will engage additional providers if number of actually engaged providers would be lower then `maxParallelTasks` and there would be still some tasks to be executed. 
If you would not define this param a default value of 5 will be used.

Note that actual number of engaged providers might be both:
* lower then `maxParallelTasks` (if there is not enough providers available in the network).
* higher (if you take into account the total number of engaged providers for all the tasks in your job) - providers might get disconnected or simply fail and then executor will engage another one in order to have the numer of active workers at the level defined by `maxParallelTasks`.

Here you can see how to define maximum number of providers to be engaged.

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }, 
    taskOptions: {maxParallelTasks: 3} // default is 5
  });

 const data = [1, 2, 3, 4, 5];

 const results = executor.map(data, (ctx, item) => ctx.run(`echo "${item}"`));

 for await (const result of results) console.log(result.stdout);
   
 await executor.end(); 
    
  
})();

```


### Initialization tasks


Normally when a bigger job is split into smaller tasks that are run in parallel on limited number of providers they would be utilised for more then one tasks. In such cases the task is executed in the same environment as the previous task (run on that provider). One might seek an option to optimise performance and decide that some initialisation tasks could be run only once per provider. That would be specifically useful if you had to send some big data to provider.

You can address such a need using `beforeEach()` method of the TaskExecutor. See this example:

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }, 
    taskOptions: {maxParallelTasks: 3}
  });

  executor.beforeEach(async (ctx) => {
    console.log(ctx.provider.name + ' is dowloading action_log file');
    await ctx.uploadFile("./action_log.txt", "/golem/input/action_log.txt");
    
  });

  await executor.forEach([1, 2, 3, 4, 5], async (ctx, item) => {
     
     await ctx
       .beginBatch()
       .run(`echo `+ `'processing item: ` + item + `' >> /golem/input/action_log.txt`)
       .downloadFile("/golem/input/action_log.txt", "./output_"+ctx.provider.name+".txt")
       .end();
       
  });

  await executor.end();
    
  
})();

```

In the code we limited `maxParallelTasks` value, to make sure that some of our 5 tasks will be run on the same provider.

The `beforeEach()` method is used to upload a file to a remote computer that will be used to log all future activity run on this provider. The task function used in `beforeEach()` method contains additional `console.log` to prove that even if the whole job consist of 5 tasks, the taks function used in `beforeEach()` will be used only once per provider. (Unless provider would disengage and be engaged again - in such situation its virtual machive would be created as new and we would upload the file again there).

Note how we utulized `ctx` worker context to get provider name using `provider.name` property.

In the task function utilized in the `forEach()` method we used `beginBatch()` to chain multiple commands - you can see more about this feature in the [defining tasks](commands.md) article.

![BeforeEach](/assets/before_log.png)

Log from this example shows that even if the provider `imapp1019_2.h` eventually was used to execute 3 tasks, it uplaoded the log only once. It's output file downloaded after the lasts task was execute d contained:

```
--------------------------- 
processing item: 1
processing item: 4
processing item: 5
```

These log illustrate again that providers offer different performance levels. Even if `fractal_01_1.h` and `fractal_01_3.h` signed agreement before Task 1 was computed on `imapp1019_2.h`, that provider managed to complete Tasks 4 and Task 5 before they downloaded `action_log`` file and completed their first task. 


### Single run

Sometimes you do not need to run the tasks in parallel and single run is enough. You can use `run()` method as in the example below. 

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

The requestor script runs once a single task defined by a task function:
`ctx.run("node -v")`. Result of the command is available as stdout of the result object returned from the `ctx.run()`: 

Here you can see the script logs:

![Single run](/assets/run_log.png "Requestor script output logs")

In the logs you can see requestor works in goerli network (this is a test network). 
The task was executed once on a single provider. 

In the table we see summary and the costs (we paid here in test GLM) and the the result of the command: version of the node in the image.