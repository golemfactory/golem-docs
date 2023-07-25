---
description: Executing multiple task
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

To run examples you need to save example code snippet as index.mjs in the golem-example folder and run it with `node index.mjs`.

There are a few options to run more then one task:

- run multiple tasks in parallel (prosaic way)
- run tasks in sequence
- run multiple tasks in parallel using map() method
- run multiple tasks in parallel using forEach() method

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