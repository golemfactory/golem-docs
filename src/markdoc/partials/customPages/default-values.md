# Default Values in the JS SDK

The JS SDK is designed to streamline the experience for developers by providing default values for various options. These default settings cater to the majority of typical use cases. However, understanding that there may be unique scenarios where you might need to tweak these settings, the SDK allows for customization.

Below is a summary of the default values, their significance, and the associated parameters that can be adjusted as per your requirements:

## executorOptions

{% defaultvalue title="taskTimeout" defaultValue="5 * 60 * 1000" %} 
Timeout for executing one task in ms. 
{% /defaultvalue %}

{% defaultvalue title="logger" defaultValue="pinoLogger for Node.js, null for browsers" %} 
Logger module to handle SDK logs. 
{% /defaultvalue %}

{% defaultvalue title="logLevel" defaultValue="info" %} 
Log level: `debug`, `info`, `warn`, `log`, `error`. 
{% /defaultvalue %}

{% defaultvalue title="enableLogging" defaultValue="true" %} 
This option enables logging, set to `false` to completely disable logging (even if a logger is provided). 
{% /defaultvalue %}

## yagnaOptions

{% defaultvalue title="apiKey" defaultValue="as read from 'process.env.YAGNA_APPKEY' for node.js, null for browser" %} 
`apiKey` enables access to yagna rest API. 
{% /defaultvalue %}

{% defaultvalue title="basePath" defaultValue="http://127.0.0.1:7465" %} 
URL of yagna REST API. 
{% /defaultvalue %}

{% defaultvalue title="maxTaskRetries" defaultValue="3" %} 
The maximum number of retries when the job failed on the provider. 
{% /defaultvalue %}

{% defaultvalue title="activityPreparingTimeout" defaultValue="5 * 60 * 1000" %} 
Timeout for preparing activity - creating and deploying commands in ms. 
{% /defaultvalue %}

## packagePackageOptions

{% defaultvalue title="engine" defaultValue="vm" %} 
Type of the payload (`vm`, `wasm`). 
{% /defaultvalue %}

{% defaultvalue title="minMemGib" defaultValue="0.5" %} 
Minimum size of RAM in GB. 
{% /defaultvalue %}

{% defaultvalue title="minStorageGib" defaultValue="2" %} 
Minimum size of storage in GB. 
{% /defaultvalue %}

{% defaultvalue title="minCpuThreads" defaultValue="1" %} 
Minimum no of threads. 
{% /defaultvalue %}

{% defaultvalue title="minCpuCores" defaultValue="1" %} 
Minimum no of CPU cores. 
{% /defaultvalue %}

{% defaultvalue title="capabilities" defaultValue="[]" %} 
Set of capabilities providers offer, see manifest and demand documentation of details. 
{% /defaultvalue %}

## MarketOptions

{% defaultvalue title="debitNotesAcceptanceTimeout" defaultValue="30" %} 
Minimal time we reserve to accept debit notes, prosales with shorter time will be rejected in min. 
{% /defaultvalue %}

{% defaultvalue title="proposalFilter" defaultValue="acceptAllProposalFilter()" %} 
Filter to decide what proposal to accept (from these that match the demand). 
{% /defaultvalue %}

## TaskServiceOptions

{% defaultvalue title="maxParallelTasks" defaultValue="5" %} 
Max no of parallel tasks when the TaskExecutor is running tasks from a list (see `map()` and `forEach()`). 
{% /defaultvalue %}

## PaymentOptions

{% defaultvalue title="network" defaultValue="goerli" %} 
Defines on that blockchain the payment will be performed, `goerli` is a test network where test GLM is used, `polygon`. 
{% /defaultvalue %}

{% defaultvalue title="budget" defaultValue="1.0" %} 
The amount that is allocated for all tasks scheduled by an executor in GLM/tGLM. 
{% /defaultvalue %}

{% defaultvalue title="paymentTimeout" defaultValue="60 * 1000" %} 
Max time the executor script will await invoices from providers after tasks are complete in ms. 
{% /defaultvalue %}

{% defaultvalue title="allocationExpires" defaultValue="60 mins" %} 
Duration after which allocation expires in msec, valid allocation is required to accept invoices. 
{% /defaultvalue %}

{% defaultvalue title="debitNoteFilter" defaultValue="acceptAllDebitNotesFilter()" %} 
Filter containing rules for debitNotes acceptance. 
{% /defaultvalue %}

{% defaultvalue title="invoiceFilter" defaultValue="acceptAllInvoicesFilter()" %} 
Filter containing rules for Invoice acceptance. 
{% /defaultvalue %}

## AgreementServiceOptions

{% defaultvalue title="agreementSelector" defaultValue="randomAgreementSelectorWithPriorityForExistingOnes()" %} 
Decide which agreements will be used for the next task provided by the iterator, pool contains existing agreements and potential new agreements from available proposals. 
{% /defaultvalue %}

## Activity

{% defaultvalue title="activityExecuteTimeout" defaultValue="5*60*1000" %} 
Execution time for script (one command or batch) in ms. 
{% /defaultvalue %}