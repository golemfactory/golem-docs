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

### Initializing tasks

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


imapp1019_2.h

Log from this example shows that even inf the provider `imapp1019_2.h` eventually was used to execute 3 tasks, it uplaoded the log only once. It's output file was downloaded 3 times (overwriting previous logs) and finally contains:

```
--------------------------- 
processing item: 1
processing item: 4
processing item: 5
```
These logs illustrate again that providers offer different performance levels. Even if `fractal_01_1.h` and `fractal_01_3.h` signed agreement before Task 1 was computed on `imapp1019_2.h` it manage to complete Tasks 4 and Task 5 before they downloaded action_log file and completed their first task. 