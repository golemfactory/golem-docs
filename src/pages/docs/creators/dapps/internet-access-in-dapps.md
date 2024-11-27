---
description: Learn how to enable outbound networking for your decentralized applications (dApps) on the Golem Network using dapp-runner and golem-cert-companion.
title: Enabling Outbound Networking for Golem dApps
type: Guide
---

# Enabling Outbound Networking for Golem dApps

The Golem Network enforces strict security measures to protect its ecosystem. One such measure is the requirement of **manifests** and **node descriptors** for applications that need outbound internet access. These files ensure that only verified and trusted tasks can access external resources, enhancing the security of both requestors and providers.

This guide explains how to enable outbound networking for your decentralized applications (dApps) on Golem, using the **golem-cert-companion** tool to simplify the process.

---

## Why Are Manifests and Node Descriptors Required?

By default, the Golem Network includes a restrictive whitelist of URLs for outbound networking. This default list ensures a high level of security, limiting internet access to a predefined set of trusted domains. You can find the current whitelist [here](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist).

However, many applications require access to APIs or other external services not included in the whitelist. To allow this, Golem enables users to define specific requirements through manifests and node descriptors. These files:

- Specify the URLs your application needs to access.
- Are signed with a certificate, which must be trusted by providers before your application can access external resources.

### The Role of Provider Trust

When you submit a task requiring outbound networking, the Golem Network looks for providers that meet the task’s requirements **and trust your certificate**. Without this trust:

- **Providers will not accept your task**: If no providers trust your certificate, the task will remain in a pending state and will not start.
- **Default whitelist restrictions apply**: Without trusted manifests, your application is limited to the URLs allowed by the default whitelist.

To ensure your task runs successfully:
1. Generate and sign a manifest and node descriptor.
2. Share your certificate with providers and request their trust.

---

## Automating Cert Generation with golem-cert-companion

Manually creating manifests and node descriptors can be a time-consuming and error-prone process. The **golem-cert-companion** tool streamlines this by automating the creation of:

- **`manifest.json`**: (Must be attached in your task)
- **`node-descriptor.signed.json`**: (Must be attached in your task  )
- **`root-cert-template.signed.json`**: (The signed certificate that providers must trust first)

---

## Steps to Enable Outbound Networking

### 1. Install golem-cert-companion

Install the tool using pip:

```bash
pip install golem-cert-companion
```

### 2. Generate Required Files

Run the tool to generate the necessary files for outbound networking. You can use either the full command or its shortcut:

```bash
golem-cert-companion
```

or simply:

```bash
gcert
```

The tool will guide you through:

- Specifying **one image URL or SHA3 hash**, which identifies the image that will be deployed on providers.
- Specifying the external URLs your application will access, either as unrestricted access for all URLs or a whitelist of specific URLs.

Once you've provided this information, the tool will automatically generate the required files:

- `manifest.json` (must be attached in your task)
- `node-descriptor.signed.json` (must be attached in your task)
- `root-cert-template.signed.json` (the signed certificate that providers must trust first)

---

### 3. Share the Certificate with Providers

Before your application can access outbound networking, providers must trust your certificate. You can request providers to import your signed certificate by running:

```bash
ya-provider rule set outbound partner import-cert root-cert-template.signed.json --mode all
```

We also recommend heading to the [Golem Discord](https://chat.golem.network) and posting in the `#providers` channel. Include your certificate and a message like the following:

> Hi providers! I have a task that requires outbound internet access. To run it, please trust my certificate if you're interested in some tasks from me:
>
> 1. Download the certificate from: [Your Download Link]
> 2. Import it using the following command:
>
> ```bash
> ya-provider rule set outbound partner import-cert root-cert-template.signed.json --mode all
> ```
>
> Thanks in advance!

This allows providers to add your certificate to their trusted list, enabling outbound requests for your application.

---

### 4. Use the Generated Files in Your dApp Descriptor

Include the generated `manifest.json` and `node-descriptor.json` in your dApp descriptor under the `payloads` section:

```yaml
payloads:
  external-api-request:
    runtime: 'vm/manifest'
    params:
      manifest_path: './manifest.json'
      node_descriptor_path: './node-descriptor.json'
      capabilities:
        - inet
        - manifest-support
```

---

## Example: Fetching Data from an External API

Below is a simple example of a dApp that fetches Golem's current price from the Coingecko API:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/dapp-store/refs/heads/main/apps/external-api-request-partner.yaml" language="yaml" /%}

### Running the dApp

Start the application with `dapp-runner`:

```bash
dapp-runner start --config default.yaml external-api-request-partner.yaml
```

Once the app launches, you’ll see the fetched Golem price in the logs.

---

## Next Steps

1. **Explore golem-cert-companion**  
   See the full documentation for the companion tool [here](/docs/creators/tools/golem-cert-companion).

2. **Engage with the Community**  
   If you have questions or need assistance, join our [Discord community](https://chat.golem.network/).

---