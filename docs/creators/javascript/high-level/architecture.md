---
title: JS API Levels
description: JS API introduction
---

!!! tip

    Looking for a quick dive into the JS API? Visit our [Quickstart Guide](../quickstart.md)!

## Introduction

The Golem JavaScript library provides developers with two levels of abstraction for interacting with the Golem:

- **High Level** - This level allows developers to interact with the Golem with minimal knowledge of the Golem's internal components. It is designed to be simple and easy to use.

- **Mid Level** - This level allows developers to use the library for more complex cases, and it requires knowledge of the Golem's component architecture. It provides more fine-grained control over the golem's functionality.

The following diagram illustrates the division of the individual parts of the Golem:

![Golem Component Architecture](/assets/js-architecture.png)

The JS Task API provides an easy-to-use interface to the core functionality of the Golem, such as creating and managing tasks with only a few lines of code.

The JS Core API gives developers access to the Golem-specific components, such as the Demand that is published on the market or Offer that is received from the provider, for more advanced use cases.

Choose the level of abstraction that best suits your needs and follow the links provided to learn more about each level and its capabilities.

[JS Core API](../high-level/index.md){ .md-button .md-button--primary }
