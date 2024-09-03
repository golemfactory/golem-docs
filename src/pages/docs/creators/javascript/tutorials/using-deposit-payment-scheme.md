---
title: Using the Deposit Payment Scheme
description: A tutorial on how to use the deposit payment scheme
pageTitle: Golem Requestors' Tutorial - Using the Deposit Payment Scheme
type: Tutorial
---

# Using the Deposit Payment Scheme

## Introduction

Since Yagna 0.16, Golem offers a new way to pay for tasks indirectly (via a smart contract) called Deposits. As a result, the Golem protocol does not require funds for the Provider to be sent from the Requestor wallet. This new payment method covers a use-case where services created on top of Golem allow end-users to pay for tasks orchestrated by the service.

## Tutorial scenario

In this tutorial, we will implement a simple scenario:

We have a user who will pay for the computation performed on the golem network ( the Funder).
We also have another user who operates a golem node (yagna) and can run the requestor script ( the Spender).
We will show all the steps needed to arrange, so the Spender will run the computations for the Funder and pay using crypto from the Funder's pocket utilizing the Deposits feature.
The computation is just an `echo` command executed on two nodes.

The tutorial will use the Holesky test network for payments and in particular the LockPayment contract under the `0x63704675f72A47a7a183112700Cb48d4B0A94332` address created by Golem.

The scenario major steps:

1. The Funder creates a deposit for the Spender using the LockPayment contract and passes the deposit ID to the Spender.
2. Spender runs the computations and uses the deposit to pay the providers for resources.

## Code organization

The code is organized in several files.

