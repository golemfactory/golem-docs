---
title: Golem-Workers troubleshooting
description: Comprehensive guide for resolving common Golem-Workers issues, including log file analysis and problem-solving techniques.
pageTitle: Golem-Workers Troubleshooting Guide - Identify and Resolve Common Issues

type: Troubleshooting
---

# Golem-Workers troubleshooting

{% troubleshooting %}

## How to find the logs 

{% problem /%}

Sometimes, especially when something goes wrong, 
you may need to inspect the logs (or share them with us). 
While it's straightforward with a manual installation - the logs appear in the consoles 
where you started `golem-node` and `golem-workers` - it can be less obvious with a Docker installation.

{% solution %}


You can inspect the logs using the `docker compose logs` command. 
To continuously view new logs as they are generated, use the `-f` or `--follow` flag.
- `docker compose logs golem-node -f`
- `docker compose logs web -f`


{% /solution %}
{% feedback identifier="golem-workers-logs" /%}
{% /troubleshooting %}

{% troubleshooting %}

## `'NoneType' is not iterable` stacktrace on `create-node`

{% problem /%}

The `create-node` endpoint may occasionally fail. When this happens, it can be helpful to check the Uvicorn logs 
(`docker compose logs web` command). 
You might encounter a stacktrace that mentions **'NoneType' object is not iterable**.

{% solution %}

This error can have multiple causes, but if you're using examples from this documentation, 
it might indicate that you defined the use of Golem Reputation in the `create-cluster` step 
but forgot to initialize it before starting the service.

To resolve this, refer to the 
[Reputation Section of the Getting Started Guide](/docs/creators/golem-workers/getting-started#5-use-golem-reputation-optional) 
and ensure that you add `GLOBAL_CONTEXT` to your `.env` file. Then, restart the `golem-workers` service.



{% /solution %}
{% feedback identifier="golem-workers-reputation-in-global-context" /%}
{% /troubleshooting %}

{% troubleshooting %}

## Getting testnet funds failus


{% problem /%}

Sometimes `docker compose exec golem-node yagna payment fund` command fails. 

{% solution %}

{% partial file="golem-workers/verify-fund.md" /%}

{% /solution %}
{% feedback identifier="ray-unique-tip-reference-for-feedback-gathering" /%}
{% /troubleshooting %}


<!--
{% troubleshooting %}

## Topic


{% problem /%}

Description

{% solution %}

Solution

{% /solution %}
{% feedback identifier="ray-unique-tip-reference-for-feedback-gathering" /%}
{% /troubleshooting %}
-->
