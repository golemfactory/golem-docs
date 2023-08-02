export const navigation = [
  {
    title: 'Introduction',
    links: [
      { title: 'Getting started', href: '/' },
      { title: 'Installation', href: '/docs/installation' },
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
