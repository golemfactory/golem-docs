---
description: Working with results
---


!!! Prerequisites	
- yagna daemon installed and running


### Setting up project

Create a project folder, initialize node project and install yajsapi library.

```bash
mkdir golem-example
npm init
npm i yajsapi
```

### Obtaining results 

#### Single command task

For each of the command run you can obtain a result object. Lets look at the simple example: we will run a tasks that consist of single command and will print content of the result object:

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }
    , isSubprocess: true
  });


  const result = await executor.run(async (ctx) => (await ctx.run("node -v")));
  console.log("Task result:", result);
  
   
  await executor.end();

})();
```

Note: In this example our tasks consist of single command: `node -v`. `ctx.run()` returns object that is then passed to `result` variable and printed.

Index is the sequential number of a command (we have just 1 and start counting from 0),
status of the result is "ok" == command was normally completed and the actual results of the command are under `stdout`.

![result](/assets/result_log.png "Requestor script output logs")


#### Multi-command task

If you run your tasks in batch ended with `.end()`, 
  
```js
  import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }
  });


  const result = await executor.run(async (ctx) => {
     
     const res = await ctx
       .beginBatch()
       .uploadFile("./worker.mjs", "/golem/input/worker.mjs")
       .run("node /golem/input/worker.mjs > /golem/input/output.txt")
       .run('cat /golem/input/output.txt')
       .downloadFile("/golem/input/output.txt", "./output.txt")
       .end()
       .catch((error) => console.error(error));

       return res;
       
  });

  console.log(result);
  await executor.end();
 
})();
```
  
you will receive an array of result objects:

![results](/assets/result_batch_log.png "Requestor script output logs") 


In case you end your batch with `endStream()` method:

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }
  });


  const result = await executor.run(async (ctx) => {
     
     const res = await ctx
       .beginBatch()
       .uploadFile("./worker.mjs", "/golem/input/worker.mjs")
       .run("node /golem/input/worker.mjs > /golem/input/output.txt")
       .run('cat /golem/input/output.txt')
       .downloadFile("/golem/input/output.txt", "./output.txt")
       .endStream();

       res.on("data", (result) =>  console.log(result));
       res.on("error", (error) => console.error(error));
       res.on("close", () => executor.end());
    
  });
 
})();

```
each `data` chunk will contain result object in the sequence the commands where within the batch:

![results](/assets/batch_result_endstream_1.png "Requestor script output logs") 
![results](/assets/batch_result_endstream_2.png "Requestor script output logs") 

??? Question:
Do we need to comment the result in case of using for loop?

      
####  What if your commands would fail?
  
When your command fails the ExeUnit (component that is responsible for running your image on remote computer and it runs your commands there) will terminate all processes and the whole task will be terminated.

What will happen in such case depends on the `retryStrategy`. The default behaviour is to repeat the task 3 times (usually on another providers) unless the exit code of the failing command does not indicate that the reason for the failure was on a user side.
So depending on the exit code, executor will try to execute the task again or if in case of suspected user error it will accept that the tasks failed and report the results.

Note: if you run your tasks in a for loop you need to handle yourself if you want the loop to continue in case a single task failed accordingly to your needs.

Below you have example showing `retryStrategy` usage for a task that consists of several commands chained into a batch, (actual strategy code in example shows default behaviour, but you can modify it by providing your own implementation).

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }
    retryStrategy: () => {/* to be implemented */}
  });


  const result = await executor.run(async (ctx) => {
     
     const res = await ctx
       .beginBatch()
       .run('cat /golem/input/output.txt > /golem/input/output.txt')
       .downloadFile("/golem/output/output.txt", "./output.txt")
       .run("ls -l /golem/")  // result for this command will not be returned
       .end()
       .catch((error) => console.error(error));

       return res
       
  });

  console.log(result);
  await executor.end();
 
})();
```
![batch_fail](/assets/bad_result_single_log.png "Requestor script output logs")

!!! error
we had not received result object. (but error handling is better then in alfa2)

And an example where a single command failed:

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }
    , isSubprocess: true
  });


  // there is mistake and instead of 'node -v' we call 'node -w' 
  const result = await executor.run(async (ctx) => (await ctx.run("node -w")));
  console.log("Task result:", result);
  
   
  await executor.end();

})();

```

Note: if your command would fail
![single_fail](/assets/bad_result_log_1.png "Requestor script output logs")
![single_fail](/assets/bad_result_log_2.png "Requestor script output logs")

!!! error
Note that now in case of result in single run, we have error after 3 retrials. This is to be corrected.