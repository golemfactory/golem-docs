---
description: Composing tasks commands
---

!!! Prerequisites	
Yagna daemon installed and running with `try_golem`` app-key configured.


### Setting up project

Create a project folder, initialize a Node.js project and install the `yajsapi` library.

```bash
mkdir golem-example
npm init
npm i yajsapi
```

### Introduction

Task Executor methods take a task function as a parameter for each of its methods. 
This function is asynchronous and provides access to the WorkContext object, which is provided as one of its parameters.

A task function may be very simple, consisting of a single command, or it may consist of a set of steps that include running commands or sending data to and from providers. 

Commands can be run in sequence or can be chained in batches. Depending on how you define your batch, you can obtain results of different types.

The following commands are currently available:

| Command     | Available in node.js| Available in web browser |
| ----------- | :------------------:|:------------------------:| 
| `run()` | yes | yes|
| `uploadFile()` | yes | no |
| `uploadJSON()` | yes | no |
| `downloadFile()` | yes | no |

This article focuses on the `run()` command and chaining commands using the `beginBatch()` method. Examples for the `uploadFile()`, `uploadJSON()`, `downloadFile()` commands can be found in the [Sending Data](data.md) article.

We'll start with a simple example featuring a single `run()` command. Then, we'll focus on organizing a more complex task that requires a series of steps:

* send a `worker.js` script to the provider (this is a simple script that prints "Good morning Golem!" in the terminal), 
* run the `worker.js` on a provider and save output to a file (output.txt) and finally
* download the `output.txt` file to back to your computer.


### Running a single command

Below is an example of a simple script that remotely executes `node -v`.

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

Note that `ctx.run()` accepts a string as an argument. This string is a command invocation, executed exactly as one would do in on the console. The command will be run in the folder defined by the `WORKDIR` entry in your image definition. 


### Running multiple commands (prosaic way)

Your task function can consist of multiple steps, all run on the `ctx` context.

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

To ensure the proper sequence of execution, all calls must be awaited. We only handle the result of the second `run()` and ignore the others.

Note: if you use this approach each, each command is sent separately to the provider and then executed.

![Commands prosaic](/assets/command_prosaic_log.png "Requestor script output logs")

### Organizing commands into batches

Now, let's take a look at how you can arrange multiple commands into batches.
Depending on how you finalize your batch you will obtain either:

    - an array of result objects or 
    - ReadableStream

#### Organizing commands into a batch resulting in an array of Promise results

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

Note: all commands after `.beginBatch()` are run in a sequence. The chain is terminated with `.end()`. The output is a Promise of an array of result objects. They are stored at indices according to their position in the command chain (the first command after `beginBatch()` has an index of 0).

The output of the 3rd command, `run('cat /golem/input/output.txt')`, is under index of of 2.

![Commands batch end](/assets/batch_end_log.png "Requestor script output logs")

#### Organizing commands into a batch producing a Readable stream

To produce a Readable Stream, use the `beginBatch()` method and chain commands, followed by `endStream()`.

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


Note that in this case, as the chain is ended with ` .endStream()`, we can read data chunks from ReadableStream, denoted as `res`. 

Once the stream is closed, we can terminate our TaskExecutor instance.

![Commands batch endstream](/assets/batch_endsteram_log.png "Requestor script output logs")

!!! Note

Since closing the chain with `.endStream()` produces ReadableStream, you can also retrieve the results in a synchronous manner:

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