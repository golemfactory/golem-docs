---
title: Requestor
description: The requestor actor in the Golem
---
# Requestor architecture

Seeing the requestor just as a node with the Yagna service installed is a simplified perspective. 

We have a user, who needs additional resources to run his job. He will use a requestor agent to achieve this. Requestor agent is a piece of software (actually a script) that communicates via REST API with the Yagna service. The user's job must be run in a controlled environment. It is defined by the [image](/docs/creators/javascript/guides/golem-images) - a software package that is deployed on a provider, where the requestor's job is finally executed. 

The job can be split into many tasks and run parallel. That is one of the main advantages of using the Golem Network.

To create and run the Golem app, one generally needs:
- Yagna service up and running
- Image defining expected software environment on a remote machine
- A requestor agent script that implements actual requestor logic.

A requestor agent can be written in any language as long as it's able to talk to the service's REST API. To make things easy for the developers though, we provide two high-level API libraries:

- [yapapi](https://github.com/golemfactory/yapapi) for Python 3.6+ and 
- [golem-js](https://github.com/golemfactory/yajsapi), our JS/TS API runnable under Node.js or in browsers.

As requestors address specific business needs there is no single requestor agent that fits all the use cases. 

In case a user would like to use the Golem network for a computation job, an example implementation could have a computation engine included in the image, then split the job into many tasks and run them in parallel on many providers. Each task would consist of several steps like sending input data to the provider, launching the computation, and downloading the results.  

Such a scenario usually assumes the user has access to the requestor node, however, that is not always the case: One can imagine another scenario where the user accesses an application server via a web client, and the server is using the Golem Network via the Yagna service.

Yet another scenario allows you to run the requestor agent directly in the browser context. This case requires the user to have access to the Yagna service REST API 

{% docnavigation title="Next steps" %}

The basic requestor development tutorials in JS are [here](/docs/creators/javascript/tutorials/index).

{% /docnavigation %}

## Requestor FAQ

You can find answers to frequently asked questions about the Golem Requestor [here](/docs/golem/overview/requestor-faq).


