---
description: A simple usage example of the Task Executor API
---

# Task Example 1: Simple Usage of Task API

!!! info

    This example showcases the following Golem features & aspects:
    
    - Creating a TaskExecutor instance
    - Executing the run, map, and forEach methods of the TaskExecutor API
    - Using the WorkContext API
    - Running a single command or a batch of commands on a provider

## Creating a TaskExecutor Instance

To create an instance of the TaskExecutor, you need to pass some initial parameters such as the package, budget, subnet tag, payment driver, payment network, etc. 
There are two ways to do this: by passing only the package image hash or by passing additional optional parameters.

```js
// Option 1: Pass only the package image hash
const executor = await TaskExecutor.create("9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae");

// Option 2: Pass additional optional parameters
const executor = await TaskExecutor.create({
  subnetTag: "public",
  payment: { driver: "erc-20", network: "rinkeby" },
  package: "9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae",
});
```

## Executing the TaskExecutor Methods

The TaskExecutor API provides three methods to execute functions on the Golem network: `run`, `map`, and `forEach`.

### `run` method

The `run` method allows you to execute a single `worker` function on the Golem network with a single provider. 
The following example demonstrates how to use the `run` method:

```js
  await executor.run(async (ctx) => console.log((await ctx.run("echo 'Hello World'")).stdout));
```

### `map` method

The `map` method allows you to get results for each element in an iterable object. 
The following example demonstrates how to use the `map` method:

```js
  const data = [1, 2, 3, 4, 5];
  const results = executor.map(data, (ctx, item) => providerCtx.ctx(`echo "${item}"`));
  for await (const result of results) console.log(result.stdout);
```

The `results` variable is an asynchronous iterable object, with each element accessible with the `for await` statement.

### `forEach` method

The `forEach` method is similar to the `map` method, but it does not return any value. 
The following example demonstrates how to use the `forEach` method:

```js
  const data = [1, 2, 3, 4, 5];
  await executor.forEach(data, async (ctx, item) => {
      console.log((await ctx.run(`echo "${item}"`).stdout));
  });
```

## Worker Function and WorkContext API

The TaskExecutor API provides three methods - `run`, `map`, and `forEach` - each of which takes a worker function as a parameter. 
This worker function is asynchronous and provides access to a `WorkContext API` through an object named `ctx`.

The `WorkContext API` allows you to run single commands or batch commands on a provider. 
The following single commands are available:

- `run()`
- `uploadFile()`
- `uploadJson()`
- `downloadFile()`

You can also compose particular commands into batches. 
To run a batch of commands, use the `beginBatch()` method and chain the commands together, followed by either `end()` or `endStream()`.

For example, using `end()`:
```js
const res = await ctx
   .beginBatch()
   .run('echo "Hello Golem"')
   .run('echo "Hello World"')
   .uploadJson({ hello: 'Golem'}, '/golem.json')
   .end()
   .catch((error) => console.error(error));

res?.map(({ stdout }) => console.log(stdout));
```
The code above returns a `Promise` of multiple `Result` objects (or throw an error if occurred).

Alternatively, you can end this batch using `endStream()` method to get a `Readable` stream:

```js
const results = await ctx
   .beginBatch()
   .run('echo "Hello Golem"')
   .run('echo "Hello World"')
   .uploadJson({ hello: 'Golem'}, '/golem.json')
   .endStream();

 results.on("data", ({ stdout }) => console.log(stdout));
 results.on("error", (error) => console.error(error));
 results.on("close", () => console.log("END"));
```

In addition, the `TaskExecutor` object provides a special method named `beforeEach()`. 
This method allows you to run a worker function once before each worker executes other tasks on the provider, within the same activity. 
The method takes a single worker function as a parameter and only runs it once per new provider activity.

Here's an example demonstrating its usage:

```js
  executor.beforeEach(async (ctx) => {
    await ctx.uploadFile("./params.txt", "/params.txt");
  });

  await executor.forEach([1, 2, 3, 4, 5], async (ctx, item) => {
     await ctx
       .beginBatch()
       .run(`/run_some_command.sh --input ${item} --params /input_params.txt --output /output.txt`)
       .downloadFile("/output.txt", "./output.txt")
       .end();
  });
```

Note that the `beforeEach` method only runs once per provider activity, and it's used to perform any setup tasks that need to be performed before executing other tasks on the provider.

!!! golem-icon "Next steps:"

    ??? quote "Return"

        [Introduction to Task API](../high-level/index.md){ .md-button .md-button--primary }
    
    ??? abstract "Examples"
        
        [Task Example 0: Hello World!](hello.md){ .md-button .md-button--primary }

        [Task Example 2: Hashcat on Golem](hashcat.md){ .md-button .md-button--primary }

        [Task Example 3: Requestor in browser](web.md){ .md-button .md-button--primary }

    ??? question "Continue"

        [Diving deeper with Core API](../mid-level/index.md){ .md-button .md-button--primary }