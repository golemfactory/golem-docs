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
      {
        title: 'Retrievable Task',
        href: '/docs/quickstarts/retrievable-task',
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
              {
                title: 'Retrievable Task (Job API)',
                href: '/docs/creators/javascript/quickstarts/retrievable-task',
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
                title: 'Testing Golem Images',
                href: '/docs/creators/javascript/tutorials/testing-golem-image',
              },
              {
                title: 'REST API with Express.js',
                href: '/docs/creators/javascript/tutorials/rest-api-with-express',
              },
            ],
          },
          {
            title: 'JS Task API Examples',
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
          {
            title: 'Guides',
            href: '',
            children: [
              {
                title: 'List of guides',
                href: '/docs/creators/javascript/guides',
              },
              {
                title: 'Task Model',
                href: '/docs/creators/javascript/guides/task-model',
              },
              {
                title: 'Retrievable tasks (Job API)',
                href: '/docs/creators/javascript/guides/retrievable-tasks',
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
                title: 'Golem images',
                href: '/docs/creators/javascript/guides/golem-images',
              },
              {
                title: 'Golem images FAQ',
                href: '/docs/creators/javascript/guides/golem-images-faq',
              },
              {
                title: 'Switching to mainnet',
                href: '/docs/creators/javascript/guides/switching-to-mainnet',
              },
            ],
          },
          {
            title: 'Golem tools examples',
            href: '',
            children: [
              {
                title: 'List of instructions',
                href: '/docs/creators/javascript/examples/tools',
              },
              {
                title: 'Yagna installation',
                href: '/docs/creators/javascript/examples/tools/yagna-installation-for-requestors',
              },
              {
                title: 'Converting images',
                href: '/docs/creators/javascript/examples/tools/converting-docker-image-to-golem-format',
              },
              {
                title: 'Gvmkit-build installation',
                href: '/docs/creators/javascript/examples/tools/gvmkit-build-installation',
              },
              {
                title: 'Publishing custom images',
                href: '/docs/creators/javascript/examples/tools/publishing-custom-images',
              },
              {
                title: 'Golem wallet backup',
                href: '/docs/creators/javascript/examples/tools/golem-wallet-backup',
              },
              {
                title: 'Restoring Golem wallet',
                href: '/docs/creators/javascript/examples/tools/restoring-golem-wallet',
              },
              {
                title: 'Managing Golem wallet',
                href: '/docs/creators/javascript/examples/tools/managing-golem-wallet',
              },
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
                title: 'Converting a real-life use case to Ray on Golem',
                href: '/docs/creators/ray/conversion-to-ray-on-golem-tutorial',
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
            title: 'Golem tools examples',
            href: '',
            children: [
              {
                title: 'List of instructions',
                href: '/docs/creators/python/examples/tools',
              },
              {
                title: 'Yagna installation',
                href: '/docs/creators/python/examples/tools/yagna-installation-for-requestors',
              },
              {
                title: 'Converting images',
                href: '/docs/creators/python/examples/tools/converting-docker-image-to-golem-format',
              },
              {
                title: 'Gvmkit-build installation',
                href: '/docs/creators/python/examples/tools/gvmkit-build-installation',
              },
              {
                title: 'Publishing custom images',
                href: '/docs/creators/python/examples/tools/publishing-custom-images',
              },
              {
                title: 'Self-hosted VM images',
                href: '/docs/creators/python/examples/tools/self-hosted-vm-images',
              },
              {
                title: 'Golem wallet backup',
                href: '/docs/creators/python/examples/tools/golem-wallet-backup',
              },
              {
                title: 'Restoring Golem wallet',
                href: '/docs/creators/python/examples/tools/restoring-golem-wallet',
              },
              {
                title: 'Managing Golem wallet',
                href: '/docs/creators/python/examples/tools/managing-golem-wallet',
              },
            ],
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
        title: 'Common Developer tools',
        children: [
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

      { title: 'Provider FAQ', href: '/docs/providers/provider-faq' },

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
      { title: 'Maintenance', href: '/docs/providers/maintenance' },
      {
        title: 'Troubleshooting',
        href: '/docs/troubleshooting/provider',
      },
    ],
  },
  {
    title: 'General Info',
    links: [
      { title: 'Contents', href: '/docs/golem' },
      { title: 'Terms', href: '/docs/golem/terms' },
      {
        title: 'Golem Overview',
        children: [
          { title: 'Golem overview', href: '/docs/golem/overview' },
          { title: 'Provider', href: '/docs/golem/overview/provider' },
          { title: 'Requestor', href: '/docs/golem/overview/requestor' },
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
    ],
  },
]
