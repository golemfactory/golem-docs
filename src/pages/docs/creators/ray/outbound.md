---
title: Accessing the Internet (outbound) 
description: Discover how to access the internet from your Ray applications with this hands-on guide, featuring code examples, and yaml configurations.
pageTitle: Practical Tutorial on Accessing the Internet with Ray on Golem
type: tutorial
---

# Accessing the Internet (outbound)

The purpose of this article is to show you an example of a Ray app accessing the Internet and explain surrounding nuances of running it with Ray on Golem.

## Outbound introduction

Providers security is very important topic within the Golem network. 
They are protected by restricting the usage of the Internet from within the images they deploy on their machines.

The most popular tool providers use to protect themselves is allowing outgoing connection to whitelisted hosts only.
The default whitelist is curated by Golem Factory and is kept on [GitHub](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist).

Providers might edit the whitelist, or disable it to accept all outgoing traffic. 
Another option, not really supported by Ray on Golem, is to allow outgoing traffic for images signed by a trusted entity (e.g. Golem Factory)

Feel free to check out the general [Accessing the Internet from Golem providers](/docs/creators/javascript/guides/accessing-internet) guide to get more context not related to Ray on Golem.

Please reach out to us on [`#Ray on Golem` discord channel](https://chat.golem.network/) to discuss the options and help us define the best way to support your outbound needs.

## Default whitelist

Please have a look at the [default whitelist](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist) yourself.

Among the entries you can find `dl.dropboxusercontent.com`, `ipfs.io` - they should allow a certain level of possibility when designing Ray on Golem applications. 
You can upload the data your computation needs to DropBox or IPFS and then use it in your remote tasks. This is demonstrated in the [example below](#simple-outbound-example)

Ray on Golem uses the whitelist to allow installing [additional packages](/docs/creators/ray/cluster-yaml#initialization-commands) with pip. 
Golem Factory is proxying `pypi.org` via `pypi.dev.golem.network` to make it possible.

When you need to access a non-whitelisted URL the recommended way is to advertise your need on [`#providers` discord channel](https://chat.golem.network/).
This way every provider will be able to assess the URLs you need and decide 
if the possiblity of extra earning (you will be paying the providers that whitelist your URLs) is more tempting to them, than the security risk your URLs might pose.

Please reach out to us on [`#Ray on Golem` discord channel](https://chat.golem.network/) to discuss the options and help us define the best way to support your outbound needs.

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
