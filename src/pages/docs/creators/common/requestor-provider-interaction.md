---
title: How a requestor interacts with providers
description: A description of a typical interaction between a requestor and provider, illustrated with JS SDK events.
type: Guide
---

# Requestor - provider interactions

This article is designed to explain some of Golem's concepts related to interactions between requestors and providers. It is illustrated with events that are emitted in the current JS SDK version. While the name of the events might be changed or different in other Golem SDKs, the basic concepts originate from Golem Network internals and stay the same.

## The basics

The requestor user defines his task in the form of a requestor script. This is a piece of code, that utilizes one of Golem SDKs to interact with the Golem Network (via Yagna demon). The Yagna service connects the user to the Golem Network and facilitates all his communications with other nodes.
On the provider side there is also a Yagna present, augmented with a provider logic ('ya-provider') that is responsible for fulfilling the provider's obligations: in case of VM payload - running the VM, passing the requestor's commands to it, and issuing billing data.

## The story

We have run a simple requestor script employing the Task Model and logged emitted events to show you how internally Golem Network works. The events in the list below are filtered (similar events are removed to make the store more readable) and sometimes reordered to keep related topics in the same section.
For some events we have only listed their names, for others we show some additional details to make this description easier to understand.

When your requestor script starts, it connects to the yagna demon. To get access to yagna API, it is using the `app-key`. In our tutorials, we use a special 'try_golem' app-key.

### Allocation

One of the first actions is to create `Allocation` - a budget that is `reserved` by Yagna from the requestor's wallet for this particular interaction. Allocations serve two purposes. They ensure the requestor user has a declared budget in his wallet to pay to providers, and at the same time, it prevents the requestor from spending more than this amount (in case of his mistake in the script).

### Demand

`DemandSubscribed`

Then the 'Demand' is sent to the network. The demand is a description of the resources and services that the requestor needs, the `payment platform` the requestor can use, together with the information on the image that the requestor intends to run on a provider.
The `payment platform` is a combination of the token, the chain where the payment transaction will be executed, and the payment driver - a tool that facilitates the payment and enables both sides to confirm that the actual payment transaction was completed.
The Yagna market module matches the demand with the offers from providers. The `offer` is a specification of the provider's resources, services, and accepted payment platforms. The pair of matched demand and offer is called a `proposal`.

### Proposal

Then the Requestor is presented with proposals. In the example below, you can see some detailed information from the offer: the provider's details, its resources, and capabilities.

```bash
ProposalReceived {
  id: 'R-f3886a1dd5c5c5017c2a4df2228da495d6e3283a1a22ba1a2c0970152bd32f33',
  parentId: null,
  provider: {
    id: '0xedd84da61f7348510d9557c2f5067b460ef6588c',
    name: 'BHS5-13.h',
    walletAddress: '0xedd84da61f7348510d9557c2f5067b460ef6588c'
  },
  details: {
    transferProtocol: [ 'http', 'https', 'gftp' ],
    cpuBrand: 'Intel Core Processor (Haswell, no TSX)',
    cpuCapabilities: [
      'sse3',         'pclmulqdq',  'vmx',
      'ssse3',        'fma',        'cmpxchg16b',
      'pcid',         'sse41',      'sse42',
      'x2apic',       'movbe',      'popcnt',
      'tsc_deadline', 'aesni',      'xsave',
      'osxsave',      'avx',        'f16c',
      'rdrand',       'hypervisor', 'fpu',
      'vme',          'de',         'pse',
      'tsc',          'msr',        'pae',
      'mce',          'cx8',        'apic',
      'sep',          'mtrr',       'pge',
      'mca',          'cmov',       'pat',
      'pse36',        'clfsh',      'mmx',
      'fxsr',         'sse',        'sse2',
      'fsgsbase',     'bmi1',       'avx2',
      'smep',         'bmi2',       'rep_movsb_stosb',
      'invpcid'
    ],
    cpuCores: 1,
    cpuThreads: 1,
    memory: 1.2790810316801071,
    storage: 14.39749755859375,
    publicNet: false,
    runtimeCapabilities: [ 'inet', 'vpn', 'manifest-support', 'start-entrypoint' ],
    runtimeName: 'vm',
    state: 'Initial'
  }
}
```

Then a negotiation process starts. This is an automated process, based on the parameters defined by the user in the requestor script and `ya-provider's` logic. In this process, both the requestor and the provider respond with their proposals until all parameters are agreed upon.

```bash
ProposalResponded {
  id: 'R-f3886a1dd5c5c5017c2a4df2228da495d6e3283a1a22ba1a2c0970152bd32f33',
  provider: {
    id: '0xedd84da61f7348510d9557c2f5067b460ef6588c',
    name: 'BHS5-13.h',
    walletAddress: '0xedd84da61f7348510d9557c2f5067b460ef6588c'
  },
  counteringProposalId: 'R-953214acecebf335ef039eb8f98ef337f5b604885e15a34f69f797c6db7eafbd'
}
```

Your requestor negotiates multiple proposals at the same time. Some of them can be rejected by the other party like in the example below. This particular provider was already busy as he already signed an agreement with another requestor.

```bash
ProposalRejected {
  id: 'R-dfb4c352fe12227a22cdedcac146d6b0d56f9dd69ef14da098106f58e20707bf',
  parentId: 'R-2cad4a7562beaf13491d554c7536e2d467fc692c447de053e1a5b5aa0c422470',
  reason: 'No capacity available. Reached Agreements limit: 1'
}
```

### Agreement

