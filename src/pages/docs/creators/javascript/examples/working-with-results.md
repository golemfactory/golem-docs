---
description: Working with results
title: Working with results
---


{% alert level="info" %}

# Prerequisites 
Yagna service installed and running with `try_golem` app-key configured.

# Setting up project

Create a project folder, initialize a Node.js project, and install the `yajsapi` library.

```bash
mkdir golem-example
npm init
npm i yajsapi
```
{% /alert %}



## Introduction

For each command that is run, you can obtain a result object.

## Single command task

Let's look at the simple example: we will run a tasks that consists of single command and will print the content of the result object:

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

In this example, our task consists of a single command: `node -v`. `ctx.run()` returns an object that is then passed to the `result` variable and printed.

Index refers to the sequential number of a command (we have just one, and counting starts from 0),
`status` of the result is "ok" which indicates the command was completed successfully, and the actual results of the command are under `stdout`.


![Result ](/result_log.png)


## Multi-command task

When you run your tasks in a batch that is concluded with `.end()`: 
  
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

![results logs](/result_batch_log.png) 


In case you end your batch with the `endStream()` method:

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
Each `data` chunk will contain a result object, in the sequence that the commands where in within the batch:

![results output logs](/batch_result_endstream_1.png) 
![results output logs](/batch_result_endstream_2.png) 

      
##  What to do if your command failed?
  
When your command fails, the ExeUnit (the component responsible for running your image on the remote computer) will terminate all remote processes. As a result, the entire task will be terminated.

What will happen in such a case depends on the way your task is composed. Let's see it in examples.

In the below case, the user's commands are chained in a batch. An error occurs as the user tries to download the `output.txt` file from `/golem/output/` folder while the file was created in the `golem/input` folder.
This command will raise an error and the whole task will be terminated. The next command, listing the content of `/golem/` folder, will not be executed at all.

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
![Batch failure output log](/bad_result_single_log.png)

Note 1: while the user will receive the error message, the output is only for the failing command not for all commands in the task. 

The level detail of the message depends on the type of method that causes the error.

In the case of the data transfer method you will receive a message describing the cause of the error.

Let's see another example:

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

![Single failure output log](/bad_result_log_1.png)
![Single failure output log](/bad_result_log_2.png)

Note we have no `catch()` inside the task function this time, therefore TaskExecutor retries the task on 3 other providers before terminating the whole Job. 

In case of the failure in the `run()` method we receive the exit code of the command that failed.
So in case of `node -w` as the node command runs but returns the error user received exit code 9, that is node exit code that means:

"Exit Code 9, Invalid Argument: This is employed when an unspecified option was given or when a value-required option was given without one.."

In case the shell could not run the command, the user would receive the exit code 127 from linux shell. 

Final note: if you run your tasks using `map()` or `forEach()` methods TaskExecutor will stop the whole Job and will not continue after failure of any Task.


