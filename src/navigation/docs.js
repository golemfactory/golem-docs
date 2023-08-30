export const navigation = [
  {
    title: 'Home',
    links: [{ title: 'index', href: '/' }],
  },
  {
    title: 'QuickStarts',
    links: [
      { title: 'Introduction', href: '/docs/quickstarts' },
      {
        title: 'JS QuickStart (node.js)',
        href: '/docs/quickstarts/js-quickstart',
      },
      {
        title: 'Golem in a Browser',
        href: '/docs/quickstarts/golem-in-a-browser',
      },
      {
        title: '"no-code" app deployment',
        href: '/docs/quickstarts/no-code-app-deployment',
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
            title: 'QuickStarts',
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
            title: 'Tutorials',
            children: [
              {
                title: 'List of tutorials',
                href: '/docs/creators/javascript/tutorials',
              },
              {
                title: 'QuickStart Explained',
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
                title: 'Testing Golem Images',
                href: '/docs/creators/javascript/tutorials/testing-golem-image',
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
              {
                title: 'Troubleshooting',
                href: '/docs/creators/javascript/guides/troubleshooting',
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
         
        ],
      },
      {
        title: 'Python',
        children: [
          { title: 'Introduction', href: '/docs/creators/python' },
          {
            title: 'QuickStarts',
            href: '/docs/creators/python/quickstarts',
            children: [
              {
                title: 'Task API QuickStart',
                href: '/docs/creators/python/quickstarts/run-first-task-on-golem',
              },
              {
                title: 'Service API QuickStart',
                href: '/docs/creators/python/quickstarts/run-first-service-on-golem',
              },
            ]
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
                title: 'Service Model Dive',
                href: '/docs/creators/python/guides/service-model-dive',
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
                title: 'Troubleshooting',
                href: '/docs/creators/python/guides/troubleshooting',
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
                title: 'Task API - QuickStart explained',
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
            ],
          },
          {
            title: 'Python Examples',
            href: '',
            children: [
              {
                title: 'List of examples',
                href: '/docs/creators/python/examples',
              },
              {
                title: 'Executing tasks',
                href: '/docs/creators/python/examples/executing-tasks',
              },
              {
                title: 'Composing tasks',
                href: '/docs/creators/python/examples/composing-tasks',
              },
              {
                title: 'Transferring data',
                href: '/docs/creators/python/examples/transferring-data',
              },
              {
                title: 'Working with results',
                href: '/docs/creators/python/examples/working-with-results',
              },
              {
                title: 'Selecting providers',
                href: '/docs/creators/python/examples/selecting-providers',
              },
              {
                title: 'Working with images',
                href: '/docs/creators/python/examples/working-with-images',
              },
              {
                title: 'Using app-keys',
                href: '/docs/creators/python/examples/using-app-keys',
              },
              {
                title: 'Switching to mainnet',
                href: '/docs/creators/python/examples/switching-to-mainnet',
              },
              {
                title: 'Enable logging',
                href: '/docs/creators/python/examples/enable-logging',
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
          {
            title: 'Troubleshooting',
            href: '/docs/creators/dapps/troubleshooting',
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
          {
            title: 'Images',
            href: '',
            children: [
              {
                title: 'Self-hosted VM images',
                href: '/docs/creators/tools/images/self-hosted-vm-images',
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
        title: 'Basic Configuration',
        href: '/docs/providers/provider-basic-configuration',
      },
      { title: 'Provider FAQ', href: '/docs/providers/provider-faq' },
      {
        title: 'Troubleshooting',
        href: '/docs/providers/provider-troubleshooting',
      },
      {
        title: 'Yagna CLI reference',
        href: '/docs/providers/yagna-cli-reference',
      },
      {
        title: 'Maintenance',
        children: [
          {
            title: 'Maintenance',
            href: '/docs/providers/maintenance/provider-maintenance',
          },
          {
            title: 'Wallet Backup',
            href: '/docs/providers/maintenance/wallet-backup',
          },
          {
            title: 'Wallet Restore',
            href: '/docs/providers/maintenance/wallet-restoration',
          },
        ],
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
          { title: 'Payload Manifest explained', href: '/docs/golem/payload-manifest' },
          {
            title: 'Schema',
            href: '/docs/golem/payload-manifest/computation-payload-manifest.schema',
          },
        ],
      },
    ],
  },
]