- _user.mjs_ contains actions performed by the Funder, which are related to deposit creation,
- _observer.mjs_ contains code that is used to monitor events on the LockPayment contract,
- _index.mjs_ contains the requestor script and orchestration for the overall process,
- _"config.js"_ - contains configuration data for the example,
- _"abiGLM.json"_ and _"abiLOCK.json"_ are JSON files that describe how to interact with respective smart contracts, they can be obtained from the [Etherscan](https://holesky.etherscan.io/).

## How to run the example:

```sh
mkdir deposit-example
cd deposit-example
npm init
npm install "@golem-sdk/golem-js"
npm install "@golem-sdk/pino-logger"
npm install "chalk"
npm install "viem"
```

You also need to copy abi files for the LockPayment and GLM contracts to `./contracts` folder.

The tutorial assumes you have `yagna` installed according to [these instructions](https://docs.golem.network/docs/creators/tools/yagna/yagna-installation-for-requestors)
and you can use the `try_golem` app-key to access the `yagna` REST API. If you use unique app-keys, you need to edit the `config.js` file and replace the `try_golem` with the actual value of your app-key.

## Example configuration

Let's look into `config.js`:

```js
const config = {
  funder: {
    address: '0xc14a990551b3e87215277961d7a45288d0c199b4',
    privateKey:
      '0xcb102abfa6370a3d2cd527ae8c49d7cfd70ca72ea13bc8106dd420bab8250521',
    nonceSpace: 1000000,
    depositDurationHours: 1,
  },
  yagnaAppKey: 'try_golem',
  spender: {
    address: '0x7459dbaf9b1b1b19197eadcd3f66a3ec93504589',
  },
  rpcUrl: 'https://holesky.rpc-node.dev.golem.network',
  lockPaymentContract: {
    holeskyAddress: '0x63704675f72A47a7a183112700Cb48d4B0A94332',
  },
  glmContract: {
    holeskyAddress: '0x8888888815bf4DB87e57B609A50f938311EEd068',
  },
  budget: {
    amount: 1.0,
    flatFeeAmount: 1.0,
  },
  depositFileName: 'depositData.json',
}
export default config
```

The `funder` section contains info necessary to create a deposit.
In the tutorial, we provide data for its wallet, together with its private key. It is created on the test network, and we have populated it with funds, so you can use the data provided here for your trials.

If the account runs out of funds, contact us on our [Discord](https://chat.golem.network/).
You can also populate this section with data from your account.
All the other parameters in this section will be explained later on when we discuss the body of the user.mjs file.

The `spender` section contains the nodeID of the Yagna that is used on the requestor node.

**You need to replace the value in the file with the node ID of your yagna.**

To check your node ID run `yagna id show`.

The `rpcUrl` is an endpoint that enables an application to communicate with a blockchain network. Here we use a Golem-provided endpoint.

The `LockPaymentContract` section contains the LockPayment contract address. This is a contract created by Golem that provides the despot functionality on the blockchain. You can use your implementation of the LockPayment contract. (On Polygon the LockPayment contract has [this address](https://polygonscan.com/address/0x57ff7451E008647cbDB84e652B00ef05856Dba23).)

Similarly, the `GLMContract` section contains the GLM token contract address.

In the `budget` section we define how many GLM tokens we want to deposit.

A deposit consists of two values:

- the `amount` is the budget for the providers,
- and the `flatFeeAmount` is the fee for the requestor.

The node operator apart from running the script to run computation for the sponsor, will need to cover the costs for the gas when he triggers the payments from the deposit to providers.

The `depositFileName` defines the name of the file that is used to communicate the ID of the deposit set by the funder to the spender.

The `yagnaAppkey` is the `appkey` used by the requestor script. If you do not use the autoconfigured app-key value as shown in the installation instructions, you also need to update it.

## The observer

Now let's look at the `observer.mjs` file:

```js
import { createPublicClient, decodeFunctionData, http, parseAbi } from 'viem'
import { holesky } from 'viem/chains'
import { readFileSync } from 'fs'
import config from './config.js'
import chalk from 'chalk'

const abiLock = await JSON.parse(
  readFileSync('./contracts/lockAbi.json', 'utf-8')
)
// publicClient for readContract functions
const publicClient = createPublicClient({
  chain: holesky,
  transport: http(config.rpcUrl),
})

const context = { unwatch: () => {} }

async function processLogs(spenderAddress, logs) {
  const transactions = {}

  for (const log of logs) {
    if (!(log.transactionHash in transactions)) {
      transactions[log.transactionHash] = []
    }
    transactions[log.transactionHash].push(log)
  }
  let isResolved = false
  for (const txHash in transactions) {
    const transaction = await publicClient.getTransaction({ hash: txHash })

    const parsedMethod = decodeFunctionData({
      abi: abiLock,
      data: transaction.input,
    })

    const logs = transactions[txHash]

    for (const log of logs) {
      const functionNamePlusArgs = `${
        parsedMethod.functionName
      }(${parsedMethod.args.join(', ')})`
      console.log(chalk.magenta('\ncall:', functionNamePlusArgs))
      console.log(chalk.magenta('event:'), log.eventName)
      console.log(chalk.magenta('from:'), transaction.from)
      console.log(chalk.magenta('hash:'), transaction.hash, '\n')

      if (
        // if deposit is closed by our requestor, stop observing
        parsedMethod.functionName.toLowerCase().includes('close') &&
        transaction.from == spenderAddress
      ) {
        isResolved = true
      }

      if (
        // if deposit is terminated by our requestor, stop observing
        parsedMethod.functionName == 'terminateDeposit' &&
        transaction.from == config.funder.address
      ) {
        isResolved = true
      }
    }
  }
  return isResolved
}

export function observeTransactionEvents(context) {
  return new Promise((resolve) => {
    context.unwatch = publicClient.watchEvent({
      onLogs: async (logs) => {
        const isResolved = await processLogs(context.spenderAddress, logs)

        if (isResolved) {
          context.unwatch()
          resolve()
        }
      },
      events: parseAbi([
        'event DepositCreated(uint256 indexed id, address spender)',
        'event DepositClosed(uint256 indexed id, address spender)',
        'event DepositExtended(uint256 indexed id, address spender)',
        'event DepositFeeTransfer(uint256 indexed id, address spender, uint128 amount)',
        'event DepositTerminated(uint256 indexed id, address spender)',
        'event DepositTransfer(uint256 indexed id, address spender, address recipient, uint128 amount)',
      ]),
      address: config.lockPaymentContract.holeskyAddress,
    })
  })
}

export async function spawnContractObserver() {
  const context = {
    observedAddress: config.lockPaymentContract.holeskyAddress,
    spenderAddress: null,
    unwatch: () => {
      throw new Error('Cannot call unwatch before watch')
    },
  }

  console.log(
    chalk.magenta(
      `Start observing Events on contract: ${context.observedAddress}`
    )
  )
  const observerFuture = observeTransactionEvents(context)
  return {
    context,
    observerFuture,
  }
}
```

This code is not critical for the scenario, but let us observe the events on the contract and it is helpful to understand the example.

The `publicClient.watchEvent()` method is used to get the logs from the LockPayment contract, the events are filtered to receive only the events related to deposits, and the logs are processed by the `processLogs` function. The `publicClient.watchEvent()` function returns a function that can be used to stop watching the events.

The `processLogs()` function examines logs of each transaction and prints the event name and other transaction details.

If the deposit is closed by our requestor or terminated by the sponsor it will set the `isResolved` flag to indicate that the observation can be terminated.

We can take the opportunity to review the list of events to understand the functionality of the LockPayment contract.

- event DepositCreated - is logged when a deposit is created by the spender,
- event DepositClosed - takes place, when the spender closes the deposit,
- event DepositExtended - means that the funder changed any of the amount, flatFeeAmount or validTo date of the existing deposit,
- event DepositFeeTransfer - logged when the fee amount is transferred to the spender,
- event DepositTerminated - takes place, when the funder terminates the deposit, if it was not closed by the spender but only after the validTo date,
- event DepositTransfer - logged when the spender transfers tokens from the deposit as payment for providers' work.

Note that the Yagna payment driver can use any other contract that implements the same interface as the LockPayment contract:

- createDeposit - to create a deposit of amount, flatFeeAmount, and valid to validTo date for the spender.
- extendDeposit - to change the amount, flatFeeAmount, and validTo date of the existing deposit.
  -closeDeposit - to be used by the spender, to close the deposit, when all payments for providers are done and then the spender can receive the fee.
- depositSingleTransfer - to transfer tokens to one provider.
- depositSingleTransferAndClose - as above with closing deposit after the transfer.
- depositTransfer - to transfer tokens to multiple recipients at once.
- depositTransferAndClose - as above with closing deposit after the transfer.
- terminateDeposit - to be used by the funder to terminate a deposit if it was not closed by the spender and only after the validTo date.

Once we have configuration data prepared and the observer ready we can run the scenario.

## Deposit Creation

Now, the deposit is created by the funder. All related code is in the `user.mjs` file:

```js
import {
  createPublicClient,
  createWalletClient,
  formatEther,
  http,
  parseEther,
} from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { holesky } from 'viem/chains'
import chalk from 'chalk'
import config from './config.js'
import { readFileSync, writeFileSync } from 'fs'

const abiGlm = JSON.parse(readFileSync('./contracts/glmAbi.json', 'utf-8'))
const abiLock = JSON.parse(readFileSync('./contracts/lockAbi.json', 'utf-8'))

const funderAccount = privateKeyToAccount(config.funder.privateKey)
const budget = config.budget

// walletClient for writeContract functions
const walletClient = createWalletClient({
  account: funderAccount,
  chain: holesky,
  transport: http(config.rpcUrl),
})

// publicClient for readContract functions
const publicClient = createPublicClient({
  chain: holesky,
  transport: http(config.rpcUrl),
})

const LOCK_CONTRACT = {
  address: config.lockPaymentContract.holeskyAddress,
  abi: abiLock,
}
const GLM_CONTRACT = {
  address: config.glmContract.holeskyAddress,
  abi: abiGlm,
}

const nonce = Math.floor(Math.random() * config.funder.nonceSpace)
let validToTimestamp =
  new Date().getTime() + config.funder.depositDurationHours * 60 * 60 * 1000

async function createAllowance() {
  const amountWei = parseEther(`${budget.amount}`)
  const flatFeeAmountWei = parseEther(`${budget.flatFeeAmount}`)
  const allowanceBudget = amountWei + flatFeeAmountWei

  console.log(
    chalk.blue(
      `\nCreating allowance of ${formatEther(allowanceBudget)} GLM for ${
        LOCK_CONTRACT.address
      } contract ...`
    )
  )

  const hash = await walletClient.writeContract({
    address: GLM_CONTRACT.address,
    abi: GLM_CONTRACT.abi,
    functionName: 'increaseAllowance',
    args: [LOCK_CONTRACT.address, allowanceBudget],
    chain: walletClient.chain,
    account: walletClient.account,
  })

  const receipt = await publicClient.waitForTransactionReceipt({
    hash,
  })

  console.log(
    chalk.blue(
      `Allowance successfully created with Tx ${receipt.transactionHash}.`
    )
  )
}

const checkAllowance = async () => {
  const args = [config.funder.address, LOCK_CONTRACT.address]

  console.log(chalk.blue(`\nChecking allowance for ${args[1]} contract ...`))

  const allowance = await publicClient.readContract({
    abi: GLM_CONTRACT.abi,
    functionName: 'allowance',
    address: GLM_CONTRACT.address,
    args,
  })

  console.log(chalk.blue(`Allowance of ${formatEther(allowance)} GLM is set.`))
}

const createDeposit = async () => {
  const args = [
    BigInt(nonce),
    config.spender.address,
    parseEther(`${budget.amount}`),
    parseEther(`${budget.flatFeeAmount}`),
    BigInt(validToTimestamp),
  ]

  console.log(
    chalk.grey(
      `\nCreating deposit of amount: ${formatEther(args[2])} GLM, \
flatFeeAmount: ${formatEther(args[3])} GLM, for ${(
        (validToTimestamp - new Date().getTime()) /
        60 /
        60 /
        1000
      ).toFixed(2)} hour(s).`
    )
  )
  console.log(
    chalk.grey(`Using contract at address: ${LOCK_CONTRACT.address}.`)
  )

  const hash = await walletClient.writeContract({
    address: LOCK_CONTRACT.address,
    abi: LOCK_CONTRACT.abi,
    functionName: 'createDeposit',
    args,
    chain: walletClient.chain,
    account: walletClient.account,
  })

  await publicClient.waitForTransactionReceipt({
    hash,
  })

  const depositId = await getDepositID()

  const depositData = {
    id: '0x' + depositId.toString(16),
    amount: formatEther(args[2]),
    feeAmount: formatEther(args[3]),
  }

  writeFileSync(config.depositFileName, JSON.stringify(depositData, null, 4))

  console.log(chalk.grey(`Deposit successfully created with Tx ${hash}.`))
}

const extendDeposit = async () => {
  validToTimestamp = validToTimestamp + 5 * 60 * 1000
  const args = [
    BigInt(nonce),
    BigInt(0), // no additional amount
    BigInt(0), // no additional fee
    BigInt(validToTimestamp), // deposit valid for additional 5 minutes
  ]

  console.log(
    chalk.grey(
      `\nExtending deposit of additional amount: \
${formatEther(args[1])}  GLM, \
flatFeeAmount: ${formatEther(args[2])}  GLM, for ${(
        (validToTimestamp - new Date().getTime()) /
        60 /
        60 /
        1000
      ).toFixed(2)} hours.`
    )
  )
  console.log(
    chalk.grey(`Using contract at address: ${LOCK_CONTRACT.address}.`)
  )

  const hash = await walletClient.writeContract({
    abi: LOCK_CONTRACT.abi,
    functionName: 'extendDeposit',
    address: LOCK_CONTRACT.address,
    args,
    chain: walletClient.chain, // ???
    account: walletClient.account, // ???
  })

  await publicClient.waitForTransactionReceipt({
    hash,
  })

  console.log(chalk.grey(`Deposit successfully extended with Tx ${hash}.`))
}

const getDepositID = async () => {
  const depositID = await publicClient.readContract({
    address: LOCK_CONTRACT.address,
    abi: LOCK_CONTRACT.abi,
    functionName: 'idFromNonceAndFunder',
    args: [BigInt(nonce), config.funder.address],
  })

  console.log(
    chalk.grey(
      `\nDepositID: ${depositID} available on contract at address: ${LOCK_CONTRACT.address}.`
    )
  )
  return depositID
}

async function getDepositDetails() {
  const deposit = await publicClient.readContract({
    address: LOCK_CONTRACT.address,
    abi: LOCK_CONTRACT.abi,
    functionName: 'getDepositByNonce',
    args: [BigInt(nonce), config.funder.address],
  })

  console.log(
    chalk.grey(`\nDeposit of `),
    deposit,
    chalk.grey(` available on contract ${LOCK_CONTRACT.address}.`)
  )
  const depositData = {
    amount: formatEther(deposit.amount),
    id: deposit.id.toString(),
  }
  return depositData
}

const clearAllowance = async () => {
  const args = [LOCK_CONTRACT.address, BigInt(0)]

  console.log(chalk.yellow(`\nClearing allowance for ${args[0]} contract ...`))

  const hash = await walletClient.writeContract({
    abi: GLM_CONTRACT.abi,
    functionName: 'approve',
    address: GLM_CONTRACT.address,
    args,
    chain: walletClient.chain,
    account: walletClient.account,
  })

  await publicClient.waitForTransactionReceipt({
    hash,
  })

  console.log(chalk.yellow(`Allowance cleared with Tx ${hash}.\n`))
}

export const runUserActions = async () => {
  await createAllowance()
  await checkAllowance()
  await createDeposit()
  await extendDeposit()
  await getDepositID()
  await getDepositDetails()
  await clearAllowance()
}
```

### Approving the allowance

First, the funder user must create a deposit. A deposit is created on the LockPayment contract, however before the user can create a deposit, he must approve an allowance for the contract.

To set allowance for the LockPayment contract we can use `approve` or `increaseAllowance` on the GLM contract.
The `user.mjs` code uses the `viem` library. It provides public and wallet clients to interact with the blockchain.
To interact with the contract and change its state we need to use the `walletClient`. In the example we used `increaseAllowance`, (we use `approve` to clear potentially unused allowance at the end of user actions. )

We send the transaction and then await the transaction confirmation. Once we get it, we use the `publicClient` to confirm the allowance is set (using the `allowance` function on the GLM contract).

Note both these operations are executed on the GLM contract.
To set allowance the user executes a transaction on the blockchain, so he needs in his wallet both tGLMs and tEth to pay for the gas.
Only the functions called using the `walletClient` require gas. The `publicClient` calls do not require gas.

### Creating the deposit

Once the allowance is set, the user can create a deposit.

Deposit is created on LockPayment Contact. To create a deposit the funder must define:

- the nonce
- the spender
- the amount of the deposit
- the fee for the funder
- and the period for which the deposit is valid.

The nonce is a value used to distinguish different deposits if created by the same user. In the example use a random integer from the range of 0 - 1000000 as defined in the config file.
For the tutorial, we create a deposit for 1 hour (again this value is configurable in the `config.js`).
The funder user can terminate the deposit after this period if the spendor does not close it before.

Once we get the transaction hash, we wait for the transaction to be executed on the blockchain.

The next operation (`extendDeposit()`) is optional, we have included it in the example to show, how to increase the amount and flatFeeAmount and how to set the new `validTo` value.
In our example, we have used it to increase the duration of the allowance by an additional 5 minutes.
Note that both operations (deposit creation and deposit extension) required gas to be executed and were run on the LockPayment contract.

Next, we use the `nonce` value used to create the deposit, to obtain the Deposit ID (using `getDepostID()` call). This operation does not require gas. The `depositID` will be needed as we must provide the funder with the deposit ID so he can use it in his requestor script.
We simulate passing this value, by saving it into `depositData.json`, from which the requestor will read it later.

Then we (just for illustration) read the deposit data. Note that the outcome does not contain the `flatFeeAmount` value.
If you would like to check the value of the fee, you need to run another function: `validateDeposit()`. It accepts two arguments, the `depositID` and the `flatFeeAmount`, and returns a `valid` message if the `flatFeeAmaount` configured for this deposit is equal to the one provided in the call.

In real life this operation should be done by the spender, so he can validate if the fee amount is sufficient and as agreed.

The last operation in the `user.mjs` file is clearing the allowance.
This is an optional operation, but it might be useful to clear the allowance if (for any reason) you decide not to use it for deposits on this contract.

## Using deposits

So now we will focus on the spender action. The requestor script and orchestration of the whole example code are in the `index.mjs` file:

```js
import chalk from 'chalk'

import { GolemNetwork, GolemPaymentError } from '@golem-sdk/golem-js'
import { pinoPrettyLogger } from '@golem-sdk/pino-logger'
import { spawnContractObserver } from './observer.mjs'
import { runUserActions } from './user.mjs'
import { readFileSync } from 'fs'

import config from './config.js'

async function runOperator(observerContext) {
  const depositData = await JSON.parse(
    readFileSync('./depositData.json', 'utf-8')
  )

  // run the computations on the Golem Network
  const glm = new GolemNetwork({
    logger: pinoPrettyLogger({
      level: 'info',
    }),
    api: { key: config.yagnaAppKey },
    payment: {
      //driver: "erc20",
      //network: "polygon",
    },
  })

  try {
    await glm.connect()

    const deposit = {
      contract: config.lockPaymentContract.holeskyAddress,
      id: BigInt(depositData.id).toString(16),
    }

    const allocation = await glm.payment.createAllocation({
      budget: depositData.amount,
      deposit: deposit,
      expirationSec: 3600,
      // paymentPlatform: 'erc20-holesky-tglm'  // used to create allocation without deposit
    })

    observerContext.spenderAddress = allocation.address

    const order1 = {
      demand: {
        workload: { imageTag: 'golem/alpine:latest' },
      },
      market: {
        rentHours: 0.5,
        pricing: {
          model: 'burn-rate',
          avgGlmPerHour: 0.5,
        },
      },
      payment: {
        allocation,
      },
    }

    const order2 = {
      demand: {
        workload: { imageTag: 'golem/alpine:latest' },
      },
      market: {
        rentHours: 0.5,
        pricing: {
          model: 'burn-rate',
          avgGlmPerHour: 0.5,
        },
      },
      payment: {
        allocation: allocation.id, // alternative way to pass allocation ID
      },
    }

    const rental1 = await glm.oneOf({ order: order1 })

    await rental1
      .getExeUnit()
      .then((exe) => exe.run(`echo Task 1 running on ${exe.provider.id}`))
      .then((res) => console.log(chalk.inverse('\n', res.stdout)))

    await rental1.stopAndFinalize()

    const rental2 = await glm.oneOf({ order: order2 })

    await rental2
      .getExeUnit()
      .then((exe) => exe.run(`echo Task 2 Running on ${exe.provider.id}`))
      .then((res) => console.log(chalk.inverse('\n', res.stdout)))

    await rental2.stopAndFinalize()

    // when we release allocation, we will close deposit
    // you cannot reuse closed deposit or released allocation
    await glm.payment.releaseAllocation(allocation)
  } catch (err) {
    if (err instanceof GolemPaymentError) {
      console.log(
        'Cannot create allocation, most probably your allocation was released or your deposit is closed.'
      )
    } else {
      console.error('Failed to run the example', err)
    }
    throw err
  } finally {
    await glm.disconnect()
  }
}

/* step 1 - run observer on contract */
const obs = await spawnContractObserver()

/* step 2 - run user actions (actions performed by the funder) */
await runUserActions()

/* step 3 - run operator actions (actions performed by the spender) */
await runOperator(obs.context)

console.log(
  chalk.magenta('All actions completed - waiting until observer stops')
)
/* step 4 - wait for observer to finish listening for deposit close, which ends example */
await obs.observerFuture

console.log(chalk.magenta('Observer stopped - example finished'))
```

After running `userAction()`, we should have a deposit created. Now it is time to look at the reqestor code.

Basically, for the requestor part, we use the standard golem-js requestor script structure that is inside the `runOperator()` function, with a few slight modifications:

1. We will not let the Golem network create rentals using allocation from our requestor wallet. Rather than we want to use the deposit, so we read the `depositID` from the despositData.json and used it to create the allocation.

Once we create the allocation (with `glm.createAllocation()`) we extract our nodeID, so the observer code knows it.

Then we create two rentals, and each rental gets the allocation data as its argument. The second one takes just the `allocation.id` to illustrate the alternative way of passing this info.

The tasks executed are simple, we run an `echo` command on both providers and use it to print the provider's node IDs. You can later check on the blockchain if they were paid for these tasks.

Once the computation is done we await for the observer to complete its job. As discussed above it will run the `unwatch()` command once he captures a transaction initiated from the requestor node which would close the deposits.

Onc you have the `abi` files available in the `./contracts` folder you can run the example:

```bash
node index.mjs
```

## Reading output logs

Now let's look into the script logs:

In magenta color you see the output from the observer part: you should be able to see its start, then information about deposit creation and extension.

At the end of the script, you should see several additional observer entries. They should be related to deposit transfers, fee transfers, and deposit closure. Depending on the timing of activities, different methods could be used to execute the transfer and deposit closure.

In the blue color, you can see the logs from the funder user operation that are related to the allowance approval on the GLM contract
In the yellow - are operations related to the allowance clearing.

Gray color indicates logs from the funder user module, related to actions on the LockPayment Contract.

Requestor script logs have a default formatting, except for the provider output, which has a white background, so you can easily find the provider node IDs.

Now you can take the transaction hashes provided in the observer logs,
go to [Etherscan](https://holesky.etherscan.io/) and validate the result of this operation.
The actual values might be different but you should be able to confirm the following:

the funder made an allowance of 2 GLM to the LockPayment Contract.
after the computation is completed, it should get close to 1 GLM back. It is the remaining of the deposit amount minus fees for the providers.

The two providers should receive their payments (the actual cost of running these tasks is very small).

The Funder should get 1 GLM (it is the operator fee).

The transfers should come from the LockPayment contract.

The Funder thus covers the cost of two transactions:

- to create the Deposit
- to extend the Deposit (this operation is optional, to make the tutorial more interesting)

The Spender should cover gas costs for transfers from deposit and deposit closure. (Depending on the timing of the actual execution you may see more than one transaction.)

In case the Spender fails to close the deposit, the funder may do it himself, recovering the deposit together with the unused `flatFeeAmount`, however, will require the gas fee for this extra transaction.
