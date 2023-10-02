---
description: Learn what a Golem JS SDK CLI is and how to use it
title: Golem JS SDK CLI
type: Guide
---

# Golem JS SDK CLI tool and its usage explained

Golem SDK CLI is a companion tool for the [Golem SDK](https://github.com/golemfactory/golem-js). It is developed in parallel with the SDK, and new features are added as the SDK evolves or new use cases emerge.

## Installing / Getting started

Golem SDK CLI is available as an NPM package.

Install using npm:

```shell
npm install -g @golem-sdk/cli
```

Install using yarn:

```shell
yarn global add @golem-sdk/cli
```

To check if the installation was successful, run:

```shell
golem-sdk --version
```

After installation, the CLI is ready to be used.

## Features

### Golem Manifest

[Golem Manifest](https://docs.golem.network/docs/golem/payload-manifest) is a JSON document that describes your Golem application. While it is not necessary for simple applications, you will need it if you want to access advanced features of the Golem SDK, like access to the Internet (outbound).

The `golem-sdk` CLI allows users to create and update the manifest file. By default, it assumes the manifest is available in a `manifest.json` file in the current folder. If you want to point to a different file, use the --manifest (or -m) option.

#### Creating a Golem Manifest

To create a new Golem Manifest with the `golem-sdk` CLI, run:

```shell
golem-sdk manifest create <image> [--image-hash hash]
```

The `image` argument should identify the GVMI image used by your application. The tools accept a few formats which are explained in the table below. You can learn more about Golem images [here](https://docs.golem.network/docs/creators/javascript/guides/golem-images).

If you have a `package.json` file in your project, the tool will use the `name`, `version`, and `description` fields from the file to fill in the fields in the manifest. Otherwise, you will need to provide them manually.

##### Image

The manifest needs to contain the image URL pointing to the GVMI download location and its hash to validate its integrity.
To facilitate the process of creating a manifest, `golem-sdk` accepts multiple forms of image argument, where some of them will automatically resolve the URL and/or hash.
Please consult the table below for more details:

| Argument format                    | Example                                                                                       | Is `--image-hash` required?                 | Notes                                                                                      |
| ---------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Image tag                          | `golem/node:latest`                                                                           | No, it will be automatically resolved.      | Image hash is fetched from [https://registry.golem.network]. It is the recommended method. |
| Image hash                         | `3d6c48bb4c192708168d53cee4f36876b263b7745c3a3c239c6749cd`                                    | No, it is resolved from the image argument. | Image URL will point to [https://registry.golem.network]                                   |
| URL to registry.golem.network      | `https://registry.golem.network/v1/image/download?tag=golem-examples/blender:2.80&https=true` | No, it is automatically resolved.           |                                                                                            |
| URL to arbitrary download location | `https://example.com/my-image`                                                                | Yes, image-hash is required.                | Image is calculated by the gvmkit-build conversion tool.                                   |

If the hash is not provided or resolved, you will get a warning that the manifest will not be usable until you provide it manually.

#### Adding outbound URLs

For your application to access the Internet from the Golem network, the manifest must include the outbound URLs the application will be using.

The default set of URLs that providers may allow your application to use is available ([here](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist)). Note providers can modify the content of the list.

##### Example: Simple use

This command will update the manifest file with the provided URL:

```shell
golem-sdk manifest net add-outbound https://golem.network
```

You can use this command multiple times to add additional URLs to the manifest or pass many URLs in a single run:

##### Example: Multiple URLs

This command will update the manifest file with all the URLs provided.

```shell
golem-sdk manifest net add-outbound https://golem.network https://github.com https://example.com
```

#### Signing the manifest

If the provider has set up an audited-payload rule for URLs not on the whitelist, you can gain access to these URLs. However, they must be declared in the manifest, and the manifest is signed by the key linked with the certificate accepted by the provider.

To sign the manifest, run:

```shell
golem-sdk manifest sign -k <private-key>
```

If your private key is encrypted, you will need to provide the correct passphrase (`-p` or `--passphrase` option).
This command will produce a signature file (by default `manifest.sig`) that you will need to use in your application.

#### Verifying the signature

You can verify the manifest signature with your certificate using the following command:

```shell
golem-sdk manifest verify
```

By default, it will use `manifest.pem` as the certificate file and `manifest.sig` as the signature file. You can change that by using the `--certificate-file` and `--signature-file` options.

On success, it will print the following message:

```
Manifest matches signature.
```

It is important to use this command to make sure the key you are using is compatible with your certificate.

{% docnavigation title="Next steps" %}

- See our tutorial on how to create a manifest and use it in the requestor script to reach the 'github.com' from a provider.

- If you see a feature missing or a possible Golem SDK user experience improvement we could implement, please open an [issue](https://github.com/golemfactory/golem-sdk-cli/issues) or a pull request.

{% /docnavigation %}

{% docnavigation title="See also" %}

- [Golem SDK](https://github.com/golemfactory/golem-js) - Typescript + NodeJS API for Golem.
- [Yagna](https://github.com/golemfactory/yagna) - An open platform and marketplace for distributed computations.
- [Golem Discord](https://chat.golem.network)

{% /docnavigation %}
