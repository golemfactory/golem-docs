---
title: Accessing the Internet (outbound) 
description: Discover how to access the internet from your Ray applications with this hands-on guide, featuring code examples, and yaml configurations.
pageTitle: Practical Tutorial on Accessing the Internet with Ray on Golem
type: tutorial
---

# Accessing the Internet (outbound)

The purpose of this article is to show you an example of a Ray app accessing the Internet and explain surrounding nuances of running it with Ray on Golem.

## Outbound introduction

Providers security is very important within the Golem network. 
They are protected by restricting the usage of the Internet from within the images they deploy.

- Whitelist concept

- whitelist content (s3, dropbox), pypi @ dev

- advertising urls

- reach out for help, certificates

## Configuring outbound

- yaml (plus corresponding cluster-yaml.md bit)

- network stats to check

## Simple outbound example

- simple-outbound.py
- python3 simple-outbound.py
- ray submit golem-cluster.yaml simple-outbound.py

{% docnavigation title="See also" %}
- [Ray on Golem introduction](/docs/creators/ray)
{% /docnavigation %}
