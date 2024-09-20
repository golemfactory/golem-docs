---
title: Using the Deposit Payment Scheme
description: A tutorial on how to use the deposit payment scheme
pageTitle: Using the Deposit Payment Scheme
type: Tutorial
---

# Using the Deposit Payment Scheme

## Introduction

Since Yagna 0.16, Golem offers a new way to pay for tasks indirectly (via a smart contract) called Deposits. As a result, the Golem protocol doesn't require funds for the Provider to be sent from the Requestor wallet. This new payment method covers use cases where services created on top of Golem allow end-users to pay for tasks orchestrated by the service. General overview of a deposit payments can be found [here](https://docs.golem.network/docs/golem/payments/deposits). 

![image](/golem/payments/deposit-payment-wbg.png)

## Tutorial scenario

In this tutorial, we'll implement a simple scenario:

We have a user who will pay for the computation performed on the Golem network (the Funder).
We also have another user who operates a Golem node (Yagna) and can run the requestor script (the Requestor).
We will show all the steps needed to arrange for the Requestor to run computations for the Funder and pay using crypto from the Funder's account utilizing the Deposits feature.
The computation involves simply running an `echo` command on two nodes.

This tutorial will use the Holesky test network for payments, specifically the LockPayment contract at the address `0x63704675f72A47a7a183112700Cb48d4B0A94332`, created by Golem.

Here are the main steps of the scenario:

1. The Funder creates a deposit for the Requestor using the LockPayment contract and passes the deposit ID to the Requestor.
2. The Requestor runs the computations and uses the deposit to pay the providers for resources.

## Holesky testnet tokens

To use Holesky test network you will need both Holesky tETH and Holesky tGLM. To obtain Holesky tETH feel free to use one of the following faucets: 

