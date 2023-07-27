---
description: Organising commands
---

!!! Prerequisites	
Yagna daemon installed and running with try_golem app-key configured.


### Setting up project

Create a project folder, initialize node project and install yajsapi library.

```bash
mkdir golem-example
npm init
npm i yajsapi
```

### Introduction

Task Executor methods take a task function as a parameter for each of its methods. 
This function is asynchronous and provides access the WorkContext object that is provided as one of its params.

Task function may be very simple and consist of single command of may be consist of set of steps that include running commands or sending data to and from providers. 

Commands can be run in sequence or can be chained in batches. Depending on the way you define your batch you can obtain results of different type.

Following commands are currently available:

| Command     | Available in node.js| Available in web browser |
| ----------- | :------------------:|:------------------------:| 
| `run()` | yes | yes|
| `uploadFile()` | yes | no |
| `uploadJSON()` | yes | no |
| `downloadFile()` | yes | no |

This article focuses on `run()` command and chaining commands using `beginBatch()` method, examples for `uploadFile()`, `uploadJSON()`, `downloadFile()` commands are in [sending data](data.md) article.

We will start with simple example with single `run()` and then will focus on organising more complex task that requires a series of steps:

* send a `worker.js` script to provider (this is a simple script that prints "Good morning Golem!" on the console), 
* run the `worker.js` on a provider and save output to a file (output.txt) and finally
* download the `output.txt` file to back to your computer,


### Running a single command

Below is a copy of simple script that runs `node -v` remotely.

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

Note `ctx.run()` accepts a string as argument and the string is a command invocation exactly the same way one would do in on the console. The command will be run in the folder defined by `WORKDIR` entry in your image. 


### Running multiple commands (prosaic way)

Your task function can consist of multiple steps, all run on `ctx` context.

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4"
    , yagnaOptions: { apiKey: 'try_golem' }
    , isSubprocess: true
  });


  const result = await executor.run(async (ctx) => {
     
    await ctx.uploadFile("./worker.mjs", "/golem/input/worker.mjs");
    await ctx.run("node /golem/input/worker.mjs > /golem/input/output.txt");
    const result = await ctx.run('cat /golem/input/output.txt');
    await ctx.downloadFile("/golem/input/output.txt", "./output.txt")
    return result.stdout;
  });

  console.log(result);
  
  await executor.end();

})();
```

To ensure proper sequence execution all calls must be awaited. We handle only the result of the second `run()` and ignore the other.

Note: if you use this approach each command is sent separately to provider and then executed.

![Commands prosaic](/assets/command_prosaic_log.png "Requestor script output logs")

### Organising commands into batches

Now let's take a look how you can arrange multiple commands into batches.
Depending on the way you finalize your batch you will obtain either:

    - array of result objects or 
    - ReadableStream

#### Organising commands into batch resulting in array of Promises results

Use the beginBatch() method and chain commands followed by `.end()`. 

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
       .catch((error) => console.error(error)); // to be removed and replaced with try & catch 

       return res[2]?.stdout
       
  });

  console.log(result);
  await executor.end();
 
})();
```

Note: all commands after `.beginBatch()` are run in a sequence.
The chain is terminated with `.end()`. The output is a Promise of array of result objects. They are stored at index according to their position in the command chain (first command after `beginBatch()` has index 0).

The output of the 3rd command `run('cat /golem/input/output.txt')` is under index of 2.

![Commands batch end](/assets/batch_end_log.png "Requestor script output logs")

#### Organising commands into batch producing a Readable stream

Use the beginBatch() method and chain commands followed by `endStream()`.

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

       res.on("data", (data) =>  data.index == 2 ? console.log(data.stdout) : '');
       res.on("error", (error) => console.error(error));
       res.on("close", () => executor.end());
    
  });
 
})();
```


Note that now the chain is ended with ` .endStream()` and then we read data chunks from ReadableStream `res`. 

Once the stream is closed we can end our TaskExecutor instance.

![Commands batch endstream](/assets/batch_endsteram_log.png "Requestor script output logs")

!!! Note

As closing the chain with `.endStream()` produces ReadableStream you can also get the results in a synchronous way:

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

       for await (const chunk of res) {
        chunk.index == 2 ? console.log(chunk.stdout) : '';
       }
    
  });

  await executor.end();
 
})();
```