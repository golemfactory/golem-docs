---
description: Learn how to use golem-cert-companion (gcert) to create trusted manifests, node descriptors, and certificates for enabling outbound networking on the Golem Network.
title: How to Use golem-cert-companion for Outbound Networking on Golem
type: Guide
---

# How to Use golem-cert-companion for Outbound Networking on Golem

The **golem-cert-companion** tool (or `gcert` for short) streamlines the process of generating the critical files required for enabling outbound networking on the Golem Network. This guide explains the purpose of these files, why they are necessary for security, and how to use the tool to create them.

---

## Why Outbound Networking Requires Security

Outbound networking allows tasks on Golem to access external resources, such as APIs or web services. While this feature is essential for many use cases, it also introduces risks for providers. Without safeguards, a requestor could misuse a provider's internet connection for malicious activities, such as DDoS attacks or other forms of abuse.

To mitigate these risks, Golem enforces strict security protocols. Tasks that require outbound networking must include:

1. **Manifests**: These define the task's networking permissions and ensure the provider knows exactly what URLs the task intends to access.
2. **Node Descriptors**: These act as the requestor’s identifier and outline the permissions for their node.
3. **Certificates**: These authenticate the manifests and node descriptors, proving they originate from a trusted requestor.

These files serve as a trust mechanism between requestors and providers. Without them, providers will reject tasks requiring outbound access.

---

## What Does golem-cert-companion Do?

The **golem-cert-companion** tool automates the creation of these files, reducing errors and making it easier for requestors to comply with Golem’s security requirements. Specifically, it generates:

- **`manifest.json`**:  
  Defines the image metadata and the URLs the task will access. This file must be attached to the task.  
  Example: It specifies whether the task needs unrestricted internet access or a whitelist of specific URLs.

- **`node-descriptor.signed.json`**:  
  Identifies your node and its permissions, such as the ability to access outbound internet. This file must also be attached to the task.

- **`root-cert-template.signed.json`**:  
  A self-signed certificate that authenticates the other two files. This certificate must be shared with providers and explicitly trusted by them for the task to be accepted.

Without these files, a task will not start because providers will not trust it.

---

## How to Use golem-cert-companion

### 1. Install the Tool

You can install **golem-cert-companion** via pip:

```bash
pip install golem-cert-companion
```

### 2. Generate Required Files

Run the tool using the full command or its shortcut:

```bash
golem-cert-companion
```

or:

```bash
gcert
```

The tool will guide you through several steps:

1. **Specify the Image**  
   You will need to provide either:

   - A **Direct URL**: This must be a direct link to the `.gvmi` file that providers will download for the task. For example, if your image is hosted on a public server, the URL should point directly to the file, ensuring providers can access and retrieve it.
   - A **SHA3 Hash**: This hash will be used to look up the image in the Golem Registry. The registry will then provide the image to providers for download and deployment.

   _Note: Only one image can be specified for each task. Ensure the URL or hash points to the exact `.gvmi` file you want providers to use._

2. **Define Networking Requirements**  
   Choose between:

   - **Unrestricted Access**: Allows the task to access any URL. This option requires more trust from providers.
   - **Whitelist**: Specifies a limited set of URLs the task is allowed to access. This is more restrictive and generally easier to gain provider trust.

3. **Generate Files**  
   Once you complete the process, the tool will output:
   - `manifest.json`
   - `node-descriptor.signed.json`
   - `root-cert-template.signed.json`

These files must be used in your task configurations and shared with providers as needed.

---

## Sharing the Certificate with Providers

Before your task can start, providers must trust your self-signed certificate (`root-cert-template.signed.json`). To do this, providers must import the certificate using the following command:

```bash
ya-provider rule set outbound partner import-cert root-cert-template.signed.json --mode all
```

We recommend sharing your certificate in the [Golem Discord](https://chat.golem.network) `#providers` channel. Include a message like this:

> Hi providers! I have a task requiring outbound internet access. Please trust my certificate:
>
> 1. Download it from: [Your Download Link]
> 2. Import it using:
>
> ```bash
> ya-provider rule set outbound partner import-cert root-cert-template.signed.json --mode all
> ```

This process ensures providers recognize and trust your tasks.

---

## Next Steps

**Use Outbound Networking in Golem SDKs**  
 Learn how to integrate outbound networking in your tasks by exploring the following guides:

<!-- **yapapi (Python):** Discover how to attach manifests and node descriptors to your tasks using the Python SDK in [this guide](/docs/creators/python/guides/using-vm-runtime).

**golem-js:** Learn how to configure tasks with outbound networking using the JavaScript SDK in [this documentation](/docs/creators/javascript/guides/using-vm-runtime). -->

**dapp-runner (Golem Compose):** See how to include outbound networking in dApps with `dapp-runner` [here](/docs/creators/dapps/internet-access-in-dapps).

---
