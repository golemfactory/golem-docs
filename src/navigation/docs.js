import { navigation as taskExecutorReference } from './golem-sdk-task-executor-jsreference'
import { navigation as golemJsReference } from './golem-js-jsreference'
import { parseReference } from './parseReference'

export const navigation = [
  {
    title: 'Home',
    links: [{ title: 'index', href: '/' }],
  },
  {
    title: 'Quickstarts',
    links: [
      { title: 'Introduction', href: '/docs/quickstarts' },
      {
        title: 'JS Quickstart (node.js)',
        href: '/docs/quickstarts/js-quickstart',
      },
      {
        title: 'Golem in a Browser',
        href: '/docs/quickstarts/golem-in-a-browser',
      },
      {
        title: 'Ray on Golem Quickstart',
        href: '/docs/quickstarts/ray-quickstart',
      },
      {
        title: '"no-code" app deployment',
        href: '/docs/quickstarts/no-code-app-deployment',
      },
      {
        title: 'Python Quickstart ',
        href: '/docs/quickstarts/python-quickstart',
      },
    ],
  },
  {
    title: 'Create on Golem',
    links: [
      { title: 'How do you want to create?', href: '/docs/creators' },
      {
        title: 'JavaScript',
        children: [
          { title: 'Introduction', href: '/docs/creators/javascript' },
          {
            title: 'Quickstarts',
            href: '/docs/creators/javascript/quickstarts',
            children: [
              {
                title: 'Golem in Node.js',
                href: '/docs/creators/javascript/quickstarts/quickstart',
              },
              {
                title: 'Golem in a browser',
                href: '/docs/creators/javascript/quickstarts/golem-in-a-browser',
              },
            ],
          },
          {
            title: 'Guides',
            href: '',
            children: [
              {
                title: 'List of guides',
                href: '/docs/creators/javascript/guides',
              },
              {
                title: 'Resource Rental Model',
                href: '/docs/creators/javascript/guides/golem-js',
              },
              {
                title: 'Golem SDK CLI',
                href: '/docs/creators/javascript/guides/golem-sdk-cli',
              },
              {
                title: 'Accessing the Internet',
                href: '/docs/creators/javascript/guides/accessing-internet',
              },
              {
                title: 'VM Filesystem',
                href: '/docs/creators/common/providers-filesystem',
              },
              {
                title: 'Golem images',
                href: '/docs/creators/javascript/guides/golem-images',
              },
              {
                title: 'Golem images FAQ',
                href: '/docs/creators/javascript/guides/golem-images-faq',
              },
              {
                title: 'Error handling',
                href: '/docs/creators/javascript/guides/error-handling',
              },
              {
                title: 'Switching to mainnet',
                href: '/docs/creators/javascript/guides/switching-to-mainnet',
              },
            ],
          },
          {
            title: 'Tutorials',
            children: [
              {
                title: 'List of tutorials',
                href: '/docs/creators/javascript/tutorials',
              },
              {
                title: 'Quickstart Explained',
                href: '/docs/creators/javascript/tutorials/quickstart-explained',
              },
              {
                title: 'Running parallel tasks',
                href: '/docs/creators/javascript/tutorials/running-parallel-tasks',
              },
              {
                title: 'Golem in a Browser',
                href: '/docs/creators/javascript/tutorials/running-in-browser',
              },
              {
                title: 'Building custom image',
                href: '/docs/creators/javascript/tutorials/building-custom-image',
              },
              {
                title: 'Using Outbound',
                href: '/docs/creators/javascript/tutorials/accessing-internet',
              },
              {
                title: 'Running AI Models on GPU Providers',
                href: '/docs/creators/javascript/tutorials/AI-on-golem-network',
              },
              {
                title: 'Testing Golem Images',
                href: '/docs/creators/javascript/tutorials/testing-golem-image',
              },
            ],
          },
          {
            title: 'JS Task API',
            href: '',
            children: [
              {
                title: 'Task Model',
                href: '/docs/creators/javascript/task-executor/task-model',
              },
              {
                title: 'Task API Quickstarts',
                href: '',
                children: [
                  {
                    title: 'Node.js quickstart',
                    href: '/docs/creators/javascript/task-executor/te-node-quickstart',
                  },
                  {
                    title: 'Web browser quickstart',
                    href: '/docs/creators/javascript/task-executor/te-browser-quickstart',
                  },
                  {
                    title: 'Node.js quickstart explained',
                    href: '/docs/creators/javascript/task-executor/te-node-quickstart-explained',
                  },
                  {
                    title: 'Web browser quickstart explained',
                    href: '/docs/creators/javascript/task-executor/te-browser-quickstart-explained',
                  },
                ],
              },
              {
                title: 'Task API Examples',
                href: '',
                children: [
                  {
                    title: 'List of examples',
                    href: '/docs/creators/javascript/examples',
                  },
                  {
                    title: 'Executing tasks',
                    href: '/docs/creators/javascript/examples/executing-tasks',
                  },
                  {
                    title: 'Composing tasks',
                    href: '/docs/creators/javascript/examples/composing-tasks',
                  },
                  {
                    title: 'Transferring data',
                    href: '/docs/creators/javascript/examples/transferring-data',
                  },
                  {
                    title: 'Working with results',
                    href: '/docs/creators/javascript/examples/working-with-results',
                  },
                  {
                    title: 'Selecting providers',
                    href: '/docs/creators/javascript/examples/selecting-providers',
                  },
                  {
                    title: 'Working with images',
                    href: '/docs/creators/javascript/examples/working-with-images',
                  },
                  {
                    title: 'Using app-keys',
                    href: '/docs/creators/javascript/examples/using-app-keys',
                  },
                  {
                    title: 'Accessing the Internet',
                    href: '/docs/creators/javascript/examples/accessing-internet',
                  },
                  {
                    title: 'Switching to mainnet',
                    href: '/docs/creators/javascript/examples/switching-to-mainnet',
                  },
                ],
              },
              parseReference('Task API Reference', taskExecutorReference),
            ],
          },
          {
            title: 'React SDK',
            href: '',
            children: [
              {
                title: 'Introduction',
                href: '/docs/creators/javascript/react',
              },
              {
                title: 'Getting started',
                href: '/docs/creators/javascript/react/getting-started',
              },
              {
                title: 'API Reference',
                href: '',
                children: [
                  {
                    title: 'Overview',
                    href: '/docs/creators/javascript/react/api-reference-overview',
                  },
                  {
                    title: 'YagnaProvider',
                    href: '/docs/creators/javascript/react/yagna-provider',
                  },
                  {
                    title: 'useYagna',
                    href: '/docs/creators/javascript/react/use-yagna',
                  },
                  {
                    title: 'useExecutor',
                    href: '/docs/creators/javascript/react/use-executor',
                  },
                  {
                    title: 'useTask',
                    href: '/docs/creators/javascript/react/use-task',
                  },
                  {
                    title: 'useAllocation',
                    href: '/docs/creators/javascript/react/use-allocation',
                  },
                  {
                    title: 'useInvoices',
                    href: '/docs/creators/javascript/react/use-invoices',
                  },
                  {
                    title: 'useDebitNotes',
                    href: '/docs/creators/javascript/react/use-debit-notes',
                  },
                  {
                    title: 'useHandleInvoice',
                    href: '/docs/creators/javascript/react/use-handle-invoice',
                  },
                  {
                    title: 'useHandleDebitNote',
                    href: '/docs/creators/javascript/react/use-handle-debit-note',
                  },
                ],
              },
            ],
          },
          parseReference('Golem JS API Reference', golemJsReference),
        ],
      },
      {
        title: 'Python with Ray on Golem',
        children: [
          {
            title: 'Getting Started',
            href: '',
            children: [
              { title: 'Introduction', href: '/docs/creators/ray' },
              { title: 'Quickstart', href: '/docs/creators/ray/quickstart' },
              {
                title: 'Setup tutorial',
                href: '/docs/creators/ray/setup-tutorial',
              },
              {
                title: 'Supported versions and other limitations',
                href: '/docs/creators/ray/supported-versions-and-other-limitations',
              },
            ],
          },
          {
            title: 'Tutorials',
            href: '',
            children: [
              {
                title: 'Basic Ray tasks usage tutorial',
                href: '/docs/creators/ray/basic-ray-tasks-usage-tutorial',
              },
              {
                title: 'Running on the mainnet',
                href: '/docs/creators/ray/mainnet',
              },
              {
                title: 'Accessing the Internet (outbound) tutorial',
                href: '/docs/creators/ray/outbound',
              },
            ],
          },
          {
            title: 'Ray on Golem tools',
            href: '',
            children: [
              {
                title: 'Cluster yaml',
                href: '/docs/creators/ray/cluster-yaml',
              },
              {
                title: 'Ray CLI',
                href: '/docs/creators/ray/ray-cli',
              },
              {
                title: 'Ray on Golem CLI',
                href: '/docs/creators/ray/ray-on-golem-cli',
              },
            ],
          },
        ],
      },
      {
        title: 'Python',
        children: [
          { title: 'Introduction', href: '/docs/creators/python' },
          {
            title: 'Quickstart',
            href: '',
            children: [
              {
                title: 'Task API Quickstart',
                href: '/docs/creators/python/quickstarts/run-first-task-on-golem',
              },
            ],
          },
          {
            title: 'Guides',
            href: '',
            children: [
              {
                title: 'List of guides',
                href: '/docs/creators/python/guides',
              },
              {
                title: 'Application fundamentals',
                href: '/docs/creators/python/guides/application-fundamentals',
              },
              {
                title: 'Task Model',
                href: '/docs/creators/python/guides/task-model',
              },
              {
                title: 'Service Model',
                href: '/docs/creators/python/guides/service-model',
              },
              {
                title: 'Golem images',
                href: '/docs/creators/python/guides/golem-images',
              },
              {
                title: 'Golem images FAQ',
                href: '/docs/creators/python/guides/golem-images-faq',
              },
              {
                title: 'Switching to mainnet',
                href: '/docs/creators/python/guides/switching-to-mainnet',
              },
              {
                title: 'VPN',
                href: '/docs/creators/python/guides/vpn',
              },
              {
                title: 'Debugging',
                href: '/docs/creators/python/guides/debugging',
              },
            ],
          },
          {
            title: 'Tutorials',
            children: [
              {
                title: 'List of tutorials',
                href: '/docs/creators/python/tutorials',
              },
              {
                title: 'Task API - Hello World',
                href: '/docs/creators/python/tutorials/task-example-0-hello',
              },
              {
                title: 'Task API - Cracker',
                href: '/docs/creators/python/tutorials/task-example-1-cracker',
              },
              {
                title: 'Task API - Hashcat',
                href: '/docs/creators/python/tutorials/task-example-2-hashcat',
              },
              {
                title: 'Service API - Hello World',
                href: '/docs/creators/python/tutorials/service-example-0-hello-world',
              },
              {
                title: 'Service API - Simple',
                href: '/docs/creators/python/tutorials/service-example-1-simple-service',
              },
              {
                title: 'Service API - SSH',
                href: '/docs/creators/python/tutorials/service-example-2-vpn-ssh-terminal',
              },
              {
                title: 'Service API - Proxy',
                href: '/docs/creators/python/tutorials/service-example-3-vpn-simple-http-proxy',
              },
              {
                title: 'Service API - Counter',
                href: '/docs/creators/python/tutorials/service-example-4-custom-usage-counters',
              },
              {
                title: 'Service API - Web app',
                href: '/docs/creators/python/tutorials/service-example-5-webapp',
              },
              {
                title: 'Service API - External API',
                href: '/docs/creators/python/tutorials/service-example-6-external-api-request',
              },
              {
                title: 'Building custom image',
                href: '/docs/creators/python/tutorials/building-custom-image',
              },
            ],
          },
          {
            title: 'Self-hosted VM images',
            href: '/docs/creators/python/examples/tools/self-hosted-vm-images',
          },
          {
            title: 'Python API Reference',
            href: 'https://yapapi.readthedocs.io/en/latest/api.html',
          },
        ],
      },
      {
        title: 'Golem-Workers',
        children: [
          { title: 'Introduction', href: '/docs/creators/golem-workers' },
          { title: 'Getting started', href: '/docs/creators/golem-workers/getting-started' },
          { title: 'Basic concepts guide', href: '/docs/creators/golem-workers/basic-concepts-guide' },
          { title: 'Stable Diffusion example', href: '/docs/creators/golem-workers/sd-example' },
          { title: 'Troubleshooting', href: '/docs/creators/golem-workers/troubleshooting' },
        ],
      }, 
      {
        title: 'Deploying apps on Golem',
        children: [
          { title: 'Introduction', href: '/docs/creators/dapps' },
          { title: 'Quickstart', href: '/docs/creators/dapps/run-a-dapp' },
          {
            title: 'Hello World Dapp',
            href: '/docs/creators/dapps/hello-world-dapp',
          },
          {
            title: 'Managing multiple dapps',
            href: '/docs/creators/dapps/managing-multiple-dapps',
          },
          {
            title: 'Creating Golem Dapps',
            href: '/docs/creators/dapps/creating-golem-dapps',
          },
          {
            title: 'Docker vs Golem VM diffs',
            href: '/docs/creators/dapps/docker-containers-vs-golem-vms',
          },
        ],
      },
      {
        title: 'Reputation System',
        children: [
          { title: 'Introduction', href: '/docs/reputation' },
          {
            title: 'How to find the best providers as a requestor',
            href: '/docs/reputation/finding-the-best-providers',
          },
          {
            title: 'Node.js integration example',
            href: '/docs/reputation/using-reputation-with-nodejs',
          },
          {
            title: 'Reputation API Swagger UI V1',
            href: '/docs/reputation/reputation-api-swagger-ui-v1',
          },
          {
            title: 'Reputation API Swagger UI V2',
            href: '/docs/reputation/reputation-api-swagger-ui-v2',
          },
        ],
      },
      {
        title: 'Troubleshooting',
        children: [
          {
            title: 'JavaScript Requestor',
            href: '/docs/troubleshooting/js-requestor',
          },
          {
            title: 'Ray on Golem',
            href: '/docs/creators/ray/troubleshooting',
          },
          {
            title: 'Golem-Workers',
            href: '/docs/creators/golem-workers/troubleshooting',
          },
          {
            title: 'Yagna',
            href: '/docs/troubleshooting/yagna',
          },
          {
            title: 'dApps',
            href: '/docs/troubleshooting/dapps',
          },

          {
            title: 'Exit codes',
            href: '/docs/troubleshooting/js-requestor/exit-codes',
          },
        ],
      },
      {
        title: '------------------------------',
      },
      {
        title: 'Common Developer tools',
        children: [
          {
            title: 'Yagna',
            href: '/docs/creators/tools/yagna',
            children: [
              {
                title: 'Yagna installation',
                href: '/docs/creators/tools/yagna/yagna-installation-for-requestors',
              },
              {
                title: 'Yagna uninstallation',
                href: '/docs/creators/tools/yagna/requestor-uninstallation',
              },
              {
                title: 'Yagna logs',
                href: '/docs/creators/tools/yagna/yagna-logs',
              },
              {
                title: 'Managing Golem Wallet',
                href: '/docs/creators/tools/yagna/managing-golem-wallet',
              },
              {
                title: 'Golem wallet backup',
                href: '/docs/creators/tools/yagna/golem-wallet-backup',
              },
              {
                title: 'Restoring Golem Wallet',
                href: '/docs/creators/tools/yagna/restoring-golem-wallet',
              },
              {
                title: 'Yagna mostly used commands',
                href: '/docs/creators/tools/yagna/yagna-mostly-used-commands',
              },
            ],
          },
          {
            title: 'Gvmkit-build',
            href: '/docs/creators/tools/gvmkit',
            children: [
              {
                title: 'Gvmkit-build installation',
                href: '/docs/creators/tools/gvmkit/gvmkit-build-installation',
              },
              {
                title: 'Golem image creation',
                href: '/docs/creators/tools/gvmkit/converting-docker-image-to-golem-format',
              },
              {
                title: 'Publishing custom image',
                href: '/docs/creators/tools/gvmkit/publishing-custom-images',
              },
            ],
          },
          {
            title: 'Goth',
            href: '/docs/creators/tools/goth',
            children: [
              {
                title: 'Goth Tutorial',
                href: '/docs/creators/tools/goth/running-goth',
              },
              {
                title: 'Goth in interactive mode',
                href: '/docs/creators/tools/goth/running-goths-interactive-mode',
              },
            ],
          },
        ],
      },
      {
        title: 'Golem concepts for developers',
        children: [
          {
            title: 'Filesystem on providers',
            href: '/docs/creators/common/providers-filesystem',
          },
          {
            title: 'How requestor interacts with providers',
            href: '/docs/creators/common/requestor-provider-interaction',
          },
        ],
      },
    ],
  },
  {
    title: 'Share and Earn',
    links: [
      { title: 'Introduction', href: '/docs/providers' },
      { title: 'Installation', href: '/docs/providers/provider-installation' },
      {
        title: 'Configuring your provider',
        children: [
          {
            title: 'General settings',
            href: '/docs/providers/configuration/general',
          },
          {
            title: 'Outbound networking',
            href: '/docs/providers/configuration/outbound',
          },
        ],
      },
      {
        title: 'Managing your wallet',
        children: [
          {
            title: 'Backing up your wallet',
            href: '/docs/providers/wallet/backup',
          },
          {
            title: 'Restoring a wallet',
            href: '/docs/providers/wallet/restoration',
          },
        ],
      },
      { title: 'Maintenance and Updates', href: '/docs/providers/maintenance' },
      { title: 'GPU Provider', href: '/docs/providers/gpu/gpu-golem-live' },
      {
        title: 'Troubleshooting',
        href: '/docs/troubleshooting/provider',
      },
      {
        title: 'Uninstallation',
        href: '/docs/providers/provider-uninstallation',
      },
      { title: 'Provider FAQ', href: '/docs/providers/provider-faq' },
      {
        title: 'Understanding provider logs',
        href: '/docs/providers/understanding-logs',
      },
    ],
  },
  {
    title: 'General Info',
    links: [
      { title: 'Contents', href: '/docs/golem' },
      {
        title: 'Golem Overview',
        children: [
          { title: 'Golem overview', href: '/docs/golem/overview' },
          { title: 'Provider', href: '/docs/golem/overview/provider' },
          { title: 'Requestor', href: '/docs/golem/overview/requestor' },
          { title: 'GLM token', href: '/docs/golem/overview/golem-token' },
          {
            title: 'Testnet vs Mainnet',
            href: '/docs/golem/overview/testnet-mainnet',
          },
        ],
      },
      {
        title: 'Payments',
        children: [
          { title: 'Payments explained', href: '/docs/golem/payments' },
          {
            title: 'Layer 2 Payments',
            href: '/docs/golem/payments/layer-2-payments',
          },
          {
            title: 'Deposits',
            href: '/docs/golem/payments/deposits',
          },
          {
            title: 'Golem token conversion',
            href: '/docs/golem/payments/golem-token-conversion',
          },
        ],
      },
      {
        title: 'Payload Manifest',
        children: [
          {
            title: 'Payload Manifest explained',
            href: '/docs/golem/payload-manifest',
          },
          {
            title: 'Schema',
            href: '/docs/golem/payload-manifest/computation-payload-manifest.schema',
          },
        ],
      },
      {
        title: 'Golem Migration Application',
        children: [
          {
            title: 'Migration Terms and Conditions',
            href: '/docs/golem/migrate/terms',
          },
          {
            title: 'Migration guideline',
            href: '/docs/golem/migrate/guideline',
          },
        ],
      },
      { title: 'Terms', href: '/docs/golem/terms' },
    ],
  },
]
