import { navigation as taskExecutorReference } from './golem-sdk-task-executor-jsreference'
import { navigation as golemJsReference } from './golem-js-jsreference'
import { parseReference } from './parseReference'

export const navigation = [
  {
    title: 'ホーム',
    links: [{ title: 'インデックス', href: '/' }],
  },
  {
    title: 'クイックスタート',
    links: [
      { title: '紹介', href: '/docs/ja/quickstarts' },
      {
        title: 'JS クイックスタート (node.js)',
        href: '/docs/ja/quickstarts/js-quickstart',
      },
      {
        title: 'ブラウザでのGolem',
        href: '/docs/ja/quickstarts/golem-in-a-browser',
      },
      {
        title: 'Golem上のRayクイックスタート',
        href: '/docs/ja/quickstarts/ray-quickstart',
      },
      {
        title: '"ノーコード"アプリデプロイメント',
        href: '/docs/ja/quickstarts/no-code-app-deployment',
      },
      {
        title: 'Pythonクイックスタート',
        href: '/docs/ja/quickstarts/python-quickstart',
      },
      {
        title: '取得可能タスク',
        href: '/docs/ja/quickstarts/retrievable-task',
      },
    ],
  },
  {
    title: 'Golemで創造する',
    links: [
      { title: 'どのように創造したいですか？', href: '/docs/ja/creators' },
      {
        title: 'JavaScript',
        children: [
          { title: '紹介', href: '/docs/ja/creators/javascript' },
          {
            title: 'クイックスタート',
            href: '/docs/ja/creators/javascript/quickstarts',
            children: [
              {
                title: 'Node.jsでのGolem',
                href: '/docs/ja/creators/javascript/quickstarts/quickstart',
              },
              {
                title: 'ブラウザでのGolem',
                href: '/docs/ja/creators/javascript/quickstarts/golem-in-a-browser',
              },
              {
                title: '取得可能タスク (Job API)',
                href: '/docs/ja/creators/javascript/quickstarts/retrievable-task',
              },
            ],
          },
          {
            title: 'ガイド',
            href: '',
            children: [
              {
                title: 'ガイド一覧',
                href: '/docs/ja/creators/javascript/guides',
              },
              {
                title: 'タスクモデル',
                href: '/docs/ja/creators/javascript/guides/task-model',
              },
              {
                title: '取得可能タスク (Job API)',
                href: '/docs/ja/creators/javascript/guides/retrievable-tasks',
              },
              {
                title: 'Golem SDK CLI',
                href: '/docs/ja/creators/javascript/guides/golem-sdk-cli',
              },
              {
                title: 'インターネットへのアクセス',
                href: '/docs/ja/creators/javascript/guides/accessing-internet',
              },
              {
                title: 'VMファイルシステム',
                href: '/docs/ja/creators/common/providers-filesystem',
              },
              {
                title: 'Golemイメージ',
                href: '/docs/ja/creators/javascript/guides/golem-images',
              },
              {
                title: 'GolemイメージFAQ',
                href: '/docs/ja/creators/javascript/guides/golem-images-faq',
              },
              {
                title: 'エラー処理',
                href: '/docs/ja/creators/javascript/guides/error-handling',
              },
              {
                title: 'メインネットへの切り替え',
                href: '/docs/ja/creators/javascript/guides/switching-to-mainnet',
              },
            ],
          },
          {
            title: 'チュートリアル',
            children: [
              {
                title: 'チュートリアル一覧',
                href: '/docs/ja/creators/javascript/tutorials',
              },
              {
                title: 'クイックスタートの説明',
                href: '/docs/ja/creators/javascript/tutorials/quickstart-explained',
              },
              {
                title: '並列タスクの実行',
                href: '/docs/ja/creators/javascript/tutorials/running-parallel-tasks',
              },
              {
                title: 'ブラウザでのGolem',
                href: '/docs/ja/creators/javascript/tutorials/running-in-browser',
              },
              {
                title: 'カスタムイメージの構築',
                href: '/docs/ja/creators/javascript/tutorials/building-custom-image',
              },
              {
                title: 'アウトバウンドの使用',
                href: '/docs/ja/creators/javascript/tutorials/accessing-internet',
              },
              {
                title: 'Golemイメージのテスト',
                href: '/docs/ja/creators/javascript/tutorials/testing-golem-image',
              },
              {
                title: 'Express.jsでのREST API',
                href: '/docs/ja/creators/javascript/tutorials/rest-api-with-express',
              },
            ],
          },
          {
            title: 'JS Task API',
            href: '',
            children: [
              {
                title: 'Task API 例',
                href: '',
                children: [
                  {
                    title: '例一覧',
                    href: '/docs/ja/creators/javascript/examples',
                  },
                  {
                    title: 'タスクの実行',
                    href: '/docs/ja/creators/javascript/examples/executing-tasks',
                  },
                  {
                    title: 'タスクの構成',
                    href: '/docs/ja/creators/javascript/examples/composing-tasks',
                  },
                  {
                    title: 'データの転送',
                    href: '/docs/ja/creators/javascript/examples/transferring-data',
                  },
                  {
                    title: '結果の処理',
                    href: '/docs/ja/creators/javascript/examples/working-with-results',
                  },
                  {
                    title: 'プロバイダーの選択',
                    href: '/docs/ja/creators/javascript/examples/selecting-providers',
                  },
                  {
                    title: 'イメージの操作',
                    href: '/docs/ja/creators/javascript/examples/working-with-images',
                  },
                  {
                    title: 'アプリキーの使用',
                    href: '/docs/ja/creators/javascript/examples/using-app-keys',
                  },
                  {
                    title: 'インターネットへのアクセス',
                    href: '/docs/ja/creators/javascript/examples/accessing-internet',
                  },
                  {
                    title: 'メインネットへの切り替え',
                    href: '/docs/ja/creators/javascript/examples/switching-to-mainnet',
                  },
                ],
              },
              parseReference(
                'Task API リファレンス',
                taskExecutorReference,
                'ja'
              ),
            ],
          },
          {
            title: 'React SDK',
            href: '',
            children: [
              {
                title: '紹介',
                href: '/docs/ja/creators/javascript/react',
              },
              {
                title: '始めましょう',
                href: '/docs/ja/creators/javascript/react/getting-started',
              },
              {
                title: 'APIリファレンス',
                href: '',
                children: [
                  {
                    title: '概要',
                    href: '/docs/ja/creators/javascript/react/api-reference-overview',
                  },
                  {
                    title: 'YagnaProvider',
                    href: '/docs/ja/creators/javascript/react/yagna-provider',
                  },
                  {
                    title: 'useYagna',
                    href: '/docs/ja/creators/javascript/react/use-yagna',
                  },
                  {
                    title: 'useExecutor',
                    href: '/docs/ja/creators/javascript/react/use-executor',
                  },
                  {
                    title: 'useTask',
                    href: '/docs/ja/creators/javascript/react/use-task',
                  },
                  {
                    title: 'useInvoices',
                    href: '/docs/ja/creators/javascript/react/use-invoices',
                  },
                  {
                    title: 'useDebitNotes',
                    href: '/docs/ja/creators/javascript/react/use-debit-notes',
                  },
                  {
                    title: 'useHandleInvoice',
                    href: '/docs/ja/creators/javascript/react/use-handle-invoice',
                  },
                  {
                    title: 'useHandleDebitNote',
                    href: '/docs/ja/creators/javascript/react/use-handle-debit-note',
                  },
                ],
              },
            ],
          },
          parseReference('Golem JS APIリファレンス', golemJsReference, 'ja'),
        ],
      },
      {
        title: 'Golem上のPythonとRay',
        children: [
          {
            title: '始めましょう',
            href: '',
            children: [
              { title: '紹介', href: '/docs/ja/creators/ray' },
              {
                title: 'クイックスタート',
                href: '/docs/ja/creators/ray/quickstart',
              },
              {
                title: 'セットアップチュートリアル',
                href: '/docs/ja/creators/ray/setup-tutorial',
              },
              {
                title: 'サポートされているバージョンとその他の制限',
                href: '/docs/ja/creators/ray/supported-versions-and-other-limitations',
              },
            ],
          },
          {
            title: 'チュートリアル',
            href: '',
            children: [
              {
                title: '基本的なRayタスク使用チュートリアル',
                href: '/docs/ja/creators/ray/basic-ray-tasks-usage-tutorial',
              },
              {
                title: '実際のユースケースをGolem上のRayに変換する',
                href: '/docs/ja/creators/ray/conversion-to-ray-on-golem-tutorial',
              },
              {
                title: 'メインネットでの実行',
                href: '/docs/ja/creators/ray/mainnet',
              },
              {
                title:
                  'インターネットへのアクセス（アウトバウンド）チュートリアル',
                href: '/docs/ja/creators/ray/outbound',
              },
            ],
          },
          {
            title: 'Golem上のRayツール',
            href: '',
            children: [
              {
                title: 'クラスターyaml',
                href: '/docs/ja/creators/ray/cluster-yaml',
              },
              {
                title: 'Ray CLI',
                href: '/docs/ja/creators/ray/ray-cli',
              },
              {
                title: 'Golem上のRay CLI',
                href: '/docs/ja/creators/ray/ray-on-golem-cli',
              },
            ],
          },
        ],
      },
      {
        title: 'Python',
        children: [
          { title: '紹介', href: '/docs/ja/creators/python' },
          {
            title: 'クイックスタート',
            href: '',
            children: [
              {
                title: 'Task API クイックスタート',
                href: '/docs/ja/creators/python/quickstarts/run-first-task-on-golem',
              },
            ],
          },
          {
            title: 'ガイド',
            href: '',
            children: [
              {
                title: 'ガイド一覧',
                href: '/docs/ja/creators/python/guides',
              },
              {
                title: 'アプリケーションの基礎',
                href: '/docs/ja/creators/python/guides/application-fundamentals',
              },
              {
                title: 'タスクモデル',
                href: '/docs/ja/creators/python/guides/task-model',
              },
              {
                title: 'サービスモデル',
                href: '/docs/ja/creators/python/guides/service-model',
              },
              {
                title: 'Golemイメージ',
                href: '/docs/ja/creators/python/guides/golem-images',
              },
              {
                title: 'GolemイメージFAQ',
                href: '/docs/ja/creators/python/guides/golem-images-faq',
              },
              {
                title: 'メインネットへの切り替え',
                href: '/docs/ja/creators/python/guides/switching-to-mainnet',
              },
              {
                title: 'VPN',
                href: '/docs/ja/creators/python/guides/vpn',
              },
              {
                title: 'デバッグ',
                href: '/docs/ja/creators/python/guides/debugging',
              },
            ],
          },
          {
            title: 'チュートリアル',
            children: [
              {
                title: 'チュートリアル一覧',
                href: '/docs/ja/creators/python/tutorials',
              },
              {
                title: 'Task API - Hello World',
                href: '/docs/ja/creators/python/tutorials/task-example-0-hello',
              },
              {
                title: 'Task API - Cracker',
                href: '/docs/ja/creators/python/tutorials/task-example-1-cracker',
              },
              {
                title: 'Task API - Hashcat',
                href: '/docs/ja/creators/python/tutorials/task-example-2-hashcat',
              },
              {
                title: 'Service API - Hello World',
                href: '/docs/ja/creators/python/tutorials/service-example-0-hello-world',
              },
              {
                title: 'Service API - Simple',
                href: '/docs/ja/creators/python/tutorials/service-example-1-simple-service',
              },
              {
                title: 'Service API - SSH',
                href: '/docs/ja/creators/python/tutorials/service-example-2-vpn-ssh-terminal',
              },
              {
                title: 'Service API - Proxy',
                href: '/docs/ja/creators/python/tutorials/service-example-3-vpn-simple-http-proxy',
              },
              {
                title: 'Service API - Counter',
                href: '/docs/ja/creators/python/tutorials/service-example-4-custom-usage-counters',
              },
              {
                title: 'Service API - Web app',
                href: '/docs/ja/creators/python/tutorials/service-example-5-webapp',
              },
              {
                title: 'Service API - External API',
                href: '/docs/ja/creators/python/tutorials/service-example-6-external-api-request',
              },
              {
                title: 'カスタムイメージの構築',
                href: '/docs/ja/creators/python/tutorials/building-custom-image',
              },
            ],
          },
          {
            title: 'セルフホストVMイメージ',
            href: '/docs/ja/creators/python/examples/tools/self-hosted-vm-images',
          },
          {
            title: 'Python APIリファレンス',
            href: 'https://yapapi.readthedocs.io/en/latest/api.html',
          },
        ],
      },
      {
        title: 'Golemでのアプリのデプロイ',
        children: [
          { title: '紹介', href: '/docs/ja/creators/dapps' },
          {
            title: 'クイックスタート',
            href: '/docs/ja/creators/dapps/run-a-dapp',
          },
          {
            title: 'Hello World Dapp',
            href: '/docs/ja/creators/dapps/hello-world-dapp',
          },
          {
            title: '複数のdappsの管理',
            href: '/docs/ja/creators/dapps/managing-multiple-dapps',
          },
          {
            title: 'Golem Dappsの作成',
            href: '/docs/ja/creators/dapps/creating-golem-dapps',
          },
          {
            title: 'DockerとGolem VMの違い',
            href: '/docs/ja/creators/dapps/docker-containers-vs-golem-vms',
          },
        ],
      },
      {
        title: '評判システム',
        children: [
          { title: '紹介', href: '/docs/ja/reputation' },
          {
            title: 'リクエスターとして最適なプロバイダーを見つける方法',
            href: '/docs/ja/reputation/finding-the-best-providers',
          },
          {
            title: 'Node.js統合例',
            href: '/docs/ja/reputation/using-reputation-with-nodejs',
          },
          {
            title: '評判API Swagger UI V1',
            href: '/docs/ja/reputation/reputation-api-swagger-ui-v1',
          },
          {
            title: '評判API Swagger UI V2',
            href: '/docs/ja/reputation/reputation-api-swagger-ui-v2',
          },
        ],
      },
      {
        title: 'トラブルシューティング',
        children: [
          {
            title: 'JavaScriptリクエスター',
            href: '/docs/ja/troubleshooting/js-requestor',
          },
          {
            title: 'Golem上のRay',
            href: '/docs/ja/creators/ray/troubleshooting',
          },
          {
            title: 'Yagna',
            href: '/docs/ja/troubleshooting/yagna',
          },
          {
            title: 'dApps',
            href: '/docs/ja/troubleshooting/dapps',
          },
          {
            title: '終了コード',
            href: '/docs/ja/troubleshooting/js-requestor/exit-codes',
          },
        ],
      },
      {
        title: '------------------------------',
      },
      {
        title: '共通開発者ツール',
        children: [
          {
            title: 'Yagna',
            href: '/docs/ja/creators/tools/yagna',
            children: [
              {
                title: 'Yagnaのインストール',
                href: '/docs/ja/creators/tools/yagna/yagna-installation-for-requestors',
              },
              {
                title: 'Yagnaのアンインストール',
                href: '/docs/ja/creators/tools/yagna/requestor-uninstallation',
              },
              {
                title: 'Golemウォレットの管理',
                href: '/docs/ja/creators/tools/yagna/managing-golem-wallet',
              },
              {
                title: 'Golemウォレットのバックアップ',
                href: '/docs/ja/creators/tools/yagna/golem-wallet-backup',
              },
              {
                title: 'Golemウォレットの復元',
                href: '/docs/ja/creators/tools/yagna/restoring-golem-wallet',
              },
              {
                title: 'Yagnaの主要コマンド',
                href: '/docs/ja/creators/tools/yagna/yagna-mostly-used-commands',
              },
            ],
          },
          {
            title: 'Gvmkit-build',
            href: '/docs/ja/creators/tools/gvmkit',
            children: [
              {
                title: 'Gvmkit-buildのインストール',
                href: '/docs/ja/creators/tools/gvmkit/gvmkit-build-installation',
              },
              {
                title: 'Golemイメージの作成',
                href: '/docs/ja/creators/tools/gvmkit/converting-docker-image-to-golem-format',
              },
              {
                title: 'カスタムイメージの公開',
                href: '/docs/ja/creators/tools/gvmkit/publishing-custom-images',
              },
            ],
          },
          {
            title: 'Goth',
            href: '/docs/ja/creators/tools/goth',
            children: [
              {
                title: 'Gothチュートリアル',
                href: '/docs/ja/creators/tools/goth/running-goth',
              },
              {
                title: 'インタラクティブモードでのGoth',
                href: '/docs/ja/creators/tools/goth/running-goths-interactive-mode',
              },
            ],
          },
        ],
      },
      {
        title: '開発者向けGolemの概念',
        children: [
          {
            title: 'プロバイダーのファイルシステム',
            href: '/docs/ja/creators/common/providers-filesystem',
          },
          {
            title: 'リクエスターとプロバイダーの相互作用',
            href: '/docs/ja/creators/common/requestor-provider-interaction',
          },
        ],
      },
    ],
  },
  {
    title: '共有して稼ぐ',
    links: [
      { title: '紹介', href: '/docs/ja/providers' },
      {
        title: 'インストール',
        href: '/docs/ja/providers/provider-installation',
      },
      {
        title: 'プロバイダーの設定',
        children: [
          {
            title: '一般設定',
            href: '/docs/ja/providers/configuration/general',
          },
          {
            title: 'アウトバウンドネットワーキング',
            href: '/docs/ja/providers/configuration/outbound',
          },
        ],
      },
      {
        title: 'ウォレットの管理',
        children: [
          {
            title: 'ウォレットのバックアップ',
            href: '/docs/ja/providers/wallet/backup',
          },
          {
            title: 'ウォレットの復元',
            href: '/docs/ja/providers/wallet/restoration',
          },
        ],
      },
      { title: 'メンテナンスと更新', href: '/docs/ja/providers/maintenance' },
      {
        title: 'GPUプロバイダー',
        href: '/docs/ja/providers/gpu/gpu-golem-live',
      },
      {
        title: 'トラブルシューティング',
        href: '/docs/ja/troubleshooting/provider',
      },
      {
        title: 'アンインストール',
        href: '/docs/ja/providers/provider-uninstallation',
      },
      { title: 'プロバイダーFAQ', href: '/docs/ja/providers/provider-faq' },
    ],
  },
  {
    title: '一般情報',
    links: [
      { title: '目次', href: '/docs/ja/golem' },
      {
        title: 'Golem概要',
        children: [
          { title: 'Golem概要', href: '/docs/ja/golem/overview' },
          { title: 'プロバイダー', href: '/docs/ja/golem/overview/provider' },
          { title: 'リクエスター', href: '/docs/ja/golem/overview/requestor' },
          { title: 'GLMトークン', href: '/docs/ja/golem/overview/golem-token' },
          {
            title: 'テストネットvsメインネット',
            href: '/docs/ja/golem/overview/testnet-mainnet',
          },
        ],
      },
      {
        title: '支払い',
        children: [
          { title: '支払いの説明', href: '/docs/ja/golem/payments' },
          {
            title: 'レイヤー2支払い',
            href: '/docs/ja/golem/payments/layer-2-payments',
          },
          {
            title: 'Golemトークンの変換',
            href: '/docs/ja/golem/payments/golem-token-conversion',
          },
        ],
      },
      {
        title: 'ペイロードマニフェスト',
        children: [
          {
            title: 'ペイロードマニフェストの説明',
            href: '/docs/ja/golem/payload-manifest',
          },
          {
            title: 'スキーマ',
            href: '/docs/ja/golem/payload-manifest/computation-payload-manifest.schema',
          },
        ],
      },
      {
        title: 'Golem移行アプリケーション',
        children: [
          {
            title: '移行の利用規約',
            href: '/docs/ja/golem/migrate/terms',
          },
          {
            title: '移行ガイドライン',
            href: '/docs/ja/golem/migrate/guideline',
          },
        ],
      },
      { title: '利用規約', href: '/docs/ja/golem/terms' },
    ],
  },
]
