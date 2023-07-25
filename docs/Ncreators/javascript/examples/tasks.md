---
description: Executing task
---

!!! Prerequisities	
- yagna daemon installed and running


### Setting up project

Create a project folder, initialize node project and install yajsapi library.
```bash
mkdir golem-example
npm init
npm i yajsapi
```


Note: Article to be rebuilt: new sequence

Defining number or providers working in parallel

Running tasks in parallel (for loop)
Running tasks in parallel (prosaic way) 
Initializating providers
sRunnign a single task (to be used in browser)



### Defining number of providers used 

You can decide the maximum number of providers to be engaged at the same time. Task executor will scan available offers and will engage additional providers if number of actually engaged providers would be lower then `maxParallelTasks` and there would be still some tasks to be executed. Note that actual number of engaged providers might be lower (if there is not enough providers available in the network). For the whole job the number of providers could be also higher - providers might get disconnected or fail and then executor will engage another one in order to have numer of active workers at the level defined by `maxParallelTasks`.

Here you can see how to define maximum number of providers to be engaged. See [Running tasks in parallel]() to see full example.

```js
(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }, 
    taskOptions: {maxParallelTasks: 10} // default is 5
  });
```




### Running tasks in parallel

We can execute different task in parallel:

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }
    //, taskOptions: {maxParallelTasks: 2} // default is 5
  });
  
 
  const [result_1, result_2] = await Promise.all(
      
      [executor.run(
        async (ctx) => (await ctx.run("echo 1")).stdout), 
        executor.run(
        async (ctx) => (await ctx.run("echo 2")).stdout)]);

  
        await executor.end();

  console.log("Task 1 result:", result_1);
  console.log("Task 2 result:", result_2);

  
})();
```

Here you can see the script output:

![Multiple run](/assets/run2_log_21.png)

Log from this example shows there is some performance difference between providers and provider `10hx4r2_3.h` inspite of being engaged earlier actully need more time to download the image and started computation later then his competitor: `4gdpwl2_1.h`.

Look at another log from the same script run another time. Here the first provider finished his task before we managed to engage another one for a second task, therefore once he finished his first task, he received second one to be executed:

![Multiple run](/assets/run2_log_21.png)


!!! error to be replaced 
### Running multiple tasks in parallel using map() method

Actually if your tasks could be parametrised or commands available as elements in an array you should use `map()` menthod.

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' },
    taskOptions: {maxParallelTasks: 3}
  });

 const data = [1, 2, 3, 4, 5];

 const results = executor.map(data, (ctx, item) => ctx.run(`echo "${item}"`));

 for await (const result of results) console.log(result.stdout);
   
 await executor.end(); 
    
  
})();

```

`map()` accepts array with data as additional param. Each element of the array will be passed to task function as an `item`.

Note that result of the executor map is an asynchronous interable object, with each element accessible with the for await statement. 

![Multiple run map](/assets/map_log.png)
 
Note in the logs above that [Task Executor] engaged 3 providers in paralell, accordingly to the value of the `maxParallelTasks` params. 


### Running multiple tasks in parallel using forEach() method

If you do not need an object to facilitate proccessing results of all the tasks, you can use another method that can execute tasks in prallel. Even if `forEach()` method does not return obejct to iterate the result, you can still access the resutl object for each command.  

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


### Initialization tasks

The simple scenario assumes that the bigger jobs is split into smaller tasks that are run in parallel on many providers. As the number of available provider might be smaller than number of tasks, some providers will get more then one tasks.


!!! Info
Number of engaged providers can be also impacted by the requestor using `maxParallelTasks` option or by selection criteria defined in demand or in Market Strategy.


In such cases the tasks function is executed in the same environment as the previous tasks (run on that provider). One might seek an option to optimise performance and run some initialisation tasks only once per provider. That would specifically useful if you had to send some bigger data to provider.

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

When you look at this code you will see that we limited `maxParallelTasks` from default value of 5 into 3, to make sure that some of our 5 tasks will be run on the same provider.

Next you can see usage of the `beforeEach()` method. It is used to upload to the remote computer a file that will be used to log all future tasks run on this instance. The task function contains additional console.log to prove that even if the whole job consist of 5 tasks, the `uploadFile()` will be used only once per provider. (Actually once per active agreement, in theory, provider could disengage and be engaged again - in such situation its virtual machive would be created as new and we would uploadFile again there).

Note how we utulized `ctx` worker context to get provider name.

In the task function utilized in the `forEach()` method you can see to orgnise multiple commands into single batch - you can see more examples related to this topic here.

![BeforeEach](/assets/before_log.png)


Log from this example shows that even inf the provider `imapp1019_2.h` eventually was used to execute 3 tasks, it uplaoded the log only once. It's output file was downloaded 3 times (overwriting previous logs) and finally contains:

```
--------------------------- 
processing item: 1
processing item: 4
processing item: 5
```
These logs illustrate again that providers offer different performance levels. Even if `fractal_01_1.h` and `fractal_01_3.h` signed agreement before Task 1 was computed on `imapp1019_2.h` it manage to complete Tasks 4 and Task 5 before they downloaded action_log file and completed their first task. 

### Single run


The requestor script run once a single tasks defined buy task function:
`ctx.run("node -v")`. The tasks consist of a single command `node -v` and will be run on remote computer in the environemnt based on the content of the image indicated by `529... 6d4` hash.

Result of the command is available as stdout of the result object returned from the `cx.run()`: 


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

Here you can see the script output:

![Single run](/assets/run_log.png "Requestor script output logs")

In the logs you can see requestor works in goerli network (this is a test network). 
The task was ececuted once on a single provider. 

In the table we see summary and the costs (we paid here in test GLM) and the the result of the command: version of the node in the image.



HIDE:

!!!Warning

You could run both tasks sequentially:

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }, 
    taskOptions: {maxParallelTasks: 5}
  });
  
  const result_1 = await executor.run(
      async (ctx) => (await ctx.run("echo 1")).stdout);

  const result_2 = await executor.run(
      async (ctx) => (await ctx.run("echo 2")).stdout);  

  await executor.end();

  console.log("Task 1 result:", result_1);
  console.log("Task 2 result:", result_2);

  
})();
```

![Multiple run sequentially](/assets/run2_log_1a1.png)

As you could expect the second task is started only the first is finished and unless the provider would disengage he will also receive consecutive tasks to execute. Note this is not the best scenario, as you do not utilise the power of the network capable to run your tasks in parallel.



