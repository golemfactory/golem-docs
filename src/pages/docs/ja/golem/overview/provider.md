---
title: Golem Provider Guide - Optimize Computing Resources for Decentralized Networks
description: Discover how to configure a Linux-based provider node for the Golem network, harnessing exe-units for VM and WASM runtimes to contribute computing power.
type: Guide
---

{% alert level="warning" %}
A provider node can only run on a Linux machine with the x86-64 architecture and nested virtualization enabled in the BIOS.
{% /alert %}

## Provider architecture

The provider is a node with the Yagna service, with additional components installed. These components implement the provider logic.
To make its resources available to the requestor, providers utilize an **execution unit** (exe-unit for short). Exe-unit starts and controls a runtime - the type of runtime depends on the type of image the requestor wants to run. Exe-unit also allows for interaction with the running runtime.

Currently, Golem provides:

- Virtual Machine (VM) runtime that runs images provided in GVMI format,
- WASM runtime that runs WebAssembly code

In our examples, we utilize VM runtimes that run a requestor-provided GVMI image.

{% docnavigation title="Next steps" %}

- More about becoming a Golem provider [here](/docs/ja/providers).

{% /docnavigation %}

{% docnavigation title="See also" %}

- More about the Golem images [here](/docs/ja/creators/javascript/guides/golem-images).

{% /docnavigation %}
