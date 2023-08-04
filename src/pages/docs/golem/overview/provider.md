---
Description: The provider actor in the Golem
---
# Provider requirements
Provider node can be run on a 64-bit x86-64 CPU computer with Linux only.

# Provider architecture

The provider is a node with the Yagna daemon, with additional components installed. These components implement the provider logic. 
To make its resources available to the requestor providers utilize an **execution unit** (exe-unit for short). Exe-unit starts and controls a runtime - the type of runtime depends on the type of image the requestor wants to run. Exe-unit allows also for interaction with the running runtime.

Currently, Golem provides:

* Virtual Machine (VM) runtime that runs images provided in GVMI format,
* WASM runtime that runs WebAssembly code

In our examples, we utilize VM runtimes that run a requestor-provided GVMI image.

You can learn more about becoming a Golem providers [here](../../providers/install.md).

You can learn more about the Golem images [here](../../Ncreators/javascript/guides/golem-images-explained.md).
