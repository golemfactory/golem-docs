---
description: Learn how to access the internet from golem providers
title: Accessing the internet
type: Guide
---

# Accessing the Internet from Golem providers

When you execute your tasks on a provider you might need some data from outside the Golem Network. You can transfer it from your requestor, but in some cases, it is more convenient to transfer it from another location on the Internet. Such traffic initiated from providers in Golem terms is called: outbound.

<!-- Note that apart from outbound, Golem offers you also a `transfer` method that is limited to downloading files from a `URL` location - that feature is used by the provider to download the image before its deployment.
-->

## Outbound

Let’s take a look at outbound. That feature allows requestors to initiate traffic to the Internet from the payload run in a provider and it is designed in a way to protect providers from malicious operations performed on the node.

Availability of that feature depends on the configuration of the provider’s node. Provider can limit the access to internet sites, by setting:

- No outbound
- Only to whitelisted addresses
- To all

Furthermore, a provider can distinguish groups of users and configure the above access for:

- Any requestor
- Payload that is signed by the entity trusted by the provider.
- Requestors that have a partner certificate from an entity trusted by the Provider

Note that the `whitelist` allows for another dimension of “freedom” as providers can modify the whitelist independently. At this moment the whitelist is shared by all the rules defined on the given provider.

While the options requiring certificates are designed for advanced use cases, most of the requestors will use whitelisted locations.

### Getting access to the Outbound feature

For the requestor to be able to use the outbound feature, (initiate a connection to `target_url`), the following minimal conditions must be met:

- The requestor must request the outbound feature in the demand and include a Computation Manifest there. The manifest must declare the `taget_url`.
- The provider offers the service at least for the `taget_url`. (So either outbound for unrestricted URLs or the `target_url` is included in the whitelist).

Note that if the provider requires additional conditions to be met (i.e. payload is certified, or the requestor is recognized as a “partner”), the requestor must fulfill these criteria and modify his demand accordingly by providing signed artifacts and certificates.

#### Creation of the Computation Manifest

As we explained above, to use the outbound, the requestor must include a Computation Manifest in the demand. It is a kind of declaration that is attached to the demand, that serves the purpose of informing the Provider what kind of payload the requestor wants to run on the provider’s node. Requestor actions are verified vs. declaration and any connections not declared will be blocked. The demand is created automatically by the SDK based on the parameters provided in your requestor's scripts. Minimally, it is just a `package` that identifies the image to be run on a provider. To use the outbound feature, developers must also create a Payload Manifest and attach it to the demand.

JS SDK provides a tool, `golem-sdk-cli`, to facilitate the creation of the Payload Manifest. You can find instructions on how to download the tool and create a Payload Manifest [here](/docs/creators/javascript/guides/golem-sdk-cli).

Next, you need to indicate in the requestor script that you intend to use the `outbound` feature. You need to provide your Payment Manifest and (optionally) a certificate and signature that will prove that the payload was audited.

You can find an example of how to request the outbound service and attach a Payload Manifest in this [example](/docs/creators/javascript/examples/accessing-internet).

### The whitelist

The default set of URLs that providers may allow your application to use is available ([here](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist)). Note providers can modify the content of the list.

<!--
## Transfer method
-->

{% docnavigation title="Next steps" %}

- See our [tutorial](/docs/creators/javascript/tutorials/accessing-internet) on how to create a manifest and use it in the requestor script to reach the 'github.com' from a provider.

{% /docnavigation %}