Once all the conditions are agreed the requestor will create an `agreement` and will send it to the Provider.
The `agreement` is a set of eventually agreed conditions that will define the engagement between the requestor and a provider.

```bash
AgreementCreated {
  id: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f',
  provider: {
    id: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92',
    name: 'UK1-9.h',
    walletAddress: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92'
  },
  validTo: '2024-03-29T15:31:56.366Z',
  proposalId: 'R-794d1d8e5230e9707f44cae4f6d49797a0278db4269890c66bd7e91f1f4531f6'
}
```

Provider confirms the agreement.

```bash
AgreementConfirmed {
  id: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f',
  provider: {
    id: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92',
    name: 'UK1-9.h',
    walletAddress: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92'
  }
}
```

Note that the requestor may have agreements with multiple providers at the same time and distribute its task in parallel to all of them.

### Activity

Once the agreement is confirmed by both parties, we can start the deployment of our image to run a VM. At first, the `activity` is created. You can imagine an activity as a representation of a VM instance run on a provider. You may have more than one activity under the same agreement, but most of the providers offer a single one at the same time.

```bash
ActivityCreated {
  id: 'b284fcf996ed4b8da7cd1012233d23a1',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f'
}
```

All the time we can monitor activity status to know if the VM on the provider node is still available and running. Now it is initialized and ready for our commands.

```bash
ActivityStateChanged { id: 'b284fcf996ed4b8da7cd1012233d23a1', state: 'Initialized' }
```

### Scripts

In the task model, the chunk of work is defined as a task (function). A task is a set of commands that the requestor wants to execute to obtain desired results.
Internally all the commands are organized as `scripts`, that are sent and executed on a provider.
Even the initial image deployment is sent and executed as a script.

```bash
ScriptSent {
  activityId: 'b284fcf996ed4b8da7cd1012233d23a1',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f'
}
```

The script is then executed on the provider.

```bash
ScriptExecuted {
  activityId: 'b284fcf996ed4b8da7cd1012233d23a1',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f',
  success: true
}
```

In the Task model, such a sequence will be repeated to complete all commands for a given task. Then the next task will be run. As we use the same activity (and the same VM) subsequent tasks will inherit the state of the VM from the previous one.

### Debit Note

`Debit notes` are intermediate notices on the current costs and resource usage that providers send regularly to the requestors. In the longer engagements debit notes may also trigger partial payments.
Debit notes must be timely accepted by the requestors, to confirm that they are still present in the network and engaged (this is handled by SDK logic that can be configured by the requestor user).

Note that Debit Notes are related to particular activities.

```bash
DebitNoteReceived {
  id: '8aaad984-b03a-48d4-bea4-ac49dd4394c3',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f',
  activityId: 'b284fcf996ed4b8da7cd1012233d23a1',
  amount: 0.0009088683599,
  amountPrecise: '0.000908868359900000',
  provider: {
    id: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92',
    walletAddress: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92',
    name: 'UK1-9.h'
  }
}
```

### Invoices

The provider sends the invoice when the agreement is terminated. The agreement may be terminated by the requestor (when he has no more tasks to execute for this provider), or by the provider (i.e. agreed agreement duration would expire, or the requestor would fail to accept a `debit note` on time).

```bash
InvoiceReceived {
  id: 'ce3c9c5a-d94b-4864-a4f4-9454a33eade6',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f',
  amount: 0.0009088683599,
  amountPrecise: '0.000908868359900000',
  provider: {
    id: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92',
    walletAddress: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92',
    name: 'UK1-9.h'
  }
}
```

### Payments

The requestor accepts the payment and the payment driver used by Yagna will handle the payment process.

```bash
PaymentAccepted {
  id: 'ce3c9c5a-d94b-4864-a4f4-9454a33eade6',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f',
  amount: 0.0009088683599,
  amountPrecise: '0.000908868359900000',
  provider: {
    id: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92',
    walletAddress: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92',
    name: 'UK1-9.h'
  }
}
```

The payment is executed on a blockchain and the GLM transfer and the confirmation is sent to the provider.

The payment can be rejected. In the example below the payment for a debit note is rejected as it was already covered by the invoice payment. This particular case is because both invoices and debit notes are processed asynchronously and the SDK logic takes care to manage it in a proper way to avoid double payments.

```bash
PaymentFailed {
  id: '8aaad984-b03a-48d4-bea4-ac49dd4394c3',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f',
  reason: 'DebitNote 8aaad984-b03a-48d4-bea4-ac49dd4394c3 rejected because the agreement 0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f is already covered with a final invoice that should be paid instead of the debit note'
}
```

### Closing the interaction

When the agreement is terminated the activity is destroyed, so our VM is not running anymore.

```bash
ActivityDestroyed {
  id: 'b284fcf996ed4b8da7cd1012233d23a1',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f'
}
```

and agreement is terminated:

```bash
AgreementTerminated {
  id: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f',
  provider: {
    id: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92',
    name: 'UK1-9.h',
    walletAddress: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92'
  },
  reason: 'All computations done'
}
```

If all tasks in requestor scripts are completed the requestor will unsubscribe its demand from the market.

```bash
DemandUnsubscribed {
  id: '23bb8fe1d8d64c25bf3ab3f11da0a1ca-9344e7c48829b664bbbce043582cbc888480c6d7d4d105e16c1a6b94272f9810'
}
```

{% docnavigation title="See also" %}

- [Working with Events JS](/docs/creators/javascript/examples/working-with-events) example.

{% /docnavigation %}
