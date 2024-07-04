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
      { title: 'Introduction', href: '/docs/en/quickstarts' },
      {
        title: 'JS Quickstart (node.js)',
        href: '/docs/en/quickstarts/js-quickstart',
      },
      {
        title: 'Golem in a Browser',
        href: '/docs/en/quickstarts/golem-in-a-browser',
      },
      {
        title: 'Ray on Golem Quickstart',
        href: '/docs/en/quickstarts/ray-quickstart',
      },
      {
        title: '"no-code" app deployment',
        href: '/docs/en/quickstarts/no-code-app-deployment',
      },
      {
        title: 'Python Quickstart ',
        href: '/docs/en/quickstarts/python-quickstart',
      },
      {
        title: 'Retrievable Task',
        href: '/docs/en/quickstarts/retrievable-task',
      },
    ],
  },
  {
    title: 'Create on Golem',
    links: [
      { title: 'How do you want to create?', href: '/docs/en/creators' },
      {
        title: 'JavaScript',
        children: [
          { title: 'Introduction', href: '/docs/en/creators/javascript' },
          {
            title: 'Quickstarts',
            href: '/docs/en/creators/javascript/quickstarts',
            children: [
              {
                title: 'Golem in Node.js',
                href: '/docs/en/creators/javascript/quickstarts/quickstart',
              },
              {
                title: 'Golem in a browser',
                href: '/docs/en/creators/javascript/quickstarts/golem-in-a-browser',
              },
              {
                title: 'Retrievable Task (Job API)',
                href: '/docs/en/creators/javascript/quickstarts/retrievable-task',
              },
            ],
          },
          {
            title: 'Guides',
            href: '',
            children: [
              {
                title: 'List of guides',
                href: '/docs/en/creators/javascript/guides',
              },
              {
                title: 'Task Model',
                href: '/docs/en/creators/javascript/guides/task-model',
              },
              {
                title: 'Retrievable tasks (Job API)',
                href: '/docs/en/creators/javascript/guides/retrievable-tasks',
              },
              {
                title: 'Golem SDK CLI',
                href: '/docs/en/creators/javascript/guides/golem-sdk-cli',
              },
              {
                title: 'Accessing the Internet',
                href: '/docs/en/creators/javascript/guides/accessing-internet',
              },
              {
                title: 'VM Filesystem',
                href: '/docs/en/creators/common/providers-filesystem',
              },
              {
                title: 'Golem images',
                href: '/docs/en/creators/javascript/guides/golem-images',
              },
              {
                title: 'Golem images FAQ',
                href: '/docs/en/creators/javascript/guides/golem-images-faq',
              },
              {
                title: 'Error handling',
                href: '/docs/en/creators/javascript/guides/error-handling',
              },
              {
                title: 'Switching to mainnet',
                href: '/docs/en/creators/javascript/guides/switching-to-mainnet',
              },
            ],
          },
          {
            title: 'Tutorials',
            children: [
              {
                title: 'List of tutorials',
                href: '/docs/en/creators/javascript/tutorials',
              },
              {
                title: 'Quickstart Explained',
                href: '/docs/en/creators/javascript/tutorials/quickstart-explained',
              },
              {
                title: 'Running parallel tasks',
                href: '/docs/en/creators/javascript/tutorials/running-parallel-tasks',
              },
              {
                title: 'Golem in a Browser',
                href: '/docs/en/creators/javascript/tutorials/running-in-browser',
              },
              {
                title: 'Building custom image',
                href: '/docs/en/creators/javascript/tutorials/building-custom-image',
              },
              {
                title: 'Using Outbound',
                href: '/docs/en/creators/javascript/tutorials/accessing-internet',
              },
              {
                title: 'Testing Golem Images',
                href: '/docs/en/creators/javascript/tutorials/testing-golem-image',
              },
              {
                title: 'REST API with Express.js',
                href: '/docs/en/creators/javascript/tutorials/rest-api-with-express',
              },
            ],
          },
          {
            title: 'JS Task API',
            href: '',
            children: [
              {
                title: 'Task API Examples',
                href: '',
                children: [
                  {
                    title: 'List of examples',
                    href: '/docs/en/creators/javascript/examples',
                  },
                  {
                    title: 'Executing tasks',
                    href: '/docs/en/creators/javascript/examples/executing-tasks',
                  },
                  {
                    title: 'Composing tasks',
                    href: '/docs/en/creators/javascript/examples/composing-tasks',
                  },
                  {
                    title: 'Transferring data',
                    href: '/docs/en/creators/javascript/examples/transferring-data',
                  },
                  {
                    title: 'Working with results',
                    href: '/docs/en/creators/javascript/examples/working-with-results',
                  },
                  {
                    title: 'Selecting providers',
                    href: '/docs/en/creators/javascript/examples/selecting-providers',
                  },
                  {
                    title: 'Working with images',
                    href: '/docs/en/creators/javascript/examples/working-with-images',
                  },
                  {
                    title: 'Using app-keys',
                    href: '/docs/en/creators/javascript/examples/using-app-keys',
                  },
                  {
                    title: 'Accessing the Internet',
                    href: '/docs/en/creators/javascript/examples/accessing-internet',
                  },
                  {
                    title: 'Switching to mainnet',
                    href: '/docs/en/creators/javascript/examples/switching-to-mainnet',
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
                href: '/docs/en/creators/javascript/react',
              },
              {
                title: 'Getting started',
                href: '/docs/en/creators/javascript/react/getting-started',
              },
              {
                title: 'API Reference',
                href: '',
                children: [
                  {
                    title: 'Overview',
                    href: '/docs/en/creators/javascript/react/api-reference-overview',
                  },
                  {
                    title: 'YagnaProvider',
                    href: '/docs/en/creators/javascript/react/yagna-provider',
                  },
                  {
                    title: 'useYagna',
                    href: '/docs/en/creators/javascript/react/use-yagna',
                  },
                  {
                    title: 'useExecutor',
                    href: '/docs/en/creators/javascript/react/use-executor',
                  },
                  {
                    title: 'useTask',
                    href: '/docs/en/creators/javascript/react/use-task',
                  },
                  {
                    title: 'useInvoices',
                    href: '/docs/en/creators/javascript/react/use-invoices',
                  },
                  {
                    title: 'useDebitNotes',
                    href: '/docs/en/creators/javascript/react/use-debit-notes',
                  },
                  {
                    title: 'useHandleInvoice',
                    href: '/docs/en/creators/javascript/react/use-handle-invoice',
                  },
                  {
                    title: 'useHandleDebitNote',
                    href: '/docs/en/creators/javascript/react/use-handle-debit-note',
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
              { title: 'Introduction', href: '/docs/en/creators/ray' },
              { title: 'Quickstart', href: '/docs/en/creators/ray/quickstart' },
              {
                title: 'Setup tutorial',
                href: '/docs/en/creators/ray/setup-tutorial',
              },
              {
                title: 'Supported versions and other limitations',
                href: '/docs/en/creators/ray/supported-versions-and-other-limitations',
              },
            ],
          },
          {
            title: 'Tutorials',
            href: '',
            children: [
              {
                title: 'Basic Ray tasks usage tutorial',
                href: '/docs/en/creators/ray/basic-ray-tasks-usage-tutorial',
              },
              {
                title: 'Converting a real-life use case to Ray on Golem',
                href: '/docs/en/creators/ray/conversion-to-ray-on-golem-tutorial',
              },
              {
                title: 'Running on the mainnet',
                href: '/docs/en/creators/ray/mainnet',
              },
              {
                title: 'Accessing the Internet (outbound) tutorial',
                href: '/docs/en/creators/ray/outbound',
              },
            ],
          },
          {
            title: 'Ray on Golem tools',
            href: '',
            children: [
              {
                title: 'Cluster yaml',
                href: '/docs/en/creators/ray/cluster-yaml',
              },
              {
                title: 'Ray CLI',
                href: '/docs/en/creators/ray/ray-cli',
              },
              {
                title: 'Ray on Golem CLI',
                href: '/docs/en/creators/ray/ray-on-golem-cli',
              },
            ],
          },
        ],
      },
      {
        title: 'Python',
        children: [
          { title: 'Introduction', href: '/docs/en/creators/python' },
          {
            title: 'Quickstart',
            href: '',
            children: [
              {
                title: 'Task API Quickstart',
                href: '/docs/en/creators/python/quickstarts/run-first-task-on-golem',
              },
            ],
          },
          {
            title: 'Guides',
            href: '',
            children: [
              {
                title: 'List of guides',
                href: '/docs/en/creators/python/guides',
              },
              {
                title: 'Application fundamentals',
                href: '/docs/en/creators/python/guides/application-fundamentals',
              },
              {
                title: 'Task Model',
                href: '/docs/en/creators/python/guides/task-model',
              },
              {
                title: 'Service Model',
                href: '/docs/en/creators/python/guides/service-model',
              },
              {
                title: 'Golem images',
                href: '/docs/en/creators/python/guides/golem-images',
              },
              {
                title: 'Golem images FAQ',
                href: '/docs/en/creators/python/guides/golem-images-faq',
              },
              {
                title: 'Switching to mainnet',
                href: '/docs/en/creators/python/guides/switching-to-mainnet',
              },
              {
                title: 'VPN',
                href: '/docs/en/creators/python/guides/vpn',
              },
              {
                title: 'Debugging',
                href: '/docs/en/creators/python/guides/debugging',
              },
            ],
          },
          {
            title: 'Tutorials',
            children: [
              {
                title: 'List of tutorials',
                href: '/docs/en/creators/python/tutorials',
              },
              {
                title: 'Task API - Hello World',
                href: '/docs/en/creators/python/tutorials/task-example-0-hello',
              },
              {
                title: 'Task API - Cracker',
                href: '/docs/en/creators/python/tutorials/task-example-1-cracker',
              },
              {
                title: 'Task API - Hashcat',
                href: '/docs/en/creators/python/tutorials/task-example-2-hashcat',
              },
              {
                title: 'Service API - Hello World',
                href: '/docs/en/creators/python/tutorials/service-example-0-hello-world',
              },
              {
                title: 'Service API - Simple',
                href: '/docs/en/creators/python/tutorials/service-example-1-simple-service',
              },
              {
                title: 'Service API - SSH',
                href: '/docs/en/creators/python/tutorials/service-example-2-vpn-ssh-terminal',
              },
              {
                title: 'Service API - Proxy',
                href: '/docs/en/creators/python/tutorials/service-example-3-vpn-simple-http-proxy',
              },
              {
                title: 'Service API - Counter',
                href: '/docs/en/creators/python/tutorials/service-example-4-custom-usage-counters',
              },
              {
                title: 'Service API - Web app',
                href: '/docs/en/creators/python/tutorials/service-example-5-webapp',
              },
              {
                title: 'Service API - External API',
                href: '/docs/en/creators/python/tutorials/service-example-6-external-api-request',
              },
              {
                title: 'Building custom image',
                href: '/docs/en/creators/python/tutorials/building-custom-image',
              },
            ],
          },
          {
            title: 'Self-hosted VM images',
            href: '/docs/en/creators/python/examples/tools/self-hosted-vm-images',
          },
          {
            title: 'Python API Reference',
            href: 'https://yapapi.readthedocs.io/en/latest/api.html',
          },
        ],
      },
      {
        title: 'Deploying apps on Golem',
        children: [
          { title: 'Introduction', href: '/docs/en/creators/dapps' },
          { title: 'Quickstart', href: '/docs/en/creators/dapps/run-a-dapp' },
          {
            title: 'Hello World Dapp',
            href: '/docs/en/creators/dapps/hello-world-dapp',
          },
          {
            title: 'Managing multiple dapps',
            href: '/docs/en/creators/dapps/managing-multiple-dapps',
          },
          {
            title: 'Creating Golem Dapps',
            href: '/docs/en/creators/dapps/creating-golem-dapps',
          },
          {
            title: 'Docker vs Golem VM diffs',
            href: '/docs/en/creators/dapps/docker-containers-vs-golem-vms',
          },
        ],
      },
      {
        title: 'Reputation System',
        children: [
          { title: 'Introduction', href: '/docs/en/reputation' },
          {
            title: 'How to find the best providers as a requestor',
            href: '/docs/en/reputation/finding-the-best-providers',
          },
          {
            title: 'Node.js integration example',
            href: '/docs/en/reputation/using-reputation-with-nodejs',
          },
          {
            title: 'Reputation API Swagger UI V1',
            href: '/docs/en/reputation/reputation-api-swagger-ui-v1',
          },
          {
            title: 'Reputation API Swagger UI V2',
            href: '/docs/en/reputation/reputation-api-swagger-ui-v2',
          },
        ],
      },
      {
        title: 'Troubleshooting',
        children: [
          {
            title: 'JavaScript Requestor',
            href: '/docs/en/troubleshooting/js-requestor',
          },
          {
            title: 'Ray on Golem',
            href: '/docs/en/creators/ray/troubleshooting',
          },
          {
            title: 'Yagna',
            href: '/docs/en/troubleshooting/yagna',
          },
          {
            title: 'dApps',
            href: '/docs/en/troubleshooting/dapps',
          },

          {
            title: 'Exit codes',
            href: '/docs/en/troubleshooting/js-requestor/exit-codes',
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
            href: '/docs/en/creators/tools/yagna',
            children: [
              {
                title: 'Yagna installation',
                href: '/docs/en/creators/tools/yagna/yagna-installation-for-requestors',
              },
              {
                title: 'Yagna uninstallation',
                href: '/docs/en/creators/tools/yagna/requestor-uninstallation',
              },
              {
                title: 'Managing Golem Wallet',
                href: '/docs/en/creators/tools/yagna/managing-golem-wallet',
              },
              {
                title: 'Golem wallet backup',
                href: '/docs/en/creators/tools/yagna/golem-wallet-backup',
              },
              {
                title: 'Restoring Golem Wallet',
                href: '/docs/en/creators/tools/yagna/restoring-golem-wallet',
              },
              {
                title: 'Yagna mostly used commands',
                href: '/docs/en/creators/tools/yagna/yagna-mostly-used-commands',
              },
            ],
          },
          {
            title: 'Gvmkit-build',
            href: '/docs/en/creators/tools/gvmkit',
            children: [
              {
                title: 'Gvmkit-build installation',
                href: '/docs/en/creators/tools/gvmkit/gvmkit-build-installation',
              },
              {
                title: 'Golem image creation',
                href: '/docs/en/creators/tools/gvmkit/converting-docker-image-to-golem-format',
              },
              {
                title: 'Publishing custom image',
                href: '/docs/en/creators/tools/gvmkit/publishing-custom-images',
              },
            ],
          },
          {
            title: 'Goth',
            href: '/docs/en/creators/tools/goth',
            children: [
              {
                title: 'Goth Tutorial',
                href: '/docs/en/creators/tools/goth/running-goth',
              },
              {
                title: 'Goth in interactive mode',
                href: '/docs/en/creators/tools/goth/running-goths-interactive-mode',
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
            href: '/docs/en/creators/common/providers-filesystem',
          },
          {
            title: 'How requestor interacts with providers',
            href: '/docs/en/creators/common/requestor-provider-interaction',
          },
        ],
      },
    ],
  },
  {
    title: 'Share and Earn',
    links: [
      { title: 'Introduction', href: '/docs/en/providers' },
      {
        title: 'Installation',
        href: '/docs/en/providers/provider-installation',
      },
      {
        title: 'Configuring your provider',
        children: [
          {
            title: 'General settings',
            href: '/docs/en/providers/configuration/general',
          },
          {
            title: 'Outbound networking',
            href: '/docs/en/providers/configuration/outbound',
          },
        ],
      },
      {
        title: 'Managing your wallet',
        children: [
          {
            title: 'Backing up your wallet',
            href: '/docs/en/providers/wallet/backup',
          },
          {
            title: 'Restoring a wallet',
            href: '/docs/en/providers/wallet/restoration',
          },
        ],
      },
      {
        title: 'Maintenance and Updates',
        href: '/docs/en/providers/maintenance',
      },
      { title: 'GPU Provider', href: '/docs/en/providers/gpu/gpu-golem-live' },
      {
        title: 'Troubleshooting',
        href: '/docs/en/troubleshooting/provider',
      },
      {
        title: 'Uninstallation',
        href: '/docs/en/providers/provider-uninstallation',
      },
      { title: 'Provider FAQ', href: '/docs/en/providers/provider-faq' },
    ],
  },
  {
    title: 'General Info',
    links: [
      { title: 'Contents', href: '/docs/en/golem' },
      {
        title: 'Golem Overview',
        children: [
          { title: 'Golem overview', href: '/docs/en/golem/overview' },
          { title: 'Provider', href: '/docs/en/golem/overview/provider' },
          { title: 'Requestor', href: '/docs/en/golem/overview/requestor' },
          { title: 'GLM token', href: '/docs/en/golem/overview/golem-token' },
          {
            title: 'Testnet vs Mainnet',
            href: '/docs/en/golem/overview/testnet-mainnet',
          },
        ],
      },
      {
        title: 'Payments',
        children: [
          { title: 'Payments explained', href: '/docs/en/golem/payments' },
          {
            title: 'Layer 2 Payments',
            href: '/docs/en/golem/payments/layer-2-payments',
          },
          {
            title: 'Golem token conversion',
            href: '/docs/en/golem/payments/golem-token-conversion',
          },
        ],
      },
      {
        title: 'Payload Manifest',
        children: [
          {
            title: 'Payload Manifest explained',
            href: '/docs/en/golem/payload-manifest',
          },
          {
            title: 'Schema',
            href: '/docs/en/golem/payload-manifest/computation-payload-manifest.schema',
          },
        ],
      },
      {
        title: 'Golem Migration Application',
        children: [
          {
            title: 'Migration Terms and Conditions',
            href: '/docs/en/golem/migrate/terms',
          },
          {
            title: 'Migration guideline',
            href: '/docs/en/golem/migrate/guideline',
          },
        ],
      },
      { title: 'Terms', href: '/docs/en/golem/terms' },
    ],
  },
]
