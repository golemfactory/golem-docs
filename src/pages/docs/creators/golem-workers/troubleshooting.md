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


You can inspect the logs using the `docker compose logs` command - run it in `examples/docker` directory
(or where you have your docker compose file).

To continuously view new logs as they are generated, use the `-f` or `--follow` flag.
- `docker compose logs golem-node -f`
- `docker compose logs web -f`


{% /solution %}
{% feedback identifier="golem-workers-logs" /%}
{% /troubleshooting %}

{% troubleshooting %}

## Getting testnet funds fails


{% problem /%}

Sometimes `docker compose exec golem-node yagna payment fund` command fails. 

{% solution %}

{% partial file="golem-workers/verify-fund.md" /%}

{% /solution %}
{% feedback identifier="golem-workers-fund-fails" /%}
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

## Increase logging 


{% problem /%}

When `Golem-Workers` don't work as you expect you might want to show the logs on Golem discord to get help.
The default logging levels are not very verbose.

You might want to increase the debugging information.

{% solution %}

The change is to add these few lines to the environment section of web component of `docker-compose.yaml` 
(or to `.env` file in case of manual installation):
```
LOGGING_CONFIG: '{
  "version": 1,
  "disable_existing_loggers": false,
  "loggers": {
    "golem_workers": {
      "level": "DEBUG"
    },
    "golem.event_bus": {
      "level": "DEBUG"
    }
  }
}'
```

It should end up in the same place as `YAGNA_APPKEY`.

{% /solution %}
{% feedback identifier="golem-workers-increase-logging" /%}
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
