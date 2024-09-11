---
title: Golem-Workers High-Level API for accessing GPU and CPU Golem Network resources
pageTitle: Golem-Workers High-Level API for accessing GPU and CPU Golem Network resources 
description: Golem-Workers High-Level API for accessing GPU and CPU Golem Network resources 

type: Article
---

# Golem-Workers: High-Level API for accessing GPU and CPU Golem Network resources

This documentation is designed for developers wanting to run their payloads on Golem. 
While Golem-Workers software is written in Python it exposes the language-agnostic HTTP interface. 
You **don't have to know anything about Python** to take advantage of it.

## Introduction

Golem-Workers is an API providing direct and high-level access to GPU and CPU resources on the Golem Network. 
Unlike services focused solely on specific tasks such as AI model deployment and inference, 
Golem-Workers offers greater flexibility, catering to a variety of computational needs. 
This API empowers developers and companies to leverage the decentralized power of the Golem Network for diverse applications, 
ranging from fine-tuning AI models to data processing tasks.

From a technical perspective, it consists of a Python web server with simple Web API endpoints. 
Web API calls manage workers and their clusters. 
It lets you directly configure worker settings from the endpoint or utilize shared configuration references from the cluster. 
In the background, the complexity of the distributed market is seamlessly managed by an extensible library of ready-to-use actions.

The Golem-Workers webserver is accompanied by `golem-node` (also called `yagna`) service - the component responsible for communicating 
with the Golem Network.

## How this documentation is organized

- [Getting started](/docs/creators/golem-workers/getting-started) explains how to install and run Golem-Worker service
- [Basic concepts](/docs/creators/golem-workers/basic-concepts) explains the ideas behind Golem-Workers
- [create-node endpoint](/docs/creators/golem-workers/create-node) explains how to rent workers with Golem-Workers
- [Stable Diffusion example](/docs/creators/golem-workers/sd-example) step by step tutorial of renting a node and using it for Stable Diffusion 
