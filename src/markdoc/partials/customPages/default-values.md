# Default Values in the JS SDK

The JS SDK is designed to streamline the experience for developers by providing default values for various options. These default settings cater to the majority of typical use cases. However, understanding that there may be unique scenarios where you might need to tweak these settings, the SDK allows for customization.

Below is a summary of the default values, their significance, and the associated parameters that can be adjusted as per your requirements:

## executorOptions

{% defaultvalue title="taskTimeout" defaultValue="5 * 60 * 1000" %} 
Specifies the timeout for executing a single task, measured in milliseconds (ms). 
{% /defaultvalue %}

{% defaultvalue title="logger" defaultValue="pinoLogger for Node.js, null for browsers" %} 
Determines the logger module responsible for handling SDK logs. 
{% /defaultvalue %}

{% defaultvalue title="logLevel" defaultValue="info" %} 
Defines the log level. Available options: `debug`, `info`, `warn`, `log`, `error`.
{% /defaultvalue %}

{% defaultvalue title="enableLogging" defaultValue="true" %} 
Enable or disable logging. Set to `false` to turn off all logging, even if a logger module is specified. 
{% /defaultvalue %}

## yagnaOptions

{% defaultvalue title="apiKey" defaultValue="as read from 'process.env.YAGNA_APPKEY' for node.js, null for browser" %} 
The `apiKey` facilitates access to the yagna REST API.
{% /defaultvalue %}

{% defaultvalue title="basePath" defaultValue="http://127.0.0.1:7465" %} 
The base URL of the yagna REST API. 
{% /defaultvalue %}

{% defaultvalue title="maxTaskRetries" defaultValue="3" %} 
Designates the maximum number of retry attempts for a job if it fails on the provider's side. 
{% /defaultvalue %}

{% defaultvalue title="activityPreparingTimeout" defaultValue="5 * 60 * 1000" %} 
Timeout for activity preparation, which includes the creation and deployment of commands, in ms. 
{% /defaultvalue %}

## packagePackageOptions

{% defaultvalue title="engine" defaultValue="vm" %} 
Specifies the type of the payload. Options include: `vm`, `wasm`.
{% /defaultvalue %}

{% defaultvalue title="minMemGib" defaultValue="0.5" %} 
Minimum required RAM size, denoted in gigabytes (GB). 
{% /defaultvalue %}

{% defaultvalue title="minStorageGib" defaultValue="2" %} 
Minimum required storage size, denoted in gigabytes (GB).
{% /defaultvalue %}

{% defaultvalue title="minCpuThreads" defaultValue="1" %} 
Minimum number of CPU threads required.
{% /defaultvalue %}

{% defaultvalue title="minCpuCores" defaultValue="1" %} 
Minimum number of CPU cores required.
{% /defaultvalue %}

{% defaultvalue title="capabilities" defaultValue="[]" %} 
List of capabilities that providers can offer. Refer to the manifest and demand documentation for more details. 
{% /defaultvalue %}

## MarketOptions

{% defaultvalue title="debitNotesAcceptanceTimeout" defaultValue="30" %} 
Sets the minimal time reserved for accepting debit notes. Proposals with shorter times will be rejected, measured in minutes. 
{% /defaultvalue %}

{% defaultvalue title="proposalFilter" defaultValue="acceptAllProposalFilter()" %} 
This filter determines which proposals to accept, based on their compatibility with the demand.
{% /defaultvalue %}

## TaskServiceOptions

{% defaultvalue title="maxParallelTasks" defaultValue="5" %} 
Sets the maximum number of tasks that can be executed concurrently when the TaskExecutor processes tasks from a list (refer to `map()` and `forEach()` methods).
{% /defaultvalue %}

## PaymentOptions

{% defaultvalue title="network" defaultValue="goerli" %} 
Defines the blockchain network for processing payments. The `goerli` option indicates a test network that utilizes test GLM. Other options include `polygon`.
{% /defaultvalue %}

{% defaultvalue title="budget" defaultValue="1.0" %} 
Specifies the total budget allocated for all tasks scheduled by an executor, measured in GLM/tGLM.
{% /defaultvalue %}

{% defaultvalue title="paymentTimeout" defaultValue="60 * 1000" %} 
Max waiting time for the executor script to receive invoices from providers post task completion, in ms.
{% /defaultvalue %}

{% defaultvalue title="allocationExpires" defaultValue="60000 * 60" %} 
Specifies the duration after which an allocation expires, in milliseconds. A valid allocation is essential for accepting invoices.
{% /defaultvalue %}

{% defaultvalue title="debitNoteFilter" defaultValue="acceptAllDebitNotesFilter()" %} 
This filter outlines the rules for debit note acceptance.
{% /defaultvalue %}

{% defaultvalue title="invoiceFilter" defaultValue="acceptAllInvoicesFilter()" %} 
This filter outlines the rules for invoice acceptance.
{% /defaultvalue %}

## AgreementServiceOptions

{% defaultvalue title="agreementSelector" defaultValue="randomAgreementSelectorWithPriorityForExistingOnes()" %} 
This selector determines which agreements will be chosen for the next task, provided by the iterator. The pool comprises existing agreements and potential new agreements sourced from available proposals.
{% /defaultvalue %}

## Activity

{% defaultvalue title="activityExecuteTimeout" defaultValue="5*60*1000" %} 
Sets the maximum execution time for a script, either a single command or a batch, in ms.
{% /defaultvalue %}
