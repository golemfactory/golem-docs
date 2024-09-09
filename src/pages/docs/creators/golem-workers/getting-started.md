---
title: Golem-Workers Getting started article 
pageTitle: Golem-Workers Getting started article 
description: Step-by-step instructions on how to run Golem-Workers service 

type: Article
---

# Getting started

There are multiple ways to start interacting with Golem-Workers. 
Below are two of the most common ways to start it.

The first one uses `docker compose` to quickly start up needed components. 
The second one lets you start them manually after you get them from `pypi` package repository.


## Docker compose (recommended)

Docker examples will take care of installation, 
proper processes setup (`golem-workers` web server and `golem-node` service) and their basic configuration. 
Note that because of decentralized fashion, `golem-node` needs a few moments to gather information from the Golem Network, 
during that time, the amount of returned proposals (aka available nodes) can be impacted.

This doesn't require no Python environment what so ever. It is enough to have `docker` and `git`

### 1. Run the Docker

Make sure that [Docker](https://docker.com) is running on your machine and your current user has access to it.

### 2. Clone the repository

Create a folder on your computer, navigate into it from the terminal, and then clone the repository using the command:

```
git clone git@github.com:golemfactory/golem-workers
```

### 3. Start the components

Build and start docker compose project. Go to the `examples/docker` folder of the cloned repo, and run the command:

```
docker compose up -d --build
```

### 4. Add funds
Prepare some funds for Golem's free test network. Note that this step is needed mostly once per `yagna-data` volume. 
Run the command:

```
docker compose exec golem-node yagna payment fund
```

### Golem-Workers is up!

That’s it! Now, you can interact with Golem-Workers using the Web API at `http://localhost:8000`
You can find the OpenAPI specification at [http://localhost:8000/docs](http://localhost:8000/docs) 
(or at [http://localhost:8000/redoc](http://localhost:8000/redoc) if you prefer the `redoc` format).

The next steps:
- Checkout the [stable diffusion usage example](#stable-diffusion-usage-example) to see an example of 
running `automatic1111` on Golem Network
- Play with [OpenAPI specification](http://localhost:8000/docs) - it hosts plenty illustrative examples,
and formally describes the schemas

## Webserver

