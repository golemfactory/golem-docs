---
title: Golem-Workers High-Level API for accessing GPU and CPU Golem Network resources
pageTitle: Golem-Workers High-Level API for accessing GPU and CPU Golem Network resources 
description: Golem-Workers High-Level API for accessing GPU and CPU Golem Network resources 

type: Article
---

# Access GPU and CPU Resources on Golem Network 

This documentation is designed for developers wanting to run their payloads on Golem. 
While Golem-Workers software is written in Python it exposes the language-agnostic interface. 
You **don't have to know anything about Python** to take advantage of it.

## Introduction

Golem-Workers is an API providing direct and high-level access to GPU and CPU resources on the Golem Network. 
Unlike services focused solely on specific tasks such as AI model deployment and inference, 
Golem-Workers offers greater flexibility, catering to a variety of computational needs. 
This API empowers developers and companies to leverage the decentralized power of the Golem Network for diverse applications, 
ranging from fine-tuning AI models to data processing tasks.

From a technical perspective, it consists of a Python web server with simple Web API endpoints. 
Web API calls manage workers and their clusters. 
It allows to directly configure worker settings from the endpoint or utilize shared configuration references from the cluster. 
In the background, the complexity of the distributed market is seamlessly managed by an extensible library of ready-to-use actions.

The Golem-Workers webserver is acompanied with `golem-node` (also called `yagna`) service - the component responsible for communiting with the Golem Network.

