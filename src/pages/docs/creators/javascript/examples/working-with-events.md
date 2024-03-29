---
title: Managing Events
description: Learn to manage various events to get better control of your Tasks.
pageTitle: Mastering Event Management in Golem SDK JavaScript API
type: Example
---

# JS Task API Examples: working with events

## Introduction

This example will show you available event types and how to define a handler function to respond to them.

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

## How to run examples

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/task-executor` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/task-executor
```

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Observing events

You can use events to trigger certain actions. In the first example, we will show you what types of events you can receive and how to handle them.

In the Task Executor context, you can have two types of events:

- `golemEvents` that are common for all libraries using `golem-js` and
- Task Executor specific events like: `taskStarted` or `taskCompleted`.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/executing-tasks/observing-events.mjs" language="javascript" /%}

Let's use the extract of the typical output of the script above to learn more about how your requestor script interacts with the Golem Network. In the extract below, we have omitted events that were already described.

Once the requestor sends its demands it is matched with providers' offers. A pair of matching demand and offer is called a **proposal**. In the proposal details below, you can see the offer: the provider's details, its resources, and capabilities.

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

Then a negotiation process starts. This is an automated process, based on the parameters defined by the user in the requestor script. In this process, both the requestor and the provider respond with their proposals until all parameters and agreed upon.

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

Your requestor negotiates multiple proposals at the same time. Some of them can be rejected by the other party like in the example below. The provider is already busy as he already signed an agreement with another requestor.

```bash
ProposalRejected {
  id: 'R-dfb4c352fe12227a22cdedcac146d6b0d56f9dd69ef14da098106f58e20707bf',
  parentId: 'R-2cad4a7562beaf13491d554c7536e2d467fc692c447de053e1a5b5aa0c422470',
  reason: 'No capacity available. Reached Agreements limit: 1'
}
```

Once all the conditions are agreed the requestor will create an **agreement** and will send it to the Provider.

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

We can start the deployment of our image to run a VM. At first, the activity is created. You can imagine an activity as a representation of a VM instance run on a provider.

```bash
ActivityCreated {
  id: 'b284fcf996ed4b8da7cd1012233d23a1',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f'
}
```

Now we will start sending out our commands defined in our `task function` to be executed on the remote node.

```bash
Task started: {
  id: '1',
  activityId: 'b284fcf996ed4b8da7cd1012233d23a1',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f',
  provider: {
    id: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92',
    name: 'UK1-9.h',
    walletAddress: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92'
  },
  retriesCount: 0,
  error: undefined
}
```

All the time we can monitor activity status to know if the VM on the provider node is still available and running. Now it is initialized and ready for our commands.

```bash
ActivityStateChanged { id: 'b284fcf996ed4b8da7cd1012233d23a1', state: 'Initialized' }
```

The requestor sends the commands defined in the `task function` - they have a form of a `script`.

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

Finally (we do not show here all the repeated events of the same type), the task is completed.

```bash
Task completed: {
  id: '1',
  activityId: 'b284fcf996ed4b8da7cd1012233d23a1',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f',
  provider: {
    id: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92',
    name: 'UK1-9.h',
    walletAddress: '0x3d34d91eb4ab14b9f4fd8ac8985f82cc9eb28a92'
  },
  retriesCount: 0,
  error: undefined
}
```

If all tasks are completed the requestor will withdraw its demand.

```bash
DemandUnsubscribed {
  id: '23bb8fe1d8d64c25bf3ab3f11da0a1ca-9344e7c48829b664bbbce043582cbc888480c6d7d4d105e16c1a6b94272f9810'
}
```

and terminate the agreement:

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

The provider sends the invoice:

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

and a debit note. Debit notes are intermediate notices on the current costs and resource usage that providers send regularly. In the longer engagements debit notes may trigger partial payments. They act also to confirm that the other party is still present in the network and engaged. In this case, the debit note was processed after the

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

We got confirmation that the activity was destroyed, so our VM is not running anymore.

```bash
ActivityDestroyed {
  id: 'b284fcf996ed4b8da7cd1012233d23a1',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f'
}
```

The payment was executed on a blockchain and the GLM transfer was confirmed by the provider.

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

As we already paid the invoice the debit note is rejected.

```bash
PaymentFailed {
  id: '8aaad984-b03a-48d4-bea4-ac49dd4394c3',
  agreementId: '0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f',
  reason: 'DebitNote 8aaad984-b03a-48d4-bea4-ac49dd4394c3 rejected because the agreement 0ecd3882e3460d47ff98cb5d2abb9b0ad055ae8be79074614d03102b8a81e45f is already covered with a final invoice that should be paid instead of the debit note'
}
```

And that is all. We published our demand, engaged a provider, executed our task, and paid the invoice. We are ready for the next round.
