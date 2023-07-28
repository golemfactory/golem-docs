---
description: Working with results
---


!!! Prerequisites	
- Yagna daemon installed and running


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
  
When your command fails the ExeUnit (component that is responsible for running your image on remote computer and it runs your commands there) will stop all remote processes and the whole task will be terminated.

What will happen in such case depends on the way your task is composed. Let's see it in examples.

In the below case, user's commands are chained in a batch. An error occures when user tries to download `output.txt` file from `/golem/output/` folder while the file was created in `golem/input` folder.
This command with raise an error and the whole task will be stoped. Next command (listing the content of `/golem/` folder) will not be executed at all.

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
       .run('cat /golem/input/output.txt > /golem/input/output.txt')
       .downloadFile("/golem/output/output.txt", "./output.txt") // there is no such file in output folder
       .run("ls -l /golem/") 
       .end()
       .catch((error) => console.error(error));

       return res
       
  });

  console.log(result);
  await executor.end();
 
})();
```
![batch_fail](/assets/bad_result_single_log.png "Requestor script output logs")

Note 1: while user will receive the error message, the output is only for the failing command not for all commands in the task. 

The level detail of the message depends on the type of methods that cases the error.

In case of data transfer method you will receive message describing the cause of the error.

Let's see enother exemple:

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

![single_fail](/assets/bad_result_log_1.png "Requestor script output logs")
![single_fail](/assets/bad_result_log_2.png "Requestor script output logs")

Note we have no `catch()` inside task function this time, therefore TaskExecutor retries the task on 3 other providers before terminating the whole Job. 

In case of the failure in `run()` method we receive the exit code of the command that failed.
So in case of `node -w` as the node command runs but returns the error user received exit code 9, that is node exit code that means:

"Exit Code 9, Invalid Argument: This is employed when an unspecified option was given or when a value-required option was given without one.."

In case the shell could not run the command, user would recevie the exit code 127 from linux shell. 

Final note: if you run your tasks using `map()` or `forEach` methods TaskExecutor will stop the whole Job and will not continue after failure of any Task.


