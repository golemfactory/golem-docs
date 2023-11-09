---
title: Payload Manifest Introduction
description: Computation Payload Manifest description, its schema, and configuration guide
type: Guide
---

# Computation Payload Manifest

_Computation Payload Manifest_ allows a [requestor](/docs/golem/overview/requestor) to define an application package _Payload_ and allows to set constraints on the computations performed on a [provider](/docs/golem/overview/provider) node.

A manifest can be configured in yapapi.

[//]: <> ( removed link to yapapi in the sentence above )

The provider node operator controls what computations can be performed by:

- [Importing certificates] used to sign app authors' certificates into the provider's [keystore](/docs/providers/configuration/outbound#managing-your-keystore) (which allows the provider agent to verify _manifest_ signatures)
- Adding domain patterns to Provider's [domain whitelist](/docs/providers/configuration/outbound#listing-whitelisted-domains) (which makes the manifest [signature] optional).

## Configuration

The manifest can be configured as a [yapapi.payload.vm.manifest](https://yapapi.readthedocs.io/en/latest/api.html#module-yapapi.payload.manifest) function parameter together with an optional manifest signature and the [App author's certificate].

## Manifest schema

_Computation Payload Manifest_ must follow a specific [JSON Schema](https://github.com/golemfactory/yagna-docs/blob/master/requestor-tutorials/vm-runtime/computation-payload-manifest.schema.json) ([Documentation](/docs/golem/payload-manifest/computation-payload-manifest.schema))

### Schema verification

Manifests can be verified using `jsonschema` library:

```sh
wget https://docs.golem.network/golem/payload-manifest/computation-payload-manifest.schema.json
pip install jsonschema
jsonschema --instance manifest.json computation-payload-manifest.schema.json
```

### Payload object

_Computation Payload Manifest_ **must** contain at least one _Payload_ object.

_Payload_ definition allows to define [GVMI images](/docs/creators/javascript/guides/golem-images) used by Application and supported architecture.

Simple _Computation Payload Manifest_ with _Payload_ definition:

```json
{
  "version": "0.1.0",
  "createdAt": "2022-09-15T00:00:00.000000Z",
  "expiresAt": "2100-01-01T00:00:00.000000Z",
  "payload": [
    {
      "platform": {
        "arch": "x86_64",
        "os": "linux"
      },
      "urls": [
        "http://girepo.dev.golem.network:8000/docker-golem-hello-world-latest-779758b432.gvmi"
      ],
      "hash": "sha3:d646d7b93083d817846c2ae5c62c72ca0507782385a2e29291a3d376"
    }
  ]
}
```

### Computation Manifest object

_Computation Payload Manifest_ **can** contain _Computation Manifests_ object.

With a Computation Manifest object, [requestor](/docs/golem/overview/requestor) constrains themself to a certain set of allowed actions, to be negotiated with and approved by a [provider](/docs/golem/overview/provider).

Requestors' actions will be verified against the _Manifest_ during computation.

Supported _Computation Manifest_ constraints:

- #### compManifest.script

  Defines a set of allowed ExeScript commands and applies constraints to their arguments.

  - #### compManifest.script.commands

    `compManifest.script.commands : List[Script]` specifies a curated list of commands in a form of:

    - UTF-8 encoded JSON strings

      Command context (e.g. env) or argument matching mode needs to be specified for a command.

      Example:

      ```json
      [
        "{
          \"run\": {
            \"args\": \"/bin/date -R\",
            \"env\": {
              \"MYVAR\": \"42\",
              \"match\": \"strict\"
            }
          }
        }"
      ]

      ```

    - UTF-8 encoded strings

      No command context or matching mode needs to be specified.

      Example:

      ```json
      ["run /bin/cat /etc/motd", "run /bin/date -R"]
      ```

    - Mix of both

    Commands `deploy`, `start` and `terminate` are always allowed. These values become the default if no `compManifest.script.commands` property has been set, but the `compManifest` object is present.

  - #### compManifest.script.match

    `compManifest.script.match : String` selects a default way of comparing command arguments stated in the manifest and the ones received in the ExeScript, unless stated otherwise in a command JSON object.

    The `match` property could be one of:

    - `strict`: byte-to-byte argument equality (default)

    - `regex`: treat arguments as regular expressions

      Syntax: Perl-compatible regular expressions (UTF-8 Unicode mode), w/o the support for a look around and backreferences (among others).

- #### compManifest.net

  `compManifest.net : Object` applies constraints to networking.

  - #### compManifest.net.inet.out

    `compManifest.net.inet.out : Object` outgoing requests to the public Internet network constraints.

    - #### compManifest.net.inet.out.protocols

      `compManifest.net.inet.out.protocols : List[String]` list of allowed outbound protocols. Currently fixed at ["http", "https"].

    - #### compManifest.net.inet.out.urls

      `compManifest.net.inet.out.urls : List[String]` list of allowed external URLs that outbound requests can be sent to. E.g. ["https://api.some-public-service.com", "https://some-other-service.com/api/resource"]

### Example of _Computation Payload Manifest_ with _Computation Manifest_ definition:

```json
{
  "version": "0.1.0",
  "createdAt": "2022-09-15T00:00:00.000000Z",
  "expiresAt": "2100-01-01T00:00:00.000000Z",
  "payload": [
    {
      "urls": [
        "http://yacn2.dev.golem.network:8000/docker-golem-script-curl-latest-d75268e752.gvmi"
      ],
      "hash": "sha3:e5f5ddfd649525dbe25d93d9ed51d1bdd0849933d9a5720adb4b5810"
    }
  ],
  "compManifest": {
    "version": "0.1.0",
    "script": {
      "commands": ["run curl.*", "transfer .*/output.txt"],
      "match": "regex"
    },
    "net": {
      "inet": {
        "out": {
          "protocols": ["https"],
          "urls": ["https://api.some-public-service.com"]
        }
      }
    }
  }
}
```

## Certificates

_App author's certificate_ gets sent in a demand together with a _Computation Payload Manifest_ and its signature. The certificate is used to verify the signature. In order to verify the signature, a _Provider_ first needs to verify the incoming _App author's certificate_. To do so, it has to have a certificate that's used to sign the _App author's certificate_ [imported] into its keystore (together with every intermediate certificate in the chain).

### Manifest signature

Signature allows a _Provider_ to verify the content of an incoming _Computation Payload Manifest_.

It can be generated using the `openssl` tool and a private key related to _App author's certificate_ signed by a certificate that's trusted by _Providers_.

A signature needs to be generated from the content of the _Computation Payload Manifest_ encoded in `base64`:

```sh
openssl dgst -sha256 -sign author.key -out manifest.json.base64.sign.sha256 manifest.json.base64
# both Signature and App Author Certificate need to be sent in base64 encoded form
base64 manifest.json.base64.sign.sha256 --wrap=0 > manifest.json.base64.sign.sha256.base64
base64 author.crt.pem --wrap=0 > author.crt.pem.base64
```

### Self signed certificate example

A basic example showing the generation of a self-signed root CA certificate to then sign the App author's certificate, and afterwards importing a generated root CA certificate into the Provider's keystore.

#### 1. Generating self signed root CA certificate

Create `openssl-ca.conf` for CA certificate

```conf
[ req ]
distinguished_name  = req_dn
x509_extensions     = v3_ext

[ req_dn ]
organizationName  = Organization Name (company name)
commonName        = Common Name (your name, or app name)
emailAddress      = Email Address (support email address)

[ v3_ext ]
basicConstraints = CA:true

[ ca ]
default_ca      = CA_default

[ CA_default ]
database  = index.txt
serial    = serial.txt
policy    = policy_default

[ policy_default ]
organizationName  = match
commonName        = supplied
emailAddress      = supplied
```

Then prepare referenced in config files:

```sh
touch index.txt index.txt.attr
echo '1000' > serial.txt
```

Then generate the CA certificate and key pair:

`openssl req -new -newkey rsa:2048 -days 360 -nodes -x509 -sha256 -keyout ca.key.pem -out ca.crt.pem -config openssl-ca.conf`

#### 2. Generating Requestor certificate

Create `openssl.conf` for the App author's certificate:

```conf
[ req ]
distinguished_name  = req_dn
x509_extensions     = v3_ext

[ req_dn ]
organizationName  = Organization Name (company name)
commonName        = Common Name (your name, or app name)
emailAddress      = Email Address (support email address)

[ v3_ext ]
basicConstraints = CA:true
```

Then generate _App author's certificate_ Signing Request (use same `organizationName`):

`openssl req -new -newkey rsa:2048 -days 360 -sha256 -keyout author.key.pem -out author.csr.pem -config openssl.conf`

Finally, generate _App author's certificate_ using CSR and CA certificate:

`openssl x509 -req -in author.csr.pem -CA ca.crt.pem -CAkey ca.key.pem -CAcreateserial -out author.crt.pem`

#### 3. Importing application author's certificates

To import the certificate into the keystore, use a [`ya-provider keystore add`](/docs/providers/configuration/outbound#managing-your-keystore) command:

`ya-provider keystore add ca.crt.pem`
