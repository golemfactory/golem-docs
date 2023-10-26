# Default Values in the JS SDK

The JS SDK is designed to streamline the experience for developers by providing default values for various options. These default settings cater to the majority of typical use cases. However, understanding that there may be unique scenarios where you might need to tweak these settings, the SDK allows for customization.

Below is a summary of the default values, their significance, and the associated parameters that can be adjusted as per your requirements:

{% defaultvalue title="executorOptions" description="Timeout for executing one task in ms." defaultValue="5 * 60 * 1000 = 5 min." /%}

{% defaultvalue title="taskTimeout" description="Timeout for executing one task in ms." defaultValue="5 * 60 * 1000 = 5 min." /%}

{% defaultvalue title="logger" description="Logger module to handle SDK logs." defaultValue="pinoLogger for Node.js, null for browsers." /%}

{% defaultvalue title="logLevel" description="Log level: `debug`, `info`, `warn`, `log`, `error`." defaultValue="'info'." /%}

{% defaultvalue title="enableLogging" description="This option enables logging, set to `false` to completely disable logging (even if a logger is provided)." defaultValue="`true`." /%}

## yagnaOptions

{% defaultvalue title="apiKey" description="`apiKey` enables access to yagna rest API." defaultValue="as read from 'process.env.YAGNA_APPKEY' for node.js, null for browser." /%}

{% defaultvalue title="basePath" description="URL of yagna REST API." defaultValue="`http://127.0.0.1:7465`." /%}

{% defaultvalue title="maxTaskRetries" description="The maximum number of retries when the job failed on the provider." defaultValue="3." /%}

{% defaultvalue title="activityPreparingTimeout" description="Timeout for preparing activity - creating and deploying commands in ms." defaultValue="5 * 60 * 1000 = 5 min." /%}

## packagePackageOptions

{% defaultvalue title="engine" description="Type of the payload (`vm`, `wasm`)." defaultValue="`vm`," /%}

{% defaultvalue title="minMemGib" description="Minimum size of RAM in GB." defaultValue="0.5." /%}

{% defaultvalue title="minStorageGib" description="Minimum size of storage in GB." defaultValue="2," /%}

{% defaultvalue title="minCpuThreads" description="Minimum no of threads." defaultValue="1." /%}

{% defaultvalue title="minCpuCores" description="Minimum no of CPU cores." defaultValue="1." /%}

{% defaultvalue title="capabilities" description="Set of capabilities providers offer, see manifest and demand documentation of details." defaultValue="[]" /%}

## MarketOptions

{% defaultvalue title="debitNotesAcceptanceTimeout" description="Minimal time we reserve to accept debit notes, prosales with shorter time will be rejected in min." defaultValue="30." /%}

{% defaultvalue title="proposalFilter" description="Filter to decide what proposal to accept (from these that match the demand)." defaultValue="acceptAllProposalFilter()." /%}

## TaskServiceOptions

{% defaultvalue title="maxParallelTasks" description="Max no of parallel tasks when the TaskExecutor is running tasks from a list (see `map()` and `forEach()`)." defaultValue="5." /%}

## PaymentOptions

{% defaultvalue title="network" description="Defines on that blockchain the payment will be performed, `goerli` is a test network where test GLM is used, `polygon`." defaultValue="`goerli`." /%}

{% defaultvalue title="budget" description="The amount that is allocated for all tasks scheduled by an executor in GLM/tGLM." defaultValue="1.0." /%}

{% defaultvalue title="paymentTimeout" description="Max time the executor script will await invoices from providers after tasks are complete in ms." defaultValue="60 * 1000 = 1 min." /%}

{% defaultvalue title="allocationExpires" description="Duration after which allocation expires in msec, valid allocation is required to accept invoices." defaultValue="60 mins." /%}

{% defaultvalue title="debitNoteFilter" description="Filter containing rules for debitNotes acceptance." defaultValue="acceptAllDebitNotesFilter()." /%}

{% defaultvalue title="invoiceFilter" description="Filter containing rules for Invoice acceptance." defaultValue="acceptAllInvoicesFilter()." /%}

## AgreementServiceOptions

{% defaultvalue title="agreementSelector" description="Decide which agreements will be used for the next task provided by the iterator, pool contains existing agreements and potential new agreements from available proposals." defaultValue="randomAgreementSelectorWithPriorityForExistingOnes()." /%}

## Activity

{% defaultvalue title="activityExecuteTimeout" description="Execution time for script (one command or batch) in ms." defaultValue="5*60*1000 = 5 min." /%}
