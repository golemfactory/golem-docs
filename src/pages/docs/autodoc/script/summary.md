[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/script)

The `.autodoc/docs/json/script` folder contains essential classes and functions for defining and executing commands in the yajsapi project. These commands can be used to deploy, start, terminate, transfer, upload, and download files, as well as run command-line programs with various capture options.

The `Script` class, located in `script.ts`, is a mid-level abstraction that allows users to create and manage a list of `Command` objects. Users can add new commands to the list, execute a set of commands before the script runs, and execute a set of commands after the script runs. Additionally, the `Script` class provides a method to generate an `ExeScriptRequest` object that can be used to execute the script on a remote machine.

Here's an example of how to use the `Script` class:

```javascript
import { Script } from "yajsapi";

const script = Script.create();
script.add(new Deploy("my_contract.wasm"));
script.add(new Start("my_contract"));
await script.before();
// execute script
await script.after();
const exeScriptRequest = script.getExeScriptRequest();
// send exeScriptRequest to remote machine for execution
```

The `command.ts` file contains several classes and types that are used to define and execute commands in the yajsapi project. The `Command` class is a base class that defines a command with a name and arguments. It has a `toJson` method that returns the command and its arguments as a JSON object, and a `toExeScriptRequest` method that returns the command as an `ExeScriptRequest` object. The `Deploy`, `Start`, `Terminate`, `Transfer`, `UploadFile`, and `DownloadFile` classes are subclasses of `Command` that define specific commands with their own names and arguments.

The `Run` class is another subclass of `Command` that defines a command to run a command-line program. It takes a command string, an optional array of arguments, an optional object of environment variables, and an optional `Capture` object that specifies how to capture the program's output.

The `index.ts` file is a module that exports various classes and functions from `script.js` and `command.js`. The purpose of this module is to provide a set of tools for interacting with a remote server or cloud infrastructure through a JavaScript API. This module provides a convenient way for developers to interact with remote servers or cloud infrastructure through a JavaScript API, allowing them to automate tasks and manage resources more efficiently.
