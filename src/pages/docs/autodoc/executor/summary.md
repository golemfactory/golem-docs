[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/executor)

The `.autodoc/docs/json/executor` folder contains code related to the Executor functionality of the yajsapi project. The Executor is a high-level API that allows users to execute tasks on the Golem network. The folder consists of three main files: `config.ts`, `executor.ts`, and `index.ts`.

`config.ts` defines the `ExecutorConfig` class, which is used to configure the `Executor` class in the yajsapi project. The `ExecutorConfig` class takes an object called `options` as an argument and sets default values for the properties of the class. The `options` object can be used to override the default values. Example usage:

```javascript
import { ExecutorConfig } from "yajsapi";

const config = new ExecutorConfig({
  package: "blender",
  maxParallelTasks: 10,
  taskTimeout: 1000 * 60 * 30, // 30 min
  budget: 2.0,
  subnetTag: "testnet",
  payment: { driver: "erc20", network: "ropsten" },
  packageOptions: {
    minMemGib: 4,
    minStorageGib: 10,
    minCpuThreads: 2,
  },
  logLevel: "debug",
});

const executor = new Executor(config);
```

`executor.ts` contains the `TaskExecutor` class, which is responsible for managing the lifecycle of tasks, including creating, initializing, running, and ending tasks. It provides methods for executing tasks and handling errors. Example usage:

```javascript
const executor = await TaskExecutor.create({
  subnetTag: "public",
  payment: { driver: "erc-20", network: "rinkeby" },
  package: "9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae",
});

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

`index.ts` exports several classes and interfaces related to the Executor functionality, allowing users to easily use the Executor functionality in their own applications. Example usage:

```javascript
import { TaskExecutor } from "yajsapi";

const task = {
  // task definition
};

const options = {
  // executor options
};

const executor = new TaskExecutor(options);
executor.execute(task).then(result => {
  // handle task result
});
```

Overall, the code in the `.autodoc/docs/json/executor` folder plays an important role in the yajsapi project by providing a high-level API for executing tasks on the Golem network.
