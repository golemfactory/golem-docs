export const navigation = [
  {
    title: 'Home',
    links: [
      { title: 'index', href: '/' },
    ]
  },
  {
    title: 'QuickStarts',
    links: [
      { title: 'index', href: '/docs/quickstarts/' },
      { title: 'JS QuickStart (node.js)', href: '/docs/quickstarts/js_quickstart' },
      { title: 'Golem in a Browser', href: '/docs/quickstarts/web_browser_qs' },
      { title: '"no-code" app deployment', href: '/docs/quickstarts/no_code_quickstart' },
    ],
  },
  {
    title: 'Create on Golem',
    links: [
      { title: 'index', href: '/docs/creators/' },
      { title: 'JavaScript', children: [
        { title: 'index', href: '/docs/creators/javascript/' },
        { title: 'QuickStarts', href: '/docs/creators/javascript/quickstart',children: [
          {
            title: 'index',
            href: '/docs/creators/javascript/quickstart/',
          },
          {
            title: 'Golem in Node.js',
            href: '/docs/creators/javascript/quickstart/quickstart',
          },
          {
            title: 'Golem in browser',
            href: '/docs/creators/javascript/quickstart/web_browser_qs',
          },], 
        },], 
      },
    ],
  },
  {
    title: 'Introduction',
    links: [
      { title: 'Getting started', href: '/blabla' },
      { title: 'Installation', href: '/docs/installation' }
    ],
  },
  {
    title: 'Javascript SDK',
    links: [
      { title: 'Designer Demo', href: '/docs/javascript/demo' },
      { title: 'Intro', href: '/docs/javascript/intro' },
      {
        title: 'Quickstart',
        href: '/docs/javascript/quickstart',
      },
    ],
  },
  {
    title: 'Decentralized apps on Golem',
    links: [
      { title: 'Quickstart', href: '/docs/dapps/run-a-dapp' },
      {
        title: 'Hello World Dapp',
        href: '/docs/dapps/hello-world-dapp',
      },
      {
        title: 'Managing multiple dapps',
        href: '/docs/dapps/managing-multiple-dapps',
        children: [
          {
            title: 'Managing multiple dapps',
            href: '/docs/dapps/managing-multiple-dapps',
          },
          {
            title: 'Managing multiple dapps2',
            href: '/docs/dapps/hello-world-dapp',
          },
        ],
      },
      {
        title: 'Creating Golem Dapps',
        href: '/docs/dapps/creating-golem-dapps',
      },
      {
        title: 'Differences between Docker containers and Golem VM runtime',
        href: '/docs/dapps/docker-containers-vs-golem-vms',
      },
      { title: 'Troubleshooting', href: '/docs/dapps/troubleshooting' },
    ],
  },
]
