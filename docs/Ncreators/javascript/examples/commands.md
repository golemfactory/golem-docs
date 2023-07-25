---
description: Organising commands
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

Task Executor methods take a task function as a parameter for each of its methods. 
This function is asynchronous and provides access the WorkContext object that is provided as one of params. 

You can run a single command or a batch of commands on a provider. The following single commands are available:

!!! error: replace ith table as in guide

- run()
- uploadFile()
- uploadJson()
- downloadFile()

You can find more examples with them here.

In the following examples we will illustrate how you can organise a task that require:

* sending a worker.js script to provider (it will pring "Good morning Golem!" on the console), 
* run it and save output to a file (output.txt) and finally
* download that file to requestor,
  
all in a few different ways.

### Runing multiple commands (prosaic way)

One can simply run any of the methods listed above on the worker context provided for to task function.

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

Note: you can call different commands (both `run()` and related to file transfer) in a sequnce. To ensure proper sequence execution all calls must be awaited.
If you use this approach each command is sent separately to provider and then executed.

Note: we handle only the result of one command and ignore the rest.

Note: we used `isSubprocess: true` excutor option to indicate that we do not want `executor.end()`
to termniate whole requestor script.

![Commands prosaic](/assets/command_prosaic_log.png "Requestor script output logs")

### Organising commands into batches

Now let's take a look how you can arrange multiple commands into batches to do more complex tasks.
Depending on the way you conclude your batch you can obtain either:

    - Promise of results object or 
    - Readable stream

#### Organising commands into batch resulting in Promise of results

Wse the beginBatch() method and chain the commands followed by end(). 

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

       return res[2]?.stdout
       
  });

  console.log(result);
  await executor.end();
 
})();
```

Note: all commands are executed in a chain after `.beginBatch()`.
The chain is terminated with `.end()`. The output is a Promise of results obejcts. They are stored at index according to their position in the chain (first command after `beginVatch()` has index 0).

The output of the 3rd command `run('cat /golem/input/output.txt')` is undex index of 2.

![Commands batch end](/assets/batch_end_log.png "Requestor script output logs")

#### Organising commands into batch produsing a Readable stream

Use the beginBatch() method and chain the commands followed by endStream().

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


Note that now the chain is ended with ` .endStream()` and then we read data chanks from ReadableStream `res`. 

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