- [tETH Faucet 1](https://holesky-faucet.pk910.de/)
- [tETH Faucet 2](https://faucet.quicknode.com/ethereum/holesky)
- [tETH Faucet 3](https://faucet.chainstack.com/holesky-testnet-faucet)
- [tETH Faucet 4](https://www.holeskyfaucet.io/)

After You obtain some tETH, you can request tGLM tokens from tGLM Smart Contract by calling the `Create` function: 

- [tGLM Faucet Smart Contract](https://holesky.etherscan.io/address/0xface100969ff47eb58d2cf603321b581a84bceac)

## Code organization

The code is organized across several files:

- `user.mjs`: Contains actions performed by the Funder, such as deposit creation.
- `observer.mjs`: Contains code used to monitor events on the LockPayment contract.
- `index.mjs`: Contains the requestor script and orchestration for the overall process.
- `"config.mjs"`: Contains configuration data for the example.
- `"abiGLM.json"` and `"abiLOCK.json"`:  JSON files that describe how to interact with the respective smart contracts; these can be obtained from [Etherscan](https://holesky.etherscan.io/).

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

You also need to copy the ABI files for the LockPayment and GLM contracts into the `./contracts` folder.

The tutorial assumes you have `yagna` installed according to [these instructions](https://docs.golem.network/docs/creators/tools/yagna/yagna-installation-for-requestors)
and you can use the `try_golem` app-key to access the `yagna` REST API. If you use unique app-keys, you'll need to edit the `config.mjs` file and replace `try_golem` with the actual value of your app-key.

## Example configuration

Let's look at `config.mjs`:

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
  requestor: {
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

The `funder` section contains the information needed to create a deposit.
The tutorial provides data for this wallet, along with its private key. It's created on the test network, and we've funded it, so you can use the provided data for your trials.

If the account runs out of funds, contact us on our [Discord](https://chat.golem.network/).
You can also populate this section with data from your own account.
The other parameters in this section will be explained later when we discuss the content of the `user.mjs` file.

The `requestor` section contains the node ID of the Yagna instance used on the requestor node.

**You need to replace the value in this file with the node ID of your Yagna instance.**

To check your node ID, run `yagna id show`.

The `rpcUrl` is an endpoint that enables an application to communicate with a blockchain network. Here, we use a Golem-provided endpoint.

The `LockPaymentContract` section contains the LockPayment contract address. This contract, created by Golem, provides deposit functionality on the blockchain. You can use your own implementation of the LockPayment contract. (On Polygon, the LockPayment contract has [this address](https://polygonscan.com/address/0x57ff7451E008647cbDB84e652B00ef05856Dba23).)

The `GLMContract` section contains the GLM token contract address.

In the `budget` section, we define how many GLM tokens we want to deposit.

A deposit comprises two values:

- `amount`: The budget for the providers.
- `flatFeeAmount`: The fee for the Requestor.

In addition to running the script to compute for the sponsor, the node operator will need to cover the gas costs when transferring payments from the deposit to providers.

The `depositFileName` defines the file name used to transmit the deposit ID from the Funder to the Requestor.

The `yagnaAppkey` is the app key used by the requestor script. If you're not using the autoconfigured app-key as shown in the installation instructions, you need to update it here as well.

## The observer

Let's look at the `observer.mjs` file:

```js
import { createPublicClient, decodeFunctionData, http, parseAbi } from 'viem'
import { holesky } from 'viem/chains'
import { readFileSync, writeFileSync } from 'fs'
import config from './config.mjs'
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

async function processLogs(requestorAddress, logs) {
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
        // If the deposit is closed by our requestor, stop observing
        parsedMethod.functionName.toLowerCase().includes('close') &&
        transaction.from == requestorAddress
      ) {
        isResolved = true
      }

      if (
        // If the deposit is terminated by our requestor, stop observing
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
        const isResolved = await processLogs(context.requestorAddress, logs)

        if (isResolved) {
          context.unwatch()
          resolve()
        }
      },
      events: parseAbi([
        'event DepositCreated(uint256 indexed id, address requestor)',
        'event DepositClosed(uint256 indexed id, address requestor)',
        'event DepositExtended(uint256 indexed id, address requestor)',
        'event DepositFeeTransfer(uint256 indexed id, address requestor, uint128 amount)',
        'event DepositTerminated(uint256 indexed id, address requestor)',
        'event DepositTransfer(uint256 indexed id, address requestor, address recipient, uint128 amount)',
      ]),
      address: config.lockPaymentContract.holeskyAddress,
    })
  })
}

export async function spawnContractObserver() {
  const context = {
    observedAddress: config.lockPaymentContract.holeskyAddress,
    requestorAddress: null,
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

This code is not critical to the scenario, but it helps us observe events on the contract and understand the example.

The `publicClient.watchEvent()` method retrieves logs from the LockPayment contract, filters events to show only those related to deposits, and processes the logs using the `processLogs` function. This function returns another function that can be used to stop watching these events.

The `processLogs()` function examines the logs for each transaction and prints the event name and other transaction details.

If the deposit is closed by our Requestor or terminated by the sponsor, the `isResolved` flag is set, indicating that observation can be terminated.

We can take this opportunity to review the list of events to understand the functionality of the LockPayment contract.

- `event DepositCreated`: Logged when a deposit is created by the Requestor.
- `event DepositClosed`: Occurs when the Requestor closes the deposit.
- `event DepositExtended`:  Means that the Funder has changed the `amount`, `flatFeeAmount`, or `validTo` date of the existing deposit.
- `event DepositFeeTransfer`: Logged when the fee amount is transferred to the Requestor.
- `event DepositTerminated`:  Occurs when the Funder terminates the deposit; this can only happen if the deposit wasn't closed by the Requestor and only after the `validTo` date.
- `event DepositTransfer`: Logged when the Requestor transfers tokens from the deposit as payment for the provider's work.

Note that the Yagna payment driver can use any other contract that implements the same interface as the LockPayment contract:

- `createDeposit`: To create a deposit with an `amount`, `flatFeeAmount`, and `validTo` date for the Requestor.
- `extendDeposit`: To change the `amount`, `flatFeeAmount`, and `validTo` date of an existing deposit.
  - `closeDeposit`: Used by the Requestor to close the deposit once all payments to providers are completed. The Requestor can then receive the fee.
- `depositSingleTransfer`:  To transfer tokens to a single provider.
- `depositSingleTransferAndClose`: Same as above, but also closes the deposit after the transfer.
- `depositTransfer`: To transfer tokens to multiple recipients at once.
- `depositTransferAndClose`: Same as above, but also closes the deposit after the transfer.
- `terminateDeposit`: Used by the Funder to terminate a deposit if it hasn't been closed by the Requestor, but only after the `validTo` date.

Once the configuration data is ready and the observer is set up, we can run the scenario.

## Deposit Creation

The Funder creates the deposit. All related code is in the `user.mjs` file:

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
import config from './config.mjs'
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
    config.requestor.address,
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
    BigInt(0), // No additional amount
    BigInt(0), // No additional fee
    BigInt(validToTimestamp), // Deposit valid for an additional 5 minutes
  ]

  console.log(
    chalk.grey(
      `\nExtending deposit with additional amount: \
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
    chalk.grey('\nDeposit of '),
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

### Approving the Allowance

First, the Funder must create a deposit. Deposits are created on the LockPayment contract, but before the Funder can do that, they must approve an allowance for the contract.

To set the allowance for the LockPayment contract, we can use the `approve` or `increaseAllowance` functions from the GLM contract.
The `user.mjs` code uses the `viem` library. It provides public and wallet clients for interacting with the blockchain.
We'll use the `walletClient` to interact with the contract and change its state. In this example, we used `increaseAllowance` (and `approve` to clear any unused allowance at the end of the user actions).

We send the transaction and await confirmation. Once confirmed, we use the `publicClient` to check that the allowance is set (using the `allowance` function on the GLM contract).

Note that both these operations are executed on the GLM contract.
To set the allowance, the user sends a transaction to the blockchain. Therefore, they need both tGLMs and tETH in their wallet to cover the gas costs.
Only functions called with the `walletClient` require gas. The `publicClient` calls don't need gas.

### Creating the deposit

After setting the allowance, the user can create a deposit.

Deposits are created on the LockPayment contract. To create a deposit, the Funder must define:

- `nonce`: A value used to differentiate deposits created by the same user. In the example, we use a random integer between 0 and 1,000,000, as defined in the config file.
- `spender`:  The Ethereum address of the Requestor.
- `amount`:  The budget for the providers, in GLM.
- `flatFeeAmount`:  The fee for the Requestor, in GLM.
- `validTo`: The deposit's validity period, in milliseconds. The tutorial uses 1 hour (this value is configurable in `config.mjs`). After this period, the Funder can terminate the deposit if the Requestor doesn't close it beforehand.

Once we have the transaction hash, we wait for the transaction to be executed on the blockchain.

Next, we use the `nonce` value from deposit creation to obtain the Deposit ID (using the `getDepostID()` call). This operation doesn't require gas. The Requestor needs the `depositID` to use it in their script.
We simulate passing this value by saving it into `depositData.json`, from which the Requestor will read it later.

The `extendDeposit()` operation is optional. We've included it in the example to demonstrate how to increase the `amount` and `flatFeeAmount` and how to set a new `validTo` value.
In our example, we use this function to extend the deposit's duration by 5 minutes.
Note that both deposit creation and extension require gas and are executed on the LockPayment contract.

For illustration, we then read the deposit data. Note that the result doesn't include the `flatFeeAmount` value.
To check the fee's value, you can use the `validateDeposit()` function, which takes two arguments, the `depositID` and the `flatFeeAmount`, and returns a `valid` message if the `flatFeeAmaount` configured for this deposit matches the one provided in the call.

In a real-world scenario, the Requestor should perform this validation to ensure the fee amount is sufficient and as agreed.

The last operation in the `user.mjs` file clears the allowance.
This is optional, but it's good practice to clear the allowance if you no longer plan to use it for deposits on this contract.

## Using deposits

Let's focus on the Requestor's actions. The requestor script and orchestration for the entire example are in the `index.mjs` file:

```js
import chalk from 'chalk'

import { GolemNetwork, GolemPaymentError } from '@golem-sdk/golem-js'
import { pinoPrettyLogger } from '@golem-sdk/pino-logger'
import { spawnContractObserver } from './observer.mjs'
import { runUserActions } from './user.mjs'
import { readFileSync } from 'fs'

import config from './config.mjs'

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

    observerContext.requestorAddress = allocation.address

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

    // When we release the allocation, the deposit will be closed.
    // You can't reuse closed deposits or released allocations.
    await glm.payment.releaseAllocation(allocation)
  } catch (err) {
    if (err instanceof GolemPaymentError) {
      console.log(
        'Cannot create allocation. Your allocation was likely released, or your deposit is closed.'
      )
    } else {
      console.error('Failed to run the example', err)
    }
    throw err
  } finally {
    await glm.disconnect()
  }
}

/* Step 1: Run the observer on the contract */
const obs = await spawnContractObserver()

/* Step 2: Run user actions (actions performed by the Funder) */
await runUserActions()

/* Step 3: Run operator actions (actions performed by the Requestor) */
await runOperator(obs.context)

console.log(
  chalk.magenta('All actions completed - waiting until observer stops')
)

/* Step 4: Wait for the observer to finish listening for deposit close, which ends the example */
await obs.observerFuture

console.log(chalk.magenta('Observer stopped - example finished'))
```

We should have a deposit created after running `userAction()`. Now, let's look at the Requestor code.

We essentially use the standard `golem-js` requestor script structure within the `runOperator()` function, with a few modifications:

1. We won't allow Golem to create rentals using an allocation from our Requestor wallet. We want to use the deposit instead. So, we read the `depositID` from the `despositData.json` file and use it to create the allocation.

Once the allocation is created (using `glm.createAllocation()`), we extract our node ID to pass it to the observer.

We create two rentals, each of which receives the allocation data as an argument. The second rental takes only the `allocation.id` to demonstrate an alternative way of passing this information.

The tasks are simple: an `echo` command is run on both providers, printing their node IDs. You can check the blockchain later to verify that they received payment for those tasks.

After the computations are done, we wait for the observer to finish. As discussed earlier, it will run the `unwatch()` command after capturing a transaction initiated by the Requestor that closes the deposit.

Once you have the `abi` files in the `./contracts` folder, you can run the example:

```bash
node index.mjs
```

## Reading output logs

Let's examine the script logs:

- Magenta output: From the observer. You should see the service starting, followed by information about deposit creation and extension.
- Blue output: Logs from the Funder's allowance approval operations on the GLM contract.
- Yellow output: Logs related to clearing the allowance.
- Gray output: Logs from the Funder's operations on the LockPayment contract.
- Requestor script logs: Have standard formatting, except for provider output, which has a white background to help you easily find the provider node IDs.

At the end of the script, you should see additional observer entries related to deposit transfers, fee transfers, and deposit closure. The specific methods used to execute the transfer and deposit closure will vary depending on the timing of the activities.

You can take the transaction hashes from the observer's logs,
visit [Etherscan](https://holesky.etherscan.io/), and validate the results of these operations.
The actual values might differ, but you should be able to confirm:

- The Funder provided an allowance of 2 GLM to the LockPayment contract.
- After the computations are complete, the Funder should receive close to 1 GLM back, representing the remaining deposit amount minus the providers' fees.
- The two providers should receive their payments (the actual cost of running these tasks is minimal).
- The Funder should receive 1 GLM (the operator fee).
- The transfers should originate from the LockPayment contract.

The Funder covers the cost of two transactions:

- Creating the deposit.
- Extending the deposit (optional, included for illustration).

The Requestor should cover the gas costs for the transfers from the deposit and deposit closure. (You might see multiple transactions depending on the timing of the actual execution.)

If the Requestor fails to close the deposit, the Funder can do so themself, recovering the remaining deposit and the unused `flatFeeAmount`. However, this will require an additional gas fee.

