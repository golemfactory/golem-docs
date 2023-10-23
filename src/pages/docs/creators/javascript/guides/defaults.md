---
description: Golem JS default value for TaskExecutor options
title: Golem JS default value for TaskExecutor options
type: Guide
---

# Introduction

To simplify the requestor code, JS SDK uses default values for some of the options. These values are sufficient to run typical use cases, however, in some cases, a user needs to override them to complete his tasks. Here is the list of defaults that are used, their meaning, and the names of related parameters.

## executorOptions

### taskTimeout

    **Meaning:** Timeout for executing one task in ms.

    **Default value:** 5 * 60 * 1000 = 5 min.

### logger

    Logger module to handle SDK logs.

    **Default value:** pinoLogger for Node.js, null for browsers.

### logLevel

    Log level: `debug`, `info`, `warn`, `log`, `error`.

    **Default value:** 'info'.

### enableLogging

    This option enables logging, set to `false` to completely disable logging (even if a logger is provided).

    **Default value:** `true`.

## yagnaOptions

### apiKey

    `apiKey` enables access to yagna rest API.

    **Default value:** as read from 'process.env.YAGNA_APPKEY' for node.js, null for browser.

### basePath

    URL of yagna REST API.

    **Default value:** `http://127.0.0.1:7465`.

### maxTaskRetries

    The maximum number of retries when the job failed on the provider.

    **Default value:** 3.

### activityPreparingTimeout

    Timeout for preparing activity - creating and deploying commands in ms.

    **Default value:** 5 * 60 * 1000 = 5 min.

## packagePackageOptions

### engine

    Type of the payload (`vm`, `wasm`).

    **Default value:** `vm`,

### minMemGib

    Minimum size of RAM in GB.

    **Default value:** : 0.5.

### minStorageGib:

    Minimum size of storage in GB.

    **Default value:** 2,

### minCpuThreads:

    Minimum no of threads.

    **Default value:** 1.

### minCpuCores:

    Minimum no of CPU cores.

    **Default value:** 1.

### capabilities:

    Set of capabilities providers offer, see manifest and demand documentation of details.

    **Default** value [].

## MarketOptions

### debitNotesAcceptanceTimeout

    Minimal time we reserve to accept debit notes, prosales with shorter time will be rejected in min.

    **Default value:** 30.

### proposalFilter:

    Filter to decide what proposal to accept (from these that match the demand).

    **Default value:** `acceptAllProposalFilter()`.

## TaskServiceOptions

### maxParallelTasks

    Max no of parallel tasks when the TaskExecutor is running tasks from a list (see `map()` and `forEach()`).

    **Default value:** 5.

## PaymentOptions

### payment

#### network

    Defines on that blockchain the payment will be performed, `goerli` is a test network where test GLM is used, `polygon`.

    **Default value**: `goerli`.

### budget:

    The amount that is allocated for all tasks scheduled by an executor in GLM/tGLM.

    **Default value:** 1.0.

### paymentTimeout

    Max time the executor script will await invoices from providers after tasks are complete in ms.

    **Default value:** 60 * 1000 = 1 min.

### allocationExpires

    Duration after which allocation expires in msec, valid allocation is required to accept invoices.

    **Default value:** 60 mins.

### debitNoteFilter

    Filter containing rules for debitNotes acceptance.

    **Default value:** acceptAllDebitNotesFilter().

### invoiceFilter

    Filter containing rules for Invoice acceptance.

    **Default value:** acceptAllInvoicesFilter().

## AgreementServiceOptions

### agreementSelector

    Decide which agreements will be used for the next task provided by the iterator, pool contains existing agreements and potential new agreements from available proposals.

    **Default value:** `randomAgreementSelectorWithPriorityForExistingOnes()`,

## Activity

### activityExecuteTimeout:

    Execution time for script (one command or batch) in ms.

    **Default value:** 5*60*1000 = 5 min.
